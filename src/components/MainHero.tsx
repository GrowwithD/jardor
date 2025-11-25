"use client";

import Image from "next/image";
import NavLogo from "@/components/atoms/NavLogo";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ButtonGold from "@/components/atoms/ButtonGold";
import ButtonOutlineGold from "@/components/atoms/ButtonOutlineGold";

const heroImages = [
    "/images/mainhero/main1.jpg",
    "/images/mainhero/main2.jpg",
    "/images/mainhero/main3.jpg",
];

export default function MainHero() {
    const [heroIndex, setHeroIndex] = useState(0);

    // Auto slide
    useEffect(() => {
        const interval = setInterval(() => {
            setHeroIndex((prev) => (prev + 1) % heroImages.length);
        }, 6500);

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="homepage"
            className="relative h-[520px] md:h-screen w-full overflow-hidden bg-black"
        >
            {/* SLIDER WRAPPER */}
            <div
                className="absolute inset-0 flex transition-transform duration-[1200ms] ease-out"
                style={{ transform: `translateX(-${heroIndex * 100}%)` }}
            >
                {heroImages.map((src, idx) => (
                    <div key={idx} className="relative w-full h-full flex-shrink-0">
                        <Image
                            src={src}
                            alt={`Slide ${idx + 1}`}
                            fill
                            priority={idx === 0}
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/55 to-black/85 pointer-events-none" />

            {/* GOLD ACCENT */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[radial-gradient(circle,rgba(200,169,107,0.08),transparent_70%)] blur-3xl opacity-40" />
            </div>

            {/* CONTENT */}
            <div className="relative z-10 flex h-full items-center pt-24">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.15 } },
                    }}
                    className="mx-auto flex max-w-xl flex-col items-center text-center gap-3 px-4"
                >
                    {/* LOGO */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.6 }}
                    >
                        <NavLogo heightClass="h-24" className="select-none pointer-events-auto" />
                    </motion.div>

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
                            hidden: { opacity: 0, y: 28 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.8 }}
                        className="font-serif text-3xl md:text-5xl text-brand-cream leading-tight"
                    >
                        Welcome to JARD'OR
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
                        Discover an authentic taste of French food in Bali, inspired by the charm
                        of Southern France and brought to life in Nusa Dua. Jardor blends modern
                        French cuisine, warm Balinese hospitality, and a romantic ambience —
                        making us one of the best romantic places in Nusa Dua.
                    </motion.p>

                    {/* CTA BUTTONS */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 28 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mt-6 flex flex-wrap items-center justify-center gap-3"
                    >
                        <ButtonGold href="https://cho.pe/s70otkn6g" target="_blank">
                            Reserve On Chope
                        </ButtonGold>

                        <ButtonOutlineGold
                            href="#menus"
                            onClick={(e) => {
                                e.preventDefault();
                                const el = document.getElementById("menus");
                                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                            }}
                        >
                            View Our Menus
                        </ButtonOutlineGold>
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
                </motion.div>
            </div>
        </section>
    );
}