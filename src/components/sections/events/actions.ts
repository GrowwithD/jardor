"use server";

import { submitReservation, type ReservationInput } from "@/lib/fetchers";

export type ReservationActionState = {
  ok: boolean;
  message?: string;
  errors?: Record<string, string>;
};

function pick(formData: FormData, key: string) {
  return (formData.get(key) ?? "").toString().trim();
}

export async function submitReservationAction(
  _prevState: ReservationActionState,
  formData: FormData
): Promise<ReservationActionState> {
  try {
    const input: ReservationInput = {
      event_id: pick(formData, "event_id") || null,
      name: pick(formData, "name"),
      phone: pick(formData, "phone"),
      email: pick(formData, "email"),
      reservation_date: pick(formData, "reservation_date"), // YYYY-MM-DD
      reservation_time: pick(formData, "reservation_time"), // HH:mm
      guests: Number(pick(formData, "guests") || 0),
      notes: pick(formData, "notes") || null,
    };

    // Validasi ringan FE/BE (biar enak)
    const errors: Record<string, string> = {};
    if (!input.name) errors.name = "Name is required";
    if (!input.phone) errors.phone = "Phone is required";
    if (!input.email) errors.email = "Email is required";
    if (!input.reservation_date) errors.reservation_date = "Date is required";
    if (!input.reservation_time) errors.reservation_time = "Time is required";
    if (!input.guests || input.guests < 1) errors.guests = "Guests must be at least 1";

    if (Object.keys(errors).length) {
      return { ok: false, errors, message: "Please fix the form." };
    }

    await submitReservation(input);

    return { ok: true, message: "Reservation submitted successfully." };
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Failed to submit reservation.";
    return { ok: false, message: msg };
  }
}