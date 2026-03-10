// src/app/reservation/page.tsx
import ReservationSection from "@/components/sections/reservations/Server";
import { getSeoBySlug } from "@/data/seo";

// 🔥 SEO untuk Reservation Page
export async function generateMetadata() {
    return getSeoBySlug("reservation");
}

export default function ReservationPage() {
    return (
        <main>
            <ReservationSection />
        </main>
    );
}
