import { motion } from 'framer-motion'

const audiences = [
  {
    label: 'DSI / Directeur de Transformation',
    text: `Vous avez un produit à stabiliser, une API à ouvrir ou une transformation à piloter ? Réservons un créneau pour cadrer votre besoin.`,
    cta: 'Prendre un rendez-vous',
    href: 'https://calendly.com/nassim-zaouadi/30min',
    external: true,
  },
  {
    label: 'Chasseur de tête / Talent Acquisition',
    text: `Vous recherchez un profil PM senior pour un client ou une opportunité ? Mon profil complet et mes références sont disponibles sur LinkedIn.`,
    cta: 'Voir le profil LinkedIn',
    href: 'https://www.linkedin.com/in/nassim-zaouadi',
    external: true,
  },
  {
    label: 'Cabinet de conseil',
    text: `Vous avez besoin d'un expert à positionner rapidement sur un client ? Écrivez-moi directement pour discuter d'une collaboration.`,
    cta: 'Envoyer un email',
    href: 'mailto:nassim.zaouadi@gmail.com',
    external: false,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="mb-6"
        >
          <span className="text-[11px] font-space font-semibold tracking-[0.25em] uppercase text-sig">
            Contact
          </span>
          <h2 className="mt-4 font-sora font-extrabold text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] tracking-[-0.04em] text-dark">
            Travaillons
            <br />
            ensemble<span className="text-sig">.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="text-[16px] text-dark-l font-space leading-relaxed max-w-xl mb-16"
        >
          {`Disponible immédiatement pour une mission en Europe, dans les pays du Golfe ou en full remote. Prenons 30 minutes pour qualifier votre besoin.`}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {audiences.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              className={`py-8 md:py-10 md:px-8 first:md:pl-0 last:md:pr-0 border-t md:border-t-0 md:border-l border-muted-f first:border-t-0 first:md:border-l-0`}
            >
              <h3 className="font-sora font-bold text-[14px] text-dark mb-4">
                {a.label}
              </h3>
              <p className="text-[14px] text-dark-l font-space leading-relaxed mb-6">
                {a.text}
              </p>
              <a
                href={a.href}
                target={a.external ? '_blank' : undefined}
                rel={a.external ? 'noopener noreferrer' : undefined}
                className="group inline-flex items-center gap-2 text-[13px] font-semibold font-space text-sig hover:text-sig-d transition-colors duration-200"
              >
                {a.cta}
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Global contact strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="mt-16 pt-10 border-t border-muted-f flex flex-wrap items-center gap-x-8 gap-y-4"
        >
          <a href="mailto:nassim.zaouadi@gmail.com" className="text-[14px] font-space text-dark hover:text-sig transition-colors">
            nassim.zaouadi@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/nassim-zaouadi" target="_blank" rel="noopener noreferrer" className="text-[14px] font-space text-dark hover:text-sig transition-colors">
            LinkedIn
          </a>
          <a
            href="https://wa.me/33695709060"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark hover:text-sig transition-colors"
            aria-label="Écrire sur WhatsApp"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
