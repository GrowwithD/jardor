"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ButtonGold from "@/components/atoms/ButtonGold";
import ButtonOutlineGold from "@/components/atoms/ButtonOutlineGold";

export default function WineTastingSection() {
    return (
        <section
            id="wine"
            className="
                relative py-20 md:py-28
                bg-brand-green text-brand-cream
                overflow-hidden
            "
        >
            {/* Ambient Glow */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute right-[10%] top-0 w-[700px] h-[700px]
                    bg-[radial-gradient(circle,rgba(200,169,107,0.13),transparent_70%)]
                    blur-3xl opacity-30" />
                <div className="absolute left-0 bottom-0 w-[600px] h-[600px]
                    bg-[radial-gradient(circle,rgba(200,169,107,0.1),transparent_70%)]
                    blur-3xl opacity-25" />
            </div>

            {/* ================= MOBILE IMAGE (ONLY) ================= */}
            <div className="md:hidden mb-10">
                <div className="relative w-full h-[250px] overflow-hidden border border-brand-gold/20 bg-black/40">
                    <Image
                        src="/images/DSC04930-HDR.jpg"
                        alt="Wine Pairing Jard’or"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
            </div>

            {/* ================= DESKTOP FULL RIGHT IMAGE — UNCHANGED ================= */}
            <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="
                    hidden md:block
                    absolute inset-y-0 right-0
                    w-[50vw]
                    min-h-full
                    overflow-hidden
                    border-l border-brand-gold/20
                    bg-black/40
                "
            >
                <Image
                    src="/images/DSC04930-HDR.jpg"
                    alt="Wine Pairing Jard’or"
                    fill
                    className="
                        object-cover
                        transition-transform duration-[4000ms] ease-out
                        hover:scale-110
                    "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </motion.div>

            {/* ================= TEXT CONTENT ================= */}
            <div
                className="
                    relative z-10
                    max-w-5xl mr-auto
                    px-6
                    md:pl-20 md:pr-10
                    lg:pl-28
                    text-center md:text-left
                "
            >
                <motion.div
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="space-y-6 md:max-w-xl"
                >
                    <p className="text-[10px] md:text-[11px] uppercase tracking-[0.26em] text-brand-gold/70">
                        Wine Tasting & Pairings
                    </p>

                    <h2 className="font-serif text-2xl md:text-3xl tracking-[0.03em] text-brand-cream">
                        A Journey Through Cellar & Glass
                    </h2>

                    <p className="text-sm md:text-base leading-relaxed text-brand-cream/80">
                        At Jard’Or, wine is more than a beverage — it’s a journey. Our in-house
                        sommelier guides each guest through intentional pairings, ensuring every
                        dish finds its perfect match — from easy-drinking glasses to rare vintages.
                    </p>

                    <p className="text-sm md:text-base leading-relaxed text-brand-cream/80">
                        Whether enjoying seafood or richer classics like <em>Bœuf Bourguignon</em>,
                        each pairing is crafted to elevate your dining experience.
                    </p>

                    {/* LIST */}
                    <div className="pt-2 space-y-2">
                        <p className="text-brand-gold/80 text-[11px] tracking-[0.2em] uppercase">
                            Wine Tasting Sessions
                        </p>

                        <ul className="space-y-1.5 text-sm md:text-base text-brand-cream/85">
                            <li>• Wines of Southern France</li>
                            <li>• Bordeaux Discovery Nights</li>
                            <li>• Burgundy & Rhône Explorations</li>
                            <li>• European Highlights & Limited Editions</li>
                        </ul>
                    </div>

                    {/* CTA BUTTONS */}
                    <div className="pt-6 flex flex-wrap gap-3 justify-center md:justify-start">
                        <ButtonGold href="/pdf/jardor-wine-champagne-list.pdf">
                            Explore Our Wine List
                        </ButtonGold>

                        <ButtonOutlineGold href="#reservation">
                            Reserve Wine Tasting
                        </ButtonOutlineGold>
                    </div>

                    {/* ================= FULL-WIDTH BOTTOM IMAGE ================= */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7 }}
                        className="
                            relative w-full h-[180px] md:h-[240px] mt-6
                            overflow-hidden border border-brand-gold/20 bg-black/40
                        "
                    >
                        <Image
                            src="/images/DSC04933-HDR.jpg"
                            alt="Wine Tasting Atmosphere"
                            fill
                            className="object-cover transition-transform duration-[4000ms] ease-out hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}