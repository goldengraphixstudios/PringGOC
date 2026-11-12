import { businesses } from "@/data/businesses";

export type StayId = "macabling" | "golden-city" | "mamatid";

export interface StayPhoto {
  src: string;
  alt: string;
}

export interface Stay {
  id: StayId;
  name: string;
  city: "Santa Rosa" | "Cabuyao";
  unitType: string;
  units: number;
  blurb: string;
  features: string[];
  mapQuery: string;
  photos: StayPhoto[];
}

export const AIRPND_FACEBOOK = "https://www.facebook.com/modernapartment2023";
export const AIRPND_MESSENGER = "https://m.me/modernapartment2023";

const branches = businesses.find((b) => b.slug === "airpnd")?.branches ?? [];

/** Pull the unit count ("27 studio-type rooms…") from businesses.ts so there is one source of truth. */
function unitCount(keyword: string, fallback: number) {
  const branch = branches.find((b) => b.name.toLowerCase().includes(keyword));
  const detail = branch?.details?.find((d) => /^\d+/.test(d));
  return detail ? Number(detail.match(/^\d+/)?.[0] ?? fallback) : fallback;
}

const sharedFeatures = ["1 bathroom per unit", "24/7 CCTV", "Jetmatic water pump", "Free WiFi"];

export const stays: Stay[] = [
  {
    id: "macabling",
    name: "Macabling",
    city: "Santa Rosa",
    unitType: "Studio units",
    units: unitCount("macabling", 27),
    blurb:
      "Our biggest address: a four-storey building with open-air corridors and balconies on every floor.",
    features: sharedFeatures,
    mapQuery: "Macabling, Santa Rosa, Laguna",
    photos: [
      { src: "/airpnd/macabling-1.jpg", alt: "Macabling building facade, four storeys with balconies" },
      { src: "/airpnd/macabling-2.jpg", alt: "Open-air corridor with black railings at Macabling" },
      { src: "/airpnd/macabling-5.jpg", alt: "Studio unit at Macabling with glossy tile floor and window" },
      { src: "/airpnd/macabling-4.jpg", alt: "Upper-floor balcony corridor with unit doors at Macabling" },
      { src: "/airpnd/macabling-3.jpg", alt: "Macabling building front with parking at ground level" },
    ],
  },
  {
    id: "golden-city",
    name: "Golden City",
    city: "Santa Rosa",
    unitType: "One-bedroom units",
    units: unitCount("golden", 4),
    blurb:
      "Our smallest address: just four one-bedroom units in a two-storey, home-style building.",
    features: sharedFeatures,
    mapQuery: "Golden City, Santa Rosa, Laguna",
    photos: [
      { src: "/airpnd/golden-city-1.jpg", alt: "Golden City two-storey building with wood-panelled eaves" },
      { src: "/airpnd/golden-city-2.jpg", alt: "Golden City unit kitchen wall with wood-front cabinets" },
      { src: "/airpnd/golden-city-3.jpg", alt: "Golden City bedroom with window and wood-look floor" },
      { src: "/airpnd/golden-city-4.jpg", alt: "Golden City unit, open living space leading to the kitchen" },
      { src: "/airpnd/golden-city-6.png", alt: "Golden City building seen from the street" },
      { src: "/airpnd/golden-city-7.png", alt: "Golden City front gate and balcony" },
    ],
  },
  {
    id: "mamatid",
    name: "Mamatid",
    city: "Cabuyao",
    unitType: "One-bedroom units",
    units: unitCount("mamatid", 10),
    blurb:
      "Ten one-bedroom units set along a landscaped garden courtyard, with a skylit corridor.",
    features: sharedFeatures,
    mapQuery: "Mamatid, Cabuyao, Laguna",
    photos: [
      { src: "/airpnd/mamatid-1.jpg", alt: "Mamatid garden courtyard with stone lantern and shrubs" },
      { src: "/airpnd/mamatid-5.jpg", alt: "Mamatid skylit corridor lined with unit doors" },
      { src: "/airpnd/mamatid-4.jpg", alt: "Mamatid unit with marble-look floor and kitchen counter" },
      { src: "/airpnd/mamatid-6.jpg", alt: "Mamatid corridor with a planted strip down the middle" },
      { src: "/airpnd/mamatid-8.jpg", alt: "Mamatid unit interior with warm cove lighting" },
      { src: "/airpnd/mamatid-2.jpg", alt: "Mamatid corridor with wood ceiling beside the garden" },
    ],
  },
];

export const totalUnits = stays.reduce((sum, s) => sum + s.units, 0);

export function stayLabel(id: StayId | "any") {
  if (id === "any") return "Any location";
  const s = stays.find((x) => x.id === id);
  return s ? `${s.name}, ${s.city}` : "Any location";
}
