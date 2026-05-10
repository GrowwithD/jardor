"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import ButtonGold from "@/components/atoms/ButtonGold";
import ParallaxBackground from "@/components/atoms/ParallaxBackground";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "@/components/molecules/SectionHeader";

// ================= VARIANTS =================
const fadeUp = {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
};

// ================= EVENT DETAIL DATA =================
const eventDetails = {
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
        images: ["/images/christmas/christmas1.jpg"],
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

// TYPE FIX
type EventKey = keyof typeof eventDetails;

export default function EventsExperiencesSection() {
    const events = [
        {
            id: "wine" as EventKey,
            src: "/images/winetasting/winetasting1.JPG",
            title: "Wine Tasting",
            desc: "Journey through cellar & glass",
        },
        {
            id: "christmas" as EventKey,
            src: "/images/christmas/christmas1.jpg",
            title: "Christmas at Jard’or",
            desc: "Festive French celebrations",
        },
        {
            id: "nye" as EventKey,
            src: "/images/newyear/newyear3.jpg",
            title: "New Year’s Eve Dinner",
            desc: "Elegant year-end soirée",
        },
    ];

    const [openEvent, setOpenEvent] = useState<EventKey | null>(null);
    const [slide, setSlide] = useState(0);

    const current = openEvent ? eventDetails[openEvent] : null;

    const nextSlide = () => {
        if (current) setSlide((s) => (s + 1) % current.images.length);
    };

    const prevSlide = () => {
        if (current) setSlide((s) => (s - 1 + current.images.length) % current.images.length);
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
                <ParallaxBackground />

                {/* HEADER */}
                <div className="relative z-10 mb-14 max-w-4xl mx-auto">
                    <SectionHeader
                        eyebrow="Events & Experiences"
                        title="Events & French Culinary Experiences"
                        subtitle="Perfect for romantic dinners, family gatherings, birthdays, private buyouts & celebrations."
                        align="center"
                        className="px-6"
                    />
                </div>

                {/* EVENT CARDS */}
                <div className="relative z-10 mt-10 max-w-7xl mx-auto px-6 md:px-10">
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, amount: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                        {events.map((ev, idx) => (
                            <motion.button
                                key={ev.id}
                                variants={fadeUp}
                                transition={{ duration: 0.7, delay: idx * 0.12 }}
                                onClick={() => {
                                    setOpenEvent(ev.id);
                                    setSlide(0);
                                }}
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
                                    <h4 className="text-lg">{ev.title}</h4>
                                    <p className="text-[12px] text-brand-cream/85">{ev.desc}</p>
                                </div>
                            </motion.button>
                        ))}
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        variants={fadeUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.9 }}
                        className="mt-12 flex justify-center"
                    >
                        <ButtonGold href="#reservation">Reserve for an Event</ButtonGold>
                    </motion.div>
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
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 40 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ duration: 0.35, ease: 'easeOut' }}
                            className="
                                relative w-full max-w-7xl
                                bg-black/40 border border-brand-gold/20
                                p-6 md:p-12 rounded-2xl
                            "
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* CLOSE */}
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

                            {/* TEXT */}
                            <motion.h3
                                variants={fadeUp}
                                initial="initial"
                                animate="animate"
                                className="text-3xl md:text-4xl text-brand-cream mb-3"
                            >
                                {current.title}
                            </motion.h3>

                            <motion.p
                                variants={fadeUp}
                                initial="initial"
                                animate="animate"
                                transition={{ delay: 0.1 }}
                                className="text-brand-cream/75 text-sm md:text-lg mb-8 max-w-3xl"
                            >
                                {current.desc}
                            </motion.p>

                            {/* IMG AREA */}
                            <motion.div
                                variants={fadeUp}
                                initial="initial"
                                animate="animate"
                                transition={{ delay: 0.2 }}
                                className="
                                    relative w-full
                                    h-[60vh] md:h-[75vh]
                                    flex items-center justify-center
                                    bg-black/60 rounded-xl
                                "
                            >
                                <Image
                                    src={current.images[slide]}
                                    alt={current.title}
                                    fill
                                    className="object-contain transition-all duration-500"
                                />
                            </motion.div>

                            {/* ARROWS */}
                            <div className="absolute inset-y-0 left-4 right-4 flex items-center justify-between pointer-events-none">
                                <button
                                    onClick={prevSlide}
                                    className="
                                        pointer-events-auto h-14 w-14
                                        rounded-full bg-black/60
                                        border border-brand-gold/40 text-brand-gold
                                        hover:bg-brand-gold hover:text-black transition
                                    "
                                >
                                    <ChevronLeft size={32} strokeWidth={1.4} />
                                </button>

                                <button
                                    onClick={nextSlide}
                                    className="
                                        pointer-events-auto h-14 w-14
                                        rounded-full bg-black/60
                                        border border-brand-gold/40 text-brand-gold
                                        hover:bg-brand-gold hover:text-black transition
                                    "
                                >
                                    <ChevronRight size={32} strokeWidth={1.4} />
                                </button>
                            </div>

                            {/* DOTS */}
                            <motion.div
                                variants={fadeUp}
                                initial="initial"
                                animate="animate"
                                transition={{ delay: 0.3 }}
                                className="mt-6 flex justify-center gap-3"
                            >
                                {current.images.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setSlide(i)}
                                        className={`
                                            h-3 w-3 rounded-full transition-all
                                            ${
                                                i === slide
                                                    ? "bg-brand-gold scale-110"
                                                    : "bg-brand-cream/40"
                                            }
                                        `}
                                    />
                                ))}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}