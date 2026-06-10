import type { LucideIcon } from 'lucide-react'

interface BenefitCardProps {
  title: string
  description: string
  Icon: LucideIcon
}

export function BenefitCard({ title, description, Icon }: BenefitCardProps) {
  return (
    <article className="group flex gap-4 border-t border-white/10 py-7 sm:gap-5">
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/[0.045] text-blue-300 transition group-hover:bg-blue-500/15">
        <Icon size={19} strokeWidth={1.7} />
      </span>
      <div>
        <h3 className="font-display text-lg font-medium text-white">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
      </div>
    </article>
  )
}
