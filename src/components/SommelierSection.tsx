"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SommelierSection() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-out-quart",
            once: true,
            offset: 100,
        });
    }, []);

    return (
    <section className="relative bg-linear-to-r from-30% via-60% to-70% from-black via-[#0c0c0b] to-brand-green/95 py-24 overflow-hidden">
            {/* decorative gold lighting */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[520px] h-[520px] bg-[radial-gradient(circle,rgba(200,169,107,0.18)_0%,transparent_70%)] blur-3xl opacity-50" />
                <div className="absolute -bottom-40 left-[10%] w-[380px] h-[380px] bg-[radial-gradient(circle,rgba(200,169,107,0.08)_0%,transparent_70%)] blur-2xl opacity-60" />
            </div>

            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-14 px-4 md:flex-row md:gap-20">
                {/* Portrait with glow border */}
                <motion.div
                    data-aos="fade-up-right"
                    whileHover={{ scale: 1.06, rotate: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 130,
                        damping: 16,
                    }}
                    className="relative h-64 w-64 md:h-80 md:w-80 rounded-full overflow-hidden border-2 border-brand-gold/60 bg-black/40 shadow-[0_0_55px_rgba(200,169,107,0.15)]"
                >
                    <Image
                        src="/images/somilier.png"
                        alt="Our Sommelier"
                        fill
                        className="object-cover transition-transform duration-1600 hover:scale-110"
                    />

                    {/* soft gradient & gold halo */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute inset-0 rounded-full border border-brand-gold/30 blur-sm opacity-40" />
                    <motion.div
                        animate={{ opacity: [0.2, 0.5, 0.2] }}
                        transition={{ repeat: Infinity, duration: 3 }}
                        className="absolute inset-0 rounded-full border border-brand-gold/20 blur-lg"
                    />
                </motion.div>

                {/* Content */}
                <motion.div
                    data-aos="fade-up-left"
                    className="max-w-xl space-y-6 text-center md:text-left"
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    {/* Title with shimmer line */}
                    <div className="inline-flex items-center gap-3 mb-1">
                        <motion.span
                            initial={{ width: 0 }}
                            whileInView={{ width: 40 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="h-px bg-brand-gold/60 hidden md:inline-block"
                        />
                        <h2 className="text-3xl md:text-4xl text-brand-gold tracking-[0.08em]">
                            Our Sommelier
                        </h2>
                    </div>

                    <p className="text-sm md:text-base text-neutral-300 leading-relaxed">
                        Known for his impeccable taste, meticulous attention to detail, and deep-rooted passion for crafting unforgettable pairings, our sommelier curates each wine experience as a narrative of harmony.
                        <br />
                        <br />
                        From the earthy notes of Bordeaux to the bright elegance of a New Zealand Sauvignon, every pour is a deliberate act of storytelling — where aroma, texture, and memory converge into one timeless moment.
                    </p>

                    {/* Animated quote */}
                    <motion.p
                        className="text-xs md:text-sm text-brand-gold/80 italic relative"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        <span className="block h-px w-8 bg-brand-gold/40 mb-2" />
                        “Every bottle is a story — we simply choose the right one for your moment.”
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}