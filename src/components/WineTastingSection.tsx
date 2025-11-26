"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ButtonGold from "@/components/atoms/ButtonGold";
import ButtonOutlineGold from "@/components/atoms/ButtonOutlineGold";

const wineImages = [
    "/images/wines/wine1.JPG",
    "/images/wines/wine2.JPG",
    "/images/wines/wine3.jpg",
    "/images/wines/wine4.jpg",
];

export default function WineTastingSection() {
    const [index, setIndex] = useState(0);

    // Auto slide
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
                overflow-hidden
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

            {/* ========= MOBILE SINGLE IMAGE ========= */}
            <div className="md:hidden mb-10 relative w-full h-[260px] overflow-hidden bg-black/40 border border-brand-gold/20">
                <Image
                    src={wineImages[index]}
                    alt="Wine Tasting Jard’or"
                    fill
                    className="object-cover transition-all duration-[1200ms]"
                />
            </div>

            {/* ========= DESKTOP SLIDER ========= */}
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
                        scrollBehavior: "smooth",   // <— ADDED
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
                    text-center md:text-left
                "
            >
                <motion.div
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="space-y-6 md:max-w-xl"
                >
                    <p className="text-[10px] md:text-[11px] uppercase tracking-[0.26em] text-brand-gold/70">
                        Wine Tasting & Pairings
                    </p>

                    <h2 className="font-serif text-2xl md:text-3xl tracking-[0.03em] text-brand-cream">
                        A Journey Through Cellar & Glass
                    </h2>

                    <p className="text-sm md:text-base leading-relaxed text-brand-cream/80">
                        At Jard’Or, wine is more than a beverage — it’s a journey. Our in-house
                        sommelier guides each guest through intentional pairings, ensuring every
                        dish finds its perfect match — from easy-drinking glasses to rare vintages.
                    </p>

                    <p className="text-sm md:text-base leading-relaxed text-brand-cream/80">
                        Whether enjoying seafood or richer classics like
                        <em> Bœuf Bourguignon</em>, each pairing is crafted to elevate your dining experience.
                    </p>

                    <div className="pt-2 space-y-2">
                        <p className="text-brand-gold/80 text-[11px] tracking-[0.2em] uppercase">
                            Wine Tasting Sessions
                        </p>

                        <ul className="space-y-1.5 text-sm md:text-base text-brand-cream/85">
                            <li>• Wines of Southern France</li>
                            <li>• Bordeaux Discovery Nights</li>
                            <li>• Burgundy & Rhône Explorations</li>
                            <li>• European Highlights & Limited Editions</li>
                        </ul>
                    </div>

                    <div className="pt-6 flex flex-wrap gap-3 justify-center md:justify-start">
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
                                        inline: "nearest",
                                    });
                                }
                            }}
                        >
                            Reserve Wine Tasting
                        </ButtonOutlineGold>
                    </div>

                    {/* DOTS */}
                    <div className="pt-4 flex items-center gap-2 justify-center md:justify-start">
                        {wineImages.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setIndex(i)}
                                className={`h-1.5 rounded-full transition-all duration-300
                                    ${i === index
                                        ? "w-5 bg-brand-gold"
                                        : "w-2 bg-brand-cream/35 hover:bg-brand-gold/60"}
                                `}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}