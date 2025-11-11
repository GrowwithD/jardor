// src/components/molecules/HighlightCard.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export type HighlightCardItem = {
  title: string;
  image: string;
  meta?: string;
};

type Props = {
  item: HighlightCardItem;
  onClick: () => void;
};

export function HighlightCard({ item, onClick }: Props) {
  return (
    <motion.button
      whileHover={{ scale: 1.045, y: -3 }}
      transition={{
        type: "spring",
        stiffness: 190,
        damping: 18,
      }}
      onClick={onClick}
      className="
        group relative
        snap-start shrink-0
        overflow-hidden
        rounded-2xl
        bg-black/30
        border border-black/55
        w-[78%] xs:w-[64%] sm:w-[46%] md:w-[30%] lg:w-[23%]
        aspect-[4/5]
        hover:border-brand-gold/85
        hover:shadow-[0_18px_65px_rgba(0,0,0,0.98)]
        transition-colors
      "
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/96 via-black/28 to-transparent" />

      <div className="absolute left-3 right-3 bottom-2.5 space-y-0.5 text-left">
        <p className="text-[0.5rem] uppercase tracking-[0.2em] text-brand-gold">
          {item.title}
        </p>
        {item.meta && (
          <p className="text-[0.55rem] text-brand-cream/65 line-clamp-1">
            {item.meta}
          </p>
        )}
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-brand-gold/0 group-hover:border-brand-gold/18 transition-all duration-500" />
    </motion.button>
  );
}