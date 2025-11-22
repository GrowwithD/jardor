"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ButtonGold from "@/components/atoms/ButtonGold";
import ButtonOutlineGold from "@/components/atoms/ButtonOutlineGold";

const heroImages = [
    "/images/slide1.jpg",
    "/images/slide2.jpg",
    "/images/slide3.jpg",
];

export default function MainHero() {
    const [heroIndex, setHeroIndex] = useState(0);

    useEffect(() => {
        if (heroImages.length <= 1) return;

        const interval = setInterval(
            () => setHeroIndex((prev) => (prev + 1) % heroImages.length),
            6500
        );

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="homepage" className="relative h-[520px] md:h-screen w-full overflow-hidden bg-black">
            {/* SLIDES */}
            <AnimatePresence mode="wait">
                {heroImages.map(
                    (src, idx) =>
                        idx === heroIndex && (
                            <motion.div
                                key={src}
                                className="absolute inset-0"
                                initial={{ opacity: 0, scale: 1.06 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.12 }}
                                transition={{ duration: 1.0, ease: [0.16, 0.8, 0.24, 1] }}
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

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/50 to-black/80" />

            {/* GOLD ACCENT GLOW */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[radial-gradient(circle,rgba(200,169,107,0.08),transparent_70%)] blur-3xl opacity-40" />
            </div>

            {/* CONTENT */}
            <div className="relative z-10 flex h-full items-center pt-24">
                <motion.div
                    key={heroIndex}
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.15 } },
                    }}
                    className="mx-auto flex max-w-xl flex-col items-center text-center gap-3 px-4"
                >
                    {/* EYEBROW */}
                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.6 }}
                        className="text-[10px] tracking-[0.28em] uppercase text-brand-gold/80"
                    >
                        A Night of French Festivities
                    </motion.p>

                    {/* TITLE */}
                    <motion.h1
                        variants={{
                            hidden: { opacity: 0, y: 30, scale: 0.98 },
                            visible: { opacity: 1, y: 0, scale: 1 },
                        }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="font-serif text-3xl md:text-5xl text-brand-cream leading-tight"
                    >
                        Christmas Eve Dinner
                    </motion.h1>

                    {/* SUBTITLE */}
                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 15 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.6 }}
                        className="text-base md:text-lg text-brand-cream/85 max-w-xl leading-relaxed"
                    >
                        Celebrate Christmas Eve with a curated 5-course French degustation,
                        crafted to warm the heart and elevate the holiday spirit.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 28 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mt-6 flex flex-wrap items-center justify-center gap-3"
                    >
                        <ButtonGold href="/reservation">Reserve Your Table</ButtonGold>
                        <ButtonOutlineGold href="/menus">View Our Menus</ButtonOutlineGold>
                    </motion.div>

                    {/* DOTS */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 15 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.7, delay: 0.45 }}
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
                            />
                        ))}
                    </motion.div>

                    {/* SCROLL INDICATOR */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.9, delay: 0.8 }}
                        className="mt-4 flex flex-col items-center gap-1 text-[9px] text-brand-cream/50"
                    >
                        <span className="tracking-[0.22em] uppercase">Scroll</span>
                        <motion.span
                            animate={{ y: [0, 8, 0] }}
                            transition={{
                                duration: 1.6,
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