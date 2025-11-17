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
  onClick?: () => void;
}

/**
 * UNIVERSAL BUTTON
 * - Jika ada href → otomatis pakai Link
 * - Jika tidak ada href → otomatis jadi <button>
 */
export default function ButtonGold({
    href,
    children,
    className = "",
    target = '_self',
    rel,
    type = "button",
    onClick,
}: ButtonGoldProps) {
    const baseClass = `
    text-center  bg-brand-gold px-8 py-2
    text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.22em]
    text-black transition-all duration-300 border border-transparent
    hover:bg-brand-gold/10 hover:text-brand-gold hover:backdrop-blur-[3px]
    hover:border-brand-gold/70
  `;

    // CASE 1 — pakai <Link> (Next.js)
    if (href && href.startsWith("/")) {
        return (
            <Link href={href} className={`${baseClass} ${className}`}>
                {children}
            </Link>
        );
    }

    // CASE 2 — pakai <a> (external link)
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

    // CASE 3 — tidak ada href → <button>
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