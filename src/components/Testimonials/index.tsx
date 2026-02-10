import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Karim M.",
    designation: "Expert-comptable, Cabinet Alger",
    content: "Avant TOTALFisc, nous passions des heures sur Excel pour préparer les G50 de nos clients. Maintenant, tout est automatisé : comptabilité, factures, TVA et exports DGI. Un gain de temps énorme pour notre cabinet.",
    image: "/images/testimonials/author-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Amina B.",
    designation: "Responsable comptable, PME industrielle",
    content: "TOTALFisc nous a permis de centraliser la comptabilité, les factures avec Timbre Fiscal et les déclarations fiscales. L'interface est moderne et le support très réactif. Indispensable pour rester conforme.",
    image: "/images/testimonials/author-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Rachid L.",
    designation: "Directeur financier, Groupe commercial",
    content: "Nous gérons plusieurs sociétés avec TOTALFisc. La consolidation comptable et la génération automatique des rapports fiscaux nous font gagner plusieurs jours par mois. Et le module paie est un vrai plus.",
    image: "/images/testimonials/author-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-1 py-20 dark:bg-dark-2 md:py-[120px]">
      <div className="container px-4">
        <SectionTitle
          subtitle="Témoignages clients"
          title="Des experts-comptables et entreprises nous font confiance"
          paragraph="Des cabinets d'expertise comptable, directeurs financiers et responsables comptables utilisent TOTALFisc pour automatiser leur comptabilité, facturation et conformité fiscale en Algérie."
          width="640px"
          center
        />

        <div className="mt-[60px] flex flex-wrap gap-y-8 lg:mt-20">
          {testimonialData.map((testimonial, i) => (
            <SingleTestimonial key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
