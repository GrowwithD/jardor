"use client";

import React from "react";
import { motion } from "framer-motion";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right";
  duration?: number;
};

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
  as: Tag = "h2",
  animation = "fade-up",
  duration = 0.8,
}: SectionHeaderProps) {
  const alignment =
    align === "center"
      ? "text-center items-center"
      : "text-left items-start";

  const subtitleWidth =
    align === "center" ? "max-w-xl mx-auto" : "max-w-md";

  // ==== ANIMATION PRESETS ====
  const variants: Record<string, any> = {
    "fade-up": { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } },
    "fade-down": { initial: { opacity: 0, y: -24 }, animate: { opacity: 1, y: 0 } },
    "fade-left": { initial: { opacity: 0, x: -24 }, animate: { opacity: 1, x: 0 } },
    "fade-right": { initial: { opacity: 0, x: 24 }, animate: { opacity: 1, x: 0 } },
  };

  return (
    <motion.div
      variants={variants[animation]}
      initial="initial"
      whileInView="animate"
      viewport={{ once: false, amount: 0.35 }}
      transition={{ duration, ease: "easeOut" }}
      className={`flex flex-col gap-3 px-6 ${alignment} ${className}`}
    >
      {eyebrow && <p className="text-eyebrow">{eyebrow}</p>}

      <Tag className="section-title mt-2">{title}</Tag>

      {subtitle && (
        <p className={`section-subtitle ${subtitleWidth}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}