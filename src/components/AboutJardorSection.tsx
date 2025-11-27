"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "@/components/molecules/SectionHeader";

const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

export default function AboutJardorSection() {
    return (
        <section
            id="restaurant"
            className="relative pt-20 md:pt-28 bg-brand-green text-brand-cream"
        >
            {/* ===== TOP TEXT VIA SectionHeader ===== */}
            <SectionHeader
                eyebrow="About Jard’or — Indoor Dining"
                title="Our Home — Luxury Fine Dining in Nusa Dua"
                subtitle="Step into a world where French elegance meets Balinese warmth. Our indoor dining room is fully air-conditioned, styled with refined French aesthetics, soft lighting, and intimate table settings — perfect for couples, families, or celebrations."
                align="center"
                className="max-w-3xl mx-auto"
            />

            {/* EXTRA PARAGRAPHS */}
            <motion.div
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="mt-4 text-center px-6 max-w-3xl mx-auto space-y-3"
            >
                <motion.p
                    variants={fadeUp}
                    transition={{ duration: 0.6 }}
                >
                    Designed for comfort and luxury, our space can host everything from
                    romantic dinners to private dining events of up to 70 guests. Jard’or
                    sets the stage for unforgettable moments.
                </motion.p>

                <motion.p
                    variants={fadeUp}
                    transition={{ duration: 0.7 }}
                    className="italic"
                >
                    Luxury fine dining redefined in the heart of Nusa Dua.
                </motion.p>
            </motion.div>

            {/* ===== IMAGE GRID ===== */}
            <motion.div
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="
                    mt-14 w-full bg-black
                    grid grid-cols-3 gap-0 md:px-0
                "
            >
                {[
                    "/images/about/about1.jpg",
                    "/images/about/about2.jpg",
                    "/images/about/about3.jpg",
                ].map((src, idx) => (
                    <motion.div
                        key={idx}
                        variants={fadeUp}
                        transition={{ duration: 0.6 + idx * 0.2 }}
                        className="
        group relative aspect-square w-full
        overflow-hidden bg-black/40
    "
                    >
                        <Image
                            src={src}
                            alt="Jard’or Indoor"
                            fill
                            className="
                                object-cover
                                transition-transform duration-4000 ease-out
                                group-hover:scale-110
                            "
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}