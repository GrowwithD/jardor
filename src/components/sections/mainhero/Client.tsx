"use client";

import Image from "next/image";
import NavLogo from "@/components/atoms/NavLogo";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ButtonGold from "@/components/atoms/ButtonGold";
import ButtonOutlineGold from "@/components/atoms/ButtonOutlineGold";

// =======================
// TYPES
// =======================
interface MainHeroProps {
    images: string[];
    eyebrow: string;
    title: string;
    subtitle: string;
    chope_link: string;
}

// =======================
// COMPONENT
// =======================
export default function MainHeroClient({
    images,
    eyebrow,
    title,
    subtitle,
    chope_link,
}: MainHeroProps) {

    const [index, setIndex] = useState(0);

    // Auto slide
    useEffect(() => {
        if (!images?.length) return;

        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 6500);

        return () => clearInterval(timer);
    }, [images]);

    return (
        <section
            id="homepage"
            className="relative h-[520px] md:h-screen w-full overflow-hidden bg-black"
        >
            {/* SLIDER */}
            <div
                className="absolute inset-0 flex transition-transform duration-[1200ms]"
                style={{ transform: `translateX(-${index * 100}%)` }}
            >
                {images.map((src, idx) => (
                    <div key={idx} className="relative w-full h-full flex-shrink-0">
                        <Image
                            src={src}
                            alt={`Slide ${idx + 1}`}
                            fill
                            priority={idx === 0}
                            loading={idx === 0 ? "eager" : "lazy"}
                            sizes="100vw"
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* BLACK OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/55 to-black/85" />

            {/* CONTENT */}
            <div className="relative z-10 flex h-full items-center pt-24">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: { transition: { staggerChildren: 0.12 } },
                    }}
                    className="mx-auto max-w-xl flex flex-col items-center text-center gap-3 px-4"
                >
                    {/* LOGO */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <NavLogo heightClass="h-24" />
                    </motion.div>

                    {/* EYEBROW */}
                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="text-[10px] tracking-[0.28em] uppercase text-brand-gold/80"
                    >
                        {eyebrow}
                    </motion.p>

                    {/* TITLE */}
                    <motion.h1
                        variants={{
                            hidden: { opacity: 0, y: 28 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="text-3xl md:text-5xl text-brand-cream leading-tight"
                    >
                        {title}
                    </motion.h1>

                    {/* SUBTITLE */}
                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 15 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="text-base md:text-lg text-brand-cream/85 max-w-xl leading-relaxed"
                    >
                        {subtitle}
                    </motion.p>

                    {/* CTA BUTTONS */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="mt-6 flex flex-wrap items-center justify-center gap-3"
                    >
                        <ButtonGold
                            id="gtm-reserve-on-chope"
                            href={chope_link}
                            target="_blank"
                        >
                            Reserve On Chope
                        </ButtonGold>

                        <ButtonOutlineGold
                            id="gtm-view-our-menus"
                            href="/menus"
                        >
                            View Our Menus
                        </ButtonOutlineGold>
                    </motion.div>

                    {/* DOTS */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="mt-5 flex items-center gap-2"
                    >
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setIndex(i)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${i === index
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
