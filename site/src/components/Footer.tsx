import { ArrowUp, ArrowUpRight } from "@phosphor-icons/react"
import { footerLinks } from "@/data/content"

export function Footer() {
  return (
    <footer className="bg-paper py-14">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-col gap-10 border-b-[3px] border-line pb-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <a href="#top" className="flex items-center gap-2.5 font-display text-2xl font-extrabold tracking-tight">
              <span aria-hidden="true" className="grid h-9 w-9 -rotate-3 place-items-center rounded-[8px] border-[3px] border-line bg-acid text-sm font-black">
                S
              </span>
              SLAB
            </a>
            <p className="mt-4 max-w-[32ch] text-sm text-ink/70">
              A neobrutalism design study. Built as a proof of concept, not a real studio.
            </p>
          </div>

          <nav aria-label="Footer sitemap" className="flex flex-wrap gap-x-8 gap-y-2">
            {footerLinks.sitemap.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-mono text-sm font-bold uppercase tracking-wide text-ink/80 hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-wide text-ink/50">References</p>
            <ul className="mt-3 flex flex-col gap-2">
              {footerLinks.references.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-sm font-bold text-ink/80 hover:text-ink"
                  >
                    {item.label}
                    <ArrowUpRight size={12} weight="bold" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col-reverse items-center gap-6 sm:flex-row sm:justify-between">
          <p className="font-mono text-xs text-ink/50">SLAB &middot; a neobrutalism proof of concept, 2026.</p>
          <a
            href="#top"
            className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-pill border-[3px] border-line bg-white px-4 font-mono text-xs font-bold uppercase tracking-wide shadow-brutal-sm transition-[transform,box-shadow] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-brutal-sm active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            Back to top
            <ArrowUp size={14} weight="bold" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
