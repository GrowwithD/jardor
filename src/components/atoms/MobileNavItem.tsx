"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type MobileNavItemProps = {
  href: string;
  label: string;
  active: boolean;
  index: number;
  onClick?: () => void;
};

export default function MobileNavItem({
  href,
  label,
  active,
  index,
  onClick,
}: MobileNavItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.18, delay: 0.03 * index }}
      className="py-2"
    >
      <Link
        href={href}
        onClick={onClick}
        className={[
          "block py-2",
          "text-[12px] uppercase tracking-[0.22em]",
          active
            ? "text-brand-gold"
            : "text-brand-cream/85 hover:text-brand-gold",
        ].join(" ")}
      >
        <span className="flex items-center justify-between">
          {label}
          <span
            className={[
              "ml-3 h-px w-8 transition-all",
              active ? "bg-brand-gold/90" : "bg-transparent",
            ].join(" ")}
          />
        </span>
      </Link>
      <div className="mt-2 h-px w-full bg-brand-gold/10" />
    </motion.div>
  );
}