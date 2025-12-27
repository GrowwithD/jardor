"use server";

import { getInstagramImages } from "@/lib/fetchers";
import SocialClient from "@/components/sections/social/Client";

export default async function SocialSection() {
    const data = await getInstagramImages(true).catch(() => []);

    const feed = Array.isArray(data)
        ? data
              .sort((a: any, b: any) => a.position - b.position)
              .slice(0, 6)
              .map((item: any) => ({
                  id: item.id,
                  image: item.image,
                  url: item.instagram_url || "https://instagram.com/jardorbali",
              }))
        : [];

    return (
        <SocialClient
            feed={feed}
            instagramUrl="https://instagram.com/jardorbali"
        />
    );
}