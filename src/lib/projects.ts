/**
 * Visualization portfolio — reframed from the studio template.
 * Imagery is PLACEHOLDER (Unsplash) — swap `cover`/`gallery` for real renders.
 * Each project reads like a sheet in a drawing set: numbered and specified.
 */

export type Project = {
  slug: string;
  index: string; // sheet number, e.g. "01"
  title: string;
  category: "Residential" | "Commercial" | "Interior";
  type: string; // visualization type
  location: string;
  /** optional override for the card meta line (defaults to category · type · location) */
  meta?: string;
  /** optional studio/client credit shown under the title on the detail page */
  client?: string;
  year: number;
  area: string;
  summary: string; // one-line, used in lists
  description: string[]; // paragraphs for the detail page
  software: string[]; // tools used
  cover: string;
  gallery: string[];
  /** rotate the gallery plates 90° left (for sideways source photos) */
  rotateGallery?: boolean;
  /** extra titled galleries below the main gallery */
  extraGalleries?: {
    title: string;
    images: string[];
    /** plate arrangement; defaults to "two-then-one" (2-up row, then full-width) */
    layout?: "two-then-one" | "one-then-two";
    /** override the project's rotation for this section; "none" disables it */
    rotate?: "left" | "right" | "none";
  }[];
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
    client: "UNC Architecture",
    year: 2025,
    area: "",
    summary:
      "A commercial project in Perinthalmanna, visualized inside and out — interior and exterior 3D design rendered in photorealistic detail (2025).",
    description: [
      "An interior and exterior 3D visualization for Secura Centre, a commercial mall in Perinthalmanna. The brief was to picture the whole shopping experience before construction — circulation, materials and lighting resolved across the building inside and out.",
      "The interior design covered the public spaces in detail: the main mall interior, the food court, and both the ladies' and gents' washrooms — each visualized with its own finishes, fixtures and lighting so the client could sign off every zone from the renders.",
    ],
    software: ["SketchUp", "Lumion", "D5 Render", "Photoshop"],
    cover: "/projects/p1.jpeg",
    rotateGallery: true,
    gallery: [
      "/projects/p1/p11.jpeg",
      "/projects/p1/p115.jpeg",
      "/projects/p1/p116.jpeg",
      "/projects/p1/p117.jpeg",
    ],
    extraGalleries: [
      {
        title: "Dining and food court area interior Design",
        images: [
          "/projects/p1/p12.jpeg",
          "/projects/p1/p13.jpeg",
          "/projects/p1/p14.jpeg",
        ],
      },
      {
        title: "Ladies washroom interior design",
        layout: "one-then-two",
        rotate: "none",
        images: [
          "/projects/p1/p16.jpeg",
          "/projects/p1/p17.jpeg",
          "/projects/p1/p18.jpeg",
        ],
      },
      {
        title: "Gents washroom interior design",
        rotate: "none",
        images: [
          "/projects/p1/p19.jpeg",
          "/projects/p1/p112.jpeg",
          "/projects/p1/p110.jpeg",
        ],
      },

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
    client: "UNC Architecture",
    year: 2025,
    area: "",
    summary:
      "A commercial building in Kodungallur, visualized through its exterior facade — form, materials and light resolved in photorealistic 3D before construction (2025).",
    description: [
      "An exterior facade visualization for Secura Centre, a commercial building in Kodungallur. The brief was to resolve the building's street presence before construction — massing, proportion and the rhythm of the frontage all worked out in 3D.",
      "The facade was studied in daylight and after dark, with cladding materials, glazing and signage rendered in photorealistic detail so the client could see exactly how the building would read from the street and sign off the elevation from the images.",
    ],
    software: ["SketchUp", "Lumion", "Photoshop"],
    cover: "/projects/p2.jpeg",
    gallery: [
      "/projects/p2/p22.jpeg",
      "/projects/p2/p23.jpeg",
      "/projects/p2/p24.jpeg",
      "/projects/p2/p22.jpeg",
    ],
  },
  {
    slug: "Residential-project",
    index: "03",
    title: "Residential project",
    category: "Residential",
    type: "Exterior Visualization",
    location: "Calicut",
    meta: "Residential project",
    year: 2024,
    area: "",
    summary:
      "A private home in Calicut, visualized from the outside — its exterior form, materials and landscaping rendered in photorealistic 3D.",
    description: [
      "An exterior 3D visualization for a private residence in Calicut. The brief was to picture the house from the street and garden before it was built — massing, roofline and the way the elevations sit on the plot all resolved in 3D.",
      "Cladding, stonework, glazing and landscaping were rendered in natural daylight to show exactly how the home would look on completion, giving the owners a clear view to sign off the design.",
    ],
    software: ["SketchUp", "Lumion", "Photoshop"],
    cover: "/projects/p3.jpeg",
    gallery: [
      "/projects/p3/p32.jpeg",
      "/projects/p3/p33.jpeg",
      "/projects/p3/p34.jpeg",
    ],
  },
  {
    slug: "Residential-project-2",
    index: "04",
    title: "Living and Dining Interior Design",
    category: "Residential",
    type: "Interior Visualization",
    location: "Perinthalmanna",
    year: 2023,
    area: "",
    summary:
      "A living and dining space in Perinthalmanna, visualized as one warm, connected room — layout, materials and lighting resolved in photorealistic 3D.",
    description: [
      "An interior 3D visualization of a combined living and dining area for a home in Perinthalmanna. The brief was to see how the two spaces would flow together before fit-out — furniture layout, circulation and sightlines all resolved in 3D.",
      "Wall finishes, flooring, the TV unit and dining setup were rendered with warm, layered lighting so the owners could picture the finished room day and evening, and sign off the palette and furniture from the images.",
    ],
    software: ["SketchUp", "D5 Render", "Photoshop"],
    cover: "/projects/p4.jpeg",
    gallery: [
      "/projects/p4/P42.jpeg",
      "/projects/p4/P43.jpeg",
    ],
  },
  {
    slug: "dining-and-open-kitchen-interior",
    index: "05",
    title: "Dining and open kitchen interior",
    category: "Residential",
    type: "Interior Visualization",
    location: "Manjeri",
    year: 2023,
    area: "",
    summary:
      "A dining area and open kitchen visualized as one connected interior — layout, finishes and lighting resolved in photorealistic 3D.",
    description: [
      "An interior 3D visualization of a dining area and open kitchen designed as one connected space. The brief was to see how the kitchen, island and dining setup would work together before fit-out — layout, circulation and sightlines all resolved in 3D.",
      "Cabinetry, countertops, backsplash and the dining furniture were rendered with warm, layered lighting so the owners could picture the finished room and sign off the finishes and layout from the images.",
    ],
    software: ["SketchUp", "D5 Render", "Photoshop"],
    cover: "/projects/p5.jpeg",
    gallery: [
      "/projects/p5/p51.jpeg",
      "/projects/p5/p52.jpeg",
      "/projects/p5/p53.jpeg",
    ],
  },
  {
    slug: "family-living-area-interior-design",
    index: "06",
    title: "Family living area interior design",
    category: "Residential",
    type: "Interior Visualization",
    location: "Palakkad",
    year: 2023,
    area: "",
    summary:
      "A family living area visualized as a warm, everyday gathering space — layout, materials and lighting resolved in photorealistic 3D.",
    description: [
      "An interior 3D visualization of a family living area for a home in Palakkad. The brief was to picture an everyday gathering space before fit-out — seating layout, the TV wall and circulation all resolved in 3D.",
      "Wall finishes, flooring, the feature wall and furniture were rendered with warm, layered lighting so the family could see how the room would feel day to evening, and sign off the palette and layout from the images.",
    ],
    software: ["SketchUp", "D5 Render", "Photoshop"],
    cover: "/projects/p6.jpeg",
    gallery: [
      "/projects/p6/p61.jpeg",
      "/projects/p6/p62.jpeg",
    ],
  },
  {
    slug: "bedroom-interior-design",
    index: "07",
    title: "Bedroom interior design",
    category: "Residential",
    type: "Interior Visualization",
    location: "Palakkad",
    year: 2024,
    area: "",
    summary:
      "A bedroom visualized as a calm, restful retreat — layout, materials and lighting resolved in photorealistic 3D.",
    description: [
      "An interior 3D visualization of a bedroom for a home in Palakkad. The brief was to picture the room before fit-out — bed placement, wardrobe and circulation all resolved in 3D.",
      "Wall finishes, flooring, the headboard wall and wardrobe were rendered with soft, warm lighting so the owners could see how the room would feel and sign off the palette and layout from the images.",
    ],
    software: ["SketchUp", "D5 Render", "Nano Banana AI"],
    cover: "/projects/p7.jpeg",
    gallery: [
      "/projects/p7/p71.jpeg",
      "/projects/p7/p72.jpeg",
      "/projects/p7/p73.jpeg",
    ],
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);

export const featuredProjects = projects.slice(0, 4);
