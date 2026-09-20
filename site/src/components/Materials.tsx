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
    <section aria-labelledby="materials-title" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 sm:grid-cols-[minmax(0,0.87fr)_minmax(0,1.13fr)] sm:gap-16 sm:px-8">
        <div className="self-start">
          <h2 id="materials-title" className="font-display text-[clamp(3.25rem,7vw,7.5rem)] font-extrabold uppercase leading-[0.82]">
            The system,
            <br />
            <span className="inline bg-acid px-2 text-ink">unpacked.</span>
          </h2>
          <p className="mt-8 max-w-[34ch] text-lg leading-snug text-ink/75">
            Six building blocks recur across this study. Keep the rules small; let the results vary.
          </p>
        </div>

        <dl className="border-y-[3px] border-line">
          {materials.map((material) => (
            <div
              key={material.name}
              className="grid gap-2 border-b-[3px] border-line py-5 last:border-b-0 sm:grid-cols-[minmax(0,1fr)_minmax(0,0.86fr)] sm:items-baseline sm:gap-8"
            >
              <dt className="font-display text-2xl font-extrabold uppercase leading-none sm:text-3xl">{material.name}</dt>
              <dd className="max-w-[30ch] text-base leading-snug text-ink/70">{material.note}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
