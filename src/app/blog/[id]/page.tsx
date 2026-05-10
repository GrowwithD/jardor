// src/app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts, getPostBySlug } from "@/data/blogPosts";
import { BlogDetailClient } from "./BlogDetailClient";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const post = getPostBySlug(id);
  if (!post) return { title: "Post Not Found | Jard'or" };
  const description = post.shortIntro ?? `Read ${post.title} on the Jard'or Journal.`;
  return {
    title: `${post.title} | Jard'or Journal`,
    description,
    openGraph: { title: post.title, description, type: "article" },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ id: post.id }));
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { id } = await params;
  const post = getPostBySlug(id);

  if (!post) notFound();

  return <BlogDetailClient post={post} />;
}