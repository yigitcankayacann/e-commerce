"use client";

import React, {
    useRef,
    useState,
    useEffect,
    createContext,
    ReactNode,
} from "react";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// ✅ Carousel Context
interface CarouselContextType {
    currentIndex: number;
}

export const CarouselContext = createContext<CarouselContextType>({
    currentIndex: 0,
});

// ✅ Carousel Props
interface CarouselProps {
    items: ReactNode[];
    initialScroll?: number;
}

export const Carousel: React.FC<CarouselProps> = ({
                                                      items,
                                                      initialScroll = 0,
                                                  }) => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft = initialScroll;
            checkScrollability();
        }
    }, [initialScroll]);

    const checkScrollability = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
        }
    };

    const scrollLeft = () => {
        carouselRef.current?.scrollBy({ left: -300, behavior: "smooth" });
    };

    const scrollRight = () => {
        carouselRef.current?.scrollBy({ left: 300, behavior: "smooth" });
    };

    return (
        <CarouselContext.Provider value={{ currentIndex: 0 }}>
            <div className="relative w-full">
                <div
                    className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]"
                    ref={carouselRef}
                    onScroll={checkScrollability}
                >
                    {/* Sağ taraf gradient efekti */}
                    <div
                        className={cn(
                            "absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l"
                        )}
                    ></div>

                    <div
                        className={cn(
                            "flex flex-row justify-start gap-4 pl-4",
                            "max-w-7xl mx-auto"
                        )}
                    >
                        {items.map((item, index) => (
                            <motion.div
                                key={`card-${index}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.5,
                                        delay: 0.2 * index,
                                        ease: "easeOut",
                                        once: true,
                                    },
                                }}
                                className="last:pr-[5%] md:last:pr-[33%] rounded-3xl"
                            >
                                {item}
                            </motion.div>
                        ))}
                    </div>
                </div>
                {/* Scroll butonları */}
                <div className="flex justify-end gap-2 mr-10">
                    <button
                        className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
                        onClick={scrollLeft}
                        disabled={!canScrollLeft}
                    >
                        <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
                    </button>
                    <button
                        className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
                        onClick={scrollRight}
                        disabled={!canScrollRight}
                    >
                        <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
                    </button>
                </div>
            </div>
        </CarouselContext.Provider>
    );
};

// ✅ BlurImage
interface BlurImageProps extends React.HTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    className?: string;
}

const BlurImage: React.FC<BlurImageProps> = ({
                                                 src,
                                                 alt,
                                                 className,
                                                 ...props
                                             }) => {
    const [isLoading, setLoading] = useState(true);

    return (
        <Image
            src={src}
            alt={alt}
            fill
            className={cn(
                "object-cover transition duration-300",
                isLoading ? "blur-sm" : "blur-0",
                className
            )}
            onLoadingComplete={() => setLoading(false)}
            {...props}
        />
    );
};

// ✅ Card veri tipleri
interface CardData {
    title: string;
    category: string;
    src: string;
    link: string;
}

interface CardProps {
    card: CardData;
    layout?: boolean;
}

// ✅ Card Bileşeni
export const Card: React.FC<CardProps> = ({ card, layout = false }) => {
    return (
        <Link href={card.link}>
            <motion.div
                layoutId={layout ? `card-${card.title}` : undefined}
                // Sabit yüksekliği kaldırdık, aspect ratio ekledik:
                className="relative w-56 md:w-96 aspect-[4/5] rounded-3xl bg-gray-100 dark:bg-neutral-900 overflow-hidden z-10"
            >
                {/* Üst kısımda koyu bir gradient */}
                <div className="absolute h-full w-full top-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
                <div className="relative z-40 p-4 md:p-8">
                    <motion.p
                        className="text-white text-sm md:text-base font-medium"
                        layoutId={layout ? `category-${card.title}` : undefined}
                    >
                        {card.category}
                    </motion.p>
                    <motion.p
                        className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left mt-1"
                        layoutId={layout ? `title-${card.title}` : undefined}
                    >
                        {card.title}
                    </motion.p>
                </div>
                {/* Resim (fill + object-cover) */}
                <BlurImage src={card.src} alt={card.title} />
            </motion.div>
        </Link>
    );
};

export default Carousel;
