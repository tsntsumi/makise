import { Suspense } from "react"
import Head from "next/head"
import Script from "next/script"
import { Inter } from "next/font/google"
import GoogleTag from "@/lib/googleTag"
import Lines from "@/components/Lines"
import ToasterContext from "@/app/context/ToastContext"
import ScrollToTop from "@/components/ScrollToTop"
import { Metadata } from "next"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "まきせ鍼灸整骨院",
    template: "%s | まきせ鍼灸整骨院"
  },
  authors: [{ name: "TSUTSUMI Kikuo", url: "https://www.alizza-ideal.com" }],
  creator: "TSUTSUMI Kikuo",
  publisher: "Alizza Ideal",
  description: `慢性のしびれ・痛みで毎日が辛い・・・、
そんな医師もお手上げのしびれ・痛みをたった数回で改善できて再発しないとしたら？
ずっと改善されず、もう諦めているなら一度だけわたしを信じて詳細を確認してください。
`
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <Script src="https://polyfill.io/v3/polyfill.min.js?features=default"></Script>
      <Suspense fallback={<div></div>}>
        <GoogleTag />
      </Suspense>
      <body className={`dark:bg-black ${inter.className}`}>
        <Lines />
        {children}
        <ToasterContext />
        <ScrollToTop />
      </body>
    </html>
  )
}
