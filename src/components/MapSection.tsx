"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MapSection() {
    useEffect(() => {
        AOS.init({
            duration: 900,
            easing: "ease-out-quart",
            once: true,
            offset: 100,
        });
    }, []);

    return (
        <section className="h-[500px]">
            {/* Gold glow */}
            <iframe
                src="https://maps.google.com/maps?q=JARD'OR%20French%20Restaurant%20Bali&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </section>
    );
}