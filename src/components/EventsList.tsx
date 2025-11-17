"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type EventItem = {
    id: string;
    title: string;
    date: string; // YYYY-MM-DD
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

// parse date pakai UTC supaya konsisten di server & client
const parseDate = (value: string) => new Date(`${value}T00:00:00Z`);

// sort sekali di level module
const sorted = [...events].sort(
    (a, b) => parseDate(a.date).getTime() - parseDate(b.date).getTime()
);

// "today" di-normalize ke UTC (tanpa jam)
const now = new Date();
const today = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
);

const upcomingEvents = sorted.filter(
    (e) => parseDate(e.date).getTime() >= today.getTime()
);

const pastEvents = sorted
    .filter((e) => parseDate(e.date).getTime() < today.getTime())
    .sort(
        (a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime()
    );

// Framer Motion variants (diketik biar TS nggak komplain)
const gridVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut", // pakai literal yang valid
            when: "beforeChildren",
            staggerChildren: 0.06,
        },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

type EventSectionProps = {
    title: string;
    items: EventItem[];
    accent: "gold" | "muted";
    emptyLabel: string;
};

function EventSection({
    title,
    items,
    accent,
    emptyLabel,
}: EventSectionProps) {
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
                        className={`h-px w-8 ${isGold ? "bg-brand-gold/80" : "bg-brand-cream/22"
                            }`}
                    />
                    <span
                        className={`h-[3px] w-[3px] rounded-full ${isGold ? "bg-brand-gold/95" : "bg-brand-cream/40"
                            }`}
                    />
                    <span
                        className={`h-px flex-1 ${isGold
                            ? "bg-linear-to-r from-brand-gold/40 to-transparent"
                            : "bg-linear-to-r from-brand-cream/16 to-transparent"
                            }`}
                    />
                </div>
            </div>

            {/* Empty state */}
            {!items.length && (
                <div className="rounded-2xl bg-black/82 border border-white/6 px-4 py-4 md:px-5 md:py-5 text-[9px] md:text-[10px] text-brand-cream/70 shadow-[0_14px_40px_rgba(0,0,0,0.9)]">
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
                            whileHover={{ y: -4, scale: 1.02 }}
                            whileTap={{ scale: 0.99 }}
                            className="
                group relative overflow-hidden rounded-2xl
                bg-linear-to-b from-black/90 via-[#07110A]/96 to-black
                border border-brand-gold/12
                shadow-[0_18px_60px_rgba(0,0,0,0.95)]
                transition-all duration-500
                hover:border-brand-gold/55
                hover:shadow-[0_0_26px_rgba(200,169,107,0.26)]
              "
                        >
                            {/* Image */}
                            <div className="relative w-full h-44 md:h-52 overflow-hidden">
                                <Image
                                    src={event.image}
                                    alt={event.title}
                                    fill
                                    sizes="(min-width: 768px) 50vw, 100vw"
                                    className="object-cover transition-transform duration-1100 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/88 via-black/35 to-transparent" />
                            </div>

                            {/* Content */}
                            <div
                                className="
                  absolute inset-x-0 bottom-0
                  px-4 pb-4 pt-6 md:px-5 md:pb-5 md:pt-7
                  bg-linear-to-t from-black/92 via-black/40 to-transparent
                "
                            >
                                <p className="text-[8px] uppercase tracking-[0.2em] text-brand-gold/80 mb-1">
                                    {parseDate(event.date).toLocaleDateString("en-GB", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric",
                                        timeZone: "UTC",
                                    })}
                                </p>

                                <h3 className="font-serif text-[13px] md:text-[14px] text-brand-cream tracking-[0.05em] leading-snug group-hover:text-brand-gold transition-colors">
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
                                    <span className="text-[10px] -translate-y-px">↗</span>
                                </Link>
                            </div>

                            {/* Hover frame */}
                            <div className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent group-hover:border-brand-gold/18 group-hover:shadow-[0_0_35px_rgba(200,169,107,0.18)] transition-all duration-500" />
                        </motion.article>
                    ))}
                </motion.div>
            )}
        </div>
    );
}

export default function EventsList() {
    return (
        <section className="relative bg-gradient-to-b from-[#0D0F11] via-[#0A0C0E] to-black py-16">

            <div className="absolute inset-0">
                <div
                    className="
                            absolute inset-0
                            [transform:scaleX(-1)]
                        "
                >
                    <div
                        className="
                                absolute inset-0
                                bg-[url('/images/batik1.png')]
                                bg-repeat
                                bg-[length:420px_auto]  /* ukuran tile biar rapih */
                                opacity-5
                            "
                    />
                </div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-5 space-y-14">
                <EventSection
                    title="Upcoming Experiences"
                    items={upcomingEvents}
                    accent="gold"
                    emptyLabel="No upcoming events at the moment — new collaborations and journeys will be announced soon."
                />

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