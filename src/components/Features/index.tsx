import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section
      id="features"
      className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]"
    >
      <div className="container">
        <SectionTitle
          subtitle="Fonctionnalités"
          title="Les piliers de TotalPaie"
          paragraph="TotalPaie centralise la paie, le pointage, les dossiers RH et la conformité dans une seule plateforme SaaS, pensée pour les entreprises industrielles, de services et les groupes multi‑sites."
        />

        <div className="-mx-4 mt-12 flex flex-wrap lg:mt-20">
          {featuresData.map((feature, i) => (
            <SingleFeature key={i} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
