"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CtaSection() {
    return (
        <section className="relative isolate overflow-hidden py-24 bg-black">
            {/* Background image */}
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 bg-[url('/images/batik.jpg')] bg-cover bg-center opacity-50"
                />
                {/* Overlay gradient biar readable */}
                <div className="absolute inset-0 bg-transparent" />
            </div>

            {/* subtle top separator */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[220px] h-px bg-linear-to-r from-transparent via-brand-gold/50 to-transparent" />

            {/* gold aura */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-[radial-gradient(circle,rgba(200,169,107,0.16),transparent_70%)] blur-3xl opacity-60" />
            </div>

            <div className="relative mx-auto max-w-4xl px-5 text-center space-y-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 rounded-pill border border-brand-gold/30 px-4 py-1.5 bg-black/25 backdrop-blur-sm"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                    <span className="text-[8px] md:text-[9px] uppercase tracking-[0.26em] text-brand-gold/85">
                        Reserve Your Evening
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                    viewport={{ once: true }}
                    className="font-serif text-2xl md:text-3xl text-brand-cream tracking-[0.08em]"
                >
                    A Voyage of Taste at Jard’or
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-[10px] md:text-sm text-brand-cream/78 leading-relaxed max-w-2xl mx-auto"
                >
                    Immerse yourself in an intimate dining experience where curated seasonal menus,
                    crafted cocktails, and a thoughtfully assembled cellar come together beneath
                    a warm golden glow. Choose your moment — we’ll compose the rest.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="pt-3 flex justify-center"
                >
                    <Link
                        href="/reservation"
                        className="relative inline-flex items-center justify-center rounded-full px-9 py-2.5 text-[9px] md:text-[10px] uppercase tracking-[0.24em] font-semibold bg-[linear-gradient(120deg,rgba(200,169,107,0.2),rgba(200,169,107,0.95),rgba(200,169,107,0.3))] text-black border border-brand-gold/70 shadow-[0_0_26px_rgba(200,169,107,0.45)] transition-all duration-500 hover:shadow-[0_0_40px_rgba(200,169,107,0.9)]"
                    >
                        Reservation Now
                        <motion.span
                            className="absolute inset-0 rounded-full bg-linear-to-r from-transparent via-white/30 to-transparent opacity-0"
                            whileHover={{ opacity: [0, 1, 0], x: ["-120%", "0%", "120%"] }}
                            transition={{ duration: 1.4 }}
                        />
                    </Link>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-[8px] md:text-[9px] text-brand-cream/45 tracking-[0.18em] uppercase"
                >
                    Limited Seats • Advance Reservation Recommended
                </motion.p>
            </div>
        </section>
    );
}