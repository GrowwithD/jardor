"use client";

import { motion } from "framer-motion";
import { InstagramIcon, FacebookIcon } from "lucide-react";
import NavLogo from "./atoms/NavLogo";
import { useEffect, useState } from "react";

// ================= TYPE ==================================
type SiteInfoType = {
    phone?: string;
    whatsapp?: string;
    instagram?: string;
    facebook?: string;
    address?: string;
    hours?: string;
    footer_text?: string;
};

// ================= ANIMATION =============================
const fadeUp = {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
};

export default function FooterClient({ siteInfo }: { siteInfo: SiteInfoType }) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    console.log(siteInfo);

    return (
        <footer className="relative text-base text-brand-cream/75">

            {/* MAIN */}
            <motion.div
                variants={fadeUp}
                initial="initial"
                animate={mounted ? "animate" : "initial"}
                transition={{ duration: 0.6 }}
                className="relative mx-auto max-w-6xl px-4 py-12"
            >
                <div className="flex flex-col gap-7 md:flex-row md:justify-between">

                    {/* LEFT */}
                    <div className="flex flex-col gap-3 max-w-md">
                        <NavLogo heightClass="h-24" />

                        <p className="text-brand-cream/78 leading-relaxed">
                            {siteInfo.footer_text}
                        </p>

                        {/* SOCIAL */}
                        <div className="flex items-center gap-3">
                            <a
                                href={siteInfo.instagram}
                                className="text-brand-gold/80 hover:text-brand-gold"
                            >
                                <InstagramIcon size={18} strokeWidth={1.5} />
                            </a>

                            <a
                                href={siteInfo.facebook}
                                className="text-brand-gold/80 hover:text-brand-gold"
                            >
                                <FacebookIcon size={18} strokeWidth={1.5} />
                            </a>
                        </div>
                    </div>

                    {/* MIDDLE — ADDRESS / HOURS / CONTACT */}
                    <div className="flex flex-col gap-6 text-brand-cream/80">

                        {/* ADDRESS */}
                        <div>
                            <p className="text-sm uppercase tracking-[0.22em] text-brand-cream/45">
                                Address
                            </p>
                            <p>{siteInfo.address}</p>
                        </div>

                        {/* HOURS */}
                        <div>
                            <p className="text-sm uppercase tracking-[0.22em] text-brand-cream/45">
                                Hours
                            </p>
                            <div className="text-brand-cream/80 leading-relaxed">
                                {siteInfo.hours}
                            </div>
                        </div>

                        {/* RESERVATIONS */}
                        <div>
                            <p className="text-sm uppercase tracking-[0.22em] text-brand-cream/45">
                                Reservations
                            </p>

                            <p>
                                Tel:&nbsp;
                                <a
                                    href={`tel:${siteInfo.phone}`}
                                    className="text-brand-gold/90 hover:text-brand-gold"
                                >
                                    {siteInfo.phone}
                                </a>
                            </p>

                            <p>
                                WA:&nbsp;
                                <a
                                    href={`https://wa.me/${siteInfo.whatsapp}`}
                                    className="text-brand-gold/90 hover:text-brand-gold"
                                >
                                    {siteInfo.whatsapp}
                                </a>
                            </p>
                        </div>
                    </div>

                </div>
            </motion.div>

            {/* FOOTER BAR */}
            <div className="border-t border-brand-gold/10 bg-brand-green py-4">
                <div className="mx-auto max-w-6xl px-4 flex justify-between text-sm text-brand-cream/50">
                    <p>
                        © {new Date().getFullYear()} Jard'or Restaurant • All Rights Reserved
                    </p>

                    <p className="tracking-[0.16em] uppercase">
                        Website by{" "}
                        <a
                            href="https://www.linkedin.com/in/wayan-widiarsana-8a08431a4/"
                            className="text-brand-gold/85 hover:text-brand-gold"
                        >
                            Widhy Arsana
                        </a>
                    </p>
                </div>
            </div>

        </footer>
    );
}