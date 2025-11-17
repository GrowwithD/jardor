import SommelierSection from "@/components/SommelierSection";
import ChefSection from "@/components/ChefSection";
import MapSection from "@/components/MapSection";
import AboutHero from "@/components/AboutHero";
import OurStorySection from "@/components/OurStorySection";

export default function AboutPage() {
    return (
        <main className="bg-black text-brand-cream pb-20">

            {/* HERO */}
            <AboutHero />

            {/* OUR STORY */}
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