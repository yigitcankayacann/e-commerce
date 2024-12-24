// components/ThreeDCardDemo.js
"use client";

import React from "react";
import ThreeDCard from "./ThreeDCard";
import Image1 from "@/app/assets/fotograflar/helva1.jpg";
import Image2 from "@/app/assets/fotograflar/helva2.jpg";
import Image3 from "@/app/assets/fotograflar/helva3.jpg";
import Image8 from "@/app/assets/fotograflar/helva8.jpg";


export function ThreeDCardDemo() {
    const cards = [
        {
            title: "Helva Çeşitleri",
            description: "Doğal ve Lezzetli Helva Çeşitleri",
            description2: "İçindekiler: Tahin, bal, ceviz, fıstık, kakao, badem, vanilya özütü.",
            image: Image1,
            link: "/urunler/helva" ,
        },
        {
            title: "Bal/Hardaliye",
            description: "Doğanın Saf ve Tatlı Şifası",
            description2: "İçindekiler: Doğal çiçek balı, hardaliye, üzüm özü, nar pekmezi, polen, propolis.",
            image: Image2,
            link: "/urunler/bal",
        },
        {
            title: "Tahin/Pekmez",
            description: "Besleyici ve Lezzet Dolu Tahin & Pekmez",
            description2: "İçindekiler: Doğal tahin, üzüm pekmezi, dut pekmezi.",
            image: Image3,
            link: "/urunler/tahin",
        },
        {
            title: "Lokum/Şekerleme",
            description: "Tatlı Kaçamaklar, Eşsiz Şekerleme Lezzetleri\n",
            description2: "İçindekiler: Doğal meyve özleri, fındık, ceviz, gül suyu.",
            image: Image8,
            link: "/urunler/lokum",
        },
    ];

    return (
        // Alt boşluk eklemek için pb (padding-bottom) ekleniyor
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-y-6 gap-x-4 md:gap-y-8 md:gap-x-6 lg:gap-y-10 lg:gap-x-8 justify-items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 pb-8 md:pb-12 lg:pb-16">
            {cards.map((card, index) => (
                <ThreeDCard
                    key={index}
                    title={card.title}
                    description={card.description}
                    description2={card.description2}
                    image={card.image}
                    link={card.link}
                />
            ))}
        </div>
    );
}

export default ThreeDCardDemo;
