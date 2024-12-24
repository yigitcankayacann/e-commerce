"use client";
import React from "react";
import { FloatingDock } from "../../components/ui/floating-dock";
import { IconHome } from "@tabler/icons-react";
import { IoLogOutSharp, IoSettings } from "react-icons/io5";
import { IoIosListBox } from "react-icons/io";

export function FloatingDockDemo() {


    const links = [
        {
            title: "Ana Sayfa",
            icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/", // Ana sayfaya yönlendirme
        },
        {
            title: "Siparişler",
            icon: (
                <IoIosListBox className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Hesap Ayarları",
            icon: (
                <IoSettings className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Oturumu Kapat",
            icon: (
                <IoLogOutSharp className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/", // Çıkış işlemini tetikle
        },
    ];

    return (
        <div className="flex items-center justify-center h-[35rem] w-full">
            <FloatingDock
                mobileClassName="translate-y-20"
                items={links} // Yönlendirme için linkleri gönder
            />
        </div>
    );
}

export default FloatingDockDemo;
