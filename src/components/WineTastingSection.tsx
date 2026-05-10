"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import ButtonGold from "@/components/atoms/ButtonGold";
import ButtonOutlineGold from "@/components/atoms/ButtonOutlineGold";
import SectionHeader from "@/components/molecules/SectionHeader";

const fadeUp = {
    initial: { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
};

const wineImages = [
    "/images/wines/wine1.JPG",
    "/images/wines/wine2.JPG",
    "/images/wines/wine3.jpg",
    "/images/wines/wine4.jpg",
];

export default function WineTastingSection() {
    const [index, setIndex] = useState(0);

    // Auto-slide
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % wineImages.length);
        }, 6500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="wine"
            className="
                relative py-20 md:py-28
                bg-brand-green text-brand-cream
                overflow-hidden min-h-screen
            "
        >
            {/* Ambient Glow */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute right-[10%] top-0 w-[700px] h-[700px]
                    bg-[radial-gradient(circle,rgba(200,169,107,0.13),transparent_70%)]
                    blur-3xl opacity-30" />
                <div className="absolute left-0 bottom-0 w-[600px] h-[600px]
                    bg-[radial-gradient(circle,rgba(200,169,107,0.1),transparent_70%)]
                    blur-3xl opacity-25" />
            </div>

            {/* ========= MOBILE IMAGE ========= */}
            <motion.div
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
                className="md:hidden mb-10 relative w-full h-[480px] overflow-hidden bg-black/40 border border-brand-gold/20"
            >
                <Image
                    src={wineImages[index]}
                    alt="Wine Tasting Jard’or"
                    fill
                    className="object-cover transition-all duration-[1200ms]"
                />
            </motion.div>

            {/* ========= DESKTOP SLIDER RIGHT SIDE ========= */}
            <div
                className="
                    hidden md:block
                    absolute inset-y-0 right-0
                    w-[50vw]
                    overflow-hidden
                    border-l border-brand-gold/20 bg-black/40
                "
            >
                <div
                    className="absolute inset-0 flex transition-transform duration-[1200ms] ease-out"
                    style={{
                        transform: `translateX(-${index * 100}%)`,
                    }}
                >
                    {wineImages.map((src, i) => (
                        <div key={i} className="relative w-full h-full flex-shrink-0">
                            <Image
                                src={src}
                                alt={`Wine Slide ${i + 1}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* ========= LEFT TEXT CONTENT ========= */}
            <div
                className="
                    relative z-10 max-w-5xl mr-auto
                    px-6 md:pl-20 lg:pl-28 md:pr-10
                "
            >
                {/* SECTION HEADER */}
                <SectionHeader
                    eyebrow="Wine Tasting & Pairings"
                    title="A Journey Through Cellar & Glass"
                    subtitle="At Jard’Or, wine is more than a beverage — it’s a journey guided by our in-house sommelier. Each pairing is curated to elevate your dining experience, from easy-drinking glasses to rare vintages."
                    align="left"
                    className="!px-0"
                />

                {/* EXTRA PARAGRAPH */}
                <motion.div
                    variants={fadeUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="mt-4 space-y-3 max-w-xl"
                >
                    <p className="text-sm md:text-base leading-relaxed text-brand-cream/80">
                        Whether enjoying seafood or richer classics like
                        <em> Bœuf Bourguignon</em>, each pairing is crafted to enhance the moment.
                    </p>
                </motion.div>

                {/* LIST */}
                <motion.div
                    variants={fadeUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="pt-4 space-y-2"
                >
                    <p className="text-brand-gold/80 text-[11px] tracking-[0.2em] uppercase">
                        Wine Tasting Sessions
                    </p>

                    <ul className="space-y-1.5 text-sm md:text-base text-brand-cream/85">
                        <li>• Wines of Southern France</li>
                        <li>• Bordeaux Discovery Nights</li>
                        <li>• Burgundy & Rhône Explorations</li>
                        <li>• European Highlights & Limited Editions</li>
                    </ul>
                </motion.div>

                {/* CTA BUTTONS */}
                <motion.div
                    variants={fadeUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                    className="pt-6 flex flex-wrap gap-3 justify-center md:justify-start"
                >
                    <ButtonGold href="/pdf/jardor-wine-champagne-list.pdf">
                        Explore Our Wine List
                    </ButtonGold>

                    <ButtonOutlineGold
                        href="#reservation"
                        onClick={(e) => {
                            e.preventDefault();
                            const el = document.getElementById("reservation");
                            if (el) {
                                el.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                });
                            }
                        }}
                    >
                        Reserve Wine Tasting
                    </ButtonOutlineGold>
                </motion.div>


                {/* DOTS */}
                <motion.div
                    variants={fadeUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.35 }}
                    className="pt-4 flex items-center gap-2 justify-center md:justify-start"
                >
                    {wineImages.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`h-0.5 transition-all duration-300
                                ${i === index
                                    ? "w-48 bg-brand-gold"
                                    : "w-2 bg-brand-cream/35 hover:bg-brand-gold/60"}
                            `}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}