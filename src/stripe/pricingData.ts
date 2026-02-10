import { Price } from "@/types/price";

export const pricingData: Price[] = [
  {
    id: "price_starter_totalfisc",
    unit_amount: 8000 * 100,
    nickname: "STARTER",
    offers: [
      "1 à 5 sociétés gérées",
      "Comptabilité SCF de base",
      "Facturation limitée (50 factures/mois)",
      "Déclarations G50 et TVA assistées",
      "1 utilisateur inclus",
      "Support par email (48h)",
    ],
  },
  {
    id: "price_professional_totalfisc",
    unit_amount: 20000 * 100,
    nickname: "PROFESSIONAL",
    recommanded: true,
    offers: [
      "5 à 20 sociétés gérées",
      "Comptabilité complète + facturation illimitée",
      "OCR factures et Timbre Fiscal automatique",
      "G50, TVA, Liasse Fiscale automatisés",
      "Module paie de base (jusqu'à 50 employés)",
      "Multi-utilisateurs (3 comptes inclus)",
      "Exports comptables avancés",
      "Support prioritaire email + visio",
    ],
  },
  {
    id: "price_cabinet_totalfisc",
    unit_amount: 50000 * 100,
    nickname: "CABINET",
    offers: [
      "20 à 100+ sociétés (cabinets comptables)",
      "Toutes fonctionnalités PROFESSIONAL",
      "Gestion multi-cabinets et white-label",
      "API et webhooks pour intégrations",
      "Module paie illimité + pointage biométrique",
      "Utilisateurs illimités",
      "Sécurité avancée & conformité renforcée",
      "Support dédié (phone + visio + onboarding)",
    ],
  },
];
