import React from "react";
import BentoGridDemo from "@/app/components/BentoGridDemo";
import Image from 'next/image';
import ImageHelva1 from "@/app/assets/fotograflar/helva1.jpg";
import ImageHelva2 from "@/app/assets/fotograflar/helva2.jpg";
import ImageHelva3 from "@/app/assets/fotograflar/helva3.jpg";
import ImageHelva4 from "@/app/assets/fotograflar/helva4.jpg";
import { IconClipboardCopy } from "@tabler/icons-react";
import { SepeteEkleButonu } from "@/app/components/ui/SepeteEkleButonu";
import Link from "next/link";
import FlipWordsDemo from "@/app/components/flipWords/FlipWordsDemo";

const tahinItems = [
    {
        title: "Tahin",
        price: 80,
        image: ImageHelva2,
        description: (
            <div>
                <p>Tahin ve pekmezin eşsiz karışımıyla hazırlanmış bir lezzet.</p>
                <div className="flex items-center justify-start mt-4 ml-4">
                    <SepeteEkleButonu product={{
                        title: "Tahin",
                        price: 80,
                        image: ImageHelva2,
                    }}/>
                </div>
            </div>
        ),
        header: (
            <Link href="/urunler/tahin/tahinDetail/tahin">
                <div className="w-full h-48 relative cursor-pointer">
                    <Image
                        src={ImageHelva2}
                        alt="Tahin"
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-t-xl"
                    />
                </div>
            </Link>

        ),
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Pekmez",
        price: 85,
        image: ImageHelva4,
        description: (
            <div>
                <p>Pekmezle zenginleştirilmiş tahinli lezzet.</p>
                <div className="flex items-center justify-start mt-4 ml-4">
                    <SepeteEkleButonu product={{
                        title: "Pekmez",
                        price: 85,
                        image: ImageHelva4,
                    }}/>
                </div>
            </div>
        ),
        header: (
            <Link href="/urunler/tahin/tahinDetail/pekmez">
                <div className="w-full h-48 relative cursor-pointer">
                    <Image
                        src={ImageHelva4}
                        alt="Pekmez"
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-t-xl"
                    />
                </div>
            </Link>

        ),
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Keçiboynuzu Pekmezi",
        price: 90,
        image: ImageHelva1,
        description: (
            <div>
                <p>Doğal keçiboynuzundan elde edilen besleyici pekmez.</p>
                <div className="flex items-center justify-start mt-4 ml-4">
                    <SepeteEkleButonu product={{
                        title: "Keçiboynuzu Pekmezi",
                        price: 90,
                        image: ImageHelva1,
                    }}/>
                </div>
            </div>
        ),
        header: (
            <Link href="/urunler/tahin/tahinDetail/keciboynuzuPekmezi">
                <div className="w-full h-48 relative cursor-pointer">
                    <Image
                        src={ImageHelva1}
                        alt="Keçiboynuzu Pekmezi"
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-t-xl"
                    />
                </div>
            </Link>

        ),
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Üzüm Pekmezi",
        price: 80,
        image: ImageHelva2,
        description: (
            <div>
                <p>Doğal üzümden elde edilmiş lezzetli pekmez.</p>
                <div className="flex items-center justify-start mt-4 ml-4">
                    <SepeteEkleButonu product={{
                        title: "Üzüm Pekmezi",
                        price: 80,
                        image: ImageHelva2,
                    }}/>
                </div>
            </div>
        ),
        header: (
            <Link href="/urunler/tahin/tahinDetail/uzumPekmezi">
                <div className="w-full h-48 relative cursor-pointer">
                    <Image
                        src={ImageHelva2}
                        alt="Üzüm Pekmezi"
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-t-xl"
                    />
                </div>
            </Link>
        ),
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Dut Pekmezi",
        price: 85,
        image: ImageHelva3,
        description: (
            <div>
                <p>Dut meyvesinden elde edilmiş doğal pekmez.</p>
                <div className="flex items-center justify-start mt-4 ml-4">
                    <SepeteEkleButonu product={{
                        title: "Dut Pekmezi",
                        price: 85,
                        image: ImageHelva3,
                    }}/>
                </div>
            </div>
        ),
        header: (
            <Link href="/urunler/tahin/tahinDetail/dutPekmezi">
                <div className="w-full h-48 relative cursor-pointer">
                    <Image
                        src={ImageHelva3}
                        alt="Dut Pekmezi"
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-t-xl"
                    />
                </div>
            </Link>
        ),
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
];

const TahinPekmezPage = () => {
    const tahinWords = ["yoğun", "besleyici", "sağlıklı", "taze"];
    const tahinSentence = "Tahin Pekmezin";

    return (
        <div>
            <FlipWordsDemo words={tahinWords} sentence={tahinSentence} />
            <BentoGridDemo items={tahinItems} />
        </div>
    );
};

export default TahinPekmezPage;
