"use client";

import HeroGallery from "@/components//HeroGallery";
import GalleryGrid from "@/components//GalleryGrid";

export default function GalleryPage() {
    return (
       <div className="bg-black text-brand-cream pb-20">
            <HeroGallery />
            <div className="bg-black">
                <GalleryGrid />
            </div>
        </div>
    );
}