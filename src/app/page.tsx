// app/page.tsx (atau app/(main)/page.tsx tergantung struktur kamu)
import type { Metadata } from "next";

import HeroSlider from "@/components/MainHero";
import SommelierSection from "@/components/SommelierSection";
import HighlightsSection from "@/components/HighlightsSection";
import CtaSection from "@/components/CtaSection";
import MapSection from "@/components/MapSection";
import ChefSection from "@/components/ChefSection";
import AboutJardorSection from "@/components/AboutJardorSection";
import LeGardenSection from "@/components/LeGardenSection";
import MenusList from "@/components/MenusList";
import WineTastingSection from "@/components/WineTastingSection";
import EventsExperiencesSection from "@/components/EventsExperiencesSection";
import GallerySection from "@/components/GallerySection";
import ReservationSection from "@/components/ReservationSection";
import SocialMediaSection from "@/components/SocialMediaSection";
import CulinaryPhilosophySection from "@/components/CulinaryPhilosophySection";

import { getSeoBySlug } from "@/data/seo";

// ✅ SEO Home dari array
export const metadata: Metadata = getSeoBySlug("home");

export default function HomePage() {
    return (
        <>
            <HeroSlider />
            <AboutJardorSection />
            <div
                className="
                w-full
                h-24
                bg-brand-green
                bg-[url('/images/batik3.png')]
                bg-repeat
                bg-center
                opacity-60
                  bg-[length:420px_auto]
            "
            />
            <CulinaryPhilosophySection />
            <div
                className="
                w-full
                h-24
                bg-brand-green
                bg-[url('/images/batik3.png')]
                bg-repeat
                bg-center
                opacity-60
                  bg-[length:420px_auto]
            "
            />
            <LeGardenSection />
            <MenusList />
            <WineTastingSection />
            <EventsExperiencesSection />
            <GallerySection />
            <ReservationSection />
            <MapSection />
            <SocialMediaSection />
        </>
    );
}