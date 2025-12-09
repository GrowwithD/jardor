"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import ButtonGold from "@/components/atoms/ButtonGold";
import ParallaxBackground from "@/components/atoms/ParallaxBackground";
import SectionHeader from "@/components/molecules/SectionHeader";
import { ChevronLeft, ChevronRight } from "lucide-react";

const fadeUp = {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
};

type GalleryImage = { id: string; image: string };

type EventType = {
    id: string;
    title: string;
    short_description?: string;
    description?: string;
    main_image: string;
    gallery_images: GalleryImage[];
};

export default function EventsClient({
    events,
    header,
}: {
    events: EventType[];
    header: {
        eyebrow: string;
        title: string;
        subtitle: string;
        content: string;
        button_text: string;
    };
}) {
    const [openEvent, setOpenEvent] = useState<EventType | null>(null);
    const [slide, setSlide] = useState(0);

    const getAllImages = (ev: EventType) => {
        const gallery = ev.gallery_images?.map((g) => g.image) ?? [];
        return ev.main_image ? [ev.main_image, ...gallery] : gallery;
    };

    const nextSlide = () => {
        if (!openEvent) return;
        const imgs = getAllImages(openEvent);
        setSlide((s) => (s + 1) % imgs.length);
    };

    const prevSlide = () => {
        if (!openEvent) return;
        const imgs = getAllImages(openEvent);
        setSlide((s) => (s - 1 + imgs.length) % imgs.length);
    };

    /* ========= EventCard CLICK Handler Global ========= */
    useEffect(() => {
        const handler = (e: any) => {
            setOpenEvent(e.detail);
            setSlide(0);
        };
        window.addEventListener("open-event", handler);
        return () => window.removeEventListener("open-event", handler);
    }, []);

    /* ========= Render Event Card Inline ========= */
    const renderEventCard = (ev: EventType, idx: number, extraClass = "") => (
        <motion.button
            key={ev.id}
            variants={fadeUp}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
            onClick={() =>
                window.dispatchEvent(new CustomEvent("open-event", { detail: ev }))
            }
            className={`
                relative w-full overflow-hidden group text-left
                border border-brand-gold/25 bg-black/30
                ${extraClass || "aspect-[3/4] md:aspect-square"}
            `}
        >
            {/* IMAGE */}
            <Image
                src={ev.main_image}
                alt={ev.title}
                fill
                className="object-cover transition-transform duration-[3500ms] ease-out group-hover:scale-110"
            />

            {/* DARKEN LOWER AREA FOR READABILITY */}
            <div className="
                absolute inset-0
                bg-gradient-to-t from-black/85 via-black/40 to-transparent
            " />

            {/* SOFT VIGNETTE */}
            <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />

            {/* BLUR BEHIND TEXT ONLY */}
            <div className="
                absolute bottom-0 left-0 right-0
                h-32
                bg-black/40
                backdrop-blur-sm
                pointer-events-none
            " />

            {/* TEXT */}
            <div className="absolute bottom-6 left-6 pr-8 space-y-1">
                <p className="
                    text-[10px] uppercase tracking-[0.22em]
                    text-brand-gold/80
                    drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]
                ">
                    Jard’or Exclusive
                </p>

                <h4 className="
                    text-xl font-medium text-brand-cream
                    drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]
                ">
                    {ev.title}
                </h4>

                <p className="
                    text-[13px] text-brand-cream/90 leading-snug max-w-[85%]
                    drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]
                ">
                    {ev.short_description}
                </p>
            </div>
        </motion.button>
    );

    /* ========= Layout Logic (1,2,3,>3 items) ========= */
    const renderEventsLayout = () => {
        const count = events.length;

        // 1 EVENT — full width, cinematic
        if (count === 1) {
            return (
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    className="grid grid-cols-1"
                >
                    {renderEventCard(events[0], 0, "aspect-[5/2]")}
                </motion.div>
            );
        }

        // 2 EVENTS — two columns
        if (count === 2) {
            return (
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {events.map((ev, i) => renderEventCard(ev, i))}
                </motion.div>
            );
        }

        // 3 EVENTS
        if (count === 3) {
            return (
                <>
                    {/* TOP full-width */}
                    <motion.div initial="initial" whileInView="animate" className="mb-6">
                        {renderEventCard(events[0], 0, "aspect-[5/2]")}
                    </motion.div>

                    {/* BOTTOM 2 columns */}
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        {renderEventCard(events[1], 1)}
                        {renderEventCard(events[2], 2)}
                    </motion.div>
                </>
            );
        }

        // DEFAULT — normal grid of 3 columns
        return (
            <motion.div
                initial="initial"
                whileInView="animate"
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
                {events.map((ev, i) => renderEventCard(ev, i))}
            </motion.div>
        );
    };

    return (
        <>
            {/* ----------------------- SECTION ----------------------- */}
            <section
                id="experience"
                className="relative py-20 md:py-28 bg-black text-brand-cream overflow-hidden"
            >
                <ParallaxBackground />

                {/* HEADER */}
                <div className="relative z-10 mb-14 max-w-4xl mx-auto">
                    <SectionHeader
                        eyebrow={header.eyebrow}
                        title={header.title}
                        subtitle={header.subtitle}
                        align="center"
                        className="px-6"
                    />

                    {header.content && (
                        <div
                            className="prose prose-invert text-center text-brand-cream/70 text-sm md:text-base mt-4 max-w-2xl mx-auto
                                    prose-p:my-2 prose-strong:text-brand-gold prose-a:text-brand-gold"
                            dangerouslySetInnerHTML={{ __html: header.content }}
                        />
                    )}
                </div>

                {/* GRID EVENTS (DYNAMIC LAYOUT) */}
                <div className="relative z-10 mt-10 max-w-7xl mx-auto px-6 md:px-10">
                    {renderEventsLayout()}

                    {/* CTA */}
                    <motion.div
                        variants={fadeUp}
                        initial="initial"
                        whileInView="animate"
                        transition={{ duration: 0.9 }}
                        className="mt-12 flex justify-center"
                    >
                        <ButtonGold href="#reservation">
                            {header.button_text}
                        </ButtonGold>
                    </motion.div>
                </div>
            </section>

            {/* ----------------------- MODAL ----------------------- */}
            <AnimatePresence>
                {openEvent && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[80] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
                        onClick={() => setOpenEvent(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 40 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ duration: 0.35, ease: 'easeOut' }}
                            className="
                    relative w-full max-w-7xl
                    bg-brand-green border border-brand-gold/30
                    p-6 md:p-10
                    grid grid-cols-1 lg:grid-cols-2 gap-12
                "
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* CLOSE BUTTON — FIXED & CLEAN */}
                            <button
                                onClick={() => setOpenEvent(null)}
                                className="
                        absolute top-4 right-4
                        h-10 w-10 flex items-center justify-center
                        rounded-full border border-brand-gold/50
                        bg-black/60 text-brand-gold
                        hover:bg-brand-gold hover:text-black
                        transition
                    "
                            >
                                ✕
                            </button>

                            {/* ---------------- LEFT COLUMN ---------------- */}
                            <div className="flex flex-col space-y-6">

                                {/* TITLE + DESCRIPTION */}
                                <div>
                                    <h3 className="text-3xl md:text-4xl text-brand-cream mb-3">
                                        {openEvent.title}
                                    </h3>
                                    <p className="text-brand-cream/75 text-sm md:text-lg max-w-xl leading-relaxed">
                                        {openEvent.description || openEvent.short_description}
                                    </p>
                                </div>

                                {/* IMAGE SLIDER — SQUARE RATIO */}
                                {(() => {
                                    const imgs = getAllImages(openEvent);
                                    return (
                                        <div className="relative w-full aspect-square bg-black/70 overflow-hidden">

                                            {/* IMAGE */}
                                            <Image
                                                src={imgs[slide]}
                                                alt={openEvent.title}
                                                fill
                                                className="object-cover transition-all duration-500"
                                            />

                                            {/* NAVIGATION ARROWS — FLOAT AT BOTTOM CENTER */}
                                            <div className="absolute bottom-4 inset-x-0 flex items-center justify-center gap-8">

                                                <button
                                                    onClick={prevSlide}
                                                    className="
                        h-12 w-12 rounded-full
                        bg-black/40
                        border border-brand-gold/40
                        text-brand-gold flex items-center justify-center
                        hover:bg-brand-gold hover:text-black
                        transition
                    "
                                                >
                                                    <ChevronLeft size={26} strokeWidth={1.3} />
                                                </button>

                                                <button
                                                    onClick={nextSlide}
                                                    className="
                        h-12 w-12 rounded-full
                        bg-black/40
                        border border-brand-gold/40
                        text-brand-gold flex items-center justify-center
                        hover:bg-brand-gold hover:text-black
                        transition
                    "
                                                >
                                                    <ChevronRight size={26} strokeWidth={1.3} />
                                                </button>

                                            </div>
                                        </div>
                                    );
                                })()}

                                {/* DOTS */}
                                <div className="flex justify-center gap-3 mt-2">
                                    {getAllImages(openEvent).map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setSlide(i)}
                                            className={`
                                    h-3 w-3 rounded-full transition-all
                                    ${i === slide
                                                    ? "bg-brand-gold scale-110"
                                                    : "bg-brand-cream/40"
                                                }
                                `}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* ---------------- RIGHT COLUMN — FORM ---------------- */}
                            <div className="text-brand-cream space-y-7">

                                <h3 className="uppercase text-sm tracking-[0.28em] text-brand-gold">
                                    Event Reservation
                                </h3>

                                <p className="text-xl font-light text-brand-cream">
                                    Reserve for <span className="text-brand-gold">{openEvent.title}</span>
                                </p>

                                <form className="space-y-6 text-brand-cream">

                                    {/* Name */}
                                    <div>
                                        <label className="block mb-1 text-sm tracking-wider text-brand-cream/70">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            className="
                    w-full bg-transparent border border-brand-gold/40 px-4 py-3 text-brand-cream
                    focus:border-brand-gold focus:ring-0 focus:outline-none
                "
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label className="block mb-1 text-sm tracking-wider text-brand-cream/70">
                                            Phone
                                        </label>
                                        <input
                                            type="text"
                                            className="
                    w-full bg-transparent border border-brand-gold/40 px-4 py-3 text-brand-cream
                    focus:border-brand-gold focus:ring-0 focus:outline-none
                "
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block mb-1 text-sm tracking-wider text-brand-cream/70">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="
                    w-full bg-transparent border border-brand-gold/40 px-4 py-3 text-brand-cream
                    focus:border-brand-gold focus:ring-0 focus:outline-none
                "
                                        />
                                    </div>

                                    {/* DATE + TIME */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block mb-1 text-sm text-brand-cream/70">
                                                Date
                                            </label>
                                            <input
                                                type="date"
                                                className="
                        w-full bg-transparent border border-brand-gold/40 px-4 py-3 text-brand-cream
                        focus:border-brand-gold focus:ring-0 focus:outline-none
                    "
                                            />
                                        </div>

                                        <div>
                                            <label className="block mb-1 text-sm text-brand-cream/70">
                                                Time
                                            </label>
                                            <input
                                                type="time"
                                                className="
                        w-full bg-transparent border border-brand-gold/40 px-4 py-3 text-brand-cream
                        focus:border-brand-gold focus:ring-0 focus:outline-none
                    "
                                            />
                                        </div>
                                    </div>

                                    {/* Guests */}
                                    <div>
                                        <label className="block mb-1 text-sm text-brand-cream/70">
                                            Number of Guests
                                        </label>
                                        <input
                                            type="number"
                                            className="
                    w-full bg-transparent border border-brand-gold/40 px-4 py-3 text-brand-cream
                    focus:border-brand-gold focus:ring-0 focus:outline-none
                "
                                        />
                                    </div>

                                    {/* Notes */}
                                    <div>
                                        <label className="block mb-1 text-sm text-brand-cream/70">
                                            Notes / Requests
                                        </label>
                                        <textarea
                                            className="
                    w-full bg-transparent border border-brand-gold/40 px-4 py-3 text-brand-cream
                    h-28 resize-none
                    focus:border-brand-gold focus:ring-0 focus:outline-none
                "
                                        ></textarea>
                                    </div>

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        className="
                w-full px-6 py-3 border border-brand-gold
                text-brand-gold tracking-widest text-sm
                hover:bg-brand-gold hover:text-black
                transition uppercase
            "
                                    >
                                        Submit Reservation
                                    </button>
                                </form>
                            </div>

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}