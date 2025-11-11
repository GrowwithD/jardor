"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function CareerOpenings() {
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

  return (
    <section className="relative mt-6">
      {/* dark panel background */}
      <div className="absolute inset-x-0 top-0 h-full bg-[#020303]" />
      <div className="relative max-w-6xl mx-auto px-6 py-18">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="rounded-[32px] border border-brand-gold/18 bg-linear-to-b from-black/98 via-[#040807] to-[#030404] px-6 md:px-8 py-9 md:py-10 shadow-[0_24px_90px_rgba(0,0,0,0.98)] space-y-8"
        >
          {/* Heading */}
          <div className="text-center space-y-3">
            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.24em] text-brand-gold/78">
              Current Openings
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-brand-gold uppercase tracking-[0.16em]">
              Join the Opening Circle
            </h2>
            <p className="max-w-3xl mx-auto text-[11px] md:text-[13px] text-brand-cream/80 leading-relaxed">
              We list official vacancies on LinkedIn. Below are key functions
              we&apos;re building around — if you see yourself here, step
              forward.
            </p>
          </div>

          {/* Spotlight */}
          <div className="relative max-w-3xl mx-auto rounded-2xl bg-linear-to-r from-brand-green-soft/14 via-black/96 to-brand-green-soft/8 border border-brand-gold/22 px-4 py-4 md:px-5 md:py-5 flex flex-col md:flex-row items-start md:items-center gap-3 shadow-[0_18px_60px_rgba(0,0,0,0.9)]">
            <div className="flex-1 space-y-1">
              <p className="text-[9px] md:text-[10px] uppercase tracking-[0.22em] text-brand-gold/80">
                Spotlight Role
              </p>
              <p className="font-serif text-[14px] md:text-[16px] text-brand-cream">
                Founding Service &amp; Sommelier Team
              </p>
              <p className="text-[10px] md:text-[11px] text-brand-cream/75 leading-relaxed">
                Help define Jard’or&apos;s service language from day one —
                creating standards that feel both disciplined and sincerely
                human.
              </p>
            </div>
            <div className="flex md:flex-col gap-2 md:items-end">
              <div className="px-3 py-1 rounded-full border border-brand-gold/40 text-[9px] text-brand-gold/90 uppercase tracking-[0.18em]">
                Full-time · Nusa Dua
              </div>
            </div>
          </div>

          {/* Role pills */}
          <div className="flex flex-wrap justify-center gap-3 pt-1">
            {featuredRoles.map((role) => (
              <div
                key={role.title}
                className="group px-4 py-2 rounded-full border border-brand-gold/16 bg-black/92 text-left shadow-[0_10px_30px_rgba(0,0,0,0.9)] hover:border-brand-gold/55 hover:bg-linear-to-r hover:from-brand-gold/10 hover:to-black transition-all"
              >
                <p className="font-serif text-[11px] md:text-[12px] text-brand-gold group-hover:text-brand-gold">
                  {role.title}
                </p>
                <p className="text-[8px] md:text-[9px] text-brand-cream/68">
                  {role.tag}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="space-y-3 pt-3 text-center">
            <Link
              href="https://www.linkedin.com/company/jardor-bali/jobs"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-brand-gold/40 px-9 py-2.5 text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-brand-gold hover:bg-brand-gold hover:text-black transition-all shadow-[0_14px_40px_rgba(0,0,0,0.95)]"
            >
              View Open Positions on LinkedIn
              <span className="text-[13px] -mt-[1px]">↗</span>
            </Link>

            <p className="max-w-md mx-auto text-[9px] md:text-[10px] text-brand-cream/60 leading-relaxed">
              No perfect match yet? Share your résumé and a short note with{" "}
              <a
                href="mailto:careers@jardor.com"
                className="text-brand-gold hover:text-brand-gold/80 transition-colors"
              >
                careers@jardor.com
              </a>
              . Exceptional profiles are always kept on file for future stages
              of Jard’or.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}