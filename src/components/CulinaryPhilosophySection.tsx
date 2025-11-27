"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ParallaxBackground from "@/components/atoms/ParallaxBackground";
import SectionHeader from "@/components/molecules/SectionHeader";
import ButtonOutlineGold from "@/components/atoms/ButtonOutlineGold";

// Reusable fade-up animation
const fadeUp = {
    initial: { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
};

export default function CulinaryPhilosophySection() {
    return (
        <section
            id="culinary"
            className="relative bg-black text-brand-cream overflow-hidden"
        >
            {/* PARALLAX */}
            <ParallaxBackground />

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

            {/* GRID */}
            <div className="relative w-full grid md:grid-cols-2 gap-16 items-start">

                {/* LEFT TEXT */}
                <div className="pt-16 pl-6 md:pl-16 lg:pl-24 pr-6 space-y-10">

                    {/* SECTION HEADER */}
                    <motion.div
                        variants={fadeUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.7 }}
                    >
                        <SectionHeader
                            eyebrow="Culinary Philosophy"
                            title="A Timeless French Culinary Philosophy"
                            subtitle="The Jard’Or kitchen pays homage to the diverse landscape of French cuisine — from Provence and Nice to Burgundy and Bordeaux. Each dish reflects both tradition and modern expression, crafted with precision and intention."
                            align="left"
                            className="!px-0"
                        />
                    </motion.div>

                    {/* LISTS */}
                    <motion.div
                        variants={fadeUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: false, amount: 0.3 }}
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
                                <li>• Saint-Jacques aux Échalottes</li>
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
                        variants={fadeUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="pt-6 flex flex-col items-start gap-4"
                    >
                        <ButtonOutlineGold
                            onClick={(e) => {
                                e.preventDefault();
                                const el = document.getElementById("gallery");
                                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                            }}
                        >
                            Explore Our Indoor Space
                        </ButtonOutlineGold>
                    </motion.div>

                </div>

                {/* RIGHT IMAGES */}
                <motion.div
                    variants={fadeUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="w-full flex flex-col gap-0"
                >
                    {/* TOP ROW */}
                    <div className="grid grid-cols-2 w-full">
                        <div className="aspect-3/4 overflow-hidden">
                            <Image
                                src="/images/timeless/timeless3.jpg"
                                alt="Cuisine 1"
                                width={800}
                                height={800}
                                className="w-full h-full object-cover hover:scale-110 transition-all duration-4000"
                            />
                        </div>

                        <div className="aspect-3/4 overflow-hidden">
                            <Image
                                src="/images/timeless/timeless4.jpg"
                                alt="Cuisine 2"
                                width={800}
                                height={800}
                                className="w-full h-full object-cover hover:scale-110 transition-all duration-4000"
                            />
                        </div>
                    </div>

                    {/* BOTTOM */}
                    <div className="aspect-5/3 overflow-hidden w-full">
                        <Image
                            src="/images/timeless/timeless6.jpg"
                            alt="Cuisine 3"
                            width={1600}
                            height={800}
                            className="w-full h-full object-cover hover:scale-110 transition-all duration-4000"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}