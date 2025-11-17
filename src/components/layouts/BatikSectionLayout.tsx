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
            className={`relative bg-gradient-to-b from-[#0D0F11] via-[#0A0C0E] to-black py-20 md:py-28 overflow-hidden ${className ?? ""
                }`}
        >
            {/* BATIK BACKDROP */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="
            absolute inset-0
            bg-[url('/images/batik3.png')]
            bg-repeat
            bg-[length:420px_auto]
            opacity-[0.035]
            mask-image:linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%);
            [transform:scaleX(-1)]
          "
                />
            </div>

            {/* CONTENT WRAPPER */}
            <div className="relative">{children}</div>
        </section>
    );
}