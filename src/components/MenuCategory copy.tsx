// components/MenuCategory.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export type MenuItem = {
    name: string;
    image: string;
    description: string;
    price?: number; // e.g. 112000
};

export type MenuCategoryData = {
    id: string;
    label: string;
    subtitle: string;
    items: MenuItem[];
};

// 112000 -> "112K"
const formatK = (n?: number) => {
    if (typeof n !== "number") return undefined;
    const k = Math.round(n / 1000);
    return `${k}K`;
};

export default function MenuCategory({
    category,
    index,
}: {
    category: MenuCategoryData;
    index: number;
}) {
    const orderLabel = String(index + 1).padStart(2, "0");

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
                <p className="text-sm uppercase tracking-[0.26em] text-brand-gold/70">
                    {orderLabel} ~ Selection
                </p>
                <h2 className="text-2xl">
                    {category.label}
                </h2>
                <p className="max-w-2xl md:mx-auto text-xs md:text-base text-brand-cream/80 leading-relaxed">
                    {category.subtitle}
                </p>
                <div className="flex items-center md:justify-center gap-2 pt-1">
                    <span className="h-px w-8 bg-brand-gold/30" />
                    <span className="h-[3px] w-[3px] bg-brand-gold/80" />
                    <span className="h-px w-8 bg-brand-gold/30" />
                </div>
            </div>

            {/* Menu Panel */}
            <div className="relative overflow-hidden border border-brand-gold/15 ring-1 ring-inset ring-brand-gold/8  px-4 md:px-7 py-7 md:py-9">
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 md:gap-y-8">
                    {category.items.map((item, i) => {
                        const priceK = formatK(item.price);
                        return (
                            <motion.div
                                key={`${item.name}-${i}`}
                                transition={{ type: "spring", stiffness: 240, damping: 22 }}
                                className="group relative flex items-start gap-4"
                            >
                                {/* Image */}
                                <div className="relative w-20 h-20 md:w-24 md:h-24 shrink-0 overflow-hidden border border-brand-gold/22 bg-black/70 shadow-[0_8px_24px_rgba(0,0,0,0.9)] transition-all duration-500 group-hover:border-brand-gold/40">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        sizes="96px"
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
                                </div>

                                {/* Text */}
                                <div className="flex-1 pt-1">
                                    <p className="text-[10px] md:text-base tracking-[0.14em] text-brand-gold mb-1">
                                        {item.name}
                                    </p>
                                    <p className="text-[10px] md:text-sm text-brand-cream/80 leading-relaxed italic">
                                        {item.description}
                                    </p>

                                    {/* Price */}
                                    {priceK && (
                                        <div className="mt-2">
                                            <span
                                                className="
                          text-[13px] md:text-[15px] tracking-wide text-brand-gold
                          group-hover:text-brand-gold/95 transition-colors
                        "
                                            >
                                                {priceK}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Hover line */}
                                <div className="absolute left-0 -bottom-2 h-px w-0 bg-linear-to-r from-brand-gold/55 to-transparent group-hover:w-full transition-all duration-700 ease-out" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
}