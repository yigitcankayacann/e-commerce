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

const helvaItems = [
    {
        title: "Sade Helva",
        price: 126,
        image: ImageHelva2,
        description: (
            <div>
                <p>Susam ve yer fıstığının zengin bir karışımı ile hazırlanan, damaklarda iz bırakan lezzet.</p>
                <div className="flex items-center justify-start mt-4 ml-4">
                    <SepeteEkleButonu product={{
                        title: "Sade Helva",
                        price: 126,
                        image: ImageHelva2,
                    }}/>
                </div>
            </div>
        ),
        header: (
            <Link href="/urunler/helva/helvaDetail/sadeHelva">
                <div className="w-full h-48 relative cursor-pointer">
                    <Image
                        src={ImageHelva2}
                        alt="Sade Helva"
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
        title: "Fındıklı Helva",
        price: 100,
        image: ImageHelva3,
        description: (
            <div>
                <p>Fındık parçacıklarıyla zenginleştirilmiş özel helva.</p>
                <div className="flex items-center justify-start mt-4 ml-4">
                    <SepeteEkleButonu product={{
                        title: "Fındıklı Helva",
                        price: 100,
                        image: ImageHelva3,
                    }}/>
                </div>
            </div>
        ),
        header: (
            <Link href="/urunler/helva/helvaDetail/findikliHelva">
                <div className="w-full h-48 relative">
                    <Image
                        src={ImageHelva3}
                        alt="Fındıklı Helva"
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
        title: "Kakaolu Helva",
        price: 110,
        image: ImageHelva4,
        description: (
            <div>
                <p>Kakao ile harmanlanmış, çikolata tadında enfes helva.</p>
                <div className="flex items-center justify-start mt-4 ml-4">
                    <SepeteEkleButonu product={{
                        title: "Kakaolu Helva",
                        price: 110,
                        image: ImageHelva4,
                    }}/>
                </div>
            </div>
        ),
        header: (
            <Link href="/urunler/helva/helvaDetail/kakaoluHelva">
                <div className="w-full h-48 relative">
                    <Image
                        src={ImageHelva4}
                        alt="Kakaolu Helva"
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
        title: "Geleneksel Fıstıklı Helva",
        price: 130,
        image: ImageHelva1,
        description: (
            <div>
                <p>Antep fıstığı ile zenginleştirilmiş geleneksel lezzet.</p>
                <div className="flex items-center justify-start mt-4 ml-4">
                    <SepeteEkleButonu product={{
                        title: "Geleneksel Fıstıklı Helva",
                        price: 130,
                        image: ImageHelva1,
                    }}/>
                </div>
            </div>
        ),
        header: (
            <div className="w-full h-48 relative">
                <Image
                    src={ImageHelva1}
                    alt="Geleneksel Fıstıklı Helva"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-t-xl"
                />
            </div>
        ),
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Fırın Helva",
        price: 115,
        image: ImageHelva2,
        description: (
            <div>
                <p>Fırında pişirilmiş özel tarif helvamız.</p>
                <div className="flex items-center justify-start mt-4 ml-4">
                    <SepeteEkleButonu product={{
                        title: "Fırın Helva",
                        price: 115,
                        image: ImageHelva2,
                    }}/>
                </div>
            </div>
        ),
        header: (
            <div className="w-full h-48 relative">
                <Image
                    src={ImageHelva2}
                    alt="Fırın Helva"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-t-xl"
                />
            </div>
        ),
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Kuru Meyveli Helva",
        price: 120,
        image: ImageHelva1,
        description: (
            <div>
                <p>Kuru meyvelerle zenginleştirilmiş sağlıklı helva seçeneği.</p>
                <div className="flex items-center justify-start mt-4 ml-4">
                    <SepeteEkleButonu product={{
                        title: "Kuru Meyveli Helva",
                        price: 120,
                        image: ImageHelva1,
                    }}/>
                </div>
            </div>
        ),
        header: (
            <div className="w-full h-48 relative">
                <Image
                    src={ImageHelva1}
                    alt="Kuru Meyveli Helva"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-t-xl"
                />
            </div>
        ),
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Cevizli Helva",
        price: 125,
        image: ImageHelva2,
        description: (
            <div>
                <p>Ceviz parçacıklarıyla zenginleştirilmiş özel helva.</p>
                <div className="flex items-center justify-start mt-4 ml-4">
                    <SepeteEkleButonu product={{
                        title: "Cevizli Helva",
                        price: 125,
                        image: ImageHelva2,
                    }}/>
                </div>
            </div>
        ),
        header: (
            <div className="w-full h-48 relative">
                <Image
                    src={ImageHelva2}
                    alt="Cevizli Helva"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-t-xl"
                />
            </div>
        ),
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Vanilyalı Helva",
        price: 118,
        image: ImageHelva2,
        description: (
            <div>
                <p className="m-0">Vanilya aromasıyla tatlandırılmış özel helvamız.</p>
                <div className="flex items-center justify-start mt-4 ml-4">
                    <SepeteEkleButonu product={{
                        title: "Vanilyalı Helva",
                        price: 118,
                        image: ImageHelva2,
                    }}/>
                </div>
            </div>
        ),
        header: (
            <div className="w-full h-48 relative">
                <Image
                    src={ImageHelva2}
                    alt="Vanilyalı Helva"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-t-xl"
                />
            </div>
        ),
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Karamelli Helva",
        price: 122,
        image: ImageHelva2,
        description: (
            <div>
                <p>Karamel lezzetiyle zenginleştirilmiş helva deneyimi.</p>
                <div className="flex items-center justify-start mt-4 ml-4">
                    <SepeteEkleButonu product={{
                        title: "Karamelli Helva",
                        price: 122,
                        image: ImageHelva2,
                    }}/>
                </div>
            </div>
        ),
        header: (
            <div className="w-full h-48 relative">
                <Image
                    src={ImageHelva2}
                    alt="Karamelli Helva"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-t-xl"
                />
            </div>
        ),
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
];

const HelvaPage = () => {
    const helvaWords = ["katkısız", "doğal", "geleneksel", "taze"];
    const helvaSentence = "Helvanın";

    return (
        <div>
            <FlipWordsDemo words={helvaWords} sentence={helvaSentence} />
            <BentoGridDemo items={helvaItems} />
        </div>
    );
};

export default HelvaPage;
