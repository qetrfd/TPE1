import {
  Bot,
  Braces,
  CircuitBoard,
  Factory,
  Leaf,
  Settings2,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'

const disciplines: Array<{
  title: string
  area: string
  Icon: LucideIcon
}> = [
  {
    title: 'Mechanical Engineering',
    area: 'Vehicle dynamics, structures and powertrain',
    Icon: Settings2,
  },
  {
    title: 'Electrical Engineering',
    area: 'Electronics, batteries and energy systems',
    Icon: CircuitBoard,
  },
  {
    title: 'Industrial Engineering',
    area: 'Production, quality and intelligent logistics',
    Icon: Factory,
  },
  {
    title: 'Software & Data',
    area: 'AI, connectivity and digital experiences',
    Icon: Braces,
  },
  {
    title: 'Mechatronics & Robotics',
    area: 'Automation and intelligent manufacturing',
    Icon: Bot,
  },
  {
    title: 'Materials & Sustainability',
    area: 'Lightweight design and circular innovation',
    Icon: Leaf,
  },
]

export function TalentProfile() {
  return (
    <div className="talent-panel relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#090d14] p-6 shadow-2xl shadow-black/25 sm:p-10 lg:p-12">
      <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_70%_20%,rgba(29,111,224,0.18),transparent_52%)]" />
      <div className="relative grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
        <div className="flex flex-col justify-between">
          <div>
            <span className="mb-7 grid size-12 place-items-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-300">
              <Sparkles size={22} strokeWidth={1.6} />
            </span>
            <p className="font-display text-2xl leading-snug tracking-[-0.02em] text-white sm:text-3xl">
              Many disciplines. One shared direction.
            </p>
          </div>
          <p className="mt-8 max-w-md text-sm leading-7 text-slate-400 sm:text-base">
            BMW Group brings together engineers who think differently, solve complex problems and turn technology into responsible mobility.
          </p>
        </div>

        <div className="engineering-grid grid content-start gap-3 sm:grid-cols-2">
          {disciplines.map(({ title, area, Icon }, index) => (
            <article key={title} className="engineering-card group">
              <div className="flex items-start justify-between gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-300 transition group-hover:border-blue-300/40 group-hover:bg-blue-500/15">
                  <Icon size={19} strokeWidth={1.65} />
                </span>
                <span className="font-display text-[0.62rem] tracking-[0.2em] text-slate-600">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-6 font-display text-base font-medium text-white sm:text-lg">
                {title}
              </h3>
              <p className="mt-2 text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
                {area}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="talent-car-visual">
        <div className="talent-car-copy">
          <span>One vehicle. Hundreds of disciplines.</span>
          <strong>Engineering becomes motion.</strong>
          <p>Every line, system and interaction is the result of specialists building one experience together.</p>
        </div>
        <img src="./assets/bmw-m4-grey.png" alt="Grey BMW M performance coupe" />
      </div>
    </div>
  )
}
