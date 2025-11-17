"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import DesktopNavbar from "@/components/molecules/DesktopNavbar";
import MobileNavbar from "@/components/molecules/MobileNavbar";

export default function Navbar() {
    const [visible, setVisible] = useState(true);
    const lastScrollYRef = useRef(0);

    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY || 0;
            const d = y - lastScrollYRef.current;

            if (d > 10 && y > 80) setVisible(false);
            else if (d < -10) setVisible(true);

            lastScrollYRef.current = y;
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const headerClass = `
    fixed top-6 inset-x-0 z-50 flex justify-center pointer-events-none
    transition-transform duration-500 ease-out
    ${visible ? "translate-y-0" : "-translate-y-[140%]"}
  `;

    return (
        <motion.header
            className={headerClass}
            initial={{ opacity: 0, y: -18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <DesktopNavbar />
            <MobileNavbar />
        </motion.header>
    );
}