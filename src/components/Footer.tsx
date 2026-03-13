import ZDILogo from './ZDILogo'

export default function Footer() {
  return (
    <footer className="border-t border-muted-f">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <ZDILogo />
          <span className="text-[12px] font-space text-muted">
            © 2025 ZDI Consulting — Nassim Zaouadi
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] font-space text-muted">
          <a href="#" className="hover:text-dark transition-colors">Mentions légales</a>
          <a href="https://www.linkedin.com/in/nassim-zaouadi" target="_blank" rel="noopener noreferrer" className="hover:text-dark transition-colors">
            LinkedIn
          </a>
          <a href="https://calendly.com/nassim-zaouadi/30min" target="_blank" rel="noopener noreferrer" className="hover:text-dark transition-colors">
            Calendly
          </a>
          <div className="flex items-center text-[12px] font-medium gap-1.5">
            <button className="text-dark">FR</button>
            <span className="text-muted-f">|</span>
            <button className="text-muted hover:text-dark transition-colors">EN</button>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(217,215,211,0.5)' }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-4 text-center">
          <a href="/services" className="text-[12px] font-space text-muted hover:text-sig transition-colors">
            ZDI Consulting · Services digitaux →
          </a>
        </div>
      </div>
    </footer>
  )
}
