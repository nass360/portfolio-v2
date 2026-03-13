export default function ZDILogo() {
  return (
    <a href="/" className="group flex flex-col items-start">
      <div className="flex items-baseline font-sora font-[800] text-[18px] tracking-[-0.08em] leading-none select-none">
        <span className="text-dark">ZD</span>
        <span className="text-sig">I</span>
      </div>
      <div className="mt-[2px] h-[1px] w-full bg-gradient-to-r from-sig to-transparent" />
      <span className="mt-[1px] text-[6.5px] font-space font-light tracking-[0.3em] uppercase text-muted">
        Consulting
      </span>
    </a>
  )
}
