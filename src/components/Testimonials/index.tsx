import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Noureddine B.",
    designation: "Responsable RH ",
    content:
      "Avant TotalPaie, nous faisions la paie sur Excel avec beaucoup d’erreurs et de pertes de temps. Aujourd’hui, le pointage et les bulletins sont centralisés, et la clôture de paie est passée de plusieurs jours à quelques heures.",
    image: "/images/testimonials/author-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Samira K.",
    designation: "DRH ",
    content:
      "Nous gérons plusieurs établissements avec des horaires différents. TotalPaie nous permet de suivre les présences, les heures supplémentaires et les absences par site, tout en gardant une vue consolidée pour la direction.",
    image: "/images/testimonials/author-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Mohamed L.",
    designation: "Directeur administratif et financier",
    content:
      "Les exports paie et les rapports sont très utiles pour la comptabilité et le pilotage de la masse salariale. Nous avons une meilleure visibilité sur les coûts et sur l’absentéisme dans l’entreprise.",
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
          title="Ils utilisent déjà TotalPaie"
          paragraph="Des responsables RH, directeurs financiers et dirigeants font confiance à TotalPaie pour sécuriser la paie, le pointage et les dossiers RH de leurs équipes."
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
