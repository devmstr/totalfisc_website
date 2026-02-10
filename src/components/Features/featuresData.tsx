import { Feature } from "@/types/feature";
import {
  Clock10Icon,
  FileTextIcon,
  FolderArchive,
  FolderOpen,
  Wallet,
} from "lucide-react";
const featuresData: Feature[] = [
  {
    id: 1,
    icon: <Wallet className="h-8 w-8 text-white" />,
    title: "Paie automatisée et fiable",
    paragraph:
      "Générez les bulletins de paie, primes, heures supplémentaires et retenues en quelques clics, avec des règles de calcul configurables pour votre entreprise.",
    btn: "Découvrir la paie",
    btnLink: "/#features-paie",
  },
  {
    id: 2,
    icon: <Clock10Icon className="h-8 w-8 text-white" />,
    title: "Pointage et contrôle des présences",
    paragraph:
      "Connectez vos pointeuses biométriques, suivez les entrées/sorties, retards, absences et validez les heures supplémentaires avec un workflow clair.",
    btn: "Voir le pointage",
    btnLink: "/#features-pointage",
  },
  {
    id: 3,
    icon: <FolderOpen className="h-8 w-8 text-white" />,
    title: "Dossiers RH et documents",
    paragraph:
      "Centralisez contrats, pièces d’identité, documents légaux et modèles, avec alertes sur les dates d’expiration et préparation à la signature électronique.",
    btn: "Gérer les dossiers RH",
    btnLink: "/#features-documents",
  },
  {
    id: 4,
    icon: <FileTextIcon className="h-8 w-8 text-white" />,
    title: "Rapports, conformité et multi‑sites",
    paragraph:
      "Suivez les indicateurs de paie et de présence, exportez en Excel/PDF et gérez plusieurs sites ou sociétés avec des droits d’accès adaptés à chaque rôle.",
    btn: "Explorer les rapports",
    btnLink: "/#features-rapports",
  },
];

export default featuresData;
