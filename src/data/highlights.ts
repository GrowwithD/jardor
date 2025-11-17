// src/data/highlights.ts

export type HighlightItem = {
    title: string;
    image: string;
    description: string;
    meta?: string;
};

export type Highlight = {
    id: string;
    label: string;
    tagline: string;
    subtitle: string;
    items: HighlightItem[];
};

export const highlightsData: Highlight[] = [
    // 1) FOOD & BEVERAGE
    {
        id: "food-beverage",
        label: "Food & Beverage",
        tagline: "Cuisine & Cellar",
        subtitle:
            "Signature tasting menus, raw bar rituals, and pairings crafted with modern French technique and coastal Bali nuance.",
        items: [
            {
                title: "Amuse-Bouche Selection",
                image: "/images/DSC00222.jpg",
                description:
                    "Small introductions that set the tone — bright, precise, and intentionally light on the palate.",
                meta: "Opening Course",
            },
            {
                title: "Bread & Butter Ritual",
                image: "/images/DSC00229.jpg",
                description:
                    "House-baked breads, cultured butter, and restrained accents — treated as a course, not a side.",
                meta: "Warm Start",
            },
            {
                title: "Seasonal Entrée",
                image: "/images/DSC00265.jpg",
                description:
                    "A composed main where sauce, garnish, and texture move in the same direction. Deep flavors, clean geometry.",
                meta: "Main Course",
            },
            {
                title: "Sauce at the Pass",
                image: "/images/DSC00263.jpg",
                description:
                    "Sauces built slowly and finished seconds before service — reductions, emulsions, and jus handled with discipline.",
                meta: "Kitchen Craft",
            },
            {
                title: "Fish Composition",
                image: "/images/DSC00279.jpg",
                description:
                    "Line-caught selections with bright, balanced accompaniments — a calm midpoint in the tasting sequence.",
                meta: "From the Sea",
            },
            {
                title: "Plated Tasting Course",
                image: "/images/DSC00309.jpg",
                description:
                    "A refined small plate designed to move the evening forward without overwhelming.",
                meta: "Tasting Menu",
            },
            {
                title: "Cheese & Savory Pre-Dessert",
                image: "/images/DSC00381.jpg",
                description:
                    "A shift toward warmth and subtlety — cheeses, savory notes, and textures that prepare the palate for dessert.",
                meta: "Transitional Course",
            },
            {
                title: "Dessert Composition",
                image: "/images/DSC00404.jpg",
                description:
                    "Light sweetness, measured temperature contrast, and elegant architecture — desserts built to refresh, not fatigue.",
                meta: "Signature Dessert",
            },
        ],
    },

    // 2) PLACE / THE PLACE
    {
        id: "place",
        label: "The Place",
        tagline: "Space & Setting",
        subtitle:
            "Deep greens, brass lines, soft light, and framed Nusa Dua views — intimate, cinematic, and acoustically calm.",
        items: [
            {
                title: "Main Dining Room",
                image: "/images/DSC04919-HDR.jpg",
                description:
                    "Linen, spacing, and warm pools of light curated for long, unhurried conversations.",
                meta: "Up to 60 Guests",
            },
            {
                title: "Rustic Corner",
                image: "/images/DSC04927-HDR.jpg",
                description:
                    "Vintage textures and warm tones — ideal for anniversaries and slow dinners.",
                meta: "Intimate Spot",
            },
            {
                title: "Wine Cellar Alcove",
                image: "/images/DSC04930-HDR.jpg",
                description:
                    "A quiet corner surrounded by bottles — perfect for tastings or deeper conversations.",
                meta: "Cellar Experience",
            },
            {
                title: "Bottle Wall",
                image: "/images/DSC04933-HDR.jpg",
                description:
                    "A visual anchor of curated bottles, setting an elegant tone for aperitifs.",
                meta: "Cellar Feature",
            },
            {
                title: "Garden Window Table",
                image: "/images/DSC04936-HDR.jpg",
                description:
                    "Natural daylight meets warm textures, ideal for brunch or early dinners.",
                meta: "Indoor Garden View",
            },
            {
                title: "Floral Lounge",
                image: "/images/DSC05669-HDR.jpg",
                description:
                    "Soft pillows, greenery, and a relaxed atmosphere for effortless pre-dinner drinks.",
                meta: "Cozy Corner",
            },
            {
                title: "Outdoor Terrace",
                image: "/images/DSC05705-HDR.jpg",
                description:
                    "Breezy and sunlit — one of the best spots for daytime dining.",
                meta: "Open Air",
            },
            {
                title: "Warm Private Room",
                image: "/images/DSC05811-HDR.jpg",
                description:
                    "Candlelight and warm shadows curated for proposals and private celebrations.",
                meta: "Private Seating",
            },
            {
                title: "Classic Interior",
                image: "/images/DSC05823-HDR.jpg",
                description:
                    "Traditional lines balanced with modern softness for a timeless dining feel.",
                meta: "Classic Room",
            },
        ],
    },

    // 3) EXPERIENCE
    {
        id: "experience",
        label: "The Experience",
        tagline: "Atmosphere",
        subtitle:
            "Music, scent, pacing, and service layered with intention so the evening feels orchestrated, never staged.",
        items: [
            {
                title: "Tasting Table for Two",
                image: "/images/DSC00300.jpg",
                description:
                    "A choreography of courses paced gently around conversation.",
                meta: "Intimate Dining",
            },
            {
                title: "Champagne & Small Plates",
                image: "/images/DSC00321.jpg",
                description:
                    "Bright aperitifs and delicate plates to open the evening.",
                meta: "Aperitif Hour",
            },
            {
                title: "Chef’s Flight Service",
                image: "/images/DSC00326.jpg",
                description:
                    "A progressive sequence of dishes curated in clean, calm rhythm.",
                meta: "Curated Journey",
            },
            {
                title: "Wine-Led Evening",
                image: "/images/DSC00368.jpg",
                description:
                    "Bottles take center stage — menus arranged to frame the acidity, structure, and aromatics.",
                meta: "Sommelier Event",
            },
            {
                title: "Celebration Spread",
                image: "/images/DSC00371.jpg",
                description:
                    "A multi-plate, multi-glass layout designed for milestones and meaningful nights.",
                meta: "Occasion Ready",
            },
            {
                title: "Late-Night Courses",
                image: "/images/DSC00395.jpg",
                description:
                    "A darker soundtrack and deeper flavors for guests who prefer to dine late.",
                meta: "After Dark",
            },
        ],
    },

    // 4) TEAM & CRAFT
    {
        id: "team-craft",
        label: "The Team & Craft",
        tagline: "People Behind The Room",
        subtitle:
            "A synchronized brigade of chefs, sommeliers, and hosts — exacting in craft, effortless in presence.",
        items: [
            {
                title: "Plating at the Pass",
                image: "/images/DSC00237.jpg",
                description:
                    "Precise hands shaping the plate before it meets the dining room.",
                meta: "Kitchen Brigade",
            },
            {
                title: "Final Garnish",
                image: "/images/DSC00252.jpg",
                description:
                    "Last-second details added with intention and discipline.",
                meta: "Finishing Touch",
            },
            {
                title: "Sauce Work",
                image: "/images/DSC00258.jpg",
                description:
                    "Controlled, deliberate pouring — a signature of the kitchen’s calm technique.",
                meta: "Classic Technique",
            },
            {
                title: "Garde-Manger Craft",
                image: "/images/DSC00269.jpg",
                description:
                    "Cold dishes built with brightness, geometry, and speed.",
                meta: "Cold Section",
            },
            {
                title: "Table Timing",
                image: "/images/DSC00287.jpg",
                description:
                    "Servers and chefs moving in coordinated rhythm — quiet, seamless, intentional.",
                meta: "Service Precision",
            },
            {
                title: "Wine & Glassware",
                image: "/images/DSC00316.jpg",
                description:
                    "Stemware polished by hand and matched to each bottle’s structure.",
                meta: "Sommelier Standard",
            },
            {
                title: "Menu Presentation",
                image: "/images/DSC00411.jpg",
                description:
                    "Menus offered with clarity and warmth — enough guidance, never pressure.",
                meta: "Guest Guidance",
            },
            {
                title: "Service Briefing",
                image: "/images/DSC00416.jpg",
                description:
                    "A quiet review of notes, reservations, and pacing before the first guest arrives.",
                meta: "Pre-Service Ritual",
            },
        ],
    },
];