// app/menus/page.tsx
import type { Metadata } from "next";

import MenusList from "@/components/MenusList";
import CtaSection from "@/components/CtaSection";
import { getSeoBySlug } from "@/data/seo";

// SEO untuk Menus Page
export const metadata: Metadata = getSeoBySlug("menus");

export default function MenusPage() {
    return (
        <div className="text-brand-cream bg-black">
            <div className="">
                <MenusList />
            </div>
            <CtaSection />
        </div>
    );
}
