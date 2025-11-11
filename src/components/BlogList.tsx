// src/components/BlogList.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";

const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function BlogList() {
    return (
        <section className="relative bg-gradient-to-b from-[#020303] via-black to-[#020303] py-16 md:py-20">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[540px] h-[260px] bg-[radial-gradient(circle,rgba(200,169,107,0.08),transparent_80%)] opacity-70 blur-3xl" />
            </div>

            <div className="relative max-w-6xl mx-auto px-6">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    className="space-y-8"
                >
                    {/* Intro */}
                    <div className="space-y-3 text-center">
                        <p className="text-[9px] md:text-[10px] uppercase tracking-[0.26em] text-brand-gold/75">
                            Jard&apos;or Journal
                        </p>
                        <h2 className="font-serif text-2xl md:text-3xl text-brand-cream tracking-[0.14em] uppercase">
                            From Inside Jard&apos;or
                        </h2>
                        <p className="max-w-2xl mx-auto text-[10px] md:text-xs text-brand-cream/70 leading-relaxed">
                            Notes from the pass, cellar, and garden — curated for guests who
                            enjoy the details behind the experience.
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid gap-6 md:gap-7 md:grid-cols-3">
                        {blogPosts.map((post) => (
                            <motion.article
                                key={post.slug}
                                whileHover={{ y: -4, scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 200, damping: 22 }}
                                className="group relative flex flex-col overflow-hidden rounded-2xl border border-brand-gold/12 bg-gradient-to-b from-black/96 via-[#050806]/98 to-black/98 shadow-[0_18px_60px_rgba(0,0,0,0.96)]"
                            >
                                <div className="relative h-40 w-full overflow-hidden">
                                    <Image
                                        src={post.hero}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-[900ms] group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                                    <div className="absolute top-3 left-3 flex items-center gap-2">
                                        <span className="px-2 py-0.5 rounded-full bg-black/70 border border-brand-gold/40 text-[8px] uppercase tracking-[0.16em] text-brand-gold">
                                            {post.tag}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-1 flex-col px-4 pt-3.5 pb-4 space-y-2">
                                    <p className="text-[8px] text-brand-cream/50 uppercase tracking-[0.18em]">
                                        {new Date(post.date).toLocaleDateString("en-GB", {
                                            day: "2-digit",
                                            month: "short",
                                            year: "numeric",
                                        })}{" "}
                                        · {post.readingTime}
                                    </p>

                                    <h3 className="font-serif text-[13px] md:text-sm text-brand-cream leading-snug group-hover:text-brand-gold transition-colors">
                                        {post.title}
                                    </h3>

                                    <p className="text-[9px] md:text-[10px] text-brand-cream/70 leading-relaxed line-clamp-3">
                                        {post.shortIntro}
                                    </p>

                                    <div className="mt-auto pt-2">
                                        <Link
                                            href={`/blog/${post.id}`}
                                            className="inline-flex items-center gap-1 text-[8px] uppercase tracking-[0.18em] text-brand-gold/88 group-hover:text-brand-gold transition-colors"
                                        >
                                            <span>Read Journal Entry</span>
                                            <span className="text-[10px] -translate-y-px">↗</span>
                                        </Link>
                                    </div>
                                </div>

                                <div className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent group-hover:border-brand-gold/18 group-hover:shadow-[0_0_40px_rgba(200,169,107,0.18)] transition-all duration-500" />
                            </motion.article>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}