"use client";

import { motion } from "framer-motion";
import {
    Instagram,
    Facebook,
    Youtube,
    Linkedin,
    Twitter,
} from "lucide-react";
import type { ComponentType } from "react";
import NavLogo from "./atoms/NavLogo";
import { useEffect, useState } from "react";

// ================= TYPE ==================================
type SiteInfoType = {
    phone?: string;
    whatsapp?: string;
    instagram?: string;
    facebook?: string;
    tiktok?: string;
    youtube?: string;
    twitter?: string;
    linkedin?: string;
    threads?: string;
    pinterest?: string;
    address?: string;
    hours?: string;
    footer_text?: string;
};

// ================= INLINE ICONS (not in lucide) ==========
const TikTokIcon = ({ size = 18 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"
         xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M19.6 6.7c-1.5-.4-2.7-1.5-3.3-2.9-.2-.5-.3-1-.3-1.5h-3.2v13.4c0 1.6-1.3 2.9-2.9 2.9s-2.9-1.3-2.9-2.9 1.3-2.9 2.9-2.9c.3 0 .6 0 .9.1V9.6c-.3 0-.6-.1-.9-.1-3.4 0-6.1 2.7-6.1 6.1s2.7 6.1 6.1 6.1 6.1-2.7 6.1-6.1V9.4c1.2.9 2.7 1.4 4.3 1.4V7.6c-.3 0-.5 0-.7-.1z"/>
    </svg>
);

const ThreadsIcon = ({ size = 18 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"
         xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12.18 21.95h-.01c-3.27-.02-5.79-1.1-7.49-3.21C3.18 16.86 2.4 14.27 2.37 12.07v-.07c.03-2.21.81-4.79 2.31-6.67C6.38 3.21 8.9 2.13 12.17 2.11h.01c2.51.02 4.6.66 6.21 1.92 1.51 1.18 2.58 2.86 3.18 5l-1.92.54c-1.01-3.6-3.55-5.43-7.48-5.46-2.59.02-4.55.83-5.83 2.42-1.2 1.49-1.83 3.65-1.85 5.45.02 1.8.65 3.96 1.85 5.45 1.28 1.59 3.24 2.4 5.83 2.42 2.34-.02 3.89-.57 5.18-1.84.59-.58 1.04-1.32 1.34-2.18-.42-.23-.94-.41-1.55-.55-1.06-.23-2.21-.21-3.32.06-.84.2-1.55.62-2.05 1.21-.5.59-.74 1.32-.7 2.06.05.86.43 1.55 1.13 2.04.5.35 1.13.55 1.84.59.7.04 1.42-.07 2.06-.32-.71-.4-1.18-1.04-1.4-1.93l1.77-.42c.21.84.66 1.27 1.36 1.27.36 0 .67-.13.94-.41-.32-.41-.58-.97-.74-1.66l1.93-.43c.36 1.6 1.18 2.79 2.43 3.51-.6 1.85-1.66 3.34-3.13 4.45-1.61 1.21-3.6 1.85-5.92 1.91z"/>
    </svg>
);

const PinterestIcon = ({ size = 18 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"
         xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.64 7.85 6.36 9.32-.09-.79-.17-2 .04-2.86.19-.78 1.21-4.95 1.21-4.95s-.31-.62-.31-1.53c0-1.43.83-2.5 1.86-2.5.88 0 1.31.66 1.31 1.46 0 .89-.57 2.22-.86 3.45-.25 1.03.52 1.87 1.54 1.87 1.85 0 3.27-1.95 3.27-4.76 0-2.49-1.79-4.23-4.34-4.23-2.96 0-4.69 2.22-4.69 4.51 0 .89.34 1.85.77 2.37.09.1.1.19.07.29-.08.31-.25.99-.28 1.13-.04.18-.15.22-.34.13-1.27-.59-2.06-2.44-2.06-3.92 0-3.19 2.32-6.13 6.69-6.13 3.51 0 6.24 2.5 6.24 5.85 0 3.49-2.2 6.3-5.27 6.3-1.03 0-2-.54-2.33-1.17 0 0-.51 1.95-.64 2.43-.23.87-.85 1.97-1.27 2.64.96.3 1.97.46 3.04.46 5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
    </svg>
);

// ================= ANIMATION =============================
const fadeUp = {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
};

export default function FooterClient({ siteInfo }: { siteInfo: SiteInfoType }) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

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
                        <SocialLinks siteInfo={siteInfo} />
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
                                    id="gtm-whatsapp-footer"
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

// ================= SOCIAL LINKS ==========================
type IconProps = { size?: number; strokeWidth?: number };
type SocialItem = {
    key: keyof SiteInfoType;
    label: string;
    Icon: ComponentType<IconProps>;
};

const SOCIAL_ITEMS: SocialItem[] = [
    { key: "instagram", label: "Instagram", Icon: Instagram },
    { key: "facebook", label: "Facebook", Icon: Facebook },
    { key: "tiktok", label: "TikTok", Icon: TikTokIcon },
    { key: "youtube", label: "YouTube", Icon: Youtube },
    { key: "twitter", label: "Twitter / X", Icon: Twitter },
    { key: "linkedin", label: "LinkedIn", Icon: Linkedin },
    { key: "threads", label: "Threads", Icon: ThreadsIcon },
    { key: "pinterest", label: "Pinterest", Icon: PinterestIcon },
];

function SocialLinks({ siteInfo }: { siteInfo: SiteInfoType }) {
    const items = SOCIAL_ITEMS.filter((s) => {
        const url = siteInfo[s.key];
        return typeof url === "string" && url.trim() !== "";
    });

    if (items.length === 0) return null;

    return (
        <div className="flex flex-wrap items-center gap-3">
            {items.map(({ key, label, Icon }) => (
                <a
                    key={key}
                    href={siteInfo[key] as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="text-brand-gold/80 hover:text-brand-gold transition-colors"
                >
                    <Icon size={18} strokeWidth={1.5} />
                </a>
            ))}
        </div>
    );
}
