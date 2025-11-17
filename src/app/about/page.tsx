// app/about/page.tsx
import SommelierSection from "@/components/SommelierSection";
import ChefSection from "@/components/ChefSection";
import MapSection from "@/components/MapSection";
import AboutHero from "@/components/AboutHero";
import OurStorySection from "@/components/OurStorySection";
import { getSeoBySlug } from "@/data/seo";

// 🔥 SEO Dinamis untuk About Page
export async function generateMetadata() {
    return getSeoBySlug("about");
}

export default function AboutPage() {
    return (
        <main className="bg-black text-brand-cream">

            {/* HERO */}
            <AboutHero />

            {/* STORY */}
            <OurStorySection />

            {/* SOMMELIER */}
            <SommelierSection />

            {/* CHEF */}
            <ChefSection />

            {/* MAP */}
            <MapSection />
        </main>
    );
}