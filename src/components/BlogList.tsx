"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { blogPosts } from "@/data/blogPosts";
import BatikSectionLayout from "@/components/layouts/BatikSectionLayout";
import SectionHeader from "@/components/molecules/SectionHeader";
import BlogCard from "@/components/molecules/BlogCard";
import BlogPagination from "@/components/molecules/BlogPagination";

const POSTS_PER_PAGE = 6;

export default function BlogList() {
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        AOS.init({
            duration: 900,
            easing: "ease-out-cubic",
            once: true,
        });
    }, []);

    const totalPages = Math.max(1, Math.ceil(blogPosts.length / POSTS_PER_PAGE));
    const safePage = Math.min(Math.max(currentPage, 1), totalPages);
    const startIndex = (safePage - 1) * POSTS_PER_PAGE;
    const paginatedPosts = blogPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);

        if (typeof window !== "undefined") {
            const section = document.getElementById("blog-list-section");
            if (section) {
                const top = section.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top, behavior: "smooth" });
            }
        }
    };

    return (
        <BatikSectionLayout>
            <div id="blog-list-section" className="space-y-12">
                {/* HEADER */}
                <div className="max-w-5xl mx-auto">
                    <SectionHeader
                        eyebrow="Jard’or Journal"
                        title="Stories, Cellar Notes & Reflections"
                        subtitle="A curated collection of updates, behind-the-scenes notes, and narratives from the kitchen, cellar, and garden lounge of Jard’or."
                        align="center"
                    />
                </div>

                {/* GRID + PAGINATION */}
                <div className="max-w-6xl mx-auto px-5 space-y-10">
                    {/* Grid of posts */}
                    <div className="mt-6 md:mt-10 grid gap-6 md:gap-7 md:grid-cols-3">
                        {paginatedPosts.map((post, index) => (
                            <BlogCard key={post.id} post={post} index={index} />
                        ))}

                        {paginatedPosts.length === 0 && (
                            <p className="col-span-full text-center text-[11px] text-brand-cream/60">
                                No stories available yet.
                            </p>
                        )}
                    </div>

                    {/* Pagination */}
                    <BlogPagination
                        currentPage={safePage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </BatikSectionLayout>
    );
}