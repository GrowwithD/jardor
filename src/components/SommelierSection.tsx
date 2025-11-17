"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SommelierSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 120,
    });
  }, []);

  return (
    <section className="relative bg-brand-black py-16 md:py-20">


      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div
          data-aos="fade-up"
          className="
            grid gap-10 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.4fr)]
            items-center
          "
        >
          {/* Portrait */}
          <div className="flex justify-center">
            <div
              className="
                relative h-64 w-64 md:h-80 md:w-80
                overflow-hidden rounded-full
                border border-brand-gold/45
                bg-black/50
              "
            >
              <Image
                src="/images/somilier.png"
                alt="Jard’or Sommelier"
                fill
                className="object-cover transition-transform duration-[1200ms] hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div
            data-aos="fade-up"
            data-aos-delay="80"
            className="space-y-4 text-center md:text-left"
          >
            <p className="text-[9px] md:text-[10px] uppercase tracking-[0.26em] text-brand-gold/80">
              Wine &amp; Pairings
            </p>

            <div className="flex flex-col items-center gap-2 md:flex-row md:items-end md:gap-3">
              <h2 className="font-serif text-[1.7rem] md:text-[2.1rem] tracking-[0.08em] text-brand-gold">
                Our Sommelier
              </h2>
            </div>

            <p className="text-[13px] md:text-[15px] leading-relaxed text-brand-cream/85">
              With a cellar curated glass by glass, our sommelier approaches each
              pairing with quiet precision — guided by season, texture, and the
              rhythm of the kitchen.
            </p>

            <p className="text-[13px] md:text-[15px] leading-relaxed text-brand-cream/80">
              From classic Bordeaux to coastal-driven whites, every pour is
              selected to sit gently beside the plate, never above it — allowing
              the evening to unfold with calm, considered balance.
            </p>

            <p className="mt-3 text-[11px] md:text-[13px] italic text-brand-gold/85">
              <span className="mb-2 block h-px w-10 bg-brand-gold/50" />
              “Every bottle is a story — we simply choose the right one for your
              moment.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}