"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../hooks/use-outside-click-sepet";
import QuantitySelector from "@/app/sepet/QuantitySelector";
import { useCart } from "../../context/CartContext";
import Image1 from "@/app/assets/fotograflar/helva1.jpg";
import Image2 from "@/app/assets/fotograflar/helva2.jpg";
import Image3 from "@/app/assets/fotograflar/helva3.jpg";
import Image4 from "@/app/assets/fotograflar/helva4.jpg";
import Image5 from "@/app/assets/fotograflar/helva5.jpg";
import Image6 from "@/app/assets/fotograflar/helva6.jpg";
import Image7 from "@/app/assets/fotograflar/helva7.jpg";
import Image8 from "@/app/assets/fotograflar/helva8.jpg";
import ClientOnly from "@/app/components/ClientOnly";

// Close Icon Component
export const CloseIcon = () => {
    return (
        <motion.svg
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.05 } }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-black"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    );
};

export function OzetComponent({ totalPrice }) {
    return (
        <div className="w-full md:w-1/3 p-4 bg-gray-50 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Özet</h2>
            <div className="flex justify-between mb-2">
                <span>Ara Toplam</span>
                <span>{totalPrice} TL</span>
            </div>
            <div className="flex justify-between mb-2">
                <span>Tahmini Kargo ve İşlem Ücreti</span>
                <span>Ücretsiz</span>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between font-bold text-lg mb-4">
                <span>Toplam</span>
                <span>{totalPrice} TL</span>
            </div>
            <button className="w-full py-3 mb-2 text-white bg-black rounded-lg font-semibold">
                Misafir Kullanıcı Olarak Ödeme
            </button>
            <button className="w-full py-3 text-white bg-black rounded-lg font-semibold">
                Üye Girişi Yaparak Ödeme
            </button>
        </div>
    );
}

