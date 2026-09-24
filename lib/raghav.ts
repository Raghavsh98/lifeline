import { defineLifeline } from "@/lib/lifeline-data"

/** The year the rail starts — ages stay measured from `birthYear`. */
const START_YEAR = 2016

/**
 * Raghav Sharma's timeline — from engineering to product design.
 */
const record = defineLifeline({
  slug: "raghav",
  name: "Raghav Sharma",
  birthYear: 1998,
  endYear: 2026,
  description:
    "The life and career of Raghav Sharma — from engineering to product design.",
  milestones: {
    2016: {
      id: "engineering",
      events: ["Started Engineering."],
    },
    2018: {
      id: "orangewood",
      companies: [{ id: "orangewood", name: "Orangewood Labs" }],
      events: [
        [
          { type: "text", value: "Design Intern at " },
          {
            type: "link",
            value: "Orangewood Labs",
            href: "https://www.orangewood.co",
          },
          { type: "text", value: " (YC W18)." },
        ],
        "Designed brand, product, and some furniture.",
      ],
    },
    2020: {
      id: "zs",
      companies: [{ id: "zs", name: "ZS" }],
      events: [
        [
          { type: "text", value: "Joined " },
          { type: "link", value: "ZS", href: "https://www.zs.com" },
          { type: "text", value: " in Tech Consulting." },
        ],
        "Later pivoted into UX.",
      ],
    },
    2022: {
      id: "civic",
      events: ["Civic service design for the Delhi Government, logo included."],
    },
    2023: {
      id: "uw",
      companies: [{ id: "uw", name: "University of Washington" }],
      events: [
        [
          { type: "text", value: "Started a Master's in Human Centered Design at " },
          { type: "link", value: "UW", href: "https://www.hcde.washington.edu" },
          { type: "text", value: "." },
        ],
        "Moved to Seattle.",
      ],
    },
    2024: {
      id: "intuit",
      companies: [{ id: "intuit", name: "Intuit" }],
      events: [
        [
          { type: "text", value: "Product Designer at " },
          { type: "link", value: "Intuit", href: "https://quickbooks.intuit.com" },
          { type: "text", value: " on QuickBooks." },
        ],
      ],
    },
    2025: {
      id: "birla-truu",
      companies: [
        { id: "birla", name: "Birla AI Labs" },
        { id: "truu", name: "TruU" },
      ],
      events: [
        "Product Designer at Birla AI Labs.",
        [
          { type: "text", value: "Joined " },
          { type: "link", value: "TruU", href: "https://truu.ai" },
          { type: "text", value: " as Solo Product Designer." },
        ],
        "Moved to San Francisco.",
      ],
    },
    2026: {
      id: "today",
      events: [
        {
          text: "Still designing, still tinkering.",
          effect: "fireworks",
        },
      ],
    },
  },
})

export const raghavLifeline = {
  ...record,
  markers: record.markers.filter((marker) => marker.year >= START_YEAR),
}
