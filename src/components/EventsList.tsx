// src/components/sections/EventsList.tsx
"use client";

import { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import BatikSectionLayout from "@/components/layouts/BatikSectionLayout";
import SectionHeader from "@/components/molecules/SectionHeader";
import UpcomingEventCard from "@/components/molecules/UpcomingEventCard";
import PastEventCard from "@/components/molecules/PastEventCard";
import { upcomingEventsData, pastEventsData } from "@/data/events";
import { ChevronLeft, ChevronRight } from "lucide-react";

type TabKey = "upcoming" | "past";

export default function EventsList() {
    const [activeTab, setActiveTab] = useState<TabKey>("upcoming");

    const totalUpcoming = upcomingEventsData.length;
    const hasUpcoming = totalUpcoming > 0;
    const hasPast = pastEventsData.length > 0;

    // ref untuk slider scroll biasa
    const sliderRef = useRef<HTMLDivElement | null>(null);

    // index slide buat prev/next + dots
    const [currentIndex, setCurrentIndex] = useState(0);

    // === AOS INIT ===
    useEffect(() => {
        AOS.init({
            duration: 900,
            easing: "ease-out-cubic",
            once: true,
        });
    }, []);

    // fungsi scroll ke index tertentu (approx)
    const scrollToIndex = (index: number) => {
        if (!sliderRef.current) return;

        const container = sliderRef.current;
        const firstChild = container.firstElementChild as HTMLElement | null;
        const cardWidth = firstChild?.clientWidth ?? container.clientWidth;

        // kalau mau akurat banget bisa tambahin gap, tapi ini sudah cukup halus
        container.scrollTo({
            left: index * cardWidth,
            behavior: "smooth",
        });
    };

    // prev / next
    const goNext = () => {
        if (!hasUpcoming) return;
        const nextIndex = (currentIndex + 1) % totalUpcoming;
        setCurrentIndex(nextIndex);
        scrollToIndex(nextIndex);
    };

    const goPrev = () => {
        if (!hasUpcoming) return;
        const prevIndex = (currentIndex - 1 + totalUpcoming) % totalUpcoming;
        setCurrentIndex(prevIndex);
        scrollToIndex(prevIndex);
    };

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
            border border-brand-gold/30
            px-1.5 py-1.5
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
                  flex-1 px-4 py-1.5
                  text-sm
                  uppercase tracking-[0.22em]
                  transition-all duration-300
                  ${isActive
                                        ? "bg-brand-gold text-black"
                                        : "bg-transparent text-brand-cream/70 hover:text-brand-gold/90"
                                    }
                `}
                            >
                                {label}
                            </button>
                        );
                    })}
                </div>

                {/* =================== UPCOMING (SCROLL SLIDER SIMPLE) =================== */}
                {activeTab === "upcoming" && (
                    <section className="space-y-8">
                        <p className="text-md text-brand-cream/70 max-w-xl mx-auto text-center">
                            Limited dates with focused seating — early reservations are
                            recommended for champagne evenings, collaborations, and festive
                            services.
                        </p>

                        {!hasUpcoming ? (
                            <div
                                className="
                   border border-brand-gold/16
                  px-4 py-5 md:px-6 md:py-6
                  text-center
                  text-base text-brand-cream/75
                "
                            >
                                No upcoming events at the moment — new collaborations and
                                journeys will be announced soon.
                            </div>
                        ) : (
                            <>
                                <div className="relative">
                                    {/* Arrows (desktop, agak dijauhin) */}
                                    <button
                                        type="button"
                                        onClick={goPrev}
                                        className="
                      hidden md:flex
                      absolute -left-20 top-1/2 -translate-y-1/2
                      h-10 w-10
                      items-center justify-center
                      border border-brand-gold/40

                      text-brand-gold/90
                      hover:bg-brand-gold hover:text-black
                      transition-all duration-200 ease-out
                      z-10
                    "
                                        aria-label="Previous event"
                                    >
                                        <ChevronLeft size={20} strokeWidth={1.5} />
                                    </button>

                                    <button
                                        type="button"
                                        onClick={goNext}
                                        className="
                      hidden md:flex
                      absolute -right-20 top-1/2 -translate-y-1/2
                      h-10 w-10
                      items-center justify-center

                      border border-brand-gold/40

                      text-brand-gold/90
                      hover:bg-brand-gold hover:text-black
                      transition-all duration-200 ease-out
                      z-10
                    "
                                        aria-label="Next event"
                                    >
                                        <ChevronRight size={20} strokeWidth={1.5} />
                                    </button>

                                    {/* Slider scroll biasa – 1.5 card visible */}
                                    <div
                                        ref={sliderRef}
                                        className="
                      flex gap-5
                      overflow-x-auto
                      scroll-smooth
                      no-scrollbar
                      pb-1
                    "
                                    >
                                        {upcomingEventsData.map((event, index) => (
                                            <div
                                                key={`${event.id}-${index}`}
                                                className="
                          min-w-[88%]
                          md:min-w-[66%]
                          lg:min-w-[60%]
                        "
                                            >
                                                <UpcomingEventCard event={event} index={index} />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Pagination dots + mobile prev/next */}
                                <div className="flex flex-col items-center gap-3 pt-2">
                                    {/* mobile prev/next */}
                                    <div className="flex md:hidden items-center justify-center gap-4">
                                        <button
                                            type="button"
                                            onClick={goPrev}
                                            className="
                        px-3 py-1.5
                        text-[9px] uppercase tracking-[0.18em]
                        border border-brand-gold/40
                        text-brand-cream/80
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
                        px-3 py-1.5
                        text-[9px] uppercase tracking-[0.18em]
                        border border-brand-gold/40
                        text-brand-cream/80
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
                                                    setCurrentIndex(i);
                                                    scrollToIndex(i);
                                                }}
                                                className={`
                          h-0.5  transition-all duration-300
                          ${i === currentIndex
                                                        ? "w-32 bg-brand-gold"
                                                        : "w-5 bg-brand-cream/35 hover:bg-brand-gold/60"
                                                    }
                        `}
                                                aria-label={`Go to event ${i + 1}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}
                    </section>
                )}

                {/* =================== PAST (GRID) =================== */}
                {activeTab === "past" && (
                    <section className="space-y-6">
                        <p className="text-md text-brand-cream/60 max-w-xl mx-auto text-center">
                            A quiet archive of evenings we’ve hosted — reference points for
                            future collaborations and returning guests.
                        </p>

                        {!hasPast ? (
                            <div
                                className="
                   border border-white/8
                  px-4 py-4 md:px-5 md:py-5
                  text-md text-brand-cream/75
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