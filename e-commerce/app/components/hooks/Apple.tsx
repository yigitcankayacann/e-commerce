"use client";

import React from "react";
import { Carousel, Card } from "../ui/apple-cards-carousel";
// Örnek görsel importları
import Image4 from "@/app/assets/fotograflar/helva4.jpg";
import Image5 from "@/app/assets/fotograflar/helva5.jpg";
import Image6 from "@/app/assets/fotograflar/helva6.jpg";
import Image7 from "@/app/assets/fotograflar/helva7.jpg";
import Image8 from "@/app/assets/fotograflar/helva8.jpg";
import Image9 from "@/app/assets/fotograflar/helva9.jpg";

export function Apple() {
    // Kart verilerini tipli bir dizi olarak tanımlayabilirsiniz.
    const data = [
        {
            title: "Çikolatalı Helva",
            category: "Çikolatalı Ürünler",
            src: Image4.src,
            link: "/urunler/helva/helvaDetail/sadeHelva",
        },
        {
            title: "Fıstıklı Helva",
            category: "Klasik Ürünler",
            src: Image5.src,
            link: "/urunler/helva/helvaDetail/kakaoluHelva",
        },
        {
            title: "Vanilyalı Helva",
            category: "Aromalı Ürünler",
            src: Image6.src,
            link: "/urunler/helva/helvaDetail/findikliHelva",
        },
        {
            title: "Çikolatalı Helva",
            category: "Çikolatalı Ürünler",
            src: Image7.src,
            link: "/urunler/helva/helvaDetail/sadeHelva",
        },
        {
            title: "Fıstıklı Helva",
            category: "Klasik Ürünler",
            src: Image8.src,
            link: "/urunler/helva/helvaDetail/sadeHelva",
        },
        {
            title: "Vanilyalı Helva",
            category: "Aromalı Ürünler",
            src: Image9.src,
            link: "/urunler/helva/helvaDetail/sadeHelva",
        },
    ];

    // Card bileşenlerini üretiyoruz
    const cards = data.map((item, index) => (
        <Card key={index} card={item} layout />
    ));

    return (
        <div className="w-full h-full py-10 md:py-20 px-4 md:px-8">
            <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
                Yeni ürünler.
            </h2>
            <Carousel items={cards} />
        </div>
    );
}

export default Apple;
