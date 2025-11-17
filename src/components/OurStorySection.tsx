// src/components/sections/OurStorySection.tsx
"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

import BatikSectionLayout from "@/components/layouts/BatikSectionLayout";
import SectionHeader from "@/components/molecules/SectionHeader";

export default function OurStorySection() {
    useEffect(() => {
        AOS.init({
            duration: 900,
            easing: "ease-out-cubic",
            once: true,
        });
    }, []);

    return (
        <BatikSectionLayout>
            <div className="max-w-4xl mx-auto px-6 pt-4 md:pt-6 space-y-10">

                {/* HEADER */}
                <SectionHeader
                    eyebrow="Our Story"
                    title="The Essence of Jard’or"
                    subtitle="A quiet corner of Nusa Dua where French refinement, considered service, and the rhythm of the island move in the same breath."
                    align="center"
                />

                {/* ==== GOLD CARD CONTENT ==== */}
                <div
                    data-aos="fade-up"
                    className="
                        relative rounded-[26px]
                        border border-brand-gold/25
                        bg-black/40
                        shadow-[0_0_40px_rgba(200,169,107,0.12)]
                        backdrop-blur-[2px]
                        p-6 md:p-10
                    "
                >
                    {/* Soft highlight */}
                    <div
                        className="
                            pointer-events-none absolute inset-0
                            rounded-[26px]
                            bg-gradient-to-b from-white/5 via-transparent to-transparent
                            opacity-10
                        "
                    />

                    {/* CONTENT */}
                    <div
                        className="
                            relative z-10
                            space-y-5 md:space-y-6
                            text-[12px] md:text-sm
                            text-brand-cream/85
                            leading-relaxed md:leading-loose
                            text-center md:text-left
                        "
                    >
                        <p>
                            Jard’or was imagined as a house of calm — a place where time moves a
                            little slower and every detail is given room to breathe. It is more than a
                            dining room; it is a setting for unhurried conversation, thoughtful
                            plates, and glasses that are poured with intention.
                        </p>

                        <p>
                            The kitchen draws from classical French technique, guided by the ingredients
                            of the island: line-caught seafood, garden herbs, patient sauces, and clean,
                            precise finishes. Each course is composed with restraint, yet quietly
                            meticulous behind the pass.
                        </p>

                        <p>
                            In the cellar, our sommelier curates bottles from characterful growers and
                            established domaines across France and beyond. Pairings are designed to echo
                            the menu rather than overshadow it — layered aromatics and finishes that sit
                            comfortably with the sea air of Bali.
                        </p>

                        <p>
                            Beyond the dining room, the garden lounge and cigar corner offer more
                            intimate spaces to linger after dinner. Soft jazz, low light, and the warmth
                            of conversation create an atmosphere that feels closer to a private salon
                            than a traditional restaurant.
                        </p>

                        <p>
                            At JARD’OR, every service is approached as <span className="italic">un
                                voyage de goût</span> — a journey of taste and texture, of mood and memory,
                            and the quiet pleasure of being fully present at the table.
                        </p>
                    </div>
                </div>
            </div>
        </BatikSectionLayout>
    );
}