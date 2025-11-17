"use client";

import Link from "next/link";

interface ButtonOutlineGoldProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function ButtonOutlineGold({ href, children, className }: ButtonOutlineGoldProps) {
  return (
    <Link
      href={href}
      className={`rounded-pill border border-brand-gold/70 px-6 py-2 text-[8px] md:text-[9px] uppercase tracking-[0.22em] text-brand-gold bg-black/25 backdrop-blur-[3px] transition-all duration-300 hover:bg-brand-gold/10 hover:text-brand-cream hover:border-brand-gold/80 ${className}`}
    >
      {children}
    </Link>
  );
}