"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroEvents() {
  return (
    <section className="relative h-[360px] md:h-[420px] w-full overflow-hidden">
      {/* Background */}
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute inset-0"
      >
        <Image
          src="/images/about.png"
          alt="Jard’or event ambience"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Overlay selaras hero lain */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-b from-black/88 via-black/46 to-brand-green/96" />
        <div className="absolute inset-x-0 top-4 h-32 bg-[radial-gradient(circle_at_top,rgba(200,169,107,0.22),transparent_70%)] opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,transparent,rgba(0,0,0,0.6))] mix-blend-multiply" />
        <div className="absolute -bottom-20 right-[8%] w-[220px] h-[220px] bg-[radial-gradient(circle,rgba(200,169,107,0.16),transparent_72%)] opacity-75 blur-3xl" />
        <div className="hidden md:block absolute bottom-[-60px] left-[5%] w-40 h-40 bg-[radial-gradient(circle,rgba(200,169,107,0.08),transparent_75%)] opacity-60 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="mx-auto max-w-4xl px-6 text-center space-y-3"
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5 }}
            className="text-[9px] md:text-[10px] uppercase tracking-[0.26em] text-brand-gold/80"
          >
            Jard&apos;or Nusa Dua
          </motion.p>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl md:text-5xl tracking-[0.18em] text-brand-cream uppercase drop-shadow-[0_3px_8px_rgba(0,0,0,0.6)]"
          >
            Events
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7 }}
            className="text-[10px] md:text-sm text-brand-cream/82 leading-relaxed"
          >
            Intimate collaborations, wine dinners, and seasonal celebrations —
            curated evenings that extend Jard’or beyond the everyday service.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, width: 0 },
              visible: { opacity: 1, width: 86 },
            }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
            className="mx-auto mt-1 h-px bg-brand-gold/70"
          />
        </motion.div>
      </div>
    </section>
  );
}