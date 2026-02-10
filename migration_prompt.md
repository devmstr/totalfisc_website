Transform an existing Next.js 15 SaaS website from **TotalPaie** (payroll/HR platform) to **TOTALFisc** (accounting \& fiscal compliance platform) for the Algerian market. Maintain the technical architecture while completely updating content, features, and messaging to reflect the new product focus.[^1]

## Product Overview

### TotalPaie (OLD - Current Website)

- **Focus**: Payroll, HR, attendance management, and document management
- **Target**: Companies managing employee payroll and presence tracking
- **Core Features**: Automated payroll, biometric attendance, HR documents, multi-site management


### TOTALFisc (NEW - Target Website)

- **Focus**: Accounting, invoice management, fiscal compliance, with integrated HR/payroll
- **Target**: Accounting firms (cabinets) and SMEs in Algeria
- **Core Modules**:

1. **Accounting Module** (PRIMARY): SCF-compliant double-entry ledger, chart of accounts, journal entries, financial reporting
2. **Invoice Management** (PRIMARY): Invoice creation, OCR processing, Timbre Fiscal calculation, multi-currency, payment tracking
3. **Fiscal Compliance** (PRIMARY): G50 Report automation, TVA declarations, Liasse Fiscale generation
4. **Payroll \& HR** (SECONDARY): Employee management, salary calculations, CNAS, payslips
5. **Attendance** (SECONDARY): Biometric integration, time tracking, leave management


## Transformation Requirements

### 1. Brand Identity \& Metadata

**Update all references:**

- Product name: `TotalPaie` → `TOTALFisc`
- Domain: `totalpaie.com` → `totalfisc.com` (or your actual domain)
- Tagline: "Plateforme de paie, pointage et RH" → "Solution de comptabilité et fiscalité conforme SCF"
- Description: Focus on accounting, fiscal compliance, and Algerian regulatory automation

**Files to update:**

- `src/app/page.tsx` - metadata, title, description, Open Graph tags
- `src/app/layout.tsx` - site name, metadata
- `public/manifest.webmanifest` - app name, description
- `.env` files - logo URLs, site URLs, email addresses, site name variables


### 2. Hero Section (`src/components/Hero/index.tsx`)

**Current (TotalPaie):**

```
H1: "Gérez la paie, le pointage et les dossiers RH sur une seule plateforme"
Subtitle: "TotalPaie est une plateforme SaaS professionnelle conçue pour les entreprises algériennes... paie automatisée, pointage sécurisé, documents RH centralisés..."
```

**New (TOTALFisc):**

```
H1: "Comptabilité SCF et fiscalité algérienne automatisée sur une seule plateforme"
Subtitle: "TOTALFisc est la solution SaaS de référence pour les cabinets comptables et PME algériennes : comptabilité conforme SCF, facturation avec Timbre Fiscal, déclarations G50 et TVA automatisées, avec modules RH & paie intégrés."
CTA Buttons: 
  - Primary: "Demander une démo" (keep)
  - Secondary: "Découvrir les modules" → link to #features
Features highlight: 
  - "Comptabilité conforme SCF"
  - "Déclarations fiscales automatisées (G50, TVA)"
  - "Facturation intelligente avec OCR"
```


### 3. Features Section (`src/components/Features/`)

**Update `featuresData.tsx` completely:**

```typescript
const featuresData: Feature[] = [
  {
    id: 1,
    icon: <Calculator className="h-8 w-8 text-white" />, // or appropriate icon
    title: "Comptabilité conforme SCF",
    paragraph: "Moteur comptable double-partie avec plan comptable SCF, comptes semi-auxiliaires (clients/fournisseurs), journaux d'achat/vente/banque, balance générale, bilan et compte de résultat.",
    btn: "Découvrir la comptabilité",
    btnLink: "/#features-compta",
  },
  {
    id: 2,
    icon: <FileText className="h-8 w-8 text-white" />,
    title: "Facturation et gestion commerciale",
    paragraph: "Création de factures personnalisables, extraction OCR des factures scannées, calcul automatique du Timbre Fiscal (≥10,000 DZD), multi-devises, suivi des paiements et relances.",
    btn: "Voir la facturation",
    btnLink: "/#features-facturation",
  },
  {
    id: 3,
    icon: <FileBarChart className="h-8 w-8 text-white" />,
    title: "Déclarations fiscales automatisées",
    paragraph: "Génération automatique du rapport G50 mensuel (DGI), déclarations TVA avec TVA collectée/déductible, préparation de la Liasse Fiscale annuelle, exports conformes aux formats officiels.",
    btn: "Explorer la conformité fiscale",
    btnLink: "/#features-fiscal",
  },
  {
    id: 4,
    icon: <Users className="h-8 w-8 text-white" />,
    title: "Paie, RH et pointage intégrés",
    paragraph: "Module complet de gestion de la paie (bulletins, cotisations CNAS), dossiers RH numériques, intégration biométrique pour le pointage, planning et gestion des absences — le tout synchronisé avec la comptabilité.",
    btn: "Gérer la paie & RH",
    btnLink: "/#features-rh",
  },
];
```

