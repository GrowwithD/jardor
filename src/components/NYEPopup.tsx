"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const STORAGE_KEY = "jardor_nye_2025_last_closed";
const RESET_HOURS = 12;

export default function NYEPopup() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;

        // Stop completely after campaign end
        const now = new Date();
        const end = new Date("2026-01-05T00:00:00+08:00");
        if (now > end) return;

        // Check closing history
        const lastClosed = window.localStorage.getItem(STORAGE_KEY);

        if (lastClosed) {
            const last = new Date(parseInt(lastClosed));
            const diffHours =
                (now.getTime() - last.getTime()) / (1000 * 60 * 60);

            // if less than reset hours → do NOT show
            if (diffHours < RESET_HOURS) return;
        }

        // Show popup with delay
        const t = setTimeout(() => setOpen(true), 800);
        return () => clearTimeout(t);
    }, []);

    const closePopup = () => {
        setOpen(false);
        if (typeof window !== "undefined") {
            window.localStorage.setItem(
                STORAGE_KEY,
                Date.now().toString()
            );
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
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-lg mx-4 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.85)]"
                    >
                        {/* CLOSE BUTTON */}
                        <button
                            onClick={closePopup}
                            className="absolute right-3 top-3 z-20 h-9 w-9 rounded-full border border-brand-gold bg-black/80 text-brand-gold hover:bg-brand-gold hover:text-black transition"
                        >
                            ✕
                        </button>

                        {/* IMAGE */}
                        <Image
                            src="/images/popup.jpg"  // poster kamu
                            alt="Jardor New Year Countdown Party"
                            width={800}
                            height={1000}
                            className="w-full h-auto object-cover"
                            priority
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}