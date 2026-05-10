"use client";

import { useActionState, useEffect, useMemo, useState } from "react";
import ButtonGold from "@/components/atoms/ButtonGold";
import ButtonOutlineGold from "@/components/atoms/ButtonOutlineGold";
import ParallaxBackground from "@/components/atoms/ParallaxBackground";
import { submitReservationAction, type ReservationActionState } from "./actions";

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

const initialState: ReservationActionState = { ok: false };

export default function ReservationClient({
  reservation,
  events,
}: {
  reservation: ReservationSectionType;
  events: EventType[];
}) {
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const [state, formAction, pending] = useActionState(
    submitReservationAction,
    initialState
  );

  // yyyy-mm-dd untuk min date
  const minDate = useMemo(() => {
    const d = new Date();
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  }, []);

  useEffect(() => {
    if (state.ok) {
      setPrivacyAccepted(false);
      // optional: reset form setelah sukses
      // (kalau mau auto-clear input)
      // document.getElementById("reservation-form")?.reset();
    }
  }, [state.ok]);

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
            <p className="text-brand-cream/70 text-base md:text-lg leading-relaxed max-w-md mx-auto">
              {reservation.right_description}
            </p>
          )}
        </div>

        {/* FORM */}
        <form
          id="reservation-form"
          action={formAction}
          className="
            border border-brand-gold/40
            p-6 md:p-8
            bg-black/40 backdrop-blur-sm
            ring-1 ring-brand-gold/10
            space-y-7
            text-brand-cream
          "
        >
          {/* STATUS MESSAGE */}
          {state.message && (
            <div
              className={`text-base border px-4 py-3 ${
                state.ok
                  ? "border-emerald-500/40 text-emerald-200 bg-emerald-500/10"
                  : "border-red-500/40 text-red-200 bg-red-500/10"
              }`}
            >
              {state.message}
            </div>
          )}

          {/* EVENT */}
          <div>
            <label htmlFor="res-event" className="block mb-2 text-base md:text-lg tracking-wide text-brand-gold/80">
              Reservation Type
            </label>
            <select
              id="res-event"
              name="event_id"
              className="
                w-full bg-black border border-brand-gold/30
                px-4 py-2 text-base md:text-lg outline-none text-brand-cream
                focus:border-brand-gold focus:ring-0
              "
              defaultValue=""
            >
              <option value="" style={{ background: "#0A0D0B", color: "#c8b482" }}>Select Event</option>
              {events.map((ev) => (
                <option key={ev.id} value={ev.id} style={{ background: "#0A0D0B", color: "#c8b482" }}>
                  {ev.title}
                </option>
              ))}
            </select>
          </div>

          {/* NAME */}
          <div>
            <label htmlFor="res-name" className="block mb-2 text-base md:text-lg tracking-wide text-brand-gold/80">
              Name
            </label>
            <input
              id="res-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className="
                w-full bg-black/30 border border-brand-gold/30
                px-4 py-2 text-base md:text-lg outline-none
                focus:border-brand-gold focus:ring-0
              "
            />
            {state.errors?.name && (
              <p className="mt-1 text-sm text-red-300">{state.errors.name}</p>
            )}
          </div>

          {/* PHONE */}
          <div>
            <label htmlFor="res-phone" className="block mb-2 text-base md:text-lg tracking-wide text-brand-gold/80">
              Phone
            </label>
            <input
              id="res-phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              inputMode="tel"
              className="
                w-full bg-black/30 border border-brand-gold/30
                px-4 py-2 text-base md:text-lg outline-none
                focus:border-brand-gold focus:ring-0
              "
            />
            {state.errors?.phone && (
              <p className="mt-1 text-sm text-red-300">{state.errors.phone}</p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <label htmlFor="res-email" className="block mb-2 text-base md:text-lg tracking-wide text-brand-gold/80">
              Email
            </label>
            <input
              id="res-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="
                w-full bg-black/30 border border-brand-gold/30
                px-4 py-2 text-base md:text-lg outline-none
                focus:border-brand-gold focus:ring-0
              "
            />
            {state.errors?.email && (
              <p className="mt-1 text-sm text-red-300">{state.errors.email}</p>
            )}
          </div>

          {/* DATE & TIME */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="res-date" className="block mb-2 text-base md:text-lg tracking-wide text-brand-gold/80">
                Date
              </label>
              <input
                id="res-date"
                name="reservation_date"
                type="date"
                required
                min={minDate}
                className="
                  w-full bg-black/30 border border-brand-gold/30
                  px-4 py-2 text-base md:text-lg outline-none
                  focus:border-brand-gold focus:ring-0
                  text-brand-cream
                  date-gold
                "
              />
              {state.errors?.reservation_date && (
                <p className="mt-1 text-sm text-red-300">
                  {state.errors.reservation_date}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="res-time" className="block mb-2 text-base md:text-lg tracking-wide text-brand-gold/80">
                Time
              </label>
              <input
                id="res-time"
                name="reservation_time"
                type="time"
                required
                step={60}
                className="
                  w-full bg-black/30 border border-brand-gold/30
                  px-4 py-2 text-base md:text-lg outline-none
                  focus:border-brand-gold focus:ring-0
                  text-brand-cream
                  time-gold
                "
              />
              {state.errors?.reservation_time && (
                <p className="mt-1 text-sm text-red-300">
                  {state.errors.reservation_time}
                </p>
              )}
            </div>
          </div>

          {/* GUESTS */}
          <div>
            <label htmlFor="res-guests" className="block mb-2 text-base md:text-lg tracking-wide text-brand-gold/80">
              Number of Guests
            </label>
            <input
              id="res-guests"
              name="guests"
              type="number"
              min={1}
              required
              inputMode="numeric"
              className="
                w-full bg-black/30 border border-brand-gold/30
                px-4 py-2 text-base md:text-lg outline-none
                focus:border-brand-gold focus:ring-0
              "
            />
            {state.errors?.guests && (
              <p className="mt-1 text-sm text-red-300">{state.errors.guests}</p>
            )}
          </div>

          {/* NOTES */}
          <div>
            <label htmlFor="res-notes" className="block mb-2 text-base md:text-lg tracking-wide text-brand-gold/80">
              Notes / Requests
            </label>
            <textarea
              id="res-notes"
              name="notes"
              rows={3}
              className="
                w-full bg-black/30 border border-brand-gold/30
                px-4 py-2 text-base md:text-lg resize-none outline-none
                focus:border-brand-gold focus:ring-0
              "
            />
          </div>

          {/* PRIVACY */}
          <div className="flex items-start gap-3 pt-2">
            <input
              id="res-privacy"
              name="privacy"
              type="checkbox"
              required
              checked={privacyAccepted}
              onChange={() => setPrivacyAccepted(!privacyAccepted)}
              className="
                mt-1 h-4 w-4 cursor-pointer
                border border-brand-gold/40
                bg-black/40 accent-brand-gold
                checked:bg-brand-gold checked:border-brand-gold
              "
            />
            <label htmlFor="res-privacy" className="text-base md:text-lg text-brand-cream/70 leading-relaxed cursor-pointer">
              {reservation.privacy_notice}
            </label>
          </div>

          {/* ACTIONS */}
          <div className="pt-4 flex flex-col gap-3">
            {/* ✅ Submit (no double button) */}
            <ButtonGold
              id="gtm-reserve-submit"
              type="submit"
            >
              {pending ? "Submitting..." : reservation.button_text}
            </ButtonGold>

            <ButtonOutlineGold
              id="gtm-whatsapp-reservation"
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
