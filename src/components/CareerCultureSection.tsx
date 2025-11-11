"use client";

import { motion, type Variants } from "framer-motion";

const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function CareerCultureSection() {
    return (
       <section className="relative bg-linear-to-b from-[#0B1C13] via-[#050806] to-[#020303] py-16">


            <div className="relative max-w-6xl mx-auto px-6">
                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.35 }}
                    className="grid grid-cols-1 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1.2fr)] gap-10 items-start"
                >
                    {/* LEFT: narrative */}
                    <div className="space-y-6">
                        <p className="text-[10px] md:text-[11px] uppercase tracking-[0.26em] text-brand-gold/75">
                            Life at Jard&apos;or
                        </p>

                        <h2 className="font-serif text-2xl md:text-3xl text-brand-gold uppercase tracking-[0.16em]">
                            Where Craft &amp; Grace Meet
                        </h2>

                        <div className="h-px w-16 bg-brand-gold/70" />

                        <p className="text-[12px] md:text-[14px] text-brand-cream/88 leading-relaxed">
                            Jard’or thrives on quiet confidence — service that’s choreographed,
                            warm, and precise. From the kitchen to the garden terrace, our team
                            moves with intention so every guest feels seamlessly cared for.
                        </p>

                        <p className="text-[11px] md:text-[13px] text-brand-cream/75 leading-relaxed">
                            We welcome individuals who notice the smallest details: a balanced
                            plate, a graceful pour, a remembered name. In return, we offer
                            mentorship, discipline, and a path toward mastery in fine dining.
                        </p>
                    </div>

                    {/* RIGHT: pillar cards */}
                    <div className="space-y-4">
                        {[
                            {
                                label: "Excellence in Craft",
                                body: "Work alongside chefs, sommeliers, and hosts who refine every gesture into an art form.",
                            },
                            {
                                label: "Composed Energy",
                                body: "A calm and focused service rhythm — where teamwork replaces chaos and elegance guides movement.",
                            },
                            {
                                label: "Growth & Mentorship",
                                body: "Cross-training, tastings, and exposure to fine dining philosophy that elevates skill into intuition.",
                            },
                            {
                                label: "Human & Warm",
                                body: "Behind the formality, sincerity matters most. We treat our craft — and each other — with care.",
                            },
                        ].map((item) => (
                            <motion.div
                                key={item.label}
                                whileHover={{ scale: 1.015 }}
                                transition={{ type: "spring", stiffness: 180, damping: 20 }}
                                className="group relative overflow-hidden rounded-2xl border border-brand-gold/15 bg-gradient-to-r from-[#0A0E0B]/90 via-black/95 to-[#090E0A]/90 px-5 py-4 shadow-[0_18px_60px_rgba(0,0,0,0.9)] backdrop-blur-[6px]"
                            >
                                <div className="absolute inset-y-0 left-0 w-[2px] bg-brand-gold/0 group-hover:bg-brand-gold/80 transition-all duration-500" />
                                <h3 className="font-serif text-[13px] md:text-[14px] text-brand-gold mb-1">
                                    {item.label}
                                </h3>
                                <p className="text-[10px] md:text-[11px] text-brand-cream/78 leading-relaxed">
                                    {item.body}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}