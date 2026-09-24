import Link from "next/link"
import { cn } from "@/lib/utils"

const TABS = [
  { href: "/", label: "Timeline" },
  { href: "/agenda", label: "Agenda" },
] as const

/** Tertiary text buttons that switch between the Timeline and the Agenda. */
export function PageTabs({
  current,
  className,
}: {
  current: (typeof TABS)[number]["href"]
  className?: string
}) {
  return (
    <div className={cn("flex items-center gap-6", className)}>
      {TABS.map((tab) => {
        const active = tab.href === current
        return (
          <Link
            key={tab.href}
            href={tab.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "text-sm transition-colors duration-300",
              active
                ? "text-black dark:text-white"
                : "text-zinc-500 hover:text-black dark:hover:text-white",
            )}
          >
            {tab.label}
          </Link>
        )
      })}
    </div>
  )
}
