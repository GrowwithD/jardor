"use server";

import { getWineTasting } from "@/lib/fetchers";
import WineClient from "@/components/sections/wine/Client";

export default async function WineTastingSection() {
    const data = await getWineTasting();



    const wt = {
        eyebrow: data?.eyebrow ?? "Wine Tasting & Pairings",
        title: data?.title ?? "A Journey Through Cellar & Glass",
        subtitle: data?.subtitle ?? "",
        content: data?.content ?? "",
        images: data.images,
    };

    return <WineClient wt={wt} />;
}