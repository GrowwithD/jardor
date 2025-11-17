// src/components/sections/GalleryMasonry.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

import BatikSectionLayout from "@/components/layouts/BatikSectionLayout";
import SectionHeader from "@/components/molecules/SectionHeader";

const galleryImages = [
  { src: "/images/about.png", aspect: "aspect-[4/3]" },
  { src: "/images/main-food.jpg", aspect: "aspect-[3/4]" },
  { src: "/images/main-food-2.jpg", aspect: "aspect-[16/10]" },
  { src: "/images/main-food-3.jpg", aspect: "aspect-[4/5]" },
  { src: "/images/main-food.jpg", aspect: "aspect-[4/3]" },
  { src: "/images/main-food-2.jpg", aspect: "aspect-[3/4]" },
  { src: "/images/main-food-3.jpg", aspect: "aspect-[16/10]" },
  { src: "/images/about.png", aspect: "aspect-[4/5]" },
  { src: "/images/main-food.jpg", aspect: "aspect-[4/3]" },
  { src: "/images/main-food-2.jpg", aspect: "aspect-[3/4]" },
  { src: "/images/main-food-3.jpg", aspect: "aspect-[16/10]" },
  { src: "/images/about.png", aspect: "aspect-[4/5]" },
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

export default function GalleryMasonry() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<Direction>(1);

  // Init AOS untuk grid masonry
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 80,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setDirection(1);
    setIsOpen(true);
    if (typeof document !== "undefined") {
      document.body.classList.add("overflow-hidden");
    }
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setCurrentIndex(null);
    if (typeof document !== "undefined") {
      document.body.classList.remove("overflow-hidden");
    }
  };

  const showNext = useCallback(() => {
    if (currentIndex === null) return;
    setDirection(1);
    setCurrentIndex((prev) =>
      prev === null ? prev : (prev + 1) % galleryImages.length
    );
  }, [currentIndex]);

  const showPrev = useCallback(() => {
    if (currentIndex === null) return;
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === null
        ? prev
        : (prev - 1 + galleryImages.length) % galleryImages.length
    );
  }, [currentIndex]);

  // Animasi image di lightbox saat navigasi
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
      {/* ======= SECTION DENGAN LAYOUT BATIK + HEADER ======= */}
      <BatikSectionLayout>
        <div className="max-w-6xl mx-auto px-4 space-y-10">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              eyebrow="Jard’or Gallery"
              title="Scenes From the Pass, Cellar & Room"
              subtitle="A quiet mosaic of plates, pours, and gestures that shape each evening at Jard’or."
              align="center"
            />
          </div>

          {/* Masonry grid */}
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5 space-y-5">
            {galleryImages.map((item, idx) => (
              <button
                key={`${item.src}-${idx}`}
                onClick={() => openLightbox(idx)}
                data-aos="fade-up"
                data-aos-delay={(idx % 6) * 60}
                className={`
                  group mb-5 break-inside-avoid
                  block w-full
                  overflow-hidden bg-black
                  shadow-[0_18px_60px_rgba(0,0,0,0.95)]
                  transition-transform duration-500
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A96B]/60
                  ${item.aspect}
                `}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={item.src}
                    alt={`Jard’or gallery ${idx + 1}`}
                    fill
                    className="object-cover transition-transform duration-[1100ms] group-hover:scale-110"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="pointer-events-none absolute inset-0 border border-transparent group-hover:border-[#C8A96B]/25 group-hover:shadow-[0_0_32px_rgba(200,169,107,0.25)] transition-all duration-500" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </BatikSectionLayout>

      {/* ======= LIGHTBOX ======= */}
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
            {/* Gold outer frame */}
            <motion.div
              className="pointer-events-none absolute inset-10 rounded-[32px] border border-[#C8A96B]/10 shadow-[0_0_80px_rgba(0,0,0,0.9)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.12 } }}
              exit={{ opacity: 0 }}
            />

            {/* Lightbox content */}
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
                           bg-black/70 border border-[#C8A96B]/40
                           hover:bg-[#C8A96B]/15 transition-all duration-300
                           shadow-[0_0_18px_rgba(0,0,0,0.9)]"
                aria-label="Close"
              >
                <span className="text-[#C8A96B] text-lg leading-none">×</span>
              </button>

              {/* Main image + nav animation */}
              <div
                className="relative w-full aspect-[16/10] md:aspect-[21/9]
                           overflow-hidden rounded-3xl
                           bg-gradient-to-b from-white/5 via-black/80 to-black"
              >
                <AnimatePresence custom={direction} mode="wait" initial={false}>
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
                      alt={`Jard’or preview ${currentIndex + 1}`}
                      fill
                      className="object-contain"
                      sizes="(min-width: 1024px) 960px, 100vw"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/5" />
              </div>

              {/* Arrows */}
              <div className="absolute inset-y-0 -left-3 -right-3 flex items-center justify-between pointer-events-none">
                <button
                  onClick={showPrev}
                  className="pointer-events-auto flex h-11 w-11 items-center justify-center
                             rounded-full bg-black/75 border border-white/10
                             hover:border-[#C8A96B]/60 hover:bg-[#C8A96B]/10
                             backdrop-blur-sm transition-all duration-300"
                  aria-label="Previous"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 text-[#C8A96B]"
                    aria-hidden="true"
                  >
                    <path
                      d="M15.5 5L8.5 12L15.5 19"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <button
                  onClick={showNext}
                  className="pointer-events-auto flex h-11 w-11 items-center justify-center
                             rounded-full bg-black/75 border border-white/10
                             hover:border-[#C8A96B]/60 hover:bg-[#C8A96B]/10
                             backdrop-blur-sm transition-all duration-300"
                  aria-label="Next"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 text-[#C8A96B]"
                    aria-hidden="true"
                  >
                    <path
                      d="M8.5 5L15.5 12L8.5 19"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Caption */}
              <div className="mt-4 flex items-center justify-between text-xs md:text-sm text-[#C8A96B]/80">
                <span className="uppercase tracking-[0.18em] text-[0.65rem] md:text-[0.7rem] text-[#C8A96B]/60">
                  JARD’OR CURATED GALLERY
                </span>
                <span className="text-[0.7rem] md:text-xs text-[#C8A96B]/80">
                  {currentIndex + 1} / {galleryImages.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}