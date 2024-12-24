"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "../ui/navbar-menu";
import { cn } from "../../lib/utils";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "./logo";
import { useRouter } from "next/navigation";

function Navbar({ className }) {
    const [active, setActive] = useState(null);
    const router = useRouter();

    const handleNavigation = (path) => {
        router.push(path);
    };

    return (
        <div
            className={cn(
                "hidden md:flex fixed top-2 inset-x-0 max-w-xl mx-auto z-50",
                className
            )}
        >
            <HamburgerMenu />
            <Logo />

            <Menu setActive={setActive}>


                {/* Helva Çeşitleri */}
                <MenuItem
                    setActive={setActive}
                    active={active}
                    item="Helva Çeşitleri"
                    onClick={() => handleNavigation("/urunler/helva")}
                >
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/urunler/helva/helvaDetail/sadeHelva">Sade</HoveredLink>
                        <HoveredLink href="/urunler/helva/helvaDetail/findikliHelva">Fındıklı</HoveredLink>
                        <HoveredLink href="/urunler/helva/helvaDetail/kakaoluHelva">Kakaolu</HoveredLink>

                    </div>
                </MenuItem>

                {/* Bal Hardaliye */}
                <MenuItem
                    setActive={setActive}
                    active={active}
                    item="Bal/Hardaliye"
                    onClick={() => handleNavigation("/urunler/bal")}
                >
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/urunler/bal/balDetail/cicekBali">Çiçek Balı</HoveredLink>
                        <HoveredLink href="/urunler/bal/balDetail/hardaliye">Hardaliye</HoveredLink>
                        <HoveredLink href="/urunler/bal/balDetail/ayvaReceli">Ayva Reçeli</HoveredLink>

                    </div>
                </MenuItem>

                {/* Tahin Pekmez */}
                <MenuItem
                    setActive={setActive}
                    active={active}
                    item="Tahin/Pekmez"
                    onClick={() => handleNavigation("/urunler/tahin")}
                >
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/urunler/tahin/tahinDetail/tahin">Tahin</HoveredLink>
                        <HoveredLink href="/urunler/tahin/tahinDetail/pekmez">Pekmez</HoveredLink>
                        <HoveredLink href="/urunler/tahin/tahinDetail/keciboynuzuPekmezi">Keçiboynuzu Pekmezi</HoveredLink>

                    </div>
                </MenuItem>

                {/* Lokum Şekerleme */}
                <MenuItem
                    setActive={setActive}
                    active={active}
                    item="Lokum/Şekerleme"
                    onClick={() => handleNavigation("/urunler/lokum")}
                >
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/urunler/lokum/lokumDetail/karisikLokum">Karışık Aromalı</HoveredLink>
                        <HoveredLink href="/urunler/lokum/lokumDetail/sadeLokum">Sade</HoveredLink>
                        <HoveredLink href="/urunler/lokum/lokumDetail/antepfistikliLokum">Antep Fıstıklı</HoveredLink>

                    </div>
                </MenuItem>
            </Menu>
        </div>
    );
}

export default Navbar;
