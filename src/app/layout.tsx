import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "PHOBOSIA — 3D Mars Exploration & Scientific Observation Experience",
    template: "%s | PHOBOSIA — 3D Mars Portfolio",
  },
  description:
    "Official project portfolio for PHOBOSIA, an interactive 3D Mars exploration experience developed with Next.js, Three.js, and authentic NASA HiRISE planetary data.",
  keywords: [
    "PHOBOSIA",
    "Mars 3D Exploration",
    "Interactive Mars Simulation",
    "Three.js",
    "WebGL",
    "Next.js",
    "Tailwind CSS",
    "HiRISE DTM",
    "Elysium Planitia",
    "Osanda Hirushaka",
  ],
  authors: [{ name: "Osanda Hirushaka (Muthukumarana)", url: "https://github.com/osa623" }],
  creator: "Osanda Hirushaka",
  metadataBase: new URL("https://phobosia.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://phobosia.vercel.app",
    siteName: "PHOBOSIA",
    title: "PHOBOSIA — 3D Mars Exploration & Scientific Observation",
    description:
      "Interactive 3D Mars exploration experience bringing a fictional Martian outpost, planetary observation, and SOL 1–11 missions to your browser.",
    images: [
      {
        url: "/phobosia-social.png",
        width: 1200,
        height: 630,
        alt: "PHOBOSIA — 3D Mars Outpost",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PHOBOSIA — 3D Mars Exploration Experience",
    description: "Interactive 3D Mars exploration experience powered by NASA planetary elevation data.",
    images: ["/phobosia-social.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-space-950 text-slate-100 antialiased selection:bg-mars-500/30 selection:text-white flex flex-col justify-between">
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
