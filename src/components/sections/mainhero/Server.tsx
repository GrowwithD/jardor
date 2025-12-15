// components/sections/mainhero/Server.tsx
import { getMainHero } from "@/lib/fetchers";
import Client from "@/components/sections/mainhero/Client";

export default async function MainHeroServer() {
    const hero = await getMainHero();

    console.log(hero);


    const data = {
        images: hero?.images?.length ? hero.images : [],
        eyebrow: hero?.eyebrow ?? "A Night of French Festivities",
        title: hero?.title ?? "Welcome to JARD'OR",
        subtitle:
            hero?.subtitle ??
            "Discover an authentic taste of French cuisine in Bali, inspired by Southern France.",
        chope_link: hero?.chope_link ?? "https://cho.pe/s70otkn6g",
    };

    return <Client {...data} />;
}