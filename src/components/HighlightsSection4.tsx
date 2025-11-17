// src/components/sections/HighlightsSection.tsx
"use client";

import Image from "next/image";
import {
    motion,
    AnimatePresence,
    useScroll,
    useTransform,
    type Variants,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";

import SectionHeader from "@/components/molecules/SectionHeader";
import {
    highlightsData,
    type HighlightItem,
} from "@/data/highlights";

type ActiveItem = HighlightItem & { highlight: string };

const panelVariants: Variants = {
    initial: { opacity: 0, y: 22 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
        opacity: 0,
        y: -16,
        transition: { duration: 0.32, ease: "easeIn" },
    },
};

const thumbMotion: Variants = {
    rest: {
        y: 0,
        scale: 1,
        boxShadow: "0 16px 48px rgba(0,0,0,0.78)",
        borderColor: "rgba(200,169,107,0.16)",
    },
    hover: {
        boxShadow: "0 26px 88px rgba(0,0,0,0.98)",
        borderColor: "rgba(200,169,107,0.6)",
        transition: { type: "spring", stiffness: 240, damping: 22 },
    },
};

export default function HighlightsSection() {
    const [activeId, setActiveId] = useState<string>(highlightsData[0].id);
    const [activeItem, setActiveItem] = useState<ActiveItem | null>(null);

    // index item yang sedang di-hover untuk mengganti hero/parallax
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const containerRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
    const scaleBg = useTransform(scrollYProgress, [0, 1], [1.02, 1.1]);

    const active =
        highlightsData.find((highlight) => highlight.id === activeId) ??
        highlightsData[0];

    // kalau ada yang di-hover → pakai itu sebagai hero, kalau tidak → pakai index 0
    const heroIndex = hoveredIndex ?? 0;
    const hero =
        active.items[heroIndex] ??
        active.items[0]; // fallback kalau datanya ga lengkap
    const thumbs = active.items;

    // tiap ganti tab/highlight, reset hoveredIndex biar balik ke item pertama
    useEffect(() => {
        setHoveredIndex(null);
    }, [activeId]);

    return (
        <section
            ref={containerRef}
            className="relative overflow-hidden bg-black text-brand-cream"
        >
            {/* Parallax Background */}
            <div className="pointer-events-none absolute inset-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`${active.id}-${heroIndex}`}
                        style={{ y: yBg, scale: scaleBg }}
                        initial={{ opacity: 0, scale: 1.02 }}
                        animate={{ opacity: 1, scale: 1.08 }}
                        exit={{ opacity: 0, scale: 1.04 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="absolute inset-0 will-change-transform"
                    >
                        <Image
                            src={hero.image}
                            alt={hero.title}
                            fill
                            priority
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.16),transparent_65%)]" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(196,178,96,0.16),transparent_70%)] mix-blend-overlay" />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/72 to-[#020504]/98" />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Accent glows */}
            <div className="pointer-events-none absolute -top-40 right-10 h-64 w-64 rounded-full bg-brand-gold/7 blur-3xl" />
            <div className="pointer-events-none absolute bottom-[-40px] left-10 h-52 w-52 rounded-full bg-brand-gold/5 blur-3xl" />

            {/* Foreground */}
            <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 md:py-24 space-y-10">
                {/* HEADER pakai SectionHeader */}
                <div className="max-w-3xl mx-auto text-center">
                    <SectionHeader
                        eyebrow="Jard’or Cinematic Highlights"
                        title="A Parallax Portrait of Jard’or"
                        subtitle="Four quiet chapters — presented visually through food, space, experience, and the people behind the room."
                        align="center"
                    />
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap items-center justify-center gap-4 border-y border-brand-gold/16 py-3 bg-black/40 backdrop-blur-sm rounded">
                    {highlightsData.map((h) => {
                        const isActive = h.id === activeId;
                        return (
                            <button
                                key={h.id}
                                onClick={() => setActiveId(h.id)}
                                className={[
                                    "relative px-3 md:px-4 py-1 flex flex-col items-center gap-0.5 transition-colors",
                                    isActive
                                        ? "text-brand-gold"
                                        : "text-brand-cream/60 hover:text-brand-gold/80",
                                ].join(" ")}
                            >
                                <span className="text-[7px] uppercase tracking-[0.22em]">
                                    {h.tagline}
                                </span>
                                <span className="text-[10px] md:text-xs uppercase tracking-[0.16em]">
                                    {h.label}
                                </span>
                                {isActive && (
                                    <motion.span
                                        layoutId="parallax-underline"
                                        className="mt-1 h-[1px] w-full bg-brand-gold"
                                        transition={{ duration: 0.25 }}
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Active Panel */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active.id}
                        variants={panelVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="space-y-6"
                    >
                        {/* Title row */}
                        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                            <div className="space-y-1 text-left">
                                <p className="text-[7px] uppercase tracking-[0.26em] text-brand-gold/90">
                                    {active.tagline}
                                </p>
                                <h3 className="text-lg md:text-xl text-brand-cream tracking-[0.14em] uppercase">
                                    {active.label}
                                </h3>
                                <p className="max-w-md text-[8px] md:text-[9px] text-brand-cream/78 leading-relaxed">
                                    {active.subtitle}
                                </p>
                            </div>
                            <div className="text-[7px] md:text-[8px] uppercase tracking-[0.18em] text-brand-gold/70">
                                Scroll &amp; hover the selections
                            </div>
                        </div>

                        {/* Hero card */}
                        <motion.div
                            className="
                                group relative overflow-hidden rounded
                                border border-brand-gold/32
                                bg-black/40 backdrop-blur-2xl
                                cursor-pointer
                            "
                            whileHover={{
                                y: -4,
                                boxShadow: "0 30px 120px rgba(0,0,0,1)",
                            }}
                            transition={{ type: "spring", stiffness: 220, damping: 24 }}
                            onClick={() =>
                                setActiveItem({
                                    ...hero,
                                    highlight: active.label,
                                })
                            }
                        >
                            <div className="relative h-40 md:h-52">
                                <Image
                                    src={hero.image}
                                    alt={hero.title}
                                    fill
                                    className="object-cover opacity-80 transition-opacity duration-500 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/45 to-black/10" />
                            </div>
                            <div className="absolute inset-0 pointer-events-none rounded border border-transparent group-hover:border-brand-gold/26 transition-colors duration-300" />
                            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 px-4 pb-3 md:px-6 md:pb-4">
                                <div className="space-y-1">
                                    <p className="text-[7px] uppercase tracking-[0.22em] text-brand-gold/90">
                                        Signature Highlight
                                    </p>
                                    <h4 className="text-base md:text-lg text-brand-cream leading-snug">
                                        {hero.title}
                                    </h4>
                                    {hero.meta && (
                                        <p className="text-[7px] text-brand-gold/78 uppercase tracking-[0.18em]">
                                            {hero.meta}
                                        </p>
                                    )}
                                </div>
                                <div className="flex flex-col items-end gap-1">
                                    <p className="text-[7px] text-brand-gold/75 uppercase tracking-[0.2em]">
                                        Tap for details
                                    </p>
                                    <span className="h-[1px] w-8 bg-brand-gold/80" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Thumbnails */}
                        <div className="space-y-2">
                            <p className="text-[7px] md:text-[8px] uppercase tracking-[0.22em] text-brand-gold/76">
                                {active.label} — Visual Selections
                            </p>
                            <div className="flex gap-3 md:gap-4 overflow-x-auto no-scrollbar pb-1">
                                {thumbs.map((item, index) => (
                                    <motion.button
                                        key={`${active.id}-${index}-${item.title}`}
                                        className="
                                            group relative shrink-0
                                            w-[64%] xs:w-[48%] sm:w-[34%] md:w-[24%] lg:w-[20%]
                                            overflow-hidden rounded
                                            border border-brand-gold/16
                                            bg-black/70 backdrop-blur-xl
                                            text-left
                                        "
                                        variants={thumbMotion}
                                        initial="rest"
                                        whileHover="hover"
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                        onClick={() =>
                                            setActiveItem({
                                                ...item,
                                                highlight: active.label,
                                            })
                                        }
                                    >
                                        <div className="relative h-36 md:h-44">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/96 via-black/45 to-transparent" />
                                            <div className="absolute bottom-2 left-2 right-2 space-y-0.5">
                                                <p className="text-[7px] uppercase tracking-[0.22em] text-brand-gold/95 line-clamp-1">
                                                    {item.title}
                                                </p>
                                                {item.meta && (
                                                    <p className="text-[7px] text-brand-cream/78 line-clamp-1">
                                                        {item.meta}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Modal Detail */}
            <AnimatePresence>
                {activeItem && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/82 backdrop-blur-md px-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setActiveItem(null)}
                    >
                        <motion.div
                            className="
                                relative w-full max-w-4xl
                                grid grid-cols-1 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.6fr)]
                                overflow-hidden rounded-3xl
                                border border-brand-gold/45
                                bg-gradient-to-br from-black/98 via-[#0b0f0c] to-brand-green/24
                                shadow-[0_32px_150px_rgba(0,0,0,1)]
                            "
                            initial={{ scale: 0.94, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.22, ease: "easeOut" }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setActiveItem(null)}
                                className="
                                    absolute right-3 top-3 z-20
                                    flex h-8 w-8 items-center justify-center
                                    rounded-full border border-brand-gold/60
                                    bg-black/80 text-brand-gold text-xs
                                    hover:bg-brand-gold hover:text-black
                                    transition-all
                                "
                            >
                                ×
                            </button>

                            <div className="relative h-56 md:h-auto md:min-h-[260px]">
                                <Image
                                    src={activeItem.image}
                                    alt={activeItem.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/45 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4 md:hidden">
                                    <p className="text-[8px] uppercase tracking-[0.26em] text-brand-gold/90">
                                        {activeItem.highlight}
                                    </p>
                                    <h4 className="text-xl text-brand-cream">
                                        {activeItem.title}
                                    </h4>
                                    {activeItem.meta && (
                                        <p className="mt-1 text-[7px] text-brand-gold/80">
                                            {activeItem.meta}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="flex flex-col gap-3 md:gap-4 p-5 md:p-7">
                                <div className="hidden md:block">
                                    <p className="mb-1 text-[8px] uppercase tracking-[0.26em] text-brand-gold/90">
                                        {activeItem.highlight}
                                    </p>
                                    <h4 className="text-2xl md:text-3xl text-brand-cream leading-snug">
                                        {activeItem.title}
                                    </h4>
                                    {activeItem.meta && (
                                        <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-brand-gold/82">
                                            {activeItem.meta}
                                        </p>
                                    )}
                                </div>

                                <div className="mt-1 space-y-2 text-[9px] md:text-sm text-brand-cream/94 leading-relaxed">
                                    {activeItem.description
                                        .split(/\n{2,}/)
                                        .map((block, idx) => (
                                            <p key={idx}>{block}</p>
                                        ))}
                                </div>

                                <div className="mt-auto flex justify-end pt-2">
                                    <button
                                        onClick={() => setActiveItem(null)}
                                        className="
                                            rounded-full border border-brand-gold/55
                                            px-4 py-1.5
                                            text-[8px] md:text-[9px]
                                            uppercase tracking-[0.22em]
                                            text-brand-gold
                                            hover:bg-brand-gold/12
                                            transition-all
                                        "
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}