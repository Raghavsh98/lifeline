"use client"

/**
 * Raghav's organization marks in their brand colors, registered into the
 * shipped CompanyIcon.
 */
import { registerCompanyIcons } from "@/components/lifeline/company-icon"
import { cn } from "@/lib/utils"

/** A raster logo, with an optional variant for the dark theme. */
function imageIcon(src: string, darkSrc?: string) {
  return function ImageIcon({ className }: { className?: string }) {
    const img = "h-full w-full object-contain"
    return (
      <span aria-hidden="true" className={cn("relative block", className)}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt="" className={cn(img, darkSrc && "dark:hidden")} />
        {darkSrc && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={darkSrc} alt="" className={cn(img, "hidden dark:block")} />
        )}
      </span>
    )
  }
}

function ZsIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 72 57"
      fill="none"
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M38.873 38.0409V35.6086L50.8638 16.2864H39.344V13.9883H53.7588V16.151L41.6684 35.7446H53.7588V38.0415H38.873V38.0409Z" fill="#898A8D" />
      <path d="M71.9181 32.9415C71.4075 36.3114 68.2786 38.429 63.8956 38.429C60.2879 38.429 57.9269 37.5161 55.668 35.2498L57.4217 33.4909C59.4107 35.4863 61.2653 36.1296 63.9616 36.1296C66.658 36.1296 68.6793 35.0176 69.2517 33.0961C69.3267 32.8398 69.3717 32.5762 69.3855 32.3096C69.4305 31.6675 69.3351 31.0236 69.1053 30.4225C68.9307 29.9338 68.3818 29.2827 67.9582 28.9933C67.024 28.3072 65.6878 27.7295 64.315 27.2614L61.6349 26.3407C59.8289 25.7112 58.4789 24.8483 57.6023 23.7717C56.5698 22.5044 56.2194 20.6576 56.5224 18.7957C56.5224 18.7831 56.544 18.6681 56.544 18.6681C57.2945 15.4788 59.9075 13.6055 64.0138 13.6055C67.0822 13.6055 68.7837 14.531 70.8405 16.3911L69.1881 18.0483C67.705 16.6955 66.442 15.8374 63.9124 15.8374C60.9233 15.8374 59.2715 17.4267 58.9445 19.5527C58.8191 20.7304 59.1359 21.6084 59.7437 22.3552C60.3623 23.1176 61.4459 23.7308 62.6393 24.1484L65.1592 25.0066C66.9886 25.621 68.9991 26.588 70.1193 27.5942C70.1193 27.5942 72.4539 29.4097 71.9193 32.9391" fill="#898A8D" />
      <path d="M32.8492 38.0409V13.9883L27.8945 18.9571V43.0097L32.8492 38.0409Z" fill="#C1C5C8" />
      <path d="M4.95472 38.0409V13.9883L0 18.9571V43.0097L4.95472 38.0409Z" fill="#97A3AE" />
      <path d="M6.97461 50.0049L11.9293 45.0362V31.0469L6.97461 36.0163V50.0049Z" fill="#EC7700" />
      <path d="M11.9293 6.99609L6.97461 11.9655V25.9542L11.9293 20.9854V6.99609Z" fill="#97A3AE" />
      <path d="M6.97461 25.9532V36.0171L11.9293 31.0477V20.9844L6.97461 25.9532Z" fill="#96460A" />
      <path d="M13.9473 43.0118V57.001L18.9014 52.0317V38.043L13.9473 43.0118Z" fill="#C1C5C8" />
      <path d="M13.9473 29.0202V32.9455L18.9014 27.9761V24.0508L13.9473 29.0202Z" fill="#EC7700" />
      <path d="M18.9014 0L13.9473 4.96939V18.9581L18.9014 13.9893V0Z" fill="#97A3AE" />
      <path d="M13.9473 43.0093L18.9014 38.0405V27.9766L13.9473 32.946V43.0093Z" fill="#C1531B" />
      <path d="M18.9014 24.0516V13.9883L13.9473 18.9571V29.021L18.9014 24.0516Z" fill="#96460A" />
      <path d="M25.876 31.0469L20.9219 36.0163V50.0056L25.876 45.0362V31.0469Z" fill="#C1C5C8" />
      <path d="M25.876 20.9854V6.99609L20.9219 11.9655V25.9542L25.876 20.9854Z" fill="#EC7700" />
      <path d="M25.876 20.9844L20.9219 25.9532V36.0171L25.876 31.0477V20.9844Z" fill="#C1531B" />
    </svg>
  )
}

function UwIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 41.65 28.14"
      fill="#4B2E83"
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points="30.6 0 30.6 5.15 34.26 5.15 30.28 20.11 25.35 0 20.27 0 14.86 20.27 10.97 5.15 14.94 5.15 14.94 0 0 0 0 5.15 3.26 5.15 8.98 28.14 17.01 28.14 20.82 13.75 24.48 28.14 32.51 28.14 38.55 5.15 41.65 5.15 41.65 0 30.6 0" />
    </svg>
  )
}

function IntuitIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 9.5 24 5"
      fill="#236CFF"
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.32 12.38c0 1.174.974 2.033 2.211 2.033 1.237 0 2.212-.859 2.212-2.033v-2.7h-1.198v2.56c0 .633-.44 1.06-1.017 1.06s-1.017-.424-1.017-1.06V9.68h-1.198l.008 2.699zm7.624-1.619h1.429v3.563h1.198V10.76H24V9.68h-4.056v1.082zM19.17 9.68h-1.198v4.645h1.198V9.679zM7.482 10.761h1.43v3.563h1.197V10.76h1.428V9.68H7.482v1.082zM1.198 9.68H0v4.645h1.198V9.679zm5.653 1.94c0-1.174-.974-2.032-2.212-2.032-1.238 0-2.212.858-2.212 2.032v2.705h1.198v-2.56c0-.633.44-1.06 1.017-1.06s1.018.425 1.018 1.06v2.56h1.197L6.85 11.62h.001z" />
    </svg>
  )
}

function TruuIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 161 161"
      fill="none"
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="161" height="161" rx="38" className="fill-black dark:fill-white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M91.7516 131.911L115.829 92.3343L140 52.6685L91.7516 79.1421V131.911ZM129.748 36L81.5 62.3844L33.2516 36H129.748ZM23 52.7577L47.1712 92.4234L71.2484 132V79.2312L23 52.7577Z"
        className="fill-white dark:fill-black"
      />
    </svg>
  )
}

registerCompanyIcons({
  orangewood: {
    icon: imageIcon("/logos/orangewood.png", "/logos/orangewood-dark.png"),
    sizeClassName: "h-3 w-[4.5rem]",
  },
  zs: { icon: ZsIcon, sizeClassName: "h-5 w-[1.6rem]" },
  uw: { icon: UwIcon, sizeClassName: "h-3 w-[1.125rem]" },
  intuit: { icon: IntuitIcon, sizeClassName: "h-2.5 w-12" },
  birla: {
    icon: imageIcon("/logos/birla-ai-labs.png"),
    sizeClassName: "h-3.5 w-[1.4rem]",
  },
  truu: { icon: TruuIcon, sizeClassName: "h-4 w-4" },
})

/** Render once anywhere in the tree so the registrations ship with the client bundle. */
export function CompanyLogos() {
  return null
}