**Section Title:**

```
subtitle: "Fonctionnalités"
title: "Les 4 piliers de TOTALFisc"
paragraph: "TOTALFisc centralise la comptabilité SCF, la facturation, les déclarations fiscales algériennes (G50, TVA, Liasse Fiscale) et la paie/RH dans une seule plateforme cloud, conçue pour les cabinets comptables et les entreprises en Algérie."
```


### 4. About Section (`src/components/About/index.tsx`)

**Update content:**

- **Title**: "Une solution comptable pensée pour l'Algérie"
- **Paragraph 1**: Introduce TOTALFisc as a modern accounting platform built specifically for Algerian SCF compliance and DGI requirements
- **Paragraph 2**: Highlight the pain points: manual G50 reports, Excel-based accounting, scattered invoice management, complex TVA calculations
- **Paragraph 3**: Explain how TOTALFisc solves these with automation, compliance-first architecture, and integrated modules
- **Key Points** (bullet list):
    - ✓ Comptabilité conforme au référentiel SCF algérien
    - ✓ Automatisation des déclarations G50, TVA et Liasse Fiscale
    - ✓ Facturation avec calcul automatique du Timbre Fiscal
    - ✓ Multi-sociétés pour cabinets comptables
    - ✓ Paie et RH intégrés pour une vision complète
    - ✓ Interface bilingue (français/arabe) et cloud sécurisé


### 5. Pricing Section (`src/stripe/pricingData.ts`)

**Replace all three pricing tiers:**

```typescript
export const pricingData: Price[] = [
  {
    id: "price_starter_totalfisc",
    unit_amount: 8000_00, // 8,000 DZD or adjust
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
    unit_amount: 20000_00, // 20,000 DZD
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
    unit_amount: 50000_00, // 50,000 DZD+
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
```

**Update pricing page content:**

- Title: "Des forfaits adaptés à chaque structure"
- Description: "Que vous soyez un cabinet comptable, une PME ou un entrepreneur, TOTALFisc propose un plan adapté à la taille de votre portefeuille et à vos besoins de conformité fiscale."


### 6. Testimonials Section (`src/components/Testimonials/index.tsx`)

**Replace testimonialData:**

```typescript
const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Karim M.",
    designation: "Expert-comptable, Cabinet Alger",
    content: "Avant TOTALFisc, nous passions des heures sur Excel pour préparer les G50 de nos clients. Maintenant, tout est automatisé : comptabilité, factures, TVA et exports DGI. Un gain de temps énorme pour notre cabinet.",
    star: 5,
  },
  {
    id: 2,
    name: "Amina B.",
    designation: "Responsable comptable, PME industrielle",
    content: "TOTALFisc nous a permis de centraliser la comptabilité, les factures avec Timbre Fiscal et les déclarations fiscales. L'interface est moderne et le support très réactif. Indispensable pour rester conforme.",
    star: 5,
  },
  {
    id: 3,
    name: "Rachid L.",
    designation: "Directeur financier, Groupe commercial",
    content: "Nous gérons plusieurs sociétés avec TOTALFisc. La consolidation comptable et la génération automatique des rapports fiscaux nous font gagner plusieurs jours par mois. Et le module paie est un vrai plus.",
    star: 5,
  },
];
```

**Section Title:**

```
subtitle: "Témoignages clients"
title: "Des experts-comptables et entreprises nous font confiance"
paragraph: "Des cabinets d'expertise comptable, directeurs financiers et responsables comptables utilisent TOTALFisc pour automatiser leur comptabilité, facturation et conformité fiscale en Algérie."
```


### 7. FAQ Section (`src/components/Faq/`)

**Update questions:**

