"use client";
import React from "react";
import BackgroundGradientDemo from "@/app/components/detail/BackgroundGradientDemo";
import ImageHelva3 from "@/app/assets/fotograflar/helva3.jpg";
import { useCart } from "@/app/context/CartContext";

const TahinClient = () => {
    const { addToCart } = useCart();

    const productData = {
        title: "Tahin",
        price: 130,
        category: "Tahin",
        ingredients: "Susam ve yer fıstığının zengin karışımı",
        imageSrc: ImageHelva3,
        quantity: 1,
    };

    const handleAddToCart = () => {
        addToCart(productData);
    };

    return (
        <div>
            <BackgroundGradientDemo
                {...productData}
                onAddToCart={handleAddToCart}
            />
        </div>
    );
};

export default TahinClient;