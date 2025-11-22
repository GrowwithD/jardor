"use client";

import { useEffect, useRef, useState } from "react";
import { motion, LayoutGroup } from "framer-motion";
import NavLogo from "@/components/atoms/NavLogo";
import NavLinkItem from "@/components/atoms/NavLinkItem";

const navItems = [
    { label: "RESTAURANT", target: "restaurant" },
    { label: "LE GARDEN", target: "garden" },
    { label: "MENU", target: "menus" },
    { label: "WINE", target: "wine" },
    { label: "EXPERIENCE", target: "experience" },
    { label: "GALLERY", target: "gallery" },
    { label: "RESERVATION", target: "reservation" },
];

export default function DesktopNavbar() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [activeIndex, setActiveIndex] = useState<number>(-1);

    const prevIndexRef = useRef(-1);
    const [scrolled, setScrolled] = useState(false);

    /* =============================
       SCROLL LISTENER FOR SCROLL-SPY
    ============================== */
    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 80);

            const offsets = navItems.map((item) => {
                const el = document.getElementById(item.target);
                return el ? el.offsetTop - 120 : 0; // navbar height offset
            });

            const scrollPos = window.scrollY;

            let current = -1;
            for (let i = 0; i < offsets.length; i++) {
                const nextOffset = offsets[i + 1] ?? Infinity;
                if (scrollPos >= offsets[i] && scrollPos < nextOffset) {
                    current = i;
                    break;
                }
            }

            setActiveIndex(current);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const effectiveIndex = hoveredIndex ?? activeIndex;

    const direction =
        effectiveIndex > prevIndexRef.current
            ? 1
            : effectiveIndex < prevIndexRef.current
                ? -1
                : 0;

    useEffect(() => {
        prevIndexRef.current = effectiveIndex;
    }, [effectiveIndex]);

    /* =============================
       SCROLL TO SECTION
    ============================== */
    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;

        window.scrollTo({
            top: el.offsetTop,
            behavior: "smooth",
        });

        const i = navItems.findIndex((x) => x.target === id);
        if (i !== -1) setActiveIndex(i);
    };

    /* =============================
       SCROLL TO HOMEPAGE (NO ACTIVE)
    ============================== */
    const scrollToHomepage = () => {
        const el = document.getElementById("homepage");
        if (!el) return;

        window.scrollTo({
            top: el.offsetTop,
            behavior: "smooth",
        });

        setActiveIndex(-1);
    };

    return (
        <LayoutGroup>
            <motion.nav
                className={`
                    fixed left-0 right-0 top-0 z-50 hidden md:flex
                    justify-center pointer-events-auto
                    transition-all duration-300
                    ${scrolled
                        ? "py-4 bg-black/40 backdrop-blur-xl border-b border-brand-gold/20"
                        : "py-6 bg-transparent"
                    }
                `}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
            >
                {/* NAV INNER */}
                <div
                    className={`
                        flex items-center gap-0 px-8 lg:px-10 transition-all duration-300
                        ${scrolled
                            ? "border-none rounded-none"
                            : "py-4 border border-brand-gold/50 backdrop-blur-md"
                        }
                    `}
                >

                    {/* LOGO */}
                    <div
                        className="px-3 flex items-center justify-center cursor-pointer"
                        onClick={scrollToHomepage}
                    >
                        <NavLogo
                            heightClass="h-36 -my-40"
                            className="select-none pointer-events-auto"
                        />
                    </div>

                    {/* NAV ITEMS */}
                    {navItems.map((item, index) => {
                        const isHighlighted =
                            index === (hoveredIndex ?? activeIndex);

                        return (
                            <button
                                key={item.label}
                                onClick={() => scrollToSection(item.target)}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className="px-3"
                            >
                                <NavLinkItem
                                    href="#"
                                    label={item.label}
                                    isHighlighted={isHighlighted}
                                    isCurrent={index === activeIndex}
                                    direction={direction}
                                />
                            </button>
                        );
                    })}
                </div>
            </motion.nav>
        </LayoutGroup>
    );
}