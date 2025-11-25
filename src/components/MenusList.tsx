"use client";

import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

import MenuCategory, { MenuCategoryData } from "./MenuCategory";
import SectionHeader from "@/components/molecules/SectionHeader";

const menuCategories: MenuCategoryData[] = [
    {
        id: "tasting",
        label: "French Tasting Journey",
        subtitle:
            "A curated progression that moves from delicate introductions to quietly indulgent finales.",
        hero: "/images/menu/menu1.jpg",
        pdfUrl: "/pdf/jardor-chef-tasting-menu.pdf",
        location: "TASTING MENU",
    },

    {
        id: "desserts",
        label: "Pâtisserie & Dessert",
        subtitle:
            "Finishes that favor balance, lightness, and sculpted detail over excess.",
        hero: "/images/menu/menu2.jpg",
        pdfUrl: "/pdf/jardor-dessert-menu.pdf",
        location: "PATISSERIE",
    },

    {
        id: "cocktails",
        label: "Cocktail & Spirit",
        subtitle:
            "Understated signatures built on premium spirits, clear ice, and precise aromatics.",
        hero: "/images/menu/menu3.jpg",
        pdfUrl: "/pdf/jardor-cocktails-spirits-menu.pdf",
        location: "BAR",
    },

    {
        id: "wine",
        label: "Wine & Champagne",
        subtitle:
            "A cellar curated to complement the kitchen: expressive, age-worthy, and precise.",
        hero: "/images/menu/menu4.jpg",
        pdfUrl: "/pdf/jardor-wine-champagne-list.pdf",
        location: "CELLAR",
    },

    {
        id: "cigarettes",
        label: "Premium Cigarettes",
        subtitle:
            "Exclusive curated selection of premium cigarettes for refined taste.",
        hero: "/images/menu/menu5.jpg", // ganti kalau ada foto khusus
        pdfUrl: "/pdf/jardor-premium-cigarettes.pdf", // ganti kalau belum ada
        location: "LOUNGE",
    },
];

export default function MenusList() {
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        AOS.init({
            duration: 900,
            easing: "ease-out-cubic",
            once: true,
        });
    }, []);

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
        const total = menuCategories.length;
        const next = (currentIndex + 1) % total;
        setCurrentIndex(next);
        scrollToIndex(next);
    };

    const goPrev = () => {
        const total = menuCategories.length;
        const prev = (currentIndex - 1 + total) % total;
        setCurrentIndex(prev);
        scrollToIndex(prev);
    };

    return (
        <section
            id="menus"
            className="
                    relative py-20 md:py-28
                    bg-black text-brand-cream
                    overflow-hidden
                "
        >
            {/* ===== PARALLAX BACKGROUND ===== */}
            <div
                className="
                    absolute inset-y-0 left-0 w-[100%]
                    bg-cover bg-center bg-no-repeat bg-fixed
                    opacity-[0.18]
                    mix-blend-lighten
                "
                style={{
                    backgroundImage: "url('/images/parallax/parallax1.jpg')",
                }}
            />

            {/* ===== CONTENT WRAPPER ===== */}
            <div className="relative mx-auto px-4 md:px-32">

                {/* HEADER */}
                <div data-aos="fade-up" className="mb-14">
                    <SectionHeader
                        eyebrow="House Menus"
                        title="Journeys from Kitchen & Cellar"
                        subtitle="Explore tasting progression, à la carte selections, patisserie, cellar lists, and bar signatures — each menu is available as a PDF for easy sharing and planning."
                        align="center"
                    />
                </div>

                {/* SLIDER SECTION */}
                <div data-aos="fade-up" data-aos-delay="120">
                    <div className="relative">

                        {/* Arrows (desktop only) */}
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
                            className="
                                flex gap-8 overflow-x-auto no-scrollbar pb-2 scroll-smooth
                            "
                        >
                            {menuCategories.map((cat, idx) => (
                                <div
                                    key={cat.id}
                                    className="
                                        min-w-[88%]
                                        sm:min-w-[48%]
                                        lg:min-w-[32%]
                                    "
                                >
                                    <MenuCategory category={cat} index={idx} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ===== DOTS ===== */}
                    <div className="mt-5 flex flex-col items-center gap-3">

                        {/* Mobile Prev/Next */}
                        <div className="flex md:hidden gap-4">
                            <button
                                onClick={goPrev}
                                className="
                                    px-3 py-1.5 text-[9px] uppercase tracking-[0.18em]
                                    border border-brand-gold/40 text-brand-green/80
                                    hover:bg-brand-gold hover:text-black transition-all
                                "
                            >
                                Prev
                            </button>

                            <button
                                onClick={goNext}
                                className="
                                    px-3 py-1.5 text-[9px] uppercase tracking-[0.18em]
                                    border border-brand-gold/40 text-brand-green/80
                                    hover:bg-brand-gold hover:text-black transition-all
                                "
                            >
                                Next
                            </button>
                        </div>

                        {/* Dot pagination */}
                        <div className="flex items-center gap-2">
                            {menuCategories.map((_, i) => (
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
                                            : "w-6 bg-brand-green/40 hover:bg-brand-gold/60"
                                        }
                                    `}
                                />
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}