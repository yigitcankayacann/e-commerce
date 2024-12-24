"use client";
import { cn } from "../../lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState, useCallback } from "react";

export const ImagesSlider = ({
                                 images,
                                 children,
                                 overlay = true,
                                 overlayClassName,
                                 className,
                                 autoplay = true,
                                 direction = "up"
                             }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loadedImages, setLoadedImages] = useState([]);

    // ✅ Sonraki resme geçiş fonksiyonu
    const handleNext = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 1 === images.length ? 0 : prevIndex + 1
        );
    }, [images.length]);

    // ✅ Önceki resme geçiş fonksiyonu
    const handlePrevious = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
        );
    }, [images.length]);

    // ✅ Resimleri yükleme fonksiyonu
    const loadImages = useCallback(() => {
        const loadPromises = images.map((image) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = image;
                img.onload = () => resolve(image);
                img.onerror = reject;
            });
        });

        Promise.all(loadPromises)
            .then((loadedImages) => {
                setLoadedImages(loadedImages);
            })
            .catch((error) => console.error("Failed to load images", error));
    }, [images]);

    // ✅ Resimleri yükle
    useEffect(() => {
        loadImages();
    }, [loadImages]);

    // ✅ Klavye ve otomatik oynatma işlemleri
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "ArrowRight") {
                handleNext();
            } else if (event.key === "ArrowLeft") {
                handlePrevious();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        let interval;
        if (autoplay) {
            interval = setInterval(() => {
                handleNext();
            }, 5000);
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            clearInterval(interval);
        };
    }, [autoplay, handleNext, handlePrevious]);

    // ✅ Animasyon varyantları
    const slideVariants = {
        initial: {
            scale: 0,
            opacity: 0,
            rotateX: 45,
        },
        visible: {
            scale: 1,
            rotateX: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: [0.645, 0.045, 0.355, 1.0],
            },
        },
        upExit: {
            opacity: 1,
            y: "-150%",
            transition: {
                duration: 1,
            },
        },
        downExit: {
            opacity: 1,
            y: "150%",
            transition: {
                duration: 1,
            },
        },
    };

    const areImagesLoaded = loadedImages.length > 0;

    return (
        <div
            className={cn(
                "overflow-hidden h-full w-full relative flex items-center justify-center",
                className
            )}
            style={{
                perspective: "1000px",
            }}
        >
            {areImagesLoaded && (
                <AnimatePresence>
                    <motion.img
                        key={currentIndex}
                        src={loadedImages[currentIndex]}
                        initial="initial"
                        animate="visible"
                        exit={direction === "up" ? "upExit" : "downExit"}
                        variants={slideVariants}
                        className="image h-full w-full absolute inset-0 object-cover object-center z-10"
                    />
                </AnimatePresence>
            )}
            {areImagesLoaded && overlay && (
                <div className={cn("absolute inset-0 bg-black/60 z-10", overlayClassName)} />
            )}
            {areImagesLoaded && children}
        </div>
    );
};
