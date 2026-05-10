"use client";

import Link from "next/link";
import React from "react";

interface ButtonOutlineGoldProps {
    id?: string;
    href?: string;
    children: React.ReactNode;
    className?: string;
    target?: string;
    rel?: string;
    type?: "button" | "submit" | "reset";
    "aria-label"?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
}

export default function ButtonOutlineGold({
    id,
    href,
    children,
    className = "",
    target = "_self",
    rel,
    type = "button",
    "aria-label": ariaLabel,
    onClick,
}: ButtonOutlineGoldProps) {

    const baseClass = `
        border border-brand-gold/70 px-6 py-2
        text-[8px] md:text-[9px] uppercase tracking-[0.22em]
        text-brand-gold bg-black/25 backdrop-blur-[3px]
        transition-all duration-300 hover:bg-brand-gold/10
        hover:text-brand-cream hover:border-brand-gold/80
        text-center
    `;

    if (href && href.startsWith("/")) {
        return (
            <Link id={id} href={href} aria-label={ariaLabel}
                className={`${baseClass} ${className}`}
                onClick={onClick ? (e) => onClick(e) : undefined}
            >
                {children}
            </Link>
        );
    }

    if (href) {
        return (
            <a id={id} href={href} target={target} rel={rel}
                aria-label={ariaLabel} onClick={onClick}
                className={`${baseClass} ${className}`}
            >
                {children}
            </a>
        );
    }

    return (
        <button id={id} type={type} aria-label={ariaLabel}
            onClick={onClick} className={`${baseClass} ${className}`}
        >
            {children}
        </button>
    );
}
