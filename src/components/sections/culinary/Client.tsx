"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ParallaxBackground from "@/components/atoms/ParallaxBackground";
import SectionHeader from "@/components/molecules/SectionHeader";
import ButtonOutlineGold from "@/components/atoms/ButtonOutlineGold";

const fadeUp = {
    initial: { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
};

export default function CulinaryPhilosophyClient({ cp }: { cp: any }) {
    const images = cp.images.slice(0, 3); // ambil 3 gambar maksimum

    return (
        <section
            id="culinary"
            className="relative bg-black text-brand-cream overflow-hidden"
        >
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

                    {/* HEADER */}
                    <motion.div
                        variants={fadeUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.7 }}
                    >
                        <SectionHeader
                            eyebrow={cp.eyebrow}
                            title={cp.title}
                            subtitle={cp.subtitle}
                            align="left"
                            className="!px-0"
                        />
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="
        mt-4 text-left mx-auto space-y-3
        prose prose-invert max-w-none

        [&_*]:mt-3
        [&_*]:text-sm
        md:[&_*]:text-lg
        [&_*]:text-brand-gold/80
    "
                    >
                        <motion.div
                            variants={fadeUp}
                            transition={{ duration: 0.6 }}
                            dangerouslySetInnerHTML={{ __html: cp.content }}
                        />
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
                                document.getElementById("gallery")?.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                });
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
                    {/* TOP ROW (2 IMAGES) */}
                    {images.length >= 2 && (
                        <div className="grid grid-cols-2 w-full">
                            {images.slice(0, 2).map((src, i) => (
                                <div key={i} className="aspect-3/4 overflow-hidden">
                                    <Image
                                        src={src}
                                        alt={`Cuisine ${i + 1}`}
                                        width={800}
                                        height={800}
                                        className="w-full h-full object-cover hover:scale-110 transition-all duration-4000"
                                    />
                                </div>
                            ))}
                        </div>
                    )}

                    {/* BOTTOM IMAGE */}
                    {images.length >= 3 && (
                        <div className="aspect-5/3 overflow-hidden w-full">
                            <Image
                                src={images[2]}
                                alt="Cuisine Bottom"
                                width={1600}
                                height={800}
                                className="w-full h-full object-cover hover:scale-110 transition-all duration-4000"
                            />
                        </div>
                    )}
                </motion.div>

            </div>
        </section>
    );
}