"use client";

import Link from "next/link";

interface ButtonGoldProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function ButtonGold({ href, children, className }: ButtonGoldProps) {
  return (
    <Link
      href={href}
      className={`rounded-pill bg-brand-gold px-8 py-2 text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.22em] text-black transition-all duration-300 border border-transparent hover:bg-brand-gold/10 hover:text-brand-gold hover:backdrop-blur-[3px] hover:border-brand-gold/70 ${className}`}
    >
      {children}
    </Link>
  );
}