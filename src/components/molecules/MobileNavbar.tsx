"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import NavLogo from "@/components/atoms/NavLogo";

type NavItem = {
    label: string;
    target?: string;
    href?: string;
};

const navItems: NavItem[] = [
    { label: "RESTAURANT", target: "restaurant" },
    { label: "LE GARDEN", target: "garden" },
    { label: "MENU", href: "/menus" },
    { label: "WINE", target: "wine" },
    { label: "EXPERIENCE", target: "experience" },
    { label: "GALLERY", target: "gallery" },
    { label: "RESERVATION", href: "/reservation" },
];

export default function MobileNavbar() {
    const router = useRouter();
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    // Lock scroll
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
    }, [open]);

    const scrollToSection = (id?: string) => {
        if (!id) return;
        const el = document.getElementById(id);
        if (!el) {
            router.push(`/#${id}`);
            return;
        }
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const handleNavClick = (item: NavItem) => {
        setOpen(false);

        setTimeout(() => {
            if (item.href) {
                router.push(item.href);
                return;
            }

            scrollToSection(item.target);
        }, 260);
    };

    return (
        <div className="md:hidden fixed top-0 left-0 right-0 z-50 px-4 pointer-events-auto">

            {/* ================= TOP NAV BAR ================= */}
            <motion.div
                className="flex items-center justify-between w-full px-4 py-3
                border border-brand-gold/25 backdrop-blur-md bg-black/30"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
            >
                <NavLogo heightClass="h-12" className="select-none" />

                {/* Hamburger */}
                <motion.button
                    onClick={() => setOpen(true)}
                    whileTap={{ scale: 0.92 }}
                    className="
                        w-9 h-9 flex items-center justify-center
                        rounded-full border border-brand-cream/30
                        bg-black/20 backdrop-blur-sm text-brand-cream
                    "
                >
                    <svg xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </motion.button>
            </motion.div>

            {/* ==================== MOBILE MENU PANEL ==================== */}
            <AnimatePresence>
                {open && (
                    <>
                        {/* Dark backdrop */}
                        <motion.div
                            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[70]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />

                        {/* Panel */}
                        <motion.div
                            className="
                                fixed top-0 left-0 right-0 z-[80]
                                bg-brand-green/95 border-b border-brand-gold/20
                                backdrop-blur-xl
                            "
                            initial={{ y: -40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -40, opacity: 0 }}
                            transition={{ duration: 0.28, ease: "easeOut" }}
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between px-4 py-4 border-b border-brand-gold/20">
                                <NavLogo heightClass="h-12" />

                                <button
                                    onClick={() => setOpen(false)}
                                    className="
                                        w-9 h-9 flex items-center justify-center
                                        rounded-full border border-brand-gold/50
                                        text-brand-gold bg-black/40
                                    "
                                >
                                    ✕
                                </button>
                            </div>

                            {/* MENU ITEMS */}
                            <div className="py-6 px-6 space-y-1.5">
                                {navItems.map((item, i) => (
                                    <motion.button
                                        key={item.href ?? item.target ?? item.label}
                                        onClick={() => handleNavClick(item)}
                                        initial={{ opacity: 0, x: -14 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            delay: i * 0.06,
                                            duration: 0.3,
                                        }}
                                        className="
                                            block w-full text-left py-3
                                            text-sm tracking-[0.22em]
                                            border-b border-brand-gold/10
                                            transition-colors
                                            "
                                    >
                                        <span
                                            className={
                                                item.href === pathname
                                                    ? "text-brand-gold"
                                                    : "text-brand-cream hover:text-brand-gold"
                                            }
                                        >
                                            {item.label}
                                        </span>
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
