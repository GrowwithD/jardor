"use client";

import HeroGallery from "@/components//HeroGallery";
import GalleryGrid from "@/components//GalleryGrid";

export default function GalleryPage() {
    return (
        <div className="text-brand-cream bg-brand-green">
            <HeroGallery />
            <div className="bg-black">
                <GalleryGrid />
            </div>
        </div>
    );
}