import CareerOpenings from "@/components/CareerOpenings";
import MapSection from "@/components/MapSection";
import CareerHero from "@/components/CareerHero";
import CareerCultureSection from "@/components/CareerCultureSection";

export default function CareersPage() {
    return (
        <main className="bg-black text-brand-cream pb-20">
            {/* HERO */}
            <CareerHero />

            {/* CULTURE / PHILOSOPHY */}
            <CareerCultureSection />

            {/* OPENINGS */}
            <CareerOpenings />
        </main>
    );
}