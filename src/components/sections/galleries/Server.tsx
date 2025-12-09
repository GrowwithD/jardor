"use server";

import { getGalleryCategories, getGalleryImages } from "@/lib/fetchers";
import GalleriesClient from "@/components/sections/galleries/Client";

export default async function GalleriesSection() {
    const categories = await getGalleryCategories();

    const selectedCategory = categories?.[0]?.id ?? null;

    const images = selectedCategory
        ? await getGalleryImages(selectedCategory)
        : [];

        console.log(images);


    return (
        <GalleriesClient
            categories={categories || []}
            initialImages={images || []}
            initialCategory={selectedCategory}
        />
    );
}