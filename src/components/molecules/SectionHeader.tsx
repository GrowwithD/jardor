"use client";

import React from "react";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;

  // optional override
  aos?: string;
  aosDuration?: number;
};

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  aos = "fade-down",        // 👈 default: turun dari atas
  aosDuration = 900,        // smooth & elegan
}: SectionHeaderProps) {
  const alignment =
    align === "center"
      ? "text-center items-center"
      : "text-left items-start";

  const subtitleWidth = align === "center" ? "max-w-xl mx-auto" : "max-w-md";

  return (
    <div
      className={`flex flex-col gap-3 px-6 ${alignment} ${className ?? ""}`}
      data-aos={aos}
      data-aos-duration={aosDuration}
      data-aos-easing="ease-out-cubic"
    >
      {eyebrow && <p className="text-eyebrow">{eyebrow}</p>}

      <h2 className="section-title mt-2">{title}</h2>

      {subtitle && (
        <p className={`section-subtitle ${subtitleWidth}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}