```typescript
const faqData = [
  {
    question: "TOTALFisc est-il conforme au référentiel SCF algérien ?",
    answer: "Oui, TOTALFisc est entièrement conçu pour respecter le Système Comptable Financier (SCF) algérien : plan comptable conforme, comptes semi-auxiliaires, double-partie, et exports compatibles DGI."
  },
  {
    question: "Comment fonctionne la génération automatique du G50 ?",
    answer: "TOTALFisc collecte automatiquement vos ventes et achats avec la TVA, calcule la TVA collectée et déductible, puis génère le rapport G50 au format officiel requis par la DGI (Direction Générale des Impôts)."
  },
  {
    question: "Puis-je utiliser TOTALFisc pour plusieurs sociétés (cabinet comptable) ?",
    answer: "Oui, les plans PROFESSIONAL et CABINET permettent de gérer entre 5 et 100+ sociétés dans une seule interface, avec des droits d'accès par client et une vue consolidée pour le cabinet."
  },
  {
    question: "Le Timbre Fiscal est-il calculé automatiquement ?",
    answer: "Oui, TOTALFisc applique automatiquement le Timbre Fiscal sur les factures ≥10,000 DZD selon la réglementation algérienne, et l'intègre dans vos déclarations fiscales."
  },
  {
    question: "Est-ce que le module paie est inclus ?",
    answer: "Le module paie est disponible dans les plans PROFESSIONAL (jusqu'à 50 employés) et CABINET (illimité). Il inclut les bulletins de paie, cotisations CNAS, gestion des absences et pointage biométrique."
  },
  {
    question: "TOTALFisc gère-t-il l'OCR des factures ?",
    answer: "Oui, vous pouvez scanner ou uploader vos factures fournisseurs, et TOTALFisc extrait automatiquement les données (montant, TVA, tiers) pour les intégrer dans votre comptabilité."
  },
];
```


### 8. Call-to-Action Section (`src/components/CallToAction/index.tsx`)

**Update:**

```
Title: "Prêt à automatiser votre comptabilité et vos déclarations fiscales ?"
Description: "Rejoignez les cabinets comptables et PME algériennes qui font confiance à TOTALFisc pour leur comptabilité SCF, facturation et conformité DGI."
CTA Primary: "Demander une démo gratuite"
CTA Secondary: "Voir les tarifs"
```


### 9. Contact \& Demo Forms

**Update form labels and messaging:**

- Page title: "Demander une démo de TOTALFisc"
- Form intro: "Laissez vos coordonnées et un expert TOTALFisc vous contactera pour une démonstration personnalisée de la plateforme."
- Email subjects: Reference TOTALFisc, accounting, and fiscal compliance
- Confirmation messages: "Votre demande de démo TOTALFisc a été enregistrée..."

**Update email templates:**

- `src/emails/ContactConfirmationEmail.tsx`
- `src/emails/DemoConfirmationEmail.tsx`
- Replace all "TotalPaie" text with "TOTALFisc"
- Update product description: "Plateforme de comptabilité, facturation et fiscalité pour les entreprises et cabinets en Algérie"


### 10. Footer (`src/components/Footer/index.tsx`)

**Update:**

- Company description: "TOTALFisc est la solution SaaS de comptabilité et fiscalité conforme SCF pour les cabinets comptables et entreprises algériennes."
- Menu links: Ensure "Fonctionnalités", "Tarifs", "À Propos", "Contact" are relevant
- Add new footer links if needed:
    - "Comptabilité SCF"
    - "Déclarations fiscales"
    - "Facturation intelligente"
    - "Module paie \& RH"


### 11. Navigation Menu (`src/components/Header/menuData.tsx`)

**Update menu items if needed:**

```typescript
const menuData: Menu[] = [
  { id: 1, title: "Accueil", path: "/", newTab: false },
  { id: 2, title: "Fonctionnalités", path: "/#features", newTab: false },
  { id: 3, title: "Tarifs", path: "/pricing", newTab: false },
  { id: 4, title: "À Propos", path: "/about", newTab: false },
  { id: 5, title: "Contact", path: "/contact", newTab: false },
  // Optional: Add dropdown for "Solutions" with sub-items for each module
];
```


### 12. Database Schema (`prisma/schema.prisma`)

**Update models if needed:**

