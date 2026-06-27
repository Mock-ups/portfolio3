/**
 * Project register — PLACEHOLDER content with verified Unsplash imagery.
 * Replace `cover`, `gallery`, and copy with the studio's real projects.
 * The portfolio reads like a drawing index: each project is a numbered sheet.
 */

const UNSPLASH = "https://images.unsplash.com/photo-";
const img = (id: string, w = 1600) =>
  `${UNSPLASH}${id}?auto=format&fit=crop&q=80&w=${w}`;

export type Project = {
  slug: string;
  index: string; // sheet number, e.g. "01"
  title: string;
  category: "Residential" | "Hospitality" | "Workspace";
  type: string; // finer typology
  location: string;
  year: number;
  area: string; // gross area
  summary: string; // one-line, used in lists
  description: string[]; // paragraphs for the detail page
  services: string[];
  cover: string;
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: "travertine-house",
    index: "01",
    title: "Travertine House",
    category: "Residential",
    type: "Family residence",
    location: "Porto, PT",
    year: 2024,
    area: "320 m²",
    summary: "A stone-lined home organised around a single shaft of north light.",
    description: [
      "A full interior architecture for a family of four, planned around an existing double-height void. We re-cut the circulation so daily life gathers along one warm, top-lit spine.",
      "Travertine, oiled oak and lime plaster carry through every room, varied only in finish. The restraint lets the changing daylight do the decorating.",
    ],
    services: ["Interior architecture", "Joinery design", "FF&E", "Lighting"],
    cover: img("1600585154340-be6161a56a0c"),
    gallery: [
      img("1586023492125-27b2c045efd7"),
      img("1600210492486-724fe5c67fb0"),
      img("1600566753086-00f18fb6b3ea"),
      img("1615875605825-5eb9bb5d52ac"),
    ],
  },
  {
    slug: "linen-loft",
    index: "02",
    title: "Linen Loft",
    category: "Residential",
    type: "Apartment",
    location: "Lisbon, PT",
    year: 2023,
    area: "140 m²",
    summary: "A pared-back loft where storage disappears into the walls.",
    description: [
      "A compact city apartment rethought as one continuous room. A single run of floor-to-ceiling cabinetry absorbs the kitchen, wardrobe and library behind a calm linen-toned plane.",
      "Soft textiles and a muted palette keep the volume quiet; brushed steel details mark only what you touch.",
    ],
    services: ["Space planning", "Bespoke cabinetry", "Material design"],
    cover: img("1505691938895-1758d7feb511"),
    gallery: [
      img("1618221195710-dd6b41faaea6"),
      img("1502005229762-cf1b2da7c5d6"),
      img("1631679706909-1844bbd07221"),
      img("1556228453-efd6c1ff04f6"),
    ],
  },
  {
    slug: "oak-and-ore",
    index: "03",
    title: "Oak & Ore",
    category: "Hospitality",
    type: "Restaurant",
    location: "Copenhagen, DK",
    year: 2023,
    area: "410 m²",
    summary: "A 60-cover dining room built from oak, ore and low warm light.",
    description: [
      "A ground-floor restaurant arranged as a sequence of rooms, each with its own light level — from a bright bar to an intimate back dining room.",
      "Reclaimed oak, blackened steel and hand-thrown ceramics give the room a worked, tactile surface that ages well with service.",
    ],
    services: ["Concept", "Interior architecture", "Lighting", "Custom furniture"],
    cover: img("1567016432779-094069958ea5"),
    gallery: [
      img("1600607687939-ce8a6c25118c"),
      img("1616486338812-3dadae4b4ace"),
      img("1583847268964-b28dc8f51f92"),
      img("1540574163026-643ea20ade25"),
    ],
  },
  {
    slug: "the-quiet-floor",
    index: "04",
    title: "The Quiet Floor",
    category: "Workspace",
    type: "Studio offices",
    location: "Porto, PT",
    year: 2022,
    area: "880 m²",
    summary: "A single open floor zoned by acoustics instead of walls.",
    description: [
      "Headquarters for a design practice, planned to feel less like an office and more like a working studio. Acoustic baffles, rugs and planting define quiet and active zones without partitions.",
      "A neutral shell puts the focus on the work and the people — colour enters only through the projects pinned to the walls.",
    ],
    services: ["Workplace strategy", "Interior architecture", "Acoustics", "FF&E"],
    cover: img("1524758631624-e2822e304c36"),
    gallery: [
      img("1565182999561-18d7dc61c393"),
      img("1497366754035-f200968a6e72"),
      img("1600121848594-d8644e57abab"),
      img("1600210492486-724fe5c67fb0"),
    ],
  },
  {
    slug: "marrow",
    index: "05",
    title: "Marrow",
    category: "Hospitality",
    type: "Café",
    location: "Melbourne, AU",
    year: 2022,
    area: "95 m²",
    summary: "A small café distilled to one counter and one good window.",
    description: [
      "A corner café designed around a single monolithic counter in cast terrazzo. Everything else recedes so the room reads in a glance.",
      "Warm plaster, pale timber and a long bench seat make a small footprint feel generous from open to close.",
    ],
    services: ["Concept", "Interior architecture", "Custom terrazzo", "Lighting"],
    cover: img("1600607687939-ce8a6c25118c"),
    gallery: [
      img("1600566753086-00f18fb6b3ea"),
      img("1586023492125-27b2c045efd7"),
      img("1615875605825-5eb9bb5d52ac"),
      img("1502005229762-cf1b2da7c5d6"),
    ],
  },
  {
    slug: "solis-apartment",
    index: "06",
    title: "Solis Apartment",
    category: "Residential",
    type: "Apartment",
    location: "Barcelona, ES",
    year: 2021,
    area: "110 m²",
    summary: "A sun-tracking apartment that warms in tone from morning to night.",
    description: [
      "A renovation that opens the plan toward the southern light, then tunes each room's palette to the time of day it is most used.",
      "Lime-washed walls, terracotta and aged brass shift in colour as the sun moves across the rooms.",
    ],
    services: ["Interior architecture", "Material design", "FF&E"],
    cover: img("1493809842364-78817add7ffb"),
    gallery: [
      img("1618221195710-dd6b41faaea6"),
      img("1631679706909-1844bbd07221"),
      img("1556228453-efd6c1ff04f6"),
      img("1583847268964-b28dc8f51f92"),
    ],
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);

export const featuredProjects = projects.slice(0, 4);
