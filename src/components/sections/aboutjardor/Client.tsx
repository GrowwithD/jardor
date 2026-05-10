"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "@/components/molecules/SectionHeader";

const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

export default function AboutJardorClient({ about }: { about: any }) {
    const images = about.images ?? [];

    return (
        <section
            id="restaurant"
            className="relative pt-20 md:pt-28 bg-brand-green text-brand-cream"
        >
            {/* HEADER */}
            <SectionHeader
                eyebrow={about.eyebrow}
                title={about.title}
                subtitle={about.subtitle}
                align="center"
                className="max-w-3xl mx-auto"
            />

            {/* CONTENT PARAGRAPHS */}
            <motion.div
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="
        mt-4 text-center px-6 max-w-3xl mx-auto space-y-3
        prose prose-invert

        [&_*]:mt-3
        [&_*]:text-sm
        md:[&_*]:text-lg
        [&_*]:text-brand-gold/80
    "
            >
                <motion.div
                    variants={fadeUp}
                    transition={{ duration: 0.6 }}
                    dangerouslySetInnerHTML={{ __html: about.content }}
                />
            </motion.div>


            {/* IMAGE GRID */}
            <motion.div
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="mt-14 w-full bg-black grid grid-cols-3 gap-0 md:px-0"
            >
                {images.map((src: string, idx: number) => (
                    <motion.div
                        key={idx}
                        variants={fadeUp}
                        transition={{ duration: 0.6 + idx * 0.2 }}
                        className="group relative aspect-square w-full overflow-hidden bg-black/40"
                    >
                        <Image
                            src={src}
                            alt={`Jard’or Indoor ${idx + 1}`}
                            fill
                            className="
                                object-cover
                                transition-transform duration-4000 ease-out
                                group-hover:scale-110
                            "
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}