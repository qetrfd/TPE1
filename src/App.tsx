import {
  BatteryCharging,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  CarFront,
  ChartNoAxesCombined,
  CircleGauge,
  Earth,
  Factory,
  Gem,
  Globe2,
  Handshake,
  Heart,
  History,
  Layers3,
  Leaf,
  Lightbulb,
  Medal,
  Network,
  Palette,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { SectionTitle } from './components/SectionTitle'
import { TimelineItem } from './components/TimelineItem'
import { ValueCard } from './components/ValueCard'
import { InnovationCard } from './components/InnovationCard'
import { BenefitCard } from './components/BenefitCard'
import { TalentProfile } from './components/TalentProfile'
import { CTA } from './components/CTA'
import { Reveal } from './components/Reveal'
import { MStripes } from './components/MStripes'

const timeline = [
  { title: '1916', description: "BMW's history begins", Icon: History },
  {
    title: 'Premium Mobility',
    description: 'BMW, MINI, Rolls-Royce and BMW Motorrad',
    Icon: Gem,
  },
  { title: 'Mexico', description: 'Offices and production presence', Icon: Building2 },
  {
    title: 'Today',
    description: 'Electric, intelligent and sustainable mobility',
    Icon: CarFront,
  },
]

const values = [
  { title: 'Innovation', Icon: Lightbulb, accent: 'blue' as const },
  { title: 'Responsibility', Icon: ShieldCheck, accent: 'white' as const },
  { title: 'Excellence', Icon: Medal, accent: 'red' as const },
  { title: 'Teamwork', Icon: Users, accent: 'white' as const },
  { title: 'Sustainability', Icon: Earth, accent: 'blue' as const },
  { title: 'Passion', Icon: Heart, accent: 'red' as const },
]

const innovations = [
  {
    title: 'Electric Mobility',
    description: 'Work on the next generation of electric vehicles and sustainable mobility.',
    Icon: BatteryCharging,
    accent: 'blue' as const,
  },
  {
    title: 'Smart Manufacturing',
    description: 'Build advanced production systems using automation, robotics and data.',
    Icon: Factory,
    accent: 'white' as const,
  },
  {
    title: 'Software & AI',
    description: 'Develop intelligent systems, digital experiences and connected mobility solutions.',
    Icon: BrainCircuit,
    accent: 'red' as const,
  },
  {
    title: 'Sustainable Design',
    description: 'Create premium products with responsibility, efficiency and long-term impact.',
    Icon: Palette,
    accent: 'blue' as const,
  },
]

const benefits = [
  {
    title: 'Real impact',
    description: 'Build products and systems used by people across the world.',
    Icon: CircleGauge,
  },
  {
    title: 'Premium engineering',
    description: 'Learn from a culture where precision, quality and craft matter.',
    Icon: Sparkles,
  },
  {
    title: 'Global teams',
    description: 'Collaborate across markets, disciplines and perspectives.',
    Icon: Globe2,
  },
  {
    title: 'Career growth',
    description: 'Develop through meaningful challenges, mentoring and mobility.',
    Icon: ChartNoAxesCombined,
  },
  {
    title: 'Interdisciplinary work',
    description: 'Connect design, engineering, technology and business.',
    Icon: Layers3,
  },
  {
    title: 'Sustainable mobility',
    description: 'Help make progress more responsible for the next generation.',
    Icon: Leaf,
  },
]

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#05070b] text-white">
      <Navbar />
      <main>
        <Hero />

        <section id="about" className="about-section section-shell relative overflow-hidden border-t border-white/6">
          <div className="ambient-orb left-[-10%] top-[10%]" />
          <div className="page-shell relative">
            <div className="grid items-center gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
              <Reveal>
                <SectionTitle eyebrow="01 / Who we are" title="Who is BMW Group?" />
                <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
                  BMW Group is one of the world's leading premium manufacturers of automobiles and motorcycles, as well as a provider of premium financial and mobility services. Its history goes back to 1916, and today the company continues shaping the future of mobility through innovation, design, engineering and sustainability.
                </p>
                <div className="mt-10 flex items-center gap-4 text-sm text-slate-500">
                  <span className="grid size-9 place-items-center rounded-full border border-white/10 text-blue-300">
                    <Network size={16} />
                  </span>
                  <span>From engineering heritage to connected mobility.</span>
                </div>
                <div className="about-facts mt-10 grid grid-cols-3">
                  <div><strong>1916</strong><span>Our story begins</span></div>
                  <div><strong>4</strong><span>Premium brands</span></div>
                  <div><strong>1</strong><span>Shared future</span></div>
                </div>
              </Reveal>

              <Reveal>
                <div className="about-car-stage">
                  <MStripes className="about-m-stripes" />
                  <span className="about-car-kicker">Premium mobility</span>
                  <span className="about-outline-word">DESIGN</span>
                  <img className="about-main-car" src="./assets/bmw-sedan-white.png" alt="White BMW sedan" />
                  <div className="heritage-inset">
                    <img src="./assets/bmw-heritage-sedan.png" alt="Classic white BMW sedan" />
                    <div><span>Then</span><strong>Engineering heritage</strong></div>
                  </div>
                  <div className="about-car-caption">
                    <span>Today</span>
                    <strong>Built to move forward.</strong>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="timeline-grid mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              {timeline.map((item, index) => (
                <Reveal key={item.title} delay={index * 80}>
                  <TimelineItem {...item} index={index + 1} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="purpose" className="purpose-section section-shell purpose-grid relative overflow-hidden border-y border-white/6 bg-[#070a10]">
          <span className="purpose-red-beam" aria-hidden="true" />
          <div className="page-shell relative">
            <div className="grid items-center gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
              <Reveal>
                <SectionTitle eyebrow="02 / Our purpose" title="Driven by purpose." />
                <blockquote className="font-display text-4xl font-medium leading-[1.1] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                  “We exist to move people, hearts and minds.”
                </blockquote>
                <p className="mt-7 max-w-lg text-base leading-8 text-slate-400 sm:text-lg">
                  BMW Group creates mobility that is more human, intelligent and responsible.
                </p>
                <MStripes className="mt-9" />
              </Reveal>

              <Reveal>
                <div className="purpose-car-stage">
                  <span className="purpose-ring" />
                  <span className="purpose-word">RESPONSIBLE</span>
                  <img src="./assets/bmw-touring-green.png" alt="Green BMW performance touring car" />
                  <div className="purpose-badge purpose-badge-one"><strong>Human</strong><span>Designed around people</span></div>
                  <div className="purpose-badge purpose-badge-two"><strong>Responsible</strong><span>Progress with purpose</span></div>
                </div>
              </Reveal>
            </div>

            <div className="values-grid mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {values.map((value, index) => (
                  <Reveal key={value.title} delay={index * 60}>
                    <ValueCard {...value} />
                  </Reveal>
                ))}
            </div>
          </div>
        </section>

        <section id="innovation" className="innovation-section section-shell relative overflow-hidden">
          <div className="ambient-orb right-[-12%] top-[24%]" />
          <div className="page-shell relative">
            <Reveal>
              <SectionTitle
                eyebrow="03 / Innovation"
                title="Where talent builds the future."
                description="The next era of mobility is being shaped across disciplines, from the battery cell to the digital experience."
              />
            </Reveal>

            <Reveal className="mt-12">
              <div className="innovation-car-stage">
                <span className="innovation-outline-word">PRECISION</span>
                <div className="innovation-track">
                  <span>Electrified</span>
                  <span>Connected</span>
                  <span>Intelligent</span>
                </div>
                <img src="./assets/bmw-sedan-grey-side.png" alt="Grey BMW performance sedan side profile" />
                <MStripes className="innovation-m-stripes" />
              </div>
            </Reveal>

            <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {innovations.map((innovation, index) => (
                <Reveal key={innovation.title} delay={index * 80}>
                  <InnovationCard {...innovation} number={`0${index + 1}`} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="benefits" className="section-shell border-y border-white/6 bg-[#070a10]">
          <div className="page-shell">
            <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
              <Reveal>
                <div className="lg:sticky lg:top-36">
                  <SectionTitle eyebrow="04 / The experience" title="Why join BMW Group?" />
                  <p className="mt-6 max-w-md text-base leading-8 text-slate-400">
                    Join a place where ambitious ideas become premium products, and where your work can help redefine how the world moves.
                  </p>
                  <div className="mt-9 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                    <BriefcaseBusiness size={17} />
                    Build more than a career
                  </div>
                  <div className="benefit-car-stage">
                    <span>Precision in every detail</span>
                    <img src="./assets/bmw-m2-front.png" alt="Front view of a white BMW M performance car" />
                  </div>
                </div>
              </Reveal>
              <div className="grid gap-x-10 sm:grid-cols-2">
                {benefits.map((benefit, index) => (
                  <Reveal key={benefit.title} delay={(index % 2) * 80}>
                    <BenefitCard {...benefit} />
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="talent" className="section-shell relative">
          <div className="page-shell">
            <Reveal>
              <SectionTitle
                eyebrow="05 / Talent profile"
                title="Who we're looking for."
                description="A wide range of engineering disciplines working together to build the future of mobility."
              />
            </Reveal>
            <Reveal className="mt-14">
              <TalentProfile />
            </Reveal>
          </div>
        </section>

        <CTA />
      </main>

      <footer className="border-t border-white/8 bg-[#040609] py-7">
        <div className="page-shell">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-xs text-slate-600 sm:flex-row sm:text-left">
            <p>BMW Group Careers — Drive the Future</p>
            <div className="flex items-center gap-2 text-slate-500">
              <Handshake size={14} />
              Networking event presentation - Class project
            </div>
          </div>
          <p className="mt-6 border-t border-white/6 pt-5 text-center font-display text-xs uppercase tracking-[0.22em] text-slate-400">
            Created by <span className="text-white">Fernando H. Santillan</span>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
