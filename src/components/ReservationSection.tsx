"use client";

import { useState } from "react";
import ButtonGold from "@/components/atoms/ButtonGold";
import ButtonOutlineGold from "@/components/atoms/ButtonOutlineGold";

export default function ReservationSection() {
    const [privacyAccepted, setPrivacyAccepted] = useState(false);

    return (
        <section
            id="reservation"
            className="
                relative py-20 md:py-28
                bg-black text-brand-cream
                overflow-hidden
            "
        >
            {/* ===== DECORATIVE IMAGE (LEFT SIDE) ===== */}
            <div
                className="
                    absolute inset-y-0 left-0 w-[100%]
                    bg-cover bg-center bg-no-repeat bg-fixed
                    opacity-[0.18]
                    mix-blend-lighten
                "
                style={{
                    backgroundImage: "url('/images/DSC04930-HDR.jpg')",
                }}
            />

            {/* ===== MAIN GRID ===== */}
            <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-start">

                {/* ============ LEFT: FORM ============ */}
                <form
                    className="
                        border border-brand-gold/40
                        p-6 md:p-8
                        bg-black/40 backdrop-blur-sm
                        ring-1 ring-brand-gold/10
                        space-y-5
                        text-brand-cream
                        relative
                    "
                >
                    {/* EYEBROW */}
                    <p className="text-[10px] uppercase tracking-[0.26em] text-brand-gold/70">
                        Reservation Form
                    </p>

                    {/* TITLE */}
                    <h2 className="font-serif text-2xl md:text-3xl text-brand-cream mb-2">
                        Reserve a Table at Jard’Or
                    </h2>

                    {/* NAME */}
                    <div>
                        <label className="block mb-1 text-sm tracking-wide text-brand-gold/80">Name</label>
                        <input
                            type="text"
                            required
                            className="w-full bg-black/40 border border-brand-gold/30 px-3 py-2.5 text-sm focus:border-brand-gold outline-none"
                        />
                    </div>

                    {/* PHONE */}
                    <div>
                        <label className="block mb-1 text-sm tracking-wide text-brand-gold/80">Phone</label>
                        <input
                            type="text"
                            required
                            className="w-full bg-black/40 border border-brand-gold/30 px-3 py-2.5 text-sm"
                        />
                    </div>

                    {/* EMAIL */}
                    <div>
                        <label className="block mb-1 text-sm tracking-wide text-brand-gold/80">Email</label>
                        <input
                            type="email"
                            required
                            className="w-full bg-black/40 border border-brand-gold/30 px-3 py-2.5 text-sm"
                        />
                    </div>

                    {/* DATE + TIME */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-1 text-sm tracking-wide text-brand-gold/80">Date</label>
                            <input
                                type="date"
                                required
                                className="w-full bg-black/40 border border-brand-gold/30 px-3 py-2.5 text-sm"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm tracking-wide text-brand-gold/80">Time</label>
                            <input
                                type="time"
                                required
                                className="w-full bg-black/40 border border-brand-gold/30 px-3 py-2.5 text-sm"
                            />
                        </div>
                    </div>

                    {/* GUESTS */}
                    <div>
                        <label className="block mb-1 text-sm tracking-wide text-brand-gold/80">
                            Number of Guests
                        </label>
                        <input
                            type="number"
                            min={1}
                            required
                            className="w-full bg-black/40 border border-brand-gold/30 px-3 py-2.5 text-sm"
                        />
                    </div>

                    {/* HOTEL */}
                    <div>
                        <label className="block mb-1 text-sm tracking-wide text-brand-gold/80">
                            Hotel Name (Optional)
                        </label>
                        <input
                            type="text"
                            className="w-full bg-black/40 border border-brand-gold/30 px-3 py-2.5 text-sm"
                        />
                    </div>

                    {/* NOTES */}
                    <div>
                        <label className="block mb-1 text-sm tracking-wide text-brand-gold/80">
                            Notes / Requests
                        </label>
                        <textarea
                            rows={3}
                            className="w-full bg-black/40 border border-brand-gold/30 px-3 py-2.5 text-sm resize-none"
                        />
                    </div>

                    {/* PRIVACY */}
                    <button
                        type="button"
                        onClick={() => setPrivacyAccepted(!privacyAccepted)}
                        className={`
                            w-full text-center py-2 text-xs uppercase tracking-[0.18em]
                            transition-all border
                            ${
                                privacyAccepted
                                    ? "bg-brand-gold text-black border-brand-gold"
                                    : "border-brand-gold/40 text-brand-cream/80"
                            }
                        `}
                    >
                        {privacyAccepted ? "Privacy Accepted" : "Accept Data Privacy"}
                    </button>

                    {/* NOTICE */}
                    <p className="text-xs text-brand-cream/60 leading-relaxed pt-1">
                        This form submits a reservation request. Our team will contact you via phone or email
                        to confirm availability. If you include your hotel name, it allows us to coordinate
                        your reservation directly with your hotel’s front office for a smoother and more
                        seamless arrival.
                    </p>
                </form>

                {/* ============ RIGHT: TEXT + CTA ============ */}
                <div className="flex flex-col justify-center md:pl-10 space-y-8">

                    <h2 className="font-serif text-4xl md:text-5xl text-brand-cream tracking-wide">
                        Your Evening Awaits
                    </h2>

                    <p className="text-brand-cream/75 text-base leading-relaxed max-w-md">
                        For urgent reservations or same-day arrangements, contact our concierge directly.
                    </p>

                    <div className="flex flex-col gap-4 max-w-sm">
                        <ButtonGold href="#">
                            Reserve
                        </ButtonGold>

                        <ButtonOutlineGold href="https://wa.me/628000000000" target="_blank">
                            WhatsApp Us
                        </ButtonOutlineGold>
                    </div>

                </div>

            </div>
        </section>
    );
}