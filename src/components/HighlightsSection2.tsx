"use client";

import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useState } from "react";

type HighlightItem = {
    title: string;
    image: string;
    description: string;
    meta?: string;
};

type Highlight = {
    id: string;
    label: string;
    subtitle: string;
    items: HighlightItem[];
};

type ActiveItem = HighlightItem & { highlight: string };

const highlights: Highlight[] = [
    {
        id: "food-beverage",
        label: "The Menu",
        subtitle:
            "Chef-driven tasting menus, refined plates, and curated pairings that tell Jard’or’s culinary story with precision.",
        items: [
            {
                title: "Chef's Tasting Menu",
                image: "/images/main-food.jpg",
                description:
                    "A composed 7-course journey from bright coastal notes to deeper, warm finishes. French technique, island nuance, and disciplined pacing for guests who want the full narrative in one sitting.",
                meta: "7 Courses · Seasonal"
            },
            {
                title: "Wine Pairing Selection",
                image: "/images/main-food-2.jpg",
                description:
                    "Sommelier-led pairings that follow the arc of the menu: clean, lifted, and textural. Focused on balance over labels.",
                meta: "Sommelier Curated"
            },
            {
                title: "Caviar & Oyster Service",
                image: "/images/main-food.jpg",
                description:
                    "Ice-cold oysters, caviar, and precise garnishes as a prelude or a stand-alone ritual at the bar.",
                meta: "Signature Ritual"
            },
            {
                title: "Dessert Atelier",
                image: "/images/main-food-3.jpg",
                description:
                    "Restrained sweetness, temperature contrasts, and clean lines. A final chapter that refreshes, not overwhelms.",
                meta: "Pâtisserie Fine"
            }
        ]
    },
    {
        id: "place",
        label: "The Room",
        subtitle:
            "Deep greens, brass accents, softened light, and considered acoustics overlooking Nusa Dua — intimate, not intimidating.",
        items: [
            {
                title: "Main Dining Room",
                image: "/images/main-food-2.jpg",
                description:
                    "Generous spacing, warm pools of light, and textures that hush the room. Designed for long conversations.",
                meta: "Up to 60 Guests"
            },
            {
                title: "Private Salon",
                image: "/images/main-food.jpg",
                description:
                    "A concealed room for executive dinners, families, and inner-circle evenings with tailored menus and dedicated service.",
                meta: "Up to 10 Guests"
            },
            {
                title: "Wine Library",
                image: "/images/main-food-3.jpg",
                description:
                    "Walls of bottles and quiet corners for intimate tastings, pre-dinner pours, and cellar moments.",
                meta: "Sommelier Guided"
            },
            {
                title: "Terrace & Pavilion",
                image: "/images/main-food.jpg",
                description:
                    "Golden-hour terrace and garden pavilion for proposals, elopements, and small celebrations.",
                meta: "Sunset & Occasions"
            }
        ]
    },
    {
        id: "experience",
        label: "The Experience",
        subtitle:
            "Music, scent, pacing, and light — every detail tuned so the room feels effortlessly choreographed.",
        items: [
            {
                title: "Live Piano Evenings",
                image: "/images/main-food-3.jpg",
                description:
                    "Soft instrumentals that frame the room without overtaking it. For nights that feel quietly alive.",
                meta: "Fri–Sun 7–10 PM"
            },
            {
                title: "Seasonal Journeys",
                image: "/images/main-food.jpg",
                description:
                    "Menus that move with tides and markets — inviting guests to return each season.",
                meta: "Quarterly Rotation"
            },
            {
                title: "Wine & Pairing Nights",
                image: "/images/main-food-2.jpg",
                description:
                    "Focused flights around regions, producers, or stories. Minimal jargon, maximum clarity.",
                meta: "Limited Seats"
            },
            {
                title: "Midnight Soirée",
                image: "/images/main-food-2.jpg",
                description:
                    "Late service, deeper playlists, longer courses for a small circle that lingers.",
                meta: "By Invitation"
            }
        ]
    },
    {
        id: "team-craft",
        label: "The People",
        subtitle:
            "A brigade of chefs, sommeliers, and hosts moving in sync — precise in craft, warm in presence.",
        items: [
            {
                title: "Executive Chef",
                image: "/images/main-food-2.jpg",
                description:
                    "Defines Jard’or’s flavor language: minimal text on the plate, confident structure, no filler dishes.",
                meta: "French-Trained"
            },
            {
                title: "Pastry Atelier",
                image: "/images/main-food-3.jpg",
                description:
                    "Designs endings that are lifted, textural, and memorable in the last five minutes of service.",
                meta: "Signature Desserts"
            },
            {
                title: "Sommelier & Cellar",
                image: "/images/main-food.jpg",
                description:
                    "Keeps the list sharp yet approachable; listens first, then pours.",
                meta: "WSET Certified"
            },
            {
                title: "Hospitality Team",
                image: "/images/main-food-2.jpg",
                description:
                    "Reads the room, calibrates the pace, and keeps refinement relaxed.",
                meta: "Service Choreography"
            }
        ]
    }
];

