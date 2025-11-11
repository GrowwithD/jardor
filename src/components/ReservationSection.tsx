"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function ReservationSection() {
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
        }, 1000);
    };

    return (
        <section className="max-w-6xl mx-auto px-6 py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
            >
                {/* LEFT — CONTACT INFO */}
                <div className="space-y-8">
                    <h2 className="font-serif text-xl md:text-2xl tracking-[0.12em] text-brand-gold uppercase">
                        Reservation Concierge
                    </h2>

                    <p className="text-[11px] md:text-[13px] text-brand-cream/80 leading-relaxed max-w-md">
                        For bespoke arrangements — chef&apos;s table, private dining, or
                        celebrations — our team is available to assist directly.
                    </p>

                    <div className="space-y-6 text-[11px] md:text-[13px]">
                        <div>
                            <p className="uppercase tracking-[0.18em] text-brand-gold/80 text-[9px] mb-1">
                                WhatsApp
                            </p>
                            <a
                                href="https://wa.me/6281234567890"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 text-brand-cream/88 hover:text-brand-gold transition-colors"
                            >
                                <span>+62 812-3456-7890</span>
                                <span className="text-[13px]">↗</span>
                            </a>
                        </div>

                        <div>
                            <p className="uppercase tracking-[0.18em] text-brand-gold/80 text-[9px] mb-1">
                                Email
                            </p>
                            <a
                                href="mailto:reservation@jardor.com"
                                className="inline-flex items-center gap-2 text-brand-cream/88 hover:text-brand-gold transition-colors"
                            >
                                <span>reservation@jardor.com</span>
                                <span className="text-[13px]">↗</span>
                            </a>
                        </div>

                        <div>
                            <p className="uppercase tracking-[0.18em] text-brand-gold/80 text-[9px] mb-1">
                                Book via Chope
                            </p>
                            <Link
                                href="#"
                                className="inline-flex items-center gap-2 text-brand-gold/90 hover:text-brand-gold underline underline-offset-4 decoration-brand-gold/40"
                            >
                                <span>Reserve instantly through Chope</span>
                                <span className="text-[13px]">↗</span>
                            </Link>
                        </div>
                    </div>

                    <p className="pt-4 border-t border-brand-gold/10 text-[10px] md:text-[11px] text-brand-cream/60 leading-relaxed max-w-md">
                        Smart elegant attire is appreciated. Families are welcome for early
                        seatings. For late evenings, our concierge may suggest preferred
                        timings.
                    </p>
                </div>

                {/* RIGHT — FORM */}
                <form
                    onSubmit={handleSubmit}
                    className="rounded-3xl border border-brand-gold/18 bg-linear-to-b from-black/94 via-[#050907] to-black/98 px-8 py-10 shadow-[0_22px_70px_rgba(0,0,0,0.98)] space-y-5"
                >
                    <p className="uppercase text-[10px] md:text-[11px] tracking-[0.22em] text-brand-gold/80">
                        Request a curated reservation
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                        <input
                            required
                            name="name"
                            placeholder="Full Name*"
                            className="bg-black/70 border border-brand-gold/25 rounded-xl px-3 py-2.5 text-[11px] text-brand-cream placeholder:text-brand-cream/30 focus:outline-none focus:border-brand-gold/70"
                        />
                        <input
                            required
                            name="whatsapp"
                            placeholder="WhatsApp Number*"
                            className="bg-black/70 border border-brand-gold/25 rounded-xl px-3 py-2.5 text-[11px] text-brand-cream placeholder:text-brand-cream/30 focus:outline-none focus:border-brand-gold/70"
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <input
                            name="email"
                            placeholder="Email Address (optional)"
                            className="bg-black/70 border border-brand-gold/25 rounded-xl px-3 py-2.5 text-[11px] text-brand-cream placeholder:text-brand-cream/30 focus:outline-none focus:border-brand-gold/70"
                        />
                        <input
                            name="guests"
                            type="number"
                            min={1}
                            placeholder="Number of Guests*"
                            required
                            className="bg-black/70 border border-brand-gold/25 rounded-xl px-3 py-2.5 text-[11px] text-brand-cream placeholder:text-brand-cream/30 focus:outline-none focus:border-brand-gold/70"
                        />
                    </div>

                    <textarea
                        required
                        name="message"
                        rows={4}
                        placeholder="Short Message* — dietary notes, special request, celebration, or seating preference."
                        className="w-full bg-black/70 border border-brand-gold/25 rounded-2xl px-3 py-2.5 text-[11px] text-brand-cream placeholder:text-brand-cream/30 focus:outline-none focus:border-brand-gold/70 resize-none"
                    />

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center justify-center rounded-full px-8 py-2.5 text-[10px] md:text-[11px] uppercase tracking-[0.22em] bg-brand-gold text-black hover:bg-brand-gold/90 transition-all disabled:bg-brand-gold/40"
                    >
                        {isSubmitting ? "Sending..." : "Submit Reservation Request"}
                    </button>

                    {submitted && (
                        <p className="pt-2 text-[10px] text-brand-gold/85">
                            Thank you! Our concierge will follow up shortly via WhatsApp.
                        </p>
                    )}
                </form>
            </motion.div>
        </section>
    );
}