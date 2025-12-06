"use server";

import { getAboutJardor } from "@/lib/fetchers";
import AboutJardorClient from "@/components/sections/aboutjardor/Client";

export default async function AboutJardorSection() {
    const data = await getAboutJardor();



    const about = {
        eyebrow: data?.eyebrow ,
        title: data?.title ,
        subtitle:
            data?.subtitle,
        content:
            data?.content,

        // images array — fallback ke default 3 gambar
        images: Array.isArray(data?.images) && data.images.length > 0
            ? data.images
            : [
            ],
    };

    console.log(about);




    return <AboutJardorClient about={about} />;
}