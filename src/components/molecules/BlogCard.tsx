"use client";

import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/data/blogPosts";

type BlogCardProps = {
    post: BlogPost;
    index: number; // buat delay AOS
};

export default function BlogCard({ post, index }: BlogCardProps) {
    return (
        <article
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-easing="ease-out-cubic"
            data-aos-delay={index * 120} // 0, 120, 240, ...
            className="
        group relative overflow-hidden rounded-lg
        bg-linear-to-b from-black/94 via-[#050806]/98 to-black/98
        border border-brand-gold/14
        shadow-[0_18px_60px_rgba(0,0,0,0.95)]
        transition-all duration-500
        hover:border-brand-gold/55
        hover:shadow-[0_0_34px_rgba(200,169,107,0.22)]
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
                    {post.readingTime ? ` • ${post.readingTime}` : ""}
                </p>

                <h3 className="text-[13px] md:text-[14px] text-brand-cream tracking-[0.06em] leading-snug group-hover:text-brand-gold transition-colors">
                    {post.title}
                </h3>

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
        </article>
    );
}