import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getCampaign } from "@/lib/fetchers";
import { proxyCmsUrl } from "@/lib/proxy-url";
import { CalendarDays, ArrowLeft } from "lucide-react";

export const revalidate = 60;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const c = await getCampaign(slug);
    if (!c) return { title: "Not Found | Jard'or" };

    return {
        title: `${c.title} | Jard'or Restaurant`,
        description: c.description ?? undefined,
        openGraph: c.image
            ? { images: [{ url: proxyCmsUrl(c.image) }] }
            : undefined,
    };
}

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

export default async function CampaignDetailPage({ params }: Props) {
    const { slug } = await params;
    const c = await getCampaign(slug);

    if (!c) notFound();

    const imageUrl = proxyCmsUrl(c.image);
    const dateRange = formatDateRange(c.start_date, c.end_date);

    return (
        <main className="min-h-screen bg-brand-black text-brand-cream">

            {/* ── HERO ─────────────────────────────────── */}
            <section className="relative h-[55vh] md:h-[65vh] w-full overflow-hidden">
                {imageUrl ? (
                    <Image
                        src={imageUrl}
                        alt={c.title}
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover"
                    />
                ) : (
                    <div className="absolute inset-0 bg-brand-green/40" />
                )}

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-black/40 to-black/20" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

                {/* Hero text */}
                <div className="absolute bottom-0 left-0 px-6 md:px-16 pb-10 md:pb-16 max-w-3xl">
                    {c.tagline && (
                        <p className="text-[10px] uppercase tracking-[0.35em] text-brand-gold/80 mb-3">
                            {c.tagline}
                        </p>
                    )}
                    <h1 className="font-optima text-3xl md:text-5xl text-brand-cream leading-tight tracking-wide">
                        {c.title}
                    </h1>
                    {dateRange && (
                        <p className="mt-4 flex items-center gap-2 text-sm text-brand-cream/55">
                            <CalendarDays size={14} strokeWidth={1.5} />
                            {dateRange}
                        </p>
                    )}
                </div>
            </section>

            {/* ── CONTENT ──────────────────────────────── */}
            <section className="mx-auto max-w-3xl px-6 md:px-8 py-16 md:py-24">

                {/* Back */}
                <Link
                    href="/promos"
                    className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em]
                               text-brand-gold/60 hover:text-brand-gold transition-colors mb-12"
                >
                    <ArrowLeft size={13} strokeWidth={1.5} />
                    All Campaigns
                </Link>

                {/* Short description */}
                {c.description && (
                    <p className="text-brand-cream/70 text-lg leading-relaxed mb-10 border-l-2
                                  border-brand-gold/30 pl-5">
                        {c.description}
                    </p>
                )}

                {/* Divider */}
                <div className="h-px w-full bg-brand-gold/15 mb-10" />

                {/* Rich content */}
                {c.content && (
                    <div
                        className="
                            prose prose-invert prose-sm md:prose-base max-w-none
                            prose-headings:font-optima prose-headings:text-brand-cream
                            prose-headings:tracking-wide prose-headings:font-normal
                            prose-p:text-brand-cream/70 prose-p:leading-relaxed
                            prose-strong:text-brand-gold prose-strong:font-normal
                            prose-li:text-brand-cream/70
                            prose-a:text-brand-gold hover:prose-a:text-brand-cream
                        "
                        dangerouslySetInnerHTML={{ __html: c.content }}
                    />
                )}

                {/* CTA */}
                <div className="mt-16 flex flex-col sm:flex-row gap-4">
                    <Link
                        href="/reservations"
                        className="inline-flex items-center justify-center gap-2 px-8 py-3.5
                                   bg-brand-gold text-black text-[11px] uppercase tracking-[0.22em]
                                   hover:bg-brand-cream transition-colors"
                    >
                        Reserve a Table
                    </Link>
                    <Link
                        href="/promos"
                        className="inline-flex items-center justify-center gap-2 px-8 py-3.5
                                   border border-brand-gold/40 text-brand-gold
                                   text-[11px] uppercase tracking-[0.22em]
                                   hover:border-brand-gold hover:bg-brand-gold/5 transition-colors"
                    >
                        View All Promos
                    </Link>
                </div>

            </section>

        </main>
    );
}
