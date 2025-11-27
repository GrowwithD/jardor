"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ButtonGold from "@/components/atoms/ButtonGold";
import SectionHeader from "@/components/molecules/SectionHeader";

// Reusable animation variants
const fadeUp = {
    initial: { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
};

const fadeLeft = {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
};

export default function LeGardenSection() {
    return (
        <section
            id="garden"
            className="
                relative py-20 md:py-28
                bg-brand-green text-brand-cream
                overflow-hidden
            "
        >

            {/* ================= LEFT SIDE IMAGES ================= */}
            <motion.div
                variants={fadeLeft}
                initial="initial"
                whileInView="animate"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="grid md:grid-cols-2 gap-12 items-center"
            >
                {/* LEFT IMAGES */}
                <div className="flex gap-3 w-full px-6 md:px-0">
                    {/* Image 1 */}
                    <motion.div
                        variants={fadeLeft}
                        transition={{ duration: 0.6 }}
                        className="relative w-1/2 aspect4/5 overflow-hidden border border-brand-gold/20 bg-black/40 group"
                    >
                        <Image
                            src="/images/activity/activity1.jpg"
                            alt="Le Garden Atmosphere"
                            fill
                            className="object-cover transition-transform duration-4000 ease-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
                    </motion.div>

                    {/* Image 2 */}
                    <motion.div
                        variants={fadeLeft}
                        transition={{ duration: 0.75 }}
                        className="relative w-1/2 aspect-4/5 overflow-hidden border border-brand-gold/20 bg-black/40 group"
                    >
                        <Image
                            src="/images/activity/activity2.jpg"
                            alt="Le Garden Experience"
                            fill
                            className="object-cover transition-transform duration-4000 ease-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
                    </motion.div>
                </div>

                {/* ================= RIGHT TEXT ================= */}
                {/* ================= RIGHT: TEXT ================= */}
                <motion.div
                    variants={fadeUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="px-6 md:pr-10 space-y-5"
                >
                    {/* SECTION HEADER */}
                    <SectionHeader
                        eyebrow="Le Garden by Jard’or — Cocktail Lounge & Nightlife"
                        title="Where Evenings Bloom"
                        subtitle="Le Garden by Jard’or transforms into one of Nusa Dua’s most elegant outdoor lounges — warm lights, curated cocktails, and an atmosphere that evolves with the night."
                        align="left"
                        className="px-0!"
                    />

                    {/* EXTRA PARAGRAPH */}
                    <motion.p
                        variants={fadeUp}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-sm md:text-base leading-relaxed text-brand-cream/80"
                    >
                        Whether for sunset drinks, intimate gatherings, or late-night energy,
                        every moment blends French-inspired mixology with Bali’s magnetic evenings.
                    </motion.p>

                    {/* THUMBNAILS */}
                    <motion.div
                        variants={fadeUp}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-3 gap-3 pt-4"
                    >
                        {[
                            "/images/activity/activity3.jpg",
                            "/images/activity/activity4.jpg",
                            "/images/activity/activity6.jpg",
                        ].map((src, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeUp}
                                transition={{ duration: 0.6 + idx * 0.2 }}
                                className="group relative aspect-square overflow-hidden border border-brand-gold/20"
                            >
                                <Image
                                    src={src}
                                    alt=""
                                    fill
                                    className="object-cover transition-transform duration-4000 ease-out group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA BUTTON */}
                    <motion.div
                        variants={fadeUp}
                        transition={{ duration: 0.9 }}
                        className="mt-6 flex flex-wrap items-center gap-3"
                    >
                        <ButtonGold href="https://cho.pe/s70otkn6g" target="_blank">
                            Book a Night at Le Garden
                        </ButtonGold>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}