import ContactHero from "@/components/ContactHero";
import ContactSection from "@/components/ContactSection";
import MapSection from "@/components/MapSection";

export default function ContactPage() {
    return (
        <main className="bg-black text-brand-cream pb-20">
            {/* HERO */}
            <ContactHero />

            {/* CONTACT FORM & DETAILS */}
            <ContactSection />

            {/* MAP */}
            <MapSection />
        </main>
    );
}