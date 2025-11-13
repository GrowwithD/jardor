// components/MenusList.tsx
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
                image: "/images/DSC00222.jpg",
                description:
                    "Seasonal one-bite compositions — herbs, citrus, and textures in a single moment.",
                price: 95000,
            },
            {
                name: "Gillardeau Oyster & Caviar",
                image: "/images/DSC00229.jpg",
                description:
                    "Fine oyster, oscietra caviar, chilled beurre blanc, and chive oil.",
                price: 280000,
            },
            {
                name: "Hokkaido Scallop Crudo",
                image: "/images/DSC00252.jpg",
                description:
                    "Thinly sliced scallop, preserved lemon, seaweed oil, and salt flower.",
                price: 210000,
            },
            {
                name: "Foie Gras & Brioche",
                image: "/images/DSC00258.jpg",
                description:
                    "Torchon of foie gras, toasted brioche, fig compote, and aged balsamic.",
                price: 260000,
            },
            {
                name: "Ocean Bouillabaisse",
                image: "/images/DSC00263.jpg",
                description:
                    "Refined shellfish broth with line-caught fish, saffron, and rouille.",
                price: 235000,
            },
            {
                name: "Le Boeuf Signature",
                image: "/images/DSC00265.jpg",
                description:
                    "Slow-basted beef, Bordelaise jus, confit shallot, and charred greens.",
                price: 320000,
            },
            {
                name: "Fromage Affiné",
                image: "/images/DSC00269.jpg",
                description:
                    "Curated French cheeses with honey, nuts, and house lavash.",
                price: 180000,
            },
            {
                name: "Soufflé du Soir",
                image: "/images/DSC00273.jpg",
                description:
                    "Table-side baked soufflé with warm sauce; light, aromatic, and precise.",
                price: 155000,
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
                image: "/images/DSC00276.jpg",
                description:
                    "Hand-cut yellowfin, lemon crème, crispy capers, and pickled shallot.",
                price: 175000,
            },
            {
                name: "Burrata & Heirloom Tomato",
                image: "/images/DSC00278.jpg",
                description:
                    "Creamy burrata, basil oil, smoked salt, and toasted sourdough.",
                price: 165000,
            },
            {
                name: "Foie Gras Brûlée",
                image: "/images/DSC00279.jpg",
                description:
                    "Silky foie gras, brûléed top, toasted brioche, and spiced fruit.",
                price: 245000,
            },
            {
                name: "Lobster & Bisque",
                image: "/images/DSC00283.jpg",
                description:
                    "Butter-poached lobster over deep roasted shellfish bisque.",
                price: 340000,
            },
            {
                name: "Seared Sea Bass",
                image: "/images/DSC00287.jpg",
                description:
                    "Crisp skin, fennel fondue, citrus beurre blanc, and coastal herbs.",
                price: 225000,
            },
            {
                name: "Herb-Crusted Lamb",
                image: "/images/DSC00290.jpg",
                description:
                    "Tender lamb saddle, garden herbs, smoked aubergine, and jus clair.",
                price: 295000,
            },
            {
                name: "Poulet Rôti Jard’or",
                image: "/images/DSC00297.jpg",
                description:
                    "Roasted spring chicken, truffle jus, pomme purée, and glazed roots.",
                price: 210000,
            },
            {
                name: "Wild Mushroom Risotto",
                image: "/images/DSC00300.jpg",
                description:
                    "Arborio rice, forest mushrooms, parmesan cloud, and herb oil.",
                price: 185000,
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
                image: "/images/DSC00301.jpg",
                description:
                    "Hot sauce reveal, praline crunch, citrus zest, and sea salt.",
                price: 145000,
            },
            {
                name: "Vanilla Bean Mille-Feuille",
                image: "/images/DSC00304.jpg",
                description:
                    "Crisp pastry layers with Madagascar vanilla cream and sugar glass.",
                price: 135000,
            },
            {
                name: "Citrus & Garden Herb",
                image: "/images/DSC00309.jpg",
                description:
                    "Yuzu sorbet, grapefruit, basil, and delicate meringue shards.",
                price: 115000,
            },
            {
                name: "Caramelized Apple Tarte Fine",
                image: "/images/DSC00316.jpg",
                description:
                    "Paper-thin apple, puff pastry, Calvados caramel, and crème fraîche.",
                price: 135000,
            },
            {
                name: "Bali Island Fruits",
                image: "/images/DSC00320.jpg",
                description:
                    "Seasonal fruits with vanilla syrup, lime, and coconut snow.",
                price: 95000,
            },
            {
                name: "Dark Chocolate Fondant",
                image: "/images/DSC00321.jpg",
                description:
                    "Molten center, cocoa nibs, and espresso crème.",
                price: 125000,
            },
            {
                name: "Cheese & Honey Cart",
                image: "/images/DSC00326.jpg",
                description:
                    "Selection of artisan cheeses, honey, nuts, and lavash.",
                price: 165000,
            },
            {
                name: "Petit Fours du Jardin",
                image: "/images/DSC00330.jpg",
                description:
                    "Bite-sized confections to close the evening with grace.",
                price: 65000,
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
                image: "/images/DSC04930-HDR.jpg",
                description:
                    "Bordeaux, Burgundy, Rhône, and Loire from benchmark domaines.",
                price: 120000,
            },
            {
                name: "Old World Cellar",
                image: "/images/DSC04933-HDR.jpg",
                description:
                    "Italy, Spain, Germany — Barolo, Rioja, Riesling, and more.",
                price: 115000,
            },
            {
                name: "New World Expression",
                image: "/images/DSC05255.jpg",
                description:
                    "Character-driven bottles from Australia, New Zealand, Chile, and beyond.",
                price: 110000,
            },
            {
                name: "Champagne & Grower Cuvées",
                image: "/images/DSC05264.jpg",
                description:
                    "Prestige cuvées and artisanal growers for aperitif and celebration.",
                price: 160000,
            },
            {
                name: "Rosé en Terrasse",
                image: "/images/DSC05801.jpg",
                description:
                    "Dry, pale rosés selected for Bali’s coastal light.",
                price: 105000,
            },
            {
                name: "Sommelier’s Pairing Flight",
                image: "/images/DSC05908.jpg",
                description:
                    "A guided sequence tailored to your chosen menu.",
                price: 320000,
            },
            {
                name: "Rare Library Selection",
                image: "/images/DSC04930-HDR.jpg",
                description:
                    "Limited-release vintages for collectors and special evenings.",
                price: 950000,
            },
            {
                name: "Sweet & Fortified",
                image: "/images/DSC04933-HDR.jpg",
                description:
                    "Sauternes, Port, and late harvest treasures for dessert pairings.",
                price: 140000,
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
                image: "/images/DSC00342.jpg",
                description:
                    "House bitters blend and barrel-rested gin over a single rock.",
                price: 150000,
            },
            {
                name: "Emerald Martini",
                image: "/images/DSC00345.jpg",
                description:
                    "London dry gin, French vermouth, and herb notes — stirred, not rushed.",
                price: 155000,
            },
            {
                name: "Champagne Martini",
                image: "/images/DSC00348.jpg",
                description:
                    "Bright, effervescent take with citrus oils and chilled coupe.",
                price: 165000,
            },
            {
                name: "Sunset Spritz",
                image: "/images/DSC00359.jpg",
                description:
                    "Floral, light, and sparkling — made for golden hour in Nusa Dua.",
                price: 135000,
            },
            {
                name: "Smoked Old Fashioned",
                image: "/images/DSC00368.jpg",
                description:
                    "Select bourbon, demerara, orange bitters, and subtle smoke.",
                price: 165000,
            },
            {
                name: "Herb Garden Gimlet",
                image: "/images/DSC00371.jpg",
                description:
                    "Gin, lime, and garden herbs served crystalline cold.",
                price: 135000,
            },
            {
                name: "Rare Spirits Library",
                image: "/images/DSC00395.jpg",
                description:
                    "Aged whisky, cognac, and rum curated for unhurried nights.",
                price: 220000,
            },
            {
                name: "Zero-Proof Signatures",
                image: "/images/DSC00404.jpg",
                description:
                    "Elevated non-alcoholic pairings with botanicals and fresh infusions.",
                price: 95000,
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

            <div className="absolute inset-0">
                <div
                    className="
                            absolute inset-0
                            [transform:scaleX(-1)]
                        "
                >
                    <div
                        className="
                                absolute inset-0
                                bg-[url('/images/batik1.png')]
                                bg-repeat
                                bg-[length:420px_auto]  /* ukuran tile biar rapih */
                                opacity-5
                            "
                    />
                </div>
            </div>

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
                                        className={`group w-full text-left py-1.5 px-3 rounded-full text-[9px] tracking-[0.18em] uppercase flex items-center gap-2 transition-all duration-250 ${isActive
                                            ? "bg-black/80 text-brand-gold border border-brand-gold/60 shadow-[0_0_18px_rgba(0,0,0,0.9)]"
                                            : "text-brand-cream/55 hover:text-brand-gold/90 hover:bg-black/30 border border-transparent"
                                            }`}
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