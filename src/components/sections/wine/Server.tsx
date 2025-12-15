"use server";

import { getWineTasting } from "@/lib/fetchers";
import WineClient from "@/components/sections/wine/Client";

type WineTastingType = {
    eyebrow: string;
    title: string;
    subtitle: string;
    content: string;
    images: string[];
    pdf: string | null;
};

export default async function WineTastingSection() {
    const data = await getWineTasting();

    const wt: WineTastingType = {
        eyebrow: data?.eyebrow ?? "Wine Tasting & Pairings",
        title: data?.title ?? "A Journey Through Cellar & Glass",
        subtitle: data?.subtitle ?? "",
        content: data?.content ?? "",
        images: Array.isArray(data?.images) ? data.images : [],
        pdf: data?.pdf ?? null,
    };

    return <WineClient wt={wt} />;
}