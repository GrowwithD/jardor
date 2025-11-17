"use client";

import { useEffect, useRef, useState } from "react";
import { motion, LayoutGroup } from "framer-motion";
import { usePathname } from "next/navigation";

import { navItems } from "@/data/nav";
import NavLogo from "@/components/atoms/NavLogo";
import NavLinkItem from "@/components/atoms/NavLinkItem";

export default function DesktopNavbar() {
  const pathname = usePathname();

  // index berdasarkan route aktif
  const activeIndex = navItems.findIndex((i) =>
    i.href === "/" ? pathname === "/" : pathname?.startsWith(i.href)
  );

  // index untuk hover
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // index yang dipakai pill (hover kalau ada, else active)
  const effectiveIndex = hoveredIndex ?? activeIndex;

  const prevEffectiveIndexRef = useRef(effectiveIndex);
  const direction =
    effectiveIndex > prevEffectiveIndexRef.current
      ? 1
      : effectiveIndex < prevEffectiveIndexRef.current
      ? -1
      : 0;

  useEffect(() => {
    if (effectiveIndex !== -1 && effectiveIndex !== null) {
      prevEffectiveIndexRef.current = effectiveIndex;
    }
  }, [effectiveIndex]);

  return (
    <LayoutGroup>
      <motion.nav
        className="hidden md:flex relative bg-brand-green/98 text-sm tracking-[0.12em] px-8 lg:px-10 py-4 rounded-full shadow-pill items-center gap-4 lg:gap-0 pointer-events-auto border border-brand-gold/14 backdrop-blur-md"
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        {/* Logo */}
        <NavLogo className="mr-4" heightClass="h-32 -my-40" />

        {navItems.map((item, index) => {
          const isCurrent =
            item.href === "/"
              ? pathname === "/"
              : pathname?.startsWith(item.href);

          const isHighlighted = index === effectiveIndex;

          return (
            <NavLinkItem
              key={item.href}
              href={item.href}
              label={item.label}
              isHighlighted={isHighlighted}
              isCurrent={!!isCurrent}
              direction={direction}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            />
          );
        })}
      </motion.nav>
    </LayoutGroup>
  );
}