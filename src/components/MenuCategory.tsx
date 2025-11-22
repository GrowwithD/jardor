// components/MenuCategory.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export type MenuCategoryData = {
    id: string;
    label: string;
    subtitle: string;
    hero: string;
    pdfUrl: string;
    location?: string; // optional: "TASTING MENU", "BAR", dll
};

type Props = {
    category: MenuCategoryData;
    index: number;
};

export default function MenuCategory({ category, index }: Props) {
    return (
        <motion.a
            href={category.pdfUrl}
            download
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.06 }}
            className="group block cursor-pointer"
        >
            {/* IMAGE */}
            <div className="relative aspect-square w-full overflow-hidden bg-black/40">
                <Image
                    src={category.hero}
                    alt={category.label}
                    fill
                    sizes="(min-width: 1024px) 40vw, 80vw"
                    className="
            object-cover
            transition-transform duration-[4000ms] ease-out
            group-hover:scale-110
        "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
            </div>

            {/* TEXT */}
            <div className="mt-6 text-center">
                {category.location && (
                    <p className="text-[9px] md:text-[10px] uppercase tracking-[0.26em] text-brand-cream/55">
                        {category.location}
                    </p>
                )}

                <h3 className="mt-1 text-[15px] md:text-[17px] tracking-[0.12em] text-brand-cream group-hover:text-brand-gold transition-colors">
                    {category.label}
                </h3>

                <p className="mt-2 text-[11px] md:text-[12px] text-brand-cream/78 max-w-sm mx-auto leading-relaxed">
                    {category.subtitle}
                </p>
            </div>
        </motion.a>
    );
}