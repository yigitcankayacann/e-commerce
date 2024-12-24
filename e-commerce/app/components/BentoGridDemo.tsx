import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";

// ✅ Tür Tanımı
type ItemType = {
    title: string;
    description: string;
    header: React.ReactNode;
    icon: React.ReactNode;
    className?: string; // Optional olarak tanımlandı
};

type BentoGridDemoProps = {
    items: ItemType[];
};

// ✅ Tür Tanımı Kullanıldı
export function BentoGridDemo({ items }: BentoGridDemoProps) {
    return (
        <BentoGrid className="max-w-6xl mt-12 mx-auto gap-8">
            {items.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    icon={item.icon}
                    className={item.className || ""} // Boş string varsayılan olarak verildi
                />
            ))}
        </BentoGrid>
    );
}

export default BentoGridDemo;
