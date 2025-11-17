// src/app/careers/page.tsx
import CareerOpenings from "@/components/CareerOpenings";
import CareerHero from "@/components/CareerHero";
import { getSeoBySlug } from "@/data/seo";

// 🔥 SEO untuk Careers Page
export async function generateMetadata() {
    return getSeoBySlug("careers");
}

export default function CareersPage() {
    return (
        <main className="bg-black text-brand-cream">
            {/* HERO */}
            <CareerHero />

            {/* OPENINGS */}
            <CareerOpenings />
        </main>
    );
}