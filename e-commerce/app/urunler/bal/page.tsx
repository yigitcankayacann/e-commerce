import React from "react";
import BentoGridDemo from "@/app/components/BentoGridDemo";
import Image from 'next/image';
import ImageHelva1 from "@/app/assets/fotograflar/helva1.jpg";
import ImageHelva2 from "@/app/assets/fotograflar/helva2.jpg";
import ImageHelva3 from "@/app/assets/fotograflar/helva3.jpg";
import { IconClipboardCopy } from "@tabler/icons-react";
import { SepeteEkleButonu } from "@/app/components/ui/SepeteEkleButonu";
import Link from "next/link";
import FlipWordsDemo from "@/app/components/flipWords/FlipWordsDemo";

const balItems = [
    {
        title: "Çiçek Balı",
        price: 150,
        image: ImageHelva1,
        description: (
            <div>
                <p>Doğal çiçek balının eşsiz lezzetiyle hazırlanmış bir ürün.</p>
                <div className="flex items-center justify-start mt-4 ml-4">
                    <SepeteEkleButonu product={{
                        title: "Çiçek Balı",
                        price: 150,
                        image: ImageHelva1,
                    }}/>
                </div>
            </div>
        ),
        header: (
            <Link href="/urunler/bal/balDetail/cicekBali">
                <div className="w-full h-48 relative">
                    <Image
                        src={ImageHelva1}
                        alt="Çiçek Balı"
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-t-xl"
                    />
                </div>
            </Link>
        ),
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Hardaliye",
        price: 140,
        image: ImageHelva2,
        description: (
            <div>
                <p>Geleneksel yöntemlerle hazırlanan fermente üzüm içeceği.</p>
                <div className="flex items-center justify-start mt-4 ml-4">
                    <SepeteEkleButonu product={{
                        title: "Hardaliye",
                        price: 140,
                        image: ImageHelva2,
                    }}/>
                </div>
            </div>
        ),
        header: (
            <Link href="/urunler/bal/balDetail/hardaliye">
                <div className="w-full h-48 relative">
                    <Image
                        src={ImageHelva2}
                        alt="Hardaliye"
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-t-xl"
                    />
                </div>
            </Link>
        ),
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Ayva Reçeli",
        price: 60,
        image: ImageHelva1,
        description: (
            <div>
                <p>Taze ayvalardan özenle hazırlanmış ev yapımı reçel.</p>
                <div className="flex items-center justify-start mt-4 ml-4">
                    <SepeteEkleButonu product={{
                        title: "Ayva Reçeli",
                        price: 60,
                        image: ImageHelva1,
                    }}/>
                </div>
            </div>
        ),
        header: (
            <Link href="/urunler/bal/balDetail/ayvaReceli">
                <div className="w-full h-48 relative">
                    <Image
                        src={ImageHelva1}
                        alt="Ayva Reçeli"
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-t-xl"
                    />
                </div>
            </Link>
        ),
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Çilek Reçeli",
        price: 65,
        image: ImageHelva3,
        description: (
            <div>
                <p>Doğal çileklerin lezzetini kahvaltı sofralarınıza taşıyın.</p>
                <div className="flex items-center justify-start mt-4 ml-4">
                    <SepeteEkleButonu product={{
                        title: "Çilek Reçeli",
                        price: 65,
                        image: ImageHelva3,
                    }}/>
                </div>
            </div>
        ),
        header: (
            <div className="w-full h-48 relative">
                <Image
                    src={ImageHelva3}
                    alt="Çilek Reçeli"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-t-xl"
                />
            </div>
        ),
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Gül Reçeli",
        price: 70,
        image: ImageHelva1,
        description: (
            <div>
                <p>Güllerin mis kokusunu sofralarınıza getiren özel reçel.</p>
                <div className="flex items-center justify-start mt-4 ml-4">
                    <SepeteEkleButonu product={{
                        title: "Gül Reçeli",
                        price: 70,
                        image: ImageHelva1,
                    }}/>
                </div>
            </div>
        ),
        header: (
            <div className="w-full h-48 relative">
                <Image
                    src={ImageHelva1}
                    alt="Gül Reçeli"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-t-xl"
                />
            </div>
        ),
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "İncir Reçeli",
        price: 75,
        image: ImageHelva2,
        description: (
            <div>
                <p>Dalından taze toplanmış incirlerle hazırlanmış reçel.</p>
                <div className="flex items-center justify-start mt-4 ml-4">
                    <SepeteEkleButonu product={{
                        title: "İncir Reçeli",
                        price: 75,
                        image: ImageHelva2,
                    }}/>
                </div>
            </div>
        ),
        header: (
            <div className="w-full h-48 relative">
                <Image
                    src={ImageHelva2}
                    alt="İncir Reçeli"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-t-xl"
                />
            </div>
        ),
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },

];

const BalPage = () => {
    const balWords = ["katkısız", "doğal", "saf", "taze"]; // Dinamik kelimeler
    const balSentence = "Balın"; // Dinamik cümle

    return (
        <div>
            <FlipWordsDemo words={balWords} sentence={balSentence} />
            <BentoGridDemo items={balItems} />
        </div>
    );
};

export default BalPage;
