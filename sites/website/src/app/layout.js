"use client"
import { Suspense } from "react"
import Head from "next/head"
import Script from "next/script"
import Lines from "@/components/Lines"
import ScrollToTop from "@/components/ScrollToTop"
import { ThemeProvider } from "next-themes"
import GoogleTag from "@/lib/googleTag"

import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

import ToasterContext from "@/app/context/ToastContext"

export default function RootLayout({ children }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <Head>
        <title>まきせ鍼灸整骨院</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          name="description"
          content="水戸市で「慢性のしびれ・痛み」といえば、まきせにお任せ下さい。もし、医師もお手上げのしびれ・痛みをたった数回で改善できて再発しないとしたら？ずっと改善されず、もう諦めているなら一度だけわたしを信じてみて下さい"
        />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Script src="https://polyfill.io/v3/polyfill.min.js?features=default"></Script>
      <GoogleTag />
      <Suspense ballback={<div></div>}></Suspense>
      <body className={`dark:bg-black ${inter.className}`}>
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
          <Lines />
          <ToasterContext />
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
