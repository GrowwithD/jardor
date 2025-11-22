"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutJardorSection() {
    return (
        <section
            id="restaurant"
            className="relative pt-20 md:pt-28 bg-brand-green text-brand-cream"
        >
            {/* ===== TOP TEXT ===== */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="text-center space-y-3 px-6 max-w-3xl mx-auto"
            >
                <p className="text-[10px] md:text-[11px] uppercase tracking-[0.26em] text-brand-gold/70">
                    About Jard’or — Indoor Dining
                </p>

                <h2 className="text-2xl md:text-3xl font-serif tracking-[0.04em] text-brand-cream">
                    Our Home — Luxury Fine Dining in Nusa Dua
                </h2>

                <p className="text-sm leading-relaxed text-brand-cream/80 md:text-base">
                    Step into a world where French elegance meets Balinese warmth.
                    Our indoor dining room is fully air-conditioned, styled with refined
                    French aesthetics, soft lighting, and intimate table settings —
                    perfect for couples, families, or celebrations.
                </p>

                <p className="text-sm leading-relaxed text-brand-cream/80 md:text-base">
                    Designed for comfort and luxury, our space can host everything from
                    romantic dinners to private dining events of up to 70 guests. Jard’or
                    sets the stage for unforgettable moments.
                </p>

                <p className="text-sm md:text-base leading-relaxed text-brand-cream/85 italic">
                    Luxury fine dining redefined in the heart of Nusa Dua.
                </p>
            </motion.div>

            {/* ===== IMAGE GRID (Mobile 3 grid) ===== */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="
                    mt-14 w-full bg-black
                    grid grid-cols-3 gap-0 md:px-0
                "
            >
                {[
                    "/images/DSC04919-HDR.jpg",
                    "/images/DSC04930-HDR.jpg",
                    "/images/DSC04933-HDR.jpg",
                ].map((src, idx) => (
                    <div
                        key={idx}
                        className="
                            group relative aspect-square w-full
                            overflow-hidden border border-brand-gold/20 bg-black/40
                        "
                    >
                        <Image
                            src={src}
                            alt="Jard’or Indoor"
                            fill
                            className="
                                object-cover
                                transition-transform duration-[4000ms] ease-out
                                group-hover:scale-110
                            "
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>
                ))}
            </motion.div>
        </section>
    );
}