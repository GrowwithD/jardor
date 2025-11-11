"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ReservationContact() {
    return (
        <section className="max-w-5xl mx-auto px-5 py-16">
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="rounded-3xl border border-brand-gold/16 bg-linear-to-b from-black/88 via-[#07100B]/98 to-black/96 px-6 py-8 shadow-[0_18px_60px_rgba(0,0,0,0.95)] space-y-5"
            >
                <h2 className="font-serif text-lg tracking-[0.12em] text-brand-gold uppercase">
                    Reservation Concierge
                </h2>
                <p className="text-[9px] md:text-[10px] text-brand-cream/75 leading-relaxed">
                    For bespoke arrangements—chef&apos;s table, private dining, or celebrations—our team is available to assist directly.
                </p>

                <div className="grid md:grid-cols-3 gap-5 text-[9px] md:text-[10px]">
                    <div>
                        <p className="uppercase tracking-[0.18em] text-brand-gold/80 text-[8px] mb-1">
                            WhatsApp
                        </p>
                        <a
                            href="https://wa.me/6281234567890"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-brand-cream/88 hover:text-brand-gold transition-colors"
                        >
                            <span>+62 812-3456-7890</span>
                            <span className="text-[11px]">↗</span>
                        </a>
                    </div>

                    <div>
                        <p className="uppercase tracking-[0.18em] text-brand-gold/80 text-[8px] mb-1">
                            Email
                        </p>
                        <a
                            href="mailto:reservation@jardor.com"
                            className="inline-flex items-center gap-2 text-brand-cream/88 hover:text-brand-gold transition-colors"
                        >
                            <span>reservation@jardor.com</span>
                            <span className="text-[11px]">↗</span>
                        </a>
                    </div>

                    <div>
                        <p className="uppercase tracking-[0.18em] text-brand-gold/80 text-[8px] mb-1">
                            Book via Chope
                        </p>
                        <Link
                            href="#"
                            className="inline-flex items-center gap-2 text-brand-gold/90 hover:text-brand-gold underline underline-offset-4 decoration-brand-gold/40 text-[9px]"
                        >
                            <span>Reserve instantly through Chope</span>
                            <span className="text-[11px]">↗</span>
                        </Link>
                    </div>
                </div>

                <p className="pt-3 border-t border-brand-gold/10 text-[8px] text-brand-cream/55 leading-relaxed">
                    Smart elegant attire is appreciated. Families are welcome for early seatings. For late evenings, our concierge may suggest preferred timings.
                </p>
            </motion.div>
        </section>
    );
}