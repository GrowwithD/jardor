// components/MenusList.tsx
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
        label: "Chef’s Tasting Journey",
        subtitle:
            "A curated progression that moves from delicate introductions to quietly indulgent finales.",
        hero: "/images/DSC00222.jpg",
        pdfUrl: "/pdf/jardor-chef-tasting-menu.pdf",
        location: "TASTING MENU",
    },
    {
        id: "alacarte",
        label: "À La Carte Selections",
        subtitle:
            "Modern French plates with Balinese nuance, designed for custom journeys.",
        hero: "/images/DSC00301.jpg",
        pdfUrl: "/pdf/jardor-alacarte-menu.pdf",
        location: "DINNER SERVICE",
    },
    {
        id: "desserts",
        label: "Pâtisserie & Dessert",
        subtitle:
            "Finishes that favor balance, lightness, and sculpted detail over excess.",
        hero: "/images/DSC00301.jpg",
        pdfUrl: "/pdf/jardor-dessert-menu.pdf",
        location: "PATISSERIE",
    },
    {
        id: "wine",
        label: "Wine & Champagne",
        subtitle:
            "A cellar curated to complement the kitchen: expressive, age-worthy, and precise.",
        hero: "/images/DSC04930-HDR.jpg",
        pdfUrl: "/pdf/jardor-wine-champagne-list.pdf",
        location: "CELLAR",
    },
    {
        id: "cocktails",
        label: "Cocktails & Spirits",
        subtitle:
            "Understated signatures built on premium spirits, clear ice, and precise aromatics.",
        hero: "/images/DSC00342.jpg",
        pdfUrl: "/pdf/jardor-cocktails-spirits-menu.pdf",
        location: "BAR",
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

    const total = menuCategories.length;
    const hasMenus = total > 0;

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
        if (!hasMenus) return;
        const next = (currentIndex + 1) % total;
        setCurrentIndex(next);
        scrollToIndex(next);
    };

    const goPrev = () => {
        if (!hasMenus) return;
        const prev = (currentIndex - 1 + total) % total;
        setCurrentIndex(prev);
        scrollToIndex(prev);
    };

    return (
        <section className="relative bg-brand-green pt-14 pb-16">
            <div className="mx-auto px-4 md:px-32">
                {/* ===== HEADER PAKAI COMPONENT ===== */}
                <div data-aos="fade-up">
                    <SectionHeader
                        eyebrow="House Menus"
                        title="Journeys from Kitchen & Cellar"
                        subtitle="Explore tasting progression, à la carte selections, patisserie, cellar lists, and bar signatures — each menu is available as a PDF for easy sharing and planning."
                        align="center"
                    />
                </div>

                {/* ===== SLIDER WRAPPER ===== */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="120"
                    className="mt-10"
                >
                    <div className="relative">
                        {/* Arrows (desktop) */}
                        <button
                            type="button"
                            onClick={goPrev}
                            className="
                hidden md:flex
                absolute -left-8 top-1/2 -translate-y-1/2
                h-10 w-10
                items-center justify-center
                border border-brand-gold/40
                text-brand-gold/90
                hover:bg-brand-gold hover:text-black
                transition-all duration-200 ease-out
                z-10
              "
                            aria-label="Previous menu"
                        >
                            <ChevronLeft size={20} strokeWidth={1.5} />
                        </button>

                        <button
                            type="button"
                            onClick={goNext}
                            className="
                hidden md:flex
                absolute -right-8 top-1/2 -translate-y-1/2
                h-10 w-10
                items-center justify-center
                border border-brand-gold/40
                text-brand-gold/90
                hover:bg-brand-gold hover:text-black
                transition-all duration-200 ease-out
                z-10
              "
                            aria-label="Next menu"
                        >
                            <ChevronRight size={20} strokeWidth={1.5} />
                        </button>

                        {/* SLIDER */}
                        <div
                            ref={sliderRef}
                            className="
                flex
                gap-8
                overflow-x-auto
                scroll-smooth
                no-scrollbar
                pb-2
              "
                        >
                            {menuCategories.map((category, index) => (
                                <div
                                    key={category.id}
                                    className="
                    min-w-[82%]
                    md:min-w-[60%]
                    lg:min-w-[46%]
                  "
                                >
                                    <MenuCategory category={category} index={index} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ===== DOT PAGINATION + MOBILE PREV/NEXT ===== */}
                    {hasMenus && (
                        <div className="mt-5 flex flex-col items-center gap-3">
                            {/* Mobile prev/next */}
                            <div className="flex md:hidden items-center justify-center gap-4">
                                <button
                                    type="button"
                                    onClick={goPrev}
                                    className="
                    px-3 py-1.5
                    text-[9px] uppercase tracking-[0.18em]
                    border border-brand-gold/40
                    text-brand-cream/80
                    hover:bg-brand-gold hover:text-black
                    transition-all
                  "
                                >
                                    Prev
                                </button>
                                <button
                                    type="button"
                                    onClick={goNext}
                                    className="
                    px-3 py-1.5
                    text-[9px] uppercase tracking-[0.18em]
                    border border-brand-gold/40
                    text-brand-cream/80
                    hover:bg-brand-gold hover:text-black
                    transition-all
                  "
                                >
                                    Next
                                </button>
                            </div>

                            {/* Dots */}
                            <div className="flex items-center justify-center gap-2">
                                {menuCategories.map((cat, i) => (
                                    <button
                                        key={cat.id}
                                        type="button"
                                        onClick={() => {
                                            setCurrentIndex(i);
                                            scrollToIndex(i);
                                        }}
                                        className={`
                      h-0.5 transition-all duration-300
                      ${i === currentIndex
                                                ? "w-48 bg-brand-gold"
                                                : "w-6 bg-brand-cream/35 hover:bg-brand-gold/60"
                                            }
                    `}
                                        aria-label={`Go to ${cat.label} menu`}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}