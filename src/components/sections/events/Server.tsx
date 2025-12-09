"use server";

import { getEvents, getEventsSection } from "@/lib/fetchers";
import EventsClient from "@/components/sections/events/Client";

export default async function EventsSection() {
    const eventsData = await getEvents(); // GET EVENTS FROM GRAPHQL
    const sectionData = await getEventsSection(); // GET EVENTS HEADER SECTION


    const events = eventsData?.length
        ? eventsData
        : [
            {
                id: "fallback-1",
                title: "Wine Tasting",
                short_description: "Journey through cellar & glass",
                description:
                    "A curated tasting guided by our sommelier. Explore French and European selections.",
                main_image: "/images/winetasting/winetasting1.JPG",
                gallery_images: [],
            },
        ];

    const header = {
        eyebrow: sectionData?.eyebrow ?? "Events & Experiences",
        title: sectionData?.title ?? "Events & French Culinary Experiences",
        subtitle:
            sectionData?.subtitle ??
            "Perfect for romantic dinners, private buyouts, birthdays, and celebrations.",
        content: sectionData?.content ?? "",
        button_text: sectionData?.button_text ?? "Reserve for an Event",
    };





    return <EventsClient events={events} header={header} />;
}