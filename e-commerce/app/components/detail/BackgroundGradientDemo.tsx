"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import Image from "next/image";
import { BsFillBasket2Fill } from "react-icons/bs";
import { Modal, ModalTrigger } from "@/app/components/ui/SepeteEkleButonu";
import { useCart } from "../../context/CartContext"; // useCart import
import { notification } from "antd"; // Ant Design'dan gerekli bileşenler

// Prop'ların tipini tanımlıyoruz
type BackgroundGradientDemoProps = {
    title: string;
    price: number | string;
    category: string;
    ingredients: string;
    imageSrc: string;
};

export function BackgroundGradientDemo({
                                           title,
                                           price,
                                           category,
                                           ingredients,
                                           imageSrc,
                                       }: BackgroundGradientDemoProps) {
    const { addToCart } = useCart(); // useCart'tan addToCart fonksiyonunu alıyoruz
    const [api, contextHolder] = notification.useNotification(); // Ant Design notification API'si

    // Ürünü sepete ekle butonuna tıklanınca çalışacak fonksiyon
    const handleAddToCart = () => {
        try {
            const product = { title, price, category, ingredients };
            addToCart(product);
            openNotification("success", "Ürün başarıyla sepete eklendi.");
        } catch {
            openNotification("error", "Ürün sepete eklenemedi.");
        }
    };

    // Bildirimleri açan fonksiyon
    const openNotification = (type: string, message: string) => {
        api.info({
            message: message, // Bildirim başlığı
            description:
                type === "success" ? "" : "Ürün sepete eklenemedi. Lütfen tekrar deneyin.",
            placement: "bottomRight", // Sağ alt köşede gösterilecek
            duration: 4, // 4 saniye sonra kaybolacak
        });
    };

    return (
        <div className="container mx-auto px-4 py-10 mt-40 flex justify-center">
            {contextHolder} {/* Notification API'nin çalışması için gerekli */}
            <div className="flex flex-col lg:flex-row items-start">
                {/* Sol: Ürün Resmi */}
                <div className="w-full lg:w-auto max-w-[500px] mb-10 lg:mb-0">
                    {/*
            Burada BackgroundGradient bileşenini kullanıyoruz.
            containerClassName opsiyonel olduğu için girmeseniz de sorun olmaz.
          */}
                    <BackgroundGradient className="rounded-[22px] bg-white dark:bg-zinc-900">
                        <Image
                            src={imageSrc}
                            alt={title}
                            className="w-full h-auto object-cover rounded-[22px]"
                        />
                    </BackgroundGradient>
                </div>

                {/* Sağ: Ürün Bilgisi ve Sepete Ekle Butonu */}
                <div className="flex-1 lg:pl-10 text-left">
                    <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                        {title}
                    </h1>
                    <p className="text-3xl text-black mb-4">{price} TL</p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                        Kategori: {category}
                    </p>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">
                        <p>İçindekiler: {ingredients}</p>
                        <br />
                    </div>

                    {/* Sepete Ekle Butonu */}
                    <Modal>
                        <ModalTrigger
                            onClick={handleAddToCart} // handleAddToCart fonksiyonunu çağırıyoruz
                            className="bg-white text-black px-4 py-2 rounded-md border border-black transition duration-500 flex justify-center group/modal-btn ml-0"
                        >
              <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                Sepete Ekle
              </span>
                            <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-black z-20">
                                <BsFillBasket2Fill className="text-black h-6 w-6" />
                            </div>
                        </ModalTrigger>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default BackgroundGradientDemo;
