# CLAUDE.md — Portfolio Nassim Zaouadi / ZDI Consulting
> Ce fichier est la source de vérité pour Claude Code.
> Il contient UNIQUEMENT le profil, le contenu, la structure, les règles SEO et l'objectif de conversion.
> La direction artistique complète est déléguée au Frontend Design skill — aucune contrainte visuelle ici.

---

## 0. Objectif de conversion

**Cibles :**

| Cible | Ce qu'elle cherche | Action attendue |
|---|---|---|
| **DSI / CTO / Directeur de Transformation** | Un PM senior disponible immédiatement, capable de tenir un produit critique ou une transformation SI sans supervision | Réserver un créneau Calendly |
| **Chasseur de tête / Talent Acquisition** | Un profil tech senior crédible, quantifiable, avec des références grands comptes et une disponibilité confirmée | Contacter par LinkedIn ou email |
| **Cabinet de conseil** (Accenture, Capgemini, Wavestone, etc.) | Un freelance expert à positionner sur un client en run & build, intégration API ou transformation — démarrage rapide | Prendre contact par email ou WhatsApp |

**Objectif universel :** En moins de 30 secondes de lecture, chaque visiteur doit :
1. Comprendre exactement ce que Nassim fait et pour qui.
2. Identifier immédiatement la valeur ajoutée (chiffres, grands comptes, disponibilité).
3. Avoir envie d'agir — quel que soit son canal préféré.

**Action primaire :** Clic sur le CTA "Prendre un rendez-vous" → Calendly.
**Action secondaire :** Message WhatsApp · Mail direct · LinkedIn.

---

## 1. Identité & Contacts

| Champ | Valeur |
|---|---|
| Nom | Nassim Zaouadi |
| Titre | Senior Product Manager Freelance |
| Structure | ZDI Consulting (Fondateur) |
| Expérience | 10 ans |
| Localisation | Île-de-France |
| Disponibilité | Immédiate |
| Modes | Europe · GCC · 100% Remote |
| Email | nassim.zaouadi@gmail.com |
| LinkedIn | https://www.linkedin.com/in/nassim-zaouadi |
| Calendly | https://calendly.com/nassim-zaouadi/30min |
| WhatsApp | https://wa.me/33695709060 (icône uniquement, numéro masqué) |
| Domaine | https://zdiconsulting.com |

---

## 2. Logo ZDI Consulting

Construire le logo en code (SVG ou CSS) — pas d'image externe.

**Anatomie :**
- Logotype : `ZD` + `I` — le `I` porte une couleur accent distincte des autres lettres
- Graisse : Sora 800 (ou équivalent variable-font ultra-bold)
- Espacement entre lettres : très serré (tracking négatif)
- Sous le logotype : une ligne fine en dégradé (largeur du logotype)
- Sous la ligne : mot `Consulting` en capitales très espacées (tracking large), poids léger

---

## 3. Navbar

Éléments de la navbar (ordre gauche → droite) :

1. Logo ZDI Consulting (lien → `/`)
2. Liens de navigation : `Services` (→ `/services`) · `Expérience` · `Contact`
3. Toggle langue : `FR | EN`
4. Badge animé : `● Disponible` — le point pulse en boucle (animation CSS subtile)
5. CTA principal : `Prendre un RDV` → `https://calendly.com/nassim-zaouadi/30min`

---

## 4. Page principale `/` — One Page Portfolio

### 4.1 Section HERO

**Accroche principale (H1) :**
> Nassim Zaouadi — Senior Product Manager Freelance

**Sous-titre (H2) :**
> Je pilote des produits critiques, des API stratégiques et des transformations SI pour des entreprises qui n'ont pas le droit à l'erreur.

**Description courte :**
> Fondateur de ZDI Consulting · 10 ans d'expérience · Île-de-France · Europe · GCC · 100% Remote

**CTA principal :**
> Prendre un rendez-vous → https://calendly.com/nassim-zaouadi/30min

**CTA secondaire :**
> Voir mon expérience (ancre vers section expérience)

**Signal de crédibilité immédiat (sous les CTAs) :**
> Disponible immédiatement · Grands comptes : Autodistribution · Renault Digital · SNCF · EDF

---

### 4.2 Section LOGOS & STATS (social proof)

**Titre :** *(pas de titre affiché — section purement visuelle)*

