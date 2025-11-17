"use client";

import HeroGallery from "@/components/GalleryHero";
import GalleryGrid from "@/components//GalleryGrid";

export default function GalleryPage() {
    return (
       <div className="bg-black text-brand-cream">
            <HeroGallery />
            <div className="bg-black">
                <GalleryGrid />
            </div>
        </div>
    );
}