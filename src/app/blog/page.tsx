// src/app/blog/page.tsx
import BlogHero from "@/components/BlogHero";
import BlogList from "@/components/BlogList";
import { getSeoBySlug } from "@/data/seo";

// 🔥 SEO Dinamis untuk Blog Page
export async function generateMetadata() {
  return getSeoBySlug("blog");
}

export default function BlogPage() {
  return (
    <main className="bg-black text-brand-cream">
      <BlogHero />
      <BlogList />
    </main>
  );
}