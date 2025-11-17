"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CtaSection() {
    return (
        <section className="relative isolate overflow-hidden py-24 bg-brand-green">
            {/* ===== BACKGROUND LAYERS ===== */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-2xl">
                <div
                    className="absolute inset-0
                            [transform:scaleX(-1)]
                        "
                >
                    <div
                        className="
                                absolute inset-0
                                bg-[url('/images/batik1.png')]
                                bg-repeat
                                bg-[length:420px_auto]  /* ukuran tile biar rapih */
                                opacity-5
                            "
                    />
                </div>
            </div>



            {/* ===== CONTENT ===== */}
            <div className="relative mx-auto max-w-4xl px-5 text-center space-y-6">

                <motion.p
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.6 }}
                    className="text-[9px] md:text-[10px] uppercase tracking-[0.26em] text-brand-gold/80"
                >
                    Reserve Your Evening
                </motion.p>

                {/* Title */}
                <motion.h2
                    variants={{
                        hidden: { opacity: 0, y: 30, scale: 0.98 },
                        visible: { opacity: 1, y: 0, scale: 1 },
                    }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-5xl font-thin lg:text-[52px] text-brand-cream "
                >
                    A Voyage of Taste at Jard’or
                </motion.h2>

                {/* Description */}
                <motion.p
                    variants={{
                        hidden: { opacity: 0, y: 15 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.6 }}
                    className="text-base font-extralight md:text-md text-brand-gold "
                >
                    Immerse yourself in an intimate dining experience where curated seasonal menus,
                    crafted cocktails, and a thoughtfully assembled cellar come together beneath
                    a warm golden glow. Choose your moment — we’ll compose the rest.
                </motion.p>

                {/* Button */}
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
                        className="rounded-pill bg-brand-gold px-8 py-2 text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.22em] text-black transition-all duration-300 hover:bg-brand-gold/10 hover:text-brand-gold hover:backdrop-blur-[3px] hover:border-brand-gold/70 border border-transparent"
                    >
                        Booking Now
                    </Link>

                </motion.div>

                {/* Note */}
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