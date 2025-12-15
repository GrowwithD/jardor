"use server";

import ReservationClient from "./Client";
import { getReservationSection, getEvents } from "@/lib/fetchers";

export default async function ReservationSectionServer() {
  const reservation = await getReservationSection();
  const events = await getEvents();

  return <ReservationClient reservation={reservation} events={events} />;
}