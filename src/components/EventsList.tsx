"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type EventItem = {
    id: string;
    title: string;
    date: string; // ISO / string
    image: string;
    excerpt: string;
};

const events: EventItem[] = [
    {
        id: "champagne-soiree",
        title: "Champagne Soirée: Grower Cuvées & Canapés",
        date: "2025-01-18",
        image: "/images/main-food-2.jpg",
        excerpt:
            "An evening with grower champagnes, seasonal hors d’oeuvres, and live jazz in our garden lounge.",
    },
    {
        id: "chef-collab",
        title: "Four Hands Dinner with Chef Invité",
        date: "2024-12-05",
        image: "/images/main-food-3.jpg",
        excerpt:
            "A collaboration dinner presenting two interpretations of modern French cuisine with Balinese nuance.",
    },
    {
        id: "christmas-eve",
        title: "Christmas Eve Tasting Journey",
        date: "2024-12-24",
        image: "/images/main-food.jpg",
        excerpt:
            "A festive multi-course journey, rare cellar pours, and candlelit ambience by the coastline.",
    },
    {
        id: "past-bordeaux",
        title: "Bordeaux Library Night",
        date: "2024-07-20",
        image: "/images/menu-hero.jpg",
        excerpt:
            "A retrospective Bordeaux tasting from our private library, paired with Jard’or signature plates.",
    },
];

const now = new Date();

// sort sebelum split biar rapi
const sorted = [...events].sort(
    (a, b) => +new Date(a.date) - +new Date(b.date)
);

const upcomingEvents = sorted.filter((e) => new Date(e.date) >= now);
const pastEvents = sorted
    .filter((e) => new Date(e.date) < now)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));

const gridVariants = {
    hidden: { opacity: 0, y: 18 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
            when: "beforeChildren",
            staggerChildren: 0.06,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

function EventSection({
    title,
    items,
    accent,
    emptyLabel,
}: {
    title: string;
    items: EventItem[];
    accent: "gold" | "muted";
    emptyLabel: string;
}) {
    const isGold = accent === "gold";

    return (
        <div className="space-y-6">
            {/* Heading */}
            <div className="space-y-1">
                <p
                    className={`text-[8px] uppercase tracking-[0.22em] ${isGold ? "text-brand-gold/90" : "text-brand-cream/55"
                        }`}
                >
                    {title}
                </p>
                <div className="flex items-center gap-2">
                    <span
                        className={`h-[1px] w-8 ${isGold ? "bg-brand-gold/80" : "bg-brand-cream/22"
                            }`}
                    />
                    <span
                        className={`h-[3px] w-[3px] rounded-full ${isGold ? "bg-brand-gold/95" : "bg-brand-cream/40"
                            }`}
                    />
                    <span
                        className={`h-[1px] flex-1 ${isGold
                                ? "bg-gradient-to-r from-brand-gold/40 to-transparent"
                                : "bg-gradient-to-r from-brand-cream/16 to-transparent"
                            }`}
                    />
                </div>
            </div>

            {/* Kalau tidak ada event */}
            {!items.length && (
                <div
                    className="
            rounded-2xl bg-black/82 border border-white/6
            px-4 py-4 md:px-5 md:py-5
            text-[9px] md:text-[10px] text-brand-cream/70
            shadow-[0_14px_40px_rgba(0,0,0,0.9)]
          "
                >
                    {emptyLabel}
                </div>
            )}

            {/* Grid events */}
            {!!items.length && (
                <motion.div
                    variants={gridVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {items.map((event) => (
                        <motion.article
                            key={event.id}
                            variants={cardVariants}
                            whileHover={{
                                y: -4,
                                scale: 1.02,
                            }}
                            whileTap={{ scale: 0.99 }}
                            className="
                group relative overflow-hidden rounded-2xl
                bg-gradient-to-b from-black/90 via-[#07110A]/96 to-black
                border border-brand-gold/12
                shadow-[0_18px_60px_rgba(0,0,0,0.95)]
                transition-all duration-500
                hover:border-brand-gold/55
                hover:shadow-[0_0_26px_rgba(200,169,107,0.26)]
              "
                        >
                            {/* Image full-width on top */}
                            <div className="relative w-full h-44 md:h-52 overflow-hidden">
                                <Image
                                    src={event.image}
                                    alt={event.title}
                                    fill
                                    className="
                    object-cover
                    transition-transform duration-[1.1s]
                    group-hover:scale-110
                  "
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/35 to-transparent" />
                            </div>

                            {/* Text overlay at bottom */}
                            <div className="absolute inset-x-0 bottom-0 px-4 pb-4 pt-6 md:px-5 md:pb-5 md:pt-7 bg-gradient-to-t from-black/92 via-black/40 to-transparent">
                                <p className="text-[8px] uppercase tracking-[0.2em] text-brand-gold/80 mb-1">
                                    {new Date(event.date).toLocaleDateString("en-GB", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric",
                                    })}
                                </p>
                                <h3
                                    className="
                    font-serif text-[13px] md:text-[14px]
                    text-brand-cream tracking-[0.05em] leading-snug
                    group-hover:text-brand-gold transition-colors
                  "
                                >
                                    {event.title}
                                </h3>
                                <p className="mt-1 text-[9px] md:text-[10px] text-brand-cream/78 leading-relaxed line-clamp-2">
                                    {event.excerpt}
                                </p>

                                <Link
                                    href={`/events/${event.id}`}
                                    className="
                    mt-3 inline-flex items-center gap-1
                    text-[8px] uppercase tracking-[0.18em]
                    text-brand-gold/88
                    group-hover:text-brand-gold
                    transition-colors
                  "
                                >
                                    <span>View Details</span>
                                    <span className="text-[10px] translate-y-[-1px]">↗</span>
                                </Link>
                            </div>

                            {/* Glow frame on hover */}
                            <div
                                className="
                  pointer-events-none absolute inset-0 rounded-2xl
                  border border-transparent
                  group-hover:border-brand-gold/18
                  group-hover:shadow-[0_0_35px_rgba(200,169,107,0.18)]
                  transition-all duration-500
                "
                            />
                        </motion.article>
                    ))}
                </motion.div>
            )}
        </div>
    );
}

export default function EventsList() {
    return (
        <section className="relative bg-gradient-to-b from-[#0B1C13] via-[#050806] to-[#020303] py-16">
            {/* Soft vignette, beda dari footer */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute top-[6%] left-1/2 -translate-x-1/2 w-[780px] h-[780px] bg-[radial-gradient(circle,rgba(200,169,107,0.06),transparent_75%)] blur-3xl opacity-35" />
                <div className="absolute bottom-0 w-full h-[140px] bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-5 space-y-14">
                {/* UPCOMING */}
                <EventSection
                    title="Upcoming Experiences"
                    items={upcomingEvents}
                    accent="gold"
                    emptyLabel="No upcoming events at the moment — new collaborations and journeys will be announced soon."
                />

                {/* PAST */}
                <div className="pt-8 border-t border-white/6">
                    <EventSection
                        title="Past Moments at Jard’or"
                        items={pastEvents}
                        accent="muted"
                        emptyLabel="Our past event stories will appear here once we’ve hosted them."
                    />
                </div>
            </div>
        </section>
    );
}