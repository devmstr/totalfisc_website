import { Feature } from "@/types/feature";
import {
  Calculator,
  FileText,
  FileBarChart,
  Users,
} from "lucide-react";
const featuresData: Feature[] = [
  {
    id: 1,
    icon: <Calculator className="h-8 w-8 text-white" />,
    title: "Comptabilité conforme SCF",
    paragraph:
      "Moteur comptable double-partie avec plan comptable SCF, comptes semi-auxiliaires (clients/fournisseurs), journaux d'achat/vente/banque, balance générale, bilan et compte de résultat.",
    btn: "Découvrir la comptabilité",
    btnLink: "/#features-compta",
  },
  {
    id: 2,
    icon: <FileText className="h-8 w-8 text-white" />,
    title: "Facturation et gestion commerciale",
    paragraph:
      "Création de factures personnalisables, extraction OCR des factures scannées, calcul automatique du Timbre Fiscal (≥10,000 DZD), multi-devises, suivi des paiements et relances.",
    btn: "Voir la facturation",
    btnLink: "/#features-facturation",
  },
  {
    id: 3,
    icon: <FileBarChart className="h-8 w-8 text-white" />,
    title: "Déclarations fiscales automatisées",
    paragraph:
      "Génération automatique du rapport G50 mensuel (DGI), déclarations TVA avec TVA collectée/déductible, préparation de la Liasse Fiscale annuelle, exports conformes aux formats officiels.",
    btn: "Explorer la conformité fiscale",
    btnLink: "/#features-fiscal",
  },
  {
    id: 4,
    icon: <Users className="h-8 w-8 text-white" />,
    title: "Paie, RH et pointage intégrés",
    paragraph:
      "Module complet de gestion de la paie (bulletins, cotisations CNAS), dossiers RH numériques, intégration biométrique pour le pointage, planning et gestion des absences — le tout synchronisé avec la comptabilité.",
    btn: "Gérer la paie & RH",
    btnLink: "/#features-rh",
  },
];

export default featuresData;
