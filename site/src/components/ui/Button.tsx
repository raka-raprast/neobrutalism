import type { ComponentPropsWithoutRef, ElementType } from "react"

type Variant = "electric" | "acid" | "pink" | "ink" | "paper"

const variantClasses: Record<Variant, string> = {
  electric: "bg-electric text-white",
  acid: "bg-acid text-ink",
  pink: "bg-pink text-ink",
  ink: "bg-ink text-paper",
  paper: "bg-paper text-ink",
}

interface ButtonProps<T extends ElementType> {
  as?: T
  variant?: Variant
  className?: string
}

/**
 * The signature neobrutalist "press" affordance: a hard offset shadow that
 * collapses to zero and the surface translates into the shadow's old spot on
 * press, then springs back. Communicates "this is a mechanical, pressable
 * thing" rather than a generic hover fade.
 */
export function Button<T extends ElementType = "button">({
  as,
  variant = "ink",
  className = "",
  children,
  ...rest
}: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) {
  const Component = as ?? "button"

  return (
    <Component
      className={`group/btn relative inline-flex cursor-pointer items-center justify-center gap-2 rounded-pill border-[3px] border-line px-7 py-3.5 font-display text-base font-semibold uppercase tracking-tight shadow-brutal-sm transition-[transform,box-shadow] duration-150 ease-out hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-brutal active:translate-x-[3px] active:translate-y-[3px] active:shadow-none ${variantClasses[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Component>
  )
}
