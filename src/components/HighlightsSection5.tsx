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
    /**
     * ----------------------------------------------------------------------
     * 1) FOOD & BEVERAGE — updated with plating photos + tagline
     * ----------------------------------------------------------------------
     */
    {
        id: "food-beverage",
        label: "Food & Beverage",
        tagline: "Cuisine & Cellar",
        subtitle:
            "Signature tasting menus, raw bar rituals, and pairings crafted with modern French technique and coastal Bali nuance.",
        items: [
            {
                title: "Amuse-Bouche Selection",
                image: "/images/DSC00222.jpg",
                description:
                    "Small introductions that set the tone — bright, precise, and intentionally light on the palate.",
                meta: "Opening Course"
            },
            {
                title: "Bread & Butter Ritual",
                image: "/images/DSC00229.jpg",
                description:
                    "House-baked breads, cultured butter, and restrained accents — treated as a course, not a side.",
                meta: "Warm Start"
            },
            {
                title: "Seasonal Entrée",
                image: "/images/DSC00265.jpg",
                description:
                    "A composed main where sauce, garnish, and texture move in the same direction. Deep flavors, clean geometry.",
                meta: "Main Course"
            },
            {
                title: "Sauce at the Pass",
                image: "/images/DSC00263.jpg",
                description:
                    "Sauces built slowly and finished seconds before service — reductions, emulsions, and jus handled with discipline.",
                meta: "Kitchen Craft"
            },
            {
                title: "Fish Composition",
                image: "/images/DSC00279.jpg",
                description:
                    "Line-caught selections with bright, balanced accompaniments — a calm midpoint in the tasting sequence.",
                meta: "From the Sea"
            },
            {
                title: "Plated Tasting Course",
                image: "/images/DSC00309.jpg",
                description:
                    "A refined small plate designed to move the evening forward without overwhelming.",
                meta: "Tasting Menu"
            },
            {
                title: "Cheese & Savory Pre-Dessert",
                image: "/images/DSC00381.jpg",
                description:
                    "A shift toward warmth and subtlety — cheeses, savory notes, and textures that prepare the palate for dessert.",
                meta: "Transitional Course"
            },
            {
                title: "Dessert Composition",
                image: "/images/DSC00404.jpg",
                description:
                    "Light sweetness, measured temperature contrast, and elegant architecture — desserts built to refresh, not fatigue.",
                meta: "Signature Dessert"
            }
        ]
    },

    /**
     * ----------------------------------------------------------------------
     * 2) PLACE (renamed earlier as ATMOSPHERE but here kept as you defined)
     * ----------------------------------------------------------------------
     */
    {
        id: "place",
        label: "The Place",
        tagline: "Space & Setting",
        subtitle:
            "Deep greens, brass lines, soft light, and framed Nusa Dua views — intimate, cinematic, and acoustically calm.",
        items: [
            {
                title: "Main Dining Room",
                image: "/images/DSC04919-HDR.jpg",
                description:
                    "Linen, spacing, and warm pools of light curated for long, unhurried conversations.",
                meta: "Up to 60 Guests"
            },
            {
                title: "Rustic Corner",
                image: "/images/DSC04927-HDR.jpg",
                description:
                    "Vintage textures and warm tones — ideal for anniversaries and slow dinners.",
                meta: "Intimate Spot"
            },
            {
                title: "Wine Cellar Alcove",
                image: "/images/DSC04930-HDR.jpg",
                description:
                    "A quiet corner surrounded by bottles — perfect for tastings or deeper conversations.",
                meta: "Cellar Experience"
            },
            {
                title: "Bottle Wall",
                image: "/images/DSC04933-HDR.jpg",
                description:
                    "A visual anchor of curated bottles, setting an elegant tone for aperitifs.",
                meta: "Cellar Feature"
            },
            {
                title: "Garden Window Table",
                image: "/images/DSC04936-HDR.jpg",
                description:
                    "Natural daylight meets warm textures, ideal for brunch or early dinners.",
                meta: "Indoor Garden View"
            },
            {
                title: "Floral Lounge",
                image: "/images/DSC05669-HDR.jpg",
                description:
                    "Soft pillows, greenery, and a relaxed atmosphere for effortless pre-dinner drinks.",
                meta: "Cozy Corner"
            },
            {
                title: "Outdoor Terrace",
                image: "/images/DSC05705-HDR.jpg",
                description:
                    "Breezy and sunlit — one of the best spots for daytime dining.",
                meta: "Open Air"
            },
            {
                title: "Warm Private Room",
                image: "/images/DSC05811-HDR.jpg",
                description:
                    "Candlelight and warm shadows curated for proposals and private celebrations.",
                meta: "Private Seating"
            },
            {
                title: "Classic Interior",
                image: "/images/DSC05823-HDR.jpg",
                description:
                    "Traditional lines balanced with modern softness for a timeless dining feel.",
                meta: "Classic Room"
            }
        ]
    },

    /**
     * ----------------------------------------------------------------------
     * 3) EXPERIENCE — updated with group-table images
     * ----------------------------------------------------------------------
     */
    {
        id: "experience",
        label: "The Experience",
        tagline: "Atmosphere",
        subtitle:
            "Music, scent, pacing, and service layered with intention so the evening feels orchestrated, never staged.",
        items: [
            {
                title: "Tasting Table for Two",
                image: "/images/DSC00300.jpg",
                description:
                    "A choreography of courses paced gently around conversation.",
                meta: "Intimate Dining"
            },
            {
                title: "Champagne & Small Plates",
                image: "/images/DSC00321.jpg",
                description:
                    "Bright aperitifs and delicate plates to open the evening.",
                meta: "Aperitif Hour"
            },
            {
                title: "Chef’s Flight Service",
                image: "/images/DSC00326.jpg",
                description:
                    "A progressive sequence of dishes curated in clean, calm rhythm.",
                meta: "Curated Journey"
            },
            {
                title: "Wine-Led Evening",
                image: "/images/DSC00368.jpg",
                description:
                    "Bottles take center stage — menus arranged to frame the acidity, structure, and aromatics.",
                meta: "Sommelier Event"
            },
            {
                title: "Celebration Spread",
                image: "/images/DSC00371.jpg",
                description:
                    "A multi-plate, multi-glass layout designed for milestones and meaningful nights.",
                meta: "Occasion Ready"
            },
            {
                title: "Late-Night Courses",
                image: "/images/DSC00395.jpg",
                description:
                    "A darker soundtrack and deeper flavors for guests who prefer to dine late.",
                meta: "After Dark"
            }
        ]
    },

    /**
     * ----------------------------------------------------------------------
     * 4) TEAM & CRAFT — updated with action shots (hands, plating, service)
     * ----------------------------------------------------------------------
     */
    {
        id: "team-craft",
        label: "The Team & Craft",
        tagline: "People Behind The Room",
        subtitle:
            "A synchronized brigade of chefs, sommeliers, and hosts — exacting in craft, effortless in presence.",
        items: [
            {
                title: "Plating at the Pass",
                image: "/images/DSC00237.jpg",
                description:
                    "Precise hands shaping the plate before it meets the dining room.",
                meta: "Kitchen Brigade"
            },
            {
                title: "Final Garnish",
                image: "/images/DSC00252.jpg",
                description:
                    "Last-second details added with intention and discipline.",
                meta: "Finishing Touch"
            },
            {
                title: "Sauce Work",
                image: "/images/DSC00258.jpg",
                description:
                    "Controlled, deliberate pouring — a signature of the kitchen’s calm technique.",
                meta: "Classic Technique"
            },
            {
                title: "Garde-Manger Craft",
                image: "/images/DSC00269.jpg",
                description:
                    "Cold dishes built with brightness, geometry, and speed.",
                meta: "Cold Section"
            },
            {
                title: "Table Timing",
                image: "/images/DSC00287.jpg",
                description:
                    "Servers and chefs moving in coordinated rhythm — quiet, seamless, intentional.",
                meta: "Service Precision"
            },
            {
                title: "Wine & Glassware",
                image: "/images/DSC00316.jpg",
                description:
                    "Stemware polished by hand and matched to each bottle’s structure.",
                meta: "Sommelier Standard"
            },
            {
                title: "Menu Presentation",
                image: "/images/DSC00411.jpg",
                description:
                    "Menus offered with clarity and warmth — enough guidance, never pressure.",
                meta: "Guest Guidance"
            },
            {
                title: "Service Briefing",
                image: "/images/DSC00416.jpg",
                description:
                    "A quiet review of notes, reservations, and pacing before the first guest arrives.",
                meta: "Pre-Service Ritual"
            }
        ]
    }
];

