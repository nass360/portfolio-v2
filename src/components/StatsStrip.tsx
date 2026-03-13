import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const clients = ['Autodistribution', 'Renault Digital', 'SNCF', 'EDF']

const stats = [
  { value: 10, suffix: ' ans', label: "d'expérience produit" },
  { value: 700, prefix: '€', suffix: 'M+/an', label: 'de flux sécurisés' },
  { value: 23, suffix: ' 000+', label: 'utilisateurs migrés' },
  { value: 4, suffix: '', label: 'grands comptes en secteurs réglementés' },
]

function Counter({ target, prefix = '', suffix }: { target: number; prefix?: string; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!inView) return
    let current = 0
    const step = target / 50
    const timer = setInterval(() => {
      current += step
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 30)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref} className="font-sora font-extrabold text-[clamp(2rem,4.5vw,3.5rem)] tracking-[-0.04em] text-cream">
      {prefix}{count}{suffix}
    </span>
  )
}

export default function StatsStrip() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#1B1B1F' }}>
      {/* Client names */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {clients.map((name, i) => (
            <motion.span
              key={name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="font-sora font-bold text-[clamp(1rem,2vw,1.3rem)] tracking-[-0.02em] uppercase"
              style={{ color: 'rgba(255,255,255,0.15)' }}
            >
              {name}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-14 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              className="text-center md:text-left"
            >
              <Counter target={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              <p className="mt-1 text-[13px] font-space" style={{ color: 'rgba(255,255,255,0.35)' }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
