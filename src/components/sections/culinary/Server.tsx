"use server";

import { getCulinaryPhilosophy } from "@/lib/fetchers";
import CulinaryPhilosophyClient from "@/components/sections/culinary/Client";

export default async function CulinaryPhilosophySection() {
    const data = await getCulinaryPhilosophy();


    const cp = {
        eyebrow: data?.eyebrow ?? "Culinary Philosophy",
        title: data?.title ?? "A Timeless French Culinary Philosophy",
        subtitle: data?.subtitle ??
            "French cuisine blended with Balinese harmony.",
        content: data?.content ??
            "The Jard’Or kitchen celebrates classical French technique...",
        images: data?.images?.length ? data.images : [],
    };

    return <CulinaryPhilosophyClient cp={cp} />;
}