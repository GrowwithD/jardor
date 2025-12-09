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

            {/* Noise texture for filmic look */}
            <div className="absolute inset-0 opacity-[0.12] pointer-events-none"
                style={{
                    backgroundImage: "url('/images/noise.png')",
                    mixBlendMode: "overlay",
                }}
            />
        </div>
    );
}