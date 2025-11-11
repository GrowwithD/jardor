"use client";

import { useEffect, useState } from "react";
import MenuCategory, { MenuCategoryData } from "./MenuCategory";

const menuCategories: MenuCategoryData[] = [
  {
    id: "tasting",
    label: "Chef’s Tasting Journey",
    subtitle:
      "A curated progression that moves from delicate introductions to quietly indulgent finales.",
    items: [
      {
        name: "Amuse-Bouche du Jardin",
        image: "/images/main-food.jpg",
        description:
          "Seasonal one-bite compositions — herbs, citrus, and textures in a single moment.",
      },
      {
        name: "Gillardeau Oyster & Caviar",
        image: "/images/main-food-2.jpg",
        description:
          "Fine oyster, oscietra caviar, chilled beurre blanc, and chive oil.",
      },
      {
        name: "Hokkaido Scallop Crudo",
        image: "/images/main-food-3.jpg",
        description:
          "Thinly sliced scallop, preserved lemon, seaweed oil, and salt flower.",
      },
      {
        name: "Foie Gras & Brioche",
        image: "/images/main-food.jpg",
        description:
          "Torchon of foie gras, toasted brioche, fig compote, and aged balsamic.",
      },
      {
        name: "Ocean Bouillabaisse",
        image: "/images/main-food-2.jpg",
        description:
          "Refined shellfish broth with line-caught fish, saffron, and rouille.",
      },
      {
        name: "Le Boeuf Signature",
        image: "/images/main-food-3.jpg",
        description:
          "Slow-basted beef, Bordelaise jus, confit shallot, and charred greens.",
      },
      {
        name: "Fromage Affiné",
        image: "/images/main-food.jpg",
        description:
          "Curated French cheeses with honey, nuts, and house lavash.",
      },
      {
        name: "Soufflé du Soir",
        image: "/images/main-food-2.jpg",
        description:
          "Table-side baked soufflé with warm sauce; light, aromatic, and precise.",
      },
    ],
  },
  {
    id: "alacarte",
    label: "À La Carte Selections",
    subtitle:
      "Modern French plates with Balinese nuance, designed for custom journeys.",
    items: [
      {
        name: "Yellowfin Tartare",
        image: "/images/main-food-2.jpg",
        description:
          "Hand-cut yellowfin, lemon crème, crispy capers, and pickled shallot.",
      },
      {
        name: "Burrata & Heirloom Tomato",
        image: "/images/main-food-3.jpg",
        description:
          "Creamy burrata, basil oil, smoked salt, and toasted sourdough.",
      },
      {
        name: "Foie Gras Brûlée",
        image: "/images/main-food.jpg",
        description:
          "Silky foie gras, brûléed top, toasted brioche, and spiced fruit.",
      },
      {
        name: "Lobster & Bisque",
        image: "/images/main-food-2.jpg",
        description:
          "Butter-poached lobster over deep roasted shellfish bisque.",
      },
      {
        name: "Seared Sea Bass",
        image: "/images/main-food-3.jpg",
        description:
          "Crisp skin, fennel fondue, citrus beurre blanc, and coastal herbs.",
      },
      {
        name: "Herb-Crusted Lamb",
        image: "/images/main-food.jpg",
        description:
          "Tender lamb saddle, garden herbs, smoked aubergine, and jus clair.",
      },
      {
        name: "Poulet Rôti Jard’or",
        image: "/images/main-food-2.jpg",
        description:
          "Roasted spring chicken, truffle jus, pomme purée, and glazed roots.",
      },
      {
        name: "Wild Mushroom Risotto",
        image: "/images/main-food-3.jpg",
        description:
          "Arborio rice, forest mushrooms, parmesan cloud, and herb oil.",
      },
    ],
  },
  {
    id: "desserts",
    label: "Pâtisserie & Dessert",
    subtitle:
      "Finishes that favor balance, lightness, and sculpted detail over excess.",
    items: [
      {
        name: "Valrhona Chocolate Sphere",
        image: "/images/main-food-3.jpg",
        description:
          "Hot sauce reveal, praline crunch, citrus zest, and sea salt.",
      },
      {
        name: "Vanilla Bean Mille-Feuille",
        image: "/images/main-food.jpg",
        description:
          "Crisp pastry layers with Madagascar vanilla cream and sugar glass.",
      },
      {
        name: "Citrus & Garden Herb",
        image: "/images/main-food-2.jpg",
        description:
          "Yuzu sorbet, grapefruit, basil, and delicate meringue shards.",
      },
      {
        name: "Caramelized Apple Tarte Fine",
        image: "/images/main-food-3.jpg",
        description:
          "Paper-thin apple, puff pastry, Calvados caramel, and crème fraîche.",
      },
      {
        name: "Bali Island Fruits",
        image: "/images/main-food.jpg",
        description:
          "Seasonal fruits with vanilla syrup, lime, and coconut snow.",
      },
      {
        name: "Dark Chocolate Fondant",
        image: "/images/main-food-2.jpg",
        description:
          "Molten center, cocoa nibs, and espresso crème.",
      },
      {
        name: "Cheese & Honey Cart",
        image: "/images/main-food-3.jpg",
        description:
          "Selection of artisan cheeses, honey, nuts, and lavash.",
      },
      {
        name: "Petit Fours du Jardin",
        image: "/images/main-food.jpg",
        description:
          "Bite-sized confections to close the evening with grace.",
      },
    ],
  },
  {
    id: "wine",
    label: "Wine & Champagne",
    subtitle:
      "A cellar curated to complement the kitchen: expressive, age-worthy, and precise.",
    items: [
      {
        name: "French Classics",
        image: "/images/main-food.jpg",
        description:
          "Bordeaux, Burgundy, Rhône, and Loire from benchmark domaines.",
      },
      {
        name: "Old World Cellar",
        image: "/images/main-food-2.jpg",
        description:
          "Italy, Spain, Germany — Barolo, Rioja, Riesling, and more.",
      },
      {
        name: "New World Expression",
        image: "/images/main-food-3.jpg",
        description:
          "Character-driven bottles from Australia, New Zealand, Chile, and beyond.",
      },
      {
        name: "Champagne & Grower Cuvées",
        image: "/images/main-food-2.jpg",
        description:
          "Prestige cuvées and artisanal growers for aperitif and celebration.",
      },
      {
        name: "Rosé en Terrasse",
        image: "/images/main-food.jpg",
        description:
          "Dry, pale rosés selected for Bali’s coastal light.",
      },
      {
        name: "Sommelier’s Pairing Flight",
        image: "/images/main-food-3.jpg",
        description:
          "A guided sequence tailored to your chosen menu.",
      },
      {
        name: "Rare Library Selection",
        image: "/images/main-food.jpg",
        description:
          "Limited-release vintages for collectors and special evenings.",
      },
      {
        name: "Sweet & Fortified",
        image: "/images/main-food-2.jpg",
        description:
          "Sauternes, Port, and late harvest treasures for dessert pairings.",
      },
    ],
  },
  {
    id: "cocktails",
    label: "Cocktails & Spirits",
    subtitle:
      "Understated signatures built on premium spirits, clear ice, and precise aromatics.",
    items: [
      {
        name: "Jard’or Negroni",
        image: "/images/main-food-3.jpg",
        description:
          "House bitters blend and barrel-rested gin over a single rock.",
      },
      {
        name: "Emerald Martini",
        image: "/images/main-food.jpg",
        description:
          "London dry gin, French vermouth, and herb notes — stirred, not rushed.",
      },
      {
        name: "Champagne Martini",
        image: "/images/main-food-2.jpg",
        description:
          "Bright, effervescent take with citrus oils and chilled coupe.",
      },
      {
        name: "Sunset Spritz",
        image: "/images/main-food-2.jpg",
        description:
          "Floral, light, and sparkling — made for golden hour in Nusa Dua.",
      },
      {
        name: "Smoked Old Fashioned",
        image: "/images/main-food-3.jpg",
        description:
          "Select bourbon, demerara, orange bitters, and subtle smoke.",
      },
      {
        name: "Herb Garden Gimlet",
        image: "/images/main-food.jpg",
        description:
          "Gin, lime, and garden herbs served crystalline cold.",
      },
      {
        name: "Rare Spirits Library",
        image: "/images/main-food-2.jpg",
        description:
          "Aged whisky, cognac, and rum curated for unhurried nights.",
      },
      {
        name: "Zero-Proof Signatures",
        image: "/images/main-food-3.jpg",
        description:
          "Elevated non-alcoholic pairings with botanicals and fresh infusions.",
      },
    ],
  },
];

