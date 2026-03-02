// src/data/seo.ts
import type { Metadata } from "next";

export type SeoSlug =
  | "home"
  | "menus"
  | "events"
  | "gallery"
  | "about"
  | "blog"
  | "careers"
  | "reservation"
  | "contact";

type SeoPageConfig = {
  slug: SeoSlug;
  title: string;
  description: string;
  keywords?: string[];
};

const BASE_URL = "https://jardor.com"; // TODO replace
const DEFAULT_IMAGE = `${BASE_URL}/images/og-default.jpg`;

const ORG_NAME = "Jard’or Restaurant";
const ORG_LOGO = `${BASE_URL}/images/logo.png`;
const ORG_ADDRESS = "Nusa Dua, Bali - Indonesia";

const AUTHOR = {
  name: "Jard’or Editorial",
  url: BASE_URL,
};

export const seoPages: SeoPageConfig[] = [
  {
    slug: "home",
    title: "Jard’or Restaurant – French Dining in Nusa Dua, Bali",
    description:
      "Un voyage de goût in Nusa Dua, Bali. Jard’or French Restaurant offers refined tasting menus, curated wine pairings, and intimate dining experiences.",
    keywords: [
      "French restaurant Bali",
      "fine dining Nusa Dua",
      "Jardor restaurant",
      "tasting menu Bali",
      "wine pairing Bali",
    ],
  },

  {
    slug: "menus",
    title: "Jard’or Menus – Tasting Journeys & À La Carte Selection",
    description:
      "Explore Jard’or’s curated French-inspired menus: tasting journeys, à la carte selections, wine pairings, and seasonal creations crafted with precision.",
    keywords: [
      "Jardor menu",
      "tasting menu Bali",
      "fine dining menus",
      "French food Bali",
    ],
  },

  {
    slug: "events",
    title: "Jard’or Events – Champagne Evenings & Seasonal Journeys",
    description:
      "Discover Jard’or’s calendar of champagne evenings, chef collaborations, festive dinners, and cellar-led experiences in Nusa Dua, Bali.",
    keywords: [
      "Bali events",
      "champagne dinner Bali",
      "French restaurant events",
      "Nusa Dua events",
    ],
  },

  {
    slug: "gallery",
    title: "Jard’or Gallery – A Visual Portrait of Dining & Ambience",
    description:
      "Step into Jard’or visually — a gallery of plates, interiors, service moments, and atmospheric details from our French-inspired dining room.",
    keywords: [
      "Jardor gallery",
      "restaurant interior Bali",
      "fine dining Bali photos",
    ],
  },

  {
    slug: "about",
    title: "About Jard’or – Story, Philosophy & The Team",
    description:
      "Learn about Jard’or’s story, philosophy, and the team behind the kitchen, cellar, and dining room in Nusa Dua, Bali.",
    keywords: ["about Jardor", "French restaurant Bali", "Jardor team"],
  },

  {
    slug: "blog",
    title: "Jard’or Journal – Notes from the Kitchen & Cellar",
    description:
      "Read stories, updates, and reflections from Jard’or — seasonal features, wine notes, and behind-the-scenes entries.",
    keywords: ["Jardor blog", "restaurant blog Bali", "chef notes Bali"],
  },

  {
    slug: "careers",
    title: "Careers at Jard’or – Join Our Team",
    description:
      "Explore career opportunities at Jard’or Restaurant — kitchen brigade, sommelier team, and front-of-house service.",
    keywords: ["restaurant jobs Bali", "careers Jardor", "fine dining jobs"],
  },

  {
    slug: "reservation",
    title: "Reservation – Book Your Table at Jard’or Nusa Dua",
    description:
      "Reserve your table for tasting journeys, celebrations, and intimate French-inspired dinners.",
    keywords: ["Jardor reservation", "book table Bali", "fine dining booking"],
  },

  {
    slug: "contact",
    title: "Contact Jard’or – Location & Enquiries",
    description:
      "Get in touch with Jard’or Restaurant for general enquiries, private dining, and event bookings.",
    keywords: ["Jardor contact", "restaurant location Bali", "contact Jardor"],
  },
];

// ---------------------------------------
// Base metadata for all pages
// ---------------------------------------

function getBaseMetadata(url: string): Metadata {
  return {
    metadataBase: new URL(BASE_URL),

    applicationName: "Jard’or Restaurant",
    authors: [AUTHOR],
    creator: ORG_NAME,
    publisher: ORG_NAME,

    openGraph: {
      type: "website",
      siteName: ORG_NAME,
      locale: "en_US",
      images: [
        {
          url: DEFAULT_IMAGE,
          width: 1200,
          height: 630,
          alt: ORG_NAME,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      creator: "@jardorrestaurant",
      site: "@jardorrestaurant",
    },

    alternates: {
      canonical: url,
    },


  };
}

// ---------------------------------------
// Main function
// ---------------------------------------

export function getSeoBySlug(slug: SeoSlug): Metadata {
  const found = seoPages.find((item) => item.slug === slug);

  const path = slug === "home" ? "/" : `/${slug}`;
  const url = `${BASE_URL}${path}`;

  if (!found) {
    return {
      ...getBaseMetadata(url),
      title: ORG_NAME,
      description:
        "Un voyage de goût – Jard’or French Restaurant, Bali.",
    };
  }

  const { title, description, keywords } = found;

  return {
    ...getBaseMetadata(url),

    title,
    description,

    // 🔥 Add real <meta name="keywords"> tag
    keywords,



    openGraph: {
      ...getBaseMetadata(url).openGraph,
      title,
      description,
      url,
    },

    twitter: {
      ...getBaseMetadata(url).twitter,
      title,
      description,
    },
  };
}