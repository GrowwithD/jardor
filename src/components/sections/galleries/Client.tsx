// src/components/sections/galleries/Client.tsx
"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "@/components/molecules/SectionHeader";

type Category = { id: string; name: string };
type GalleryImage = { id: string; image: string };

export type GalleriesClientProps = {
  categories: Category[];
  initialImages: GalleryImage[];
  initialCategory?: string; // ✅ optional, default "all"
};

async function fetchImages(categoryId?: string): Promise<GalleryImage[]> {
  const qs = new URLSearchParams();
  if (categoryId) qs.set("category_id", categoryId);

  const url = `/api/gallery${qs.toString() ? `?${qs.toString()}` : ""}`;

  const res = await fetch(url, {
    method: "GET",
    cache: "no-store",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Failed fetchImages: ${res.status} ${text}`);
  }

  const data = await res.json();
  if (Array.isArray(data)) return data;
  if (data && Array.isArray(data.images)) return data.images;
  return [];
}

const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.35 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

const frameVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.38 } },
  exit: { opacity: 0, scale: 0.93, y: 18, transition: { duration: 0.25 } },
};

export default function GalleriesClient({
  categories,
  initialImages,
  initialCategory,
}: GalleriesClientProps) {
  const ALL_ID = "all";
  const tabs: Category[] = [{ id: ALL_ID, name: "All" }, ...(categories ?? [])];

  const initialTab = initialCategory ?? ALL_ID;

  const [activeCategory, setActiveCategory] = useState<string>(initialTab);
  const [images, setImages] = useState<GalleryImage[]>(initialImages);

  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState<string | null>(null);

  const lastReqIdRef = useRef(0);

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
    if (currentIndex === null || images.length === 0) return;
    setDirection(1);
    setCurrentIndex((i) => ((i ?? 0) + 1) % images.length);
  };

  const showPrev = () => {
    if (currentIndex === null || images.length === 0) return;
    setDirection(-1);
    setCurrentIndex((i) => ((i ?? 0) - 1 + images.length) % images.length);
  };

  const imageVariants: Variants = {
    enter: (dir: 1 | -1) => ({ opacity: 0, x: dir === 1 ? 60 : -60, scale: 0.96 }),
    center: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.38 } },
    exit: (dir: 1 | -1) => ({
      opacity: 0,
      x: dir === 1 ? -60 : 60,
      scale: 0.96,
      transition: { duration: 0.3 },
    }),
  };

  const switchCategory = async (categoryId: string) => {
    setErrMsg(null);
    setActiveCategory(categoryId);
    setLoading(true);

    const myReqId = ++lastReqIdRef.current;

    try {
      const list = await fetchImages(categoryId === ALL_ID ? undefined : categoryId);
      if (myReqId !== lastReqIdRef.current) return;
      setImages(list);
    } catch (e: any) {
      if (myReqId !== lastReqIdRef.current) return;
      setErrMsg(e?.message ?? "Failed to load images");
      setImages([]);
    } finally {
      if (myReqId === lastReqIdRef.current) {
        setLoading(false);
        if (isOpen) closeLightbox();
      }
    }
  };

  return (
    <>
      <section id="gallery" className="relative py-20 md:py-28 bg-brand-green text-brand-cream">
        <div className="max-w-6xl mx-auto px-4 space-y-12">
          <SectionHeader
            eyebrow="JARD’OR GALLERY"
            title="A Look Inside Jard’or"
            subtitle="Architecture, dishes, wine, ambience — captured moments from our space."
            align="center"
          />

          <div className="flex flex-wrap justify-center gap-3 md:gap-5 mb-10">
            {tabs.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => switchCategory(cat.id)}
                disabled={loading && cat.id === activeCategory}
                className={`
                  px-4 py-2 text-sm uppercase tracking-wide border transition-all
                  ${cat.id === activeCategory
                    ? "border-brand-gold text-brand-gold"
                    : "border-brand-gold/30 text-brand-cream/70 hover:text-brand-gold"}
                  ${loading ? "opacity-80" : ""}
                `}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {loading && <div className="text-center text-brand-gold/80 text-sm">Loading images...</div>}
          {errMsg && <div className="text-center text-red-300 text-sm">{errMsg}</div>}

          <div className="columns-1 sm:columns-2 md:columns-3 gap-5 space-y-5">
            {images.map((img, index) => (
              <motion.button
                key={img.id}
                type="button"
                onClick={() => openLightbox(index)}
                className="block w-full overflow-hidden rounded-lg border border-brand-gold/20 bg-black/40"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-full aspect-[4/5]">
                  <Image src={img.image} alt="Gallery Image" fill className="object-cover" />
                </div>
              </motion.button>
            ))}
          </div>

          {!loading && images.length === 0 && !errMsg && (
            <div className="text-center text-brand-cream/60 text-sm">No images in this category yet.</div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {isOpen && currentIndex !== null && images[currentIndex] && (
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
                    <Image src={images[currentIndex].image} alt="Preview" fill className="object-contain" />
                  </motion.div>
                </AnimatePresence>
              </div>

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