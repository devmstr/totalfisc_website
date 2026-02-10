// app/(marketing)/components/FAQ/Faq.tsx
import SectionTitle from "../Common/SectionTitle";
import SingleFaq from "./SingleFaq";

const Faq = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
      <div className="container">
        <SectionTitle
          subtitle="FAQ"
          title="Questions fréquentes sur TotalPaie"
          paragraph="Voici les réponses aux questions les plus fréquentes sur la mise en place, l’utilisation quotidienne et la sécurité de TotalPaie."
          width="640px"
          center
        />

        <div className="-mx-4 mt-[60px] flex flex-wrap lg:mt-20">
          <div className="w-full px-4 lg:w-1/2">
            <SingleFaq
              question="Comment se déroule la mise en place de TotalPaie dans mon entreprise ?"
              answer="Après la création de votre compte, nous configurons avec vous les structures (sites, services), les profils salariés, les contrats et les règles de paie. Une phase d’accompagnement permet d’importer vos données actuelles et de valider un premier cycle de paie test avant de passer en production."
            />
            <SingleFaq
              question="Est-ce que TotalPaie gère le pointage avec des pointeuses biométriques ?"
              answer="Oui. TotalPaie permet de connecter vos pointeuses biométriques ou d’importer les fichiers de pointage. Les heures de présence, retards, absences et heures supplémentaires sont consolidées pour alimenter automatiquement la paie après validation par les responsables."
            />
            <SingleFaq
              question="Peut-on gérer plusieurs sites ou sociétés dans TotalPaie ?"
              answer="TotalPaie est conçu pour les groupes multi‑sites et multi‑sociétés. Vous pouvez séparer les établissements, rattacher les salariés à chaque entité et garder une vue consolidée pour la direction RH et financière."
            />
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <SingleFaq
              question="Comment sont protégées les données de paie et des salariés ?"
              answer="Les données sont stockées de manière sécurisée, avec des accès protégés par authentification et des droits par rôle (RH, managers, direction). Les actions sensibles sont tracées et des sauvegardes régulières sont mises en place pour garantir la disponibilité de vos informations."
            />
            <SingleFaq
              question="Les règles de paie peuvent-elles être adaptées à notre convention et à nos pratiques ?"
              answer="Oui. Les règles de calcul des bulletins (primes, heures supplémentaires, retenues, avances, prêts…) sont paramétrables pour refléter vos pratiques internes et les contraintes réglementaires locales. Une phase de cadrage permet d’ajuster le paramétrage à votre contexte."
            />
            <SingleFaq
              question="Quel type d’accompagnement et de support est proposé ?"
              answer="Selon le pack choisi, vous bénéficiez d’un onboarding pour la configuration initiale, de sessions de formation pour les équipes RH et managers, ainsi que d’un support continu par email et visio pour répondre aux questions et traiter les demandes d’évolution."
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
