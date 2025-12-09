"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ButtonGold from "@/components/atoms/ButtonGold";
import SectionHeader from "@/components/molecules/SectionHeader";

const fadeUp = {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
};

const fadeLeft = {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
};

export default function LeGardenClient({ lg }: { lg: any }) {

    const images = lg.images;

    return (
        <section
            id="garden"
            className="relative py-20 md:py-28 bg-brand-green text-brand-cream overflow-hidden"
        >
            <motion.div
                variants={fadeLeft}
                initial="initial"
                whileInView="animate"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.7 }}
                className="grid md:grid-cols-2 gap-16 items-center"
            >
                {/* LEFT IMAGES */}
                <div className="flex gap-4 w-full px-6 md:px-0">
                    {images.slice(0, 2).map((src: string, idx: number) => (
                        <motion.div
                            key={idx}
                            variants={fadeLeft}
                            transition={{ duration: 0.6 + idx * 0.2 }}
                            className="relative w-1/2 aspect-[4/5] overflow-hidden bg-black/40 group"
                        >
                            <Image
                                src={src}
                                alt="Le Garden Image"
                                fill
                                className="object-cover transition-transform duration-[3500ms] ease-out group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        </motion.div>
                    ))}
                </div>

                {/* RIGHT CONTENT */}
                <motion.div
                    variants={fadeUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="px-6 md:pr-10 space-y-6"
                >
                    <SectionHeader
                        eyebrow={lg.eyebrow}
                        title={lg.title}
                        subtitle={lg.subtitle}
                        align="left"
                    />

                    <motion.div
                        variants={fadeUp}
                        transition={{ duration: 0.7 }}
                        className="
                            mt-4 pl-6 text-left mx-auto space-y-3
                            prose prose-invert max-w-none

                            [&_*]:mt-3
                            [&_*]:text-sm
                            md:[&_*]:text-lg
                            [&_*]:text-brand-gold/80
                        "
                        dangerouslySetInnerHTML={{ __html: lg.content }}
                    />

                    <motion.div
                        variants={fadeUp}
                        transition={{ duration: 0.9 }}
                        className="mt-6 pl-6 flex flex-wrap items-center gap-3"
                    >
                        <ButtonGold href="#reservation">
                            Book a Night at Le Garden
                        </ButtonGold>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* EXTRA GRID */}
            <motion.div
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-6"
            >
                {images.slice(2).map((src: string, idx: number) => (
                    <motion.div
                        key={idx}
                        variants={fadeUp}
                        transition={{ duration: 0.6 + idx * 0.1 }}
                        className="relative aspect-[3/4] overflow-hidden bg-black/40 group"
                    >
                        <Image
                            src={src}
                            alt={`Le Garden Extra ${idx + 3}`}
                            fill
                            className="object-cover transition-transform duration-[3500ms] ease-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}