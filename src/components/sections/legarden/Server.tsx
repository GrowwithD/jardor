"use server";

import { getLeGarden } from "@/lib/fetchers";
import LeGardenClient from "@/components/sections/legarden/Client";

export default async function LeGardenSection() {
    const data = await getLeGarden();

    const lg = {
        eyebrow: data?.eyebrow ?? "Le Garden — Cocktail Lounge",
        title: data?.title ?? "Where Evenings Bloom at Le Garden",
        subtitle: data?.subtitle ?? "",
        content: data?.content ?? "",
        images: Array.isArray(data?.images) ? data.images : [],
    };

    return <LeGardenClient lg={lg} />;
}