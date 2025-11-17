// src/data/blogPosts.ts

export type BlogPost = {
  id: string;
  title: string;
  date: string;
  tag: string;
  readingTime: string;
  hero: string;
  gallery: string[];
  shortIntro: string;
  longDescription?: string;
  details?: { label: string; value: string }[];
  highlightNote?: string;
};

const img = (file: string) => `/images/${file}`;

export const blogPosts: BlogPost[] = [
  // 1
  {
    id: "introducing-jardor",
    title: "Introducing Jard’or: A Quiet Dialogue Between France & Nusa Dua",
    date: "2024-11-01",
    tag: "Maison",
    readingTime: "4 min read",
    hero: img("DSC00222.jpg"),
    gallery: [img("DSC00222.jpg"), img("DSC00225.jpg"), img("DSC00229.jpg")],
    shortIntro:
      "A first glimpse into Jard’or — where French technique and Bali’s coastal calm meet.",
  },

  // 2
  {
    id: "cellar-notes-grower-champagne",
    title: "Cellar Notes: Grower Champagne & Quiet Icons",
    date: "2024-10-12",
    tag: "Cellar",
    readingTime: "3 min read",
    hero: img("DSC00234.jpg"),
    gallery: [img("DSC00234.jpg"), img("DSC00240.jpg"), img("DSC00252.jpg")],
    shortIntro:
      "Why Jard’or leans into grower champagnes — tension, purity, and character over noise.",
  },

  // 3
  {
    id: "behind-the-pass",
    title: "Behind the Pass: Composure, Heat & Precision",
    date: "2024-09-20",
    tag: "Kitchen",
    readingTime: "5 min read",
    hero: img("DSC00258.jpg"),
    gallery: [img("DSC00258.jpg"), img("DSC00263.jpg"), img("DSC00265.jpg")],
    shortIntro:
      "Inside Jard’or’s quiet choreography — how discipline shapes every plate.",
  },

  // 4
  {
    id: "garden-lounge-dusk",
    title: "The Garden Lounge at Dusk",
    date: "2024-09-05",
    tag: "Maison",
    readingTime: "2 min read",
    hero: img("DSC00268.jpg"),
    gallery: [img("DSC00268.jpg"), img("DSC00269.jpg"), img("DSC00273.jpg")],
    shortIntro:
      "A study of twilight light, soft herb aromas, and the calm before the evening service.",
  },

  // 5
  {
    id: "crafting-the-menu",
    title: "Crafting the Seasonal Menu",
    date: "2024-08-21",
    tag: "Kitchen",
    readingTime: "6 min read",
    hero: img("DSC00276.jpg"),
    gallery: [img("DSC00276.jpg"), img("DSC00278.jpg"), img("DSC00279.jpg")],
    shortIntro:
      "The disciplined ritual behind balancing acidity, texture, and silence in a tasting journey.",
  },

  // 6
  {
    id: "wine-dinner-rituals",
    title: "Wine Dinner Rituals: Notes from the Cellar",
    date: "2024-08-08",
    tag: "Cellar",
    readingTime: "4 min read",
    hero: img("DSC00283.jpg"),
    gallery: [img("DSC00283.jpg"), img("DSC00287.jpg"), img("DSC00290.jpg")],
    shortIntro:
      "The philosophy behind pairing restraint with depth — curated evenings that unfold slowly.",
  },

  // 7
  {
    id: "pacing-service",
    title: "The Pace of Service: Why Timing Matters",
    date: "2024-07-28",
    tag: "Service",
    readingTime: "3 min read",
    hero: img("DSC00297.jpg"),
    gallery: [img("DSC00297.jpg"), img("DSC00300.jpg"), img("DSC00222.jpg")],
    shortIntro:
      "A glimpse into the choreography that ensures every table moves in quiet harmony.",
  },

  // 8
  {
    id: "chefs-hands",
    title: "Chef’s Hands: The Quiet Language of Technique",
    date: "2024-07-12",
    tag: "Kitchen",
    readingTime: "5 min read",
    hero: img("DSC00225.jpg"),
    gallery: [img("DSC00225.jpg"), img("DSC00229.jpg"), img("DSC00231.jpg")],
    shortIntro:
      "A closer look at the steady movements that define the Jard’or kitchen identity.",
  },

  // 9
  {
    id: "wine-glass-weight",
    title: "The Weight of a Glass: Designing for Calm",
    date: "2024-06-25",
    tag: "Design",
    readingTime: "2 min read",
    hero: img("DSC00240.jpg"),
    gallery: [img("DSC00240.jpg"), img("DSC00252.jpg"), img("DSC00297.jpg")],
    shortIntro:
      "Small details that shape the emotional temperature of the dining room.",
  },

  // 10
  {
    id: "garden-aromatics",
    title: "Garden Aromatics & Coastal Winds",
    date: "2024-06-07",
    tag: "Maison",
    readingTime: "3 min read",
    hero: img("DSC00258.jpg"),
    gallery: [img("DSC00258.jpg"), img("DSC00263.jpg"), img("DSC00268.jpg")],
    shortIntro:
      "How herbs from the garden influence the restaurant’s sensorial rhythm.",
  },

  // 11
  {
    id: "fermentation-notes",
    title: "Fermentation Notes: Quiet Depth in the Kitchen",
    date: "2024-05-29",
    tag: "Kitchen",
    readingTime: "4 min read",
    hero: img("DSC00269.jpg"),
    gallery: [img("DSC00269.jpg"), img("DSC00273.jpg"), img("DSC00276.jpg")],
    shortIntro:
      "The silent foundation of complexity — ferments, cures, and patient preparations.",
  },

  // 12
  {
    id: "cellar-humidity",
    title: "Cellar Humidity: The Invisible Ingredient",
    date: "2024-05-18",
    tag: "Cellar",
    readingTime: "2 min read",
    hero: img("DSC00278.jpg"),
    gallery: [img("DSC00278.jpg"), img("DSC00279.jpg"), img("DSC00283.jpg")],
    shortIntro:
      "How moisture, temperature, and time shape character in the bottle.",
  },

  // 13
  {
    id: "table-setting",
    title: "Table Setting as a Quiet Ritual",
    date: "2024-05-01",
    tag: "Service",
    readingTime: "3 min read",
    hero: img("DSC00287.jpg"),
    gallery: [img("DSC00287.jpg"), img("DSC00290.jpg"), img("DSC00300.jpg")],
    shortIntro:
      "Why meticulous settings help guests enter a calmer emotional space.",
  },

  // 14
  {
    id: "salt-acidity-balance",
    title: "Salt, Acidity & Balance",
    date: "2024-04-19",
    tag: "Kitchen",
    readingTime: "4 min read",
    hero: img("DSC00290.jpg"),
    gallery: [img("DSC00290.jpg"), img("DSC00297.jpg"), img("DSC00252.jpg")],
    shortIntro:
      "A glimpse into the foundational calibration behind Jard’or’s sauces.",
  },

  // 15
  {
    id: "late-night-clean-down",
    title: "Late Night Clean-Down Rituals",
    date: "2024-04-03",
    tag: "Kitchen",
    readingTime: "2 min read",
    hero: img("DSC00300.jpg"),
    gallery: [img("DSC00300.jpg"), img("DSC00222.jpg"), img("DSC00234.jpg")],
    shortIntro:
      "How the brigade resets the room for a new day — precision, order, and care.",
  },

  // 16
  {
    id: "cutlery-weight",
    title: "The Weight of Cutlery & Dining Psychology",
    date: "2024-03-24",
    tag: "Design",
    readingTime: "3 min read",
    hero: img("DSC00222.jpg"),
    gallery: [img("DSC00222.jpg"), img("DSC00225.jpg"), img("DSC00252.jpg")],
    shortIntro:
      "Why the tactile feel of silverware affects the entire dining rhythm.",
  },

  // 17
  {
    id: "guest-arrival-theatre",
    title: "Guest Arrival: The Soft Theatre of First Impressions",
    date: "2024-03-10",
    tag: "Service",
    readingTime: "4 min read",
    hero: img("DSC00225.jpg"),
    gallery: [img("DSC00225.jpg"), img("DSC00229.jpg"), img("DSC00231.jpg")],
    shortIntro:
      "How a calm, unhurried arrival sets the emotional tone for the night.",
  },

  // 18
  {
    id: "cellar-journal",
    title: "Cellar Journal: French Whites & the Sea",
    date: "2024-02-27",
    tag: "Cellar",
    readingTime: "5 min read",
    hero: img("DSC00231.jpg"),
    gallery: [img("DSC00231.jpg"), img("DSC00234.jpg"), img("DSC00240.jpg")],
    shortIntro:
      "Exploring minerality and salinity as guiding points for pairing seafood.",
  },

  // 19
  {
    id: "service-timing",
    title: "Service Timing: Holding the Room’s Pulse",
    date: "2024-02-12",
    tag: "Service",
    readingTime: "3 min read",
    hero: img("DSC00252.jpg"),
    gallery: [img("DSC00252.jpg"), img("DSC00253.jpg"), img("DSC00265.jpg")],
    shortIntro:
      "How micro-adjustments in pacing create an uninterrupted dining flow.",
  },

  // 20
  {
    id: "ambient-lighting",
    title: "Ambient Lighting & Emotional Acoustics",
    date: "2024-01-30",
    tag: "Design",
    readingTime: "3 min read",
    hero: img("DSC00263.jpg"),
    gallery: [img("DSC00263.jpg"), img("DSC00265.jpg"), img("DSC00276.jpg")],
    shortIntro:
      "Designing a room where warmth, shadow, and silence work in harmony.",
  },
];

export function getPostBySlug(id: string) {
  return blogPosts.find((post) => post.id === id);
}