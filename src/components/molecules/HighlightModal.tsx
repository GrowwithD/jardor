// src/components/molecules/HighlightModal.tsx
"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

type ActiveItem = {
    title: string;
    image: string;
    description: string;
    meta?: string;
    highlight: string;
};

type Props = {
    activeItem: ActiveItem | null;
    onClose: () => void;
};

export function HighlightModal({ activeItem, onClose }: Props) {
    return (
        <AnimatePresence>
            {activeItem && (
                <motion.div
                    className="
            fixed inset-0 z-[80]
            flex items-center justify-center
            bg-black/80 backdrop-blur-md
            px-3
          "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="
              relative w-full max-w-4xl
              rounded-4xl
              bg-brand-green-soft/98
              border border-brand-gold/40
              shadow-[0_30px_120px_rgba(0,0,0,1)]
              overflow-hidden
              grid grid-cols-1 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.6fr)]
            "
                        initial={{ scale: 0.94, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={onClose}
                            className="
                absolute right-3 top-3
                w-8 h-8 flex items-center justify-center
                rounded-full
                border border-brand-gold/60
                text-brand-gold bg-black/45
                hover:bg-brand-gold hover:text-black
                transition-all duration-200
                text-xs z-20
              "
                        >
                            ×
                        </button>

                        {/* Image */}
                        <div className="relative h-56 md:h-auto md:min-h-[260px]">
                            <Image
                                src={activeItem.image}
                                alt={activeItem.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent md:bg-gradient-to-r md:from-black/75 md:via-black/15 md:to-transparent" />
                            <div className="absolute bottom-3 left-3 right-3 md:hidden">
                                <p className="text-[0.5rem] uppercase tracking-[0.22em] text-brand-gold/85">
                                    {activeItem.highlight}
                                </p>
                                <h4 className="font-serif text-xl text-brand-cream">
                                    {activeItem.title}
                                </h4>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-5 md:p-7 flex flex-col gap-3 md:gap-4">
                            <div className="hidden md:block">
                                <p className="text-[0.5rem] uppercase tracking-[0.26em] text-brand-gold/85 mb-1">
                                    {activeItem.highlight}
                                </p>
                                <h4 className="font-serif text-2xl md:text-3xl text-brand-cream leading-snug">
                                    {activeItem.title}
                                </h4>
                            </div>

                            <div className="mt-1 md:mt-2 space-y-2 text-xs md:text-sm text-brand-cream/90 leading-relaxed">
                                {activeItem.description
                                    .split(/\n{2,}/)
                                    .map((block, idx) => (
                                        <p key={idx}>{block}</p>
                                    ))}
                            </div>

                            {activeItem.meta && (
                                <p className="text-[0.5rem] md:text-[0.55rem] text-brand-gold/80 uppercase tracking-[0.18em] pt-1">
                                    {activeItem.meta}
                                </p>
                            )}

                            <div className="mt-auto flex justify-end gap-2 pt-2">
                                <button
                                    onClick={onClose}
                                    className="
                    rounded-full px-4 py-1.5
                    text-[0.5rem] md:text-[0.55rem]
                    uppercase tracking-[0.2em]
                    bg-transparent text-brand-gold
                    border border-brand-gold/40
                    hover:bg-brand-gold/10
                    transition-all
                  "
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}