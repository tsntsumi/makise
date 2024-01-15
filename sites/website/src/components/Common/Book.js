import Link from "next/link"
import Image from "next/image"
import { gtag_report_conversion } from "@/lib/googleTag"
import { gtag_report_phonebooking } from "@/lib/googleTag"

export const BookWithLineTalk = () => {
  return (
    <Link href="https://lin.ee/LuKG3mc">
      <button
        aria-label="Book via LINE Talk"
        className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
        onClick={() => gtag_report_conversion("https://lin.ee/LuKG3mc")}
      >
        <span className="duration-300 group-hover/btn:pr-2 text-sm underline">
          LINE (@712yzusq) で予約する
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </Link>
  )
}

export const BookWithLineTalkExt = () => {
  return (
    <Link href="https://lin.ee/LuKG3mc">
      <button
        aria-label="Book via LINE Talk"
        className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
        onClick={() => gtag_report_conversion("https://lin.ee/LuKG3mc")}
      >
        <span className="whitespace-nowrap duration-300 group-hover/btn:pr-2 text-xs underline">
          @712yzusq
          <Image
            src="/images/icon/ext-link.svg"
            width="9"
            height="9"
            alt="external link"
            className="inline-block"
          />
        </span>
      </button>
    </Link>
  )
}

export const BookWithPhoneCall = () => {
  return (
    <Link href="tel:0292240076">
      <button
        aria-label="Get the Plan button"
        className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
        onClick={() => gtag_report_phonebooking("tel:0292240076")}
      >
        <span className="duration-300 group-hover/btn:pr-2 underline">
          電話で予約する
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </Link>
  )
}
