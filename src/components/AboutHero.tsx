"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative min-h-[580px] md:min-h-[640px] w-full overflow-hidden flex items-center py-28">
      {/* Background image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute inset-0"
      >
        <Image
          src="/images/about.png"
          alt="Jard’or dining room and open kitchen"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Global overlays */}
      <div className="absolute inset-0 bg-linear-to-b from-black/85 via-black/40 to-brand-green/95" />
      <div className="pointer-events-none absolute inset-0">
        {/* soft central gold glow */}
        <div className="absolute inset-x-0 top-10 h-40 bg-[radial-gradient(circle_at_center,rgba(200,169,107,0.25),transparent)] opacity-80" />
        {/* subtle top darkening */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,transparent,rgba(0,0,0,0.55))]" />
        {/* bottom-right gold bloom */}
        <div className="absolute -bottom-24 right-8 w-[260px] h-[260px] bg-[radial-gradient(circle,rgba(200,169,107,0.18),transparent_70%)] opacity-70 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="mx-auto max-w-5xl px-5 md:px-10 py-7 md:py-9 rounded-[28px] bg-black/40 md:bg-black/32 border border-brand-gold/14 backdrop-blur-[10px] shadow-[0_26px_90px_rgba(0,0,0,0.9)] text-center space-y-5"
        >
          {/* Eyebrow */}
          <p className="text-[9px] md:text-[10px] uppercase tracking-[0.26em] text-brand-gold/80">
            JARD&apos;OR NUSA DUA
          </p>

          {/* Title */}
          <h1 className="font-serif text-3xl md:text-4xl tracking-[0.18em] text-brand-cream uppercase">
            About Us
          </h1>

          {/* Divider */}
          <div className="flex justify-center">
            <div className="h-px w-16 md:w-24 bg-brand-gold/70" />
          </div>

          {/* Copy */}
          <div className="space-y-3 md:space-y-4 text-[10px] md:text-sm text-brand-cream/86 leading-relaxed">
            <p>
              Located in the heart of Nusa Dua Bali,{" "}
              <span className="text-brand-gold">JARD’OR</span> embodies the
              spirit of French refinement and the art of slow living. More than
              a restaurant, Jard’or is a sanctuary for those who appreciate
              life’s most exquisite pleasures — where gastronomy, wine, and
              ambiance come together in perfect harmony.
            </p>
            <p>
              Inspired by the timeless beauty of French gardens, Jard’or invites
              you to wander through an experience that delights every sense.
              Each plate tells a story — an elegant dialogue between classical
              French techniques and the island’s freshest ingredients, presented
              with artistry and passion.
            </p>
            <p>
              Our in-house sommelier curates a thoughtful wine selection from
              renowned vineyards across France and beyond, pairing each glass to
              elevate your culinary journey. For connoisseurs of refined taste,
              our cigar corner offers an intimate space to unwind — the aroma of
              fine tobacco mingling with the whispers of evening jazz and garden
              breeze.
            </p>
            <p>
              From romantic dinners beneath the stars to lively evenings in our
              garden lounge, Jard’or celebrates connection, flavor, and the
              beauty of shared moments. Here, every detail — from the plating to
              the playlist — is designed to transport you.
            </p>
            <p>
              At <span className="text-brand-gold">JARD’OR</span>, we invite you
              to experience <em>Un Voyage de Goût</em> — a journey of taste,
              elegance, and timeless indulgence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}