- Keep `DemoRequest` and `ContactMessage` models (they're generic)
- Consider adding fields like `accountingNeedsType` or `companySize` to better qualify leads


### 13. Environment Variables

**Create new `.env` file:**

```
SITE_NAME="TOTALFisc"
SITE_URL="https://totalfisc.com"
NEXT_PUBLIC_SITE_URL="https://totalfisc.com"
NEXT_PUBLIC_LOGO_URL="https://totalfisc.com/images/logo/logo-black.png"

EMAIL_FROM="TOTALFisc <no-reply@totalfisc.com>"
EMAIL_TO_ADMIN="contact@totalfisc.com"

# Keep other variables (Database, Auth, Stripe, Resend, etc.)
```


### 14. Image Assets

**Update/replace images:**

- Hero dashboard screenshot: Show accounting interface with SCF chart of accounts, invoice list, G50 report preview
- Feature icons: Calculator, FileText, FileBarChart, Users (use lucide-react icons)
- Logo: Create TOTALFisc logo (or reuse adapted TotalPaie logo)
- OG image: `public/images/og-image.png` with TOTALFisc branding
- Favicon: Update to TOTALFisc branding


### 15. Blog Content (Optional)

If keeping blog section, update:

- Blog topics focus on accounting, SCF compliance, fiscal tips for Algerian businesses
- Example posts:
    - "Guide complet du G50 en Algérie"
    - "Comment choisir un logiciel de comptabilité conforme SCF"
    - "Timbre Fiscal : Calcul et obligations légales"
    - "TVA en Algérie : Guide pratique pour les PME"


### 16. SEO Keywords

**Target keywords throughout site:**

- "comptabilité Algérie"
- "logiciel comptable SCF"
- "déclaration G50"
- "Timbre Fiscal automatique"
- "TVA Algérie"
- "cabinet comptable Algérie"
- "facturation conforme Algérie"
- "Liasse Fiscale"


### 17. Specific File Changes Summary

| File Path | Action | Key Changes |
| :-- | :-- | :-- |
| `src/app/page.tsx` | Update | Metadata, title, description, OG tags for TOTALFisc |
| `src/components/Hero/index.tsx` | Rewrite | H1, subtitle, CTA focused on accounting/fiscal |
| `src/components/Features/featuresData.tsx` | Replace | 4 new features: Accounting, Invoicing, Fiscal, HR/Payroll |
| `src/components/About/index.tsx` | Rewrite | Company story focused on accounting needs |
| `src/stripe/pricingData.ts` | Replace | 3 tiers: STARTER, PROFESSIONAL, CABINET with accounting features |
| `src/components/Testimonials/index.tsx` | Replace | 3 new testimonials from accountants, finance directors |
| `src/components/Faq/` | Replace | 6 new FAQs about SCF, G50, Timbre Fiscal, multi-company |
| `src/components/CallToAction/index.tsx` | Update | CTA text for accounting/fiscal focus |
| `src/components/Footer/index.tsx` | Update | Company description, links |
| `src/components/Header/menuData.tsx` | Review | Ensure menu structure fits new product |
| `src/emails/*.tsx` | Find/Replace | "TotalPaie" → "TOTALFisc", update descriptions |
| `public/manifest.webmanifest` | Update | App name, description |
| `.env*` | Update | Site name, URLs, email addresses |

## Implementation Strategy

1. **Phase 1: Global Find/Replace**
    - Replace all instances of "TotalPaie" with "TOTALFisc"
    - Replace all instances of "totalpaie.com" with "totalfisc.com"
    - Update metadata in all page files
2. **Phase 2: Content Rewrite**
    - Rewrite Hero, Features, About, Testimonials, FAQ sections with new content provided above
    - Update all component text to emphasize accounting, invoicing, and fiscal compliance
    - Adjust CTA buttons and links
3. **Phase 3: Data \& Configuration**
    - Update pricing tiers with accounting-focused feature lists
    - Update environment variables
    - Update email templates
4. **Phase 4: Assets**
    - Replace logo images
    - Update hero dashboard screenshot to show accounting interface
    - Update OG images and favicon
5. **Phase 5: Testing**
    - Verify all links work
    - Test contact and demo forms
    - Check metadata and SEO tags
    - Ensure all "TotalPaie" references are removed

## Style Guidelines

- **Tone**: Professional, expert, compliance-focused
- **Audience**: Accounting professionals, finance directors, business owners in Algeria
- **Key Messaging**: SCF compliance, fiscal automation, time savings, accuracy, multi-company management
- **Avoid**: Over-technical jargon; keep benefits clear and business-focused


## Final Checklist

- [ ] All "TotalPaie" references replaced with "TOTALFisc"
- [ ] Hero section emphasizes accounting/fiscal first
- [ ] 4 features updated to match TOTALFisc modules
- [ ] Pricing tiers reflect accounting/cabinet focus
- [ ] Testimonials from accounting professionals
- [ ] FAQ covers SCF, G50, TVA, Timbre Fiscal
- [ ] About page tells TOTALFisc story
- [ ] Email templates updated
- [ ] Environment variables configured
- [ ] Logo and images updated
- [ ] All CTAs point to demo/contact for accounting solution
- [ ] SEO metadata optimized for accounting keywords
