/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Brand palette utama
                brand: {
                    bg: "#111111",
                    green: "#0C392D",
                    greenSoft: "#164636",
                    gold: "#C8A96B",
                    cream: "#F5F2E8",
                },
                // warna utilitas tambahan
                fg: "#0C392D",
            },
            fontFamily: {
                serif: ["Playfair Display", "serif"],
                sans: ["Inter", "system-ui", "sans-serif"],
            },
            boxShadow: {
                pill: "0 10px 40px rgba(0,0,0,0.85)", // sama persis dengan navbar
            },
            borderRadius: {
                pill: "999px",
            },
        },
    },
    plugins: [],
};