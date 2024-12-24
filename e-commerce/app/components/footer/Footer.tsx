"use client";
import React from "react";
import { FaShippingFast, FaLock, FaSmile, FaGift } from "react-icons/fa";
import InfiniteMovingCardsDemo from "@/app/components/comment/InfiniteMovingCardsDemo";

const Footer = () => {
    return (
        <div className="bg-gray-50 py-8">
            <div className="mb-8">
                <InfiniteMovingCardsDemo />
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

                    {/* Kart 1 */}
                    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500">
                            {/* FaTruck ikonu */}
                            <FaGift className="text-white h-6 w-6" />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-gray-900">Türkiye&apos;nin her yerine</h3>
                        <p className="mt-2 text-gray-600">Kargo ile teslimat imkanı</p>
                    </div>

                    {/* Kart 2 */}
                    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500">
                            {/* FaShippingFast ikonu */}
                            <FaShippingFast className="text-white h-6 w-6" />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-gray-900">Hızlı Teslimat</h3>
                        <p className="mt-2 text-gray-600">Aynı gün kargo imkanı</p>
                    </div>

                    {/* Kart 3 */}
                    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500">
                            {/* FaLock ikonu */}
                            <FaLock className="text-white h-6 w-6" />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-gray-900">Güvenli Ödeme</h3>
                        <p className="mt-2 text-gray-600">Yüksek güvenlikli ödeme sistemi</p>
                    </div>

                    {/* Kart 4 */}
                    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500">
                            {/* FaSmile ikonu */}
                            <FaSmile className="text-white h-6 w-6" />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-gray-900">Türkiye&apos;nin her yerine</h3>
                        <p className="mt-2 text-gray-600">%100 müşteri memnuniyeti</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
