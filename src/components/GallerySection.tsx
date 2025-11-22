"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

import SectionHeader from "@/components/molecules/SectionHeader";

/* =======================
   GALLERY IMAGES
======================= */
const galleryImages = [
  { src: "/images/DSC04919-HDR.jpg", aspect: "aspect-[4/3]" },
  { src: "/images/DSC04930-HDR.jpg", aspect: "aspect-[3/4]" },
  { src: "/images/DSC04933-HDR.jpg", aspect: "aspect-[4/5]" },
  { src: "/images/DSC00301.jpg", aspect: "aspect-[16/10]" },
  { src: "/images/DSC00342.jpg", aspect: "aspect-[4/3]" },
  { src: "/images/DSC00222.jpg", aspect: "aspect-[3/4]" },
];

const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.28, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.22, ease: "easeIn" } },
};

const frameVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.32, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: 8,
    transition: { duration: 0.22, ease: "easeIn" },
  },
};

type Direction = 1 | -1;

/* =====================================================
   MAIN COMPONENT
===================================================== */
export default function GallerySection() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<Direction>(1);

  /* Init AOS */
  useEffect(() => {
    AOS.init({
      duration: 700,
      offset: 80,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  /* Lightbox handlers */
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
    setCurrentIndex((prev) => (prev! + 1) % galleryImages.length);
  }, [currentIndex]);

  const showPrev = useCallback(() => {
    if (currentIndex === null) return;
    setDirection(-1);
    setCurrentIndex((prev) =>
      (prev! - 1 + galleryImages.length) % galleryImages.length
    );
  }, [currentIndex]);

  /* Lightbox animation */
  const imageVariants: Variants = {
    enter: (dir: Direction) => ({
      opacity: 0,
      x: dir === 1 ? 40 : -40,
      scale: 0.98,
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.32, ease: "easeOut" },
    },
    exit: (dir: Direction) => ({
      opacity: 0,
      x: dir === 1 ? -40 : 40,
      scale: 0.98,
      transition: { duration: 0.22, ease: "easeIn" },
    }),
  };

  return (
    <>
      {/* SECTION */}
      <section
        id="gallery"
        className="
          relative py-20 md:py-28
          bg-brand-green text-brand-cream
        "
      >
        <div className="max-w-6xl mx-auto px-4 space-y-10">

          {/* HEADER */}
          <SectionHeader
            eyebrow="JARD’OR GALLERY"
            title="A Look Inside Jard’or"
            subtitle="The architecture, the dishes, the wine, the garden, and the atmosphere — stories preserved in quiet frames."
            align="center"
          />

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 md:columns-3 gap-5 space-y-5">
            {galleryImages.map((item, idx) => (
              <button
                key={`${item.src}-${idx}`}
                onClick={() => openLightbox(idx)}
                data-aos="fade-up"
                data-aos-delay={(idx % 6) * 60}
                className={`
                  group mb-5 break-inside-avoid
                  block w-full
                  overflow-hidden bg-black/40 border border-brand-gold/20

                  ${item.aspect}
                `}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={item.src}
                    alt={`Gallery image ${idx + 1}`}
                    fill
                    className="object-cover transition-transform duration-[3500ms] group-hover:scale-110"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {isOpen && currentIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 backdrop-blur-sm"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closeLightbox}
          >
            {/* Frame */}
            <motion.div
              className="pointer-events-none absolute inset-10 rounded-[32px] border border-brand-gold/10 shadow-[0_0_80px_rgba(0,0,0,1)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.12 } }}
              exit={{ opacity: 0 }}
            />

            {/* Image */}
            <motion.div
              className="relative max-w-5xl w-full mx-4"
              variants={frameVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={closeLightbox}
                className="absolute -top-10 right-0 h-9 w-9 flex items-center justify-center rounded-full
                     bg-black/70 border border-brand-gold/40 text-brand-gold
                     hover:bg-brand-gold/20 transition-all duration-300"
              >
                ✕
              </button>

              <div className="relative w-full aspect-[16/10] md:aspect-[21/9] overflow-hidden rounded-2xl">
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
                      src={galleryImages[currentIndex].src}
                      alt="Preview"
                      fill
                      className="object-contain"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Arrows */}
              <div className="absolute inset-y-0 -left-3 -right-3 flex items-center justify-between pointer-events-none">
                <button
                  onClick={showPrev}
                  className="pointer-events-auto flex h-11 w-11 items-center justify-center
                       rounded-full bg-black/60 border border-brand-gold/30 text-brand-gold"
                >
                  ‹
                </button>

                <button
                  onClick={showNext}
                  className="pointer-events-auto flex h-11 w-11 items-center justify-center
                       rounded-full bg-black/60 border border-brand-gold/30 text-brand-gold"
                >
                  ›
                </button>
              </div>

              {/* Counter */}
              <div className="mt-4 text-center text-brand-gold/80 text-xs tracking-wide">
                {currentIndex + 1} / {galleryImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}