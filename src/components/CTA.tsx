import { ArrowRight } from 'lucide-react'
import { MStripes } from './MStripes'

export function CTA() {
  return (
    <section id="join" className="cta-section relative isolate overflow-hidden py-28 sm:py-36 lg:py-44">
      <img className="cta-logo-watermark" src="./assets/bmw-logo.png" alt="" aria-hidden="true" />
      <MStripes className="cta-m-stripes" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_90%,rgba(15,108,241,0.24),transparent_37%)]" />
      <div className="cta-road" aria-hidden="true">
        <span className="cta-road-line cta-road-left" />
        <span className="cta-road-line cta-road-center" />
        <span className="cta-road-line cta-road-right" />
      </div>
      <div className="page-shell relative z-10 text-center">
        <p className="mb-6 text-[0.68rem] font-semibold uppercase tracking-[0.36em] text-blue-400">
          Your next chapter
        </p>
        <h2 className="mx-auto max-w-5xl font-display text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-white sm:text-6xl lg:text-8xl">
          Your talent can
          <span className="text-gradient block">move the world.</span>
        </h2>
        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
          At BMW Group, you do not just build vehicles. You build the future of mobility.
        </p>
        <a href="#top" className="button-primary mx-auto mt-9 w-fit">
          Start Your Journey <ArrowRight size={17} />
        </a>
      </div>
    </section>
  )
}
