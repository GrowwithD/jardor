import CareerOpenings from "@/components/CareerOpenings";
import CareerHero from "@/components/CareerHero";

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