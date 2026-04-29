"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type NavLinkItemProps = {
  href: string;
  label: string;
  isHighlighted: boolean;
  isCurrent: boolean;
  direction: number;
  isCta?: boolean;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
};

export default function NavLinkItem({
  href,
  label,
  isHighlighted,
  isCurrent,
  direction,
  isCta = false,
  onHoverStart,
  onHoverEnd,
}: NavLinkItemProps) {
  if (isCta) {
    return (
      <motion.div
        className="relative flex items-center justify-center"
        onHoverStart={onHoverStart}
        onHoverEnd={onHoverEnd}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.18 }}
      >
        <Link
          href={href}
          className={`
            relative px-5 py-1.5 text-md font-normal tracking-widest
            border transition-all duration-300
            ${isCurrent || isHighlighted
              ? "bg-brand-gold text-black border-brand-gold"
              : "bg-brand-gold/10 text-brand-gold border-brand-gold hover:bg-brand-gold hover:text-black"
            }
          `}
        >
          {label}
        </Link>
      </motion.div>
    );
  }

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
            absolute inset-0
            bg-brand-gold/5
            border border-brand-gold/70
          "
        />
      )}

      <Link
        href={href}
        className={`
          relative px-4 py-1.5
          transition-all duration-200
          font-normal text-md
          ${
            isHighlighted
              ? "text-brand-gold"
              : isCurrent
              ? "text-brand-gold/90"
              : "text-brand-cream/95 hover:text-brand-gold/90"
          }
        `}
      >
        <span className="relative z-10">{label}</span>
      </Link>
    </motion.div>
  );
}