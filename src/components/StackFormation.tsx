import { motion } from 'framer-motion'

const categories = [
  { label: 'Produit & Analytics', tools: ['Amplitude', 'Power BI', 'Jira', 'Figma'] },
  { label: 'API & Intégration', tools: ['Postman', 'OAS / OpenAPI', 'Okta'] },
  { label: 'Cloud & Infrastructure', tools: ['GCP', 'Azure', 'AWS', 'Docker', 'New Relic'] },
  { label: 'Data', tools: ['SQL'] },
]

const formations = [
  { school: 'EFREI Paris', diploma: "Diplôme d'Ingénieur Informatique" },
  { school: 'IUT Paris Descartes', diploma: 'DUT Informatique' },
]

export default function StackFormation() {
  return (
    <>
      <section id="competences" className="py-24 md:py-32 bg-cream-d">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
            className="mb-14"
          >
            <span className="text-[11px] font-space font-semibold tracking-[0.25em] uppercase text-sig">
              Stack & Outils
            </span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-16 md:gap-y-12">
            {categories.map((cat, ci) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: ci * 0.08, duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              >
                <h3 className="font-sora font-bold text-[15px] tracking-[-0.01em] text-dark mb-4">
                  {cat.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-4 py-2 text-[13px] font-space font-medium text-dark-l bg-cream border border-muted-f rounded-full hover:border-sig/30 hover:text-sig transition-all duration-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-cream-d" style={{ borderTop: '1px solid rgba(217,215,211,0.5)' }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          >
            <span className="text-[11px] font-space font-semibold tracking-[0.25em] uppercase text-sig mb-8 block">
              Formation
            </span>
            <div className="space-y-4">
              {formations.map((f) => (
                <div key={f.school} className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4">
                  <span className="font-sora font-bold text-[15px] text-dark">
                    {f.school}
                  </span>
                  <span className="hidden md:inline text-muted-f">—</span>
                  <span className="text-[14px] font-space text-dark-l">
                    {f.diploma}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
