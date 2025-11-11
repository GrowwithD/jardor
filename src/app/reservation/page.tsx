import MapSection from "@/components/MapSection";
import ReservationHero from "@/components/ReservationHero";
import ReservationSection from "@/components/ReservationSection";

export default function ReservationPage() {
    return (
        <main className="bg-black text-brand-cream pb-20">
            {/* HERO */}
            <ReservationHero />

            {/* CONTACT / CONCIERGE */}
            <ReservationSection />

            {/* MAP (reuse from About) */}
            <MapSection />
        </main>
    );
}