import { notFound } from "next/navigation";
import { EventDetailClient } from "./EventDetailClient";

export type Event = {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  location: string;
  hero: string;
  gallery: string[];
  shortIntro: string;
  longDescription?: string; // full content from editor / CMS
  details: {
    label: string;
    value: string;
  }[];
  highlightNote?: string;
};

const events: Event[] = [
  {
    id: "champagne-soiree",
    title: "Champagne Soirée: Grower Cuvées & Canapés",
    date: "2025-01-18",
    location: "Jard'or, Nusa Dua",
    hero: "/images/main-food-2.jpg",
    gallery: [
      "/images/main-food-2.jpg",
      "/images/main-food-3.jpg",
      "/images/main-food.jpg",
      "/images/menu-hero.jpg",
    ],
    shortIntro:
      "An intimate evening featuring grower champagne houses, paired canapés, and live jazz in the garden lounge.",
    longDescription: [
      "This Champagne Soirée is designed as a slow, thoughtful arc — from the first bright pour to the final quiet glass. Each cuvée is selected from growers whose work focuses on character, precision, and a sense of place.",
      "Canapés are built to mirror those profiles: saline, citrus, toasted, and layered textures that never shout over the wine. Service remains close but never intrusive, giving guests room to observe, talk, and enjoy.",
      "Perfect for couples, collectors, and industry friends who appreciate a more intimate articulation of champagne culture.",
    ].join("\n\n"),
    details: [
      {
        label: "Format",
        value:
          "Guided tasting of grower cuvées with a curated sequence of seasonal canapés.",
      },
      {
        label: "Atmosphere",
        value:
          "Low candlelight, vinyl & live jazz selections, intimate terrace and lounge seating.",
      },
      {
        label: "Reservation",
        value:
          "Limited seats. Advance reservation required through our concierge team.",
      },
    ],
    highlightNote:
      "For guests who value expressive champagne over big-label spectacle.",
  },
  {
    id: "chef-collab",
    title: "Four Hands Dinner with Chef Invité",
    date: "2024-12-05",
    location: "Jard'or, Nusa Dua",
    hero: "/images/main-food-3.jpg",
    gallery: [
      "/images/main-food-3.jpg",
      "/images/main-food.jpg",
      "/images/main-food-2.jpg",
      "/images/menu-hero.jpg",
    ],
    shortIntro:
      "Two perspectives in one room: Jard'or’s signature language in dialogue with a celebrated guest chef.",
    longDescription: [
      "Across the evening, courses move in conversation — one plate from Jard'or, one from our invited chef, occasionally merging on the same canvas.",
      "Guests are guided through the narrative, with optional wine pairings that track structure, acidity, and texture rather than obvious labels.",
    ].join("\n\n"),
    details: [
      {
        label: "Format",
        value:
          "Multi-course tasting with alternating plates and optional curated pairing.",
      },
      {
        label: "Focus",
        value:
          "Modern French technique, seasonal coastal produce, and subtle Balinese inflections.",
      },
      {
        label: "Reservation",
        value:
          "Very limited seating; reservations confirmed upon prepayment.",
      },
    ],
  },
  {
    id: "christmas-eve",
    title: "Christmas Eve Tasting Journey",
    date: "2024-12-24",
    location: "Jard'or, Nusa Dua",
    hero: "/images/main-food.jpg",
    gallery: [
      "/images/main-food.jpg",
      "/images/main-food-2.jpg",
      "/images/main-food-3.jpg",
      "/images/menu-hero.jpg",
    ],
    shortIntro:
      "A festive evening of refined comfort, rare cellar pours, and candlelit warmth by the coastline.",
    longDescription: [
      "The menu leans into generous flavors without heaviness — game, shellfish, winter vegetables, and polished classic sauces.",
      "Ambient carols, softened lighting, and discreet service create a Christmas Eve that feels celebratory yet composed.",
    ].join("\n\n"),
    details: [
      {
        label: "Format",
        value:
          "Seasonal tasting menu with considered vegetarian options and curated pairings.",
      },
      {
        label: "Atmosphere",
        value:
          "Candlelit, warmly festive, ideal for couples and families.",
      },
      {
        label: "Reservation",
        value:
          "Strongly recommended; early sittings available for families.",
      },
    ],
  },
  {
    id: "past-bordeaux",
    title: "Bordeaux Library Night",
    date: "2024-07-20",
    location: "Jard'or, Nusa Dua",
    hero: "/images/menu-hero.jpg",
    gallery: [
      "/images/menu-hero.jpg",
      "/images/main-food.jpg",
      "/images/main-food-2.jpg",
      "/images/main-food-3.jpg",
    ],
    shortIntro:
      "A retrospective Bordeaux tasting from our private library, paired with Jard'or signature plates.",
    longDescription: [
      "Guests explored a tightly curated flight of Bordeaux, tasted side by side to highlight age, appellation, and structure.",
      "Notes from this edition inform future Library Nights, which will be announced through our Events page and direct invitations.",
    ].join("\n\n"),
    details: [
      {
        label: "Format",
        value:
          "Guided flights with small plates tuned to each pour.",
      },
      {
        label: "Status",
        value:
          "Completed. Register your interest with our team for future editions.",
      },
    ],
  },
];

function getEventById(id: string): Event | undefined {
  return events.find((e) => e.id === id);
}

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return events.map((event) => ({ id: event.id }));
}

export default async function EventDetailPage({ params }: PageProps) {
  const { id } = await params;
  const event = getEventById(id);

  if (!event) notFound();

  return <EventDetailClient event={event} />;
}