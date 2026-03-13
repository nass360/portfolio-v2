import { motion } from 'framer-motion'

export default function PhotoBridge() {
  return (
    <section className="relative py-20 md:py-0 md:h-[70vh] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 h-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 items-center">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
          className="relative md:h-full flex items-center justify-center md:justify-start"
        >
          <div className="relative w-[280px] h-[350px] md:w-[380px] md:h-[480px]">
            <img
              src="/assets/photo.jpeg"
              alt="Nassim Zaouadi — Senior Product Manager"
              className="w-full h-full object-cover object-top"
              style={{ borderRadius: '200px 200px 40px 40px' }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                borderRadius: '200px 200px 40px 40px',
                background: 'linear-gradient(to top, rgba(250,248,245,0.3) 0%, transparent 30%)',
              }}
            />
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          className="flex flex-col justify-center"
        >
          <div className="md:max-w-md">
            <div className="w-8 h-[2px] bg-sig mb-8" />
            <blockquote className="font-sora font-semibold text-[clamp(1.4rem,3vw,2rem)] leading-[1.35] tracking-[-0.02em] text-dark">
              {`Un produit à €700M de flux annuels,`}
              <br />
              {`ce n'est pas un side project.`}
              <br />
              <span className="text-sig">{`C'est mon quotidien depuis 5 ans.`}</span>
            </blockquote>
            <p className="mt-6 text-[14px] text-muted font-space">
              Autodistribution · Senior Product Manager · 2021 — 2026
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
