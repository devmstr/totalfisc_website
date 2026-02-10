"use client";
import SectionTitle from "../Common/SectionTitle";
import PricingBox from "./PricingBox";
import { pricingData } from "@/stripe/pricingData";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Formules & abonnements"
            title="Choisissez le plan adapté à votre entreprise"
            paragraph="TotalPaie propose plusieurs formules en fonction du nombre d’employés, des modules activés (paie, pointage, dossiers RH, rapports) et de votre mode d’accompagnement. Nos équipes vous aident à définir le plan le plus adapté à votre structure."
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {pricingData.map((product, i) => (
            <PricingBox key={i} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
