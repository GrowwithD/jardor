"use client";

import Link from "next/link";
import Image from "next/image";
import type { EventItem } from "@/types/events";

type PastEventCardProps = {
    event: EventItem;
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

export default function PastEventCard({ event, index }: PastEventCardProps) {


    return (
        <article
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-easing="ease-out-cubic"
            data-aos-delay={index * 90}
            className="
                group relative overflow-hidden
                rounded-lg border border-brand-gold/20
                bg-black/90 shadow-[0_18px_60px_rgba(0,0,0,0.9)]
                hover:border-brand-gold/45
                transition-all duration-500
            "
        >
            {/* FULL HERO IMAGE */}
            <div className="relative w-full h-48 md:h-52 overflow-hidden">
                <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="
                        object-cover
                        transition-transform duration-[1100ms]
                        group-hover:scale-110
                    "
                />
                <div className="
                    absolute inset-0
                    bg-gradient-to-t from-black/95 via-black/35 to-transparent
                " />

                {/* TEXT OVERLAY */}
                <div className="absolute bottom-0 px-4 pb-4 space-y-1.5">
                    <p className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] text-brand-gold/90">
                        {formatDate(event.date)}
                    </p>

                    <h3 className="
                        text-[14px] md:text-[15px]
                        text-brand-cream leading-snug tracking-[0.04em]
                        group-hover:text-brand-gold transition-colors
                    ">
                        {event.title}
                    </h3>
                </div>
            </div>



            {/* CTA */}
            <div className="px-4 pb-4">
                <Link
                    href={`/events/${event.id}`}
                    className="
                        inline-flex items-center gap-1
                        text-[8px] uppercase tracking-[0.18em]
                        text-brand-gold/85
                        hover:text-brand-gold transition-colors
                    "
                >
                    <span>View Story</span>
                    <span className="text-[10px] -translate-y-px">↗</span>
                </Link>
            </div>
        </article>
    );
}