"use client";

import React, { useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../lib/utils"; // Projenizde 'cn' helper'ınızı içe aktardığınız yeri düzenleyin.

// Bileşene ait prop tipleri
interface DirectionAwareHoverProps {
    /** Gösterilecek görsel (örnek: import HelvaResim from "...") veya string URL */
    imageUrl: StaticImageData | string;
    /** İçerik olarak geçilecek React bileşenleri (örn: <p>title</p>) */
    children: React.ReactNode;
    /** İçerik alanına özel className */
    childrenClassName?: string;
    /** <Image/> etiketine özel className */
    imageClassName?: string;
    /** Dış <motion.div> bileşenine eklenecek ek className */
    className?: string;
}

export const DirectionAwareHover: React.FC<DirectionAwareHoverProps> = ({
                                                                            imageUrl,
                                                                            children,
                                                                            childrenClassName,
                                                                            imageClassName,
                                                                            className,
                                                                        }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [direction, setDirection] = useState<"top" | "bottom" | "left" | "right">("left");

    // Fare kartın üzerine girerken tetiklenecek
    const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!ref.current) return;

        const dir = getDirection(event, ref.current);
        switch (dir) {
            case 0:
                setDirection("top");
                break;
            case 1:
                setDirection("right");
                break;
            case 2:
                setDirection("bottom");
                break;
            case 3:
            default:
                setDirection("left");
                break;
        }
    };

    // Fare konumuna göre hangi yönden girdiğini hesaplayan fonksiyon
    const getDirection = (ev: React.MouseEvent<HTMLDivElement>, obj: HTMLDivElement) => {
        const { width: w, height: h, left, top } = obj.getBoundingClientRect();
        const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
        const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
        // 0: top, 1: right, 2: bottom, 3: left
        const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
        return d;
    };

    return (
        <motion.div
            ref={ref}
            onMouseEnter={handleMouseEnter}
            className={cn(
                "group/card relative w-60 h-60 md:w-96 md:h-96 bg-transparent rounded-lg overflow-hidden",
                className
            )}
        >
            <AnimatePresence mode="wait">
                <motion.div
                    className="relative h-full w-full"
                    initial="initial"
                    whileHover={direction}
                    exit="exit"
                >
                    {/* Üstteki karartı */}
                    <motion.div className="group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500" />

                    {/* Görsel */}
                    <motion.div
                        variants={variants}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="h-full w-full relative bg-gray-50 dark:bg-black"
                    >
                        <Image
                            alt="image"
                            src={imageUrl}
                            width={1000}
                            height={1000}
                            className={cn("h-full w-full object-cover scale-[1.15]", imageClassName)}
                        />
                    </motion.div>

                    {/* Metin (Başlık ve fiyat vs.) */}
                    <motion.div
                        variants={textVariants}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className={cn("text-white absolute bottom-4 left-4 z-40", childrenClassName)}
                    >
                        {children}
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
};

// Hareketin yönüne göre görselin kayma animasyonları
const variants = {
    initial: {
        x: 0,
        y: 0,
    },
    exit: {
        x: 0,
        y: 0,
    },
    top: {
        y: 20,
    },
    bottom: {
        y: -20,
    },
    left: {
        x: 20,
    },
    right: {
        x: -20,
    },
};

// Metnin gireceği animasyonlar
const textVariants = {
    initial: {
        y: 0,
        x: 0,
        opacity: 0,
    },
    exit: {
        y: 0,
        x: 0,
        opacity: 0,
    },
    top: {
        y: -20,
        opacity: 1,
    },
    bottom: {
        y: 2,
        opacity: 1,
    },
    left: {
        x: -2,
        opacity: 1,
    },
    right: {
        x: 20,
        opacity: 1,
    },
};

export default DirectionAwareHover;
