import { Price } from "@/types/price";

export const pricingData: Price[] = [
  {
    id: "price_1NQk5TLtGdPVhGLecVfQ7mn0",
    unit_amount: 100 * 100,
    nickname: "Pack Gestion Paie",
    offers: [
      "Jusqu’à 50 employés",
      "Gestion complète du dossier salarié (contrats, postes, services)",
      "Cycle de paie mensuel : bulletins, primes, retenues",
      "Prise en compte des heures supplémentaires (saisie ou import)",
      "Gestion des absences, congés et retards avec validation RH",
      "Exports de paie (Excel / PDF) pour comptabilité",
      "Historique des bulletins et journaux de paie",
      "Support par email en jours ouvrables",
    ],
  },
  {
    id: "price_1NQk55LtGdPVhGLefU8AHqHr",
    unit_amount: 200 * 100,
    nickname: "Pack RH & Pointage",
    recommanded: true,
    offers: [
      "Jusqu’à 300 employés et plusieurs établissements",
      "Paie avancée : primes, indemnités, heures supplémentaires",
      "Gestion des avances sur salaire et prêts avec échéancier",
      "Intégration des pointeuses biométriques (import automatique du pointage)",
      "Planning des horaires et suivi de la présence en temps réel",
      "Dossiers RH complets : documents salariés et légaux",
      "Sauvegarde et archivage des documents RH dans le cloud",
      "Alertes de fin de contrat, visites médicales et documents expirés",
      "Rapports paie & pointage détaillés (Excel / PDF)",
      "Support prioritaire email et sessions d’onboarding en visio",
    ],
  },
  {
    id: "price_1NQk4eLtGdPVhGLeZsZDsCNz",
    unit_amount: 300 * 100,
    nickname: "Pack Direction RH",
    offers: [
      "Plus de 300 employés, multi‑sites et multi‑sociétés",
      "Pilotage global de la paie : consolidation multi‑entités",
      "Workflow de validation (managers, direction RH, finance)",
      "Module complet de pointage multi‑sites (pointeuses, horaires complexes)",
      "Gestion avancée des dossiers RH : documents, alertes et historique",
      "Sauvegarde, archivage long terme et restauration des documents RH",
      "Tableaux de bord pour la direction : masse salariale, absentéisme, turnover",
      "Rôles et permissions avancés (RBAC) pour profils RH et managers",
      "Accompagnement déploiement, formation équipes et support dédié",
    ],
  },
];
