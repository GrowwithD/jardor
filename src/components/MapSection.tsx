"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MapSection() {
    useEffect(() => {
        AOS.init({
            duration: 900,
            easing: "ease-out-quart",
            once: true,
            offset: 100,
        });
    }, []);

    return (
        <section className="relative isolate overflow-hidden bg-linear-to-b from-[#0a1815] via-brand-green-soft/95 to-black py-20">
            {/* Gold glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(200,169,107,0.12),transparent_70%)] blur-3xl opacity-50" />
            </div>

            <div
                className="relative mx-auto max-w-6xl px-6 text-center space-y-8"
                data-aos="fade-up"
            >
                <motion.h3
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="font-serif text-2xl md:text-3xl text-brand-gold tracking-[0.08em]"
                >
                    Find Us
                </motion.h3>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-3xl border border-brand-gold/25 shadow-[0_22px_80px_rgba(0,0,0,0.85)] bg-linear-to-br from-black/70 via-brand-green-soft/60 to-black/90"
                >
                    <iframe
                        title="Jard’or Location"
                        src="https://maps.google.com/maps?q=Nusa%20Dua%20Bali&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        className="h-[380px] md:h-[460px] w-full border-0 opacity-90 transition-all duration-700 hover:opacity-100"
                        loading="lazy"
                    />
                    {/* soft vignette overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,rgba(0,0,0,0.55))]" />
                </motion.div>

                <div className="space-y-2">
                    <p className="text-[10px] md:text-xs text-brand-cream/75">
                        Nusa Dua – Bali, Indonesia
                    </p>
                    <motion.div whileHover={{ scale: 1.04 }}>
                        <Link
                            href="https://www.google.com/maps/place/Nusa+Dua,+Bali"
                            target="_blank"
                            className="inline-flex items-center gap-2 rounded-pill border border-brand-gold/60 bg-transparent px-5 py-2 text-[9px] md:text-[10px] uppercase tracking-[0.22em] text-brand-gold transition-all duration-400 hover:bg-brand-gold hover:text-black shadow-[0_0_18px_rgba(200,169,107,0.2)]"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-3.5 h-3.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1.5}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 2.25c3.728 0 6.75 3.022 6.75 6.75 0 4.313-6.75 12.75-6.75 12.75S5.25 13.313 5.25 9A6.75 6.75 0 0112 2.25zM12 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                                />
                            </svg>
                            Open in Google Maps
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}