"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, LayoutGroup } from "framer-motion";
import NavLogo from "@/components/atoms/NavLogo";
import NavLinkItem from "@/components/atoms/NavLinkItem";

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

export default function DesktopNavbar() {
    const router = useRouter();
    const pathname = usePathname();
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [activeIndex, setActiveIndex] = useState<number>(-1);

    const [prevIndex, setPrevIndex] = useState(-1);
    const [scrolled, setScrolled] = useState(false);

    /* =============================
       SCROLL LISTENER FOR SCROLL-SPY
    ============================== */
    useEffect(() => {
        if (pathname !== "/") {
            const routeIndex = navItems.findIndex((item) => item.href === pathname);
            setActiveIndex(routeIndex);
            setScrolled(true);
            return;
        }

        const onScroll = () => {
            setScrolled(window.scrollY > 80);

            const offsets = navItems.map((item) => {
                if (!item.target) return Infinity;
                const el = document.getElementById(item.target);
                return el ? el.offsetTop - 120 : Infinity; // navbar height offset
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
    }, [pathname]);

    const effectiveIndex = hoveredIndex ?? activeIndex;

    const direction =
        effectiveIndex > prevIndex
            ? 1
            : effectiveIndex < prevIndex
                ? -1
                : 0;

    useEffect(() => {
        setPrevIndex(effectiveIndex);
    }, [effectiveIndex]);

    /* =============================
       SCROLL TO SECTION
    ============================== */
    const scrollToSection = (id?: string) => {
        if (!id) return;
        const el = document.getElementById(id);
        if (!el) {
            router.push(`/#${id}`);
            return;
        }

        window.scrollTo({
            top: el.offsetTop,
            behavior: "smooth",
        });

        const i = navItems.findIndex((x) => x.target === id);
        if (i !== -1) setActiveIndex(i);
    };

    const handleNavClick = (item: NavItem) => {
        if (item.href) {
            router.push(item.href);
            setActiveIndex(-1);
            return;
        }

        scrollToSection(item.target);
    };

    /* =============================
       SCROLL TO HOMEPAGE (NO ACTIVE)
    ============================== */
    const scrollToHomepage = () => {
        if (pathname !== "/") {
            router.push("/");
            return;
        }

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
                        ? "bg-black/40 backdrop-blur-xl border-b border-brand-gold/20"
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
                            : "border border-brand-gold/50 backdrop-blur-md"
                        }
                    `}
                >

                    {/* LOGO */}
                    <div
                        className="px-3 flex items-center justify-center cursor-pointer"
                        onClick={scrollToHomepage}
                    >
                        <NavLogo
                            heightClass="h-16"
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
                                onClick={() => handleNavClick(item)}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className="px-3"
                            >
                                <NavLinkItem
                                    href={item.href ?? `/#${item.target}`}
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
