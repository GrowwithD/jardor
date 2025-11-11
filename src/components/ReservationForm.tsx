"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ReservationForm() {
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
        <section className="max-w-5xl mx-auto px-5 py-10">
            <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                onSubmit={handleSubmit}
                className="rounded-3xl border border-brand-gold/18 bg-linear-to-b from-black/94 via-[#050907] to-black/98 px-6 py-8 shadow-[0_22px_70px_rgba(0,0,0,0.98)] space-y-4"
            >
                <p className="uppercase text-[8px] tracking-[0.22em] text-brand-gold/80">
                    Request a curated reservation
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                    <input
                        required
                        name="name"
                        placeholder="Full Name*"
                        className="bg-black/70 border border-brand-gold/20 rounded-xl px-3 py-2 text-[9px] text-brand-cream placeholder:text-brand-cream/25 focus:outline-none focus:border-brand-gold/70"
                    />
                    <input
                        required
                        name="whatsapp"
                        placeholder="WhatsApp Number*"
                        className="bg-black/70 border border-brand-gold/20 rounded-xl px-3 py-2 text-[9px] text-brand-cream placeholder:text-brand-cream/25 focus:outline-none focus:border-brand-gold/70"
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <input
                        name="email"
                        placeholder="Email Address (optional)"
                        className="bg-black/70 border border-brand-gold/20 rounded-xl px-3 py-2 text-[9px] text-brand-cream placeholder:text-brand-cream/25 focus:outline-none focus:border-brand-gold/70"
                    />
                    <input
                        name="guests"
                        type="number"
                        min={1}
                        placeholder="Number of Guests*"
                        required
                        className="bg-black/70 border border-brand-gold/20 rounded-xl px-3 py-2 text-[9px] text-brand-cream placeholder:text-brand-cream/25 focus:outline-none focus:border-brand-gold/70"
                    />
                </div>

                <textarea
                    required
                    name="message"
                    rows={4}
                    placeholder="Short Message* — dietary notes, special request, celebration, or seating preference."
                    className="w-full bg-black/70 border border-brand-gold/20 rounded-2xl px-3 py-2 text-[9px] text-brand-cream placeholder:text-brand-cream/25 focus:outline-none focus:border-brand-gold/70 resize-none"
                />

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center rounded-full px-7 py-2 text-[8px] uppercase tracking-[0.22em] bg-brand-gold text-black hover:bg-brand-gold/90 transition-all disabled:bg-brand-gold/40"
                >
                    {isSubmitting ? "Sending..." : "Submit Reservation Request"}
                </button>

                {submitted && (
                    <p className="pt-2 text-[8px] text-brand-gold/85">
                        Thank you! Our concierge will follow up shortly via WhatsApp.
                    </p>
                )}
            </motion.form>
        </section>
    );
}