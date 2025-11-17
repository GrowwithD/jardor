"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SommelierSection() {
    useEffect(() => {
        AOS.init({
            duration: 900,
            easing: "ease-out-cubic",
            once: true,
            offset: 120,
        });
    }, []);

    return (
      <section className="relative overflow-hidden bg-gradient-to-r from-black via-[#050606] to-brand-green/90 py-20 md:py-24">
            <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
                <div
                    className="
            absolute -inset-40
            bg-[url('/images/batik3.png')]
            bg-repeat
            bg-[length:480px_auto]
            bg-[position:0_-2px]
            scale-x-[-1]
        "
                />
            </div>

            {/* decorative glows */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[8%] -top-32 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(200,169,107,0.18)_0%,transparent_70%)] blur-3xl opacity-60" />
                <div className="absolute right-[12%] bottom-[-120px] h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(200,169,107,0.08)_0%,transparent_72%)] blur-3xl opacity-50" />
            </div>

            <div className="relative mx-auto max-w-6xl px-4">
                {/* Card container */}
                <div
                    data-aos="fade-right"
                    className="
                        relative z-10
                        grid gap-10 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1.6fr)]
                        items-center
                        rounded-[32px]
                        border border-brand-gold/25
                        bg-black/70
                        px-6 py-10 md:px-10 md:py-12
                        shadow-[0_28px_120px_rgba(0,0,0,1)]
                        backdrop-blur-xl
                    "
                >
                    {/* Portrait */}
                    <motion.div
                        whileHover={{ scale: 1.04, rotate: 0.8 }}
                        transition={{ type: "spring", stiffness: 150, damping: 18 }}
                        className="
                            relative mx-auto h-64 w-64 md:h-80 md:w-80
                            rounded-full border-2 border-brand-gold/60
                            bg-black/40
                            shadow-[0_0_55px_rgba(200,169,107,0.25)]
                            overflow-hidden
                        "
                    >
                        <Image
                            src="/images/somilier.png"
                            alt="Jard’or Sommelier"
                            fill
                            className="object-cover transition-transform duration-[1600ms] hover:scale-110"
                        />

                        {/* halo + overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                        <div className="absolute inset-0 rounded-full border border-brand-gold/35 opacity-50" />
                        <motion.div
                            animate={{ opacity: [0.2, 0.55, 0.2] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute inset-0 rounded-full border border-brand-gold/25 blur-xl"
                        />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        className="space-y-5 text-center md:text-left"
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        {/* eyebrow */}
                        <p className="text-[9px] uppercase tracking-[0.26em] text-brand-gold/80">
                            Wine &amp; Pairings
                        </p>

                        {/* title + line */}
                        <div className="flex flex-col items-center gap-2 md:flex-row md:items-end md:gap-3">
                            <span className="hidden h-px w-10 bg-brand-gold/70 md:inline-block" />
                            <h2 className="font-serif text-[1.85rem] md:text-[2.3rem] tracking-[0.08em] text-brand-gold">
                                Our Sommelier
                            </h2>
                        </div>

                        {/* body copy */}
                        <p className="text-[13px] md:text-[15px] leading-relaxed text-brand-cream/85">
                            Known for his impeccable taste, meticulous attention to detail, and
                            deep-rooted passion for crafting unforgettable pairings, our sommelier
                            curates each wine experience as a quiet narrative of harmony.
                        </p>

                        <p className="text-[13px] md:text-[15px] leading-relaxed text-brand-cream/80">
                            From the earthy notes of Bordeaux to the bright elegance of New Zealand
                            Sauvignon, every pour is a deliberate act of storytelling — where aroma,
                            texture, and memory converge into one timeless moment.
                        </p>

                        {/* quote */}
                        <motion.p
                            className="relative mt-3 text-[11px] md:text-[13px] italic text-brand-gold/85"
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                        >
                            <span className="mb-2 block h-px w-10 bg-brand-gold/50" />
                            “Every bottle is a story — we simply choose the right one for your
                            moment.”
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}