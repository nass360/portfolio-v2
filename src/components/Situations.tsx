import { motion } from 'framer-motion'

const situations = [
  {
    num: '01',
    tag: 'Legacy · Run & Build',
    title: `Votre produit critique doit évoluer sans jamais s'arrêter.`,
    text: `Votre système fait tourner des millions d'euros de transactions par an. Le refactorer, le migrer ou l'étendre sans interruption de service, c'est exactement ce que je fais.`,
    proof: 'Migration PHP → React/Node · Déploiement national · 23 000 utilisateurs · continuité €700M+/an',
  },
  {
    num: '02',
    tag: 'API · Intégration SI',
    title: 'Vous devez ouvrir votre SI à des partenaires externes.',
    text: `Concevoir une API partenaire robuste, piloter les ateliers en anglais avec les parties prenantes européennes, garantir plusieurs M€/an de valeur par intégration — c'est mon terrain.`,
    proof: 'API Partenaires multi-M€ · Ateliers EN · Europe',
  },
  {
    num: '03',
    tag: 'Transformation · Delivery',
    title: `Vous lancez une transformation SI et cherchez quelqu'un pour tenir le fil.`,
    text: `Cadrage, architecture cible, OAS, gouvernance, pilotage des équipes : je rentre dans le dur et je livre.`,
    proof: 'Cadrage GCP · OAS · Amplitude · Roadmap V4',
  },
]

export default function Situations() {
  return (
    <section id="situations" className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="mb-16 md:mb-24"
        >
          <span className="text-[11px] font-space font-semibold tracking-[0.25em] uppercase text-sig">
            Votre contexte
          </span>
          <h2 className="mt-4 font-sora font-bold text-[clamp(1.8rem,4vw,3rem)] leading-[1.1] tracking-[-0.03em] text-dark max-w-2xl">
            {`Je travaille avec des organisations qui font face à l'une de ces trois réalités.`}
          </h2>
        </motion.div>

        <div>
          {situations.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
              className="group border-t border-muted-f py-10 md:py-14 grid grid-cols-1 md:grid-cols-[80px_1fr_1fr] gap-6 md:gap-10"
            >
              <span className="font-sora font-extrabold text-[3rem] md:text-[4rem] leading-none tracking-[-0.04em] text-sig/20 group-hover:text-sig/40 transition-colors duration-500">
                {s.num}
              </span>

              <div>
                <span className="inline-block mb-3 px-3 py-1 text-[11px] font-space font-semibold tracking-[0.1em] uppercase text-sig border border-sig/20 rounded-full">
                  {s.tag}
                </span>
                <h3 className="font-sora font-bold text-[clamp(1.2rem,2.5vw,1.6rem)] leading-[1.25] tracking-[-0.02em] text-dark">
                  {s.title}
                </h3>
              </div>

              <div className="flex flex-col justify-between">
                <p className="text-[15px] text-dark-l leading-relaxed font-space">
                  {s.text}
                </p>
                <p className="mt-4 text-[12px] font-space font-medium text-muted tracking-wide">
                  {s.proof}
                </p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-muted-f" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="mt-14 text-center"
        >
          <a
            href="https://calendly.com/nassim-zaouadi/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-7 py-3.5 text-[14px] font-semibold text-cream bg-dark hover:bg-sig rounded-full transition-colors duration-300"
          >
            Discutons de votre situation
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
