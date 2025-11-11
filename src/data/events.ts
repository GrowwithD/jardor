// src/data/events.ts
export type EventItem = {
  id: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  description: string;
};

export const events: EventItem[] = [
  {
    id: "champagne-soiree",
    title: "Champagne Soirée: Grower Cuvées & Canapés",
    date: "2025-01-18",
    image: "/images/main-food-2.jpg",
    excerpt:
      "An evening with grower champagnes, seasonal hors d’oeuvres, and live jazz in our garden lounge.",
    description:
      "An intimate evening featuring grower champagne houses, paired canapés, and live jazz in the garden lounge.",
  },
  {
    id: "chef-collab",
    title: "Four Hands Dinner with Chef Invité",
    date: "2024-12-05",
    image: "/images/main-food-3.jpg",
    excerpt:
      "A collaboration dinner presenting two interpretations of modern French cuisine with Balinese nuance.",
    description:
      "Two chefs, one menu. A dialogue of French technique and coastal Bali ingredients in a limited-seat service.",
  },
  {
    id: "christmas-eve",
    title: "Christmas Eve Tasting Journey",
    date: "2024-12-24",
    image: "/images/main-food.jpg",
    excerpt:
      "A festive multi-course journey, rare cellar pours, and candlelit ambience by the coastline.",
    description:
      "A composed Christmas Eve menu with rare pours, soft lighting, and a calm celebratory pace.",
  },
  {
    id: "past-bordeaux",
    title: "Bordeaux Library Night",
    date: "2024-07-20",
    image: "/images/menu-hero.jpg",
    excerpt:
      "A retrospective Bordeaux tasting from our private library, paired with Jard’or signature plates.",
    description:
      "A retrospective tasting of Bordeaux from the Jard'or cellar, matched with quietly detailed plates.",
  },
];

export const parseDate = (value: string) => new Date(`${value}T00:00:00Z`);

export function getEventById(id: string) {
  return events.find((e) => e.id === id);
}