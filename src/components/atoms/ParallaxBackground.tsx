"use client";

export default function ParallaxBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden">
            {/* Background image */}
            <div
                className="
                    absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat
                    opacity-[0.22] mix-blend-lighten
                "
                style={{
                    backgroundImage: "url('/images/parallax/parallax1.jpg')",
                }}
            />

            {/* Dark cinematic overlay */}
            <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px]" />

            {/* Noise texture for filmic look — CSS-based, no file needed */}
            <div
                className="absolute inset-0 opacity-[0.12] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
                    backgroundSize: "256px 256px",
                    mixBlendMode: "overlay",
                }}
            />
        </div>
    );
}