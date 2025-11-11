"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const primaryLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "The Menus", href: "/menus" },
    { label: "Gallery", href: "/gallery" },
    { label: "Events", href: "/events" },
    { label: "Reservation", href: "/reservation" },
];

const socials = [
    { label: "Instagram", short: "IG", href: "https://instagram.com" },
    { label: "Facebook", short: "FB", href: "https://facebook.com" },
    { label: "WhatsApp", short: "WA", href: "https://wa.me/6281200000000" },
];

const fadeUp = {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
};

export default function Footer() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    const year = new Date().getFullYear();

    return (
        <footer
            className="relative text-[9px] md:text-[10px] text-brand-cream/75"
        // kalau masih rewel, boleh aktifkan ini:
        // suppressHydrationWarning
        >
            {/* BG */}
            <div className="absolute inset-0 bg-brand-green" />
            <div className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(200,169,107,0.10),transparent_70%)] opacity-70" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,0,0,0.32),transparent_70%)]" />

            {/* MAIN BAR */}
            <motion.div
                variants={fadeUp}
                initial="initial"
                animate={mounted ? "animate" : "initial"}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="
          relative mx-auto max-w-6xl px-4
          py-12 md:py-11
          flex flex-col gap-7
          md:flex-row md:items-start md:justify-between
        "
            >
                {/* Left */}
                <div className="flex flex-col gap-3 max-w-md">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-gold/25 bg-black/10 backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                        <span className="font-serif text-[9px] tracking-[0.26em] uppercase text-brand-gold/90">
                            Jard&apos;or
                        </span>
                        <span className="hidden sm:inline text-[7px] tracking-[0.18em] uppercase text-brand-cream/55">
                            Nusa Dua — Bali
                        </span>
                    </div>
                    <h3 className="mt-1 font-serif text-sm md:text-base text-brand-gold tracking-[0.14em] uppercase">
                        Un Voyage de Goût
                    </h3>
                    <p className="text-brand-cream/78 leading-relaxed">
                        A restrained French-inspired dining room where candlelight, service, and
                        cellar move in quiet harmony with the sea breeze of Nusa Dua.
                    </p>
                </div>

                {/* Middle */}
                <div className="flex flex-col gap-3 md:min-w-[190px]">
                    <div>
                        <p className="text-[7px] uppercase tracking-[0.22em] text-brand-cream/45">
                            Address
                        </p>
                        <p className="text-brand-cream/80">
                            Jl. Example No. 1
                            <br />
                            Nusa Dua, Bali — Indonesia
                        </p>
                    </div>
                    <div>
                        <p className="text-[7px] uppercase tracking-[0.22em] text-brand-cream/45">
                            Hours
                        </p>
                        <p className="text-brand-cream/80">
                            Daily &middot; 11.00 AM — 11.00 PM
                        </p>
                    </div>
                    <div>
                        <p className="text-[7px] uppercase tracking-[0.22em] text-brand-cream/45">
                            Reservations
                        </p>
                        <p className="text-brand-cream/80">
                            Tel:&nbsp;
                            <a
                                href="tel:+6281200000000"
                                className="text-brand-gold/90 hover:text-brand-gold transition-colors"
                            >
                                +62 812-0000-0000
                            </a>
                            <br />
                            WA:&nbsp;
                            <a
                                href="https://wa.me/6281200000000"
                                className="text-brand-gold/90 hover:text-brand-gold transition-colors"
                            >
                                +62 812-0000-0000
                            </a>
                        </p>
                    </div>
                </div>

                {/* Right */}
                <div className="flex flex-col gap-4 md:items-end text-right">
                    {/* Nav */}
                    <div>
                        <p className="text-[7px] uppercase tracking-[0.22em] text-brand-cream/45">
                            Navigate
                        </p>
                        <div className="mt-1 grid grid-cols-2 gap-x-4 gap-y-2 md:flex md:flex-wrap md:gap-2.5 md:justify-end">
                            {primaryLinks.map((item) => (
                                <div
                                    key={item.href}
                                    className="inline-flex items-center gap-1.5 group"
                                >
                                    <span className="h-px w-2 bg-brand-gold/35 group-hover:w-3 group-hover:bg-brand-gold/70 transition-all" />
                                    <Link
                                        href={item.href}
                                        className="text-brand-cream/75 group-hover:text-brand-gold transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Socials – tanpa motion.a */}
                    <div className="flex items-center justify-end gap-2">
                        {socials.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                  flex h-6 w-6 items-center justify-center
                  rounded-full border border-brand-gold/40
                  text-[7px] text-brand-gold/88
                  hover:bg-brand-gold hover:text-black
                  transition-colors
                "
                                aria-label={s.label}
                            >
                                {s.short}
                            </a>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Bottom strip */}
            <div className="relative border-t border-brand-gold/10 bg-brand-green/98">
                <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-1.5 text-[7px] md:text-[8px] text-brand-cream/50">
                    <p className="tracking-[0.18em] uppercase text-center md:text-left">
                        © {year} Jard&apos;or Restaurant &nbsp;•&nbsp; All Rights Reserved
                    </p>
                    <div className="flex items-center gap-3">
                        <span className="tracking-[0.16em] uppercase">
                            Website by{" "}
                            <a
                                href="https://widhyarsana.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-brand-gold/85 hover:text-brand-gold transition-colors"
                            >
                                Widhy Arsana
                            </a>
                        </span>
                        <button
                            onClick={() =>
                                typeof window !== "undefined" &&
                                window.scrollTo({ top: 0, behavior: "smooth" })
                            }
                            className="
                hidden sm:flex h-6 w-6 items-center justify-center
                rounded-full border border-brand-gold/30
                text-brand-gold/85 hover:bg-brand-gold hover:text-black
                transition-colors
              "
                            aria-label="Back to top"
                        >
                            ↑
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}