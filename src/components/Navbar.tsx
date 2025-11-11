"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

const navItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/about" },
    { label: "THE MENUS", href: "/menus" },
    { label: "GALLERY", href: "/gallery" },
    { label: "EVENTS", href: "/events" },
    { label: "RESERVATION", href: "/reservation" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const lastScrollYRef = useRef(0);

    // active index
    const activeIndex = navItems.findIndex((item) =>
        item.href === "/"
            ? pathname === "/"
            : pathname?.startsWith(item.href)
    );

    // simpan index sebelumnya untuk arah animasi
    const prevActiveIndexRef = useRef(activeIndex);
    const direction =
        activeIndex > prevActiveIndexRef.current ? 1 : activeIndex < prevActiveIndexRef.current ? -1 : 0;

    useEffect(() => {
        if (activeIndex !== -1) {
            prevActiveIndexRef.current = activeIndex;
        }
    }, [activeIndex]);

    // Tutup mobile menu saat route berubah
    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    // Hide / show on scroll
    useEffect(() => {
        if (typeof window === "undefined") return;

        const handleScroll = () => {
            const current = window.scrollY || 0;
            const last = lastScrollYRef.current;
            const diff = current - last;
            const threshold = 10;

            if (diff > threshold && current > 80) {
                setVisible(false);
            } else if (diff < -threshold) {
                setVisible(true);
            }

            lastScrollYRef.current = current;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const headerClass = `
    fixed top-6 inset-x-0 z-50 flex justify-center pointer-events-none
    transition-transform duration-500 ease-out
    ${visible ? "translate-y-0" : "-translate-y-[140%]"}
  `;

    return (
        <motion.header
            className={headerClass}
            initial={{ opacity: 0, y: -18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
            {/* DESKTOP */}
            <LayoutGroup>
                <motion.nav
                    className="
            hidden md:flex
            relative
            bg-brand-green/98
            text-[10px] tracking-[0.12em]
            px-8 lg:px-10 py-4
            rounded-full
            shadow-pill
            items-center gap-4 lg:gap-6
            pointer-events-auto
            border border-brand-gold/14
            backdrop-blur-md
          "
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                >
                    {navItems.map((item, index) => {
                        const isActive =
                            item.href === "/"
                                ? pathname === "/"
                                : pathname?.startsWith(item.href);

                        return (
                            <div
                                key={item.href}
                                className="relative flex items-center justify-center"
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="nav-active-pill"
                                        // arah datang berdasarkan perpindahan index
                                        initial={{
                                            opacity: 0,
                                            scale: 0.9,
                                            x: direction === 0 ? 0 : direction > 0 ? -18 : 18,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            scale: 1,
                                            x: 0,
                                            boxShadow: [
                                                "0 0 10px rgba(200,169,107,0.18)",
                                                "0 0 22px rgba(200,169,107,0.55)",
                                                "0 0 14px rgba(200,169,107,0.26)",
                                            ],
                                        }}
                                        transition={{
                                            x: {
                                                type: "spring",
                                                stiffness: 420,
                                                damping: 32,
                                                mass: 0.6,
                                            },
                                            opacity: { duration: 0.18 },
                                            scale: { duration: 0.24 },
                                            boxShadow: { duration: 0.8, ease: "easeOut" },
                                        }}
                                        className="
                      absolute inset-0
                      rounded-full
                      bg-black/86
                      border border-brand-gold/70
                    "
                                    />
                                )}

                                <Link
                                    href={item.href}
                                    className={`
                    relative px-4 py-2 rounded-full font-sans
                    transition-all duration-260
                    ${isActive
                                            ? "text-brand-gold tracking-[0.18em]"
                                            : "text-brand-cream/68 tracking-[0.14em] hover:text-brand-cream"
                                        }
                  `}
                                >
                                    <span className="relative z-10">
                                        {item.label}
                                    </span>

                                    {isActive && (
                                        <motion.span
                                            className="
                        absolute left-1/2 -bottom-[3px]
                        w-2 h-2
                        bg-brand-gold rounded-full
                        -translate-x-1/2
                      "
                                            initial={{ opacity: 0, scale: 0.4, y: 3 }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.4, y: 3 }}
                                            transition={{ duration: 0.22 }}
                                        />
                                    )}
                                </Link>
                            </div>
                        );
                    })}
                </motion.nav>
            </LayoutGroup>

            {/* MOBILE */}
            <div className="md:hidden flex justify-end w-full px-4 pointer-events-auto">
                <motion.div
                    className="
            flex items-center justify-between
            w-[78%] max-w-xs
            bg-brand-green/98
            px-4 py-3
            rounded-full
            shadow-pill
            border border-brand-gold/18
            backdrop-blur-md
            relative
          "
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    {/* Logo */}
                    <div className="flex flex-col leading-tight select-none">
                        <span className="text-[9px] uppercase tracking-[0.18em] text-brand-gold">
                            Jard&apos;or
                        </span>
                        <span className="text-[7px] tracking-[0.16em] text-brand-cream/60">
                            Restaurant
                        </span>
                    </div>

                    {/* Toggle */}
                    <motion.button
                        type="button"
                        aria-label="Toggle navigation"
                        onClick={() => setOpen((v) => !v)}
                        whileTap={{ scale: 0.9 }}
                        className={[
                            "flex items-center justify-center w-8 h-8 rounded-full border",
                            "transition-all duration-300 relative z-50 bg-black/20 backdrop-blur-sm",
                            open
                                ? "border-brand-gold text-brand-gold scale-110 shadow-[0_0_16px_rgba(200,169,107,0.45)]"
                                : "border-brand-cream/30 text-brand-cream hover:border-brand-gold hover:text-brand-gold hover:bg-white/5",
                        ].join(" ")}
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            {open ? (
                                <motion.svg
                                    key="x"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={1.5}
                                    initial={{ opacity: 0, rotate: -40, scale: 0.6 }}
                                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                    exit={{ opacity: 0, rotate: 40, scale: 0.6 }}
                                    transition={{ duration: 0.22 }}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </motion.svg>
                            ) : (
                                <motion.svg
                                    key="menu"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={1.5}
                                    initial={{ opacity: 0, y: -4 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 4 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </motion.svg>
                            )}
                        </AnimatePresence>
                    </motion.button>

                    {/* Dropdown */}
                    <AnimatePresence>
                        {open && (
                            <motion.div
                                key="dropdown"
                                initial={{ opacity: 0, y: -8, scale: 0.96 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -10, scale: 0.96 }}
                                transition={{ duration: 0.28 }}
                                className="
                  absolute right-0 top-[52px] w-full
                  bg-brand-green/98
                  rounded-3xl shadow-pill py-3 z-40
                  border border-brand-gold/22
                  backdrop-blur-md origin-top
                "
                            >
                                <nav className="flex flex-col">
                                    {navItems.map((item, index) => {
                                        const isActive =
                                            item.href === "/"
                                                ? pathname === "/"
                                                : pathname?.startsWith(item.href);

                                        return (
                                            <motion.div
                                                key={item.href}
                                                initial={{ opacity: 0, x: 12 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{
                                                    duration: 0.22,
                                                    delay: 0.04 * index,
                                                }}
                                            >
                                                <Link
                                                    href={item.href}
                                                    className={`
                            block px-5 py-2 text-[10px] uppercase tracking-[0.12em]
                            transition-all duration-300
                            ${isActive
                                                            ? "text-brand-gold bg-brand-green-soft/80 border-l-2 border-brand-gold shadow-[inset_2px_0_10px_rgba(200,169,107,0.18)]"
                                                            : "text-brand-cream/82 hover:text-brand-gold hover:bg-brand-green-soft/55"
                                                        }
                          `}
                                                >
                                                    {item.label}
                                                </Link>
                                            </motion.div>
                                        );
                                    })}
                                </nav>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Backdrop */}
                <AnimatePresence>
                    {open && (
                        <motion.div
                            key="backdrop"
                            className="fixed inset-0 z-30 bg-black/40 backdrop-blur-[2px]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            onClick={() => setOpen(false)}
                        />
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
}