const fadeSlide: Variants = {
    initial: { opacity: 0, y: 18 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: "easeOut" },
    },
    exit: {
        opacity: 0,
        y: -14,
        transition: { duration: 0.3, ease: "easeIn" },
    },
};

export default function CinematicHighlightsSection() {
    const [activeId, setActiveId] = useState<string>(HIGHLIGHTS[0].id);
    const [activeItem, setActiveItem] = useState<ActiveItem | null>(null);

    const active =
        HIGHLIGHTS.find((highlight) => highlight.id === activeId) ??
        HIGHLIGHTS[0];

    const hero = active.items[0];

    return (
        <section className="relative bg-black text-brand-cream overflow-hidden">
            {/* Soft background vignette */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(200,169,107,0.08),transparent_65%)] opacity-80" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(0,0,0,0.9),transparent_70%)]" />

            {/* Layout container */}
            <div className="relative z-10 mx-auto max-w-6xl px-4 py-18 md:py-24">
                {/* Top heading */}
                <div className="mb-10 space-y-3 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-black/70 px-4 py-1.5 backdrop-blur-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                        <span className="text-[8px] uppercase tracking-[0.26em] text-brand-gold/90">
                            Jard&apos;or Curated Chapters
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl uppercase tracking-[0.18em] text-brand-cream">
                        Jard&apos;or Cinematic Tableau
                    </h2>
                    <p className="mx-auto max-w-xl text-[9px] md:text-[10px] text-brand-cream/72 leading-relaxed">
                        One still frame at a time — menus, rooms, and people rendered as a quiet gallery.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[0.9fr_minmax(0,1.6fr)_minmax(0,1.2fr)] gap-8 items-stretch">
                    {/* Left: vertical nav */}
                    <div className="flex md:flex-col gap-3 md:gap-4 md:pt-4 md:border-l md:border-brand-gold/14 md:pl-4">
                        {HIGHLIGHTS.map((h) => {
                            const isActive = h.id === activeId;
                            return (
                                <button
                                    key={h.id}
                                    onClick={() => setActiveId(h.id)}
                                    className={[
                                        "group flex flex-col items-start gap-0.5 text-left transition-colors",
                                        isActive
                                            ? "text-brand-gold"
                                            : "text-brand-cream/46 hover:text-brand-gold/80",
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
                                            layoutId="cinematic-nav"
                                            className="mt-0.5 h-[1px] w-8 bg-brand-gold"
                                            transition={{ duration: 0.25 }}
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* Center: tall hero image */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active.id + "-hero"}
                            variants={fadeSlide}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="relative h-64 md:h-[360px] rounded-3xl overflow-hidden border border-brand-gold/18 bg-black/70 backdrop-blur-xl shadow-[0_26px_120px_rgba(0,0,0,0.98)]"
                        >
                            <Image
                                src={hero.image}
                                alt={hero.title}
                                fill
                                className="object-cover transition-transform duration-[1400ms] hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
                            <div className="absolute left-4 right-4 bottom-4 flex items-end justify-between gap-4">
                                <div className="space-y-1">
                                    <p className="text-[7px] uppercase tracking-[0.25em] text-brand-gold/90">
                                        {active.tagline}
                                    </p>
                                    <h3 className="text-base md:text-lg text-brand-cream tracking-[0.14em] uppercase">
                                        {active.label}
                                    </h3>
                                    <p className="max-w-xs text-[7px] md:text-[8px] text-brand-cream/78 leading-relaxed">
                                        {active.subtitle}
                                    </p>
                                </div>
                                <div className="hidden md:flex flex-col items-end gap-1">
                                    <p className="text-[7px] uppercase tracking-[0.22em] text-brand-gold/80">
                                        Scroll the gallery
                                    </p>
                                    <span className="h-[1px] w-7 bg-brand-gold/85" />
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Right: signature & mini gallery */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active.id + "-sidepanel"}
                            variants={fadeSlide}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="flex flex-col gap-4 md:gap-5 justify-between"
                        >
                            {/* Signature highlight card */}
                            <motion.button
                                onClick={() =>
                                    setActiveItem({
                                        ...hero,
                                        highlight: active.label,
                                    })
                                }
                                className="
                  group relative overflow-hidden rounded-2xl
                  bg-black/82 backdrop-blur-2xl
                  border border-brand-gold/22
                  px-4 py-4
                  text-left
                  shadow-[0_18px_80px_rgba(0,0,0,1)]
                "
                                whileHover={{
                                    y: -2,
                                    boxShadow: "0 26px 120px rgba(0,0,0,1)",
                                    borderColor: "rgba(200,169,107,0.4)",
                                }}
                                transition={{ type: "spring", stiffness: 220, damping: 24 }}
                            >
                                <p className="text-[7px] uppercase tracking-[0.24em] text-brand-gold/90">
                                    Signature Highlight
                                </p>
                                <h4 className="mt-1 text-base md:text-lg text-brand-cream leading-snug">
                                    {hero.title}
                                </h4>
                                {hero.meta && (
                                    <p className="mt-0.5 text-[7px] uppercase tracking-[0.2em] text-brand-gold/82">
                                        {hero.meta}
                                    </p>
                                )}
                                <p className="mt-2 text-[7px] md:text-[8px] text-brand-cream/70 line-clamp-3">
                                    {hero.description}
                                </p>
                                <div className="mt-3 flex items-center justify-between">
                                    <span className="text-[7px] text-brand-cream/60">
                                        Tap for full story
                                    </span>
                                    <span className="h-[1px] w-6 bg-brand-gold/80" />
                                </div>
                                <div className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent group-hover:border-brand-gold/26 transition-colors duration-300" />
                            </motion.button>

                            {/* Minimal visual selections */}
                            <div className="space-y-2">
                                <p className="text-[7px] uppercase tracking-[0.22em] text-brand-gold/76">
                                    {active.label} — Visual Selections
                                </p>
                                <div className="flex gap-2.5 overflow-x-auto no-scrollbar">
                                    {active.items.map((item, index) => (
                                        <motion.button
                                            key={`${active.id}-${index}-${item.title}`}
                                            className="
                        group relative shrink-0
                        w-20 h-20 md:w-24 md:h-24
                        rounded-2xl overflow-hidden
                        bg-black/80 border border-brand-gold/16
                      "
                                            whileHover={{
                                                y: -2,
                                                scale: 1.04,
                                            }}
                                            onClick={() =>
                                                setActiveItem({
                                                    ...item,
                                                    highlight: active.label,
                                                })
                                            }
                                        >
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                                            <p className="absolute bottom-1 left-1 right-1 text-[6px] uppercase tracking-[0.16em] text-brand-gold/90 line-clamp-1">
                                                {item.title}
                                            </p>
                                        </motion.button>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
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
                border border-brand-gold/40
                bg-gradient-to-br from-black/98 via-[#0b0f0c] to-brand-green/20
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

                            {/* Image */}
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

                            {/* Content */}
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