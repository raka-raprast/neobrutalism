import studioDeskImage from "@/assets/studio/studio-desk.webp"
import { stats } from "@/data/content"

export function StudioStats() {
  return (
    <section id="studio" className="bg-electric py-20 text-white sm:py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <p className="max-w-xl font-display text-3xl font-extrabold leading-snug sm:text-4xl">
            No stock photography, no fake client logos, no invented testimonials. Every image on this page
            was generated and art-directed for this build; every anti-pattern below was actually caught by
            a detector and fixed.
          </p>

          <div className="overflow-hidden rounded-card border-[3px] border-line shadow-brutal-lg lg:-rotate-1">
            <img
              src={studioDeskImage}
              alt="Illustrated desk with a pencil, color-swatch fan, ruler and a small plant"
              loading="lazy"
              width="1200"
              height="800"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <span aria-hidden="true" className="mb-3 block h-3 w-3 bg-acid" />
              <dt className="font-mono text-xs font-bold uppercase tracking-wide text-white/70">{stat.label}</dt>
              <dd className="mt-1 font-display text-5xl font-extrabold sm:text-6xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
