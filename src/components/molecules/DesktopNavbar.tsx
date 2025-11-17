"use client";

import { useEffect, useRef, useState } from "react";
import { motion, LayoutGroup } from "framer-motion";
import { usePathname } from "next/navigation";

import { navItems } from "@/data/nav";
import NavLogo from "@/components/atoms/NavLogo";
import NavLinkItem from "@/components/atoms/NavLinkItem";

export default function DesktopNavbar() {
  const pathname = usePathname();

  // index active route
  const activeIndex = navItems.findIndex((i) =>
    i.href === "/" ? pathname === "/" : pathname?.startsWith(i.href)
  );

  // index hover
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // index dipakai pill (hover > active)
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
        className="
          hidden md:flex relative bg-brand-green/98
          text-sm tracking-[0.12em]
          px-8 lg:px-10 py-4
          items-center gap-0
          pointer-events-auto
          border border-brand-gold/14 backdrop-blur-md
        "
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        {navItems.map((item, index) => {
          const isLogo = item.label === "LOGO";

          const isCurrent =
            item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);

          const isHighlighted = index === effectiveIndex;

          // 🟡 LOGO item
          if (isLogo) {
            return (
              <div
                key="center-logo"
                className="px-3 mx-4 flex items-center justify-center"
              >
                <NavLogo
                  heightClass="h-36 -my-40"
                  className="select-none pointer-events-auto"
                />
              </div>
            );
          }

          // 🟢 Normal navigation item
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