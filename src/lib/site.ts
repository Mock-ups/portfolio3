/**
 * Single source of truth for studio content.
 * ── Everything here is PLACEHOLDER copy. Swap these values to
 *    rebrand the whole site in one place.
 */
export const site = {
  name: "Form & Field",
  shortName: "F&F",
  role: "Interior Design Studio",
  founded: 2014,
  city: "Lisbon",
  country: "Portugal",

  tagline: "Interiors composed with architectural precision.",
  intro:
    "We design residential and hospitality interiors where structure, light and material are resolved together — so a room feels inevitable, not decorated.",

  email: "studio@formandfield.com",
  phone: "+351 210 000 000",
  address: "Rua das Flores 42, 1200-194 Lisbon, Portugal",

  socials: [
    { label: "Instagram", handle: "@formandfield", href: "https://instagram.com" },
    { label: "Pinterest", handle: "formandfield", href: "https://pinterest.com" },
    { label: "LinkedIn", handle: "Form & Field", href: "https://linkedin.com" },
  ],

  // Single short stats line for the title block / footer
  est: "EST. MMXIV",
} as const;

export const nav = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
