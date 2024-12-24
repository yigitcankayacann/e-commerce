"use client";

import React from 'react';
import { FaRegUser } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';

const KullaniciIcon = () => {
    const router = useRouter();
    const { user, loading } = useAuth();

    const handleIconClick = () => {
        if (loading) {
            // Eğer oturum durumu henüz belirlenmediyse hiçbir şey yapma
            return;
        }

        if (user) {
            router.push('/userPage'); // Kullanıcı giriş yaptıysa user panel sayfasına yönlendirme
        } else {
            router.push('/login'); // Giriş yapılmadıysa login sayfasına yönlendirme
        }
    };

    return (
        <div
            onClick={handleIconClick}
            style={{ position: 'fixed', top: '20px', right: '85px', cursor: 'pointer', zIndex: 50 }}
            className="flex items-center justify-center sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] bg-white rounded-full border border-black/[0.2] shadow-md"
        >
            <FaRegUser size="32" className="text-black" />
        </div>
    );
};

export default KullaniciIcon;
