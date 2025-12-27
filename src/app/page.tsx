// app/page.tsx (atau app/(main)/page.tsx tergantung struktur kamu)
import type { Metadata } from "next";

import HeroSlider from "@/components/sections/mainhero/Server";
import MapSection from "@/components/MapSection";
import AboutJardorSection from "@/components/sections/aboutjardor/Server";
import LeGardenSection from "@/components/sections/legarden/Server";
import MenusList from "@/components/sections/menu/Server";
import WineTastingSection from "@/components/sections/wine/Server";
import EventsExperiencesSection from "@/components/sections/events/Server";
import GallerySection from "@/components/sections/galleries/Server";
import ReservationSection from "@/components/sections/reservations/Server";
import SocialMediaSection from "@/components/sections/social/Server";
import CulinaryPhilosophySection from "@/components/sections/culinary/Server";
import BatikLine from "@/components/atoms/BatikLine";

import { getSeoBySlug } from "@/data/seo";

export const metadata: Metadata = getSeoBySlug("home");

export default function HomePage() {
    return (
        <>
            <HeroSlider />

            <AboutJardorSection />

            <BatikLine />

            <CulinaryPhilosophySection />

            <BatikLine />

            <LeGardenSection />

            <BatikLine />

            <MenusList />

            <WineTastingSection />

            <EventsExperiencesSection />

            <BatikLine />

            <GallerySection />

            <BatikLine />

            <ReservationSection />

            <MapSection />

            <SocialMediaSection />
                    <BatikLine />
        </>
    );
}