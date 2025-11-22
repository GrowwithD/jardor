"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ButtonGold from "@/components/atoms/ButtonGold";

export default function EventsExperiencesSection() {
    const events = [
        {
            src: "/images/DSC04930-HDR.jpg",
            title: "Wine Tasting",
            desc: "Journey through cellar & glass",
        },
        {
            src: "/images/DSC04933-HDR.jpg",
            title: "Christmas at Jard’or",
            desc: "Festive French celebrations",
        },
        {
            src: "/images/DSC00342.jpg",
            title: "New Year’s Eve Dinner",
            desc: "Elegant year-end soirée",
        },
    ];

    return (
        <section
            id="experience"
            className="
                relative py-20 md:py-28
                bg-black text-brand-cream
                overflow-hidden
            "
        >
            {/* ===== PARALLAX BACKGROUND (SAMA PERSIS SEPERTI MENUSLIST) ===== */}
            <div
                className="
                    absolute inset-y-0 left-0 w-[100%]
                    bg-cover bg-center bg-no-repeat bg-fixed
                    opacity-[0.18]
                    mix-blend-lighten
                "
                style={{
                    backgroundImage: "url('/images/DSC04930-HDR.jpg')",
                }}
            />

            {/* ===== DARK GLASS OVERLAY ===== */}
            <div className="absolute inset-0 -z-[5] bg-black/50 backdrop-blur-[1px]" />

            {/* ===== HEADER ===== */}
            <div className="relative z-10 max-w-4xl mx-auto text-center px-6 space-y-4">
                <p className="text-[10px] md:text-[11px] uppercase tracking-[0.26em] text-brand-gold/70">
                    Events & Experiences
                </p>

                <h2 className="text-3xl md:text-4xl tracking-[0.03em] text-brand-cream">
                    Events & French Culinary Experiences
                </h2>

                <p className="text-sm md:text-base text-brand-cream/85 max-w-2xl mx-auto leading-relaxed">
                    Perfect for romantic dinners, family gatherings, birthdays,
                    private buyouts & celebrations.
                </p>
            </div>

            {/* ===== EVENT GRID (3 ITEMS) ===== */}
            <div className="relative z-10 mt-14 max-w-7xl mx-auto px-6 md:px-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {events.map((ev, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: idx * 0.1 }}
                            className="
                                relative aspect-[3/4] md:aspect-square
                                 overflow-hidden
                                border border-brand-gold/25 bg-black/40
                                group
                            "
                        >
                            <Image
                                src={ev.src}
                                alt={ev.title}
                                fill
                                className="
                                    object-cover transition-transform
                                    duration-[4000ms] ease-out group-hover:scale-110
                                "
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                            <div className="absolute bottom-5 left-5 space-y-1">
                                <p className="text-[10px] uppercase tracking-[0.22em] text-brand-gold/70">
                                    Jard’or
                                </p>
                                <h4 className="text-lg">{ev.title}</h4>
                                <p className="text-[12px] text-brand-cream/85">{ev.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ===== CTA ===== */}
                <div className="mt-12 flex justify-center relative z-10">
                    <ButtonGold href="#reservation">
                        Reserve for an Event
                    </ButtonGold>
                </div>
            </div>
        </section>
    );
}