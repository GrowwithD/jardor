"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export type MenuItem = {
  name: string;
  image: string;
  description: string;
};

export type MenuCategoryData = {
  id: string;
  label: string;
  subtitle: string;
  items: MenuItem[];
};

export default function MenuCategory({
  category,
  index,
}: {
  category: MenuCategoryData;
  index: number;
}) {
  return (
    <motion.div
      id={category.id}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.04 }}
      className="space-y-8"
    >
      {/* Header */}
      <div className="text-left md:text-center space-y-2">
        <p className="text-[8px] uppercase tracking-[0.26em] text-brand-gold/70">
          {String(index + 1).padStart(2, "0")} • Selection
        </p>
        <h2 className="font-serif text-xl md:text-2xl text-brand-cream tracking-[0.16em] uppercase">
          {category.label}
        </h2>
        <p className="max-w-2xl md:mx-auto text-[10px] md:text-xs text-brand-cream/78 leading-relaxed">
          {category.subtitle}
        </p>
        <div className="flex items-center md:justify-center gap-2 pt-1">
          <span className="h-px w-8 bg-brand-gold/30" />
          <span className="h-[3px] w-[3px] rounded-full bg-brand-gold/80" />
          <span className="h-px w-8 bg-brand-gold/30" />
        </div>
      </div>

      {/* Menu Panel */}
      <div
        className="
          relative overflow-hidden
          rounded-xl
          bg-[#050505]
          border border-brand-gold/14
          ring-1 ring-inset ring-brand-gold/8
          shadow-[0_22px_80px_rgba(0,0,0,0.95)]
          backdrop-blur-sm
          px-4 md:px-7 py-7 md:py-9
          before:absolute before:inset-0
          before:bg-[radial-gradient(circle_at_top_left,rgba(200,169,107,0.05),transparent_65%)]
          before:opacity-80 before:pointer-events-none
        "
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 md:gap-y-8 relative z-10">
          {category.items.map((item, i) => (
            <motion.div
              key={item.name + i}
              whileHover={{ y: -3, scale: 1.012 }}
              transition={{ type: "spring", stiffness: 240, damping: 22 }}
              className="group relative flex items-start gap-4"
            >
              {/* Image */}
              <div
                className="
                  relative w-20 h-20 md:w-24 md:h-24 shrink-0
                  overflow-hidden rounded-xl
                  border border-brand-gold/22
                  bg-black/70
                  shadow-[0_8px_24px_rgba(0,0,0,0.9)]
                  transition-all duration-500
                  group-hover:border-brand-gold/40
                  group-hover:shadow-[0_0_24px_rgba(200,169,107,0.22)]
                "
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              {/* Text */}
              <div className="flex-1 pt-1">
                <p className="font-serif text-[10px] md:text-xs uppercase tracking-[0.14em] text-brand-gold mb-1">
                  {item.name}
                </p>
                <p className="text-[10px] md:text-[11px] text-brand-cream/80 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Hover line */}
              <div
                className="
                  absolute left-0 bottom-0 h-[1px] w-0
                  bg-gradient-to-r from-brand-gold/55 to-transparent
                  group-hover:w-full
                  transition-all duration-700 ease-out
                "
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}