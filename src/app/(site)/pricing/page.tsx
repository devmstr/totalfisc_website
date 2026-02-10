import Breadcrumb from "@/components/Common/Breadcrumb";
import Faq from "@/components/Faq";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarifs | TOTALFisc – Solution de comptabilité et fiscalité",
  description:
    "Découvrez les forfaits TOTALFisc adaptés aux cabinets comptables et aux entreprises algériennes pour la comptabilité SCF, la facturation et la fiscalité.",
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
