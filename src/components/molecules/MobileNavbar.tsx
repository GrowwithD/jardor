"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import { navItems } from "@/data/nav";
import NavLogo from "@/components/atoms/NavLogo";
import MobileNavItem from "@/components/atoms/MobileNavItem";

export default function MobileNavbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    // Lock body scroll when sheet open
    useEffect(() => {
        if (!open) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [open]);

    // Close sheet when route changes
    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    return (
        <div className="md:hidden flex justify-end w-full px-4 pointer-events-auto">
            <motion.div
                className="flex items-center justify-between w-full bg-brand-green px-4 py-3 shadow-pill border border-brand-gold/18 backdrop-blur-md relative"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                {/* Logo */}
                <NavLogo
                    heightClass="h-36 -my-40"
                    className="select-none pointer-events-auto"
                />

                {/* Toggle */}
                <motion.button
                    type="button"
                    aria-label="Toggle navigation"
                    onClick={() => setOpen((v) => !v)}
                    whileTap={{ scale: 0.94 }}
                    className={[
                        "flex items-center justify-center w-9 h-9 rounded-full border transition-all relative z-[80] bg-black/20 backdrop-blur-sm",
                        open
                            ? "opacity-0 pointer-events-none"
                            : "border-brand-cream/30 text-brand-cream hover:border-brand-gold hover:text-brand-gold",
                    ].join(" ")}
                >
                    <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </motion.svg>
                </motion.button>

                <AnimatePresence>
                    {open && (
                        <>
                            {/* Overlay */}
                            <motion.div
                                className="fixed inset-0 z-[60] bg-brand-green"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                onClick={() => setOpen(false)}
                            />

                            {/* Sheet */}
                            <motion.div
                                className="fixed inset-x-0 top-0 z-[70] origin-top"
                                initial={{ opacity: 0, y: -20, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -20, scale: 0.985 }}
                                transition={{ duration: 0.28, ease: "easeOut" }}
                            >
                                <div className="mx-3 mt-[max(12px,env(safe-area-inset-top))]  overflow-hidden border border-brand-gold/25 bg-brand-green backdrop-blur-2xl pointer-events-auto flex flex-col">
                                    {/* Header */}
                                    <div className="px-5 pt-5 pb-4 border-b border-brand-gold/15 flex items-center justify-between">
                                        <NavLogo heightClass="h-16" />
                                        <button
                                            onClick={() => setOpen(false)}
                                            className="w-9 h-9 rounded-full border border-brand-gold/50 text-brand-gold bg-black/40 flex items-center justify-center"
                                            aria-label="Close menu"
                                        >
                                            X
                                        </button>
                                    </div>

                                    {/* Nav list */}
                                    <div className="max-h-[78vh] overflow-y-auto">
                                        <nav className="px-4 py-6">
                                            {navItems.map((item, i) => {
                                                const active =
                                                    item.href === "/"
                                                        ? pathname === "/"
                                                        : pathname?.startsWith(item.href);

                                                return (
                                                    <MobileNavItem
                                                        key={item.href}
                                                        href={item.href}
                                                        label={item.label}
                                                        active={!!active}
                                                        index={i}
                                                        onClick={() => setOpen(false)}
                                                    />
                                                );
                                            })}
                                        </nav>
                                    </div>

                                    <div className="h-[calc(env(safe-area-inset-bottom)+8px)]" />
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}