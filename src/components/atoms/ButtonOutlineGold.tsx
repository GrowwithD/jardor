"use client";

import Link from "next/link";
import React from "react";

interface ButtonOutlineGoldProps {
    href?: string;
    children: React.ReactNode;
    className?: string;
    target?: string;
    rel?: string;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
}

export default function ButtonOutlineGold({
    href,
    children,
    className = "",
    target = "_self",
    rel,
    type = "button",
    onClick,
}: ButtonOutlineGoldProps) {
    const baseClass = `
    rounded-pill border border-brand-gold/70 px-6 py-2
    text-[8px] md:text-[9px] uppercase tracking-[0.22em]
    text-brand-gold bg-black/25 backdrop-blur-[3px]
    transition-all duration-300 hover:bg-brand-gold/10
    hover:text-brand-cream hover:border-brand-gold/80
    text-center
  `;

    // Next.js Link
    if (href && href.startsWith("/")) {
        return (
            <Link href={href} className={`${baseClass} ${className}`}>
                {children}
            </Link>
        );
    }

    // External Link
    if (href) {
        return (
            <a
                href={href}
                target={target}
                rel={rel}
                className={`${baseClass} ${className}`}
            >
                {children}
            </a>
        );
    }

    // Default → Button
    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseClass} ${className}`}
        >
            {children}
        </button>
    );
}