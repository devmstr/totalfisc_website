import Breadcrumb from "@/components/Common/Breadcrumb";
import Faq from "@/components/Faq";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarifs | TotalPaie – Solution de paie et RH",
  description:
    "Découvrez les différents packs TotalPaie pour gérer la paie, le pointage et les dossiers RH de vos équipes, quelle que soit la taille de votre entreprise.",
};

const PricingPage = () => {
  return (
    <>
      <Breadcrumb pageName="Forfaits" />
      <Pricing />
      <Faq />
    </>
  );
};

export default PricingPage;
