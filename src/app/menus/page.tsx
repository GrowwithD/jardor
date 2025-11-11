"use client";

import HeroMenu from "@/components//HeroMenu";
import MenusList from "@/components//MenusList";
import CtaSection from "@/components/CtaSection";

export default function MenusPage() {
    return (
        <div className="text-brand-cream bg-brand-green">
            <HeroMenu />
            <MenusList />
            <CtaSection />
        </div>
    );
}