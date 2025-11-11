import HeroEvents from "@/components/HeroEvents";
import EventsList from "@/components/EventsList";

export default function EventsPage() {
    return (
        <div className="text-brand-cream bg-brand-green">
            <HeroEvents />
            <EventsList />
        </div>
    );
}