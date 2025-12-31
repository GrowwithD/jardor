// app/layout.tsx
export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "default-no-store";

import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import NYEPopup from "@/components/NYEPopup";
import { getScriptTags } from "@/lib/fetchers";

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
const siteUrl = "https://jardor.com";

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
                url: "/images/og-main.jpg",
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

/**
 * Render script dari snippet CMS.
 *
 * - Kalau snippet TIDAK mengandung <script> tag → dianggap JS murni, dibungkus 1 <script>.
 * - Kalau snippet MENGANDUNG <script ...>...</script> → kita parse dan buat <script> satu-satu,
 *   termasuk support src / async / defer.
 */
function renderScriptsFromSnippet(
    snippet: string | null | undefined,
    keyPrefix: string,
) {
    const code = (snippet ?? "").trim();
    if (!code) return null;

    const scriptRegex = /<script([^>]*)>([\s\S]*?)<\/script>/gi;

    // 🚫 Ganti [...code.matchAll()] → while loop biar gak perlu downlevelIteration
    const matches: RegExpExecArray[] = [];
    let match: RegExpExecArray | null;
    while ((match = scriptRegex.exec(code)) !== null) {
        matches.push(match);
    }

    // Tidak ada <script> di dalam snippet → treat as inline JS
    if (matches.length === 0) {
        return (
            <script
                key={keyPrefix}
                suppressHydrationWarning
                dangerouslySetInnerHTML={{ __html: code }}
            />
        );
    }

    // Ada satu atau lebih <script> tag → pecah jadi beberapa React <script>
    return matches.map((m, index) => {
        const attrs = m[1] ?? "";
        const inner = (m[2] ?? "").trim();

        const srcMatch = attrs.match(/src=["']([^"']+)["']/i);
        const hasAsync = /\basync\b/i.test(attrs);
        const hasDefer = /\bdefer\b/i.test(attrs);

        const commonProps: any = {
            key: `${keyPrefix}-${index}`,
            suppressHydrationWarning: true,
        };

        // External script
        if (srcMatch) {
            return (
                <script
                    {...commonProps}
                    src={srcMatch[1]}
                    async={hasAsync || undefined}
                    defer={hasDefer || undefined}
                />
            );
        }

        // Inline script
        return (
            <script
                {...commonProps}
                dangerouslySetInnerHTML={{ __html: inner }}
            />
        );
    });
}

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // ==========================
    // Ambil script tags dari CMS
    // ==========================
    const scripts = await getScriptTags(true); // activeOnly = true

    const headScripts = scripts
        .filter((s: any) => s.location === "head")
        .sort((a: any, b: any) => a.position - b.position);

    const footerScripts = scripts
        .filter((s: any) => s.location === "footer")
        .sort((a: any, b: any) => a.position - b.position);

    // ==========================
    // JSON-LD global
    // ==========================
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
        <html
            lang="en"
            className={`${playfair.variable} ${inter.variable}`}
        >
            <head>
                {/* SCRIPT DARI CMS UNTUK <head> */}
                {headScripts.flatMap((tag: any) =>
                    renderScriptsFromSnippet(tag.code, `head-${tag.id}`),
                )}
            </head>

            <body
                suppressHydrationWarning
                className="min-h-screen bg-brand-green text-brand-cream flex flex-col font-optima text-md scroll-smooth"
            >
                {/* JSON-LD global */}
                <script
                    type="application/ld+json"
                    suppressHydrationWarning
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(jsonLdRestaurant),
                    }}
                />

                <Navbar />
                <NYEPopup />

                <main className="flex-1">{children}</main>

                <WhatsAppFloating />
                <Footer />

                {/* SCRIPT DARI CMS UNTUK FOOTER (sebelum </body>) */}
                {footerScripts.flatMap((tag: any) =>
                    renderScriptsFromSnippet(tag.code, `foot-${tag.id}`),
                )}
            </body>
        </html>
    );
}