"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const heroImages = [
    "/images/main-food.jpg",
    "/images/main-food-2.jpg",
    "/images/main-food-3.jpg",
];

export default function HeroSlider() {
    const [heroIndex, setHeroIndex] = useState(0);

    // autoplay slider
    useEffect(() => {
        if (heroImages.length <= 1) return;

        const interval = setInterval(
            () => setHeroIndex((prev) => (prev + 1) % heroImages.length),
            6500
        );

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-[520px] md:h-[640px] w-full overflow-hidden">
            {/* Slides */}
            <AnimatePresence>
                {heroImages.map(
                    (src, idx) =>
                        idx === heroIndex && (
                            <motion.div
                                key={src}
                                className="absolute inset-0"
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.08 }}
                                transition={{
                                    duration: 1.6,
                                    ease: [0.25, 0.1, 0.25, 1],
                                }}
                            >
                                <Image
                                    src={src}
                                    alt={`Jard’or fine dining ${idx + 1}`}
                                    fill
                                    priority
                                    className="object-cover"
                                />
                            </motion.div>
                        )
                )}
            </AnimatePresence>

            {/* Overlays */}
            <div className="absolute inset-0 bg-linear-to-b from-black/85 via-black/40 to-brand-green/95" />
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-x-0 top-10 h-40 bg-[radial-gradient(circle_at_center,rgba(200,169,107,0.25),transparent)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,transparent,rgba(0,0,0,0.55))]" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full items-center">
                <motion.div
                    key={heroIndex}
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: { staggerChildren: 0.15 },
                        },
                    }}
                    className="mx-auto flex max-w-4xl flex-col items-center text-center gap-3 px-4"
                >
                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.6 }}
                        className="text-[9px] md:text-[10px] uppercase tracking-[0.26em] text-brand-gold/80"
                    >
                        Fine Dining &amp; Wine Experience
                    </motion.p>

                    <motion.h1
                        variants={{
                            hidden: { opacity: 0, y: 30, scale: 0.98 },
                            visible: { opacity: 1, y: 0, scale: 1 },
                        }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-[0.18em] text-brand-cream drop-shadow-[0_3px_8px_rgba(0,0,0,0.6)]"
                    >
                        JARD’OR
                    </motion.h1>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 15 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.6 }}
                        className="font-serif text-xs md:text-sm tracking-[0.25em] uppercase text-brand-gold"
                    >
                        Un Voyage de Goût
                    </motion.p>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 25 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.8 }}
                        className="mt-3 text-[10px] md:text-xs text-brand-cream/85 space-y-1"
                    >
                        <p>Open Daily • 11.00 AM – 11.00 PM</p>
                        <p className="text-brand-cream/60">
                            Nusa Dua – Bali, where cuisine, wine, and ambiance intertwine.
                        </p>
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-6 flex flex-wrap items-center justify-center gap-3"
                    >
                        <Link
                            href="/reservation"
                            className="rounded-pill bg-brand-gold px-8 py-2 text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.22em] text-black transition-all duration-300 hover:bg-brand-gold/90 hover:shadow-[0_0_22px_rgba(200,169,107,0.55)] hover:scale-[1.03]"
                        >
                            Reservation Now
                        </Link>
                        <Link
                            href="/menus"
                            className="rounded-pill border border-brand-gold/70 px-6 py-2 text-[8px] md:text-[9px] uppercase tracking-[0.22em] text-brand-gold bg-black/25 backdrop-blur-[3px] transition-all duration-300 hover:bg-brand-gold/10 hover:text-brand-cream hover:scale-[1.03]"
                        >
                            View Our Menus
                        </Link>
                    </motion.div>

                    {/* Dots */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 15 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.7, delay: 0.7 }}
                        className="mt-5 flex items-center gap-2"
                    >
                        {heroImages.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setHeroIndex(i)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${i === heroIndex
                                        ? "w-5 bg-brand-gold"
                                        : "w-2 bg-brand-cream/35 hover:bg-brand-gold/60"
                                    }`}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </motion.div>

                    {/* Scroll indicator */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.9, delay: 1 }}
                        className="mt-4 flex flex-col items-center gap-1 text-[8px] text-brand-cream/50"
                    >
                        <span className="tracking-[0.25em] uppercase">Scroll</span>
                        <motion.span
                            animate={{ y: [0, 8, 0] }}
                            transition={{
                                duration: 1.4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="block h-6 w-px bg-brand-cream/40"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}