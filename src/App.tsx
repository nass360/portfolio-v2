import { createContext, useContext, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ZDILogo from './components/ZDILogo'

/* ─────────── i18n ─────────── */
type Lang = 'fr' | 'en'
const LangCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({ lang: 'fr', setLang: () => {} })
const useLang = () => useContext(LangCtx)

function useT() {
  const { lang } = useLang()
  return (fr: any, en: any) => lang === 'fr' ? fr : en
}

const tabs = [
  { id: 'home', labelFr: 'Accueil', labelEn: 'Home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4' },
  { id: 'parcours', labelFr: 'Expérience', labelEn: 'Experience', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
  { id: 'stack', labelFr: 'Compétences', labelEn: 'Skills', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' },
  { id: 'contact', labelFr: 'Contact', labelEn: 'Contact', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
] as const

type TabId = (typeof tabs)[number]['id']

/* ─────────── TAB CONTENT ─────────── */

function HomeTab() {
  const t = useT()
  return (
    <div className="flex flex-col justify-center h-full gap-8 py-2">
      {/* Hero — photo + headline side by side */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 md:gap-10 items-center">
        <div>
          <p className="text-[12px] font-medium tracking-[0.12em] uppercase text-sig mb-3">
            Senior Product Manager · Freelance
          </p>

          <h1 className="font-poppins font-black text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.08] tracking-[-0.03em] text-dark">
            {t(<>Je pilote<br />des produits<br />qui comptent</>, <>I drive<br />products<br />that matter</>)}<span className="text-sig">.</span>
          </h1>

          <p className="mt-4 font-dm text-[15px] leading-[1.7] text-dark-l max-w-lg">
            {t(
              `Senior PM freelance — je prends en main vos produits critiques, vos API stratégiques et vos transformations SI.`,
              `Senior freelance PM — I take ownership of your critical products, strategic APIs and IT transformations.`
            )}
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {['Legacy · Run & Build', 'API · Intégration SI', 'Transformation · Delivery'].map((tag) => (
              <span key={tag} className="px-3.5 py-1.5 text-[12px] font-medium text-sig border border-sig/20 rounded-full bg-sig/[0.04]">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-5">
            <a
              href="https://calendly.com/nassim-zaouadi/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 text-[14px] font-semibold text-cream bg-dark hover:bg-sig rounded-full transition-colors duration-300"
            >
              {t('Prendre un rendez-vous', 'Book a meeting')}
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a href="#" className="px-6 py-3 text-[14px] font-medium text-dark border border-muted-f hover:border-dark rounded-full transition-colors">
              {t('↓ Télécharger CV', '↓ Download CV')}
            </a>
          </div>

          <p className="mt-3 font-dm text-[12px] text-muted">
            {t(`🇫🇷 Français natif · 🇬🇧 Anglais professionnel`, `🇫🇷 Native French · 🇬🇧 Professional English`)}
            <span className="mx-2">·</span>
            {`🌍 Europe · GCC · Remote & On-site`}
          </p>
        </div>

        <div className="hidden md:flex flex-col items-center gap-2">
          <img src="/assets/photo.jpeg" alt="Nassim Zaouadi" className="w-[210px] h-[260px] object-cover object-top rounded-2xl shadow-lg" />
          <p className="font-poppins font-semibold text-[13px] text-dark">Nassim Zaouadi</p>
          <p className="font-dm text-[11px] text-muted -mt-1.5">{t('Fondateur — ZDI Consulting', 'Founder — ZDI Consulting')}</p>
        </div>
      </div>

      {/* Stats + clients strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { val: '€700M+', labelFr: 'de CA annuel piloté', labelEn: 'annual revenue managed' },
          { val: '23 000+', labelFr: 'utilisateurs managés', labelEn: 'users managed' },
          { val: '10+', labelFr: `ans d'expérience`, labelEn: 'years of experience' },
          { val: '4', labelFr: 'grands comptes internationaux', labelEn: 'international enterprise clients' },
        ].map((s) => (
          <div key={s.val} className="px-5 py-4 rounded-xl bg-dark text-cream">
            <span className="font-poppins font-black text-[clamp(1.5rem,2.8vw,2rem)] leading-none">{s.val}</span>
            <p className="font-dm text-[12px] text-cream/60 mt-1.5">{t(s.labelFr, s.labelEn)}</p>
          </div>
        ))}
      </div>

      {/* Client logos */}
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 -mt-4">
        {['Autodistribution', 'Renault Digital', 'SNCF', 'EDF'].map((c) => (
          <span key={c} className="font-poppins font-bold text-[15px] tracking-[0.02em] uppercase text-dark/30">{c}</span>
        ))}
      </div>
    </div>
  )
}

function ParcoursTab() {
  const t = useT()
  const chantiers = [
    {
      num: '01', titleFr: 'Run · Autossimo V3', titleEn: 'Run · Autossimo V3', metric: '€700M+/an',
      descFr: `Continuité de la plateforme e-commerce B2B critique. Arbitrages haute vélocité entre métier, tech et produit. Zéro interruption de service sur 5 ans. Roadmap structurée en Epics/US Jira, coordination DSI, métiers et prestataires, suivi KPIs post-MEP.`,
      descEn: `Critical B2B e-commerce platform continuity. High-velocity trade-offs between business, tech and product. Zero service interruption over 5 years. Roadmap structured in Jira Epics/US, DSI/business/vendor coordination, post-release KPI tracking.`,
      tags: ['Run', 'Stabilité', 'Arbitrage'],
    },
    {
      num: '02', titleFr: 'Build · Refonte Backoffice', titleEn: 'Build · Backoffice Redesign', metric: '€350M → €700M/an',
      descFr: `Migration complète PHP → React/Node.js. Déploiement national multi-sites. Intégration Okta pour 23 000 utilisateurs. Conduite du changement auprès des équipes terrain. Refonte intégrale des parcours B2B, workflows et règles métier. Co-construction du design system avec 2 Product Designers.`,
      descEn: `Full PHP → React/Node.js migration. National multi-site deployment. Okta integration for 23,000 users. Change management for field teams. Complete B2B user journey redesign, workflows and business rules. Design system co-built with 2 Product Designers.`,
      tags: ['Migration', 'Déploiement national', 'Change management'],
    },
    {
      num: '03', titleFr: 'Build · Autossimo V4', titleEn: 'Build · Autossimo V4', metric: 'Next-gen',
      descFr: `Cadrage de la V4 : architecture GCP, contrats OAS, analytics Amplitude. Vision produit, roadmap stratégique et coordination des équipes tech. Mise en place de l'observabilité et des dashboards de suivi produit.`,
      descEn: `V4 scoping: GCP architecture, OAS contracts, Amplitude analytics. Product vision, strategic roadmap and tech team coordination. Observability setup and product monitoring dashboards.`,
      tags: ['GCP', 'OAS', 'Amplitude', 'Roadmap'],
    },
    {
      num: '04', titleFr: 'API · Intégration Partenaires', titleEn: 'API · Partner Integration', metric: 'Multi-M€/yr',
      descFr: `Conception et pilotage d'APIs partenaires générant plusieurs M€/an. Ateliers techniques en anglais avec des partenaires européens. Structuration des contrats d'interface OAS, validation Postman, arbitrage solution.`,
      descEn: `Design and delivery of partner APIs generating multi-M€/year. Technical workshops in English with European partners. OAS interface contracts, Postman validation, solution arbitration.`,
      tags: ['API REST', 'Ateliers EN', 'Europe'],
    },
  ]

  const prevRoles = [
    { co: 'Renault Digital', role: 'Product Owner', period: '09/2020–12/2020', scopeFr: `API GPS & Performance. Temps de réponse ÷2. Coordination offshore Inde.`, scopeEn: `GPS API & Performance. Response time ÷2. India offshore coordination.` },
    { co: 'SNCF', role: 'PO / Business Analyst', period: '09/2019–09/2020', scopeFr: `Interopérabilité API SNCF↔RATP. Dashboards BI. Cadrage fonctionnel.`, scopeEn: `SNCF↔RATP API interoperability. BI dashboards. Functional scoping.` },
    { co: 'EDF', role: 'Ingénieur SI', period: '09/2016–09/2019', scopeFr: `Voicebot Alexa, pipelines CI/CD, reporting BI. 3 ans de delivery continu.`, scopeEn: `Alexa voicebot, CI/CD pipelines, BI reporting. 3 years of continuous delivery.` },
  ]

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex flex-wrap items-end justify-between gap-4 mb-5">
        <div>
          <p className="text-[12px] font-medium tracking-[0.12em] uppercase text-sig mb-2">{t('Expérience principale', 'Main experience')}</p>
          <h2 className="font-poppins font-black text-[clamp(1.6rem,3.5vw,2.4rem)] tracking-[-0.03em] text-dark leading-[1.1]">
            {t(<>5 ans sur un produit — de €350M à €700M/an.</>, <>5 years on one product — from €350M to €700M/yr.</>)}
          </h2>
          <p className="font-dm text-[14px] text-dark-l mt-2">{t('Autodistribution · Senior Product Manager · Autossimo B2B e-commerce · 23 000+ utilisateurs', 'Autodistribution · Senior Product Manager · Autossimo B2B e-commerce · 23,000+ users')}</p>
        </div>
        <div className="text-right flex-shrink-0">
          <span className="font-poppins font-black text-[1.6rem] text-sig">{t('5 ans', '5 yrs')}</span>
          <p className="font-dm text-[12px] text-muted">Jan 2021 – Jan 2026</p>
        </div>
      </div>

      {/* Chantiers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1 min-h-0">
        {chantiers.map((c) => (
          <div key={c.num} className="group p-4 rounded-xl border border-muted-f hover:border-sig/30 transition-colors">
            <div className="flex items-baseline justify-between mb-1.5">
              <div className="flex items-baseline gap-2">
                <span className="font-poppins font-black text-[1.1rem] text-sig/20 group-hover:text-sig/40 transition-colors">{c.num}</span>
                <h3 className="font-poppins font-semibold text-[14px] text-dark">{t(c.titleFr, c.titleEn)}</h3>
              </div>
              <span className="text-[11px] font-semibold text-sig">{c.metric}</span>
            </div>
            <p className="font-dm text-[12.5px] text-dark-l leading-[1.65] mb-2">{t(c.descFr, c.descEn)}</p>
            <div className="flex flex-wrap gap-1.5">
              {c.tags.map((tag) => (
                <span key={tag} className="px-2.5 py-0.5 text-[10px] font-medium text-muted bg-cream-d rounded-full">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Previous roles + education */}
      <div className="border-t border-muted-f pt-4 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
          {prevRoles.map((r) => (
            <div key={r.co} className="flex items-baseline gap-3">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-poppins font-semibold text-[13px] text-dark">{r.co}</span>
                  <span className="text-[11px] text-sig font-medium">{r.role}</span>
                  <span className="font-dm text-[11px] text-muted">{r.period}</span>
                </div>
                <p className="font-dm text-[12px] text-dark-l leading-relaxed mt-0.5">{t(r.scopeFr, r.scopeEn)}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-baseline gap-x-6 gap-y-1">
          <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-sig">{t('Formation', 'Education')}</span>
          <span className="font-dm text-[13px] text-dark"><span className="font-semibold">EFREI Paris</span> — {t(`Ingénieur Informatique`, 'Computer Engineering')}</span>
          <span className="font-dm text-[13px] text-dark"><span className="font-semibold">IUT Paris Descartes</span> — {t('DUT Informatique', 'CS Diploma')}</span>
        </div>
      </div>
    </div>
  )
}

function StackTab() {
  const t = useT()
  const competences = [
    {
      titleFr: 'Stratégie & Gouvernance', titleEn: 'Strategy & Governance',
      descFr: `Vision produit & roadmap stratégique, arbitrage valeur/complexité, gouvernance multi-stakeholders DSI/métiers/prestataires, cadrage fonctionnel et business de bout en bout.`,
      descEn: `Product vision & strategic roadmap, value/complexity trade-offs, multi-stakeholder governance (CIO/business/vendors), end-to-end functional and business scoping.`,
    },
    {
      titleFr: 'Delivery & Exécution', titleEn: 'Delivery & Execution',
      descFr: `Agile Scrum/Kanban adapté par stream, structuration backlog & Epics Jira, pilotage prestataires externes, recette & mise en production, conduite du changement nationale.`,
      descEn: `Agile Scrum/Kanban adapted per stream, backlog & Jira Epics structuring, external vendor management, UAT & release, national change management.`,
    },
    {
      titleFr: 'Environnements Techniques', titleEn: 'Technical Environments',
      descFr: `API REST/GraphQL/OAS, intégration SI complexe multi-ERP, Cloud GCP/Azure/AWS, IAM Okta 23k users, observabilité New Relic/Graylog, Docker.`,
      descEn: `API REST/GraphQL/OAS, complex multi-ERP SI integration, Cloud GCP/Azure/AWS, IAM Okta 23k users, observability New Relic/Graylog, Docker.`,
    },
  ]

  const tools = [
    { labelFr: 'Produit & Analytics', labelEn: 'Product & Analytics', items: ['Amplitude', 'Power BI', 'Jira', 'Figma'] },
    { labelFr: 'API & Intégration', labelEn: 'API & Integration', items: ['Postman', 'OAS / OpenAPI', 'Okta'] },
    { labelFr: 'Cloud & Infra', labelEn: 'Cloud & Infra', items: ['GCP', 'Azure', 'AWS', 'Docker', 'New Relic'] },
    { labelFr: 'Data', labelEn: 'Data', items: ['SQL'] },
  ]

  return (
    <div className="flex flex-col justify-center h-full gap-8">
      {/* Competences */}
      <div>
        <p className="text-[12px] font-medium tracking-[0.12em] uppercase text-sig mb-4">{t('Compétences', 'Skills')}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {competences.map((c) => (
            <div key={c.titleFr} className="p-5 rounded-xl border border-muted-f hover:border-sig/30 transition-colors">
              <h3 className="font-poppins font-semibold text-[14px] text-dark mb-2">{t(c.titleFr, c.titleEn)}</h3>
              <p className="font-dm text-[13px] text-dark-l leading-[1.65]">{t(c.descFr, c.descEn)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className="border-t border-muted-f pt-6">
        <p className="text-[12px] font-medium tracking-[0.12em] uppercase text-sig mb-5">{t('Stack & Outils', 'Stack & Tools')}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {tools.map((cat) => (
            <div key={cat.labelFr}>
              <h3 className="font-poppins font-semibold text-[14px] text-dark mb-3">{t(cat.labelFr, cat.labelEn)}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((tool) => (
                  <span key={tool} className="px-3.5 py-1.5 text-[12px] font-medium text-dark-l bg-cream-d border border-muted-f rounded-full hover:border-sig/30 hover:text-sig transition-all duration-200">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ContactTab() {
  const t = useT()
  const audiences = [
    {
      labelFr: 'DSI / Directeur de Transformation', labelEn: 'CIO / Transformation Director',
      textFr: `Vous avez un produit à stabiliser, une API à ouvrir ou une transformation à piloter ? Réservons un créneau pour cadrer votre besoin.`,
      textEn: `You have a product to stabilize, an API to open or a transformation to drive? Let's book a slot to scope your needs.`,
      ctaFr: 'Prendre un rendez-vous', ctaEn: 'Book a meeting',
      href: 'https://calendly.com/nassim-zaouadi/30min',
      external: true,
    },
    {
      labelFr: 'Chasseur de tête / Talent Acquisition', labelEn: 'Headhunter / Talent Acquisition',
      textFr: `Vous recherchez un profil PM senior pour un client ou une opportunité ? Mon profil complet et mes références sont disponibles sur LinkedIn.`,
      textEn: `Looking for a senior PM profile for a client or opportunity? My full profile and references are available on LinkedIn.`,
      ctaFr: 'Voir le profil LinkedIn', ctaEn: 'View LinkedIn profile',
      href: 'https://www.linkedin.com/in/nassim-zaouadi',
      external: true,
    },
    {
      labelFr: 'Cabinet de conseil', labelEn: 'Consulting firm',
      textFr: `Vous avez besoin d'un expert à positionner rapidement sur un client ? Écrivez-moi directement pour discuter d'une collaboration.`,
      textEn: `Need an expert to position quickly on a client engagement? Write to me directly to discuss a collaboration.`,
      ctaFr: 'Envoyer un email', ctaEn: 'Send an email',
      href: 'mailto:nassim.zaouadi@gmail.com',
      external: false,
    },
  ]

  return (
    <div className="flex flex-col justify-center h-full gap-6">
      {/* Header */}
      <div>
        <p className="text-[12px] font-medium tracking-[0.12em] uppercase text-sig mb-3">Contact</p>
        <h2 className="font-poppins font-black text-[clamp(2rem,4vw,3rem)] tracking-[-0.03em] text-dark leading-[1.08]">
          {t(<>Travaillons ensemble</>, <>Let's work together</>)}<span className="text-sig">.</span>
        </h2>
        <p className="font-dm text-[15px] text-dark-l mt-3 max-w-xl leading-[1.65]">
          {t(
            `Disponible immédiatement pour une mission en Europe, dans les pays du Golfe ou en full remote. Prenons 30 minutes pour qualifier votre besoin.`,
            `Available immediately for missions in Europe, the Gulf or fully remote. Let's take 30 minutes to qualify your needs.`
          )}
        </p>
      </div>

      {/* Situations — argument fort */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {[
          { tag: 'Legacy · Run & Build', fr: `Produit critique à stabiliser`, en: `Critical product to stabilize` },
          { tag: 'API · Intégration SI', fr: `SI à ouvrir aux partenaires`, en: `IS to open to partners` },
          { tag: 'Transformation · Delivery', fr: `Transformation SI à piloter`, en: `IT transformation to drive` },
        ].map((s) => (
          <div key={s.tag} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-cream-d">
            <span className="text-sig text-[10px] font-semibold tracking-wider uppercase">{s.tag}</span>
            <span className="font-dm text-[12px] text-dark-l">{t(s.fr, s.en)}</span>
          </div>
        ))}
      </div>

      {/* Audience cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {audiences.map((a) => (
          <div key={a.labelFr} className="p-5 rounded-xl border border-muted-f hover:border-sig/30 transition-colors flex flex-col">
            <h3 className="font-poppins font-semibold text-[14px] text-dark mb-2">{t(a.labelFr, a.labelEn)}</h3>
            <p className="font-dm text-[13px] text-dark-l leading-[1.65] flex-1 mb-4">{t(a.textFr, a.textEn)}</p>
            <a
              href={a.href}
              target={a.external ? '_blank' : undefined}
              rel={a.external ? 'noopener noreferrer' : undefined}
              className="group inline-flex items-center gap-2 text-[14px] font-semibold text-sig hover:text-sig-d transition-colors"
            >
              {t(a.ctaFr, a.ctaEn)} <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        ))}
      </div>

      {/* Footer bar */}
      <div className="border-t border-muted-f pt-4">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[13px] font-semibold text-emerald-700">{t(`Disponible · Démarrage immédiat`, `Available · Immediate start`)}</span>
          </div>
          <a href="mailto:nassim.zaouadi@gmail.com" className="font-dm text-[14px] text-dark hover:text-sig transition-colors">nassim.zaouadi@gmail.com</a>
          <a href="https://www.linkedin.com/in/nassim-zaouadi" target="_blank" rel="noopener noreferrer" className="font-dm text-[14px] text-dark hover:text-sig transition-colors">LinkedIn</a>
          <a href="https://wa.me/33695709060" target="_blank" rel="noopener noreferrer" className="text-dark hover:text-sig transition-colors" aria-label="WhatsApp">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
          </a>
          <span className="font-dm text-[12px] text-muted ml-auto">© 2025 ZDI Consulting</span>
        </div>
      </div>
    </div>
  )
}

/* ─────────── MAIN ─────────── */

function AppInner() {
  const [activeTab, setActiveTab] = useState<TabId>('home')
  const { lang, setLang } = useLang()

  const content: Record<TabId, JSX.Element> = {
    home: <HomeTab />,
    parcours: <ParcoursTab />,
    stack: <StackTab />,
    contact: <ContactTab />,
  }

  const tabLabel = (tab: typeof tabs[number]) => lang === 'fr' ? tab.labelFr : tab.labelEn

  return (
    <div className="h-[100dvh] flex flex-col overflow-hidden bg-cream">
      {/* ─── DESKTOP NAVBAR — floating contained bar ─── */}
      <header className="hidden md:flex flex-shrink-0 items-center justify-center px-6 pt-4 pb-2">
        <nav
          className="flex items-center gap-4 w-full max-w-[1300px] px-6 py-3"
          style={{
            borderRadius: 16,
            background: 'rgba(255,255,255,0.85)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(0,0,0,0.06)',
            boxShadow: '0 2px 20px rgba(0,0,0,0.04)',
          }}
        >
          <ZDILogo />

          <div className="flex items-center gap-1 ml-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-2 text-[15px] font-medium rounded-full transition-all duration-200 ${
                  activeTab === tab.id ? 'text-dark' : 'text-muted hover:text-dark'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="tab"
                    className="absolute inset-0 rounded-full bg-dark/[0.06]"
                    style={{ zIndex: -1 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
                {tabLabel(tab)}
              </button>
            ))}
          </div>

          <div className="flex-1" />

          <div className="flex items-center gap-4">
            <div className="flex items-center text-[14px] font-medium">
              <button onClick={() => setLang('fr')} className={`px-2 py-1 transition-colors ${lang === 'fr' ? 'text-dark' : 'text-muted hover:text-dark'}`}>FR</button>
              <span className="text-muted-f">|</span>
              <button onClick={() => setLang('en')} className={`px-2 py-1 transition-colors ${lang === 'en' ? 'text-dark' : 'text-muted hover:text-dark'}`}>EN</button>
            </div>
            <div className="flex items-center gap-2 text-[14px] font-medium text-dark-l">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              {lang === 'fr' ? 'Disponible' : 'Available'}
            </div>
            <a
              href="https://calendly.com/nassim-zaouadi/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-[14px] font-semibold text-cream bg-dark hover:bg-sig rounded-full transition-colors duration-300"
            >
              {lang === 'fr' ? 'Prendre un RDV' : 'Book a call'}
            </a>
          </div>
        </nav>
      </header>

      {/* ─── MOBILE HEADER ─── */}
      <header className="md:hidden flex-shrink-0 flex items-center justify-between px-5 pt-3 pb-2 border-b border-muted-f">
        <ZDILogo />
        <div className="flex items-center gap-3">
          <div className="flex items-center text-[12px] font-medium gap-1">
            <button onClick={() => setLang('fr')} className={lang === 'fr' ? 'text-dark' : 'text-muted'}>FR</button>
            <span className="text-muted-f">|</span>
            <button onClick={() => setLang('en')} className={lang === 'en' ? 'text-dark' : 'text-muted'}>EN</button>
          </div>
          <div className="flex items-center gap-1.5 text-[12px] font-medium text-dark-l">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
            </span>
            {lang === 'fr' ? 'Dispo' : 'Available'}
          </div>
          <a
            href="https://calendly.com/nassim-zaouadi/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-[12px] font-semibold text-cream bg-dark hover:bg-sig rounded-full transition-colors"
          >
            RDV
          </a>
        </div>
      </header>

      {/* ─── CONTENT — same max-width as navbar ─── */}
      <main className="flex-1 overflow-hidden px-3 md:px-6 py-2 md:py-3">
        <div
          className="h-full max-w-[1300px] mx-auto rounded-2xl md:rounded-3xl p-5 md:p-8 overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.45)',
            border: '1px solid rgba(0,0,0,0.05)',
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
              className="h-full"
            >
              {content[activeTab]}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* ─── FOOTER LINK ─── */}
      <div className="hidden md:flex flex-shrink-0 justify-center py-2">
        <a href="/services" className="text-[12px] text-muted hover:text-sig transition-colors">
          {lang === 'fr' ? 'ZDI Consulting · Services digitaux →' : 'ZDI Consulting · Digital services →'}
        </a>
      </div>

      {/* ─── MOBILE BOTTOM TAB BAR ─── */}
      <nav className="md:hidden flex-shrink-0 flex items-center justify-around px-2 py-2 border-t border-muted-f bg-cream">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-colors ${
              activeTab === tab.id ? 'text-sig' : 'text-muted'
            }`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d={tab.icon} />
            </svg>
            <span className="text-[10px] font-medium">{tabLabel(tab)}</span>
          </button>
        ))}
      </nav>
    </div>
  )
}

function App() {
  const [lang, setLang] = useState<Lang>('fr')
  return (
    <LangCtx.Provider value={{ lang, setLang }}>
      <AppInner />
    </LangCtx.Provider>
  )
}

export default App
