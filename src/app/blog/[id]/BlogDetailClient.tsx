// src/app/blog/[slug]/BlogDetailClient.tsx
"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/data/blogPosts";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
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
    transition: { staggerChildren: 0.08, ease: "easeOut" },
  },
};

export function BlogDetailClient({ post }: { post: BlogPost }) {
  const dateLabel = new Date(`${post.date}T00:00:00Z`).toLocaleDateString(
    "en-GB",
    {
      day: "2-digit",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }
  );

  const paragraphs =
    post.longDescription
      ?.split(/\n{2,}/)
      .map((p) => p.trim())
      .filter(Boolean) ?? [];

  return (
    <section className="relative pt-32 md:pt-40 pb-28 bg-gradient-to-b from-[#050807] via-[#030404] to-black">
      {/* Subtle glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[radial-gradient(circle,rgba(200,169,107,0.08),transparent_70%)] opacity-40 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-[8px] md:text-[9px] uppercase tracking-[0.22em] text-brand-cream/55 flex gap-1 mb-6"
        >
          <Link href="/" className="hover:text-brand-gold/90 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            href="/blog"
            className="hover:text-brand-gold/90 transition-colors"
          >
            Journal
          </Link>
          <span>/</span>
          <span className="text-brand-gold/90 line-clamp-1">{post.title}</span>
        </motion.nav>

        {/* Hero Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="relative w-full h-[300px] md:h-[460px] rounded-3xl overflow-hidden border border-brand-gold/20 shadow-[0_24px_80px_rgba(0,0,0,0.9)] mb-12"
        >
          <Image
            src={post.hero}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />

          <div className="absolute bottom-8 left-8 right-8">
            <p className="text-[9px] uppercase tracking-[0.22em] text-brand-gold/80 mb-1">
              Jard’or Journal · {post.tag}
            </p>
            <h1 className="font-serif text-2xl md:text-4xl text-brand-cream leading-snug mb-2">
              {post.title}
            </h1>
            <p className="text-[9px] text-brand-cream/70">
              {dateLabel} · {post.readingTime}
            </p>
          </div>
        </motion.div>

        {/* Short Intro */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-[12px] md:text-[13px] text-brand-cream/80 leading-relaxed max-w-3xl mx-auto text-center mb-10 italic"
        >
          {post.shortIntro}
        </motion.p>

        {/* Main Article */}
        <motion.article
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="prose prose-invert max-w-none space-y-7 md:space-y-8"
        >
          {paragraphs.map((p, i) => (
            <motion.p
              key={i}
              variants={fadeInUp}
              className="text-[12px] md:text-[13px] text-brand-cream/85 leading-relaxed tracking-wide"
            >
              {p}
            </motion.p>
          ))}




        </motion.article>





        {/* Footer CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 mt-12 border-t border-brand-gold/10">
          <Link
            href="/blog"
            className="text-[9px] uppercase tracking-[0.22em] text-brand-cream/55 hover:text-brand-gold/85 transition-colors"
          >
            ← Back to Journal
          </Link>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/menus"
              className="px-5 py-2 rounded-full border border-brand-gold/40 text-[9px] uppercase tracking-[0.18em] text-brand-gold/90 hover:bg-brand-gold/10 transition-all"
            >
              Explore Menus
            </Link>
            <Link
              href="/events"
              className="px-5 py-2 rounded-full border border-brand-gold/20 text-[9px] uppercase tracking-[0.18em] text-brand-cream/80 hover:text-brand-gold hover:border-brand-gold/50 transition-all"
            >
              View Events
            </Link>
            <Link
              href="/reservation"
              className="px-5 py-2 rounded-full bg-brand-gold text-black text-[9px] uppercase tracking-[0.2em] hover:bg-brand-gold/90 transition-all"
            >
              Reserve
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}