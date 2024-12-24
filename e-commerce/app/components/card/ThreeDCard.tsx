"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { useRouter } from "next/navigation";

// ✅ Prop Türü Tanımı
type ThreeDCardProps = {
    title: string;
    description: string;
    description2?: string; // Opsiyonel olabilir
    image: string | StaticImageData; // Burada union tipi kullandık
    link: string;
};

export function ThreeDCard({
                               title,
                               description,
                               description2,
                               image,
                               link,
                           }: ThreeDCardProps) {
    const router = useRouter(); // useRouter hook'unu ekliyoruz

    // Sepete Ekle butonuna tıklandığında yönlendirme yapacak fonksiyon
    const handleDetailRedirect = () => {
        router.push(link);
    };

    return (
        <CardContainer
            // ✅ containerClassName zorunlu olduğu için ekledik
            containerClassName="relative w-full max-w-lg mx-auto"
            className="inter-var -mb-32 md:-mb-24 lg:-mb-8"
        >
            <CardBody
                className="
                    bg-gray-50
                    relative
                    group/card
                    dark:hover:shadow-2xl
                    dark:hover:shadow-emerald-500/[0.1]
                    dark:bg-black
                    dark:border-white/[0.2]
                    border-black/[0.1]
                    w-full
                    max-w-sm
                    sm:max-w-md
                    md:max-w-lg
                    lg:max-w-xl
                    h-auto
                    rounded-xl
                    p-4
                    md:p-6
                    border
                "
            >
                {/* Başlık */}
                <CardItem
                    translateZ={50} // ✅ Sayı olarak değer atandı
                    className="text-lg md:text-xl font-bold text-neutral-600 dark:text-white"
                >
                    {title}
                </CardItem>

                {/* Açıklama */}
                <CardItem
                    as="p"
                    translateZ={60} // ✅ Sayı olarak değer atandı
                    className="
                        text-neutral-500
                        text-sm
                        md:text-base
                        max-w-xs
                        md:max-w-sm
                        lg:max-w-md
                        mt-2
                        dark:text-neutral-300
                    "
                >
                    {description}
                </CardItem>

                {/* Opsiyonel İkinci Açıklama */}
                {description2 && (
                    <CardItem
                        as="p"
                        translateZ={60} // ✅ Sayı olarak değer atandı
                        className="
                            text-neutral-500
                            text-sm
                            md:text-base
                            max-w-xs
                            md:max-w-sm
                            lg:max-w-md
                            mt-1
                            dark:text-neutral-300
                        "
                    >
                        {description2}
                    </CardItem>
                )}

                {/* Görsel */}
                <CardItem translateZ={100} className="w-full mt-4">
                    <Image
                        src={image}
                        onClick={handleDetailRedirect}
                        height={1000}
                        width={1000}
                        className="
                            h-40
                            md:h-48
                            lg:h-60
                            w-full
                            object-cover
                            rounded-xl
                            group-hover/card:shadow-xl
                            cursor-pointer
                        "
                        alt="thumbnail"
                    />
                </CardItem>

                {/* İncele Butonu */}
                <div className="flex flex-col md:flex-row justify-between items-center mt-10 md:mt-20 gap-2 md:gap-4">
                    <CardItem
                        translateZ={20} // ✅ Sayı olarak değer atandı
                        as="button"
                        onClick={handleDetailRedirect}
                        className="
                            px-4
                            py-2
                            rounded-md
                            border
                            border-neutral-300
                            bg-neutral-100
                            text-neutral-500
                            text-sm
                            hover:-translate-y-1
                            transform
                            transition
                            duration-200
                            hover:shadow-md
                        "
                    >
                        İncele
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
}

export default ThreeDCard;
