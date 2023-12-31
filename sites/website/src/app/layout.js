"use client"
import Head from "next/head"
import Script from "next/script"
import Lines from "@/components/Lines"
import ScrollToTop from "@/components/ScrollToTop"
import { ThemeProvider } from "next-themes"
import { analytics } from "@/lib/firebase/app"

import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

import ToasterContext from "@/app/context/ToastContext"

export default function RootLayout({ children }) {
  const MEASUREMENTID = process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENTID
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
      {/*<!-- Google tag (gtag.js) -->*/}
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${MEASUREMENTID}`}
      ></Script>
      <Script id="google-tags">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){ dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', "${MEASUREMENTID}");
        `}
      </Script>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-2HW9H0HZ0D"
      ></Script>
      <Script id="google-analytices">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-2HW9H0HZ0D');
        `}
      </Script>
      {/*<!-- Event snippet for 電話で予約 conversion page
            In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button. -->*/}
      <Script id="gtag-report-conversion">
        {`
        function gtag_report_conversion(url) {
          var callback = function () {
            if (typeof(url) != 'undefined') {
              window.location = url;
            }
          };
          gtag('event', 'conversion', {
            'send_to': 'AW-11001150539/8o0pCPjc_fsYEMv44P0o',
            'event_callback': callback
          });
          return false;
        }
        `}
      </Script>
      <Script src="https://polyfill.io/v3/polyfill.min.js?features=default"></Script>
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
