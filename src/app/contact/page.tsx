import ContactHero from "@/components/ContactHero";
import ContactSection from "@/components/ContactContent";
import MapSection from "@/components/MapSection";

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