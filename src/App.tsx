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
import { MStripes } from './components/MStripes'
import { ScaleIn, SlideIn, SlideUp, StaggerContainer, StaggerItem } from './components/Motion'

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

        <section id="about" className="about-section presentation-section section-shell relative flex min-h-screen items-center overflow-hidden border-t border-white/6">
          <div className="ambient-orb left-[-10%] top-[10%]" />
          <div className="page-shell relative">
            <div className="grid items-center gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
              <div>
                <SectionTitle eyebrow="01 / Who we are" title="Who is BMW Group?" />
                <SlideUp delay={0.18}>
                  <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
                    BMW Group is one of the world's leading premium manufacturers of automobiles and motorcycles, as well as a provider of premium financial and mobility services. Its history goes back to 1916, and today the company continues shaping the future of mobility through innovation, design, engineering and sustainability.
                  </p>
                </SlideUp>
                <SlideUp delay={0.26}>
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
                </SlideUp>
              </div>

              <ScaleIn delay={0.12}>
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
              </ScaleIn>
            </div>

            <StaggerContainer className="timeline-grid mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
              {timeline.map((item, index) => (
                <StaggerItem key={item.title}>
                  <TimelineItem {...item} index={index + 1} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section id="purpose" className="purpose-section presentation-section section-shell purpose-grid relative flex min-h-screen items-center overflow-hidden border-y border-white/6 bg-[#070a10]">
          <span className="purpose-red-beam" aria-hidden="true" />
          <div className="page-shell relative">
            <div className="grid items-center gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
              <div>
                <SectionTitle eyebrow="02 / Our purpose" title="Driven by purpose." />
                <SlideUp delay={0.16}>
                  <blockquote className="font-display text-4xl font-medium leading-[1.1] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                    “We exist to move people, hearts and minds.”
                  </blockquote>
                </SlideUp>
                <SlideUp delay={0.25}>
                  <p className="mt-7 max-w-lg text-base leading-8 text-slate-400 sm:text-lg">
                    BMW Group creates mobility that is more human, intelligent and responsible.
                  </p>
                  <MStripes className="mt-9" />
                </SlideUp>
              </div>

              <SlideIn direction="right" delay={0.12}>
                <div className="purpose-car-stage">
                  <span className="purpose-ring" />
                  <span className="purpose-word">RESPONSIBLE</span>
                  <img src="./assets/bmw-touring-green.png" alt="Green BMW performance touring car" />
                  <div className="purpose-badge purpose-badge-one"><strong>Human</strong><span>Designed around people</span></div>
                  <div className="purpose-badge purpose-badge-two"><strong>Responsible</strong><span>Progress with purpose</span></div>
                </div>
              </SlideIn>
            </div>

            <StaggerContainer className="values-grid mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6" stagger={0.08}>
                {values.map((value) => (
                  <StaggerItem key={value.title}>
                    <ValueCard {...value} />
                  </StaggerItem>
                ))}
            </StaggerContainer>
          </div>
        </section>

        <section id="innovation" className="innovation-section presentation-section section-shell relative flex min-h-screen items-center overflow-hidden">
          <div className="ambient-orb right-[-12%] top-[24%]" />
          <div className="page-shell relative">
            <SectionTitle
              eyebrow="03 / Innovation"
              title="Where talent builds the future."
              description="The next era of mobility is being shaped across disciplines, from the battery cell to the digital experience."
            />

            <ScaleIn className="mt-12" delay={0.12}>
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
            </ScaleIn>

            <StaggerContainer className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
              {innovations.map((innovation, index) => (
                <StaggerItem key={innovation.title}>
                  <InnovationCard {...innovation} number={`0${index + 1}`} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section id="benefits" className="presentation-section section-shell flex min-h-screen items-center border-y border-white/6 bg-[#070a10]">
          <div className="page-shell">
            <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
              <SlideIn direction="left">
                <div className="lg:sticky lg:top-36">
                  <SectionTitle eyebrow="04 / The experience" title="Why join BMW Group?" />
                  <SlideUp delay={0.16}>
                    <p className="mt-6 max-w-md text-base leading-8 text-slate-400">
                      Join a place where ambitious ideas become premium products, and where your work can help redefine how the world moves.
                    </p>
                    <div className="mt-9 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                      <BriefcaseBusiness size={17} />
                      Build more than a career
                    </div>
                  </SlideUp>
                  <div className="benefit-car-stage">
                    <span>Precision in every detail</span>
                    <img src="./assets/bmw-m2-front.png" alt="Front view of a white BMW M performance car" />
                  </div>
                </div>
              </SlideIn>
              <StaggerContainer className="grid gap-x-10 sm:grid-cols-2" stagger={0.09}>
                {benefits.map((benefit) => (
                  <StaggerItem key={benefit.title}>
                    <BenefitCard {...benefit} />
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>

        <section id="talent" className="presentation-section section-shell relative flex min-h-screen items-center">
          <div className="page-shell">
            <SectionTitle
              eyebrow="05 / Talent profile"
              title="Who we're looking for."
              description="A wide range of engineering disciplines working together to build the future of mobility."
            />
            <ScaleIn className="mt-14" delay={0.12}>
              <TalentProfile />
            </ScaleIn>
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
