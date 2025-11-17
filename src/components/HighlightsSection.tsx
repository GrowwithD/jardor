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
        <section className="bg-linear-to-tl from-10% via-30% to-70% from-black via-[#0c0c0b] to-brand-green/95 py-16 md:py-20 overflow-hidden">
            <div className="mx-auto max-w-6xl px-4">
                {/* Header */}
                <div className="text-center mb-16 space-y-4" data-aos="fade-up">

                    {/* Eyebrow pill */}
                    <div className="section-eyebrow-pill">
                        <span className="section-eyebrow-dot" />
                        <span className="text-eyebrow">
                            Jard’or Selection
                        </span>
                    </div>

                    {/* Section Title */}
                    <h2 className="section-title">
                        A Curated Glimpse of Jard’or
                    </h2>



                    {/* Section Subtitle */}
                    <p className="section-subtitle max-w-2xl mx-auto">
                        A refined showcase of our signature experiences – composed dishes,
                        spaces, and moments that define Jard’or.
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
                                            <span className="w-4 h-px bg-brand-gold/30" />
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
                                                    className="hidden md:block h-px bg-brand-gold/30"
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
                                                    className="hidden md:block h-px bg-brand-gold/30"
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
                                    <div className="pointer-events-none hidden sm:block absolute inset-y-5 left-0 w-10 bg-linear-to-r from-brand-green to-transparent z-10" />
                                    <div className="pointer-events-none hidden sm:block absolute inset-y-5 right-0 w-10 bg-linear-to-l from-brand-green to-transparent z-10" />

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
                      bg-linear-to-br
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
                          aspect-4/5
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

                                                <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-black/96 via-black/28 to-transparent" />

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
              fixed inset-0 z-80
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
                rounded-4xl
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
                                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent md:bg-linear-to-r md:from-black/75 md:via-black/15 md:to-transparent" />
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


        </section>
    );
}