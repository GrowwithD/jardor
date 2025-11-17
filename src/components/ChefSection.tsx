"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ChefSection() {
    useEffect(() => {
        AOS.init({
            duration: 900,
            easing: "ease-out-cubic",
            once: true,
            offset: 120,
        });
    }, []);

    const chefName = "Chef Name Here";
    const chefTitle = "Our Executive Chef";

    return (
        <section className="relative overflow-hidden bg-gradient-to-l from-black via-[#050606] to-brand-green/90 py-20 md:py-24">

            {/* 🔥 Batik Background (Horizontal Flip) */}
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

            {/* Glows */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute right-[10%] -top-32 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(200,169,107,0.16)_0%,transparent_70%)] blur-3xl opacity-60" />
                <div className="absolute left-[6%] bottom-[-120px] h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(200,169,107,0.08)_0%,transparent_72%)] blur-3xl opacity-55" />
            </div>

            <div className="relative mx-auto max-w-6xl px-4">

                <div
                    data-aos="fade-left"
                    className="
                        relative z-10
                        grid gap-10 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1.1fr)]
                        items-center
                        rounded-[32px]
                        border border-brand-gold/25
                        bg-black/70
                        px-6 py-10 md:px-10 md:py-12
                        shadow-[0_28px_120px_rgba(0,0,0,1)]
                        backdrop-blur-xl
                    "
                >
                    {/* Content */}
                    <motion.div
                        className="space-y-5 text-center md:text-left"
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <p className="text-[9px] uppercase tracking-[0.26em] text-brand-gold/80">
                            {chefTitle}
                        </p>

                        <div className="flex flex-col items-center gap-2 md:flex-row md:items-end md:gap-3">
                            <h2 className="font-serif text-[2rem] md:text-[2.4rem] tracking-[0.08em] text-brand-cream">
                                {chefName}
                            </h2>
                            <span className="hidden h-px w-10 bg-brand-gold/70 md:inline-block" />
                        </div>

                        <p className="text-[13px] md:text-[15px] leading-relaxed text-brand-cream/85">
                            At the helm of Jard’or’s kitchen is an executive chef who treats each
                            plate as quiet architecture — measured flavors, disciplined techniques,
                            and a philosophy that favors clarity over complication.
                        </p>

                        <p className="text-[13px] md:text-[15px] leading-relaxed text-brand-cream/80">
                            Years spent in French brigades and fine hotels across Asia are distilled
                            into a menu that feels confident rather than theatrical: precise sauces,
                            restrained garnishes, and produce selected for character instead of
                            trend. Each service is built like a score — timing, heat, and handwork
                            aligned to arrive at the table in one seamless moment.
                        </p>

                        <motion.p
                            className="mt-3 text-[11px] md:text-[13px] italic text-brand-gold/85"
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                        >
                            “We design menus to be remembered in silence — long after the last
                            course has left the table.”
                        </motion.p>
                    </motion.div>

                    {/* Portrait */}
                    <motion.div
                        whileHover={{ scale: 1.05, rotate: -0.6 }}
                        transition={{ type: "spring", stiffness: 150, damping: 18 }}
                        className="
                            relative mx-auto h-64 w-64 md:h-80 md:w-80
                            rounded-full overflow-hidden
                            border-2 border-brand-gold/65
                            bg-black/40
                            shadow-[0_0_65px_rgba(200,169,107,0.25)]
                        "
                    >
                        <Image
                            src="/images/somilier.png"
                            alt="Jard’or Executive Chef"
                            fill
                            className="object-cover transition-transform duration-[1600ms] hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                        <div className="absolute inset-0 rounded-full border border-brand-gold/30 opacity-40" />

                        <motion.div
                            animate={{ opacity: [0.2, 0.55, 0.2] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute inset-0 rounded-full border border-brand-gold/25 blur-xl"
                        />


                    </motion.div>
                </div>
            </div>
        </section>
    );
}