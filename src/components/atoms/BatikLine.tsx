"use client";

import React from "react";

export default function BatikLine() {
    return (
        <div
            className="
                w-full
                h-16 md:h-24
                bg-brand-green
                bg-[url('/images/batik.png')]
                bg-repeat
                bg-center
                opacity-60
                bg-size-[420px_auto]
            "
        />
    );
}