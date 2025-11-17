"use client";

import PageHero from "@/components/organisms/PageHero";

export default function MenuHero() {
    return (
        <PageHero
            image="/images/about.png"
            alt="Jard’or tasting menu service"
            eyebrow="Culinary Journeys"
            title={<><span className='italic'>The</span> Menus</>}
            subtitle="A printed-menu inspired curation of our tasting journeys, signatures, pâtisserie, cellar, and cocktails — presented with quiet detail."
        />
    );
}