"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";

export default function ChefSection() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-out-quart",
            once: true,
            offset: 100,
        });
    }, []);

    return (
  <section className="relative bg-linear-to-l from-20% via-50% to-70% from-black via-[#0c0c0b] to-brand-green/95 py-24 overflow-hidden">
            {/* decorative glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute right-[12%] -top-24 w-[420px] h-[420px] bg-[radial-gradient(circle,rgba(200,169,107,0.14)_0%,transparent_72%)] blur-3xl opacity-60" />
                <div className="absolute left-0 bottom-[-140px] w-[320px] h-80 bg-[radial-gradient(circle,rgba(200,169,107,0.06)_0%,transparent_75%)] blur-2xl opacity-70" />
            </div>

            <div className="mx-auto flex max-w-6xl flex-col-reverse md:flex-row items-center md:items-center justify-between gap-14 md:gap-20 px-4 relative">
                {/* Content */}
                <motion.div
                    data-aos="fade-up-right"
                    className="max-w-xl space-y-6 text-center md:text-left"
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    {/* Label */}
                    <div className="inline-flex items-center gap-3 mb-1">
                        <h2 className="font-serif text-3xl md:text-4xl text-brand-gold tracking-[0.08em]">
                            Our Executive Chef
                        </h2>
                        <motion.span
                            initial={{ width: 0 }}
                            whileInView={{ width: 40 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="h-px bg-brand-gold/60 hidden md:inline-block"
                        />
                    </div>

                    <p className="text-sm md:text-base text-neutral-300 leading-relaxed">
                        At the helm of Jard’or’s kitchen is an executive chef who treats each plate
                        as quiet architecture — measured flavors, disciplined techniques, and a
                        philosophy that favors clarity over complication.
                        <br />
                        <br />
                        Years spent in French brigades and fine hotels across Asia are distilled
                        into a menu that feels confident, not theatrical: precise sauces, restrained
                        garnishes, and produce selected for character instead of trend. Every
                        service is built like a score — timing, heat, and handwork aligned to arrive
                        at the table in one seamless moment.
                    </p>

                    <motion.p
                        className="text-xs md:text-sm text-brand-gold/80 italic"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25, duration: 0.8 }}
                    >
                        “We design menus to be remembered in silence — long after the last course
                        has left the table.”
                    </motion.p>

                </motion.div>

                {/* Portrait */}
                <motion.div
                    data-aos="fade-up-left"
                    whileHover={{ scale: 1.05, rotate: -1 }}
                    transition={{ type: "spring", stiffness: 130, damping: 16 }}
                    className="relative h-64 w-64 md:h-80 md:w-80 rounded-[42px] overflow-hidden border-2 border-brand-gold/65 bg-black/40 shadow-[0_0_55px_rgba(0,0,0,0.9)]"
                >
                    <Image
                        src="/images/somilier.png" // ganti dengan path foto chef kamu
                        alt="Our Executive Chef"
                        fill
                        className="object-cover transition-transform duration-1600 hover:scale-110"
                    />

                    {/* layered glow */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/35 to-transparent" />
                    <div className="absolute inset-1.5 rounded-[34px] border border-brand-gold/18" />
                    <motion.div
                        animate={{ opacity: [0.18, 0.45, 0.18] }}
                        transition={{ repeat: Infinity, duration: 3.2 }}
                        className="absolute -inset-1 rounded-[46px] border border-brand-gold/12 blur-[6px]"
                    />
                    {/* name tag */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/70 border border-brand-gold/40 backdrop-blur-md flex flex-col items-center">
                        <span className="text-[8px] tracking-[0.22em] uppercase text-brand-gold/90">
                            Executive Chef
                        </span>
                        <span className="text-[9px] text-brand-cream/92">
                            {/* isi nama chef */}
                            Chef Name Here
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}