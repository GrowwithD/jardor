"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import ButtonGold from "@/components/atoms/ButtonGold";
import ButtonOutlineGold from "@/components/atoms/ButtonOutlineGold";
import SectionHeader from "@/components/molecules/SectionHeader";

const fadeUp = {
    initial: { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
};

type WineTastingType = {
    eyebrow: string;
    title: string;
    subtitle: string;
    content: string;
    images: string[];
    pdf: string | null;
};

export default function WineClient({ wt }: { wt: WineTastingType }) {
    const images = useMemo<string[]>(() => {
        return wt.images?.length
            ? wt.images
            : [
                "/images/wines/wine1.JPG",
                "/images/wines/wine2.JPG",
                "/images/wines/wine3.jpg",
                "/images/wines/wine4.jpg",
            ];
    }, [wt.images]);

    const [index, setIndex] = useState(0);

    // AUTO SLIDER
    useEffect(() => {
        if (!images.length) return;

        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 6500);

        return () => clearInterval(timer);
    }, [images]);

    return (
        <section
            id="wine"
            className="relative py-20 md:py-28 bg-brand-green text-brand-cream overflow-hidden min-h-screen"
        >
            {/* Ambient Glow */}
            <div className="pointer-events-none absolute inset-0">
                <div
                    className="
            absolute right-[10%] top-0 w-[700px] h-[700px]
            bg-[radial-gradient(circle,rgba(200,169,107,0.13),transparent_70%)]
            blur-3xl opacity-30
          "
                />
                <div
                    className="
            absolute left-0 bottom-0 w-[600px] h-[600px]
            bg-[radial-gradient(circle,rgba(200,169,107,0.1),transparent_70%)]
            blur-3xl opacity-25
          "
                />
            </div>

            {/* MOBILE IMAGE */}
            <motion.div
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
                className="md:hidden mb-10 relative w-full h-[480px] overflow-hidden bg-black/40 border border-brand-gold/20"
            >
                <Image
                    src={images[index]}
                    alt="Wine Tasting Jard’or"
                    fill
                    className="object-cover transition-all duration-[1200ms]"
                />
            </motion.div>

            {/* DESKTOP SLIDER */}
            <div
                className="
          hidden md:block absolute inset-y-0 right-0
          w-[50vw] overflow-hidden
          border-l border-brand-gold/20 bg-black/40
        "
            >
                <div
                    className="absolute inset-0 flex transition-transform duration-[1200ms] ease-out"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {images.map((src: string, i: number) => (
                        <div key={i} className="relative w-full h-full flex-shrink-0">
                            <Image src={src} alt={`Wine Slide ${i + 1}`} fill className="object-cover" />
                        </div>
                    ))}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* LEFT CONTENT */}
            <div className="relative z-10 max-w-5xl mr-auto px-6 md:pl-20 lg:pl-28 md:pr-10">
                <SectionHeader
                    eyebrow={wt.eyebrow}
                    title={wt.title}
                    subtitle={wt.subtitle}
                    align="left"
                    className="!px-0"
                />

                {/* PARAGRAPH FROM CMS */}
                <motion.div
                    variants={fadeUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="mt-4 space-y-3 max-w-xl prose prose-invert"
                    dangerouslySetInnerHTML={{ __html: wt.content || "" }}
                />

                {/* STATIC LIST – optional */}
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

                {/* BUTTONS */}
                <motion.div
                    variants={fadeUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                    className="pt-6 flex flex-wrap gap-3 justify-center md:justify-start"
                >
                    {/* tampilkan tombol ini hanya kalau PDF ada */}
                    {wt.pdf && (
                        <ButtonGold href={wt.pdf} target="_blank">
                            Explore Our Wine List
                        </ButtonGold>
                    )}

                    <ButtonOutlineGold
                        href="#reservation"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById("reservation")?.scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        Reserve Wine Tasting
                    </ButtonOutlineGold>
                </motion.div>

                {/* SLIDE DOTS */}
                <motion.div
                    variants={fadeUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.35 }}
                    className="pt-4 flex items-center gap-2 justify-center md:justify-start"
                >
                    {images.map((_src: string, i: number) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`h-0.5 transition-all duration-300
                ${i === index ? "w-48 bg-brand-gold" : "w-2 bg-brand-cream/35 hover:bg-brand-gold/60"}
              `}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}