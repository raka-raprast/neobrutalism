import type { ReactNode } from "react"

const accentClasses = {
  electric: "bg-electric text-white",
  acid: "bg-acid text-ink",
  pink: "bg-pink text-ink",
}

export function Badge({
  children,
  accent = "acid",
  rotate = "-rotate-3",
  className = "",
}: {
  children: ReactNode
  accent?: keyof typeof accentClasses
  rotate?: string
  className?: string
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-pill border-[3px] border-line px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-wide shadow-brutal-sm ${rotate} ${accentClasses[accent]} ${className}`}
    >
      {children}
    </span>
  )
}
