"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
        label: "Food & Beverage",
        subtitle:
            "Signature tasting menus, artisanal plates, and curated pairings crafted from the finest seasonal ingredients.",
        items: [
            {
                title: "Chef's Tasting Menu",
                image: "/images/main-food.jpg",
                description:
                    "A 7-course journey that moves with deliberate calm - from bright, precise starters to deep, comforting finales. Each transition is designed so the palate is guided, never shocked.\n\nIngredients are sourced daily: line-caught seafood, dry-aged meats, garden herbs, and refined details. Technique leans on French fundamentals with subtle island influences.\n\nIdeal for guests who want the full Jard'or narrative in one sitting.",
                meta: "7-course • Seasonal • Limited Seat",
            },
            {
                title: "Wine Pairing Selection",
                image: "/images/main-food-2.jpg",
                description:
                    "Curated pairings that follow the menu's rhythm - clean acidity to start, layered structure through the middle, and textured finishes towards dessert.\n\nThe focus is balance and nuance, not label flex.\n\nPerfect for guests who appreciate being gently led through the cellar.",
                meta: "Sommelier Curated",
            },
            {
                title: "Dessert Atelier",
                image: "/images/main-food-3.jpg",
                description:
                    "Desserts are treated as a final chapter, not an afterthought.\n\nExpect restrained sweetness, temperature contrast, and clean lines.\n\nFor guests who prefer an elegant finish over heavy sugar.",
                meta: "Signature Sweets",
            },
            {
                title: "Chef's Table Experience",
                image: "/images/main-food.jpg",
                description:
                    "A table within sight of the open kitchen. Courses are served directly by the brigade with just enough storytelling.\n\nOften includes off-menu elements and library bottles.\n\nFor guests who value proximity to the craft.",
                meta: "Reservation Only",
            },
            {
                title: "Lunch Degustation",
                image: "/images/main-food-2.jpg",
                description:
                    "A lighter expression of Jard'or for daylight.\n\nStructured to be vibrant, clean, and time-conscious without losing depth.",
                meta: "Midday Special",
            },
            {
                title: "Vegetarian Menu",
                image: "/images/main-food-3.jpg",
                description:
                    "Vegetables leading with confidence: smoked roots, charred brassicas, layered grains, rich broths.\n\nBuilt with the same discipline as the classic menu.",
                meta: "Green Tasting • Limited Availability",
            },
            {
                title: "Caviar & Oyster Bar",
                image: "/images/main-food.jpg",
                description:
                    "Premium caviar, freshly shucked oysters, and precise garnishes.\n\nBest as a prologue to the tasting menu or a stand-alone ritual.",
                meta: "Signature Pairing",
            },
            {
                title: "Afternoon Tea Ritual",
                image: "/images/main-food-2.jpg",
                description:
                    "Miniature patisserie, refined savories, and considered tea selection in soft daylight.\n\nA calm way to experience the space before evening service.",
                meta: "Daily 3-5 PM",
            },
        ],
    },
    {
        id: "place",
        label: "The Place",
        subtitle:
            "An intimate ambience in deep green tones, soft lighting, and brass accents overlooking Nusa Dua.",
        items: [
            {
                title: "Main Dining Hall",
                image: "/images/main-food-2.jpg",
                description:
                    "Generous spacing, warm pools of light, and surfaces that soften sound.\n\nTables are composed but not over-staged.\n\nFor evenings where comfort and detail align.",
                meta: "Up to 60 Guests",
            },
            {
                title: "Private Room",
                image: "/images/main-food.jpg",
                description:
                    "A concealed room for executives, families, and inner-circle gatherings.\n\nFull privacy, tailored menus, and dedicated service.",
                meta: "Up to 10 Guests",
            },
            {
                title: "Wine Library",
                image: "/images/main-food-3.jpg",
                description:
                    "Walls of bottles chosen for character.\n\nUsed for intimate tastings and pre-dinner pours.",
                meta: "Sommelier Guided",
            },
            {
                title: "Outdoor Terrace",
                image: "/images/main-food.jpg",
                description:
                    "Open air, soft breeze, candlelight, and a golden-hour horizon.\n\nReserved for aperitifs, sundowners, and select menus.",
                meta: "Sunset Favorite",
            },
            {
                title: "Chef's Counter",
                image: "/images/main-food-2.jpg",
                description:
                    "Seats along the open kitchen where plates land seconds from the pass.\n\nFor guests who enjoy service in motion.",
                meta: "Interactive",
            },
            {
                title: "Lounge & Bar",
                image: "/images/main-food-3.jpg",
                description:
                    "Low tables, tuned playlists, and a bar that favors clarity over theatrics.\n\nIdeal for a martini, aperitif, or nightcap.",
                meta: "Mixology Corner",
            },
            {
                title: "Garden Pavilion",
                image: "/images/main-food.jpg",
                description:
                    "A tucked pavilion framed by greenery.\n\nBuilt for proposals, elopements, and small ceremonies.",
                meta: "Private Venue",
            },
            {
                title: "Art Corridor",
                image: "/images/main-food-2.jpg",
                description:
                    "Curated regional works echoing Jard'or's geometry.\n\nActs as quiet punctuation between rooms.",
                meta: "Curated Details",
            },
        ],
    },
    {
        id: "experience",
        label: "The Experience",
        subtitle:
            "Beyond the plate - music, scent, pacing, and visual details composed as one narrative.",
        items: [
            {
                title: "Live Piano Evenings",
                image: "/images/main-food-3.jpg",
                description:
                    "Soft instrumentals that frame, not dominate, the room.\n\nFor nights when guests want a quietly alive atmosphere.",
                meta: "Fri-Sun 7-10 PM",
            },
            {
                title: "Chef's Showcase",
                image: "/images/main-food-2.jpg",
                description:
                    "Occasional previews of future ideas: unlisted courses and experimental pairings.",
                meta: "Exclusive Access",
            },
            {
                title: "Seasonal Journey",
                image: "/images/main-food.jpg",
                description:
                    "Menus that follow tides and markets.\n\nInvites guests to return each season.",
                meta: "Four Seasons Menu",
            },
            {
                title: "Wine Tasting Night",
                image: "/images/main-food-3.jpg",
                description:
                    "Focused flights around a region or varietal.\n\nGuided with minimal jargon.",
                meta: "Every First Friday",
            },
            {
                title: "House Scent",
                image: "/images/main-food.jpg",
                description:
                    "A subtle blend of herbs, woods, and coastal notes, traced lightly across the room.",
                meta: "Custom Blend",
            },
            {
                title: "Art of Plating",
                image: "/images/main-food-2.jpg",
                description:
                    "Negative space, clean cuts, measured color.\n\nReplicated plate after plate with precision.",
                meta: "Front Row Experience",
            },
            {
                title: "Bespoke Pairing Events",
                image: "/images/main-food.jpg",
                description:
                    "Custom evenings built around a story: a region, a vintage, a memory.",
                meta: "Reservation Required",
            },
            {
                title: "Midnight Soiree",
                image: "/images/main-food-2.jpg",
                description:
                    "Late service with longer courses and deeper playlists for a small circle.",
                meta: "By Invitation Only",
            },
        ],
    },
    {
        id: "team-craft",
        label: "The Team & Craft",
        subtitle:
            "Artisans, sommeliers, and chefs working in sync to keep standards exact and the room warm.",
        items: [
            {
                title: "Executive Chef",
                image: "/images/main-food-2.jpg",
                description:
                    "The mind behind Jard'or's flavor language.\n\nMinimal text, confident structure, no filler dishes.",
                meta: "French-trained • 20+ Years",
            },
            {
                title: "Pastry Maestro",
                image: "/images/main-food-3.jpg",
                description:
                    "Designs endings that refresh instead of tire.\n\nFor guests who care how the last five minutes feel.",
                meta: "Dessert Innovator",
            },
            {
                title: "Sommelier",
                image: "/images/main-food.jpg",
                description:
                    "Listens first, then curates.\n\nKeeps the cellar approachable and precise.",
                meta: "WSET Certified",
            },
            {
                title: "Mixologist",
                image: "/images/main-food-2.jpg",
                description:
                    "Clean, layered drinks that sit beside the menu, not above it.",
                meta: "House Signatures",
            },
            {
                title: "Culinary Artisans",
                image: "/images/main-food-3.jpg",
                description:
                    "The brigade that keeps scales, sauces, and timing exact.\n\nRarely seen, always present.",
                meta: "Detail-Driven",
            },
            {
                title: "Hospitality Team",
                image: "/images/main-food.jpg",
                description:
                    "Front-of-house that reads the room and keeps refinement relaxed.",
                meta: "Guest Experience",
            },
            {
                title: "Culinary Research Lab",
                image: "/images/main-food-2.jpg",
                description:
                    "Quiet R&D for stocks, ferments, and preserved elements that appear as subtle details.",
                meta: "R&D Division",
            },
            {
                title: "Training Academy",
                image: "/images/main-food-3.jpg",
                description:
                    "Internal training so every team member speaks one language of detail and timing.",
                meta: "Mentorship Program",
            },
        ],
    },
];

