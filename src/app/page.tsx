import About from "@/components/About";
import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import CallToAction from "@/components/CallToAction";
import Clients from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "TotalPaie – Plateforme de paie, pointage et RH pour les entreprises algériennes",
  description:
    "TotalPaie aide les entreprises et groupes multi‑sites en Algérie à centraliser la paie, le pointage et les dossiers RH dans une seule plateforme sécurisée, pour réduire les erreurs et gagner du temps chaque mois.",
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://totalpaie.com",
    siteName: "TotalPaie",
    title: "TotalPaie – Plateforme de paie, pointage et RH",
    description:
      "TotalPaie aide les entreprises et groupes en Algérie à centraliser la paie, le pointage et les dossiers RH dans une seule plateforme sécurisée.",
    images: [
      {
        url: "https://totalpaie.com/images/og-image.png", // Your OG image
        width: 1200,
        height: 630,
        alt: "TotalPaie – Plateforme de paie et RH",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TotalPaie – Plateforme de paie, pointage et RH",
    description:
      "TotalPaie aide les entreprises et groupes en Algérie à centraliser la paie, le pointage et les dossiers RH dans une seule plateforme sécurisée.",
    images: ["https://totalpaie.com/images/og-image.png"],
  },
};

export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main>
      <ScrollUp />
      <Hero />
      <Features />
      <About />
      <CallToAction />
      <Pricing />
      <Testimonials />
      <Faq />
      {/* <Team /> */}
      {/* <HomeBlogSection posts={posts} /> */}
      <Contact />
      {/* <Clients /> */}
    </main>
  );
}
