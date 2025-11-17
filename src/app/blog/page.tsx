// src/app/blog/page.tsx
import BlogHero from "@/components/BlogHero";
import BlogList from "@/components/BlogList";

export default function BlogPage() {
  return (
    <main className="bg-black text-brand-cream">
      <BlogHero />
      <BlogList />
    </main>
  );
}