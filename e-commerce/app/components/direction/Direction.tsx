"use client";

import React from "react";
import Image2 from "@/app/assets/fotograflar/helva2.jpg";
import Image3 from "@/app/assets/fotograflar/helva3.jpg";
import Image10 from "@/app/assets/fotograflar/helva10.jpg";
import Image7 from "@/app/assets/fotograflar/helva7.jpg";

import { DirectionAwareHover } from "../ui/direction-aware-hover";

export function DirectionAwareHoverDemo() {
    // Ürünleri liste olarak tanımlıyoruz
    const hoverItems = [
        {
            imageUrl: Image2,
            title: "Tahin Helvası",
            price: "300 TL / 1kg",
            link: "/urunler/helva/helvaDetail/sadeHelva",
        },
        {
            imageUrl: Image3,
            title: "Kakao Tahin",
            price: "350 TL / 1kg",
            link: "/urunler/helva/helvaDetail/findikliHelva",
        },
        {
            imageUrl: Image7,
            title: "Bal",
            price: "400 TL / 1kg",
            link: "/urunler/helva/helvaDetail/kakaoluHelva",
        },
        {
            imageUrl: Image10,
            title: "Tahin Helvası 2",
            price: "320 TL / 1kg",
            link: "/urunler/helva/helvaDetail/sadeHelva",
        },
    ];

    return (
        <div className="w-full max-w-6xl mx-auto py-10">
            {/* Başlık */}
            <div className="mb-8">
                <h2 className="max-w-7xl pl-20 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
                    Çok Satan Ürünler.
                </h2>
            </div>

            {/* Ürün Listesi */}
            <div className="w-full max-w-5xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {hoverItems.map((item, index) => (
                    <a
                        key={index}
                        href={item.link} // Tıklanabilir yapmak için link ekleniyor
                        className="flex items-center justify-center w-full h-auto"
                    >
                        <DirectionAwareHover
                            imageUrl={item.imageUrl}
                            className="w-52 h-52 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover"
                        >
                            {/* İçerik: Başlık ve Fiyat */}
                            <p className="font-bold text-lg md:text-xl text-white">{item.title}</p>
                            <p className="font-normal text-xs md:text-sm text-white">{item.price}</p>
                        </DirectionAwareHover>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default DirectionAwareHoverDemo;
