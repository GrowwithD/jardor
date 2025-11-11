// src/components/molecules/HighlightStrip.tsx
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type Props = {
    index: number;
    label: string;
    subtitle: string;
    align?: "left" | "right";
};

export function HighlightStrip({
    index,
    label,
    subtitle,
    align = "left",
}: Props) {
    const isRight = align === "right";

    return (
        <div
            className={cn(
                "flex flex-col md:flex-row gap-3 items-center md:items-end text-center",
                isRight
                    ? "md:justify-end md:text-right"
                    : "md:justify-start md:text-left"
            )}
        >
            <div
                className={cn(
                    "flex flex-col gap-1 items-center",
                    isRight
                        ? "md:items-end md:text-right"
                        : "md:items-start md:text-left"
                )}
            >
                <div className="flex items-center gap-2 text-[0.5rem] md:text-[0.55rem] tracking-[0.22em] uppercase text-brand-gold/60">
                    <span className="w-4 h-px bg-brand-gold/30" />
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span className="hidden xs:inline">Highlight</span>
                </div>

                <motion.h3
                    className="font-serif text-lg md:text-2xl text-brand-gold uppercase flex items-center gap-2"
                    variants={{
                        rest: {
                            letterSpacing: "0.16em",
                            y: 0,
                            textShadow: "0 0 0 rgba(200,169,107,0)",
                        },
                        hover: {
                            letterSpacing: "0.22em",
                            y: -2,
                            textShadow: "0 0 10px rgba(200,169,107,0.28)",
                        },
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 180,
                        damping: 20,
                        mass: 0.7,
                    }}
                >
                    {isRight && (
                        <motion.span
                            className="hidden md:block h-px bg-brand-gold/30"
                            variants={{
                                rest: { width: 24, opacity: 0.7 },
                                hover: { width: 40, opacity: 1 },
                            }}
                        />
                    )}

                    {label}

                    {!isRight && (
                        <motion.span
                            className="hidden md:block h-px bg-brand-gold/30"
                            variants={{
                                rest: { width: 24, opacity: 0.7 },
                                hover: { width: 40, opacity: 1 },
                            }}
                        />
                    )}
                </motion.h3>

                <p className="text-xs md:text-sm text-brand-cream/82 max-w-3xl leading-relaxed font-light">
                    {subtitle}
                </p>
            </div>
        </div>
    );
}