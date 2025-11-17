"use client";

import React from "react";

type BatikSectionLayoutProps = {
    children: React.ReactNode;
    className?: string; // kalau mau override padding dsb nanti
};

export default function BatikSectionLayout({
    children,
    className,
}: BatikSectionLayoutProps) {
    return (
        <section
            className={`relative bg-brand-green py-20 md:py-28 overflow-hidden ${className ?? ""
                }`}
        >
            {/* CONTENT WRAPPER */}
            <div className="relative">{children}</div>
        </section>
    );
}