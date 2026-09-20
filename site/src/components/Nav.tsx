import { List, X } from "@phosphor-icons/react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/Button"
import { nav } from "@/data/content"

export function Nav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-paper/95 backdrop-blur-sm">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] bg-ink" />

      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-3.5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5 font-display text-2xl font-extrabold tracking-tight">
          <span aria-hidden="true" className="grid h-9 w-9 -rotate-3 place-items-center rounded-[8px] border-[3px] border-line bg-acid text-sm font-black">
            S
          </span>
          SLAB
          <span className="hidden pl-2 font-mono text-xs font-bold uppercase tracking-wide text-ink/50 lg:inline">
            &mdash; A Neobrutalism Design Study
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-block py-2 font-mono text-sm font-bold uppercase tracking-wide text-ink/80 transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button as="a" href="#about" variant="ink" className="px-5 py-2.5 text-sm">
            About this build
          </Button>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 cursor-pointer place-items-center rounded-[8px] border-[3px] border-line bg-paper md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="flex flex-col gap-1 bg-paper px-5 py-4 md:hidden"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-[8px] px-2 py-3 font-mono text-sm font-bold uppercase tracking-wide text-ink/80 hover:bg-paper-dim hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <Button as="a" href="#about" variant="ink" onClick={() => setOpen(false)} className="mt-2 justify-center">
            About this build
          </Button>
        </nav>
      )}
    </header>
  )
}
