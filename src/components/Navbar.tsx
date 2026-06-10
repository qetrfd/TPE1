import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Purpose', href: '#purpose' },
  { label: 'Innovation', href: '#innovation' },
  { label: 'Talent', href: '#talent' },
  { label: 'Join', href: '#join' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-white/8 bg-[#05070b]/85 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl'
          : 'border-transparent bg-transparent py-5'
      }`}
    >
      <nav className="page-shell flex items-center justify-between" aria-label="Main navigation">
        <a href="#top" className="group flex items-center gap-3" aria-label="BMW Group Careers home">
          <img className="brand-logo" src="./assets/bmw-logo.png" alt="" aria-hidden="true" />
          <span className="leading-none">
            <span className="block font-display text-sm font-semibold uppercase tracking-[0.08em] text-white sm:text-base">
              BMW Group
            </span>
            <span className="mt-1 block text-[0.58rem] font-medium uppercase tracking-[0.35em] text-slate-400 sm:text-[0.62rem]">
              Careers
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex lg:gap-10">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`nav-link ${link.label === 'Join' ? 'text-blue-400' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
          type="button"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <div
        className={`overflow-hidden border-white/8 bg-[#070a10]/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          open ? 'max-h-80 border-t' : 'max-h-0'
        }`}
      >
        <div className="page-shell flex flex-col py-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/6 py-4 text-sm font-medium uppercase tracking-[0.16em] text-slate-300 last:border-0"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
