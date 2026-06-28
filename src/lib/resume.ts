/** CV data — experience, education and software, from the résumé. */

export type Job = {
  role: string;
  org: string;
  location: string;
  period: string;
  current?: boolean;
  description: string;
};

export const experience: Job[] = [
  {
    role: "Architectural Designer",
    org: "UNC Architecture",
    location: "Malappuram",
    period: "2025 — 2026",
    description:
      "Translating architectural concepts into immersive 3D visualizations — turning complex conceptual briefs into detailed technical plans and high-fidelity, photorealistic renderings.",
  },
  {
    role: "3D Visualiser",
    org: "1970s Homedesign",
    location: "Perinthalmanna",
    period: "2024 — 2025",
    description:
      "Acted as the bridge between abstract concepts and reality — a digital architect and artist transforming 2D blueprints and ideas into immersive, photorealistic images and animations.",
  },
  {
    role: "Site Supervisor — Intern",
    org: "CalicutInfra",
    location: "Calicut",
    period: "2023",
    description:
      "Prepared accurate daily reports on construction activities, material usage and workforce attendance; took part in safety training; and supported the team in implementing on-site design modifications.",
  },
  {
    role: "Site Supervisor — Intern",
    org: "ConArc Construction",
    location: "Manjeri",
    period: "2023",
    description:
      "Assisted with daily on-site activities under senior supervisors — organizing resources, scheduling tasks and helping maintain a safe, on-time working environment.",
  },
];

export const education = [
  {
    qualification: "BE Civil Engineering",
    institution: "Dhanalakshmi Srinivasan College of Engineering",
    period: "2019 — 2023",
  },
  {
    qualification: "Higher Secondary",
    institution: "Kalladi Abduhaji Higher Secondary School",
    period: "2017 — 2019",
  },
];

export const skills = [
  "SketchUp",
  "AutoCAD",
  "Lumion",
  "D5 Render",
  "3ds Max",
  "V-Ray",
  "Photoshop",
  "Adobe Illustrator",
];

/**
 * Per-software badge. `icon` points to a logo file in /public/icons; when set,
 * the real logo is shown. Otherwise the `short` monogram + `color` is used.
 * Drop official SVG/PNG logos into public/icons and add the path here.
 */
export const softwareMeta: Record<
  string,
  { short: string; color: string; icon?: string }
> = {
  SketchUp: { short: "Sk", color: "#005F9E", icon: "/icons/sketchup.svg" },
  AutoCAD: { short: "Ac", color: "#E51050", icon: "/icons/autocad.svg" },
  Lumion: { short: "Lu", color: "#15A0A6", icon: "/icons/lumion.png" },
  "D5 Render": { short: "D5", color: "#2D6BF7", icon: "/icons/d5render.png" },
  "3ds Max": { short: "3", color: "#0C8CE9", icon: "/icons/3dsmax.svg" },
  "V-Ray": { short: "VR", color: "#1CA0E2", icon: "/icons/vray.svg" },
  Photoshop: { short: "Ps", color: "#31A8FF", icon: "/icons/photoshop.svg" },
  "Adobe Illustrator": {
    short: "Ai",
    color: "#FF9A00",
    icon: "/icons/illustrator.svg",
  },
};

export const services = [
  {
    no: "01",
    title: "3D Visualization",
    description:
      "Photorealistic interior and exterior renders that let clients see and feel a space long before it's built.",
  },
  {
    no: "02",
    title: "Architectural Design",
    description:
      "Turning concepts and 2D plans into detailed, build-ready 3D models with accurate proportion, light and material.",
  },
  {
    no: "03",
    title: "Walkthrough Animation",
    description:
      "Immersive animated fly-throughs that move through a project and bring the experience of a space to life.",
  },
];
