interface MStripesProps {
  className?: string
}

export function MStripes({ className = '' }: MStripesProps) {
  return (
    <span className={`m-stripes ${className}`} aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  )
}