**Logos clients/employeurs à afficher (texte fallback si pas d'image) :**
- Autodistribution
- Renault Digital
- SNCF
- EDF

**Chiffres clés (stats cards) :**

| Chiffre | Label |
|---|---|
| 10 ans | d'expérience produit |
| €700M+/an | de flux sécurisés |
| 23 000+ | utilisateurs migrés |
| 4 grands comptes | en secteurs réglementés |

---

### 4.3 Section SITUATIONS CLIENT (positionnement)

**Titre de section :** `Votre contexte`

**Sous-titre :** `Je travaille avec des organisations qui font face à l'une de ces trois réalités.`

Présenter les 3 situations sous forme de cards ou de blocs distincts.

---

**Situation 1 — Legacy · Run & Build**

> Titre : Votre produit critique doit évoluer sans jamais s'arrêter.

> Texte : Votre système fait tourner des millions d'euros de transactions par an. Le refactorer, le migrer ou l'étendre sans interruption de service, c'est exactement ce que je fais.

> Exemple concret : Migration PHP → React/Node · Déploiement national · 23 000 utilisateurs · continuité €700M+/an

---

**Situation 2 — API · Intégration SI**

> Titre : Vous devez ouvrir votre SI à des partenaires externes.

> Texte : Concevoir une API partenaire robuste, piloter les ateliers en anglais avec les parties prenantes européennes, garantir plusieurs M€/an de valeur par intégration — c'est mon terrain.

> Exemple concret : API Partenaires multi-M€ · Ateliers EN · Europe

---

**Situation 3 — Transformation · Delivery**

> Titre : Vous lancez une transformation SI et cherchez quelqu'un pour tenir le fil.

> Texte : Cadrage, architecture cible, OAS, gouvernance, pilotage des équipes : je rentre dans le dur et je livre.

> Exemple concret : Cadrage GCP · OAS · Amplitude · Roadmap V4

---

**CTA de section :**
> Discutons de votre situation → https://calendly.com/nassim-zaouadi/30min

---

### 4.4 Section EXPÉRIENCE

**Titre de section :** `Parcours`

---

**Poste principal — Autodistribution**

> Rôle : Senior Product Manager — Autossimo B2B
> Période : Janvier 2021 – Janvier 2026 (5 ans)
> Contexte : Plateforme e-commerce B2B nationale · €700M/an · 23 000+ utilisateurs

Présenter les 4 chantiers comme des blocs ou des entrées distinctes :

**Chantier 1 — Run Autossimo V3**
> Assurer la continuité d'une plateforme à €700M+/an de flux. Zéro interruption. Pilotage continu des incidents, priorisation et arbitrages à haute vélocité.

**Chantier 2 — Refonte Backoffice**
> Migration complète PHP → React / Node.js. Déploiement national. Intégration Okta pour 23 000 utilisateurs. Coordination des équipes tech, métier et déploiement terrain.

**Chantier 3 — Autossimo V4**
> Cadrage de la plateforme nouvelle génération : GCP, OAS (OpenAPI Specification), Amplitude. Définition de la vision produit, roadmap et architecture cible.

**Chantier 4 — API Partenaires**
> Conception et pilotage d'une API stratégique générant plusieurs M€/an par partenaire. Ateliers en anglais avec les partenaires européens. Pilotage de l'intégration de bout en bout.

---

**Expériences précédentes**

Présenter en format timeline ou liste condensée :

**Renault Digital** · Sept. 2020 – Déc. 2020
> API GPS · Amélioration des performances x2 · Pilotage équipe offshore Inde

**SNCF** · Sept. 2019 – Sept. 2020
> API SNCF ↔ RATP · Dashboards BI · Interopérabilité inter-opérateurs

**EDF** · Sept. 2016 – Sept. 2019
> Voicebot Alexa · Mise en place CI/CD · Business Intelligence

---

### 4.5 Section COMPÉTENCES

**Titre de section :** `Stack & Outils`

Organiser en groupes thématiques (pas de listes à puces brutes — utiliser des tags ou des badges visuels) :

**Produit & Analytics**
> Amplitude · Power BI · Jira · Figma

**API & Intégration**
> Postman · OAS / OpenAPI · Okta

**Cloud & Infrastructure**
> GCP · Azure · AWS · Docker · New Relic

**Data**
> SQL

---

### 4.6 Section FORMATION

**Titre de section :** `Formation`

*(Afficher sans dates)*

- EFREI Paris — Diplôme d'Ingénieur Informatique
- IUT Paris Descartes — DUT Informatique

---

### 4.7 Section CONTACT

**Titre de section :** `Travaillons ensemble`

**Texte d'accroche :**
> Disponible immédiatement pour une mission en Europe, dans les pays du Golfe ou en full remote. Prenons 30 minutes pour qualifier votre besoin.

**Blocs par cible (afficher en 3 colonnes ou tabs) :**

**Bloc DSI / Directeur de Transformation**
> Vous avez un produit à stabiliser, une API à ouvrir ou une transformation à piloter ? Réservons un créneau pour cadrer votre besoin.
> CTA : Prendre un rendez-vous → https://calendly.com/nassim-zaouadi/30min

**Bloc Chasseur de tête / Talent Acquisition**
> Vous recherchez un profil PM senior pour un client ou une opportunité ? Mon profil complet et mes références sont disponibles sur LinkedIn.
> CTA : Voir le profil LinkedIn → https://www.linkedin.com/in/nassim-zaouadi

**Bloc Cabinet de conseil**
> Vous avez besoin d'un expert à positionner rapidement sur un client ? Écrivez-moi directement pour discuter d'une collaboration.
> CTA : Envoyer un email → mailto:nassim.zaouadi@gmail.com

**Liens globaux (toujours visibles) :**

| Canal | Label | URL / Valeur |
|---|---|---|
| Email | nassim.zaouadi@gmail.com | mailto:nassim.zaouadi@gmail.com |
| LinkedIn | Nassim Zaouadi | https://www.linkedin.com/in/nassim-zaouadi |
| WhatsApp | Écrire sur WhatsApp | https://wa.me/33695709060 (icône uniquement — ne pas afficher le numéro) |

**Mention légale courte :**
> ZDI Consulting · Île-de-France · SIRET à compléter

---

### 4.8 Footer

Contenu footer :

- Logo ZDI Consulting (version compacte)
- `© 2025 ZDI Consulting — Nassim Zaouadi`
- Liens : `Mentions légales` · `LinkedIn` · `Calendly`
- Toggle FR/EN (répété)

---

## 5. Page `/services` — ZDI Consulting

Page autonome, accessible via la navbar. Ton légèrement plus institutionnel que le portfolio.

**Pas de tarifs affichés sur cette page.**

---

### 5.1 Hero /services

**H1 :**
> ZDI Consulting

**Sous-titre :**
> Conseil en Product Management & Transformation Digitale pour entreprises et DSI exigeants.

**Description :**
> ZDI Consulting accompagne les organisations dans le pilotage de leurs produits critiques, l'ouverture de leurs SI via des API stratégiques, et la conduite de leurs transformations numériques.

---

### 5.2 Offres de service

Présenter les 3 offres (correspondant aux 3 situations client) :

**Offre 1 — Run & Build sur produit legacy**
> Prise en main d'un produit existant à fort enjeu business. Continuité opérationnelle, refonte progressive, migration technologique sans arrêt de service.

**Offre 2 — API Strategy & Intégration Partenaires**
> Conception et pilotage d'API ouvertes vers des partenaires externes. De la définition OAS au déploiement, en passant par les ateliers métier et techniques.

**Offre 3 — Pilotage de Transformation SI**
> Cadrage de la cible, définition de la roadmap, gouvernance et pilotage des équipes. Du kick-off à la livraison.

---

### 5.3 Pourquoi ZDI Consulting

**Titre :** `Ce qui nous différencie`

**Points clés (à présenter en format card ou liste enrichie) :**

- **Profil hybride** : PM senior avec background ingénieur — je parle aussi bien à la DSI qu'à la tech.
- **Expérience grands comptes** : Autodistribution, Renault Digital, SNCF, EDF — des contextes où l'erreur n'est pas permise.
- **Europe & International** : Ateliers en anglais, missions GCC, coordination d'équipes offshore.
- **Disponibilité immédiate** : Démarrage possible sans délai.

---

### 5.4 CTA /services

**CTA principal :**
> Discuter d'une mission → https://calendly.com/nassim-zaouadi/30min

**CTA secondaire :**
> Voir le portfolio → `/`

---

## 6. Internationalisation (FR/EN)

Le toggle FR/EN doit être présent dans la navbar sur toutes les pages.

**Version EN — traductions clés :**

| FR | EN |
|---|---|
| Prendre un rendez-vous | Book a call |
| Disponible | Available |
| Travaillons ensemble | Let's work together |
| Voir mon expérience | View my experience |
| Votre contexte | Your context |
| Parcours | Experience |
| Formation | Education |
| Réserver un créneau (30 min) | Book a 30-min slot |
| Disponible immédiatement pour une mission... | Available immediately for an engagement in Europe, GCC, or fully remote. |
| Écrire sur WhatsApp | Message on WhatsApp |
| Voir le profil LinkedIn | View LinkedIn profile |
| Envoyer un email | Send an email |
| Vous avez un produit à stabiliser... | You have a product to stabilize, an API to open, or a transformation to steer? Let's schedule a call to scope your needs. |
| Vous recherchez un profil PM senior... | Looking for a senior PM profile for a client or opportunity? My full profile and references are available on LinkedIn. |
| Vous avez besoin d'un expert... | Need an expert to place quickly with a client? Reach out directly to discuss a collaboration. |

Les textes longs (situations client, descriptions d'expérience) doivent être traduits de manière naturelle, sans sur-formalisme.

---

## 7. SEO

### Balises HTML

```html
<!-- Page / -->
<title>Nassim Zaouadi — Senior Product Manager | ZDI Consulting</title>
<meta name="description" content="Senior Product Manager Freelance · 10 ans d'expérience · Île-de-France · Europe · GCC · 100% Remote. Produits critiques, API stratégiques, transformation SI." />
<link rel="canonical" href="https://zdiconsulting.com" />

<!-- Page /services -->
<title>Services — ZDI Consulting | Product Management & Transformation SI</title>
<meta name="description" content="ZDI Consulting accompagne les DSI et entreprises dans le pilotage de produits critiques, l'intégration API et la conduite du changement." />
<link rel="canonical" href="https://zdiconsulting.com/services" />
```

### hreflang

```html
<link rel="alternate" hreflang="fr" href="https://zdiconsulting.com" />
<link rel="alternate" hreflang="en" href="https://zdiconsulting.com/en" />
<link rel="alternate" hreflang="x-default" href="https://zdiconsulting.com" />
```

### Schema.org Person (JSON-LD — à injecter dans `<head>`)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Nassim Zaouadi",
  "jobTitle": "Senior Product Manager Freelance",
  "worksFor": {
    "@type": "Organization",
    "name": "ZDI Consulting",
    "url": "https://zdiconsulting.com"
  },
  "url": "https://zdiconsulting.com",
  "sameAs": [
    "https://www.linkedin.com/in/nassim-zaouadi"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Île-de-France",
    "addressCountry": "FR"
  },
  "knowsAbout": [
    "Product Management",
    "API Strategy",
    "Transformation Digitale",
    "Systèmes d'Information",
    "E-commerce B2B"
  ]
}
```

### robots.txt

```
User-agent: *
Allow: /
Sitemap: https://zdiconsulting.com/sitemap.xml
```

### sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://zdiconsulting.com/</loc>
    <xhtml:link rel="alternate" hreflang="fr" href="https://zdiconsulting.com/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://zdiconsulting.com/en"/>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://zdiconsulting.com/services</loc>
    <xhtml:link rel="alternate" hreflang="fr" href="https://zdiconsulting.com/services"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://zdiconsulting.com/en/services"/>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

---

## 8. Règles de contenu — Non-négociables

| Règle | Détail |
|---|---|
| Pas de tarifs | Aucun prix, taux journalier ou fourchette sur `/services` ni nulle part sur le site |
| Formation sans dates | Afficher uniquement les établissements et diplômes, jamais les années |
| WhatsApp | Icône uniquement — ne jamais afficher le numéro `+33 6 95 70 90 60` en clair |
| Toggle FR/EN | Présent dans la navbar sur toutes les pages, état persisté (localStorage ou cookie) |
| Badge Disponible | Présent dans la navbar, animation pulse CSS sur le point vert — doit rester sobre |
| CTA Calendly | Lien direct `https://calendly.com/nassim-zaouadi/30min` — pas de widget embarqué sauf si désiré |
| Numéro WhatsApp | Accessible uniquement via `https://wa.me/33695709060` — jamais en texte visible |

---

## 9. Structure des fichiers attendue

```
/
├── index.html (ou app selon le framework)
├── /services
├── robots.txt
├── sitemap.xml
├── /assets
│   └── (fonts, icons — pas d'images requises, logo en code)
└── /locales
    ├── fr.json
    └── en.json
```

---

## 10. Notes pour Claude Code

- **Direction artistique** : Entièrement libre — utiliser le Frontend Design skill pour inventer une DA premium, distinctive, adaptée à un profil tech senior B2B.
- **Logo** : Construire en SVG ou CSS pur selon les spécifications de la section 2. Pas d'image.
- **Performance** : Viser un Lighthouse Score > 95 sur toutes les métriques.
- **Accessibilité** : WCAG AA minimum — contrastes, focus visible, aria-labels sur les liens icônes.
- **Mobile first** : Le portfolio doit être parfaitement lisible sur mobile — la cible DSI consulte aussi sur smartphone.
- **Animations** : Sobres et purposeful uniquement — pas d'effets gratuits. Le badge "Disponible" pulse, les cards peuvent avoir un hover state, les sections peuvent apparaître au scroll (intersection observer).
- **Pas de CMS** : Site statique ou SSG (Next.js, Astro, Nuxt) selon préférence — pas de dépendance à un CMS.