const sectionFade: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const cardHover: Variants = {
    rest: { y: 0, scale: 1, boxShadow: "0 18px 55px rgba(0,0,0,0.65)" },
    hover: {
        y: -6,
        scale: 1.03,
        boxShadow: "0 26px 80px rgba(0,0,0,0.9)",
        transition: { type: "spring", stiffness: 220, damping: 22 }
    }
};

export default function HighlightsSection() {
    const [activeHighlightId, setActiveHighlightId] = useState<string>(
        highlights[0]?.id
    );
    const [activeItem, setActiveItem] = useState<ActiveItem | null>(null);

    const activeHighlight =
        highlights.find((h) => h.id === activeHighlightId) ?? highlights[0];

    const featured = activeHighlight.items[0];
    const secondary = activeHighlight.items.slice(1, 4);

    return (
        <section className="relative bg-gradient-to-b from-black via-[#050806] to-brand-green/95 py-16 md:py-24 overflow-hidden">
            {/* subtle glow */}
            <div className="pointer-events-none absolute -top-40 right-10 h-64 w-64 rounded-full bg-brand-gold/5 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-10 h-48 w-48 rounded-full bg-brand-gold/5 blur-3xl" />

            <motion.div
                className="mx-auto max-w-6xl px-4 relative z-10"
                variants={sectionFade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {/* Header */}
                <div className="text-center mb-14 space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 px-4 py-1.5 bg-black/40 backdrop-blur-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                        <span className="text-[8px] uppercase tracking-[0.26em] text-brand-gold/90">
                            Jard&apos;or Highlights
                        </span>
                    </div>

                    <h2 className="font-serif text-3xl md:text-4xl text-brand-cream tracking-[0.16em] uppercase">
                        A Curated Glimpse Into Jard&apos;or
                    </h2>

                    <div className="flex justify-center">
                        <motion.span
                            className="block h-px bg-brand-gold/80"
                            initial={{ width: 0 }}
                            animate={{ width: 96 }}
                            transition={{ duration: 0.9, ease: "easeInOut" }}
                        />
                    </div>

                    <p className="mx-auto max-w-2xl text-[10px] md:text-xs text-brand-cream/78 leading-relaxed">
                        Four lenses — Menu, Room, Experience, People — woven into one
                        deliberate, modern fine dining narrative.
                    </p>
                </div>

                {/* Layout */}
                <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] items-start">
                    {/* Left: Category Rail */}
                    <div className="space-y-6">
                        <div className="hidden md:block text-[9px] uppercase tracking-[0.18em] text-brand-gold/70">
                            Discover by Chapter
                        </div>

                        <div className="flex md:flex-col gap-2 md:gap-3 overflow-x-auto md:overflow-visible no-scrollbar">
                            {highlights.map((group, index) => {
                                const isActive = group.id === activeHighlightId;
                                return (
                                    <button
                                        key={group.id}
                                        onClick={() => setActiveHighlightId(group.id)}
                                        className={[
                                            "group relative flex items-center justify-between md:justify-start gap-3 rounded-full md:rounded-2xl border px-4 py-2 md:px-4 md:py-3 transition-all duration-300 shrink-0",
                                            isActive
                                                ? "border-brand-gold/70 bg-brand-gold/10"
                                                : "border-brand-gold/10 bg-black/40 hover:border-brand-gold/40 hover:bg-brand-gold/5"
                                        ].join(" ")}
                                    >
                                        <div className="flex flex-col items-start">
                                            <span
                                                className={[
                                                    "text-[8px] uppercase tracking-[0.22em]",
                                                    isActive
                                                        ? "text-brand-gold"
                                                        : "text-brand-gold/55 group-hover:text-brand-gold/80"
                                                ].join(" ")}
                                            >
                                                {String(index + 1).padStart(2, "0")} • Highlight
                                            </span>
                                            <span className="font-serif text-xs md:text-sm text-brand-cream">
                                                {group.label}
                                            </span>
                                        </div>
                                        <span
                                            className={[
                                                "hidden md:flex h-6 w-6 items-center justify-center rounded-full border text-[9px]",
                                                isActive
                                                    ? "border-brand-gold text-brand-gold bg-black"
                                                    : "border-brand-gold/25 text-brand-gold/55 group-hover:text-brand-gold/90"
                                            ].join(" ")}
                                        >
                                            ↗
                                        </span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Active subtitle */}
                        <p className="text-[9px] md:text-[10px] text-brand-cream/80 leading-relaxed md:max-w-xs">
                            {activeHighlight.subtitle}
                        </p>
                    </div>

                    {/* Right: Cards */}
                    <div className="space-y-4">
                        {/* Featured card */}
                        <motion.div
                            variants={cardHover}
                            initial="rest"
                            whileHover="hover"
                            className="relative overflow-hidden rounded-3xl border border-brand-gold/20 bg-gradient-to-br from-black/90 via-[#101512]/95 to-brand-green/30 backdrop-blur-xl cursor-pointer"
                            onClick={() =>
                                setActiveItem({
                                    ...featured,
                                    highlight: activeHighlight.label
                                })
                            }
                        >
                            <div className="grid md:grid-cols-[1.4fr_minmax(0,1.6fr)] gap-0">
                                <div className="relative h-52 md:h-64">
                                    <Image
                                        src={featured.image}
                                        alt={featured.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/35 to-transparent" />
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <p className="text-[8px] uppercase tracking-[0.22em] text-brand-gold/85">
                                            {activeHighlight.label}
                                        </p>
                                        <h3 className="font-serif text-xl md:text-2xl text-brand-cream leading-snug">
                                            {featured.title}
                                        </h3>
                                        {featured.meta && (
                                            <p className="text-[8px] text-brand-gold/80 mt-1">
                                                {featured.meta}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="p-4 md:p-6 flex flex-col justify-between gap-3">
                                    <p className="text-[9px] md:text-[10px] text-brand-cream/88 leading-relaxed line-clamp-5 md:line-clamp-7">
                                        {featured.description}
                                    </p>
                                    <div className="flex items-center justify-between gap-3 pt-1">
                                        <span className="text-[8px] text-brand-gold/70 uppercase tracking-[0.2em]">
                                            Tap to view full story
                                        </span>
                                        <span className="h-px w-10 bg-brand-gold/60" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Secondary cards */}
                        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3">
                            {secondary.map((item, i) => (
                                <motion.button
                                    key={`${activeHighlight.id}-${i}`}
                                    variants={cardHover}
                                    initial="rest"
                                    whileHover="hover"
                                    onClick={() =>
                                        setActiveItem({
                                            ...item,
                                            highlight: activeHighlight.label
                                        })
                                    }
                                    className="group relative overflow-hidden rounded-2xl border border-brand-gold/16 bg-black/70 backdrop-blur-xl text-left"
                                >
                                    <div className="relative h-32">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                                        <div className="absolute bottom-2 left-2 right-2">
                                            <p className="text-[7px] uppercase tracking-[0.22em] text-brand-gold/90 line-clamp-1">
                                                {item.title}
                                            </p>
                                            {item.meta && (
                                                <p className="text-[7px] text-brand-cream/70 line-clamp-1">
                                                    {item.meta}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="p-3 space-y-1.5">
                                        <p className="text-[8px] text-brand-cream/80 leading-relaxed line-clamp-3">
                                            {item.description}
                                        </p>
                                        <span className="inline-flex items-center gap-1 text-[7px] text-brand-gold/70 uppercase tracking-[0.18em]">
                                            View Detail
                                            <span>↗</span>
                                        </span>
                                    </div>
                                </motion.button>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Modal */}
            <AnimatePresence>
                {activeItem && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md px-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setActiveItem(null)}
                    >
                        <motion.div
                            className="relative w-full max-w-4xl rounded-3xl border border-brand-gold/45 bg-gradient-to-br from-black/96 via-[#0b0f0c] to-brand-green/30 shadow-[0_30px_140px_rgba(0,0,0,1)] overflow-hidden grid grid-cols-1 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1.65fr)]"
                            initial={{ scale: 0.94, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.22, ease: "easeOut" }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setActiveItem(null)}
                                className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-brand-gold/60 bg-black/70 text-brand-gold text-xs hover:bg-brand-gold hover:text-black transition-all"
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
                                <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/30 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4 md:hidden">
                                    <p className="text-[8px] uppercase tracking-[0.24em] text-brand-gold/85">
                                        {activeItem.highlight}
                                    </p>
                                    <h4 className="font-serif text-xl text-brand-cream">
                                        {activeItem.title}
                                    </h4>
                                    {activeItem.meta && (
                                        <p className="text-[7px] text-brand-gold/80 mt-0.5">
                                            {activeItem.meta}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="p-5 md:p-7 flex flex-col gap-3 md:gap-4">
                                <div className="hidden md:block">
                                    <p className="text-[8px] uppercase tracking-[0.26em] text-brand-gold/85 mb-1">
                                        {activeItem.highlight}
                                    </p>
                                    <h4 className="font-serif text-2xl md:text-3xl text-brand-cream leading-snug">
                                        {activeItem.title}
                                    </h4>
                                    {activeItem.meta && (
                                        <p className="text-[8px] text-brand-gold/80 mt-1 uppercase tracking-[0.2em]">
                                            {activeItem.meta}
                                        </p>
                                    )}
                                </div>

                                <div className="mt-1 space-y-2 text-[9px] md:text-sm text-brand-cream/92 leading-relaxed">
                                    {activeItem.description
                                        .split(/\n{2,}/)
                                        .map((block, idx) => <p key={idx}>{block}</p>)}
                                </div>

                                <div className="mt-auto flex justify-end pt-2">
                                    <button
                                        onClick={() => setActiveItem(null)}
                                        className="rounded-full border border-brand-gold/50 px-4 py-1.5 text-[8px] md:text-[9px] uppercase tracking-[0.22em] text-brand-gold hover:bg-brand-gold/10 transition-all"
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