export default function MenusList() {
  const [activeCategory, setActiveCategory] = useState<string>(
    menuCategories[0]?.id ?? ""
  );

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = el.getBoundingClientRect().top + window.scrollY - 140;
    window.scrollTo({ top: offset, behavior: "smooth" });
  };

  useEffect(() => {
    const sections = menuCategories
      .map((c) => document.getElementById(c.id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveCategory(entry.target.id);
        });
      },
      { threshold: 0.35, rootMargin: "-80px 0px -40% 0px" }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-brand-green pt-14 pb-12">
      <div className="mx-auto max-w-6xl px-4 flex gap-8 md:gap-10">
        {/* LEFT: Categories */}
        <div className="flex-1 space-y-16 md:space-y-20">
          {menuCategories.map((category, index) => (
            <MenuCategory key={category.id} category={category} index={index} />
          ))}
        </div>

        {/* RIGHT: Sticky Nav (desktop) */}
        <aside className="hidden lg:block w-[170px]">
          <div className="sticky top-28 space-y-3">
            <p className="text-[9px] uppercase tracking-[0.22em] text-brand-gold/70">
              Menu Index
            </p>
            <div className="h-px w-9 bg-brand-gold/40 mb-1" />
            <nav className="space-y-1.5">
              {menuCategories.map((cat, idx) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleScrollTo(cat.id)}
                    className={`
                      group w-full text-left py-1.5 px-3
                      rounded-full text-[9px]
                      tracking-[0.18em] uppercase
                      flex items-center gap-2
                      transition-all duration-250
                      ${
                        isActive
                          ? "bg-black/80 text-brand-gold border border-brand-gold/60 shadow-[0_0_18px_rgba(0,0,0,0.9)]"
                          : "text-brand-cream/55 hover:text-brand-gold/90 hover:bg-black/30 border border-transparent"
                      }
                    `}
                  >
                    <span className="text-[7px] text-brand-gold/70">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 truncate">
                      {cat.label.replace("&", "& ")}
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>
      </div>
    </section>
  );
}