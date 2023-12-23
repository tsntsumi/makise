"use client"
import Head from "next/head"
import Script from "next/script"
import Footer from "./Footer"
import { ThemeProvider } from "next-themes"

import { Inter } from "next/font/google"
import "@/app/globals.css"

const inter = Inter({ subsets: ["latin"] })

import ToasterContext from "@/app/context/ToastContext"

export default function LandingPageLayout({ children }) {
  return (
    <>
      <Head>
        <title>まきせ鍼灸整骨院</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          name="description"
          content="水戸市で「慢性腰痛」といえば、まきせにお任せ下さい。もし、医師もお手上げの慢性腰痛をたった数回で改善できて再発しないとしたら？ずっと改善されず、もう諦めているなら一度だけわたしを信じて見て下さい"
        />
        <link rel="icon" href="/images/favicon.ico" />
        {/*<!-- Google tag (gtag.js) -->*/}
      </Head>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-9YR4B5G5WV"
      ></Script>
      <Script id="google-tags">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){ dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'G-9YR4B5G5WV');
        `}
      </Script>
      {children}
      <Footer />
    </>
  )
}
