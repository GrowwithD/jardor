"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CareerHero() {
  return (
    <section className="relative h-[360px] md:h-[420px] w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute inset-0"
      >
        <Image
          src="/images/about.png" // ganti sesuai ambience staf di dining area
          alt="Join Jard’or Team"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-b from-black/88 via-black/46 to-brand-green/96" />
        <div className="absolute inset-x-0 top-4 h-32 bg-[radial-gradient(circle_at_top,rgba(200,169,107,0.22),transparent_70%)] opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,transparent,rgba(0,0,0,0.6))] mix-blend-multiply" />
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
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="text-[10px] md:text-[11px] uppercase tracking-[0.26em] text-brand-gold/80"
          >
            Jard&apos;or Nusa Dua
          </motion.p>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 22 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl md:text-5xl tracking-[0.18em] text-brand-cream uppercase drop-shadow-[0_3px_8px_rgba(0,0,0,0.6)]"
          >
            Careers
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7 }}
            className="text-[11px] md:text-sm text-brand-cream/82 leading-relaxed"
          >
            Join a team where craftsmanship meets passion — where every service
            is a performance of art, detail, and hospitality.
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