/**
 * Single source of truth for portfolio content (Muhammed Ramees).
 * Update these values to change details across the whole site.
 */
export const site = {
  name: "Muhammed Ramees",
  brand: "RMS design studio",
  shortName: "RMS",
  role: "Architectural Designer & 3D Visualizer",
  discipline: "Civil Engineer",
  city: "Dubai",
  country: "UAE",
  locationLine: "Dubai, UAE",

  tagline: "Translating architectural concepts into photorealistic 3D.",
  intro:
    "I'm a civil engineer with a strong passion for design, specializing in 3D architectural and interior visualization. I blend technical knowledge with creative design to deliver high-quality, photorealistic visuals for residential and commercial projects.",

  email: "mhdrameesak@gmail.com",
  phone: "+91 75618 71134",
  address: "Dubai, UAE",

  availability: "Open to freelance & full-time work",

  // PLACEHOLDER links — add real profile URLs.
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/r_m_s_designstudio" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ramees-ak-4a42b6315/" },
  ],
} as const;

export const nav = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
