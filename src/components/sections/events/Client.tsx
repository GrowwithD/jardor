"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import ButtonGold from "@/components/atoms/ButtonGold";
import ParallaxBackground from "@/components/atoms/ParallaxBackground";
import SectionHeader from "@/components/molecules/SectionHeader";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ✅ pakai server action yang sama dengan form reservation section
import {
  submitReservationAction,
  type ReservationActionState,
} from "@/components/sections/events/actions"; // <-- SESUAIKAN PATH

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};


type GalleryImage = { id: string; image: string };

type EventType = {
  id: string;
  title: string;
  short_description?: string;
  description?: string;
  main_image: string;
  gallery_images: GalleryImage[];
};

const initialState: ReservationActionState = { ok: false };

export default function EventsClient({
  events,
  header,
}: {
  events: EventType[];
  header: {
    eyebrow: string;
    title: string;
    subtitle: string;
    content: string;
    button_text: string;
  };
}) {
  const [openEvent, setOpenEvent] = useState<EventType | null>(null);
  const [slide, setSlide] = useState(0);

  // carousel state
  const [cardIndex, setCardIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [slideWidth, setSlideWidth] = useState(0);
  const [perView, setPerView] = useState(3);
  const GAP = 24;

  useEffect(() => {
    const update = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.offsetWidth;
      const isDesktop = window.innerWidth >= 768;
      const pv = isDesktop ? Math.min(3, events.length) : 1;
      setPerView(pv);
      setSlideWidth((w - GAP * (pv - 1)) / pv);
    };
    update();
    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [events.length]);

  // ✅ state khusus form modal
  const [state, setState] = useState<ReservationActionState>(initialState);
  const [pending, setPending] = useState(false);

  // yyyy-mm-dd untuk min date
  const minDate = useMemo(() => {
    const d = new Date();
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  }, []);

  const getAllImages = (ev: EventType) => {
    const gallery = ev.gallery_images?.map((g) => g.image) ?? [];
    return ev.main_image ? [ev.main_image, ...gallery] : gallery;
  };

  const nextSlide = () => {
    if (!openEvent) return;
    const imgs = getAllImages(openEvent);
    setSlide((s) => (s + 1) % imgs.length);
  };

  const prevSlide = () => {
    if (!openEvent) return;
    const imgs = getAllImages(openEvent);
    setSlide((s) => (s - 1 + imgs.length) % imgs.length);
  };

  const closeModal = useCallback(() => setOpenEvent(null), []);

  // open event via global event
  useEffect(() => {
    const handler = (e: any) => {
      setOpenEvent(e.detail);
      setSlide(0);
      setState(initialState);
      setPending(false);
    };
    window.addEventListener("open-event", handler);
    return () => window.removeEventListener("open-event", handler);
  }, []);

  // Escape key to close modal
  useEffect(() => {
    if (!openEvent) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [openEvent, closeModal]);

  // Lock body scroll + focus close button when modal opens
  useEffect(() => {
    if (openEvent) {
      document.body.style.overflow = "hidden";
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [openEvent]);

  // ✅ close modal when success (optional)
  useEffect(() => {
    if (state.ok) {
      const t = setTimeout(() => setOpenEvent(null), 900);
      return () => clearTimeout(t);
    }
  }, [state.ok]);

  const renderEventCard = (ev: EventType, idx: number, extraClass = "") => (
    <motion.button
      key={ev.id}
      variants={fadeUp}
      transition={{ duration: 0.7, delay: idx * 0.1 }}
      onClick={() => window.dispatchEvent(new CustomEvent("open-event", { detail: ev }))}
      className={`
        relative w-full overflow-hidden group text-left
        border border-brand-gold/25 bg-black/30
        ${extraClass || "aspect-[3/4] md:aspect-square"}
      `}
    >
      <Image
        src={ev.main_image}
        alt={ev.title}
        fill
        className="object-cover transition-transform duration-[3500ms] ease-out group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-black/40 backdrop-blur-sm pointer-events-none" />

      <div className="absolute bottom-6 left-6 pr-8 space-y-1">
        <p className="text-[10px] uppercase tracking-[0.22em] text-brand-gold/80 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
          Jard’or Exclusive
        </p>

        <h4 className="text-xl font-medium text-brand-cream drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
          {ev.title}
        </h4>

        <p className="text-[13px] text-brand-cream/90 leading-snug max-w-[85%] drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]">
          {ev.short_description}
        </p>
      </div>
    </motion.button>
  );

  const maxIndex = Math.max(0, events.length - perView);

  const goCardNext = () => {
    setCardIndex((i) => (i >= maxIndex ? 0 : i + 1));
  };

  const goCardPrev = () => {
    setCardIndex((i) => (i <= 0 ? maxIndex : i - 1));
  };

  const renderEventsCarousel = () => {
    if (events.length === 0) return null;
    if (events.length === 1) return renderEventCard(events[0], 0, "aspect-[5/2]");

    const showNav = events.length > perView;

    return (
      <div className="relative">
        {/* Track */}
        <div className="overflow-hidden" ref={containerRef}>
          <motion.div
            className="flex gap-6"
            initial={false}
            animate={{ x: slideWidth ? -cardIndex * (slideWidth + GAP) : 0 }}
            transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {events.map((ev, i) => (
              <div
                key={ev.id}
                style={{ width: slideWidth || undefined, flexShrink: 0 }}
              >
                {renderEventCard(ev, i, "aspect-[3/4] md:aspect-square")}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Arrows — only when more cards than perView */}
        {showNav && (
          <>
            <button
              type="button"
              onClick={goCardPrev}
              aria-label="Previous"
              className="
                absolute left-4 top-1/2 -translate-y-1/2 z-10
                h-11 w-11 flex items-center justify-center
                bg-black/50 border border-brand-gold/40 text-brand-gold
                hover:bg-brand-gold hover:text-black transition-all duration-200
              "
            >
              <ChevronLeft size={22} strokeWidth={1.4} />
            </button>
            <button
              type="button"
              onClick={goCardNext}
              aria-label="Next"
              className="
                absolute right-4 top-1/2 -translate-y-1/2 z-10
                h-11 w-11 flex items-center justify-center
                bg-black/50 border border-brand-gold/40 text-brand-gold
                hover:bg-brand-gold hover:text-black transition-all duration-200
              "
            >
              <ChevronRight size={22} strokeWidth={1.4} />
            </button>
          </>
        )}

        {/* Dots */}
        {showNav && (
          <div className="mt-6 flex items-center justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCardIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-0.5 transition-all duration-300 ${
                  i === cardIndex ? "w-28 bg-brand-gold" : "w-6 bg-brand-cream/35 hover:bg-brand-gold/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  // ✅ submit handler for modal (using server action)
  async function onSubmitModal(formData: FormData) {
    setPending(true);
    try {
      const next = await submitReservationAction(state, formData);
      setState(next);
    } finally {
      setPending(false);
    }
  }

  return (
    <>
      <section id="experience" className="relative py-20 md:py-28 bg-black text-brand-cream overflow-hidden">
        <ParallaxBackground />

        <div className="relative z-10 mb-14 max-w-4xl mx-auto">
          <SectionHeader
            eyebrow={header.eyebrow}
            title={header.title}
            subtitle={header.subtitle}
            align="center"
            className="px-6"
          />

          {header.content && (
            <div
              className="prose prose-invert text-center text-brand-cream/70 text-sm md:text-base mt-4 max-w-2xl mx-auto
                        prose-p:my-2 prose-strong:text-brand-gold prose-a:text-brand-gold"
              dangerouslySetInnerHTML={{ __html: header.content }}
            />
          )}
        </div>

        <div className="relative z-10 mt-10 max-w-7xl mx-auto px-6 md:px-10">
          {renderEventsCarousel()}

          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.9 }}
            className="mt-12 flex justify-center"
          >
            <ButtonGold href="#reservation">{header.button_text}</ButtonGold>
          </motion.div>
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {openEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-black/90 backdrop-blur-xl overflow-y-auto"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-label={openEvent.title}
          >
            {/* Fixed close button — always visible at top-right regardless of scroll */}
            <button
              ref={closeButtonRef}
              onClick={closeModal}
              aria-label="Close modal"
              className="fixed top-4 right-4 z-90 h-10 w-10 flex items-center justify-center rounded-full border border-brand-gold/50 bg-black/80 text-brand-gold hover:bg-brand-gold hover:text-black transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            >
              ✕
            </button>

            {/* pt-16 clears the fixed close button, pb-8 ensures submit btn reachable */}
            <div className="min-h-full flex items-start justify-center px-4 pt-16 pb-12 md:items-center md:py-10">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative w-full max-w-5xl bg-brand-green border border-brand-gold/30 p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8"
              onClick={(e) => e.stopPropagation()}
            >

              {/* LEFT */}
              <div className="flex flex-col space-y-6">
                <div>
                  <h3 className="text-3xl md:text-4xl text-brand-cream mb-3">{openEvent.title}</h3>
                  <p className="text-brand-cream/75 text-base md:text-lg max-w-xl leading-relaxed">
                    {openEvent.description || openEvent.short_description}
                  </p>
                </div>

                {(() => {
                  const imgs = getAllImages(openEvent);
                  return (
                    <div className="relative w-full aspect-square bg-black/70 overflow-hidden">
                      <Image src={imgs[slide]} alt={openEvent.title} fill className="object-cover transition-all duration-500" />

                      <div className="absolute bottom-4 inset-x-0 flex items-center justify-center gap-8">
                        <button
                          type="button"
                          onClick={prevSlide}
                          aria-label="Previous image"
                          className="h-12 w-12 rounded-full bg-black/40 border border-brand-gold/40 text-brand-gold flex items-center justify-center hover:bg-brand-gold hover:text-black transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
                        >
                          <ChevronLeft size={26} strokeWidth={1.3} />
                        </button>

                        <button
                          type="button"
                          onClick={nextSlide}
                          aria-label="Next image"
                          className="h-12 w-12 rounded-full bg-black/40 border border-brand-gold/40 text-brand-gold flex items-center justify-center hover:bg-brand-gold hover:text-black transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
                        >
                          <ChevronRight size={26} strokeWidth={1.3} />
                        </button>
                      </div>
                    </div>
                  );
                })()}

                <div className="flex justify-center gap-3 mt-2">
                  {getAllImages(openEvent).map((_, i) => (
                    <button
                      type="button"
                      key={i}
                      onClick={() => setSlide(i)}
                      aria-label={`Go to image ${i + 1}`}
                      aria-current={i === slide ? "true" : undefined}
                      className={`h-3 w-3 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold ${
                        i === slide ? "bg-brand-gold scale-110" : "bg-brand-cream/40"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* RIGHT — FORM (API) */}
              <div className="text-brand-cream space-y-7">
                <h3 className="uppercase text-sm tracking-[0.28em] text-brand-gold">Event Reservation</h3>

                <p className="text-xl font-light text-brand-cream">
                  Reserve for <span className="text-brand-gold">{openEvent.title}</span>
                </p>

                {/* STATUS */}
                {state.message && (
                  <div
                    className={`text-base border px-4 py-3 ${
                      state.ok
                        ? "border-emerald-500/40 text-emerald-200 bg-emerald-500/10"
                        : "border-red-500/40 text-red-200 bg-red-500/10"
                    }`}
                  >
                    {state.message}
                  </div>
                )}

                <form action={onSubmitModal} className="space-y-6 text-brand-cream">
                  {/* ✅ IMPORTANT: event_id injected */}
                  <input type="hidden" name="event_id" value={openEvent.id} />

                  <div>
                    <label htmlFor="ev-name" className="block mb-2 text-base md:text-lg tracking-wider text-brand-cream/70">Name</label>
                    <input id="ev-name" name="name" type="text" required
                      className="w-full bg-transparent border border-brand-gold/40 px-4 py-2 text-base md:text-lg text-brand-cream focus:border-brand-gold focus:ring-0 focus:outline-none"
                    />
                    {state.errors?.name && <p className="mt-1 text-sm text-red-300">{state.errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="ev-phone" className="block mb-2 text-base md:text-lg tracking-wider text-brand-cream/70">Phone</label>
                    <input id="ev-phone" name="phone" type="tel" required
                      className="w-full bg-transparent border border-brand-gold/40 px-4 py-2 text-base md:text-lg text-brand-cream focus:border-brand-gold focus:ring-0 focus:outline-none"
                    />
                    {state.errors?.phone && <p className="mt-1 text-sm text-red-300">{state.errors.phone}</p>}
                  </div>

                  <div>
                    <label htmlFor="ev-email" className="block mb-2 text-base md:text-lg tracking-wider text-brand-cream/70">Email</label>
                    <input id="ev-email" name="email" type="email" required
                      className="w-full bg-transparent border border-brand-gold/40 px-4 py-2 text-base md:text-lg text-brand-cream focus:border-brand-gold focus:ring-0 focus:outline-none"
                    />
                    {state.errors?.email && <p className="mt-1 text-sm text-red-300">{state.errors.email}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="ev-date" className="block mb-2 text-base md:text-lg text-brand-cream/70">Date</label>
                      <input id="ev-date" name="reservation_date" type="date" required min={minDate}
                        className="w-full bg-transparent border border-brand-gold/40 px-4 py-2 text-base md:text-lg text-brand-cream focus:border-brand-gold focus:ring-0 focus:outline-none date-gold"
                      />
                      {state.errors?.reservation_date && <p className="mt-1 text-sm text-red-300">{state.errors.reservation_date}</p>}
                    </div>
                    <div>
                      <label htmlFor="ev-time" className="block mb-2 text-base md:text-lg text-brand-cream/70">Time</label>
                      <input id="ev-time" name="reservation_time" type="time" required step={60}
                        className="w-full bg-transparent border border-brand-gold/40 px-4 py-2 text-base md:text-lg text-brand-cream focus:border-brand-gold focus:ring-0 focus:outline-none time-gold"
                      />
                      {state.errors?.reservation_time && <p className="mt-1 text-sm text-red-300">{state.errors.reservation_time}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="ev-guests" className="block mb-2 text-base md:text-lg text-brand-cream/70">Number of Guests</label>
                    <input id="ev-guests" name="guests" type="number" min={1} required
                      className="w-full bg-transparent border border-brand-gold/40 px-4 py-2 text-base md:text-lg text-brand-cream focus:border-brand-gold focus:ring-0 focus:outline-none"
                    />
                    {state.errors?.guests && <p className="mt-1 text-sm text-red-300">{state.errors.guests}</p>}
                  </div>

                  <div>
                    <label htmlFor="ev-notes" className="block mb-2 text-base md:text-lg text-brand-cream/70">Notes / Requests</label>
                    <textarea id="ev-notes" name="notes"
                      className="w-full bg-transparent border border-brand-gold/40 px-4 py-2 text-base md:text-lg text-brand-cream h-28 resize-none focus:border-brand-gold focus:ring-0 focus:outline-none"
                    />
                  </div>

                  <button
                    id="gtm-event-reserve-submit"
                    type="submit"
                    disabled={pending}
                    className="w-full px-6 py-3 border border-brand-gold text-brand-gold tracking-widest text-sm hover:bg-brand-gold hover:text-black transition uppercase disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {pending ? "Submitting..." : "Submit Reservation"}
                  </button>
                </form>
              </div>
            </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}