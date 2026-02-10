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
  title: "TOTALFisc – Solution de comptabilité et fiscalité conforme SCF",
  description:
    "TOTALFisc est la solution SaaS de référence pour les cabinets comptables et PME algériennes : comptabilité conforme SCF, facturation avec Timbre Fiscal, déclarations G50 et TVA automatisées.",
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://totalfisc.com",
    siteName: "TOTALFisc",
    title: "TOTALFisc – Solution de comptabilité et fiscalité conforme SCF",
    description:
      "TOTALFisc est la solution SaaS de référence pour les cabinets comptables et PME algériennes : comptabilité conforme SCF, facturation avec Timbre Fiscal, déclarations G50 et TVA automatisées.",
    images: [
      {
        url: "https://totalfisc.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "TOTALFisc – Solution de comptabilité et fiscalité",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TOTALFisc – Solution de comptabilité et fiscalité conforme SCF",
    description:
      "TOTALFisc est la solution SaaS de référence pour les cabinets comptables et PME algériennes : comptabilité conforme SCF, facturation avec Timbre Fiscal, déclarations G50 et TVA automatisées.",
    images: ["https://totalfisc.com/images/og-image.png"],
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
