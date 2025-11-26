"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CulinaryPhilosophySection() {
    return (
        <section
            id="culinary"
            className="relative bg-black text-brand-cream overflow-hidden"
        >
            {/* PARALLAX BG */}
            <div
                className="
                    absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat
                    opacity-[0.16] mix-blend-lighten
                "
                style={{
                    backgroundImage: "url('/images/parallax/parallax1.jpg')",
                }}
            />

            {/* GOLD GLOW */}
            <div className="pointer-events-none absolute inset-0">
                <div
                    className="
                        absolute left-1/2 -translate-x-1/2 top-0
                        w-[900px] h-[900px]
                        bg-[radial-gradient(circle,rgba(200,169,107,0.16),transparent_70%)]
                        blur-3xl opacity-35
                    "
                />
            </div>

            {/* ======= FULL WIDTH GRID ======= */}
            <div className="relative w-full grid md:grid-cols-2 gap-16 items-start">

                {/* LEFT TEXT — FULL WIDTH + LEFT PADDING */}
                <div className="space-y-8 text-left pl-6 md:pl-16 lg:pl-24 pr-6 pt-16">

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-[10px] tracking-[0.26em] uppercase text-brand-gold/70"
                    >
                        Culinary Philosophy
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="font-serif text-3xl md:text-4xl leading-snug text-brand-cream"
                    >
                        A Timeless French Culinary Philosophy
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-brand-cream/80 text-sm md:text-base leading-relaxed"
                    >
                        The Jard’Or kitchen pays homage to the diverse landscape of French cuisine —
                        from Provence and Nice to Burgundy and Bordeaux. Each dish reflects both
                        tradition and modern expression, crafted with precision and intention.
                    </motion.p>

                    {/* LISTS */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="space-y-6"
                    >
                        <div>
                            <p className="font-semibold text-brand-gold/80 mb-2">
                                Begin with refined French entrées:
                            </p>
                            <ul className="space-y-1 text-brand-cream/75 text-sm md:text-base">
                                <li>• Œufs Cocotte à la Truffe</li>
                                <li>• Escargots à l’Ail Noir</li>
                                <li>• Terrine de Foie Gras</li>
                                <li>• Saint-Jacques aux Échalotes</li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-semibold text-brand-gold/80 mb-2">
                                Signature mains from Southern France:
                            </p>
                            <ul className="space-y-1 text-brand-cream/75 text-sm md:text-base">
                                <li>• Canard à l’Orange</li>
                                <li>• Bœuf Bourguignon Jard’or</li>
                                <li>• Bœuf en Croûte</li>
                                <li>• Saumon Grillé d’Herbes</li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-semibold text-brand-gold/80 mb-2">
                                End with refined desserts:
                            </p>
                            <ul className="space-y-1 text-brand-cream/75 text-sm md:text-base">
                                <li>• Grand Marnier Soufflé</li>
                                <li>• Tarte Tatin Jard’or</li>
                                <li>• Chocolate Millefeuille</li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="pt-6 flex flex-col items-start gap-4"
                    >
                        <button
                            onClick={() => {
                                const el = document.getElementById("gallery");
                                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                            }}
                            className="
            px-6 py-3 border border-brand-gold/60
            text-brand-gold uppercase text-xs tracking-[0.22em]
            hover:bg-brand-gold hover:text-black transition-all
        "
                        >
                            Explore Our Indoor Space
                        </button>

                    </motion.div>

                </div>

                {/* ======= RIGHT COLUMN — FULL WIDTH IMAGE COLLAGE ======= */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="w-full flex flex-col gap-0 pr-6"
                >

                    {/* TOP 2 IMAGES */}
                    <div className="grid grid-cols-2 gap-0 w-full">
                        <div className="aspect-square overflow-hidden">
                            <Image
                                src="/images/timeless/timeless3.jpg"
                                alt="Cuisine 1"
                                width={800}
                                height={800}
                                className="w-full h-full object-cover hover:scale-110 transition-all duration-4000"
                            />
                        </div>

                        <div className="aspect-square overflow-hidden">
                            <Image
                                src="/images/timeless/timeless4.jpg"
                                alt="Cuisine 2"
                                width={800}
                                height={800}
                                className="w-full h-full object-cover hover:scale-110 transition-all duration-4000"
                            />
                        </div>
                    </div>

                    {/* BOTTOM FULL IMAGE */}
                    <div className="aspect-[2/1] overflow-hidden w-full">
                        <Image
                            src="/images/timeless/timeless6.jpg"
                            alt="Cuisine 3"
                            width={1600}
                            height={800}
                            className="w-full h-full hover:scale-110 object-cover transition-all duration-4000"
                        />
                    </div>

                </motion.div>

            </div>
        </section>
    );
}