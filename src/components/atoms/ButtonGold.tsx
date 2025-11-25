"use client";

import Link from "next/link";
import React from "react";

interface ButtonGoldProps {
    href?: string;
    children: React.ReactNode;
    className?: string;
    target?: string;
    rel?: string;
    type?: "button" | "submit" | "reset";
    onClick?: (e?: React.MouseEvent) => void;
}

export default function ButtonGold({
    href,
    children,
    className = "",
    target = "_self",
    rel,
    type = "button",
    onClick,
}: ButtonGoldProps) {
    const baseClass = `
        text-center bg-brand-gold px-8 py-2
        text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.22em]
        text-black transition-all duration-300 border border-transparent
        hover:bg-brand-gold/10 hover:text-brand-gold hover:backdrop-blur-[3px]
        hover:border-brand-gold/70
    `;

    /** =========================================================
     * SMOOTH SCROLL HANDLER (#anchor)
     * ======================================================= **/
    const handleSmoothScroll = (e: React.MouseEvent) => {
        if (!href) {
            if (onClick) onClick(e);
            return;
        }

        // Kalau bukan anchor (#section)
        if (!href.startsWith("#")) {
            if (onClick) onClick(e);
            return;
        }

        e.preventDefault();
        const targetId = href.replace("#", "");
        const el = document.getElementById(targetId);

        if (el) {
            el.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }

        if (onClick) onClick(e);
    };

    /** =========================================================
     * CASE 1 — Smooth scroll (#section)
     * ======================================================= **/
    if (href && href.startsWith("#")) {
        return (
            <a
                href={href}
                onClick={handleSmoothScroll}
                className={`${baseClass} ${className}`}
            >
                {children}
            </a>
        );
    }

    /** =========================================================
     * CASE 2 — Internal Next.js Route (/menus)
     * ======================================================= **/
    if (href && href.startsWith("/")) {
        return (
            <Link
                href={href}
                className={`${baseClass} ${className}`}
                onClick={onClick}
            >
                {children}
            </Link>
        );
    }

    /** =========================================================
     * CASE 3 — External link (http, https, etc)
     * ======================================================= **/
    if (href) {
        return (
            <a
                href={href}
                target={target}
                rel={rel}
                className={`${baseClass} ${className}`}
                onClick={onClick}
            >
                {children}
            </a>
        );
    }

    /** =========================================================
     * CASE 4 — Pure Button
     * ======================================================= **/
    return (
        <button
            type={type}
            onClick={handleSmoothScroll}
            className={`${baseClass} ${className}`}
        >
            {children}
        </button>
    );
}