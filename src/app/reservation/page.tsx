// src/app/reservation/page.tsx
import MapSection from "@/components/MapSection";
import ReservationHero from "@/components/ReservationHero";
import ReservationSection from "@/components/ReservationDetailsSection";
import { getSeoBySlug } from "@/data/seo";

// 🔥 SEO untuk Reservation Page
export async function generateMetadata() {
    return getSeoBySlug("reservation");
}

export default function ReservationPage() {
    return (
        <main className="bg-black text-brand-cream">
            {/* HERO */}
            <ReservationHero />

            {/* CONTACT / CONCIERGE */}
            <ReservationSection />

            {/* MAP (reuse from About) */}
            <MapSection />
        </main>
    );
}