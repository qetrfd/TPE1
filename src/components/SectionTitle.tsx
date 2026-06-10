interface SectionTitleProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionTitleProps) {
  const centered = align === 'center'

  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <div
        className={`mb-5 flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-blue-400 ${centered ? 'justify-center' : ''}`}
      >
        <span className="h-px w-8 bg-blue-500" />
        {eyebrow}
      </div>
      <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}
