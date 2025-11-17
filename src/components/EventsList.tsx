// src/components/sections/EventsList.tsx
"use client";

import { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, AnimatePresence, type Variants } from "framer-motion";

import BatikSectionLayout from "@/components/layouts/BatikSectionLayout";
import SectionHeader from "@/components/molecules/SectionHeader";
import UpcomingEventCard from "@/components/molecules/UpcomingEventCard";
import PastEventCard from "@/components/molecules/PastEventCard";
import { upcomingEventsData, pastEventsData } from "@/data/events";
import { ChevronLeft, ChevronRight } from "lucide-react";

type TabKey = "upcoming" | "past";

const sliderVariants: Variants = {
    enter: (direction: number) => ({
        x: direction === 1 ? 80 : -80,
        opacity: 0,
        scale: 0.99,
    }),
    center: {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
    exit: (direction: number) => ({
        x: direction === 1 ? -80 : 80,
        opacity: 0,
        scale: 0.99,
        transition: {
            duration: 0.6,
            ease: "easeInOut",
        },
    }),
};

export default function EventsList() {
    const [activeTab, setActiveTab] = useState<TabKey>("upcoming");

    // === Slider state for UPCOMING ===
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState<1 | -1>(1);
    const autoplayRef = useRef<NodeJS.Timeout | null>(null);

    const totalUpcoming = upcomingEventsData.length;
    const hasUpcoming = totalUpcoming > 0;
    const hasPast = pastEventsData.length > 0;

    // === AOS INIT ===
    useEffect(() => {
        AOS.init({
            duration: 900,
            easing: "ease-out-cubic",
            once: true,
        });
    }, []);

    // === AUTOPLAY for Upcoming Slider ===
    useEffect(() => {
        if (activeTab !== "upcoming" || totalUpcoming <= 1) return;

        if (autoplayRef.current) clearInterval(autoplayRef.current);

        autoplayRef.current = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % totalUpcoming);
        }, 6000);

        return () => {
            if (autoplayRef.current) clearInterval(autoplayRef.current);
        };
    }, [activeTab, totalUpcoming]);

    const goNext = () => {
        if (!hasUpcoming) return;
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % totalUpcoming);
    };

    const goPrev = () => {
        if (!hasUpcoming) return;
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + totalUpcoming) % totalUpcoming);
    };

    const currentEvent = hasUpcoming
        ? upcomingEventsData[currentIndex]
        : undefined;

    return (
        <BatikSectionLayout>
            {/* HEADER */}
            <div className="max-w-5xl mx-auto">
                <SectionHeader
                    eyebrow="Events & Experiences"
                    title="Quiet Evenings, Collaborations & Cellar Journeys"
                    subtitle="Seasonal dinners, cellar-led evenings, and collaborations that extend Jard’or beyond everyday service."
                    align="center"
                />
            </div>

            <div className="max-w-6xl mx-auto px-5 mt-10 space-y-10">
                {/* =================== TABS =================== */}
                <div
                    className="
            mx-auto max-w-md
            rounded-full
            border border-brand-gold/30
            bg-black/70
            px-1.5 py-1.5
            shadow-[0_16px_50px_rgba(0,0,0,0.95)]
            flex items-center gap-1
          "
                >
                    {(["upcoming", "past"] as TabKey[]).map((tab) => {
                        const isActive = activeTab === tab;
                        const label =
                            tab === "upcoming" ? "Upcoming Experiences" : "Past Moments";

                        return (
                            <button
                                key={tab}
                                type="button"
                                onClick={() => setActiveTab(tab)}
                                className={`
                  flex-1 rounded-full px-4 py-1.5
                  text-[9px] md:text-[10px]
                  uppercase tracking-[0.22em]
                  transition-all duration-300
                  ${isActive
                                        ? "bg-brand-gold text-black shadow-[0_0_26px_rgba(200,169,107,0.35)]"
                                        : "bg-transparent text-brand-cream/70 hover:text-brand-gold/90"
                                    }
                `}
                            >
                                {label}
                            </button>
                        );
                    })}
                </div>

                {/* =================== UPCOMING (FRAMER SLIDER) =================== */}
                {activeTab === "upcoming" && (
                    <section className="space-y-8">
                        <p className="text-[10px] md:text-[11px] text-brand-cream/70 max-w-xl mx-auto text-center">
                            Limited dates with focused seating — early reservations are
                            recommended for champagne evenings, collaborations, and festive
                            services.
                        </p>

                        {!hasUpcoming ? (
                            <div
                                className="
                  rounded-2xl border border-brand-gold/16 bg-black/80
                  px-4 py-5 md:px-6 md:py-6
                  text-center
                  text-[10px] md:text-[11px] text-brand-cream/75
                  shadow-[0_16px_50px_rgba(0,0,0,0.9)]
                "
                            >
                                No upcoming events at the moment — new collaborations and
                                journeys will be announced soon.
                            </div>
                        ) : (
                            <div className="relative flex w-full justify-center">
                                {/* LEFT ARROW */}
                                <button
                                    type="button"
                                    onClick={goPrev}
                                    className="
        hidden md:flex
        absolute -left-18 top-1/2 -translate-y-1/2
        h-14 w-14
        items-center justify-center
        rounded-full
        border border-brand-gold/40
        bg-black/30
        text-brand-gold/90
        shadow-[0_0_28px_rgba(200,169,107,0.15)]
        backdrop-blur-md

        hover:bg-brand-gold hover:text-black
        hover:shadow-[0_0_38px_rgba(200,169,107,0.45)]
        transition-all duration-300 ease-out
    "
                                    aria-label="Previous event"
                                >
                                    <ChevronLeft size={26} strokeWidth={1.5} />
                                </button>



                                {/* SLIDE */}
                                <div className="w-full max-w-4xl lg:max-w-7xl">
                                    <AnimatePresence
                                        mode="wait"
                                        custom={direction}
                                    >
                                        {currentEvent && (
                                            <motion.div
                                                key={currentEvent.id}
                                                variants={sliderVariants}
                                                initial="enter"
                                                animate="center"
                                                exit="exit"
                                                custom={direction}
                                            >
                                                <UpcomingEventCard
                                                    event={currentEvent}
                                                    index={currentIndex}
                                                />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                   {/* RIGHT ARROW */}
                                <button
                                    type="button"
                                    onClick={goNext}
                                    className="
        hidden md:flex
        absolute -right-18 top-1/2 -translate-y-1/2
        h-14 w-14
        items-center justify-center
        rounded-full
        border border-brand-gold/40
        bg-black/30
        text-brand-gold/90
        shadow-[0_0_28px_rgba(200,169,107,0.15)]
        backdrop-blur-md

        hover:bg-brand-gold hover:text-black
        hover:shadow-[0_0_38px_rgba(200,169,107,0.45)]
        transition-all duration-300 ease-out
    "
                                    aria-label="Next event"
                                >
                                    <ChevronRight size={26} strokeWidth={1.5} />
                                </button>
                            </div>
                        )}

                        {/* Dots + mobile prev/next */}
                        {hasUpcoming && (
                            <div className="flex flex-col items-center gap-3 pt-2">
                                {/* mobile prev/next */}
                                <div className="flex md:hidden items-center gap-4">
                                    <button
                                        type="button"
                                        onClick={goPrev}
                                        className="
                      px-3 py-1.5 rounded-full
                      text-[9px] uppercase tracking-[0.18em]
                      border border-brand-gold/40
                      bg-black/70 text-brand-cream/80
                      hover:bg-brand-gold hover:text-black
                      transition-all
                    "
                                    >
                                        Prev
                                    </button>
                                    <button
                                        type="button"
                                        onClick={goNext}
                                        className="
                      px-3 py-1.5 rounded-full
                      text-[9px] uppercase tracking-[0.18em]
                      border border-brand-gold/40
                      bg-black/70 text-brand-cream/80
                      hover:bg-brand-gold hover:text-black
                      transition-all
                    "
                                    >
                                        Next
                                    </button>
                                </div>

                                {/* dots */}
                                <div className="flex items-center justify-center gap-2">
                                    {upcomingEventsData.map((event, i) => (
                                        <button
                                            key={`dot-${event.id}-${i}`}
                                            type="button"
                                            onClick={() => {
                                                setDirection(i > currentIndex ? 1 : -1);
                                                setCurrentIndex(i);
                                            }}
                                            className={`
                        h-1.5 rounded-full transition-all duration-300
                        ${i === currentIndex
                                                    ? "w-5 bg-brand-gold"
                                                    : "w-2 bg-brand-cream/35 hover:bg-brand-gold/60"
                                                }
                      `}
                                            aria-label={`Go to event ${i + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                    </section>
                )}

                {/* =================== PAST (GRID) =================== */}
                {activeTab === "past" && (
                    <section className="space-y-6">
                        <p className="text-[10px] md:text-[11px] text-brand-cream/60 max-w-xl mx-auto text-center">
                            A quiet archive of evenings we’ve hosted — reference points for
                            future collaborations and returning guests.
                        </p>

                        {!hasPast ? (
                            <div
                                className="
                  rounded-2xl border border-white/8 bg-black/80
                  px-4 py-4 md:px-5 md:py-5
                  text-[10px] md:text-[11px] text-brand-cream/75
                  shadow-[0_16px_45px_rgba(0,0,0,0.85)]
                "
                            >
                                Our past event stories will appear here once we’ve hosted them.
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                {pastEventsData.map((event, index) => (
                                    <PastEventCard key={event.id} event={event} index={index} />
                                ))}
                            </div>
                        )}
                    </section>
                )}
            </div>
        </BatikSectionLayout>
    );
}