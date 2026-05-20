"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import AOS from "aos";
import { ChevronLeft, ChevronRight } from "lucide-react";

import SectionHeader from "@/components/molecules/SectionHeader";

/* =====================================================
   RANDOM ASPECT OPTIONS
===================================================== */
const aspectOptions = ["aspect-[4/3]", "aspect-[3/4]", "aspect-square"];

const baseNames = [
    "Copy of DSC00147.jpg",
    "Copy of DSC00261.jpg",
    "Copy of DSC00427.jpg",
    "Copy of DSC00437.jpg",
    "Copy of DSC00492.jpg",
    "Copy of DSC00554.jpg",
    "Copy of DSC00580.jpg",
    "Copy of DSC00602.jpg",
    "Copy of DSC00626.jpg",
    "Copy of DSC00648.jpg",
    "Copy of DSC00709.jpg",
    "Copy of DSC00783.jpg",
    "Copy of DSC04734.JPG",
    "Copy of DSC04762.JPG",
    "Copy of DSC04870.JPG",
    "Copy of DSC05255.jpg",
    "Copy of DSC05308.jpg",
    "Copy of DSC06279.jpg",
    "Copy of DSC06285.jpg",
    "Copy of DSC06333.jpg",
    "Copy of DSC06560.jpg",
    "Copy of DSC06618.jpg",
];

/* =====================================================
   LIGHTBOX ANIMATIONS
===================================================== */

const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.35, ease: "easeOut" } },
    exit: { opacity: 0, transition: { duration: 0.25, ease: "easeIn" } },
};

const frameVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 22 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.38, ease: "easeOut" },
    },
    exit: {
        opacity: 0,
        scale: 0.93,
        y: 16,
        transition: { duration: 0.25, ease: "easeIn" },
    },
};

type Direction = 1 | -1;

/* =====================================================
   MAIN COMPONENT
===================================================== */

export default function GallerySection() {
    const [galleryImages, setGalleryImages] = useState<
        { src: string; aspect: string }[]
    >([]);

    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);
    const [direction, setDirection] = useState<Direction>(1);

    /* ---- FIX HYDRATION ---- */
    useEffect(() => {
        const mapped = baseNames.map((name) => ({
            src: `/images/gallery/${name}`,
            aspect: aspectOptions[Math.floor(Math.random() * aspectOptions.length)],
        }));
        setGalleryImages(mapped);
    }, []);

    /* ---- AOS ---- */
    useEffect(() => {
        AOS.init({
            duration: 900,
            offset: 100,
            easing: "ease-out-cubic",
        });
    }, []);

    /* ---- LIGHTBOX ACTIONS ---- */
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

    const showNext = useCallback(() => {
        if (currentIndex === null) return;
        setDirection(1);
        setCurrentIndex((p) => (p! + 1) % galleryImages.length);
    }, [currentIndex, galleryImages.length]);

    const showPrev = useCallback(() => {
        if (currentIndex === null) return;
        setDirection(-1);
        setCurrentIndex((p) => (p! - 1 + galleryImages.length) % galleryImages.length);
    }, [currentIndex, galleryImages.length]);

    const imageVariants: Variants = {
        enter: (dir: Direction) => ({
            opacity: 0,
            x: dir === 1 ? 60 : -60,
            scale: 0.96,
        }),
        center: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: { duration: 0.38 },
        },
        exit: (dir: Direction) => ({
            opacity: 0,
            x: dir === 1 ? -60 : 60,
            scale: 0.96,
            transition: { duration: 0.3 },
        }),
    };

    return (
        <>
            {/* ======================= SECTION ======================= */}
            <section
                id="gallery"
                className="relative py-20 md:py-28 bg-brand-green text-brand-cream"
            >
                <div className="max-w-6xl mx-auto px-4 space-y-14">
                    <SectionHeader
                        eyebrow="JARD’OR GALLERY"
                        title="A Look Inside Jard’or"
                        subtitle="The architecture, dishes, wine, and ambience — timeless frames of our space."
                        align="center"
                    />

                    {/* GRID IMAGES */}
                    {galleryImages.length > 0 && (
                        <motion.div
                            initial="initial"
                            animate="animate"
                            className="columns-1 sm:columns-2 md:columns-3 gap-5 space-y-5"
                        >
                            {galleryImages.map((item, idx) => (
                                <motion.button
                                    viewport={{ once: true, amount: 0.3 }}
                                    key={`${item.src}-${idx}`}
                                    onClick={() => openLightbox(idx)}
                                    data-aos="fade-up"
                                    data-aos-delay={(idx % 6) * 70}
                                    className={`
                    group mb-5 break-inside-avoid block w-full
                    overflow-hidden border border-brand-gold/20 bg-black/40
                    ${item.aspect}
                  `}
                                >
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={item.src}
                                            alt={`Gallery ${idx + 1}`}
                                            fill
                                            className="
                        object-cover
                        transition-transform duration-[3500ms]
                        group-hover:scale-110
                      "
                                        />
                                    </div>
                                </motion.button>
                            ))}
                        </motion.div>
                    )}
                </div>
            </section>

            {/* ======================= LIGHTBOX ======================= */}
            <AnimatePresence>
                {isOpen && currentIndex !== null && (
                    <motion.div
                        className="fixed inset-0 z-[90] flex items-center justify-center bg-black/95 backdrop-blur-md p-6 md:p-10"
                        variants={overlayVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={closeLightbox}
                    >
                        <motion.div
                            className="relative w-full max-w-[90vw] max-h-[90vh] flex flex-col"
                            variants={frameVariants}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* CLOSE BUTTON */}
                            <button
                                onClick={closeLightbox}
                                className="
                  absolute -top-12 right-0 h-12 w-12 rounded-full
                  flex items-center justify-center
                  bg-black/70 border border-brand-gold/40 text-brand-gold
                  hover:bg-brand-gold hover:text-black transition
                "
                            >
                                ✕
                            </button>

                            {/* IMAGE AREA */}
                            <div className="relative w-full h-[65vh] md:h-[75vh] rounded-3xl overflow-hidden bg-black">
                                <AnimatePresence custom={direction} mode="wait">
                                    <motion.div
                                        key={currentIndex}
                                        custom={direction}
                                        viewport={{ once: true, amount: 0.3 }}
                                        variants={imageVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        className="absolute inset-0 flex items-center justify-center"
                                    >
                                        <Image
                                            src={galleryImages[currentIndex].src}
                                            alt="Preview"
                                            fill
                                            className="object-contain"
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* ARROWS */}
                            <div className="absolute inset-y-0 left-0 right-0 px-6 flex items-center justify-between pointer-events-none">
                                <button
                                    onClick={showPrev}
                                    className="
                    pointer-events-auto h-14 w-14 rounded-full
                    bg-black/60 border border-brand-gold/40 text-brand-gold
                    hover:bg-brand-gold hover:text-black flex items-center justify-center
                  "
                                >
                                    <ChevronLeft size={42} strokeWidth={1.3} />
                                </button>

                                <button
                                    onClick={showNext}
                                    className="
                    pointer-events-auto h-14 w-14 rounded-full
                    bg-black/60 border border-brand-gold/40 text-brand-gold
                    hover:bg-brand-gold hover:text-black flex items-center justify-center
                  "
                                >
                                    <ChevronRight size={42} strokeWidth={1.3} />
                                </button>
                            </div>

                            {/* COUNTER */}
                            <div className="mt-4 text-center text-brand-gold/80 tracking-wide text-sm">
                                {currentIndex + 1} / {galleryImages.length}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}