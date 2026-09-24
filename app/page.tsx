import { Lifeline } from "@/components/lifeline"
import {
  LifelineFooter,
  LifelineShell,
  LifelineStage,
} from "@/components/lifeline-shell"
import { CompanyLogos } from "@/components/company-logos"
import { SiteNav } from "@/components/site-nav"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { raghavLifeline } from "@/lib/raghav"

export default function Home() {
  return (
    <LifelineShell>
      {/* The nav's capped inner container is what the rail aligns its
          start and end to. */}
      <SiteNav title="Raghav Sharma" current="/" />

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
