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
    tagline: string;
    subtitle: string;
    items: HighlightItem[];
};

type ActiveItem = HighlightItem & { highlight: string };

const HIGHLIGHTS: Highlight[] = [
    {
        id: "food-beverage",
        label: "Food & Beverage",
        tagline: "Cuisine & Cellar",
        subtitle:
            "Signature menus, raw bar rituals, and pairings that trace a calm, modern French narrative with coastal Bali nuance.",
        items: [
            {
                title: "Chef's Tasting Menu",
                image: "/images/main-food.jpg",
                description:
                    "A seven-course journey moving from bright coastal notes to deeper, comforting finishes. French technique, island details, no filler plates.",
                meta: "7 Courses · Seasonal"
            },
            {
                title: "Wine Pairing Selection",
                image: "/images/main-food-2.jpg",
                description:
                    "Sommelier-led pairings that follow the rhythm of each dish — elegant, balanced, and quietly precise.",
                meta: "Sommelier Curated"
            },
            {
                title: "Caviar & Oyster Bar",
                image: "/images/main-food.jpg",
                description:
                    "A focused ritual of ice-cold oysters, caviar, and clean garnishes. Perfect as a prologue or stand-alone indulgence.",
                meta: "Raw Bar Ritual"
            },
            {
                title: "Dessert Atelier",
                image: "/images/main-food-3.jpg",
                description:
                    "Light, layered, architectural pâtisserie with restrained sweetness and temperature play.",
                meta: "Pâtisserie Fine"
            },
            {
                title: "Lunch Degustation",
                image: "/images/main-food-2.jpg",
                description:
                    "A time-conscious, brighter expression of Jard’or — tailored for midday without losing depth.",
                meta: "Daylight Menu"
            },
            {
                title: "Vegetarian Composition",
                image: "/images/main-food-3.jpg",
                description:
                    "Smoke, char, broth, and grains — plants treated with the same discipline as the classics.",
                meta: "Limited Seats"
            }
            // Tambah lagi pun aman
        ]
    },
    {
        id: "place",
        label: "The Place",
        tagline: "Space & Setting",
        subtitle:
            "Deep greens, brass lines, soft light, and framed Nusa Dua views — intimate, cinematic, and acoustically calm.",
        items: [
            {
                title: "Main Dining Room",
                image: "/images/main-food-2.jpg",
                description:
                    "Linen, spacing, and warm pools of light curated for long, unhurried conversations.",
                meta: "Up to 60 Guests"
            },
            {
                title: "Private Room",
                image: "/images/main-food.jpg",
                description:
                    "A concealed salon for board dinners, families, and quiet celebrations with tailored menus.",
                meta: "Discrete & Tailored"
            },
            {
                title: "Wine Library",
                image: "/images/main-food-3.jpg",
                description:
                    "Walls of bottles, low seating, and guided tastings for guests who enjoy time in the cellar.",
                meta: "Cellar Experience"
            },
            {
                title: "Outdoor Terrace",
                image: "/images/main-food.jpg",
                description:
                    "Golden-hour horizon, candlelit edges, and soft breeze for aperitifs and sundowners.",
                meta: "Sunset Favorite"
            },
            {
                title: "Garden Pavilion",
                image: "/images/main-food-2.jpg",
                description:
                    "A tucked pavilion framed by greenery for proposals, elopements, and intimate ceremonies.",
                meta: "Private Venue"
            }
        ]
    },
    {
        id: "experience",
        label: "The Experience",
        tagline: "Atmosphere",
        subtitle:
            "Music, scent, pacing, and service layered with intention so the evening feels orchestrated, never staged.",
        items: [
            {
                title: "Live Piano Evenings",
                image: "/images/main-food-3.jpg",
                description:
                    "Soft instrumentals that hold the room without overpowering a single table.",
                meta: "Fri–Sun · 7–10 PM"
            },
            {
                title: "Seasonal Journeys",
                image: "/images/main-food.jpg",
                description:
                    "Menus that move with tides and markets, inviting guests to return throughout the year.",
                meta: "Rotating Menus"
            },
            {
                title: "Wine Tasting Nights",
                image: "/images/main-food-2.jpg",
                description:
                    "Thematic flights around regions or varietals, guided in human language — minimal jargon.",
                meta: "Limited Seats"
            },
            {
                title: "Midnight Soirée",
                image: "/images/main-food-2.jpg",
                description:
                    "Late-night courses, darker playlists, and longer pacing for a small circle.",
                meta: "By Invitation"
            },
            {
                title: "House Scent & Details",
                image: "/images/main-food.jpg",
                description:
                    "Subtle signature scent, tactile menus, and art pieces that echo the geometry of the space.",
                meta: "Sensory Layers"
            }
        ]
    },
    {
        id: "team-craft",
        label: "The Team & Craft",
        tagline: "People Behind The Room",
        subtitle:
            "A synchronized brigade of chefs, sommeliers, and hosts — exacting in craft, effortless in presence.",
        items: [
            {
                title: "Executive Chef",
                image: "/images/main-food-2.jpg",
                description:
                    "Defines Jard’or’s flavor language: minimal ornament, maximum clarity.",
                meta: "French-Trained"
            },
            {
                title: "Pastry Maestro",
                image: "/images/main-food-3.jpg",
                description:
                    "Designs finales that refresh — light textures, clean lines, lasting memory.",
                meta: "Signature Desserts"
            },
            {
                title: "Sommelier",
                image: "/images/main-food.jpg",
                description:
                    "Curates a cellar built on character and story, not just labels.",
                meta: "WSET Certified"
            },
            {
                title: "Mixologist",
                image: "/images/main-food-2.jpg",
                description:
                    "Composes drinks that sit beside the menu, never louder than it.",
                meta: "House Signatures"
            },
            {
                title: "Hospitality Team",
                image: "/images/main-food.jpg",
                description:
                    "Reads the room, calibrates the distance, and lets guests lead the evening.",
                meta: "Warm Precision"
            },
            {
                title: "Culinary Research Lab",
                image: "/images/main-food-3.jpg",
                description:
                    "Quietly develops ferments, stocks, and preserves that appear as subtle details on the plate.",
                meta: "R&D Studio"
            }
        ]
    }
];

