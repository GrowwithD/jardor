"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const primaryLinks = [
    { label: "Home", href: "/" },
    { label: "The Menus", href: "/menus" },
    { label: "Events", href: "/events" },
    { label: "Gallery", href: "/gallery" },
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Reservation", href: "/reservation" },
    { label: "Contact", href: "/contact" },
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

const currentYear = new Date().getFullYear();

export default function Footer() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <footer className="relative text-[9px] md:text-[10px] text-brand-cream/75">
            {/* Background */}




            {/* Main bar */}
            <motion.div
                variants={fadeUp}
                initial="initial"
                animate={mounted ? "animate" : "initial"}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative mx-auto max-w-6xl px-4 py-12 md:py-11 flex flex-col gap-7 md:flex-row md:items-start md:justify-between"
            >
                {/* Left */}
                <div className="flex flex-col gap-3 max-w-md">
                    <div className="">
                        <Image
                            src="/images/logo.png"
                            alt="Jard’or — Logo"
                            width={88}
                            height={24}
                            priority
                            className="h-32 -my-10 -ml-4 w-auto object-contain"
                        />
                    </div>

                    <p className="text-brand-cream/78 leading-relaxed">
                        A restrained French-inspired dining room where candlelight, service,
                        and cellar move in quiet harmony with the sea breeze of Nusa Dua.
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

                    {/* Socials */}
                    <div className="flex items-center justify-end gap-2">
                        {socials.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-6 w-6 items-center justify-center rounded-full border border-brand-gold/40 text-[7px] text-brand-gold/88 hover:bg-brand-gold hover:text-black transition-colors"
                                aria-label={s.label}
                            >
                                {s.short}
                            </a>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Bottom strip */}
            <div className="relative border-top border border-brand-gold/10 bg-brand-green">
                <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-1.5 text-[7px] md:text-[8px] text-brand-cream/50">
                    <p className="tracking-[0.18em] uppercase text-center md:text-left">
                        © {currentYear} Jard&apos;or Restaurant &nbsp;•&nbsp; All Rights
                        Reserved
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
                            className="hidden sm:flex h-6 w-6 items-center justify-center rounded-full border border-brand-gold/30 text-brand-gold/85 hover:bg-brand-gold hover:text-black transition-colors"
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