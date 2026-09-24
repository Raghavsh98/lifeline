import type { Metadata } from "next"
import type { ReactNode } from "react"
import { Bitcount_Grid_Single, Inter } from "next/font/google"
import { PageTabs } from "@/components/page-tabs"
import { cn } from "@/lib/utils"

const bitcount = Bitcount_Grid_Single({
  subsets: ["latin"],
  weight: "400",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Agenda — Raghav <> Dylan",
  description: "Raghav <> Dylan, for Arcads.",
  robots: { index: false, follow: false },
}

/** PP Neue Montreal is licensed; Inter stands in where it isn't installed. */
const MONTREAL =
  "'PP Neue Montreal', 'Neue Montreal', var(--font-inter), sans-serif"

// Type follows the Lifeline scale: 15px names, 14px body, 11px labels.
const INK = "text-[#1A1A1A] dark:text-zinc-100"
const MUTED = "text-zinc-500"
const BODY = "text-[14px] leading-[1.55] tracking-[-0.01em]"

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
        bitcount.className,
        MUTED,
        "flex h-[23px] w-[104px] shrink-0 items-center whitespace-nowrap text-[11px] uppercase leading-4 tracking-[0.08em]",
      )}
    >
      {children}
    </h2>
  )
}

function LineText({ line }: { line: Line }) {
  const className = BODY
  if (!line.href) return <p className={cn(INK, className)}>{line.text}</p>
  return (
    <a
      href={line.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        className,
        "w-fit text-zinc-400 underline decoration-zinc-300 underline-offset-2 transition-colors duration-200 hover:text-[#1A1A1A] hover:decoration-[#1A1A1A] dark:text-zinc-500 dark:decoration-zinc-700 dark:hover:text-zinc-100 dark:hover:decoration-zinc-100",
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
        <h3 className={cn(INK, "text-[15px] font-semibold leading-[1.55]")}>
          {job.company}
        </h3>
        <p className={cn(INK, BODY)}>{job.role}</p>
        {job.meta && <p className={cn(MUTED, BODY)}>{job.meta}</p>}
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
        <li
          key={item}
          className={cn(INK, BODY)}
        >
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
    <div
      className={cn(
        inter.variable,
        "min-h-dvh bg-white antialiased transition-colors duration-300 dark:bg-black",
      )}
      style={{ fontFamily: MONTREAL }}
    >
      {/* On wide screens the frame starts where the Figma layout puts it,
          567px left of center; narrower, it centers. */}
      <main className="mx-auto w-full max-w-[740px] px-4 pb-20 pt-8 sm:px-20 sm:pt-16 min-[1134px]:ml-[calc(50%-567px)]">
        <PageTabs current="/agenda" />

        <header className="mt-12 flex items-start justify-between gap-6">
          <h1
            className={cn(
              INK,
              "text-[20px] font-semibold capitalize leading-[1.25] tracking-[-0.01em]",
            )}
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Raghav &lt;&gt; Dylan,
            <br />
            for Arcads
          </h1>
          <p className={cn(MUTED, "shrink-0 pt-1 text-[13px] leading-4 tabular-nums")}>
            Sep 24. 2026
          </p>
        </header>

        <div className="mt-12 flex flex-col gap-14">
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
