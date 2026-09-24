import type { Metadata } from "next"
import type { ReactNode } from "react"
import { SiteNav } from "@/components/site-nav"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Agenda — Raghav <> Dylan",
  description: "Raghav <> Dylan, for Arcads.",
  robots: { index: false, follow: false },
}

// Same type and color as the Timeline: Geist, 15px names, 14px zinc-500
// body, 11px uppercase labels, underlined links that darken on hover.
const NAME = "text-[15px] font-medium leading-[1.55] text-black dark:text-white"
const BODY =
  "text-[14px] leading-[1.55] tracking-[-0.01em] text-zinc-500 dark:text-zinc-400"
const LABEL =
  "text-[11px] font-medium uppercase leading-4 tracking-[0.08em] text-zinc-500 dark:text-zinc-600"

type Line = { text: string; href?: string; indent?: Line[] }

interface Job {
  company: string
  role: ReactNode
  meta?: string
  lines: Line[]
  /** Gap between the lines — tight for a list, looser for separate items. */
  spread?: boolean
}

const TRUU_DECK = "https://www.figma.com/slides/WlcJDT1EQhdcj65GiAZoea"
const BIRLA = "https://www.raghavsharma.work/work/birla-ai-labs-curiosity"

const PAST_WORK: Job[] = [
  {
    company: "TruU AI",
    role: "Product Designer",
    meta: "Santa Clara, CA",
    lines: [
      { text: "Overview Deck", href: TRUU_DECK },
      {
        text: "“Boiling the Ocean”",
        indent: [
          { text: "Exhibit A", href: "https://idv-policy-simulator.vercel.app/" },
          {
            text: "Exhibit B",
            href: "https://truu-onboarding-simulator.vercel.app/",
          },
        ],
      },
    ],
  },
  {
    company: "Birla AI Labs",
    role: "Designer",
    spread: true,
    lines: [
      { text: "Overview", href: BIRLA },
      { text: "Prototype", href: BIRLA },
    ],
  },
  {
    company: "Intuit",
    role: "Product Designer",
    lines: [{ text: "Overview", href: TRUU_DECK }],
  },
  {
    company: "ZS Associates",
    role: (
      <>
        Associate Consultant
        <br />→ UX Designer
      </>
    ),
    lines: [{ text: "-" }],
  },
  {
    company: "Sides",
    role: "Side projects",
    spread: true,
    lines: [
      { text: "Snackgood", href: "https://snackgood.app/" },
      { text: "Design Grasslands", href: "https://designgrasslands.vercel.app/" },
    ],
  },
]

const ON_ARCADS = ["Impressions", "Questions"]
const ON_THE_ROLE = ["Questions"]

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <h2
      className={cn(
        LABEL,
        "flex h-[23px] w-[104px] shrink-0 items-center whitespace-nowrap",
      )}
    >
      {children}
    </h2>
  )
}

function LineText({ line }: { line: Line }) {
  const className = BODY
  if (!line.href) return <p className={className}>{line.text}</p>
  return (
    <a
      href={line.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        className,
        "w-fit underline decoration-zinc-400 underline-offset-2 transition-colors duration-300 hover:text-black hover:decoration-zinc-600 dark:decoration-zinc-700 dark:hover:text-white dark:hover:decoration-zinc-400",
      )}
    >
      {line.text}
    </a>
  )
}

function JobRow({ job }: { job: Job }) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-8",
      )}
    >
      <div className="flex shrink-0 flex-col items-start sm:w-[176px]">
        <h3 className={NAME}>
          {job.company}
        </h3>
        <p className={BODY}>{job.role}</p>
        {job.meta && (
          <p className={cn(BODY, "text-zinc-400 dark:text-zinc-600")}>{job.meta}</p>
        )}
      </div>

      <div
        className={cn(
          "flex min-w-0 flex-1 flex-col items-start sm:pt-px",
          job.spread ? "gap-2" : "gap-1",
        )}
      >
        {job.lines.map((line) => (
          <div key={line.text} className="contents">
            <LineText line={line} />
            {line.indent && (
              <div className="flex flex-col items-start gap-1 pl-5">
                {line.indent.map((sub) => (
                  <LineText key={sub.text} line={sub} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function AgendaItems({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item) => (
        <li key={item} className={BODY}>
          {item}
        </li>
      ))}
    </ul>
  )
}

function Section({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-5">
      <SectionLabel>{label}</SectionLabel>
      <div className="min-w-0 flex-1">{children}</div>
    </section>
  )
}

export default function AgendaPage() {
  return (
    <div className="min-h-dvh bg-white antialiased transition-colors duration-300 dark:bg-black">
      <SiteNav title="Raghav <> Dylan for Arcads" current="/agenda" />

      {/* Same container as the nav, so the agenda lines up under its title. */}
      <main
        className="mx-auto w-full max-w-5xl px-6 pb-20 pt-26"
      >
        <div className="flex max-w-[620px] flex-col gap-14">
          <Section label="Past work">
            <div className="flex flex-col gap-8 sm:gap-10">
              {PAST_WORK.map((job) => (
                <JobRow key={job.company} job={job} />
              ))}
            </div>
          </Section>

          <Section label="On Arcads">
            <AgendaItems items={ON_ARCADS} />
          </Section>

          <Section label="On the role">
            <AgendaItems items={ON_THE_ROLE} />
          </Section>
        </div>

      </main>
    </div>
  )
}
