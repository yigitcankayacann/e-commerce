import React, {
    useEffect,
    useState,
    useRef,
    useCallback,
} from "react";
import { cn } from "../../lib/utils";

type TestimonialItem = {
    quote: string;
    name: string;
    title: string;
};

type InfiniteMovingCardsProps = {
    items: TestimonialItem[];              // testimonial veri türü
    direction?: "left" | "right";          // varsayılan "left"
    speed?: "fast" | "normal" | "slow";    // varsayılan "fast"
    pauseOnHover?: boolean;                // varsayılan true
    className?: string;                    // opsiyonel className
};

export function InfiniteMovingCards({
                                        items,
                                        direction = "left",
                                        speed = "fast",
                                        pauseOnHover = true,
                                        className,
                                    }: InfiniteMovingCardsProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollerRef = useRef<HTMLUListElement>(null);
    const [start, setStart] = useState(false);

    // ✅ Yönü ayarlama fonksiyonu
    const getDirection = useCallback(() => {
        if (!containerRef.current) return;
        const animationDirection = direction === "left" ? "forwards" : "reverse";
        containerRef.current.style.setProperty(
            "--animation-direction",
            animationDirection
        );
    }, [direction]);

    // ✅ Hızı ayarlama fonksiyonu
    const getSpeed = useCallback(() => {
        if (!containerRef.current) return;
        let animationDuration: string;
        if (speed === "fast") {
            animationDuration = "20s";
        } else if (speed === "normal") {
            animationDuration = "40s";
        } else {
            animationDuration = "80s";
        }
        containerRef.current.style.setProperty("--animation-duration", animationDuration);
    }, [speed]);

    // ✅ Animasyon ekleme fonksiyonu
    const addAnimation = useCallback(() => {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            // Elemanları kopyalayarak animasyonu sonsuza kadar uzatıyoruz
            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                scrollerRef.current?.appendChild(duplicatedItem);
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }, [getDirection, getSpeed]);

    useEffect(() => {
        addAnimation();
    }, [addAnimation]);

    return (
        <div
            ref={containerRef}
            className={cn(
                // Zorunlu class'lar
                "scroller relative z-20 max-w-7xl overflow-hidden",
                // "mask-image" ile sonsuz kaydırma efekti
                "[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                // Opsiyonel className
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex min-w-full shrink-0 gap-4 py-8 w-max flex-nowrap",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item, idx) => (
                    <li
                        className="w-[350px] md:w-[450px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6"
                        style={{
                            background: "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
                        }}
                        key={idx}
                    >
                        <blockquote>
                            <div
                                aria-hidden="true"
                                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                            ></div>
                            <span className="relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                {item.quote}
              </span>
                            <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                    {item.name}
                  </span>
                  <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                    {item.title}
                  </span>
                </span>
                            </div>
                        </blockquote>
                    </li>
                ))}
            </ul>
        </div>
    );
}
