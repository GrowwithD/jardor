"use client";

import PageHero from "@/components/organisms/PageHero";

export default function CareerHero() {
    return (
        <PageHero
            image="/images/about.png" // ganti nanti kalau ada foto ambience staf/dining area
            alt="Join Jard’or Team"
            eyebrow="Work With Passion"
            title="Careers"
            subtitle="Join a team where craftsmanship meets passion — where every service is a performance of art, detail, and hospitality."
        />
    );
}