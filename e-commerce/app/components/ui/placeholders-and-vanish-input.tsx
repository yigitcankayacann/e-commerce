"use client";

import React, {
    useCallback,
    useEffect,
    useRef,
    useState,
    FormEvent,
    KeyboardEvent,
} from "react";
import { AnimatePresence, motion } from "framer-motion";

// Canvas üzerinde tutacağımız piksel verisi tipi
type PixelData = {
    x: number;
    y: number;
    r: number;
    color: string;
};

interface PlaceholdersAndVanishInputProps {
    placeholders: string[];
    onSubmit?: (e: FormEvent) => void;
    // İstersen onChange vb. de ekleyebilirsin
}

export function PlaceholdersAndVanishInput({
                                               placeholders,
                                               onSubmit,
                                           }: PlaceholdersAndVanishInputProps) {
    // ----------------------------------
    // State & Refs
    // ----------------------------------
    const [value, setValue] = useState("");
    const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
    const [animating, setAnimating] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const newDataRef = useRef<PixelData[]>([]);

    // Interval ref'i (placeholder animasyonu)
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    // ----------------------------------
    // Placeholder Döndürme Mantığı
    // ----------------------------------
    const startPlaceholderAnimation = useCallback(() => {
        // 3sn'de bir placeholder değiştir
        intervalRef.current = setInterval(() => {
            setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
        }, 3000);
    }, [placeholders]);

    const handleVisibilityChange = useCallback(() => {
        // Sekme görünürlüğü değişince interval durdur / tekrar başlat
        if (document.visibilityState !== "visible" && intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        } else if (document.visibilityState === "visible") {
            startPlaceholderAnimation();
        }
    }, [startPlaceholderAnimation]);

    // useEffect ile placeholder animasyonu başlatıyoruz
    useEffect(() => {
        startPlaceholderAnimation();
        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, [startPlaceholderAnimation, handleVisibilityChange]);

    // ----------------------------------
    // Canvas Üzerine Yazı Çizim Fonksiyonu
    // ----------------------------------
    const draw = useCallback(() => {
        if (!inputRef.current) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = 800;
        canvas.height = 800;
        ctx.clearRect(0, 0, 800, 800);

        // Input'un CSS stillerini okuyarak aynı font'u canvas'a uyguluyoruz
        const computedStyles = getComputedStyle(inputRef.current);
        const fontSize = parseFloat(computedStyles.getPropertyValue("font-size"));
        const fontFamily = computedStyles.getPropertyValue("font-family");

        ctx.font = `${fontSize * 2}px ${fontFamily}`;
        ctx.fillStyle = "#FFF";
        ctx.fillText(value, 16, 40);

        // Canvas'taki piksel verisini alıp, yazıdaki piksel koordinatlarını yakalıyoruz
        const imageData = ctx.getImageData(0, 0, 800, 800);
        const pixelData = imageData.data;
        const newData: PixelData[] = [];

        // Piksel verisini tarayıp, beyaz piksel (RGB != 0) ise listeye ekliyoruz
        for (let t = 0; t < 800; t++) {
            const i = 4 * t * 800;
            for (let n = 0; n < 800; n++) {
                const e = i + 4 * n;
                // RGB(0,0,0) değilse -> harfin bir parçası
                if (
                    pixelData[e] !== 0 ||
                    pixelData[e + 1] !== 0 ||
                    pixelData[e + 2] !== 0
                ) {
                    // Renk: `rgba(...)`
                    const color = `rgba(${pixelData[e]}, ${pixelData[e + 1]}, ${pixelData[e + 2]}, ${pixelData[e + 3]})`;
                    newData.push({
                        x: n,
                        y: t,
                        r: 1, // piksel boyutu
                        color,
                    });
                }
            }
        }
        newDataRef.current = newData;
    }, [value]);

    // value her değiştiğinde canvas'ı yeniden çiz
    useEffect(() => {
        draw();
    }, [value, draw]);

    // ----------------------------------
    // Yazı Vanish (Piksel Animasyonu)
    // ----------------------------------
    const animate = (startX: number) => {
        const animateFrame = (pos = 0) => {
            requestAnimationFrame(() => {
                const newArr: PixelData[] = [];
                // Tüm pikselleri gez
                for (let i = 0; i < newDataRef.current.length; i++) {
                    const current = newDataRef.current[i];
                    // x < pos ise, piksel ekranda değil -> push
                    if (current.x < pos) {
                        newArr.push(current);
                    } else {
                        // Yavaş yavaş kaybolma / dağılma
                        if (current.r <= 0) {
                            current.r = 0;
                            continue;
                        }
                        current.x += Math.random() > 0.5 ? 1 : -1;
                        current.y += Math.random() > 0.5 ? 1 : -1;
                        current.r -= 0.05 * Math.random();
                        newArr.push(current);
                    }
                }
                newDataRef.current = newArr;

                // Canvas'ı temizleyip pikselleri tekrar çiz
                const ctx = canvasRef.current?.getContext("2d");
                if (ctx) {
                    ctx.clearRect(pos, 0, 800, 800);
                    newDataRef.current.forEach((pix) => {
                        const { x, y, r, color } = pix;
                        if (x > pos) {
                            ctx.beginPath();
                            ctx.rect(x, y, r, r);
                            ctx.fillStyle = color;
                            ctx.strokeStyle = color;
                            ctx.stroke();
                        }
                    });
                }

                // Hala piksel kaldıysa animasyon devam etsin
                if (newDataRef.current.length > 0) {
                    animateFrame(pos - 8);
                } else {
                    // Animasyon bittiğinde input'u temizleyelim
                    setValue("");
                    setAnimating(false);
                }
            });
        };
        animateFrame(startX);
    };

    const vanishAndSubmit = () => {
        setAnimating(true);
        draw();
        const val = inputRef.current?.value || "";
        if (val && inputRef.current) {
            // x'i en büyük olan pikseli bul -> oradan başlayarak geriye doğru "kaybol"
            const maxX = newDataRef.current.reduce(
                (prev, current) => (current.x > prev ? current.x : prev),
                0
            );
            animate(maxX);
        }
    };

    // ----------------------------------
    // Submit & Enter
    // ----------------------------------
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!animating) {
            vanishAndSubmit();
            onSubmit?.(e);
        }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && !animating) {
            vanishAndSubmit();
        }
    };

    // ----------------------------------
    // Render
    // ----------------------------------
    return (
        <form
            onSubmit={handleSubmit}
            className="
        w-full relative max-w-xl mx-auto
        bg-white dark:bg-zinc-800
        h-12 rounded-full overflow-hidden
        shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),
                0px_1px_0px_0px_rgba(25,28,33,0.02),
                0px_0px_0px_1px_rgba(25,28,33,0.08)]
        transition duration-200
      "
        >
            {/* Canvas */}
            <canvas
                ref={canvasRef}
                className={`
          absolute pointer-events-none text-base transform scale-50 
          top-[20%] left-2 sm:left-8 origin-top-left 
          filter invert dark:invert-0 
          pr-20
          ${animating ? "opacity-100" : "opacity-0"}
        `}
            />
            {/* Input */}
            <input
                type="text"
                ref={inputRef}
                value={value}
                onChange={(e) => {
                    // Animasyon sırasında yazıyı değiştirmeyi engelliyoruz
                    if (!animating) setValue(e.target.value);
                }}
                onKeyDown={handleKeyDown}
                className={`
          w-full relative text-sm sm:text-base z-50 
          border-none bg-transparent h-full rounded-full 
          focus:outline-none focus:ring-0 pl-4 sm:pl-10 pr-20
          text-black dark:text-white
          ${animating ? "text-transparent dark:text-transparent" : ""}
        `}
                placeholder="" // Boş bırakıyoruz, AnimatePresence’tan placeholder gelecek
            />

            {/* Gönder Butonu */}
            <button
                disabled={!value}
                type="submit"
                className="
          absolute right-2 top-1/2 z-50 -translate-y-1/2
          h-8 w-8 rounded-full
          disabled:bg-gray-100
          bg-black dark:bg-zinc-900
          dark:disabled:bg-zinc-800
          transition duration-200
          flex items-center justify-center
        "
            >
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-300 h-4 w-4"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <motion.path
                        d="M5 12l14 0"
                        initial={{ strokeDasharray: "50%", strokeDashoffset: "50%" }}
                        animate={{ strokeDashoffset: value ? 0 : "50%" }}
                        transition={{ duration: 0.3, ease: "linear" }}
                    />
                    <path d="M13 18l6 -6" />
                    <path d="M13 6l6 6" />
                </motion.svg>
            </button>

            {/* Placeholder Metinleri (AnimatePresence) */}
            <div className="absolute inset-0 flex items-center rounded-full pointer-events-none">
                <AnimatePresence mode="wait">
                    {/* Eğer input boşsa placeholder göster */}
                    {!value && (
                        <motion.p
                            key={`placeholder-${currentPlaceholder}`}
                            initial={{ y: 5, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -5, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "linear" }}
                            className="
                dark:text-zinc-500
                text-sm sm:text-base
                font-normal text-neutral-500
                pl-4 sm:pl-12 text-left
                w-[calc(100%-2rem)] truncate
              "
                        >
                            {placeholders[currentPlaceholder]}
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>
        </form>
    );
}
