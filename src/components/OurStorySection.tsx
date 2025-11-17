"use client";

import { motion } from "framer-motion";

export default function OurStorySection() {
    return (
        <section className="relative bg-gradient-to-b from-[#0D0F11] via-[#0A0C0E] to-black py-16">

            <div className="absolute inset-0">
                <div
                    className="
                            absolute inset-0
                            [transform:scaleX(-1)]
                        "
                >
                    <div
                        className="
                                absolute inset-0
                                bg-[url('/images/batik1.png')]
                                bg-repeat
                                bg-[length:420px_auto]  /* ukuran tile biar rapih */
                                opacity-5
                            "
                    />
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 text-center" data-aos="fade-up">

                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 px-4 py-1.5 bg-black/20 backdrop-blur-sm mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                    <span className="text-eyebrow">Our Story</span>
                </div>

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    The Essence of Jard’or
                </motion.h2>

                {/* Divider */}
                <div className="flex justify-center my-5">
                    <motion.span
                        className="block h-px bg-brand-gold/70"
                        initial={{ width: 0 }}
                        whileInView={{ width: 82 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    />
                </div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    viewport={{ once: true }}
                    className="space-y-6 text-[10px] md:text-xs text-brand-cream/80 leading-relaxed"
                >
                    <p>
                        Located in the heart of Nusa Dua Bali, JARD’OR embodies the spirit
                        of French refinement and the art of slow living. More than a
                        restaurant, Jard’or is a sanctuary for those who appreciate life’s
                        most exquisite pleasures — where gastronomy, wine, and ambiance
                        come together in perfect harmony.
                    </p>

                    <p>
                        Inspired by the timeless beauty of French gardens, Jard’or invites
                        you to wander through an experience that delights every sense.
                        Each plate tells a story — an elegant dialogue between classical
                        French techniques and the island’s freshest ingredients, presented
                        with artistry and passion.
                    </p>

                    <p>
                        Our in-house sommelier curates a thoughtful wine selection from
                        renowned vineyards across France and beyond, pairing each glass to
                        elevate your culinary journey. For connoisseurs of refined taste,
                        our cigar corner offers an intimate space to unwind — the aroma of
                        fine tobacco mingling with the whispers of evening jazz and garden
                        breeze.
                    </p>

                    <p>
                        From romantic dinners beneath the stars to lively evenings in our
                        garden lounge, Jard’or celebrates connection, flavor, and the
                        beauty of shared moments. Here, every detail — from the plating to
                        the playlist — is designed to transport you.
                    </p>

                    <p>
                        At JARD’OR, we invite you to experience <span className="italic">Un Voyage de Goût</span> —
                        a journey of taste, elegance, and timeless indulgence.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}