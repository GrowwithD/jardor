// src/components/BlogDetailHero.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { BlogPost } from "@/data/blogPosts";

export default function BlogDetailHero({ post }: { post: BlogPost }) {
  return (
    <section className="relative h-[320px] md:h-[380px] w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute inset-0"
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-brand-green/96" />
        <div className="absolute inset-x-0 top-6 h-28 bg-[radial-gradient(circle_at_top,rgba(200,169,107,0.22),transparent_70%)] opacity-80" />
        <div className="absolute -bottom-24 right-[10%] w-[220px] h-[220px] bg-[radial-gradient(circle,rgba(200,169,107,0.16),transparent_75%)] opacity-70 blur-3xl" />
      </div>

      <div className="relative z-10 flex h-full items-end">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-5xl px-6 pb-8 space-y-3"
        >
          <p className="text-[8px] md:text-[9px] uppercase tracking-[0.26em] text-brand-gold/85">
            Jard&apos;or Journal · {post.tag}
          </p>

          <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl text-brand-cream leading-snug">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-[8px] md:text-[9px] text-brand-cream/70">
            <span>
              {new Date(post.date).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "long",
                year: "numeric"
              })}
            </span>
            <span className="w-[1px] h-3 bg-brand-cream/30" />
            <span>{post.readingTime}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}