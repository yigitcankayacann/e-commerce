"use client";

import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../lib/utils"; // Projenizde 'cn' helper'ını içe aktardığınız dosyayı düzenleyin.

// Bileşen prop'ları için TypeScript arayüzü
interface FlipWordsProps {
    /** Döndürülecek kelimeler/kısa cümleler dizisi */
    words: string[];
    /** Her kelimenin ne kadar sürede değişeceği (ms cinsinden, varsayılan 1750) */
    duration?: number;
    /** Ek CSS className (opsiyonel) */
    className?: string;
}

export const FlipWords: React.FC<FlipWordsProps> = ({
                                                        words,
                                                        duration = 1750,
                                                        className,
                                                    }) => {
    const [currentWord, setCurrentWord] = useState(words[0]);
    const [isAnimating, setIsAnimating] = useState(false);

    // Bir sonraki kelimeye geçişi tetikleyen fonksiyon
    const startAnimation = useCallback(() => {
        // Dizideki currentWord'ün index'ini bulur, bir sonrakine geçer, yoksa başa döner
        const nextWord = words[words.indexOf(currentWord) + 1] || words[0];
        setCurrentWord(nextWord);
        setIsAnimating(true);
    }, [currentWord, words]);

    useEffect(() => {
        // Animasyon tamamlanmadıysa setTimeout ile kelimeyi değiştir
        if (!isAnimating) {
            const timer = setTimeout(() => {
                startAnimation();
            }, duration);

            return () => clearTimeout(timer);
        }
    }, [isAnimating, duration, startAnimation]);

    return (
        <AnimatePresence
            onExitComplete={() => {
                setIsAnimating(false);
            }}
        >
            <motion.div
                key={currentWord}
                initial={{
                    opacity: 0,
                    y: 10,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                }}
                exit={{
                    opacity: 0,
                    y: -40,
                    x: 40,
                    filter: "blur(8px)",
                    scale: 2,
                    position: "absolute",
                }}
                className={cn(
                    "z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 px-2",
                    className
                )}
            >
                {/* Burada 'currentWord' parçalanıp, harf harf animasyon ekleniyor */}
                {currentWord.split(" ").map((word, wordIndex) => (
                    <motion.span
                        key={word + wordIndex}
                        initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{
                            delay: wordIndex * 0.3,
                            duration: 0.3,
                        }}
                        className="inline-block whitespace-nowrap"
                    >
                        {word.split("").map((letter, letterIndex) => (
                            <motion.span
                                key={word + letterIndex}
                                initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                transition={{
                                    delay: wordIndex * 0.3 + letterIndex * 0.05,
                                    duration: 0.2,
                                }}
                                className="inline-block"
                            >
                                {letter}
                            </motion.span>
                        ))}
                        <span className="inline-block">&nbsp;</span>
                    </motion.span>
                ))}
            </motion.div>
        </AnimatePresence>
    );
};

export default FlipWords;
