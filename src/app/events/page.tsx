// app/events/page.tsx
import HeroEvents from "@/components/EventHero";
import EventsList from "@/components/EventsList";
import { getSeoBySlug } from "@/data/seo";

// 🔥 Tambahkan SEO metadata
export async function generateMetadata() {
    return getSeoBySlug("events");
}

export default function EventsPage() {
    return (
        <div className="text-brand-cream bg-brand-green">
            <HeroEvents />
            <EventsList />
        </div>
    );
}