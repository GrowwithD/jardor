"use client";

export default function ParallaxBackground() {
    return (
        <div
            className="
                        absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat
                        opacity-[0.18] mix-blend-lighten
                    "
            style={{
                backgroundImage: "url('/images/parallax/parallax1.jpg')",
            }}
        />
    );
}