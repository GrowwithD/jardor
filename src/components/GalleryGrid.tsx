"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages = [
    "/images/menu-hero.jpg",
    "/images/main-food.jpg",
    "/images/main-food-2.jpg",
    "/images/main-food-3.jpg",
    "/images/main-food.jpg",
    "/images/main-food-2.jpg",
    "/images/main-food-3.jpg",
    "/images/menu-hero.jpg",
    "/images/main-food.jpg",
    "/images/main-food-2.jpg",
    "/images/main-food-3.jpg",
    "/images/menu-hero.jpg",
];

export default function GalleryGrid() {
    return (
        <section className="relative bg-gradient-to-b from-black via-[#050806] to-brand-green py-16">
            {/* Background glow (beda dari footer) */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute top-[4%] left-1/2 -translate-x-1/2 w-[640px] h-[640px] bg-[radial-gradient(circle,rgba(200,169,107,0.06),transparent_75%)] blur-3xl opacity-35" />
                <div className="absolute bottom-[-40px] right-[10%] w-[380px] h-[380px] bg-[radial-gradient(circle,rgba(200,169,107,0.04),transparent_80%)] blur-3xl opacity-35" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4">
                {/* Masonry grid */}
                <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5 space-y-5">
                    {galleryImages.map((src, idx) => (
                        <motion.div
                            key={`${src}-${idx}`}
                            whileHover={{ y: -4, scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 260, damping: 24 }}
                            className="
                relative mb-5
                overflow-hidden
                rounded-2xl
                bg-black
                shadow-[0_18px_60px_rgba(0,0,0,0.95)]
                group
              "
                        >
                            <Image
                                src={src}
                                alt={`Jard’or gallery ${idx + 1}`}
                                width={900}
                                height={1200}
                                priority={idx < 4}
                                className="
                  w-full h-auto object-cover
                  transition-transform duration-[1.1s]
                  group-hover:scale-110
                "
                            />

                            {/* Dark overlay */}
                            <div
                                className="
                  pointer-events-none absolute inset-0
                  bg-gradient-to-t from-black/70 via-black/18 to-transparent
                  opacity-85
                  group-hover:opacity-100
                  transition-opacity duration-500
                "
                            />

                            {/* Gold outline on hover */}
                            <div
                                className="
                  pointer-events-none absolute inset-0 rounded-2xl
                  border border-transparent
                  group-hover:border-brand-gold/22
                  group-hover:shadow-[0_0_32px_rgba(200,169,107,0.2)]
                  transition-all duration-500
                "
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}