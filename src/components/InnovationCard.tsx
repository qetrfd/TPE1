import { ArrowUpRight, type LucideIcon } from 'lucide-react'

interface InnovationCardProps {
  title: string
  description: string
  Icon: LucideIcon
  number: string
  accent?: 'blue' | 'red' | 'white'
}

export function InnovationCard({ title, description, Icon, number, accent = 'blue' }: InnovationCardProps) {
  return (
    <article className={`innovation-card innovation-card-${accent} group relative overflow-hidden rounded-3xl p-6 sm:p-7`}>
      <div className="innovation-glow absolute -right-16 -top-16 size-44 rounded-full blur-3xl transition duration-500" />
      <div className="relative flex items-start justify-between">
        <span className="innovation-icon grid size-12 place-items-center rounded-2xl">
          <Icon size={23} strokeWidth={1.6} />
        </span>
        <span className="font-display text-xs tracking-[0.22em] text-slate-600">{number}</span>
      </div>
      <div className="relative mt-16">
        <h3 className="font-display text-2xl font-medium tracking-[-0.02em] text-white">{title}</h3>
        <p className="mt-3 max-w-md text-sm leading-7 text-slate-400 sm:text-base">{description}</p>
        <ArrowUpRight className="innovation-arrow mt-6 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
      </div>
    </article>
  )
}
