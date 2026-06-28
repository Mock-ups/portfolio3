import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Roboto_Flex } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Variable font (weight + width axes) for the interactive TextPressure headline.
const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-pressure",
  display: "swap",
});

const eudoxus = localFont({
  variable: "--font-eudoxus",
  display: "swap",
  src: [
    { path: "../../public/fonts/EudoxusSans-ExtraLight.woff2", weight: "200", style: "normal" },
    { path: "../../public/fonts/EudoxusSans-Light.woff2", weight: "300", style: "normal" },
    { path: "../../public/fonts/EudoxusSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/EudoxusSans-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/EudoxusSans-Bold.woff2", weight: "700", style: "normal" },
    { path: "../../public/fonts/EudoxusSans-ExtraBold.woff2", weight: "800", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: {
    default: `${site.brand} — ${site.role}`,
    template: `%s — ${site.brand}`,
  },
  description: site.tagline + " " + site.intro,
  keywords: [
    "3D visualization",
    "architectural designer",
    "3D visualizer",
    "civil engineer",
    "interior visualization",
    "Lumion",
    "3ds Max",
    "V-Ray",
    site.city,
  ],
  openGraph: {
    title: `${site.brand} — ${site.role}`,
    description: site.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${eudoxus.variable} ${robotoFlex.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
