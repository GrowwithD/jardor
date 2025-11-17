// app/gallery/page.tsx
import HeroGallery from "@/components/GalleryHero";
import GalleryGrid from "@/components/GalleryGrid";
import { getSeoBySlug } from "@/data/seo";

// 🔥 SEO untuk halaman Gallery
export async function generateMetadata() {
    return getSeoBySlug("gallery");
}

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