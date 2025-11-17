"use client";

import Link from "next/link";
import BatikSectionLayout from "@/components/layouts/BatikSectionLayout";
import SectionHeader from "@/components/molecules/SectionHeader";
import ButtonGold from "@/components/atoms/ButtonGold";

const featuredRoles = [
  {
    title: "Restaurant Manager",
    tag: "Leadership · Guest Experience",
  },
  {
    title: "Sommelier / Wine Steward",
    tag: "Cellar · Pairing · Service",
  },
  {
    title: "Chef de Partie",
    tag: "Hot Kitchen · Plating Precision",
  },
  {
    title: "Guest Relations Host",
    tag: "Front Desk · Reservations",
  },
];

export default function CareerOpenings() {
  return (
    <BatikSectionLayout>
      {/* HEADER */}
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="Careers"
          title="Join the Opening Team of Jard’or"
          subtitle="We are assembling a founding team of hospitality professionals for Jard’or in Nusa Dua. If you live for service, calm precision, and sincere guest experience — we’d love to hear from you."
          align="center"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-14 space-y-10">
        {/* MAIN PANEL */}
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-easing="ease-out-cubic"
          className="
            rounded-[32px]
            border border-brand-gold/30
            bg-linear-to-b from-black/98 via-[#050807] to-[#030404]
            px-6 md:px-8 py-9 md:py-10
            shadow-[0_24px_90px_rgba(0,0,0,0.98)]
            ring-1 ring-brand-gold/15
            hover:ring-brand-gold/25
            hover:shadow-[0_30px_110px_rgba(200,180,130,0.22)]
            transition-all duration-500
            space-y-8
          "
        >
          {/* Heading in panel */}
          <div className="text-center space-y-3">
            <p className="text-eyebrow">Current Openings</p>

            <h3 className="font-optima text-xl md:text-2xl tracking-[0.14em] text-brand-gold uppercase">
              Build the Service Language of Jard’or
            </h3>

            <p className="text-[11px] md:text-[13px] text-brand-cream/80 leading-relaxed max-w-3xl mx-auto">
              We post confirmed vacancies on LinkedIn. The roles below reflect key
              functions we are shaping for our opening. If one of them feels like you,
              step forward and introduce yourself.
            </p>
          </div>

          {/* Spotlight role */}
          <div
            className="
              relative max-w-3xl mx-auto
              rounded-2xl
              bg-linear-to-r from-brand-green-soft/14 via-black/96 to-brand-green-soft/8
              border border-brand-gold/22
              px-4 py-4 md:px-5 md:py-5
              flex flex-col md:flex-row items-start md:items-center gap-3
              shadow-[0_18px_60px_rgba(0,0,0,0.9)]
            "
          >
            <div className="flex-1 space-y-1">
              <p className="text-eyebrow">Spotlight Role</p>

              <p className="font-optima text-[14px] md:text-[16px] text-brand-cream tracking-[0.08em] uppercase">
                Founding Service &amp; Sommelier Team
              </p>

              <p className="text-[10px] md:text-[11px] text-brand-cream/75 leading-relaxed">
                Help define Jard’or’s service rituals from day one — from the cellar
                to the dining room, building standards that feel disciplined yet
                genuinely human.
              </p>
            </div>

            <div className="flex md:flex-col gap-2 md:items-end">
              <div className="px-3 py-1 rounded-full border border-brand-gold/40 text-[9px] text-brand-gold/90 uppercase tracking-[0.18em]">
                Full-time · Nusa Dua
              </div>
            </div>
          </div>

          {/* Role pills */}
          <div
            className="flex flex-wrap justify-center gap-3 pt-2"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-easing="ease-out-cubic"
            data-aos-delay="120"
          >
            {featuredRoles.map((role, idx) => (
              <div
                key={role.title}
                className="
                  group
                  px-4 py-2
                  rounded-full
                  border border-brand-gold/18
                  bg-black/92
                  text-left
                  shadow-[0_10px_30px_rgba(0,0,0,0.9)]
                  hover:border-brand-gold/55
                  hover:bg-linear-to-r hover:from-brand-gold/10 hover:to-black
                  transition-all duration-400
                "
              >
                <p className="font-optima text-[11px] md:text-[12px] text-brand-gold group-hover:text-brand-gold tracking-[0.08em] uppercase">
                  {role.title}
                </p>
                <p className="text-[8px] md:text-[9px] text-brand-cream/70">
                  {role.tag}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className="space-y-3 pt-3 text-center"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-easing="ease-out-cubic"
            data-aos-delay="220"
          >
            <ButtonGold
              href="https://www.linkedin.com/company/jardor-bali/jobs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 mt-1"
            >
              View Positions on LinkedIn
              <span className="text-[13px] -mt-[1px]">↗</span>
            </ButtonGold>

            <p className="max-w-md mx-auto text-[9px] md:text-[10px] text-brand-cream/60 leading-relaxed">
              Don’t see an exact match yet? You may share your résumé and a short note with{" "}
              <a
                href="mailto:careers@jardor.com"
                className="text-brand-gold hover:text-brand-gold/80 transition-colors"
              >
                careers@jardor.com
              </a>
              . Strong profiles are kept on file for future stages of Jard’or’s journey.
            </p>
          </div>
        </div>
      </div>
    </BatikSectionLayout>
  );
}