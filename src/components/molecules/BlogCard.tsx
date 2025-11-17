"use client";

import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/data/blogPosts";

type BlogCardProps = {
    post: BlogPost;
    index: number; // delay animasi AOS
};

export default function BlogCard({ post, index }: BlogCardProps) {
    return (
        <article
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-easing="ease-out-cubic"
            data-aos-delay={index * 120}
            className="
                group cursor-pointer relative overflow-hidden
                bg-[#0A0D0B]
                border border-brand-gold/14
                transition-all duration-500
            "
        >
            {/* Thumbnail */}
            {post.hero && (
                <div className="relative w-full h-40 md:h-48 overflow-hidden">
                    <Image
                        src={post.hero}
                        alt={post.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="
                            object-cover
                            transition-transform duration-4000
                            group-hover:scale-110
                        "
                    />

                </div>
            )}

            {/* Content */}
            <div className="relative px-4 pb-4 pt-3 space-y-2">
                <p className="text-[8px] md:text-[9px] uppercase tracking-[0.22em] text-brand-gold/75">
                    {new Date(`${post.date}T00:00:00Z`).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                        timeZone: "UTC",
                    })}
                </p>

                <h3 className="text-[13px] md:text-[14px] text-brand-cream tracking-[0.06em] leading-snug transition-colors group-hover:text-brand-gold">
                    {post.title}
                </h3>

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
        </article>
    );
}