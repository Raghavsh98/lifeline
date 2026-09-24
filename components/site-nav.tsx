import { LifelineNav } from "@/components/lifeline-shell"
import { PageTabs } from "@/components/page-tabs"

/**
 * The header bar shared by the Timeline and the Agenda — only the title
 * on the left changes. On the Timeline it's also what the rail aligns to.
 */
export function SiteNav({
  title,
  current,
}: {
  title: string
  current: "/" | "/agenda"
}) {
  return (
    <LifelineNav
      logo={
        <span className="block max-w-[40vw] truncate text-sm font-medium tracking-tight sm:max-w-none">
          {title}
        </span>
      }
      logoLabel={`${title} — ${current === "/" ? "Timeline" : "Agenda"}`}
      logoHref={current}
    >
      <PageTabs current={current} />
      <a
        href="https://x.com/raghavpink"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-zinc-500 transition-colors duration-300 hover:text-black dark:hover:text-white"
      >
        X
      </a>
    </LifelineNav>
  )
}
