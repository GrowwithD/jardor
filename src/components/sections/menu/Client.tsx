"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import MenuCategory from "@/components/sections/menu/MenuCategory";
import SectionHeader from "@/components/molecules/SectionHeader";
import ParallaxBackground from "@/components/atoms/ParallaxBackground";

const fadeUp = {
    initial: { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
};

export default function MenusListClient({
    categories,
    header,
}: {
    categories: any[];
    header: {
        eyebrow: string;
        title: string;
        subtitle: string;
    };
}) {
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const scrollToIndex = (index: number) => {
        if (!sliderRef.current) return;

        const container = sliderRef.current;
        const firstChild = container.firstElementChild as HTMLElement | null;
        const cardWidth = firstChild?.clientWidth ?? container.clientWidth;

        container.scrollTo({
            left: index * cardWidth,
            behavior: "smooth",
        });
    };

    const goNext = () => {
        const total = categories.length;
        const next = (currentIndex + 1) % total;
        setCurrentIndex(next);
        scrollToIndex(next);
    };

    const goPrev = () => {
        const total = categories.length;
        const prev = (currentIndex - 1 + total) % total;
        setCurrentIndex(prev);
        scrollToIndex(prev);
    };

    return (
        <section
            id="menus"
            className="relative py-20 md:py-28 bg-black text-brand-cream overflow-hidden"
        >
            <ParallaxBackground />

            <div className="relative mx-auto px-4 md:px-32">

                {/* HEADER FROM CMS */}
                <SectionHeader
                    eyebrow={header.eyebrow}
                    title={header.title}
                    subtitle={header.subtitle}
                    align="center"
                    className="mb-14"
                />

                {/* SLIDER */}
                <motion.div
                    variants={fadeUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="relative">

                        {/* ARROWS */}
                        <button
                            onClick={goPrev}
                            className="
                                hidden md:flex absolute -left-8 top-1/2 -translate-y-1/2
                                h-10 w-10 items-center justify-center
                                border border-brand-gold/40 text-brand-gold/90
                                hover:bg-brand-gold hover:text-black
                                transition-all duration-200 ease-out z-10
                            "
                        >
                            <ChevronLeft size={20} strokeWidth={1.5} />
                        </button>

                        <button
                            onClick={goNext}
                            className="
                                hidden md:flex absolute -right-8 top-1/2 -translate-y-1/2
                                h-10 w-10 items-center justify-center
                                border border-brand-gold/40 text-brand-gold/90
                                hover:bg-brand-gold hover:text-black
                                transition-all duration-200 ease-out z-10
                            "
                        >
                            <ChevronRight size={20} strokeWidth={1.5} />
                        </button>

                        {/* SLIDER */}
                        <div
                            ref={sliderRef}
                            className="flex gap-8 overflow-x-auto no-scrollbar pb-2 scroll-smooth overflow-y-hidden"
                        >
                            {categories.map((cat, idx) => (
                                <motion.div
                                    key={cat.id}
                                    variants={fadeUp}
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                                    className="min-w-[88%] sm:min-w-[48%] lg:min-w-[32%]"
                                >
                                    <MenuCategory
                                        category={{
                                            id: cat.id,
                                            label: cat.name,
                                            subtitle: cat.description,
                                            hero: cat.image,
                                            pdfUrl: cat.pdf,
                                            location: cat.slug?.toUpperCase() ?? "MENU",
                                        }}
                                        index={idx}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* DOTS */}
                    <div className="mt-5 flex flex-col items-center gap-3">

                        <div className="flex md:hidden gap-4">
                            <button
                                onClick={goPrev}
                                className="px-3 py-1.5 text-[9px] uppercase tracking-[0.18em] border border-brand-gold/40 text-brand-gold hover:bg-brand-gold hover:text-black transition-all"
                            >
                                Prev
                            </button>

                            <button
                                onClick={goNext}
                                className="px-3 py-1.5 text-[9px] uppercase tracking-[0.18em] border border-brand-gold/40 text-brand-gold hover:bg-brand-gold hover:text-black transition-all"
                            >
                                Next
                            </button>
                        </div>

                        <div className="flex items-center gap-2">
                            {categories.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => {
                                        setCurrentIndex(i);
                                        scrollToIndex(i);
                                    }}
                                    className={`
                                        h-0.5 transition-all duration-300
                                        ${i === currentIndex
                                            ? "w-48 bg-brand-gold"
                                            : "w-6 bg-brand-green/40 hover:bg-brand-gold/60"}
                                    `}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}