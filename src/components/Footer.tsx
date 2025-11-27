"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { InstagramIcon, FacebookIcon } from "lucide-react";
import NavLogo from "./atoms/NavLogo";

const fadeUp = {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
};

const currentYear = new Date().getFullYear();

export default function Footer() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    return (
        <footer className="relative text-base text-brand-cream/75">

            {/* MAIN */}
            <motion.div
                variants={fadeUp}
                initial="initial"
                animate={mounted ? "animate" : "initial"}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="
                    relative mx-auto max-w-6xl px-4 py-12 md:py-11
                    flex flex-col gap-7
                    md:flex-row md:items-start md:justify-between
                "
            >
                {/* LEFT */}
                <div className="flex flex-col gap-3 max-w-md">
                    <NavLogo heightClass="h-24" className="select-none pointer-events-auto" />

                    <p className="text-brand-cream/78 leading-relaxed">
                        A restrained French-inspired dining room where candlelight, service,
                        and cellar move in quiet harmony with the sea breeze of Nusa Dua.
                    </p>

                    {/* SOCIAL MEDIA ICONS */}
                    <div className="flex items-center gap-3">
                        <a
                            href="https://instagram.com/jardor"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-gold/80 hover:text-brand-gold transition-colors"
                            aria-label="Instagram"
                        >
                            <InstagramIcon size={18} strokeWidth={1.5} />
                        </a>

                        <a
                            href="https://www.facebook.com/people/Jardor-French-Restaurant/61581664444546"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-gold/80 hover:text-brand-gold transition-colors"
                            aria-label="Facebook"
                        >
                            <FacebookIcon size={18} strokeWidth={1.5} />
                        </a>
                    </div>
                </div>

                {/* MIDDLE */}
                <div className="flex flex-col gap-3 md:min-w-[190px]">
                    {/* Address */}
                    <div>
                        <p className="text-sm uppercase tracking-[0.22em] text-brand-cream/45">
                            Address
                        </p>
                        <p className="text-brand-cream/80">
                            Jl. Kw. Nusa Dua Resort, Benoa, Kec. Kuta Sel.,
                            <br />
                            Kabupaten Badung, Bali 80361
                        </p>
                    </div>

                    {/* Hours */}
                    <div>
                        <p className="text-sm uppercase tracking-[0.22em] text-brand-cream/45">
                            Hours
                        </p>
                        <p className="text-brand-cream/80">
                            Daily · 11.00 AM — 11.00 PM
                        </p>
                    </div>

                    {/* Reservation */}
                    <div>
                        <p className="text-sm uppercase tracking-[0.22em] text-brand-cream/45">
                            Reservations
                        </p>
                        <p className="text-brand-cream/80">
                            Tel:&nbsp;
                            <a
                                href="tel:+6281200000000"
                                className="text-brand-gold/90 hover:text-brand-gold transition-colors"
                            >
                                +62 813-3630-509
                            </a>
                            <br />
                            WA:&nbsp;
                            <a
                                href="https://wa.me/6281200000000"
                                className="text-brand-gold/90 hover:text-brand-gold transition-colors"
                            >
                                +62 813-3630-509
                            </a>
                        </p>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="flex flex-col gap-4 md:items-end text-right"></div>
            </motion.div>

            {/* BOTTOM BAR */}
            <div className="relative border-top border border-brand-gold/10 bg-brand-green">
                <div className="
                    mx-auto max-w-6xl px-4 py-4
                    flex flex-col md:flex-row items-center justify-between
                    gap-2 text-sm text-brand-cream/50
                ">

                    {/* COPYRIGHT */}
                    <p className="tracking-[0.18em] uppercase text-center md:text-left">
                        © {currentYear} Jard&apos;or Restaurant • All Rights Reserved
                    </p>

                    <div className="flex items-center gap-4">



                        {/* CREDIT */}
                        <span className="tracking-[0.16em] uppercase">
                            Website by{" "}
                            <a
                                href="https://www.linkedin.com/in/wayan-widiarsana-8a08431a4/?locale=en_US"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-brand-gold/85 hover:text-brand-gold transition-colors"
                            >
                                Widhy Arsana
                            </a>
                        </span>

                        {/* BACK TO TOP */}
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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