"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type NavLinkItemProps = {
  href: string;
  label: string;
  isHighlighted: boolean; // dipakai buat pill / hover
  isCurrent: boolean;     // route yang lagi aktif
  direction: number;      // -1, 0, 1
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
};

export default function NavLinkItem({
  href,
  label,
  isHighlighted,
  isCurrent,
  direction,
  onHoverStart,
  onHoverEnd,
}: NavLinkItemProps) {
  return (
    <motion.div
      className="relative flex items-center justify-center"
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
    >
      {isHighlighted && (
        <motion.div
          layoutId="nav-active-pill"
          initial={{
            opacity: 0,
            scale: 0.9,
            x: direction === 0 ? 0 : direction > 0 ? -18 : 18,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            x: {
              type: "spring",
              stiffness: 420,
              damping: 32,
              mass: 0.6,
            },
            opacity: { duration: 0.18 },
            scale: { duration: 0.24 },
          }}
          className="
            absolute inset-0 rounded-full
            bg-brand-gold/5
            border border-brand-gold/70
            shadow-[0_0_10px_rgba(200,169,107,0.15)]
          "
        />
      )}

      <Link
        href={href}
        className={`
          relative px-4 py-1.5 rounded-full
          transition-all duration-200
          font-medium
          ${
            isHighlighted
              ? "text-brand-gold tracking-[0.12em]"
              : isCurrent
              ? "text-brand-gold/90 tracking-widest"
              : "text-brand-cream/95 tracking-[0.08em] hover:text-brand-gold/90"
          }
        `}
      >
        <span className="relative z-10">{label}</span>
      </Link>
    </motion.div>
  );
}