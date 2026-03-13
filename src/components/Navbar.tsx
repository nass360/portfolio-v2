import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ZDILogo from './ZDILogo'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Expérience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        className="fixed top-4 z-50 w-full flex justify-center px-4"
      >
        <div
          className="flex items-center gap-2 pl-5 pr-2 py-2.5 transition-shadow duration-500 w-auto"
          style={{
            borderRadius: 100,
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            background: 'rgba(250,248,245,0.85)',
            border: '1px solid rgba(0,0,0,0.08)',
            boxShadow: scrolled
              ? '0 4px 30px rgba(0,0,0,0.07)'
              : '0 1px 8px rgba(0,0,0,0.03)',
          }}
        >
          <ZDILogo />

          <nav className="hidden md:flex items-center gap-1 ml-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-[13px] font-medium text-muted hover:text-dark rounded-full hover:bg-dark/[0.04] transition-all duration-200"
              >
                {link.label}
              </a>
            ))}

            <div className="w-px h-4 bg-muted-f mx-1" />

            <div className="flex items-center text-[12px] font-medium">
              <button className="px-2 py-1 text-dark">FR</button>
              <span className="text-muted-f">|</span>
              <button className="px-2 py-1 text-muted hover:text-dark transition-colors">EN</button>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-medium text-dark-l">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Disponible
            </div>

            <a
              href="https://calendly.com/nassim-zaouadi/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 px-5 py-2 text-[13px] font-semibold text-cream bg-dark hover:bg-sig rounded-full transition-colors duration-300"
            >
              Prendre un RDV
            </a>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] mr-1"
            aria-label="Menu"
          >
            <span className={`block w-[18px] h-[1.5px] bg-dark transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
            <span className={`block w-[18px] h-[1.5px] bg-dark transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-[18px] h-[1.5px] bg-dark transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col items-start justify-center px-10 gap-6"
            style={{ background: 'rgba(250,248,245,0.98)' }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                className="text-[36px] font-sora font-bold text-dark hover:text-sig transition-colors tracking-tight"
              >
                {link.label}
              </motion.a>
            ))}

            <div className="flex items-center gap-3 mt-4">
              <div className="flex items-center gap-1.5 text-[14px] text-dark-l">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Disponible
              </div>
              <span className="text-muted-f">·</span>
              <div className="flex items-center text-[14px] font-medium gap-2">
                <button className="text-dark">FR</button>
                <span className="text-muted-f">|</span>
                <button className="text-muted">EN</button>
              </div>
            </div>

            <a
              href="https://calendly.com/nassim-zaouadi/30min"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-4 px-8 py-3.5 text-[15px] font-semibold text-cream bg-dark hover:bg-sig rounded-full transition-colors"
            >
              Prendre un RDV →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
