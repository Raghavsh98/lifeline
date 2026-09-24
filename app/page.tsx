import { Lifeline } from "@/components/lifeline"
import {
  LifelineFooter,
  LifelineNav,
  LifelineShell,
  LifelineStage,
} from "@/components/lifeline-shell"
import { CompanyLogos } from "@/components/company-logos"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { raghavLifeline } from "@/lib/raghav"

const LINK_CLASS =
  "text-sm text-zinc-500 transition-colors duration-300 hover:text-black dark:hover:text-white"

export default function Home() {
  return (
    <LifelineShell>
      {/* The nav's capped inner container is what the rail aligns its
          start and end to. */}
      <LifelineNav
        logo={
          <span className="text-sm font-medium tracking-tight">
            Raghav Sharma
          </span>
        }
        logoLabel="Raghav Sharma — Lifeline"
      >
        <a
          href="https://x.com/raghavpink"
          target="_blank"
          rel="noopener noreferrer"
          className={LINK_CLASS}
        >
          X
        </a>
      </LifelineNav>

      <CompanyLogos />

      <LifelineStage>
        <Lifeline
          markers={raghavLifeline.markers}
          birthYear={raghavLifeline.birthYear}
          title={raghavLifeline.name}
          className="h-full"
        />
      </LifelineStage>

      <LifelineFooter>
        <ThemeSwitcher />
      </LifelineFooter>
    </LifelineShell>
  )
}
