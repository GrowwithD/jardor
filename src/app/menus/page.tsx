// app/menus/page.tsx
import type { Metadata } from "next";

import MenusListSection from "@/components/sections/menu/Server";
import CtaSection from "@/components/CtaSection";
import { getSeoBySlug } from "@/data/seo";

// SEO untuk Menus Page
export const metadata: Metadata = getSeoBySlug("menus");

export default function MenusPage() {
    return (
        <div className="text-brand-cream bg-black">
                <MenusListSection />
            <CtaSection />
        </div>
    );
}
