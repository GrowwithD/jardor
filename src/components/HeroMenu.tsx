"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroMenu() {
    return (
        <section className="relative h-[360px] md:h-[420px] w-full overflow-hidden">
            <motion.div
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute inset-0"
            >
                <Image
                    src="/images/about.png"
                    alt="Jard’or tasting menu service"
                    fill
                    priority
                    className="object-cover"
                />
            </motion.div>


          <div className="absolute inset-0 bg-linear-to-b from-black/85 via-black/40 to-brand-black" />
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,transparent,rgba(0,0,0,0.55))]" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full items-center">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.12 } },
                    }}
                    className="mx-auto max-w-xl px-6 text-center space-y-3"
                >


                    <motion.h1
                        variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.6 }}
                                className="heading-hero"
                    >
                        <span className="italic">The</span> Menus
                    </motion.h1>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 15 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.6 }}
                           className="text-subtitle"
                    >
                        A printed-menu inspired curation of our tasting journeys, signatures,
                        pâtisserie, cellar, and cocktails — presented with quiet detail.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}