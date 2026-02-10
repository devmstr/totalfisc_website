// app/(marketing)/components/FAQ/Faq.tsx
import SectionTitle from "../Common/SectionTitle";
import SingleFaq from "./SingleFaq";

const Faq = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
      <div className="container">
        <SectionTitle
          subtitle="FAQ"
          title="Questions fréquentes sur TOTALFisc"
          paragraph="Voici les réponses aux questions les plus fréquentes sur la mise en place, la conformité SCF et l'utilisation de TOTALFisc."
          width="640px"
          center
        />

        <div className="-mx-4 mt-[60px] flex flex-wrap lg:mt-20">
          <div className="w-full px-4 lg:w-1/2">
            <SingleFaq
              question="TOTALFisc est-il conforme au référentiel SCF algérien ?"
              answer="Oui, TOTALFisc est entièrement conçu pour respecter le Système Comptable Financier (SCF) algérien : plan comptable conforme, comptes semi-auxiliaires, double-partie, et exports compatibles DGI."
            />
            <SingleFaq
              question="Comment fonctionne la génération automatique du G50 ?"
              answer="TOTALFisc collecte automatiquement vos ventes et achats avec la TVA, calcule la TVA collectée et déductible, puis génère le rapport G50 au format officiel requis par la DGI (Direction Générale des Impôts)."
            />
            <SingleFaq
              question="Puis-je utiliser TOTALFisc pour plusieurs sociétés (cabinet comptable) ?"
              answer="Oui, les plans PROFESSIONAL et CABINET permettent de gérer entre 5 et 100+ sociétés dans une seule interface, avec des droits d'accès par client et une vue consolidée pour le cabinet."
            />
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <SingleFaq
              question="Le Timbre Fiscal est-il calculé automatiquement ?"
              answer="Oui, TOTALFisc applique automatiquement le Timbre Fiscal sur les factures ≥10,000 DZD selon la réglementation algérienne, et l'intègre dans vos déclarations fiscales."
            />
            <SingleFaq
              question="Est-ce que le module paie est inclus ?"
              answer="Le module paie est disponible dans les plans PROFESSIONAL (jusqu'à 50 employés) et CABINET (illimité). Il inclut les bulletins de paie, cotisations CNAS, gestion des absences et pointage biométrique."
            />
            <SingleFaq
              question="TOTALFisc gère-t-il l'OCR des factures ?"
              answer="Oui, vous pouvez scanner ou uploader vos factures fournisseurs, et TOTALFisc extrait automatiquement les données (montant, TVA, tiers) pour les intégrer dans votre comptabilité."
            />
          </div>
        </div>
      </div>

      {/* Décorations SVG conservées */}
      <div>
        <span className="absolute left-4 top-4 -z-[1]">
          {/* SVG vert d’origine ici */}
        </span>
        <span className="absolute bottom-4 right-4 -z-[1]">
          {/* SVG bleu d’origine ici */}
        </span>
      </div>
    </section>
  );
};

export default Faq;
