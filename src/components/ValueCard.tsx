import type { LucideIcon } from 'lucide-react'

interface ValueCardProps {
  title: string
  Icon: LucideIcon
  accent?: 'blue' | 'red' | 'white'
}

export function ValueCard({ title, Icon, accent = 'blue' }: ValueCardProps) {
  return (
    <article className={`value-card value-card-${accent} group rounded-2xl p-5`}>
      <div className="mb-8 flex items-start justify-between">
        <span className="value-icon grid size-11 place-items-center rounded-full transition duration-300">
          <Icon size={20} strokeWidth={1.6} />
        </span>
        <span className="value-line h-px w-8 transition" />
      </div>
      <h3 className="font-display text-lg font-medium text-white">{title}</h3>
    </article>
  )
}
