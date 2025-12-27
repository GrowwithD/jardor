"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ButtonGold from "@/components/atoms/ButtonGold";
import ButtonOutlineGold from "@/components/atoms/ButtonOutlineGold";

const STORAGE_KEY = "jardor_nye_2025_dismissed";

export default function NYEPopup() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const dismissed = window.localStorage.getItem(STORAGE_KEY);
        if (dismissed === "1") return;

        const now = new Date();
        const end = new Date("2026-01-05T00:00:00+08:00");
        if (now > end) return;

        const t = setTimeout(() => setOpen(true), 800);
        return () => clearTimeout(t);
    }, []);

    const closePopup = () => {
        setOpen(false);
        if (typeof window !== "undefined") {
            window.localStorage.setItem(STORAGE_KEY, "1");
        }
    };

    if (!open) return null;

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={closePopup}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.96 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        onClick={(e) => e.stopPropagation()}
                        className="
              relative w-full max-w-2xl mx-4
              border border-brand-gold
              bg-brand-green
              shadow-[0_20px_50px_rgba(0,0,0,0.75)]
              overflow-hidden
            "
                    >
                        {/* CLOSE */}
                        <button
                            onClick={closePopup}
                            className="
                absolute right-4 top-4
                h-9 w-9 rounded-full
                border border-brand-gold
                bg-black/70 text-brand-gold
                hover:bg-brand-gold hover:text-black
                transition
              "
                        >
                            ✕
                        </button>

                        {/* CONTENT */}
                        <div className="relative px-6 pt-9 pb-6 md:px-9 md:pt-12 md:pb-9 text-center space-y-6">
                            <p className="text-[11px] md:text-xs uppercase tracking-[0.3em] text-brand-gold/80">
                                New Year&apos;s Eve at Jard’or
                            </p>

                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide text-brand-cream">
                                NYE Dinner & Wine Pairing
                            </h2>

                            <p className="text-sm md:text-base text-brand-cream/80 max-w-md mx-auto leading-relaxed">
                                Celebrate New Year’s Eve with a French inspired tasting menu,
                                champagne, and intimate ambience in Nusa Dua.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs md:text-sm text-brand-cream/80 mt-2">
                                <div>
                                    <p className="uppercase tracking-[0.18em] text-brand-gold/80 mb-1">
                                        Date
                                    </p>
                                    <p>31 December 2025</p>
                                </div>

                                <div>
                                    <p className="uppercase tracking-[0.18em] text-brand-gold/80 mb-1">
                                        Time
                                    </p>
                                    <p>18:00 & 21:00 Seating</p>
                                </div>

                                <div>
                                    <p className="uppercase tracking-[0.18em] text-brand-gold/80 mb-1">
                                        Experience
                                    </p>
                                    <p>Tasting Menu & Champagne Toast</p>
                                </div>
                            </div>

                            {/* CTA BUTTONS */}
                            <div className="flex flex-col md:flex-row gap-3 justify-center pt-4">
                                <ButtonGold href="#reservation" onClick={closePopup}>
                                    Reserve NYE Dinner
                                </ButtonGold>

                                <ButtonOutlineGold
                                    href="https://wa.me/628133630509"
                                    target="_blank"
                                    onClick={closePopup}
                                >
                                    WhatsApp NYE Inquiry
                                </ButtonOutlineGold>
                            </div>

                            <p className="text-[11px] md:text-xs text-brand-cream/60">
                                Limited Seats Available — Advance Booking Recommended
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}