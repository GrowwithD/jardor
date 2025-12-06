// app/page.tsx (atau app/(main)/page.tsx tergantung struktur kamu)
import type { Metadata } from "next";

import HeroSlider from "@/components/sections/mainhero/Server";
import MapSection from "@/components/MapSection";
import AboutJardorSection from "@/components/sections/aboutjardor/Server";
import LeGardenSection from "@/components/LeGardenSection";
import MenusList from "@/components/MenusList";
import WineTastingSection from "@/components/WineTastingSection";
import EventsExperiencesSection from "@/components/EventsExperiencesSection";
import GallerySection from "@/components/GallerySection";
import ReservationSection from "@/components/ReservationSection";
import SocialMediaSection from "@/components/SocialMediaSection";
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