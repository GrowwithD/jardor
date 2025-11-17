"use client";

import PageHero from "@/components/organisms/PageHero";

export default function ReservationHero() {
    return (
        <PageHero
            image="/images/about.png" // ganti kalau nanti ada foto khusus reservation
            alt="Jard’or reservation experience"
            eyebrow="Reserve Your Evening"
            title="Reservations"
            subtitle="A refined dining experience by reservation only — share your details and our concierge will personally follow up to arrange your evening at Jard’or."
        />
    );
}