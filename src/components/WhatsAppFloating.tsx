"use client";

import Image from "next/image";

export default function WhatsAppFloating() {
    return (
        <a
            id="gtm-whatsapp-floating"
            href="https://wa.me/628133630509
" // GANTI NOMOR KAMU BRO!!
            target="_blank"
            rel="noopener noreferrer"
            className="
                fixed bottom-6 right-6 z-50
                h-14 w-14 md:h-16 md:w-16
                rounded-full shadow-lg
                bg-[#25D366]
                flex items-center justify-center
                hover:scale-110 hover:shadow-xl
                transition-all duration-300
            "
        >
            <Image
                src="/whastapp.svg"
                alt="WhatsApp"
                width={80}
                height={80}
                className="p-2 invert brightness-0"
            />
        </a>
    );
}
