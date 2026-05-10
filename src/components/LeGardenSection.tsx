"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ButtonGold from "@/components/atoms/ButtonGold";
import SectionHeader from "@/components/molecules/SectionHeader";

const fadeUp = {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
};

const fadeLeft = {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
};

export default function LeGardenSection() {
    const extraImages = [
        "/images/activity/activity1.jpg",
        "/images/activity/activity2.jpg",
        "/images/activity/activity3.jpg",
        "/images/activity/activity4.jpg",
        "/images/activity/activity5.jpg",
        "/images/activity/activity6.jpg",
    ];

    return (
        <section
            id="garden"
            className="
                relative py-20 md:py-28
                bg-brand-green text-brand-cream
                overflow-hidden
            "
        >
            {/* ================= CONTENT WRAPPER ================= */}
            <motion.div
                variants={fadeLeft}
                initial="initial"
                whileInView="animate"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.7 }}
                className="grid md:grid-cols-2 gap-16 items-center"
            >
                {/* LEFT IMAGES */}
                <div className="flex gap-4 w-full px-6 md:px-0">
                    {/* IMG 1 */}
                    <motion.div
                        variants={fadeLeft}
                        transition={{ duration: 0.6 }}
                        className="
                            relative w-1/2 aspect-[4/5] overflow-hidden bg-black/40 group
                        "
                    >
                        <Image
                            src="/images/activity/activity1.jpg"
                            alt="Le Garden Atmosphere"
                            fill
                            className="object-cover transition-transform duration-[3500ms] ease-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </motion.div>

                    {/* IMG 2 */}
                    <motion.div
                        variants={fadeLeft}
                        transition={{ duration: 0.8 }}
                        className="
                            relative w-1/2 aspect-[4/5] overflow-hidden bg-black/40 group
                        "
                    >
                        <Image
                            src="/images/activity/activity2.jpg"
                            alt="Le Garden Experience"
                            fill
                            className="object-cover transition-transform duration-[3500ms] ease-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </motion.div>
                </div>

                {/* ================= RIGHT TEXT ================= */}
                <motion.div
                    variants={fadeUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="px-6 md:pr-10 space-y-6"
                >
                    <SectionHeader
                        eyebrow="Le Garden by Jard’or — Cocktail Lounge & Nightlife"
                        title="Where Evenings Bloom to Le Garden by Jard’or."
                        subtitle="Le Garden by Jard’or transforms into one of Nusa Dua’s most elegant outdoor lounges — warm lights, curated cocktails, and an atmosphere that evolves with the night."
                        align="left"
                    />

                    {/* Extra Paragraph */}
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
                                className="relative aspect-square overflow-hidden bg-black/40 group"
                            >
                                <Image
                                    src={src}
                                    alt="Le Garden at Jard'or"
                                    fill
                                    className="object-cover transition-transform duration-[3500ms] ease-out group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA */}
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

            {/* =======================================================
                EXTRA PHOTO GRID — AS REQUESTED (6 images, aspect-3/4)
            ========================================================= */}
            <motion.div
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-6"
            >
                {extraImages.map((src, idx) => (
                    <motion.div
                        key={idx}
                        variants={fadeUp}
                        transition={{ duration: 0.6 + idx * 0.1 }}
                        className="relative aspect-[3/4] overflow-hidden bg-black/40 group"
                    >
                        <Image
                            src={src}
                            alt=""
                            fill
                            className="object-cover transition-transform duration-[3500ms] ease-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}