// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-serif",
    display: "swap",
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-optima",
    display: "swap",
});

// bisa nanti ambil dari env: process.env.NEXT_PUBLIC_SITE_URL
const siteUrl = "https://jardor-bali.com";

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: "Jard’or Restaurant – French Dining in Nusa Dua, Bali",
        template: "%s | Jard’or Restaurant",
    },
    description: "Un voyage de goût – Jard’or French Restaurant, Bali.",
    alternates: {
        canonical: siteUrl,
    },
    openGraph: {
        type: "website",
        url: siteUrl,
        title: "Jard’or Restaurant – French Dining in Nusa Dua, Bali",
        description:
            "French-inspired tasting menus, curated wine pairings, and candlelit evenings in Nusa Dua, Bali.",
        siteName: "Jard’or Restaurant",
        locale: "en_ID",
        images: [
            {
                url: "/images/og-main.jpg", // siapin 1200x630
                width: 1200,
                height: 630,
                alt: "Jard’or Restaurant – French-inspired dining room in Nusa Dua, Bali",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Jard’or Restaurant – French Dining in Nusa Dua, Bali",
        description:
            "French-inspired tasting menus, curated wines, and quiet evenings in Nusa Dua, Bali.",
        images: ["/images/og-main.jpg"],
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const jsonLdRestaurant = {
        "@context": "https://schema.org",
        "@type": "Restaurant",
        name: "Jard’or Restaurant",
        image: `${siteUrl}/images/og-main.jpg`,
        url: siteUrl,
        telephone: "+62 812-0000-0000",
        servesCuisine: ["French", "European", "Fine Dining"],
        address: {
            "@type": "PostalAddress",
            streetAddress: "Jl. Example No. 1",
            addressLocality: "Nusa Dua",
            addressRegion: "Bali",
            postalCode: "80361",
            addressCountry: "ID",
        },
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                ],
                opens: "11:00",
                closes: "23:00",
            },
        ],
        priceRange: "$$",
        acceptsReservations: true,
        reservationUrl: `${siteUrl}/reservation`,
    };

    return (
        <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
            <body
                suppressHydrationWarning
                className="min-h-screen bg-brand-green text-brand-cream flex flex-col font-optima text-md scroll-smooth"
            >
                {/* JSON-LD global */}
                <script
                    type="application/ld+json"
                    suppressHydrationWarning
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdRestaurant) }}
                />
                <Navbar />
                <main className="flex-1">{children}</main>


 <div
            className="
                w-full
                h-24
                bg-brand-green
                bg-[url('/images/batik3.png')]
                bg-repeat
                bg-center
                opacity-60
                  bg-[length:420px_auto]
            "
        />

                <Footer />
            </body>
        </html>
    );
}