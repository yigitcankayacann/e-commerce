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

const lokumItems = [
    {
        title: "Karışık Aromalı Lokum",
        price: 90,
        image: ImageHelva2,
        description: (
            <div>
                <p>Geleneksel tariflerle hazırlanan enfes lokum.</p>
                <div className="flex items-center justify-start mt-4 ml-4">
                    <SepeteEkleButonu product={{
                        title: "Karışık Aromalı Lokum",
                        price: 90,
                        image: ImageHelva2,
                    }}/>
                </div>
            </div>
        ),
        header: (
            <Link href="/urunler/lokum/lokumDetail/karisikLokum">
                <div className="w-full h-48 relative cursor-pointer">
                    <Image
                        src={ImageHelva2}
                        alt="Karışık Aromalı Lokum"
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
        title: "Sade Lokum",
        price: 80,
        image: ImageHelva4,
        description: (
            <div>
                <p>Şekerlemenin tadını çıkarabileceğiniz eşsiz tat.</p>
                <div className="flex items-center justify-start mt-4 ml-4">
                    <SepeteEkleButonu product={{
                        title: "Sade Lokum",
                        price: 80,
                        image: ImageHelva4,
                    }}/>
                </div>
            </div>
        ),
        header: (
            <Link href="/urunler/lokum/lokumDetail/sadeLokum">
                <div className="w-full h-48 relative cursor-pointer">
                    <Image
                        src={ImageHelva4}
                        alt="Sade Lokum"
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
        title: "Antep Fıstıklı Lokum",
        price: 100,
        image: ImageHelva1,
        description: (
            <div>
                <p>Antep fıstığı ile zenginleştirilmiş geleneksel lezzet.</p>
                <div className="flex items-center justify-start mt-4 ml-4">
                    <SepeteEkleButonu product={{
                        title: "Antep Fıstıklı Lokum",
                        price: 100,
                        image: ImageHelva1,
                    }}/>
                </div>
            </div>
        ),
        header: (
            <Link href="/urunler/lokum/lokumDetail/antepfistikliLokum">
                <div className="w-full h-48 relative cursor-pointer">
                    <Image
                        src={ImageHelva1}
                        alt="Antep Fıstıklı Lokum"
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
        title: "Gül Aromalı Lokum",
        price: 95,
        image: ImageHelva2,
        description: (
            <div>
                <p>Gül aromasıyla zenginleştirilmiş eşsiz lokum lezzeti.</p>
                <div className="flex items-center justify-start mt-4 ml-4">
                    <SepeteEkleButonu product={{
                        title: "Gül Aromalı Lokum",
                        price: 95,
                        image: ImageHelva2,
                    }}/>
                </div>
            </div>
        ),
        header: (
            <div className="w-full h-48 relative">
                <Image
                    src={ImageHelva2}
                    alt="Gül Aromalı Lokum"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-t-xl"
                />
            </div>
        ),
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Fındıklı Lokum",
        price: 85,
        image: ImageHelva3,
        description: (
            <div>
                <p>Fındık parçacıklarıyla zenginleştirilmiş özel lokum.</p>
                <div className="flex items-center justify-start mt-4 ml-4">
                    <SepeteEkleButonu product={{
                        title: "Fındıklı Lokum",
                        price: 85,
                        image: ImageHelva3,
                    }}/>
                </div>
            </div>
        ),
        header: (
            <div className="w-full h-48 relative">
                <Image
                    src={ImageHelva3}
                    alt="Fındıklı Lokum"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-t-xl"
                />
            </div>
        ),
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Fıstıklı Lokum",
        price: 95,
        image: ImageHelva3,
        description: (
            <div>
                <p>Antep fıstığı ile zenginleştirilmiş geleneksel lokum.</p>
                <div className="flex items-center justify-start mt-4 ml-4">
                    <SepeteEkleButonu product={{
                        title: "Fıstıklı Lokum",
                        price: 95,
                        image: ImageHelva3,
                    }}/>
                </div>
            </div>
        ),
        header: (
            <div className="w-full h-48 relative">
                <Image
                    src={ImageHelva3}
                    alt="Fıstıklı Lokum"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-t-xl"
                />
            </div>
        ),
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Sakızlı Lokum",
        price: 90,
        image: ImageHelva3,
        description: (
            <div>
                <p>Damla sakızı aromasıyla özel bir lokum deneyimi.</p>
                <div className="flex items-center justify-start mt-4 ml-4">
                    <SepeteEkleButonu product={{
                        title: "Sakızlı Lokum",
                        price: 90,
                        image: ImageHelva3,
                    }}/>
                </div>
            </div>
        ),
        header: (
            <div className="w-full h-48 relative">
                <Image
                    src={ImageHelva3}
                    alt="Sakızlı Lokum"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-t-xl"
                />
            </div>
        ),
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
];

const LokumSekerlemePage = () => {
    const lokumWords = ["tatlı", "hafif", "aromalı", "renkli"];
    const lokumSentence = "Lokumların";

    return (
        <div>
            <FlipWordsDemo words={lokumWords} sentence={lokumSentence} />
            <BentoGridDemo items={lokumItems} />
        </div>
    );
};

export default LokumSekerlemePage;
