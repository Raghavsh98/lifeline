import type { Metadata } from "next"
import type { ReactNode } from "react"
import { Bitcount_Grid_Single, Inter } from "next/font/google"
import Link from "next/link"
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

const INK = "text-[#1A1A1A] dark:text-zinc-100"
const MUTED = "text-[#757575] dark:text-zinc-500"

type Line = { text: string; href?: string; indent?: Line[] }

interface Job {
  company: string
  role: ReactNode
  meta?: string
  lines: Line[]
  /** Gap between the lines — 6px for a list, 10px for separate items. */
  spread?: boolean
  /** ZS's two-line role wants a wider name column. */
  wide?: boolean
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
    wide: true,
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
        INK,
        "flex h-[13px] w-[65px] shrink-0 items-center whitespace-nowrap text-[9.5px] uppercase leading-[13px] tracking-[0.02em]",
      )}
    >
      {children}
    </h2>
  )
}

function LineText({ line }: { line: Line }) {
  const className = "text-[9.5px] leading-[12px] tracking-[0.01em]"
  if (!line.href) return <p className={cn(INK, className)}>{line.text}</p>
  return (
    <a
      href={line.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        className,
        "w-fit text-[#9A9A9A] underline decoration-[#D4D4D4] underline-offset-2 transition-colors duration-200 hover:text-[#1A1A1A] hover:decoration-[#1A1A1A] dark:text-zinc-500 dark:decoration-zinc-700 dark:hover:text-zinc-100 dark:hover:decoration-zinc-100",
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
        "flex flex-col gap-3 sm:flex-row sm:items-start",
        job.wide ? "sm:gap-8" : "sm:gap-10",
      )}
    >
      <div
        className={cn(
          "flex shrink-0 flex-col items-start",
          job.wide ? "sm:w-[169px]" : "sm:w-[95px]",
        )}
      >
        <h3 className={cn(INK, "text-[10px] font-bold leading-[12px]")}>
          {job.company}
        </h3>
        <p className={cn(INK, "text-[9.5px] leading-[14px] tracking-[0.02em]")}>
          {job.role}
        </p>
        {job.meta && (
          <p className={cn(MUTED, "text-[9.5px] leading-[14px] tracking-[0.02em]")}>
            {job.meta}
          </p>
        )}
      </div>

      <div
        className={cn(
          "flex min-w-0 flex-1 flex-col items-start",
          job.spread ? "gap-2.5" : "gap-1.5",
        )}
      >
        {job.lines.map((line) => (
          <div key={line.text} className="contents">
            <LineText line={line} />
            {line.indent && (
              <div className="flex flex-col items-start gap-1.5 pl-5">
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
    <ul className="flex flex-col gap-4">
      {items.map((item) => (
        <li
          key={item}
          className={cn(INK, "text-[10px] leading-[14px] tracking-[0.02em]")}
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

function Section({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
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
      {/* The 567px Figma frame with 80px side padding. On wide screens it
          sits in the left half, its right edge on the center line, as in
          the Figma layout; narrower, it centers. */}
      <main className="mx-auto w-full max-w-[567px] px-4 pb-20 pt-10 sm:px-20 sm:pt-[max(2.5rem,calc(50dvh-398px))] min-[1134px]:ml-[calc(50%-567px)]">
        <header className="flex items-start justify-between gap-6">
          <h1
            className={cn(
              INK,
              "max-w-[182px] text-[14px] font-bold capitalize leading-[17px]",
            )}
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Raghav &lt;&gt; Dylan,
            <br />
            for Arcads
          </h1>
          <p
            className={cn(
              INK,
              "shrink-0 sm:mr-[-11px] text-[9px] leading-[11px] tracking-[0.02em]",
            )}
          >
            Sep 24. 2026
          </p>
        </header>

        <div className="mt-[61px] flex flex-col gap-20">
          <Section label="Past work">
            <div className="flex flex-col gap-14 sm:gap-20">
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

        <Link
          href="/"
          className={cn(
            MUTED,
            "mt-20 inline-block text-[9.5px] leading-[14px] tracking-[0.02em] transition-colors duration-200 hover:text-[#1A1A1A] dark:hover:text-zinc-100",
          )}
        >
          ← Lifeline
        </Link>
      </main>
    </div>
  )
}