export default function HighlightsSection() {
    const [activeItem, setActiveItem] = useState<ActiveItem | null>(null);
    const sliderRefs = useRef<Record<string, HTMLDivElement | null>>({});

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-out-quart",
            once: true,
            offset: 80,
        });
    }, []);

    // auto scroll
    useEffect(() => {
        const interval = setInterval(() => {
            highlights.forEach((highlight, index) => {
                const el = sliderRefs.current[highlight.id];
                if (!el) return;

                const maxScroll = el.scrollWidth - el.clientWidth;
                if (maxScroll <= 0) return;

                const direction = index % 2 === 0 ? 1 : -1;
                const step = el.clientWidth * 0.45 * direction;
                const next = el.scrollLeft + step;

                if (direction === 1) {
                    el.scrollTo({
                        left: next >= maxScroll - 8 ? 0 : next,
                        behavior: "smooth",
                    });
                } else {
                    el.scrollTo({
                        left: next <= 8 ? maxScroll : next,
                        behavior: "smooth",
                    });
                }
            });
        }, 3800);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-gradient-to-tl from-10% via-30% to-70% from-black via-[#0c0c0b] to-brand-green/95 py-16 md:py-20 overflow-hidden">
            <div className="mx-auto max-w-6xl px-4">
                {/* Header */}
                <div className="text-center mb-16 space-y-4" data-aos="fade-up">
                    <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 px-4 py-1.5 bg-black/20 backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                        <span className="text-[8px] uppercase tracking-[0.28em] text-brand-gold/90">
                            Jard&apos;or Selection
                        </span>
                    </div>

                    <h2 className="font-serif text-3xl md:text-4xl text-brand-cream tracking-[0.12em]">
                        A Curated Glimpse of Jard&apos;or
                    </h2>

                    <div className="flex justify-center">
                        <motion.span
                            className="block h-[1px] bg-brand-gold/70"
                            initial={{ width: 0 }}
                            animate={{ width: 82 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                        />
                    </div>

                    <p className="text-[10px] md:text-xs text-brand-cream/78 max-w-2xl mx-auto leading-relaxed">
                        A refined showcase of our signature experiences - composed dishes,
                        spaces, and moments that define Jard&apos;or.
                    </p>
                </div>

                {/* Groups */}
                <div className="space-y-16 md:space-y-20">
                    {highlights.map((highlight, index) => {
                        const isRight = index % 2 === 1;

                        return (
                            <motion.div
                                key={highlight.id}
                                className="space-y-5"
                                data-aos="fade-up"
                                data-aos-delay={index * 140}
                                initial="rest"
                                animate="rest"
                                whileHover="hover"
                                transition={{ type: "spring", stiffness: 140, damping: 20 }}
                            >
                                {/* Title strip */}
                                <div
                                    className={[
                                        "flex flex-col md:flex-row gap-3 items-center text-center md:items-end",
                                        isRight
                                            ? "md:justify-end md:text-right"
                                            : "md:justify-start md:text-left",
                                    ].join(" ")}
                                >
                                    <div
                                        className={[
                                            "flex flex-col gap-1 items-center",
                                            isRight
                                                ? "md:items-end md:text-right"
                                                : "md:items-start md:text-left",
                                        ].join(" ")}
                                    >
                                        <div className="flex items-center gap-2 text-brand-gold/60 text-[8px] tracking-[0.22em] uppercase">
                                            <span className="w-4 h-[1px] bg-brand-gold/30" />
                                            <span>{String(index + 1).padStart(2, "0")}</span>
                                            <span className="hidden xs:inline">Highlight</span>
                                        </div>

                                        <motion.h3
                                            className="font-serif text-lg md:text-2xl text-brand-gold uppercase flex items-center gap-2"
                                            variants={{
                                                rest: {
                                                    letterSpacing: "0.16em",
                                                    y: 0,
                                                    textShadow: "0 0 0 rgba(200,169,107,0)",
                                                },
                                                hover: {
                                                    letterSpacing: "0.22em",
                                                    y: -2,
                                                    textShadow:
                                                        "0 0 10px rgba(200,169,107,0.28)",
                                                },
                                            }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 180,
                                                damping: 20,
                                                mass: 0.7,
                                            }}
                                        >
                                            {isRight && (
                                                <motion.span
                                                    className="hidden md:block h-[1px] bg-brand-gold/30"
                                                    variants={{
                                                        rest: { width: 24, opacity: 0.7 },
                                                        hover: { width: 40, opacity: 1 },
                                                    }}
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 220,
                                                        damping: 22,
                                                    }}
                                                />
                                            )}

                                            {highlight.label}

                                            {!isRight && (
                                                <motion.span
                                                    className="hidden md:block h-[1px] bg-brand-gold/30"
                                                    variants={{
                                                        rest: { width: 24, opacity: 0.7 },
                                                        hover: { width: 40, opacity: 1 },
                                                    }}
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 220,
                                                        damping: 22,
                                                    }}
                                                />
                                            )}
                                        </motion.h3>

                                        <p className="text-[10px] md:text-xs text-brand-cream/82 max-w-3xl leading-relaxed font-light">
                                            {highlight.subtitle}
                                        </p>
                                    </div>
                                </div>

                                {/* Slider */}
                                <div className="relative">
                                    <div className="pointer-events-none hidden sm:block absolute inset-y-5 left-0 w-10 bg-gradient-to-r from-brand-green to-transparent z-10" />
                                    <div className="pointer-events-none hidden sm:block absolute inset-y-5 right-0 w-10 bg-gradient-to-l from-brand-green to-transparent z-10" />

                                    <motion.div
                                        ref={(el) => {
                                            sliderRefs.current[highlight.id] = el;
                                        }}
                                        className="
                      flex gap-3 md:gap-4
                      overflow-x-auto no-scrollbar
                      snap-x snap-mandatory
                      rounded-3xl
                      border border-brand-gold/14
                      bg-gradient-to-br
                        from-brand-green-soft/94
                        via-brand-green-soft/88
                        to-black/82
                      backdrop-blur-md
                      p-3.5 md:p-8
                      shadow-[0_18px_60px_rgba(0,0,0,0.78)]
                    "
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        {highlight.items.map((item, i) => (
                                            <motion.button
                                                key={`${highlight.id}-${i}`}
                                                whileHover={{ scale: 1.045, y: -3 }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 190,
                                                    damping: 18,
                                                }}
                                                onClick={() =>
                                                    setActiveItem({
                                                        ...item,
                                                        highlight: highlight.label,
                                                    })
                                                }
                                                className="
                          group relative
                          snap-start shrink-0
                          overflow-hidden
                          rounded-2xl
                          bg-black/30
                          border border-black/55
                          w-[78%] xs:w-[64%] sm:w-[46%] md:w-[30%] lg:w-[23%]
                          aspect-[4/5]
                          hover:border-brand-gold/85
                          hover:shadow-[0_18px_65px_rgba(0,0,0,0.98)]
                          transition-colors
                        "
                                            >
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                />

                                                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/96 via-black/28 to-transparent" />

                                                <div className="absolute left-3 right-3 bottom-2.5 space-y-0.5 text-left">
                                                    <p className="text-[8px] uppercase tracking-[0.2em] text-brand-gold">
                                                        {item.title}
                                                    </p>
                                                    {item.meta && (
                                                        <p className="text-[7px] text-brand-cream/65 line-clamp-1">
                                                            {item.meta}
                                                        </p>
                                                    )}
                                                </div>

                                                <div className="pointer-events-none absolute inset-0 rounded-2xl border border-brand-gold/0 group-hover:border-brand-gold/18 transition-all duration-500" />
                                            </motion.button>
                                        ))}
                                    </motion.div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {activeItem && (
                    <motion.div
                        className="
              fixed inset-0 z-[80]
              flex items-center justify-center
              bg-black/80 backdrop-blur-md
              px-3
            "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setActiveItem(null)}
                    >
                        <motion.div
                            className="
                relative w-full max-w-4xl
                rounded-[32px]
                bg-brand-green-soft/98
                border border-brand-gold/40
                shadow-[0_30px_120px_rgba(0,0,0,1)]
                overflow-hidden
                grid grid-cols-1 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.6fr)]
              "
                            initial={{ scale: 0.94, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setActiveItem(null)}
                                className="
                  absolute right-3 top-3
                  w-8 h-8 flex items-center justify-center
                  rounded-full
                  border border-brand-gold/60
                  text-brand-gold bg-black/45
                  hover:bg-brand-gold hover:text-black
                  transition-all duration-200
                  text-xs z-20
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
                                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent md:bg-gradient-to-r md:from-black/75 md:via-black/15 md:to-transparent" />
                                <div className="absolute bottom-3 left-3 right-3 md:hidden">
                                    <p className="text-[8px] uppercase tracking-[0.22em] text-brand-gold/85">
                                        {activeItem.highlight}
                                    </p>
                                    <h4 className="font-serif text-xl text-brand-cream">
                                        {activeItem.title}
                                    </h4>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5 md:p-7 flex flex-col gap-3 md:gap-4">
                                <div className="hidden md:block">
                                    <p className="text-[8px] uppercase tracking-[0.26em] text-brand-gold/85 mb-1">
                                        {activeItem.highlight}
                                    </p>
                                    <h4 className="font-serif text-2xl md:text-3xl text-brand-cream leading-snug">
                                        {activeItem.title}
                                    </h4>
                                </div>

                                <div className="mt-1 md:mt-2 space-y-2 text-[10px] md:text-sm text-brand-cream/90 leading-relaxed">
                                    {activeItem.description.split(/\n{2,}/).map((block, idx) => (
                                        <p key={idx}>{block}</p>
                                    ))}
                                </div>

                                {activeItem.meta && (
                                    <p className="text-[8px] md:text-[9px] text-brand-gold/80 uppercase tracking-[0.18em] pt-1">
                                        {activeItem.meta}
                                    </p>
                                )}

                                <div className="mt-auto flex justify-end gap-2 pt-2">
                                    <button
                                        onClick={() => setActiveItem(null)}
                                        className="
                      rounded-full px-4 py-1.5
                      text-[8px] md:text-[9px]
                      uppercase tracking-[0.2em]
                      bg-transparent text-brand-gold
                      border border-brand-gold/40
                      hover:bg-brand-gold/10
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

            {/* hide scrollbar */}
            <style jsx global>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
        </section>
    );
}