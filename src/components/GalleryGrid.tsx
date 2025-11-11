"use client";

import Image from "next/image";

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
        <section className="relative bg-linear-to-b from-black via-[#060807] to-brand-green py-16">


            <div className="relative z-10 max-w-6xl mx-auto px-4">
                <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5 space-y-5">
                    {galleryImages.map((src, idx) => (
                        <div
                            key={`${src}-${idx}`}
                            className="relative mb-5 overflow-hidden rounded-2xl bg-black shadow-[0_18px_60px_rgba(0,0,0,0.95)] group transition-transform duration-500 hover:-translate-y-1"
                        >
                            <Image
                                src={src}
                                alt={`Jard’or gallery ${idx + 1}`}
                                width={900}
                                height={1200}
                                className="w-full h-auto object-cover transition-transform duration-1100 group-hover:scale-110"
                            />

                            {/* Dark gradient overlay */}
                            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/75 via-black/18 to-transparent opacity-85 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Gold frame glow on hover */}
                            <div className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent group-hover:border-brand-gold/22 group-hover:shadow-[0_0_32px_rgba(200,169,107,0.2)] transition-all duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}