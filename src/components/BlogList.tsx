"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blogPosts";


// Variants tanpa tipe strict, dan kita cast as any saat dipakai.
// Ini yang bikin build aman.
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function BlogList() {
  return (
    <section className="relative bg-linear-to-b from-[#0B1C13] via-[#050806] to-[#020303] py-16">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[6%] left-1/2 -translate-x-1/2 w-[780px] h-[780px] bg-[radial-gradient(circle,rgba(200,169,107,0.06),transparent_75%)] blur-3xl opacity-35" />
        <div className="absolute bottom-0 w-full h-[140px] bg-linear-to-t from-black via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 space-y-10">
        {/* Heading */}
        <motion.div
             variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="text-center space-y-3"
        >
          <p className="text-[9px] md:text-[10px] uppercase tracking-[0.26em] text-brand-gold/80">
            Jard&apos;or Journal
          </p>
          <h1 className="font-serif text-3xl md:text-4xl tracking-[0.14em] text-brand-cream uppercase">
            Stories, Cellar Notes &amp; Reflections
          </h1>
          <p className="max-w-2xl mx-auto text-[10px] md:text-[11px] text-brand-cream/78 leading-relaxed">
            A curated collection of updates, behind-the-scenes notes, and narratives
            from the kitchen, cellar, and garden lounge of Jard&apos;or.
          </p>
        </motion.div>

        {/* Grid of posts */}
        <motion.div
          variants={stagger as any}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid gap-6 md:gap-7 md:grid-cols-3"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={fadeIn as any}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.99 }}
              className="
                group relative overflow-hidden rounded-2xl
                bg-linear-to-b from-black/94 via-[#050806]/98 to-black/98
                border border-brand-gold/14
                shadow-[0_18px_60px_rgba(0,0,0,0.95)]
                transition-all duration-400
                hover:border-brand-gold/55
                hover:shadow-[0_0_30px_rgba(200,169,107,0.22)]
              "
            >
              {/* Thumbnail */}
              {post.hero && (
                <div className="relative w-full h-32 md:h-36 overflow-hidden">
                  <Image
                    src={post.hero}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[900ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                </div>
              )}

              {/* Content */}
              <div className="relative px-4 pb-4 pt-3 md:px-4 md:pb-4 md:pt-3.5 space-y-2">
                <p className="text-[8px] md:text-[9px] uppercase tracking-[0.22em] text-brand-gold/75">
                  {new Date(`${post.date}T00:00:00Z`).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                    timeZone: "UTC",
                  })}
                  {post.readingTime ? ` • ${post.readingTime}` : null}
                </p>

                <h2 className="font-serif text-[13px] md:text-[14px] text-brand-cream tracking-[0.06em] leading-snug group-hover:text-brand-gold transition-colors">
                  {post.title}
                </h2>

                {post.shortIntro && (
                  <p className="text-[9px] md:text-[10px] text-brand-cream/78 leading-relaxed line-clamp-3">
                    {post.shortIntro}
                  </p>
                )}

                <Link
                  href={`/blog/${post.id}`}
                  className="
                    inline-flex items-center gap-1 mt-1.5
                    text-[8px] uppercase tracking-[0.18em]
                    text-brand-gold/90 group-hover:text-brand-gold
                    transition-colors
                  "
                >
                  <span>Read Story</span>
                  <span className="text-[10px] -translate-y-px">↗</span>
                </Link>
              </div>

              {/* Hover frame */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent group-hover:border-brand-gold/18 group-hover:shadow-[0_0_34px_rgba(200,169,107,0.18)] transition-all duration-400" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}