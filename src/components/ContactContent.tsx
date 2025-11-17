"use client";

import { useState } from "react";
import Link from "next/link";
import ButtonGold from "@/components/atoms/ButtonGold";
import BatikSectionLayout from "@/components/layouts/BatikSectionLayout";
import SectionHeader from "@/components/molecules/SectionHeader";

export default function ContactContent() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isSubmitting) return;

        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            (e.target as HTMLFormElement).reset();
        }, 1200);
    };

    return (
        <BatikSectionLayout>
            {/* HEADER */}
            <div className="max-w-5xl mx-auto">
                <SectionHeader
                    eyebrow="Contact"
                    title="Connect With Jard’or"
                    subtitle="For reservations, collaborations, or private events — our team is here to assist and curate the right experience for your visit."
                    align="center"
                />
            </div>

            {/* GRID */}
            <div
                className="
          max-w-6xl mx-auto px-6 mt-16
          grid grid-cols-1 md:grid-cols-2 gap-14 items-start
        "
            >
                {/* LEFT INFO */}
                <div
                    className="
            space-y-7
            text-base
            text-brand-cream/82
            leading-relaxed
          "
                    data-aos="fade-right"
                    data-aos-duration="900"
                    data-aos-easing="ease-out-cubic"
                    data-aos-once="true"
                >
                    <h3 className="font-optima text-base tracking-[0.14em] text-brand-gold uppercase">
                        Reach Our Team
                    </h3>

                    <p className="max-w-md">
                        Whether it’s a reservation inquiry, partnership proposal, or
                        event collaboration — we’d love to hear from you.
                    </p>

                    <div className="space-y-5">
                        {/* ADDRESS */}
                        <div>
                            <p className="uppercase tracking-[0.18em] text-brand-gold/80 text-[9px] mb-1">
                                Address
                            </p>
                            <p className="text-brand-cream/88">
                                Jalan Raya Nusa Dua Selatan No.8,
                                <br />
                                Nusa Dua, Bali – Indonesia
                            </p>
                        </div>

                        {/* EMAIL */}
                        <div>
                            <p className="uppercase tracking-[0.18em] text-brand-gold/80 text-[9px] mb-1">
                                Email
                            </p>
                            <a
                                href="mailto:info@jardor.com"
                                className="inline-flex items-center gap-2 text-brand-cream/88 hover:text-brand-gold transition-colors"
                            >
                                info@jardor.com
                                <span className="text-[13px]">↗</span>
                            </a>
                        </div>

                        {/* PHONE */}
                        <div>
                            <p className="uppercase tracking-[0.18em] text-brand-gold/80 text-[9px] mb-1">
                                Phone / WhatsApp
                            </p>
                            <a
                                href="https://wa.me/6281234567890"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-brand-cream/88 hover:text-brand-gold transition-colors"
                            >
                                +62 812-3456-7890
                                <span className="text-[13px]">↗</span>
                            </a>
                        </div>

                        {/* IG */}
                        <div>
                            <p className="uppercase tracking-[0.18em] text-brand-gold/80 text-[9px] mb-1">
                                Instagram
                            </p>
                            <Link
                                href="https://instagram.com/jardor.bali"
                                target="_blank"
                                className="inline-flex items-center gap-2 text-brand-gold/90 hover:text-brand-gold underline underline-offset-4 decoration-brand-gold/40"
                            >
                                @jardor.bali
                            </Link>
                        </div>
                    </div>
                </div>

                {/* RIGHT — FORM */}
                <form
                    onSubmit={handleSubmit}
                    className="

            border border-brand-gold/40

            p-8
            backdrop-blur-sm
            space-y-5
            ring-1 ring-brand-gold/10
            hover:ring-brand-gold/25
            transition
          "
                    data-aos="fade-left"
                    data-aos-duration="900"
                    data-aos-delay="120"
                    data-aos-easing="ease-out-cubic"
                    data-aos-once="true"
                >
                    <p className="text-eyebrow">Send us a message</p>

                    <p className="text-[12px] text-brand-cream/70 leading-relaxed">
                        Share a brief note about your request — reservations, private
                        events, or collaborations. Our team will respond personally.
                    </p>

                    {/* NAME & EMAIL */}
                    <div className="grid md:grid-cols-2 gap-4">
                        <input
                            required
                            name="name"
                            placeholder="Your Name*"
                            className="

                border border-brand-gold/40

                px-3 py-2.5
                text-[12px]
                text-brand-cream
                placeholder:text-brand-cream/30
                focus:border-brand-gold
                focus:ring-0
                outline-none
                transition-all
              "
                        />

                        <input
                            required
                            name="email"
                            type="email"
                            placeholder="Your Email*"
                            className="

                border border-brand-gold/40

                px-3 py-2.5
                text-[12px]
                text-brand-cream
                placeholder:text-brand-cream/30
                focus:border-brand-gold
                focus:ring-0
                outline-none
                transition-all
              "
                        />
                    </div>

                    {/* SUBJECT */}
                    <input
                        name="subject"
                        placeholder="Subject (optional)"
                        className="
              w-full

              border border-brand-gold/40

              px-3 py-2.5
              text-[12px]
              text-brand-cream
              placeholder:text-brand-cream/30
              focus:border-brand-gold
              focus:ring-0
              outline-none
              transition-all
            "
                    />

                    {/* MESSAGE */}
                    <textarea
                        required
                        name="message"
                        rows={5}
                        placeholder="Your Message* — inquiry, feedback, or request."
                        className="
              w-full

              border border-brand-gold/40

              px-3 py-2.5
              text-[12px]
              text-brand-cream
              placeholder:text-brand-cream/30
              focus:border-brand-gold
              focus:ring-0
              outline-none
              resize-none
              transition-all
            "
                    />

                    {/* SUBMIT BUTTON — polymorphic ButtonGold */}
                    <ButtonGold type="submit" className="mt-2">
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </ButtonGold>

                    {submitted && (
                        <p className="pt-2 text-[11px] text-brand-gold/85">
                            Thank you! We’ll respond to your message shortly.
                        </p>
                    )}
                </form>
            </div>
        </BatikSectionLayout>
    );
}