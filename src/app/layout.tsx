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

export const metadata: Metadata = {
    title: "Jard’or Restaurant",
    description: "Un voyage de goût – Jard’or French Restaurant, Bali.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
            <body
                suppressHydrationWarning
                className="min-h-screen bg-brand-green text-brand-cream flex flex-col font-optima"
            >
                <Navbar />

                <main className="flex-1">{children}</main>

                <Footer />
            </body>
        </html>
    );
}