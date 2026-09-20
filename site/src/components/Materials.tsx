const materials = [
  { name: "Hard shadows", note: "Offset depth. No soft blur." },
  { name: "Halftone print", note: "Texture where flat color needs grain." },
  { name: "Flat color blocking", note: "One accent establishes reading order." },
  { name: "Variable type", note: "Weight and width supply emphasis." },
  { name: "Sticker collage", note: "Loose tags break the rectangle, not the content." },
  { name: "Scroll choreography", note: "Motion follows the reading path, then clears." },
]

export function Materials() {
  return (
    <section aria-labelledby="materials-title" className="bg-paper py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <header className="flex flex-col gap-8 border-y-[3px] border-line py-8 sm:flex-row sm:items-end sm:justify-between sm:gap-12 sm:py-10">
          <h2
            id="materials-title"
            className="font-display text-[clamp(3.75rem,6.5vw,6.5rem)] font-extrabold uppercase leading-[0.82]"
          >
            Material <span className="inline bg-acid px-2 text-ink">index.</span>
          </h2>
          <p className="max-w-[34ch] text-lg leading-snug text-ink/75">
            Six building blocks recur across this study. Keep the rules small; let the results vary.
          </p>
        </header>

        <dl className="grid border-t-[3px] border-line sm:grid-cols-2 lg:grid-cols-3">
          {materials.map((material, index) => {
            const tabletColumn = index % 2 === 1 ? "sm:border-l-[3px] sm:pl-8" : ""
            const desktopColumn =
              index % 3 === 0 ? "lg:border-l-0 lg:pl-0" : "lg:border-l-[3px] lg:pl-8"

            return (
              <div
                key={material.name}
                className={`flex min-h-36 flex-col justify-between gap-8 border-b-[3px] border-line py-6 sm:py-7 ${tabletColumn} ${desktopColumn}`}
              >
                <dt className="font-display text-2xl font-extrabold uppercase leading-none sm:text-3xl">{material.name}</dt>
                <dd className="max-w-[30ch] text-base leading-snug text-ink/70">{material.note}</dd>
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}
