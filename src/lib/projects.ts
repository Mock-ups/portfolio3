/**
 * Visualization portfolio — reframed from the studio template.
 * Imagery is PLACEHOLDER (Unsplash) — swap `cover`/`gallery` for real renders.
 * Each project reads like a sheet in a drawing set: numbered and specified.
 */

const UNSPLASH = "https://images.unsplash.com/photo-";
const img = (id: string, w = 1600) =>
  `${UNSPLASH}${id}?auto=format&fit=crop&q=80&w=${w}`;

export type Project = {
  slug: string;
  index: string; // sheet number, e.g. "01"
  title: string;
  category: "Residential" | "Commercial" | "Interior";
  type: string; // visualization type
  location: string;
  /** optional override for the card meta line (defaults to category · type · location) */
  meta?: string;
  year: number;
  area: string;
  summary: string; // one-line, used in lists
  description: string[]; // paragraphs for the detail page
  software: string[]; // tools used
  cover: string;
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: "secura-centre-perinthalmanna",
    index: "01",
    title: "Secura Centre Perinthalmanna",
    category: "Commercial",
    type: "Interior Exterior 3d Design",
    location: "Perinthalmanna",
    meta: "Commercial Interior Exterior 3d Design",
    year: 2025,
    area: "320 m²",
    summary:
      "A stone-lined family home visualized in warm, top-lit afternoon light.",
    description: [
      "A full interior visualization for a double-height family residence. The brief asked for a calm, material-led home, so the renders were built around a single shaft of north light moving across travertine and oiled oak.",
      "Lighting was studied at three times of day before settling on a late-afternoon mood — soft contrast, long shadows, and warm bounce off the stone.",
    ],
    software: ["3ds Max", "V-Ray", "Photoshop"],
    cover: "/projects/p1.jpeg",
    gallery: [
      img("1586023492125-27b2c045efd7"),
      img("1600210492486-724fe5c67fb0"),
      img("1600566753086-00f18fb6b3ea"),
      img("1615875605825-5eb9bb5d52ac"),
    ],
  },
  {
    slug: "secura-centre-kodungallur",
    index: "02",
    title: "Secura Centre Kodungallur",
    category: "Commercial",
    type: "Exterior Facade Design",
    location: "Kodungallur",
    meta: "Exterior Facade design Kodungallur",
    year: 2025,
    area: "140 m²",
    summary: "A pared-back apartment loft rendered as one continuous space.",
    description: [
      "A compact city apartment visualized as a single calm volume, with a full run of linen-toned cabinetry absorbing the kitchen, wardrobe and library.",
      "The render leans on soft daylight and a muted palette, with brushed-steel details picked out to give the materials a believable, tactile read.",
    ],
    software: ["SketchUp", "Lumion", "Photoshop"],
    cover: "/projects/p2.jpeg",
    gallery: [
      img("1618221195710-dd6b41faaea6"),
      img("1502005229762-cf1b2da7c5d6"),
      img("1631679706909-1844bbd07221"),
      img("1556228453-efd6c1ff04f6"),
    ],
  },
  {
    slug: "Residential-project",
    index: "03",
    title: "Residential project",
    category: "Residential",
    type: "Residential Visualization",
    location: "Calicut",
    meta: "Residential project",
    year: 2024,
    area: "410 m²",
    summary: "A 60-cover restaurant rendered in low, warm, layered light.",
    description: [
      "A restaurant interior visualized as a sequence of rooms, each with its own light level — from a bright bar to an intimate back dining room.",
      "Reclaimed oak, blackened steel and hand-thrown ceramics were textured and lit to feel worked and warm, the way the space would read mid-service.",
    ],
    software: ["3ds Max", "V-Ray", "Photoshop"],
    cover: "/projects/p3.jpeg",
    gallery: [
      img("1600607687939-ce8a6c25118c"),
      img("1616486338812-3dadae4b4ace"),
      img("1583847268964-b28dc8f51f92"),
      img("1540574163026-643ea20ade25"),
    ],
  },
  {
    slug: "Residential-project-2",
    index: "04",
    title: "Residential project",
    category: "Residential",
    type: "Interior Visualization",
    location: "Perinthalmanna",
    year: 2023,
    area: "880 m²",
    summary: "An open-plan workspace visualized as a calm working studio.",
    description: [
      "A workplace visualization that set out to feel less like an office and more like a studio. Acoustic baffles, rugs and planting define quiet and active zones without partitions.",
      "A neutral shell keeps the focus on people and work — colour enters only through the artwork and greenery placed in the scene.",
    ],
    software: ["SketchUp", "Lumion"],
    cover: "/projects/p4.jpeg",
    gallery: [
      img("1565182999561-18d7dc61c393"),
      img("1497366754035-f200968a6e72"),
      img("1600121848594-d8644e57abab"),
      img("1600210492486-724fe5c67fb0"),
    ],
  },
  {
    slug: "marrow-cafe",
    index: "05",
    title: "Marrow Café",
    category: "Commercial",
    type: "Interior Visualization",
    location: "Manjeri",
    year: 2023,
    area: "95 m²",
    summary: "A small café distilled to one cast-terrazzo counter and good light.",
    description: [
      "A corner café visualized around a single monolithic counter in cast terrazzo, with everything else kept quiet so the room reads in a glance.",
      "Warm plaster, pale timber and a long bench seat were rendered to make a small footprint feel generous from open to close.",
    ],
    software: ["D5 Render", "Photoshop"],
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
    type: "Interior Visualization",
    location: "Palakkad",
    year: 2023,
    area: "110 m²",
    summary: "A sun-tracking apartment whose tones warm from morning to night.",
    description: [
      "An apartment visualization tuned to the southern light, with each room's palette set to the time of day it is most used.",
      "Lime-washed walls, terracotta and aged brass were rendered to shift in colour as the sun moves across the rooms.",
    ],
    software: ["3ds Max", "V-Ray", "Adobe Illustrator"],
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
