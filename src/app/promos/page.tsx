import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getCampaigns } from "@/lib/fetchers";
import { proxyCmsUrl } from "@/lib/proxy-url";
import { CalendarDays, ArrowRight } from "lucide-react";

export const revalidate = 60;

export const metadata: Metadata = {
    title: "Promos & Campaigns | Jard'or Restaurant",
    description:
        "Discover exclusive dining experiences, seasonal menus, and special campaigns at Jard'or Restaurant.",
};

function formatDateRange(start?: string | null, end?: string | null) {
    const fmt = (d: string) =>
        new Date(d).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    if (start && end) return `${fmt(start)} — ${fmt(end)}`;
    if (start) return `From ${fmt(start)}`;
    return null;
}

export default async function PromosPage() {
    const campaigns = await getCampaigns(true);

    return (
        <main className="min-h-screen bg-brand-black text-brand-cream">

            {/* ── HERO ─────────────────────────────────── */}
            <section className="relative flex flex-col items-center justify-center py-28 md:py-40 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(200,180,130,0.08)_0%,transparent_70%)] pointer-events-none" />

                <p className="text-[10px] md:text-[11px] uppercase tracking-[0.35em] text-brand-gold/70 mb-5">
                    Jard&apos;or Restaurant
                </p>

                <h1 className="font-optima text-4xl md:text-6xl text-center text-brand-cream leading-tight tracking-wide px-4">
                    Campaigns &amp; Promos
                </h1>

                <div className="mt-6 h-px w-20 bg-brand-gold/40" />

                <p className="mt-6 max-w-lg text-center text-brand-cream/60 text-sm md:text-base leading-relaxed px-6">
                    Exclusive dining experiences crafted for life&apos;s most meaningful moments.
                </p>
            </section>

            {/* ── CAMPAIGN GRID ────────────────────────── */}
            <section className="mx-auto max-w-6xl px-4 md:px-8 pb-32">

                {campaigns.length === 0 ? (
                    <p className="text-center text-brand-cream/40 py-20 text-sm tracking-widest uppercase">
                        No active campaigns at this time.
                    </p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {campaigns.map((c: any, i: number) => (
                            <CampaignCard key={c.id} campaign={c} index={i} />
                        ))}
                    </div>
                )}

            </section>

        </main>
    );
}

function CampaignCard({ campaign: c, index: i }: { campaign: any; index: number }) {
    const dateRange = formatDateRange(c.start_date, c.end_date);
    const imageUrl = proxyCmsUrl(c.image);

    return (
        <Link
            href={`/promos/${c.slug}`}
            className="group flex flex-col border border-brand-gold/15
                       hover:border-brand-gold/40 transition-colors duration-300 bg-white/[0.02]
                       hover:bg-white/[0.04]"
            style={{ animationDelay: `${i * 80}ms` }}
        >
            {/* IMAGE */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900">
                {imageUrl ? (
                    <Image
                        src={imageUrl}
                        alt={c.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 ease-out
                                   group-hover:scale-105"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-brand-gold/20 text-5xl tracking-widest font-light">J</span>
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            </div>

            {/* BODY */}
            <div className="flex flex-col flex-1 p-6">

                {c.tagline && (
                    <p className="text-[9px] uppercase tracking-[0.28em] text-brand-gold/70 mb-2">
                        {c.tagline}
                    </p>
                )}

                <h2 className="text-lg font-medium tracking-wide text-brand-cream
                               group-hover:text-brand-gold transition-colors leading-snug">
                    {c.title}
                </h2>

                {c.description && (
                    <p className="mt-3 text-sm text-brand-cream/55 leading-relaxed line-clamp-3">
                        {c.description}
                    </p>
                )}

                <div className="mt-auto pt-5 flex items-center justify-between">
                    {dateRange ? (
                        <span className="flex items-center gap-1.5 text-[11px] text-brand-cream/40">
                            <CalendarDays size={12} strokeWidth={1.5} />
                            {dateRange}
                        </span>
                    ) : (
                        <span />
                    )}

                    <span className="flex items-center gap-1 text-[11px] uppercase tracking-[0.18em]
                                     text-brand-gold/70 group-hover:text-brand-gold transition-colors">
                        View <ArrowRight size={12} strokeWidth={1.5} />
                    </span>
                </div>

            </div>
        </Link>
    );
}
