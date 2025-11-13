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
    /**
     * 1) FOOD & BEVERAGE – pakai foto plating single-dish
     */
    {
        id: "food-beverage",
        label: "Food & Beverage",
        subtitle:
            "Signature tasting menus, crafted plates, and quietly confident flavors — each course composed for balance and clarity.",
        items: [
            {
                title: "Amuse-Bouche Selection",
                image: "/images/DSC00222.jpg",
                description:
                    "One-bite introductions that set the tone of the evening — precise, bright, and intentionally light on the palate.",
                meta: "Opening Course",
            },
            {
                title: "Bread & Butter Service",
                image: "/images/DSC00229.jpg",
                description:
                    "House-baked breads with cultured butter and subtle accents — treated as a course, not a side.",
                meta: "Warm Start",
            },
            {
                title: "Signature Entrée",
                image: "/images/DSC00265.jpg",
                description:
                    "Thoughtfully plated mains where sauce, garnish, and texture move in the same direction, never competing.",
                meta: "Main Course",
            },
            {
                title: "Sauce at the Pass",
                image: "/images/DSC00263.jpg",
                description:
                    "A focus on sauces built slowly — reductions, jus, and emulsions that quietly anchor each plate.",
                meta: "Kitchen Craft",
            },
            {
                title: "Seasonal Fish Course",
                image: "/images/DSC00279.jpg",
                description:
                    "Line-caught fish with restrained accompaniments, emphasizing freshness, temperature, and clean flavor.",
                meta: "From the Sea",
            },
            {
                title: "Plated Tasting Course",
                image: "/images/DSC00309.jpg",
                description:
                    "Small-format dishes designed to move the menu forward without overwhelming, ideal within the tasting sequence.",
                meta: "Tasting Menu",
            },
            {
                title: "Cheese & Savory Finish",
                image: "/images/DSC00381.jpg",
                description:
                    "A composed plate of cheese and savory elements for guests who prefer a gentle transition before dessert.",
                meta: "Pre-Dessert",
            },
            {
                title: "Dessert Composition",
                image: "/images/DSC00404.jpg",
                description:
                    "Measured sweetness, precise geometry, and temperature contrast — endings built to refresh, not fatigue.",
                meta: "Signature Dessert",
            },
        ],
    },

    /**
     * 2) ATMOSPHERE – tetap seperti versi kamu
     */
    {
        id: "atmosphere",
        label: "Atmosphere",
        subtitle:
            "Spaces curated with quiet geometry, warm brass, natural textures, and intimate lighting — each corner offering a different mood of Jard’or.",
        items: [
            {
                title: "Main Dining Room",
                image: "/images/DSC04919-HDR.jpg",
                description:
                    "The heart of Jard’or — polished wood, brass accents, soft lines, and a quiet energy. Designed for evenings where conversations linger and plates move with subtle rhythm.",
                meta: "Central Seating",
            },
            {
                title: "Rustic Corner Table",
                image: "/images/DSC04927-HDR.jpg",
                description:
                    "Warm stone textures and vintage European tones create a pocket of calm. Ideal for anniversaries or slow, unhurried dinners.",
                meta: "Intimate Spot",
            },
            {
                title: "Wine Cellar Alcove",
                image: "/images/DSC04930-HDR.jpg",
                description:
                    "Surrounded by the house’s private wine collection — a refined atmosphere for tastings and conversations that move deeper through the evening.",
                meta: "Wine Collection",
            },
            {
                title: "The Bottle Wall",
                image: "/images/DSC04933-HDR.jpg",
                description:
                    "A curated display of spirits and rare bottles. A visual anchor that sets the tone for aperitifs and after-dinner rituals.",
                meta: "Cellar Feature",
            },
            {
                title: "Garden Window Table",
                image: "/images/DSC04936-HDR.jpg",
                description:
                    "Natural light meets warm interior textures. Perfect for daylight brunch or soft twilight dining with greenery as the backdrop.",
                meta: "Indoor Garden View",
            },
            {
                title: "Floral Lounge Nook",
                image: "/images/DSC05669-HDR.jpg",
                description:
                    "A relaxed seating corner with greenery and soft pillows — a favorite for pre-dinner drinks and effortless conversations.",
                meta: "Cozy Lounge",
            },
            {
                title: "Outdoor Terrace",
                image: "/images/DSC05705-HDR.jpg",
                description:
                    "Sunlit umbrellas, quiet breeze, and tropical calm. Ideal for daylight dining, light meals, or long coffees.",
                meta: "Open Air",
            },
            {
                title: "Private Warm Setting",
                image: "/images/DSC05811-HDR.jpg",
                description:
                    "Soft shadows, candlelit tables, and close seating. Made for personal celebrations, proposals, or quiet two-person evenings.",
                meta: "Private Seating",
            },
            {
                title: "Classic Interior Room",
                image: "/images/DSC05823-HDR.jpg",
                description:
                    "Classic wood textures with refined lighting. A room that balances tradition and modernity in a gentle, understated way.",
                meta: "Timeless Corner",
            },
            {
                title: "Bar Terrace",
                image: "/images/DSC05865-HDR.jpg",
                description:
                    "A high-seat bar framed by natural light — perfect for martinis, aperitifs, and short casual visits.",
                meta: "Bar Seating",
            },
            {
                title: "Washroom Interior",
                image: "/images/DSC05886-HDR.jpg",
                description:
                    "Stone, brass, and warm reflections. Even transitional spaces at Jard’or are built with detail and quiet elegance.",
                meta: "Interior Detail",
            },
            {
                title: "Garden Entrance",
                image: "/images/DSC05955-HDR.jpg",
                description:
                    "A soft transition from nature to architecture. The gateway that sets the tone before guests enter the main room.",
                meta: "Green Pathway",
            },
            {
                title: "Terrace Bench",
                image: "/images/DSC05973-HDR.jpg",
                description:
                    "A peaceful spot beneath open sky and filtered light. Great for slow moments before or after dinner.",
                meta: "Outdoor Seating",
            },
            {
                title: "Glass Pavilion",
                image: "/images/DSC05995-HDR.jpg",
                description:
                    "Surrounded by glass and foliage — a spacious yet intimate pavilion for gatherings, private events, or afternoon tea.",
                meta: "Garden Pavilion",
            },
        ],
    },

    /**
     * 3) WINE – tetap seperti versi kamu
     */
    {
        id: "wine",
        label: "Wine & Cellar",
        subtitle:
            "A cellar shaped around character, balance, and the stories behind each bottle — curated to complement Jard’or’s cadence.",
        items: [
            {
                title: "Private Wine Cellar",
                image: "/images/DSC04930-HDR.jpg",
                description:
                    "Rows of carefully stored bottles kept at precise temperature and humidity. A collection built slowly, focusing not on prestige labels but on expressive regions and vintners with depth.",
                meta: "Cellar Access",
            },
            {
                title: "Bottle Lineup Showcase",
                image: "/images/DSC04933-HDR.jpg",
                description:
                    "A curated wall of selections spanning old-world classics and modern expressions, used for pre-dinner conversations, sommelier recommendations, and custom pairing sessions.",
                meta: "Signature Display",
            },
            {
                title: "Gastronomic Pairing",
                image: "/images/DSC05255.jpg",
                description:
                    "Plates and bottles selected to speak the same language — balancing acidity, structure, and aromatics around Jard’or’s tasting menus.",
                meta: "Food Collaboration",
            },
            {
                title: "Wine Service Ritual",
                image: "/images/DSC05264.jpg",
                description:
                    "Precise pouring, considered glassware, and controlled pacing, allowing each bottle to open gradually and follow the rhythm of the evening.",
                meta: "Service Ritual",
            },
            {
                title: "Cigar & Digestif Drawer",
                image: "/images/DSC05801.jpg",
                description:
                    "A refined after-dinner ritual with hand-rolled cigars, digestifs, and rare bottles curated for the last quiet minutes of the night.",
                meta: "After-Dinner Experience",
            },
            {
                title: "Dark Cellar Selection",
                image: "/images/DSC05908.jpg",
                description:
                    "A deeper corner of the cellar showcasing limited and late-release vintages, reserved for guests seeking something off-menu and quietly exceptional.",
                meta: "Limited Release",
            },
        ],
    },

    /**
     * 4) EXPERIENCE – pakai foto meja dengan beberapa plate & wine
     */
    {
        id: "experience",
        label: "The Experience",
        subtitle:
            "Beyond the plate — music, pacing, service, and visual details composed as a single narrative.",
        items: [
            {
                title: "Tasting Table for Two",
                image: "/images/DSC00300.jpg",
                description:
                    "A quietly staged table for two with multiple courses, where service is timed to conversation instead of the clock.",
                meta: "Intimate Dining",
            },
            {
                title: "Champagne & Small Plates",
                image: "/images/DSC00321.jpg",
                description:
                    "Carefully chilled glasses and light courses that open the evening with brightness and lift.",
                meta: "Aperitif Hour",
            },
            {
                title: "Chef’s Flight",
                image: "/images/DSC00326.jpg",
                description:
                    "A sequence of plates served in quick, clean rhythm — ideal for guests who enjoy experiencing the menu as a curated journey.",
                meta: "Progressive Courses",
            },
            {
                title: "Shared Table Setting",
                image: "/images/DSC00342.jpg",
                description:
                    "An arrangement designed for small groups: shared dishes, central pieces, and synchronized service.",
                meta: "Small Group",
            },
            {
                title: "Wine-Focused Evening",
                image: "/images/DSC00368.jpg",
                description:
                    "Pairings and pours are given center stage while courses are structured to frame the bottles, not overshadow them.",
                meta: "Sommelier Guided",
            },
            {
                title: "Celebration Spread",
                image: "/images/DSC00371.jpg",
                description:
                    "Multiple plates and glasses laid out for milestones, proposals, and private celebrations.",
                meta: "Occasion Ready",
            },
            {
                title: "Late-Night Service",
                image: "/images/DSC00395.jpg",
                description:
                    "Warmer lighting and deeper flavors for guests who prefer to dine later in the evening.",
                meta: "After Dark",
            },
            {
                title: "Final Dessert Moment",
                image: "/images/DSC00409.jpg",
                description:
                    "A composed dessert course and warm service tone that let the evening close gently and intentionally.",
                meta: "Closing Note",
            },
        ],
    },

    /**
     * 5) TEAM & CRAFT – pakai foto tangan plating, menu di tangan, dll
     */
    {
        id: "team-craft",
        label: "The Team & Craft",
        subtitle:
            "Artisans, sommeliers, and service team working in sync to keep standards exact while the room stays warm.",
        items: [
            {
                title: "Plating at the Pass",
                image: "/images/DSC00237.jpg",
                description:
                    "Hands focused on alignment, temperature, and detail — each plate checked before it ever leaves the kitchen.",
                meta: "Kitchen Brigade",
            },
            {
                title: "Precise Garnishing",
                image: "/images/DSC00252.jpg",
                description:
                    "Final touches added seconds before service so every element arrives at the correct texture.",
                meta: "Last Detail",
            },
            {
                title: "Sauce Service",
                image: "/images/DSC00258.jpg",
                description:
                    "Sauces poured with intention, either in the kitchen or table-side depending on the course.",
                meta: "Classic Technique",
            },
            {
                title: "Composed Starters",
                image: "/images/DSC00269.jpg",
                description:
                    "Starters assembled by a dedicated garde-manger team, keeping cold dishes bright and structured.",
                meta: "Cold Section",
            },
            {
                title: "Course Timing",
                image: "/images/DSC00287.jpg",
                description:
                    "Coordinated passes between kitchen and front-of-house so courses land quietly and on cue.",
                meta: "Service Rhythm",
            },
            {
                title: "Wine & Glassware",
                image: "/images/DSC00316.jpg",
                description:
                    "Stemware polished by hand and matched to each bottle for clarity of aroma and structure.",
                meta: "Sommelier Team",
            },
            {
                title: "Menu Presentation",
                image: "/images/DSC00411.jpg",
                description:
                    "Menus presented with a brief, confident explanation — enough context, never pressure.",
                meta: "Guest Guidance",
            },
            {
                title: "Final Check",
                image: "/images/DSC00416.jpg",
                description:
                    "A quiet moment before service to review reservations, dietary notes, and timing for the night ahead.",
                meta: "Service Briefing",
            },
        ],
    },
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