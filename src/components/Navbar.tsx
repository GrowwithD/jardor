"use client";

import Link from "next/link";
import Image from "next/image"; // ⬅️ tambahin ini
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

const navItems = [
    { label: "HOME", href: "/" },
    { label: "THE MENUS", href: "/menus" },
    { label: "EVENTS", href: "/events" },
    { label: "GALLERY", href: "/gallery" },
    { label: "ABOUT US", href: "/about" },
    { label: "BLOG", href: "/blog" },
    { label: "CAREERS", href: "/careers" },
    { label: "RESERVATION", href: "/reservation" },
    { label: "CONTACT", href: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const lastScrollYRef = useRef(0);

    const activeIndex = navItems.findIndex((i) =>
        i.href === "/" ? pathname === "/" : pathname?.startsWith(i.href)
    );
    const prevActiveIndexRef = useRef(activeIndex);
    const direction =
        activeIndex > prevActiveIndexRef.current
            ? 1
            : activeIndex < prevActiveIndexRef.current
                ? -1
                : 0;

    useEffect(() => {
        if (activeIndex !== -1) prevActiveIndexRef.current = activeIndex;
    }, [activeIndex]);

    useEffect(() => setOpen(false), [pathname]);

    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY || 0;
            const d = y - lastScrollYRef.current;
            if (d > 10 && y > 80) setVisible(false);
            else if (d < -10) setVisible(true);
            lastScrollYRef.current = y;
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        if (!open) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [open]);

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
            transition={{ duration: 0.5 }}
        >
            {/* DESKTOP (unchanged) */}
            <LayoutGroup>
                <motion.nav
                    className="hidden md:flex relative bg-brand-green/98 text-[10px] tracking-[0.12em] px-8 lg:px-10 py-4 rounded-full shadow-pill items-center gap-4 lg:gap-6 pointer-events-auto border border-brand-gold/14 backdrop-blur-md"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                >
                    {navItems.map((item) => {
                        const isActive =
                            item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
                        return (
                            <div key={item.href} className="relative flex items-center justify-center">
                                {isActive && (
                                    <motion.div
                                        layoutId="nav-active-pill"
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
                                            x: { type: "spring", stiffness: 420, damping: 32, mass: 0.6 },
                                            opacity: { duration: 0.18 },
                                            scale: { duration: 0.24 },
                                            boxShadow: { duration: 0.8 },
                                        }}
                                        className="absolute inset-0 rounded-full bg-black/86 border border-brand-gold/70"
                                    />
                                )}
                                <Link
                                    href={item.href}
                                    className={`relative px-4 py-2 rounded-full font-sans transition-all duration-200 ${isActive
                                            ? "text-brand-gold tracking-[0.18em]"
                                            : "text-brand-cream/68 tracking-[0.14em] hover:text-brand-cream"
                                        }`}
                                >
                                    <span className="relative z-10">{item.label}</span>
                                </Link>
                            </div>
                        );
                    })}
                </motion.nav>
            </LayoutGroup>

            {/* MOBILE */}
            <div className="md:hidden flex justify-end w-full px-4 pointer-events-auto">
                <motion.div
                    className="flex items-center justify-between w-[78%] max-w-xs bg-brand-green/98 px-4 py-3 rounded-full shadow-pill border border-brand-gold/18 backdrop-blur-md relative"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    {/* Logo image (replace text) */}
                    <Link href="/" className="flex items-center gap-2 select-none">
                        <Image
                            src="/images/logo.png"
                            alt="Jard’or — Logo"
                            width={88}
                            height={24}
                            priority
                            sizes="(max-width: 768px) 88px"
                            className="h-6 w-auto object-contain"
                        />
                    </Link>

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
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </motion.svg>
                    </motion.button>

                    <AnimatePresence>
                        {open && (
                            <>
                                <motion.div
                                    className="fixed inset-0 z-[60] bg-black/65 backdrop-blur-[4px]"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.25 }}
                                    onClick={() => setOpen(false)}
                                />

                                {/* Top sheet */}
                                <motion.div
                                    className="fixed inset-x-0 top-0 z-[70] origin-top"
                                    initial={{ opacity: 0, y: -20, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -20, scale: 0.985 }}
                                    transition={{ duration: 0.28, ease: "easeOut" }}
                                >
                                    <div className="mx-3 mt-[max(12px,env(safe-area-inset-top))] rounded-3xl overflow-hidden border border-brand-gold/25 bg-[#0A0D0B]/95 backdrop-blur-2xl shadow-[0_40px_160px_rgba(0,0,0,1)] pointer-events-auto flex flex-col">
                                        {/* Sheet header with logo image too */}
                                        <div className="px-5 pt-5 pb-4 border-b border-brand-gold/15 flex items-center justify-between">
                                            <Link href="/" onClick={() => setOpen(false)} className="flex items-center">
                                                <Image
                                                    src="/images/logo.png"
                                                    alt="Jard’or — Logo"
                                                    width={110}
                                                    height={28}
                                                    sizes="(max-width: 768px) 110px"
                                                    className="h-7 w-auto object-contain"
                                                />
                                            </Link>
                                            <button
                                                onClick={() => setOpen(false)}
                                                className="w-9 h-9 rounded-full border border-brand-gold/50 text-brand-gold bg-black/40 flex items-center justify-center"
                                                aria-label="Close menu"
                                            >
                                                ×
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
                                                        <motion.div
                                                            key={item.href}
                                                            initial={{ opacity: 0, x: 8 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ duration: 0.18, delay: 0.03 * i }}
                                                            className="py-2"
                                                        >
                                                            <Link
                                                                href={item.href}
                                                                className={[
                                                                    "block py-2",
                                                                    "text-[12px] uppercase tracking-[0.22em]",
                                                                    active
                                                                        ? "text-brand-gold"
                                                                        : "text-brand-cream/85 hover:text-brand-gold",
                                                                ].join(" ")}
                                                            >
                                                                <span className="flex items-center justify-between">
                                                                    {item.label}
                                                                    <span
                                                                        className={[
                                                                            "ml-3 h-px w-8 transition-all",
                                                                            active ? "bg-brand-gold/90" : "bg-transparent",
                                                                        ].join(" ")}
                                                                    />
                                                                </span>
                                                            </Link>
                                                            <div className="mt-2 h-px w-full bg-brand-gold/10" />
                                                        </motion.div>
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
        </motion.header>
    );
}