"use server";

import { getGalleryCategories, getGalleryImages } from "@/lib/fetchers";
import GalleriesClient from "@/components/sections/galleries/Client";

export default async function GalleriesSection() {
    const [categories, images] = await Promise.all([
        getGalleryCategories(),
        getGalleryImages(),
    ]);

    const allCategories = categories || [];

    // Parallel-check each category for images — filters out empty tabs
    const categoryChecks = await Promise.all(
        allCategories.map((cat) =>
            getGalleryImages(cat.id).then((imgs) => ({ cat, hasImages: imgs.length > 0 }))
        )
    );
    const filteredCategories = categoryChecks
        .filter((x) => x.hasImages)
        .map((x) => x.cat);

    return (
        <GalleriesClient
            categories={filteredCategories}
            initialImages={images || []}
        />
    );
}