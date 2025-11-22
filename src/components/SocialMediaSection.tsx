"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const socials = [
    { icon: "IG", label: "Instagram", href: "https://instagram.com/jardorbali" },
    { icon: "FB", label: "Facebook", href: "https://facebook.com/jardor" },
    { icon: "WA", label: "WhatsApp", href: "https://wa.me/6281200000000" },
];

const instagramFeed = [
    "/images/DSC04919-HDR.jpg",
    "/images/DSC04930-HDR.jpg",
    "/images/DSC04933-HDR.jpg",
    "/images/DSC00301.jpg",
    "/images/DSC00342.jpg",
    "/images/DSC00222.jpg",
];

export default function SocialMediaSection() {
    return (
        <section
            id="social"
            className="
                relative pt-20 md:pt-28
                bg-black text-brand-cream
                overflow-hidden
            "
        >
            <div className="mx-auto flex flex-col items-center gap-10">

                {/* ========= SECTION HEADER ========= */}
                <div className="text-center space-y-3">
                    <p className="text-[10px] tracking-[0.28em] uppercase text-brand-gold/70">
                        Social Moments
                    </p>

                    <h2 className="font-serif text-3xl md:text-4xl text-brand-cream tracking-wide">
                        Follow Us on Instagram
                    </h2>

                    {/* Account Name */}
                    <a
                        href="https://instagram.com/jardorbali"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            inline-block mt-2
                            text-brand-gold/90 hover:text-brand-gold
                            transition-colors text-sm md:text-base
                        "
                    >
                        <span className="font-semibold text-brand-gold">JARD'OR Restaurant</span>{" "}
                        (@jardorbali) · Badung
                    </a>

                    <p className="text-brand-cream/70 text-sm md:text-base">
                        A glimpse of our evenings, dishes, wines, and quiet details.
                    </p>
                </div>

                {/* ========= INSTAGRAM GRID ========= */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 w-full">
                    {instagramFeed.map((src, i) => (
                        <motion.a
                            key={i}
                            href="https://instagram.com/jardorbali"
                            target="_blank"
                            rel="noopener noreferrer"

                            transition={{ duration: 0.4 }}
                            className="
                                relative aspect-square overflow-hidden group
                                border border-brand-gold/20 bg-black/40
                                flex items-stretch
                            "
                        >
                            <Image
                                src={src}
                                alt="Instagram Feed"
                                fill
                                className="
                                    object-cover
                                    transition-transform duration-[2500ms]
                                    group-hover:scale-110
                                "
                            />

                            {/* Overlay */}
                            <div
                                className="
                                    absolute inset-0 bg-black/30 opacity-0
                                    group-hover:opacity-40 transition-opacity
                                "
                            />

                            {/* IG Icon */}
                            <div
                                className="
                                    absolute bottom-3 right-3
                                    h-7 w-7 flex items-center justify-center
                                    bg-black/60 border border-brand-gold/30
                                    text-brand-gold/90 text-xs rounded-full
                                    opacity-0 group-hover:opacity-100
                                    transition-all
                                "
                            >
                                IG
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}