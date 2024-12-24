"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import logo from "@/app/assets/fotograflar/logo.jpg";

const Logo = () => {
    const router = useRouter();

    const handleLogoClick = () => {
        router.push('/');
    };

    return (
        <div
            style={{ position: 'fixed', top: '20px', left: '16px', cursor: 'pointer', zIndex: 50 }}
        >
            <Image
                src={logo}
                alt="Website Logo"
                width={75}
                height={75}
                onClick={handleLogoClick}
                style={{ borderRadius: '50%' }}
                className="sm:w-[100px] sm:h-[100px]
                           md:w-[100px] md:h-[100px]
                           lg:w-[100px] lg:h-[100px]"
            />
        </div>
    );
};

export default Logo;
