"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ChefSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 120,
    });
  }, []);

  const chefName = "Chef Name Here";
  const chefTitle = "Our Executive Chef";

  return (
    <section className="relative bg-brand-green py-16 md:py-20 overflow-hidden">


      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div
          data-aos="fade-up"
          className="
            grid gap-10
            md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]
            items-center
          "
        >
          {/* LEFT — TEXT */}
          <div className="space-y-4 text-center md:text-left">
            <p className="text-[9px] md:text-[10px] uppercase tracking-[0.26em] text-brand-gold/80">
              {chefTitle}
            </p>

            <div className="flex flex-col items-center md:items-start gap-2">
              <h2 className="font-serif text-[1.7rem] md:text-[2.1rem] tracking-[0.08em] text-brand-cream">
                {chefName}
              </h2>

            </div>

            <p className="text-[13px] md:text-[15px] leading-relaxed text-brand-cream/85">
              At the helm of Jard’or’s kitchen is an executive chef who treats each
              plate as quiet architecture — measured flavors, disciplined techniques,
              and a philosophy that favors clarity over complication.
            </p>

            <p className="text-[13px] md:text-[15px] leading-relaxed text-brand-cream/80">
              Years in French brigades and fine hotels across Asia are distilled
              into a menu that feels confident rather than theatrical: precise sauces,
              restrained garnishes, and produce chosen for character, not trend.
            </p>

            <p className="mt-3 text-[11px] md:text-[13px] italic text-brand-gold/85">
              <span className="mb-2 block h-px w-10 bg-brand-gold/50" />
              “We design menus to be remembered in silence — long after the last
              course has left the table.”
            </p>
          </div>

          {/* RIGHT — PORTRAIT */}
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
                alt="Jard’or Executive Chef"
                fill
                className="object-cover transition-transform duration-[1200ms] hover:scale-[1.04]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}