const panelVariants: Variants = {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
    exit: { opacity: 0, y: -12, transition: { duration: 0.3, ease: "easeIn" } }
};

const thumbHover: Variants = {
    rest: {
        y: 0,
        scale: 1,
        borderColor: "rgba(200,169,107,0.16)",
        boxShadow: "0 14px 40px rgba(0,0,0,0.7)"
    },
    hover: {
        y: -6,
        scale: 1.04,
        borderColor: "rgba(200,169,107,0.5)",
        boxShadow: "0 22px 80px rgba(0,0,0,0.96)",
        transition: { type: "spring", stiffness: 230, damping: 22 }
    }
};

export default function HighlightsSection() {
    const [activeId, setActiveId] = useState<string>(HIGHLIGHTS[0].id);
    const [activeItem, setActiveItem] = useState<ActiveItem | null>(null);

    const active =
        HIGHLIGHTS.find((highlight) => highlight.id === activeId) ?? HIGHLIGHTS[0];

    const hero = active.items[0];
    const thumbs = active.items; // semua item tampil di strip, scalable

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-black via-[#050806] to-brand-green/95 py-16 md:py-24">
            {/* soft glows */}
            <div className="pointer-events-none absolute -top-32 right-0 h-64 w-64 rounded-full bg-brand-gold/7 blur-3xl" />
            <div className="pointer-events-none absolute bottom-[-40px] left-10 h-52 w-52 rounded-full bg-brand-gold/5 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-6xl px-4 space-y-10">
                {/* Header */}
                <div className="space-y-4 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-black/40 px-4 py-1.5 backdrop-blur-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                        <span className="text-[8px] uppercase tracking-[0.26em] text-brand-gold/90">
                            Jard&apos;or Highlights
                        </span>
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl uppercase tracking-[0.16em] text-brand-cream">
                        A Curated Visual Story
                    </h2>
                    <p className="mx-auto max-w-2xl text-[10px] md:text-xs leading-relaxed text-brand-cream/78">
                        Explore Jard&apos;or through image-led highlights — each frame a doorway
                        into the menus, rooms, experiences, and people that define the house.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap items-center justify-center gap-4 border-y border-brand-gold/12 py-4">
                    {HIGHLIGHTS.map((h) => {
                        const isActive = h.id === activeId;
                        return (
                            <button
                                key={h.id}
                                onClick={() => setActiveId(h.id)}
                                className={[
                                    "relative px-3 md:px-4 py-1.5 flex flex-col items-center gap-0.5 transition-colors",
                                    isActive
                                        ? "text-brand-gold"
                                        : "text-brand-cream/60 hover:text-brand-gold/80"
                                ].join(" ")}
                            >
                                <span className="text-[8px] uppercase tracking-[0.22em]">
                                    {h.tagline}
                                </span>
                                <span className="font-serif text-xs md:text-sm uppercase tracking-[0.16em]">
                                    {h.label}
                                </span>
                                {isActive && (
                                    <motion.span
                                        layoutId="hl-underline"
                                        className="mt-1 h-[1px] w-full bg-brand-gold"
                                        initial={false}
                                        transition={{ duration: 0.28 }}
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Active panel */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active.id}
                        variants={panelVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="space-y-6 pt-4"
                    >
                        {/* Hero image big & bold */}
                        <motion.div
                            className="relative overflow-hidden rounded-3xl border border-brand-gold/22 bg-gradient-to-br from-black/96 via-[#111411]/96 to-brand-green/26 backdrop-blur-xl cursor-pointer"
                            whileHover={{
                                scale: 1.01,
                                boxShadow: "0 30px 120px rgba(0,0,0,1)"
                            }}
                            transition={{ type: "spring", stiffness: 200, damping: 26 }}
                            onClick={() =>
                                setActiveItem({
                                    ...hero,
                                    highlight: active.label
                                })
                            }
                        >
                            <div className="relative h-[230px] md:h-[340px]">
                                <Image
                                    src={hero.image}
                                    alt={hero.title}
                                    fill
                                    priority
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/35 to-transparent" />
                                <div className="absolute left-6 right-6 bottom-6 space-y-1.5">
                                    <p className="text-[8px] uppercase tracking-[0.26em] text-brand-gold/92">
                                        {active.tagline}
                                    </p>
                                    <h3 className="font-serif text-2xl md:text-3xl text-brand-cream leading-snug">
                                        {hero.title}
                                    </h3>
                                    <p className="max-w-xl text-[8px] md:text-[9px] text-brand-cream/80 leading-relaxed line-clamp-3 md:line-clamp-4">
                                        {active.subtitle}
                                    </p>
                                    {hero.meta && (
                                        <p className="text-[8px] text-brand-gold/82 uppercase tracking-[0.18em]">
                                            {hero.meta}
                                        </p>
                                    )}
                                    <p className="text-[7px] md:text-[8px] text-brand-gold/75 uppercase tracking-[0.22em]">
                                        View full story
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Image-led strip for ALL items (supports many) */}
                        <div className="space-y-2">
                            <p className="text-[8px] md:text-[9px] uppercase tracking-[0.22em] text-brand-gold/72">
                                {active.label} Selections
                            </p>
                            <div
                                className="
                  flex gap-3 md:gap-4 overflow-x-auto no-scrollbar
                  pb-1
                "
                            >
                                {thumbs.map((item, index) => (
                                    <motion.button
                                        key={`${active.id}-${index}-${item.title}`}
                                        variants={thumbHover}
                                        initial="rest"
                                        whileHover="hover"
                                        className="
                      group relative shrink-0
                      w-[62%] xs:w-[48%] sm:w-[34%] md:w-[26%] lg:w-[22%]
                      overflow-hidden rounded-2xl
                      border bg-black/82 backdrop-blur-xl
                      text-left
                    "
                                        onClick={() =>
                                            setActiveItem({
                                                ...item,
                                                highlight: active.label
                                            })
                                        }
                                    >
                                        <div className="relative h-40 md:h-48">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/96 via-black/40 to-transparent" />
                                            <div className="absolute bottom-2 left-2 right-2 space-y-0.5">
                                                <p className="text-[7px] uppercase tracking-[0.22em] text-brand-gold/92 line-clamp-1">
                                                    {item.title}
                                                </p>
                                                {item.meta && (
                                                    <p className="text-[7px] text-brand-cream/72 line-clamp-1">
                                                        {item.meta}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                        <div className="px-2.5 pt-1.5 pb-2">
                                            <p className="text-[7px] md:text-[8px] text-brand-cream/78 leading-relaxed line-clamp-3">
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Modal detail */}
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
                                    <h4 className="font-serif text-xl text-brand-cream">
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
                                    <h4 className="font-serif text-2xl md:text-3xl text-brand-cream leading-snug">
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