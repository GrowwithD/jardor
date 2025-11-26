"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ButtonGold from "@/components/atoms/ButtonGold";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function EventsExperiencesSection() {
    const events = [
        {
            id: "wine",
            src: "/images/winetasting/winetasting1.JPG",
            title: "Wine Tasting",
            desc: "Journey through cellar & glass",
        },
        {
            id: "christmas",
            src: "/images/christmas/christmas1.jpg",
            title: "Christmas at Jard’or",
            desc: "Festive French celebrations",
        },
        {
            id: "nye",
            src: "/images/newyear/newyear1.jpg",
            title: "New Year’s Eve Dinner",
            desc: "Elegant year-end soirée",
        },
    ];

    /* EVENT DETAIL IMAGES */
    const eventDetails: Record<
        string,
        { title: string; desc: string; images: string[] }
    > = {
        wine: {
            title: "Wine Tasting",
            desc: "A curated tasting journey guided by our in-house sommelier. Explore the finest French and European selections.",
            images: [
                "/images/winetasting/winetasting1.JPG",
                "/images/winetasting/winetasting2.JPG",
                "/images/winetasting/winetasting3.JPG",
            ],
        },
        christmas: {
            title: "Christmas at Jard’or",
            desc: "Celebrate a warm and elegant French Christmas — seasonal menus, candlelit ambience, and curated wine pairings.",
            images: [
                "/images/christmas/christmas1.jpg"
            ],
        },
        nye: {
            title: "New Year’s Eve Dinner",
            desc: "Ring in the New Year with a refined multi-course dinner and a luxurious evening at Jard’or.",
            images: [
                "/images/newyear/newyear1.jpg",
                "/images/newyear/newyear2.jpg",
                "/images/newyear/newyear3.jpg",
            ],
        },
    };

    /* POPUP STATE */
    const [openEvent, setOpenEvent] = useState<string | null>(null);
    const [slide, setSlide] = useState(0);

    const current = openEvent ? eventDetails[openEvent] : null;

    const nextSlide = () => {
        if (!current) return;
        setSlide((prev) => (prev + 1) % current.images.length);
    };

    const prevSlide = () => {
        if (!current) return;
        setSlide((prev) => (prev - 1 + current.images.length) % current.images.length);
    };

    return (
        <>
            {/* ================= SECTION ================= */}
            <section
                id="experience"
                className="
                    relative py-20 md:py-28
                    bg-black text-brand-cream
                    overflow-hidden
                "
            >
                {/* PARALLAX BACKGROUND */}
                <div
                    className="
                        absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat
                        opacity-[0.18] mix-blend-lighten
                    "
                    style={{
                        backgroundImage: "url('/images/parallax/parallax1.jpg')",
                    }}
                />


                {/* HEADER */}
                <div className="relative z-10 max-w-4xl mx-auto text-center px-6 space-y-4">
                    <p className="text-[10px] tracking-[0.26em] text-brand-gold/70 uppercase">
                        Events & Experiences
                    </p>

                    <h2 className="text-3xl md:text-4xl text-brand-cream">
                        Events & French Culinary Experiences
                    </h2>

                    <p className="text-sm md:text-base text-brand-cream/85 max-w-2xl mx-auto">
                        Perfect for romantic dinners, family gatherings, birthdays,
                        private buyouts & celebrations.
                    </p>
                </div>

                {/* EVENT CARDS */}
                <div className="relative z-10 mt-14 max-w-7xl mx-auto px-6 md:px-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {events.map((ev, idx) => (
                            <motion.button
                                key={ev.id}
                                onClick={() => {
                                    setOpenEvent(ev.id);
                                    setSlide(0);
                                }}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: idx * 0.1 }}
                                className="
                                    relative aspect-[3/4] md:aspect-square
                                    overflow-hidden w-full
                                    border border-brand-gold/25 bg-black/40
                                    group text-left
                                "
                            >
                                <Image
                                    src={ev.src}
                                    alt={ev.title}
                                    fill
                                    className="
                                        object-cover transition-transform
                                        duration-[3500ms] ease-out
                                        group-hover:scale-110
                                    "
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                <div className="absolute bottom-5 left-5 space-y-1">
                                    <p className="text-[10px] uppercase tracking-[0.22em] text-brand-gold/70">
                                        Jard’or
                                    </p>
                                    <h4 className="text-lg font-serif">{ev.title}</h4>
                                    <p className="text-[12px] text-brand-cream/85">{ev.desc}</p>
                                </div>
                            </motion.button>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-12 flex justify-center relative z-10">
                        <ButtonGold href="#reservation">Reserve for an Event</ButtonGold>
                    </div>
                </div>
            </section>

            {/* ================== POPUP MODAL ================== */}
            <AnimatePresence>
                {openEvent && current && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="
                fixed inset-0 z-[60]
                bg-black/90 backdrop-blur-xl
                flex items-center justify-center
                p-4 md:p-10
            "
                        onClick={() => setOpenEvent(null)}
                    >
                        {/* POPUP CONTENT */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 40 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ duration: 0.35, ease: 'easeOut' }}
                            className="
                    relative w-full
                    max-w-7xl
                    bg-black/40 border border-brand-gold/20
                    p-6 md:p-12 rounded-2xl
                "
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* CLOSE BUTTON */}
                            <button
                                onClick={() => setOpenEvent(null)}
                                className="
                        absolute -top-12 right-0
                        h-12 w-12 flex items-center justify-center
                        rounded-full border border-brand-gold/30
                        bg-black/70 text-brand-gold
                        hover:bg-brand-gold hover:text-black transition
                    "
                            >
                                ✕
                            </button>

                            {/* TITLE */}
                            <h3 className="text-3xl md:text-4xl font-serif text-brand-cream mb-3">
                                {current.title}
                            </h3>
                            <p className="text-brand-cream/75 text-sm md:text-lg mb-8 max-w-3xl">
                                {current.desc}
                            </p>

                            <div
                                className="
        relative w-full
        h-[60vh] md:h-[75vh]           /* FIX: wajib ada height agar fill bekerja */
        flex items-center justify-center
        bg-black/60
        rounded-xl
    "
                            >
                                <Image
                                    src={current.images[slide]}
                                    alt={current.title}
                                    fill
                                    priority
                                    className="
            object-contain              /* tidak crop */
            transition-all duration-500
        "
                                />
                            </div>

                            {/* ARROWS — Lucide React */}
                            <div className="absolute inset-y-0 left-4 right-4 flex items-center justify-between pointer-events-none">
                                <button
                                    onClick={prevSlide}
                                    className="
                            pointer-events-auto
                            h-14 w-14 flex items-center justify-center
                            rounded-full bg-black/60
                            border border-brand-gold/40
                            text-brand-gold
                            hover:bg-brand-gold hover:text-black transition
                        "
                                >
                                    <ChevronLeft size={32} strokeWidth={1.4} />
                                </button>

                                <button
                                    onClick={nextSlide}
                                    className="
                            pointer-events-auto
                            h-14 w-14 flex items-center justify-center
                            rounded-full bg-black/60
                            border border-brand-gold/40
                            text-brand-gold
                            hover:bg-brand-gold hover:text-black transition
                        "
                                >
                                    <ChevronRight size={32} strokeWidth={1.4} />
                                </button>
                            </div>

                            {/* DOTS */}
                            <div className="mt-6 flex justify-center gap-3">
                                {current.images.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setSlide(i)}
                                        className={`
                                h-3 w-3 rounded-full transition-all
                                ${i === slide ? "bg-brand-gold scale-110" : "bg-brand-cream/40"}
                            `}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}