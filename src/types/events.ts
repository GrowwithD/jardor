// src/types/events.ts
export type EventItem = {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  image: string;
  excerpt: string;
  thumbnails: string[]; // 👈 array berisi path gambar
};