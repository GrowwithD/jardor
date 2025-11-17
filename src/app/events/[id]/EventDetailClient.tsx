"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import type { Event } from "./page";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerParent: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
      ease: "easeOut",
    },
  },
};

export function EventDetailClient({ event }: { event: Event }) {
  const date = new Date(`${event.date}T00:00:00Z`).toLocaleDateString(
    "en-GB",
    {
      day: "2-digit",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }
  );

  const paragraphs =
    event.longDescription?.split(/\n{2,}/).map((p) => p.trim()).filter(Boolean) ??
    [];

  return (
    <section className="relative pt-32 md:pt-40 pb-20 bg-linear-to-b from-[#050807] via-[#020303] to-black">
      {/* subtle background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[radial-gradient(circle,rgba(200,169,107,0.08),transparent_70%)] opacity-30 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-5 space-y-12">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-[8px] md:text-[9px] uppercase tracking-[0.22em] text-brand-cream/55 flex gap-1"
        >
          <Link href="/" className="hover:text-brand-gold/90 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            href="/events"
            className="hover:text-brand-gold/90 transition-colors"
          >
            Events
          </Link>
          <span>/</span>
          <span className="text-brand-gold/90 line-clamp-1">
            {event.title}
          </span>
        </motion.nav>

        {/* Hero image */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="relative w-full h-[280px] md:h-[420px] rounded-3xl overflow-hidden border border-brand-gold/20 shadow-[0_24px_80px_rgba(0,0,0,0.9)]"
        >
          <Image
            src={event.hero}
            alt={event.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
        </motion.div>

        {/* Header & meta */}
        <motion.div
          variants={staggerParent}
          initial="hidden"
          animate="visible"
          className="space-y-3 text-center"
        >
          <motion.p
            variants={fadeInUp}
            className="text-[8px] md:text-[9px] tracking-[0.26em] text-brand-gold/80 uppercase"
          >
            Jard&apos;or Signature Experience
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            className="text-2xl md:text-4xl lg:text-[42px] text-brand-cream tracking-[0.03em]"
          >
            {event.title}
          </motion.h1>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-2 text-[9px] md:text-[10px] text-brand-cream/75"
          >
            <span>{date}</span>
            <span className="text-brand-cream/35">•</span>
            <span>{event.location}</span>
          </motion.div>
        </motion.div>

        {/* Short intro */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-center text-[10px] md:text-[11px] leading-relaxed text-brand-cream/80 max-w-3xl mx-auto"
        >
          {event.shortIntro}
        </motion.p>

        {/* Full description */}
        {paragraphs.length > 0 && (
          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-3xl mx-auto space-y-4 md:space-y-5 text-[10px] md:text-[11px] leading-relaxed text-brand-cream/80"
          >
            {paragraphs.map((p, i) => (
              <motion.p key={i} variants={fadeInUp}>
                {p}
              </motion.p>
            ))}
          </motion.div>
        )}

        {/* Gallery grid */}
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="pt-8 space-y-3"
        >
          <motion.p
            variants={fadeInUp}
            className="text-[8px] md:text-[9px] uppercase tracking-[0.22em] text-brand-cream/55"
          >
            Visual Notes from the Experience
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {event.gallery.map((src, index) => (
              <motion.div
                key={`${event.id}-gallery-${index}`}
                variants={fadeInUp}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative h-24 md:h-32 lg:h-36 overflow-hidden rounded-2xl border border-brand-gold/14 bg-black/60 shadow-[0_10px_40px_rgba(0,0,0,0.95)]"
              >
                <Image
                  src={src}
                  alt={`${event.title} - ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Back button */}
        <div className="flex justify-center pt-10">
          <Link
            href="/events"
            className="text-[8px] md:text-[9px] uppercase tracking-[0.22em] text-brand-cream/55 hover:text-brand-gold/85 transition-colors"
          >
            ← Back to Events
          </Link>
        </div>
      </div>
    </section>
  );
}