// Sepet (Cart) Component
export function ExpandableCardDemo() {
    const [active, setActive] = useState(null);
    const ref = useRef(null);
    const id = useId();

    const { cartItems, removeFromCart } = useCart();

    useEffect(() => {
        function onKeyDown(event) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }

        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    // Ürün verileri (cards dizisi)
    const cards = [
        {
            price: 126,
            description: "126 TL",
            title: "Sade Helva",
            src: Image1,
            ctaText: "İncele",
            ctaLink: "/urunler/helva/helvaDetail/sadeHelva",
            content: () => (
                <p>
                    Sade helvamız, geleneksel tariflerle hazırlanmış olup damaklarınızda
                    unutulmaz bir tat bırakır.
                </p>
            ),
        },
        {
            price: 100,
            description: "100 TL",
            title: "Fındıklı Helva",
            src: Image2,
            ctaText: "İncele",
            ctaLink: "/urunler/helva/helvaDetail/findikliHelva",
            content: () => (
                <p>
                    Fındık parçacıklarıyla zenginleştirilmiş özel helvamızın tadını çıkarın.
                </p>
            ),
        },
        {
            price: 110,
            description: "110 TL",
            title: "Kakaolu Helva",
            src: Image3,
            ctaText: "İncele",
            ctaLink: "/urunler/helva/helvaDetail/kakaoluHelva",
            content: () => (
                <p>
                    Kakao ile harmanlanmış, çikolata tadında enfes helvamızın keyfini çıkarın.
                </p>
            ),
        },
        {
            price: 130,
            description: "130 TL",
            title: "Geleneksel Fıstıklı Helva",
            src: Image4,
            ctaText: "İncele",
            ctaLink: "/urunler/helva/helvaDetail/gelenekselFistikliHelva",
            content: () => (
                <p>
                    Antep fıstığı ile zenginleştirilmiş geleneksel lezzetimizi deneyin.
                </p>
            ),
        },
        {
            price: 115,
            description: "115 TL",
            title: "Fırın Helva",
            src: Image1, // Reuse or change the image as necessary
            ctaText: "İncele",
            ctaLink: "/urunler/helva/helvaDetail/firinHelva",
            content: () => (
                <p>
                    Fırında pişirilmiş özel tarif helvamızla farklı bir tat deneyimi yaşayın.
                </p>
            ),
        },
        {
            price: 120,
            description: "120 TL",
            title: "Kuru Meyveli Helva",
            src: Image2,
            ctaText: "İncele",
            ctaLink: "/urunler/helva/helvaDetail/kuruMeyveliHelva",
            content: () => (
                <p>
                    Kuru meyvelerle zenginleştirilmiş sağlıklı helva seçeneğimizi keşfedin.
                </p>
            ),
        },
        {
            price: 125,
            description: "125 TL",
            title: "Cevizli Helva",
            src: Image3,
            ctaText: "İncele",
            ctaLink: "/urunler/helva/helvaDetail/cevizliHelva",
            content: () => (
                <p>
                    Ceviz parçacıklarıyla zenginleştirilmiş özel helvamızın tadına bakın.
                </p>
            ),
        },
        {
            price: 118,
            description: "118 TL",
            title: "Vanilyalı Helva",
            src: Image4,
            ctaText: "İncele",
            ctaLink: "/urunler/helva/helvaDetail/vanilyaliHelva",
            content: () => (
                <p>
                    Vanilya aromasıyla tatlandırılmış özel helvamızı deneyin.
                </p>
            ),
        },
        {
            price: 122,
            description: "122 TL",
            title: "Karamelli Helva",
            src: Image1, // Reuse or change the image as necessary
            ctaText: "İncele",
            ctaLink: "/urunler/helva/helvaDetail/karamelliHelva",
            content: () => (
                <p>
                    Karamel lezzetiyle zenginleştirilmiş helva deneyimimizi keşfedin.
                </p>
            ),
        },
        {
            price: 150,
            description: "150 TL",
            title: "Çiçek Balı",
            src: Image5,
            ctaText: "İncele",
            ctaLink: "/urunler/bal/balDetail/cicekBali",
            content: () => (
                <p>Doğal çiçek balının eşsiz lezzetiyle hazırlanmış bir ürün.</p>
            ),
        },
        {
            price: 140,
            description: "140 TL",
            title: "Hardaliye",
            src: Image6,
            ctaText: "İncele",
            ctaLink: "/urunler/bal/balDetail/hardaliye",
            content: () => (
                <p>Geleneksel yöntemlerle hazırlanan fermente üzüm içeceği.</p>
            ),
        },
        {
            price: 135,
            description: "135 TL",
            title: "Ayva Reçeli",
            src: Image7,
            ctaText: "İncele",
            ctaLink: "/urunler/bal/balDetail/ayvaReceli",
            content: () => (
                <p>Taze ayvalardan özenle hazırlanmış ev yapımı reçel.</p>
            ),
        },
        {
            price: 130,
            description: "130 TL",
            title: "Çilek Reçeli",
            src: Image8,
            ctaText: "İncele",
            ctaLink: "/urunler/bal/balDetail/cilekReceli",
            content: () => (
                <p>Doğal çileklerin lezzetini kahvaltı sofralarınıza taşıyın.</p>
            ),
        },
        {
            price: 145,
            description: "145 TL",
            title: "Gül Reçeli",
            src: Image1,
            ctaText: "İncele",
            ctaLink: "/urunler/bal/balDetail/gulReceli",
            content: () => (
                <p>Güllerin mis kokusunu sofralarınıza getiren özel reçel.</p>
            ),
        },
        {
            price: 138,
            description: "138 TL",
            title: "İncir Reçeli",
            src: Image5,
            ctaText: "İncele",
            ctaLink: "/urunler/bal/balDetail/incirReceli",
            content: () => (
                <p>Dalından taze toplanmış incirlerle hazırlanmış reçel.</p>
            ),
        },
        {
            price: 80,
            description: "80 TL",
            title: "Karışık Aromalı Lokum",
            src: Image2,
            ctaText: "İncele",
            ctaLink: "/urunler/lokum/lokumDetail/karisikLokum",
            content: () => (
                <p>Geleneksel tariflerle hazırlanan enfes lokum.</p>
            ),
        },
        {
            price: 70,
            description: "70 TL",
            title: "Sade Lokum",
            src: Image4,
            ctaText: "İncele",
            ctaLink: "/urunler/lokum/lokumDetail/sadeLokum",
            content: () => (
                <p>Şekerlemenin tadını çıkarabileceğiniz eşsiz tat.</p>
            ),
        },
        {
            price: 90,
            description: "90 TL",
            title: "Antep Fıstıklı Lokum",
            src: Image1,
            ctaText: "İncele",
            ctaLink: "/urunler/lokum/lokumDetail/antepfistikliLokum",
            content: () => (
                <p>Antep fıstığının zengin lezzetiyle hazırlanan lokumumuzun tadına bakın.</p>
            ),
        },
        {
            price: 75,
            description: "75 TL",
            title: "Gül Aromalı Lokum",
            src: Image2,
            ctaText: "İncele",
            ctaLink: "/urunler/lokum/lokumDetail/gulAromaliLokum",
            content: () => (
                <p>Gül aromasıyla zenginleştirilmiş özel lokumumuz.</p>
            ),
        },
        {
            price: 85,
            description: "85 TL",
            title: "Fındıklı Lokum",
            src: Image3,
            ctaText: "İncele",
            ctaLink: "/urunler/lokum/lokumDetail/findikliLokum",
            content: () => (
                <p>Fındık parçacıklarıyla zenginleştirilmiş lezzetli lokumumuz.</p>
            ),
        },
        {
            price: 90,
            description: "90 TL",
            title: "Fıstıklı Lokum",
            src: Image3,
            ctaText: "İncele",
            ctaLink: "/urunler/lokum/lokumDetail/fistikliLokum",
            content: () => (
                <p>Antep fıstığı ile zenginleştirilmiş lokum keyfi.</p>
            ),
        },
        {
            price: 80,
            description: "80 TL",
            title: "Sakızlı Lokum",
            src: Image3,
            ctaText: "İncele",
            ctaLink: "/urunler/lokum/lokumDetail/sakizliLokum",
            content: () => (
                <p>Sakız aromasıyla tatlandırılmış özel lokumumuz.</p>
            ),
        },
        {
            price: 80,
            description: "80 TL",
            title: "Tahin",
            src: Image5,
            ctaText: "İncele",
            ctaLink: "/urunler/tahin/tahinDetail/tahin",
            content: () => (
                <p>Tahin ve pekmezin eşsiz karışımıyla hazırlanmış bir lezzet.</p>
            ),
        },
        {
            price: 85,
            description: "85 TL",
            title: "Pekmez",
            src: Image8,
            ctaText: "İncele",
            ctaLink: "/urunler/tahin/tahinDetail/pekmez",
            content: () => (
                <p>Pekmezle zenginleştirilmiş tahinli lezzet.</p>
            ),
        },
        {
            price: 90,
            description: "90 TL",
            title: "Keçiboynuzu Pekmezi",
            src: Image3,
            ctaText: "İncele",
            ctaLink: "/urunler/tahin/tahinDetail/keciboynuzuPekmezi",
            content: () => (
                <p>Doğal keçiboynuzundan elde edilen besleyici pekmez.</p>
            ),
        },
        {
            price: 80,
            description: "80 TL",
            title: "Üzüm Pekmezi",
            src: Image1,
            ctaText: "İncele",
            ctaLink: "/urunler/tahin/tahinDetail/uzumPekmezi",
            content: () => (
                <p>Doğal üzümden elde edilmiş lezzetli pekmez.</p>
            ),
        },
        {
            price: 85,
            description: "85 TL",
            title: "Dut Pekmezi",
            src: Image7,
            ctaText: "İncele",
            ctaLink: "/urunler/tahin/tahinDetail/dutPekmezi",
            content: () => (
                <p>Dut meyvesinden elde edilmiş doğal pekmez.</p>
            ),
        },
    ];

    // Function to get card data by title
    const getCardData = (title) => {
        return cards.find((card) => card.title === title);
    };

    return (
        <>
            <h2 className="text-2xl font-bold max-w-2xl mx-auto w-full gap-4 ">Sepet</h2>
            <AnimatePresence>
                {active && typeof active === "object" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 h-full w-full z-10"
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active && typeof active === "object" ? (
                    <div className="fixed inset-0 grid place-items-center z-[100]">
                        <motion.button
                            key={`button-${active.title}-${id}`}
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, transition: { duration: 0.05 } }}
                            className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                            onClick={() => setActive(null)}
                        >
                            <CloseIcon />
                        </motion.button>
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
                        >
                            <motion.div layoutId={`image-${active.title}-${id}`}>
                                <Image
                                    priority
                                    width={200}
                                    height={200}
                                    src={active.src}
                                    alt={active.title}
                                    className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                                />
                            </motion.div>

                            <div>
                                <div className="flex justify-between items-start p-4">
                                    <div className="">
                                        <motion.h3
                                            layoutId={`title-${active.title}-${id}`}
                                            className="font-bold text-neutral-700 dark:text-neutral-200"
                                        >
                                            {active.title}
                                        </motion.h3>
                                        <motion.p
                                            layoutId={`description-${active.title}-${id}`}
                                            className="text-neutral-600 dark:text-neutral-400"
                                        >
                                            {active.description}
                                        </motion.p>
                                    </div>

                                    <motion.a
                                        layoutId={`button-${active.title}-${id}`}
                                        href={active.ctaLink}
                                        target="_blank"
                                        className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                                    >
                                        {active.ctaText}
                                    </motion.a>
                                </div>
                                <div className="pt-4 relative px-4">
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                                    >
                                        {typeof active.content === "function"
                                            ? active.content()
                                            : active.content}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>
            <ul className="max-w-2xl mx-auto w-full gap-4">
                {cartItems.map((item) => {
                    const card = getCardData(item.title);
                    if (!card) return null; // If card data is not found, skip rendering

                    return (
                        <motion.div
                            layoutId={`card-${item.title}-${id}`}
                            key={`card-${item.title}-${id}`}
                            onClick={() => setActive(card)}
                            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
                        >
                            <div className="flex gap-4 flex-col md:flex-row">
                                <motion.div layoutId={`image-${item.title}-${id}`}>
                                    <Image
                                        width={100}
                                        height={100}
                                        src={card.src}
                                        alt={item.title}
                                        className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                                    />
                                </motion.div>
                                <div className="">
                                    <motion.h3
                                        layoutId={`title-${item.title}-${id}`}
                                        className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                                    >
                                        {item.title}
                                    </motion.h3>
                                    <motion.p
                                        layoutId={`description-${item.title}-${id}`}
                                        className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                                    >
                                        {card.price * item.quantity} TL
                                    </motion.p>
                                </div>
                            </div>
                            <div className="flex gap-2 mt-4 md:mt-0">
                                <motion.button
                                    layoutId={`button-${item.title}-${id}`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setActive(card);
                                    }}
                                    className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black"
                                >
                                    {card.ctaText}
                                </motion.button>

                                <motion.div onClick={(e) => e.stopPropagation()}>
                                    <QuantitySelector item={item} />
                                </motion.div>

                                <motion.div
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        removeFromCart(item.title);
                                    }}
                                    className="flex justify-center items-center px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-red-500 hover:text-white text-black"
                                >
                                    Sil
                                </motion.div>
                            </div>
                        </motion.div>
                    );
                })}
            </ul>
        </>
    );
}

export default function CartPage() {
    const { cartItems } = useCart();
    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <ClientOnly>
            <div className="flex flex-col md:flex-row items-start gap-0 p-28">
                {/* Sepet bölümü */}
                <div className="w-full md:w-2/3">
                    <ExpandableCardDemo />
                </div>

                {/* Özet bölümü */}
                <OzetComponent totalPrice={totalPrice} />
            </div>
        </ClientOnly>
    );
}
