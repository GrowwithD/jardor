"use client";

import { useState } from "react";
import ButtonGold from "@/components/atoms/ButtonGold";
import ButtonOutlineGold from "@/components/atoms/ButtonOutlineGold";
import ParallaxBackground from "@/components/atoms/ParallaxBackground";

type EventType = {
    id: string;
    title: string;
};

type ReservationSectionType = {
    eyebrow_form: string;
    title_form: string;
    privacy_notice: string;
    right_title: string;
    right_description: string;
    button_text: string;
};

export default function ReservationClient({
    reservation,
    events,
}: {
    reservation: ReservationSectionType;
    events: EventType[];
}) {
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
            <ParallaxBackground />

            {/* WRAPPER */}
            <div className="relative max-w-2xl mx-auto px-6 space-y-12">

                {/* HEADER */}
                <div className="text-center space-y-3">
                    <p className="text-[11px] uppercase tracking-[0.26em] text-brand-gold/70">
                        {reservation.eyebrow_form}
                    </p>

                    <h2 className="text-4xl md:text-5xl font-light tracking-wide">
                        {reservation.title_form}
                    </h2>

                    {reservation.right_description && (
                        <p className="text-brand-cream/70 text-sm leading-relaxed max-w-md mx-auto">
                            {reservation.right_description}
                        </p>
                    )}
                </div>

                {/* FORM */}
                <form
                    className="
                        border border-brand-gold/40
                        p-6 md:p-8
                        bg-black/40 backdrop-blur-sm
                        ring-1 ring-brand-gold/10
                        space-y-7
                        text-brand-cream
                    "
                >
                    {/* EVENT DROPDOWN */}
                    <div>
                        <label className="block mb-1 text-sm tracking-wide text-brand-gold/80">
                            Reservation Type
                        </label>
                        <select
                            className="
                                w-full bg-black/30 border border-brand-gold/30
                                px-3 py-3 text-sm outline-none
                                focus:border-brand-gold focus:ring-0
                            "
                        >
                            <option value="">Select Event</option>

                            {/* ⬇ dynamic events from API */}
                            {events.map((ev) => (
                                <option key={ev.id} value={ev.id}>
                                    {ev.title}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* NAME */}
                    <div>
                        <label className="block mb-1 text-sm tracking-wide text-brand-gold/80">
                            Name
                        </label>
                        <input
                            type="text"
                            required
                            className="
                                w-full bg-black/30 border border-brand-gold/30
                                px-3 py-3 text-sm outline-none
                                focus:border-brand-gold focus:ring-0
                            "
                        />
                    </div>

                    {/* PHONE */}
                    <div>
                        <label className="block mb-1 text-sm tracking-wide text-brand-gold/80">
                            Phone
                        </label>
                        <input
                            type="text"
                            required
                            className="
                                w-full bg-black/30 border border-brand-gold/30
                                px-3 py-3 text-sm outline-none
                                focus:border-brand-gold focus:ring-0
                            "
                        />
                    </div>

                    {/* EMAIL */}
                    <div>
                        <label className="block mb-1 text-sm tracking-wide text-brand-gold/80">
                            Email
                        </label>
                        <input
                            type="email"
                            required
                            className="
                                w-full bg-black/30 border border-brand-gold/30
                                px-3 py-3 text-sm outline-none
                                focus:border-brand-gold focus:ring-0
                            "
                        />
                    </div>

                    {/* DATE & TIME */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-1 text-sm tracking-wide text-brand-gold/80">
                                Date
                            </label>
                            <input
                                type="date"
                                required
                                className="
                                    w-full bg-black/30 border border-brand-gold/30
                                    px-3 py-3 text-sm outline-none
                                    focus:border-brand-gold focus:ring-0
                                "
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm tracking-wide text-brand-gold/80">
                                Time
                            </label>
                            <input
                                type="time"
                                required
                                className="
                                    w-full bg-black/30 border border-brand-gold/30
                                    px-3 py-3 text-sm outline-none
                                    focus:border-brand-gold focus:ring-0
                                "
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
                            className="
                                w-full bg-black/30 border border-brand-gold/30
                                px-3 py-3 text-sm outline-none
                                focus:border-brand-gold focus:ring-0
                            "
                        />
                    </div>

                    {/* NOTES */}
                    <div>
                        <label className="block mb-1 text-sm tracking-wide text-brand-gold/80">
                            Notes / Requests
                        </label>
                        <textarea
                            rows={3}
                            className="
                                w-full bg-black/30 border border-brand-gold/30
                                px-3 py-3 text-sm resize-none outline-none
                                focus:border-brand-gold focus:ring-0
                            "
                        />
                    </div>

                    {/* PRIVACY CHECKBOX */}
                    <div className="flex items-start gap-3 pt-2">
                        <input
                            type="checkbox"
                            checked={privacyAccepted}
                            onChange={() => setPrivacyAccepted(!privacyAccepted)}
                            className="
                                mt-1 h-4 w-4 cursor-pointer
                                border border-brand-gold/40
                                bg-black/40 accent-brand-gold
                                checked:bg-brand-gold checked:border-brand-gold
                            "
                        />
                        <label className="text-sm text-brand-cream/70 leading-relaxed cursor-pointer">
                            {reservation.privacy_notice}
                        </label>
                    </div>

                    {/* SUBMIT + WHATSAPP */}
                    <div className="pt-4 flex flex-col gap-3">
                        <ButtonGold href="#">{reservation.button_text}</ButtonGold>
                        <ButtonOutlineGold
                            href="https://wa.me/628133630509"
                            target="_blank"
                        >
                            WhatsApp Us
                        </ButtonOutlineGold>
                    </div>

                </form>
            </div>
        </section>
    );
}