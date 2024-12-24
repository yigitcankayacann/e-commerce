"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/images-slider";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
import Image11 from "@/app/assets/fotograflar/helvaWallpaper1.jpg";
import Image12 from "@/app/assets/fotograflar/helvaWallpaper2.jpg";
import Image13 from "@/app/assets/fotograflar/helvaWallpaper3.jpg";

export function ImagesSliderDemo() {
    const images = [Image11.src, Image12.src, Image13.src];

    const placeholders = [
        "Tahin helvası çeşitleri",
        "Özel üretim helvalar",
        "El yapımı tahin helvaları",
        "Hediyelik Helva  setleri",

    ];

    const handleChange = (e) => {
        console.log(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("submitted");
    };

    return (
        <ImagesSlider className="h-[75vh] flex flex-col" images={images}>
            <motion.div
                initial={{ opacity: 0, y: -80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="z-40 flex flex-col justify-center items-center h-full space-y-32"
            >
                <motion.p
                    className="font-bold text-3xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-200 py-2 md:py-4 mx-auto max-w-screen-md"
                    style={{ textShadow: "0 0 10px rgba(0, 0, 0, 0.5)" }}
                >
                    Yüzyılı aşkın tecrübe ile <br /> tahin helvaları
                </motion.p>

                {/* Arama bileşeninizi burada çağırın ve genişliği ayarlayın */}
                <PlaceholdersAndVanishInput
                    placeholders={placeholders}
                    onChange={handleChange}
                    onSubmit={onSubmit}
                />
            </motion.div>
        </ImagesSlider>
    );
}

export default ImagesSliderDemo;
