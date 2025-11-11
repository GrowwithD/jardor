"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function ContactSection() {
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
                {/* LEFT — Contact Info */}
                <div className="space-y-7">
                    <h2 className="font-serif text-xl md:text-2xl tracking-[0.12em] text-brand-gold uppercase">
                        Reach Our Team
                    </h2>

                    <p className="text-[12px] md:text-[14px] text-brand-cream/80 leading-relaxed max-w-md">
                        Whether it’s a reservation inquiry, partnership proposal, or
                        event collaboration — we’d love to hear from you.
                    </p>

                    <div className="space-y-5 text-[12px] md:text-[13px]">
                        <div>
                            <p className="uppercase tracking-[0.18em] text-brand-gold/80 text-[9px] mb-1">
                                Address
                            </p>
                            <p className="text-brand-cream/88">
                                Jalan Raya Nusa Dua Selatan No.8,
                                Nusa Dua, Bali – Indonesia
                            </p>
                        </div>

                        <div>
                            <p className="uppercase tracking-[0.18em] text-brand-gold/80 text-[9px] mb-1">
                                Email
                            </p>
                            <a
                                href="mailto:info@jardor.com"
                                className="inline-flex items-center gap-2 text-brand-cream/88 hover:text-brand-gold transition-colors"
                            >
                                <span>info@jardor.com</span>
                                <span className="text-[13px]">↗</span>
                            </a>
                        </div>

                        <div>
                            <p className="uppercase tracking-[0.18em] text-brand-gold/80 text-[9px] mb-1">
                                Phone / WhatsApp
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

                {/* RIGHT — Contact Form */}
                <form
                    onSubmit={handleSubmit}
                    className="rounded-3xl border border-brand-gold/18 bg-linear-to-b from-black/94 via-[#050907] to-black/98 px-8 py-10 shadow-[0_22px_70px_rgba(0,0,0,0.98)] space-y-5"
                >
                    <p className="uppercase text-[11px] tracking-[0.22em] text-brand-gold/80">
                        Send us a message
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                        <input
                            required
                            name="name"
                            placeholder="Your Name*"
                            className="bg-black/70 border border-brand-gold/25 rounded-xl px-3 py-2.5 text-[12px] text-brand-cream placeholder:text-brand-cream/30 focus:outline-none focus:border-brand-gold/70"
                        />
                        <input
                            required
                            name="email"
                            type="email"
                            placeholder="Your Email*"
                            className="bg-black/70 border border-brand-gold/25 rounded-xl px-3 py-2.5 text-[12px] text-brand-cream placeholder:text-brand-cream/30 focus:outline-none focus:border-brand-gold/70"
                        />
                    </div>

                    <input
                        name="subject"
                        placeholder="Subject (optional)"
                        className="w-full bg-black/70 border border-brand-gold/25 rounded-xl px-3 py-2.5 text-[12px] text-brand-cream placeholder:text-brand-cream/30 focus:outline-none focus:border-brand-gold/70"
                    />

                    <textarea
                        required
                        name="message"
                        rows={5}
                        placeholder="Your Message* — inquiry, feedback, or request."
                        className="w-full bg-black/70 border border-brand-gold/25 rounded-2xl px-3 py-2.5 text-[12px] text-brand-cream placeholder:text-brand-cream/30 focus:outline-none focus:border-brand-gold/70 resize-none"
                    />

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center justify-center rounded-full px-8 py-2.5 text-[11px] uppercase tracking-[0.22em] bg-brand-gold text-black hover:bg-brand-gold/90 transition-all disabled:bg-brand-gold/40"
                    >
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </button>

                    {submitted && (
                        <p className="pt-2 text-[11px] text-brand-gold/85">
                            Thank you! We’ll respond to your message shortly.
                        </p>
                    )}
                </form>
            </motion.div>
        </section>
    );
}