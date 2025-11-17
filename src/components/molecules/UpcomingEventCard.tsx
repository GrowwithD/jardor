"use client";

import Image from "next/image";
import Link from "next/link";
import type { EventItem } from "@/types/events";

// Kalau di EventItem sudah ada thumbnails?: string[] maka ini aman
type UpcomingEvent = EventItem & {
    thumbnails?: string[];
};

type UpcomingEventCardProps = {
    event: UpcomingEvent;
    index: number;
};

function formatDate(date: string) {
    return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        timeZone: "UTC",
    });
}

export default function UpcomingEventCard({ event, index }: UpcomingEventCardProps) {
    const thumbs = event.thumbnails?.slice(0, 3) ?? [];

    return (
        <article
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-easing="ease-out-cubic"
            data-aos-delay={index * 140}
            className="
        group relative
        rounded-lg
        overflow-hidden
        border border-brand-gold/25
        bg-black/90
        shadow-[0_22px_70px_rgba(0,0,0,0.95)]
        hover:border-brand-gold/50
        hover:shadow-[0_0_45px_rgba(200,169,107,0.25)]
        transition-all duration-500
      "
        >
            {/* MAIN IMAGE FULL */}
            <div className="relative w-full h-72 md:h-80 overflow-hidden">
                <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="
            object-cover
            transition-transform duration-[1200ms]
            group-hover:scale-110
          "
                />

                {/* Gradient overlay untuk text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

                {/* TEXT OVERLAY */}
                <div className="absolute bottom-0 px-6 pb-6 space-y-2">
                    <p className="text-[9px] md:text-[10px] uppercase tracking-[0.22em] text-brand-gold/90">
                        {formatDate(event.date)}
                    </p>

                    <h3
                        className="
              font-serif
              text-[15px] md:text-[18px]
              text-brand-cream
              leading-snug
              tracking-[0.04em]
              group-hover:text-brand-gold
              transition-colors
            "
                    >
                        {event.title}
                    </h3>

                    <Link
                        href={`/events/${event.id}`}
                        className="
              inline-flex items-center gap-1
              pt-1 text-[9px] uppercase tracking-[0.18em]
              text-brand-gold/90
              hover:text-brand-gold
              transition-colors
            "
                    >
                        <span>View Details</span>
                        <span className="text-[10px] -translate-y-px">↗</span>
                    </Link>
                </div>
            </div>

            {/* THUMBNAIL STRIP */}
            {thumbs.length > 0 && (
                <div className="px-4 pb-4 pt-3 md:px-5 md:pt-4">
                    <div className="grid grid-cols-3 gap-2">
                        {thumbs.map((thumb, i) => (
                            <div
                                key={`${event.id}-thumb-${i}`}
                                className="relative aspect-[4/3] rounded-lg overflow-hidden bg-black/40"
                            >
                                <Image
                                    src={thumb}
                                    alt={`${event.title} thumbnail ${i + 1}`}
                                    fill
                                    className="
                    object-cover
                    transition-transform duration-[900ms]
                    group-hover:scale-105
                  "
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </article>
    );
}