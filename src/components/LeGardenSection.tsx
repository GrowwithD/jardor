"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ButtonGold from "@/components/atoms/ButtonGold";
import ButtonOutlineGold from "@/components/atoms/ButtonOutlineGold";

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
            {/* Ambient Glows */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[10%] top-0 w-[700px] h-[700px]
                    bg-[radial-gradient(circle,rgba(200,169,107,0.14),transparent_70%)]
                    blur-3xl opacity-30" />
                <div className="absolute right-0 bottom-0 w-[600px] h-[600px]
                    bg-[radial-gradient(circle,rgba(200,169,107,0.1),transparent_70%)]
                    blur-3xl opacity-25" />
            </div>

            {/* GRID WITHOUT CONTAINER (FULL WIDTH LEFT SIDE) */}
            <div className="grid md:grid-cols-2 gap-12 items-center">

                {/* ================= LEFT: FULL WIDTH SIDE BY SIDE IMAGES ================= */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="flex gap-0 w-full px-6 md:px-0"
                >
                    {/* Image 1 */}
                    <div className="relative w-1/2 aspect-[4/5] overflow-hidden border border-brand-gold/20 bg-black/40 group">
                        <Image
                            src="/images/DSC04936-HDR.jpg"
                            alt="Le Garden Atmosphere"
                            fill
                            className="object-cover transition-transform duration-[4000ms] ease-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>

                    {/* Image 2 */}
                    <div className="relative w-1/2 aspect-[4/5] overflow-hidden border border-brand-gold/20 bg-black/40 group">
                        <Image
                            src="/images/DSC04930-HDR.jpg"
                            alt="Le Garden Experience"
                            fill
                            className="object-cover transition-transform duration-[4000ms] ease-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>
                </motion.div>

                {/* ================= RIGHT: TEXT (INSIDE CONTAINER) ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="px-6 md:pr-10 space-y-5"
                >
                    <p className="text-[10px] md:text-[11px] uppercase tracking-[0.26em] text-brand-gold/70">
                        Le Garden by Jard’or — Cocktail Lounge & Nightlife
                    </p>

                    <h2 className="font-serif text-2xl md:text-3xl tracking-[0.03em] text-brand-cream">
                        Where Evenings Bloom
                    </h2>

                    <p className="text-sm md:text-base leading-relaxed text-brand-cream/80">
                        Le Garden by Jard’or transforms into one of Nusa Dua’s most elegant
                        outdoor lounges — warm lights, curated cocktails, and an atmosphere
                        that evolves with the night.
                    </p>

                    <p className="text-sm md:text-base leading-relaxed text-brand-cream/80">
                        Whether for sunset drinks, intimate gatherings, or late-night energy,
                        every moment blends French-inspired mixology with Bali’s magnetic evenings.
                    </p>

                    {/* Thumbnails */}
                    <div className="grid grid-cols-3 gap-3 pt-4">
                        {[
                            "/images/DSC04919-HDR.jpg",
                            "/images/DSC04930-HDR.jpg",
                            "/images/DSC04933-HDR.jpg",
                        ].map((src, idx) => (
                            <div
                                key={idx}
                                className="group relative aspect-square overflow-hidden border border-brand-gold/20"
                            >
                                <Image
                                    src={src}
                                    alt=""
                                    fill
                                    className="object-cover transition-transform duration-[3500ms] ease-out group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                            </div>
                        ))}
                    </div>

                    {/* CTA BUTTONS */}
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mt-6 flex flex-wrap items-center gap-3"
                    >
                        <ButtonGold href="/reservation">Book a Night at Le Garden</ButtonGold>
                        <ButtonOutlineGold href="#">WhatsApp Us</ButtonOutlineGold>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}