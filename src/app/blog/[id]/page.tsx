// src/app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug } from "@/data/blogPosts";
import { BlogDetailClient } from "./BlogDetailClient";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ id: post.id }));
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { id } = await params;
  const post = getPostBySlug(id);

  if (!post) notFound();

  return <BlogDetailClient post={post} />;
}