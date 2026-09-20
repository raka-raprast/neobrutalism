/**
 * Full-bleed rule between sections. Deliberately a standalone, childless bar
 * rather than a `border-b` on the section itself: a bordered + colored
 * section wrapping a bordered + rounded card reads as "card inside card" to
 * both human reviewers and automated detectors. A separate divider keeps the
 * hard-edged rhythm without turning every section into a container.
 */
export function SectionDivider() {
  return <div aria-hidden="true" className="h-[3px] bg-ink" />
}
