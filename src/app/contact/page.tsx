// src/app/contact/page.tsx

import ContactHero from "@/components/ContactHero";
import ContactSection from "@/components/ContactContent";
import MapSection from "@/components/MapSection";
import { getSeoBySlug } from "@/data/seo";

// 🔥 SEO untuk Contact Page
export async function generateMetadata() {
    return getSeoBySlug("contact");
}

export default function ContactPage() {
    return (
        <main className="bg-black text-brand-cream">
            {/* HERO */}
            <ContactHero />

            {/* CONTACT FORM & DETAILS */}
            <ContactSection />

            {/* MAP */}
            <MapSection />
        </main>
    );
}