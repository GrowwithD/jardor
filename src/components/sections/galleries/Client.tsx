"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "@/components/molecules/SectionHeader";

// API fetcher for client-side category switching
async function fetchImages(categoryId: string) {
    const res = await fetch("/api/gallery?category_id=" + categoryId);
    return res.json();
}

const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.35 } },
    exit: { opacity: 0, transition: { duration: 0.25 } },
};

const frameVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.38 },
    },
    exit: { opacity: 0, scale: 0.93, y: 18, transition: { duration: 0.25 } },
};

export default function GalleriesClient({
    categories,
    initialImages,
    initialCategory,
}: {
    categories: { id: string; name: string }[];
    initialImages: { id: string; image: string }[];
    initialCategory: string;
}) {
    const [activeCategory, setActiveCategory] = useState(initialCategory);
    const [images, setImages] = useState(initialImages);

    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);
    const [direction, setDirection] = useState<1 | -1>(1);

    const openLightbox = (index: number) => {
        setCurrentIndex(index);
        setDirection(1);
        setIsOpen(true);
        document.body.classList.add("overflow-hidden");
    };

    const closeLightbox = () => {
        setIsOpen(false);
        setCurrentIndex(null);
        document.body.classList.remove("overflow-hidden");
    };

    const showNext = () => {
        if (currentIndex === null) return;
        setDirection(1);
        setCurrentIndex((i) => (i! + 1) % images.length);
    };

    const showPrev = () => {
        if (currentIndex === null) return;
        setDirection(-1);
        setCurrentIndex((i) => (i! - 1 + images.length) % images.length);
    };

    const imageVariants: Variants = {
        enter: (dir: 1 | -1) => ({
            opacity: 0,
            x: dir === 1 ? 60 : -60,
            scale: 0.96,
        }),
        center: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.38 } },
        exit: (dir: 1 | -1) => ({
            opacity: 0,
            x: dir === 1 ? -60 : 60,
            scale: 0.96,
            transition: { duration: 0.3 },
        }),
    };

    const switchCategory = async (categoryId: string) => {
        setActiveCategory(categoryId);

        const data = await fetchImages(categoryId);
        setImages(data);
    };

    return (
        <>
            <section
                id="gallery"
                className="relative py-20 md:py-28 bg-brand-green text-brand-cream"
            >
                <div className="max-w-6xl mx-auto px-4 space-y-12">
                    <SectionHeader
                        eyebrow="JARD’OR GALLERY"
                        title="A Look Inside Jard’or"
                        subtitle="Architecture, dishes, wine, ambience — captured moments from our space."
                        align="center"
                    />

                    {/* CATEGORY TABS */}
                    <div className="flex flex-wrap justify-center gap-3 md:gap-5 mb-10">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => switchCategory(cat.id)}
                                className={`
                                    px-4 py-2 text-sm uppercase tracking-wide
                                    border transition-all
                                    ${
                                        cat.id === activeCategory
                                            ? "border-brand-gold text-brand-gold"
                                            : "border-brand-gold/30 text-brand-cream/70 hover:text-brand-gold"
                                    }
                                `}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>

                    {/* GALLERY GRID */}
                    <div className="columns-1 sm:columns-2 md:columns-3 gap-5 space-y-5">
                        {images.map((img, index) => (
                            <motion.button
                                key={img.id}
                                onClick={() => openLightbox(index)}
                                className="block w-full overflow-hidden rounded-lg border border-brand-gold/20 bg-black/40"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="relative w-full aspect-[4/5]">
                                    <Image
                                        src={img.image}
                                        alt="Gallery Image"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </motion.button>
                        ))}
                    </div>
                </div>
            </section>

            {/* LIGHTBOX */}
            <AnimatePresence>
                {isOpen && currentIndex !== null && (
                    <motion.div
                        className="fixed inset-0 z-[90] flex items-center justify-center bg-black/95 backdrop-blur-md p-6"
                        variants={overlayVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={closeLightbox}
                    >
                        <motion.div
                            className="relative w-full max-w-[90vw] max-h-[90vh]"
                            variants={frameVariants}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={closeLightbox}
                                className="absolute -top-12 right-0 h-12 w-12 rounded-full flex items-center justify-center bg-black/70 border border-brand-gold/40 text-brand-gold hover:bg-brand-gold hover:text-black transition"
                            >
                                ✕
                            </button>

                            <div className="relative w-full h-[70vh]">
                                <AnimatePresence custom={direction} mode="wait">
                                    <motion.div
                                        key={currentIndex}
                                        custom={direction}
                                        variants={imageVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        className="absolute inset-0"
                                    >
                                        <Image
                                            src={images[currentIndex].image}
                                            alt="Preview"
                                            fill
                                            className="object-contain"
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* ARROWS */}
                            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-6 pointer-events-none">
                                <button
                                    onClick={showPrev}
                                    className="pointer-events-auto h-14 w-14 rounded-full bg-black/60 border border-brand-gold/40 text-brand-gold flex items-center justify-center hover:bg-brand-gold hover:text-black"
                                >
                                    <ChevronLeft size={40} />
                                </button>
                                <button
                                    onClick={showNext}
                                    className="pointer-events-auto h-14 w-14 rounded-full bg-black/60 border border-brand-gold/40 text-brand-gold flex items-center justify-center hover:bg-brand-gold hover:text-black"
                                >
                                    <ChevronRight size={40} />
                                </button>
                            </div>

                            <div className="mt-4 text-center text-brand-gold/80 text-sm">
                                {currentIndex + 1} / {images.length}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}