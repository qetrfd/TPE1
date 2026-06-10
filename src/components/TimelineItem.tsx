import type { LucideIcon } from 'lucide-react'

interface TimelineItemProps {
  title: string
  description: string
  Icon: LucideIcon
  index: number
}

export function TimelineItem({ title, description, Icon, index }: TimelineItemProps) {
  return (
    <article className="group relative grid grid-cols-[auto_1fr] gap-4 rounded-2xl border border-white/8 bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/[0.045] sm:gap-5 sm:p-6">
      <span className="absolute right-5 top-4 font-display text-xs tracking-[0.2em] text-white/20">
        0{index}
      </span>
      <div className="grid size-12 place-items-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-300 sm:size-14">
        <Icon size={22} strokeWidth={1.6} />
      </div>
      <div className="pr-5">
        <h3 className="font-display text-lg font-medium text-white">{title}</h3>
        <p className="mt-1.5 text-sm leading-6 text-slate-400">{description}</p>
      </div>
    </article>
  )
}
