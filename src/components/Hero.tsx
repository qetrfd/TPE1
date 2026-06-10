import {
  ArrowDown,
  ArrowRight,
  Bot,
  Braces,
  Leaf,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import { MStripes } from './MStripes'

const capabilities: Array<{ label: string; Icon: LucideIcon }> = [
  { label: 'Electric Mobility', Icon: Zap },
  { label: 'Smart Manufacturing', Icon: Bot },
  { label: 'Software & AI', Icon: Braces },
  { label: 'Sustainable Design', Icon: Leaf },
]

export function Hero() {
  return (
    <section id="top" className="hero-grid relative flex min-h-screen items-center overflow-hidden pt-28">
      <MStripes className="hero-m-stripes" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,rgba(22,105,219,0.16),transparent_31%),radial-gradient(circle_at_22%_82%,rgba(0,108,255,0.08),transparent_27%)]" />
      <div className="page-shell relative z-10 grid items-center gap-10 pb-20 pt-10 lg:grid-cols-2 lg:pb-24 lg:pt-0">
        <div className="max-w-2xl animate-hero-copy">
          <p className="mb-6 flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-blue-400 sm:text-xs">
            <span className="h-px w-9 bg-blue-500" />
            Careers at BMW Group
          </p>
          <h1 className="hero-title font-display text-[clamp(3.2rem,6vw,6.5rem)] font-semibold tracking-[-0.065em] text-white">
            <span className="block lg:whitespace-nowrap">Drive the Future</span>
            <span className="hero-mobility-word text-gradient block">of Mobility.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-8 text-slate-300 sm:text-lg lg:text-xl">
            Join BMW Group and help create intelligent, electric and sustainable mobility for the next generation.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#innovation" className="button-primary">
              Explore Careers <ArrowRight size={17} />
            </a>
            <a href="#benefits" className="button-secondary">
              Why Join Us? <ArrowDown size={16} />
            </a>
          </div>
          <div className="hero-disciplines mt-9 grid max-w-xl grid-cols-3 border-y border-white/8 py-4">
            <span>Engineering</span>
            <span>Technology</span>
            <span>Design</span>
          </div>
        </div>

        <div className="vehicle-stage animate-hero-visual" aria-label="BMW i8 on a futuristic illuminated road">
          <div className="stage-glow" />
          <span className="hero-model-outline">i</span>
          <div className="horizon-line" />
          <div className="road-plane">
            <span className="road-line road-line-left" />
            <span className="road-line road-line-center" />
            <span className="road-line road-line-right" />
          </div>

          <div className="hero-car-wrap hero-i8-wrap">
            <span className="car-ground-shadow" />
            <span className="car-light-sweep" />
            <img
              className="hero-car-image"
              src="./assets/bmw-i8-black.png"
              alt="Black BMW i8"
            />
          </div>

          <div className="hero-vehicle-label">
            <span>Visionary performance</span>
            <strong>BMW i8</strong>
          </div>

          <div className="capability-rail">
            {capabilities.map(({ label, Icon }) => (
              <div key={label} className="capability-item">
                <Icon size={17} strokeWidth={1.7} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.58rem] font-semibold uppercase tracking-[0.32em] text-slate-500 lg:flex"
      >
        Scroll
        <span className="grid size-8 place-items-center rounded-full border border-white/15 text-slate-300">
          <ArrowDown size={13} />
        </span>
      </a>
    </section>
  )
}
