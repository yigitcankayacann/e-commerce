"use client";

import React from "react";
import { FlipWords } from "../ui/flip-words";

// Bu bileşende kullanacağımız prop'lar
interface FlipWordsDemoProps {
    /** Döndürülmesini istediğimiz kelimeler/kısa cümleler dizisi */
    words: string[];
    /** Kullanıcılara gösterilecek ek bir cümle */
    sentence: string;
}

export function FlipWordsDemo({ words, sentence }: FlipWordsDemoProps) {
    return (
        <div className="flex justify-center items-center px-4 md:mt-40 mt-28">
            <div className="text-2xl md:text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
                {/* Örnek: "Acı, tatlı ve..." vb. */}
                {sentence}
                <FlipWords words={words} />
                <br />
                lezzetini bir arada yaşayın.
            </div>
        </div>
    );
}

export default FlipWordsDemo;
