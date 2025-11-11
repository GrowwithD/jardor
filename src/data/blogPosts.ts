// src/data/blogPosts.ts

export type BlogPost = {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  tag: string;
  readingTime: string;
  hero: string;
  gallery: string[];
  shortIntro: string;
  longDescription?: string;
  details?: {
    label: string;
    value: string;
  }[];
  highlightNote?: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: "introducing-jardor",
    title: "Introducing Jard’or: A Quiet Dialogue Between France & Nusa Dua",
    date: "2024-11-01",
    tag: "Maison",
    readingTime: "4 min read",
    hero: "/images/menu-hero.jpg",
    gallery: [
      "/images/about.png",
      "/images/main-food.jpg",
      "/images/main-food-2.jpg",
      "/images/main-food-3.jpg",
    ],
    shortIntro:
      "A first glimpse into Jard’or — where French technique, coastal produce, and composed hospitality meet by the shores of Nusa Dua.",
    longDescription: [
      "At Jard’or, we believe true luxury is quiet. It lives in the weight of a glass, the pace of service, the way a guest never has to ask twice.",
      "Our kitchen builds on French technique, guided by ingredients from the island — bright herbs, line-caught seafood, patient sauces, and clean finishes.",
      "The room is tuned for calm: softened acoustics, low lighting, and a cellar that favors character over noise.",
      "This journal marks the beginning of a series that opens our notebooks: the makers, rituals, and details that shape Jard’or."
    ].join("\n\n"),
    details: [
      {
        label: "Focus",
        value:
          "An introduction to Jard’or’s philosophy in food, service, and spatial design.",
      },
      {
        label: "For",
        value:
          "Guests, collaborators, and friends curious about the story behind the room.",
      },
    ],
    highlightNote:
      "A gentle starting point before exploring our menus, events, and cellar notes.",
  },
  {
    id: "cellar-notes-champagne",
    title: "Cellar Notes: Grower Champagne & Quiet Icons",
    date: "2024-10-12",
    tag: "Cellar",
    readingTime: "3 min read",
    hero: "/images/main-food-2.jpg",
    gallery: [
      "/images/main-food-2.jpg",
      "/images/main-food-3.jpg",
      "/images/menu-hero.jpg",
      "/images/main-food.jpg",
    ],
    shortIntro:
      "Why Jard’or leans into grower champagnes, minerality, and labels chosen for character over volume.",
    longDescription: [
      "Our champagne list is anchored by growers — producers who live close to their vines and work in deliberate detail.",
      "We look for tension, salinity, and length: wines that sit in harmony with the menu and the sea air of Nusa Dua.",
      "This entry is a note to guests who enjoy discovery: a map towards cuvées that speak softly but stay with you."
    ].join("\n\n"),
    details: [
      {
        label: "Pairing Thought",
        value:
          "Grower cuvées echo Jard’or’s seafood, garden herbs, and clean sauces.",
      },
    ],
  },
  {
    id: "behind-the-pass",
    title: "Behind the Pass: Composure, Heat & Precision",
    date: "2024-09-20",
    tag: "Kitchen",
    readingTime: "5 min read",
    hero: "/images/main-food-3.jpg",
    gallery: [
      "/images/main-food-3.jpg",
      "/images/main-food-2.jpg",
      "/images/main-food.jpg",
      "/images/menu-hero.jpg",
    ],
    shortIntro:
      "Inside the quiet choreography of Jard’or’s brigade — how silence, timing, and repetition shape each plate.",
    longDescription: [
      "Service at Jard’or is closer to a score than a script. Every movement in the kitchen is rehearsed, from the first stock to the last garnish.",
      "We train for clarity: clean calls, still hands, and a tempo that allows plates to leave the pass together, never rushed.",
      "For guests, this discipline translates into one feeling — everything arrives when it should, and nothing breaks the calm of the room."
    ].join("\n\n"),
    details: [
      {
        label: "Discipline",
        value:
          "Mise en place, quiet communication, and repetition by design.",
      },
    ],
  },
];

export function getPostBySlug(id: string): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id);
}