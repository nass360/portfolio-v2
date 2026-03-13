import { motion } from 'framer-motion'

const chantiers = [
  {
    num: '01',
    title: 'Run Autossimo V3',
    desc: `Assurer la continuité d'une plateforme à €700M+/an de flux. Zéro interruption. Pilotage continu des incidents, priorisation et arbitrages à haute vélocité.`,
  },
  {
    num: '02',
    title: 'Refonte Backoffice',
    desc: `Migration complète PHP → React / Node.js. Déploiement national. Intégration Okta pour 23 000 utilisateurs. Coordination des équipes tech, métier et déploiement terrain.`,
  },
  {
    num: '03',
    title: 'Autossimo V4',
    desc: `Cadrage de la plateforme nouvelle génération : GCP, OAS (OpenAPI Specification), Amplitude. Définition de la vision produit, roadmap et architecture cible.`,
  },
  {
    num: '04',
    title: 'API Partenaires',
    desc: `Conception et pilotage d'une API stratégique générant plusieurs M€/an par partenaire. Ateliers en anglais avec les partenaires européens. Pilotage de l'intégration de bout en bout.`,
  },
]

const previousRoles = [
  {
    company: 'Renault Digital',
    period: 'Sept. 2020 – Déc. 2020',
    scope: 'API GPS · Performances ×2 · Équipe offshore Inde',
  },
  {
    company: 'SNCF',
    period: 'Sept. 2019 – Sept. 2020',
    scope: 'API SNCF ↔ RATP · Dashboards BI · Interopérabilité',
  },
  {
    company: 'EDF',
    period: 'Sept. 2016 – Sept. 2019',
    scope: 'Voicebot Alexa · CI/CD · Business Intelligence',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="mb-16 md:mb-20"
        >
          <span className="text-[11px] font-space font-semibold tracking-[0.25em] uppercase text-sig">
            Parcours
          </span>
        </motion.div>

        {/* Autodistribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-end mb-12 md:mb-16 pb-8 border-b border-muted-f">
            <div>
              <h3 className="font-sora font-extrabold text-[clamp(2rem,5vw,4rem)] leading-[1] tracking-[-0.04em] text-dark">
                Autodistribution
              </h3>
              <p className="mt-3 text-[15px] font-space text-dark-l">
                Senior Product Manager — Autossimo B2B
              </p>
              <p className="mt-1 text-[13px] font-space text-muted">
                Plateforme e-commerce B2B nationale · €700M/an · 23 000+ utilisateurs
              </p>
            </div>
            <div className="text-left md:text-right">
              <span className="font-sora font-bold text-[clamp(1.5rem,3vw,2.5rem)] tracking-[-0.03em] text-sig">
                5 ans
              </span>
              <p className="text-[12px] text-muted font-space">
                Janv. 2021 – Janv. 2026
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {chantiers.map((c, i) => (
              <motion.div
                key={c.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                className="group"
              >
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="font-sora font-extrabold text-[2rem] tracking-[-0.04em] text-sig/15 group-hover:text-sig/30 transition-colors duration-500">
                    {c.num}
                  </span>
                  <h4 className="font-sora font-bold text-[1.1rem] tracking-[-0.01em] text-dark">
                    {c.title}
                  </h4>
                </div>
                <p className="text-[14px] text-dark-l leading-relaxed font-space pl-[calc(2rem+1rem)]">
                  {c.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Previous roles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
        >
          {previousRoles.map((role) => (
            <div
              key={role.company}
              className="grid grid-cols-1 md:grid-cols-[200px_180px_1fr] gap-2 md:gap-6 py-5 border-t border-muted-f items-baseline"
            >
              <span className="font-sora font-bold text-[15px] text-dark">
                {role.company}
              </span>
              <span className="text-[13px] font-space text-muted">
                {role.period}
              </span>
              <span className="text-[13px] font-space text-dark-l">
                {role.scope}
              </span>
            </div>
          ))}
          <div className="border-t border-muted-f" />
        </motion.div>
      </div>
    </section>
  )
}
