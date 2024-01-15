import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Head from "next/head"
import Script from "next/script"

import { Inter } from "next/font/google"
import "@/app/globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function Layout({ children }) {
  const MEASUREMENTID = process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENTID
  return (
    <>
      <Head>
        <title>まきせ鍼灸整骨院</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          name="description"
          content="水戸市で「慢性のしびれ・痛み」といえば、まきせにお任せ下さい。もし、医師もお手上げのしびれ・痛みをたった数回で改善できて再発しないとしたら？ずっと改善されず、もう諦めているなら一度だけわたしを信じてみて下さい"
        />
        <link rel="icon" href="/images/favicon.ico" />
        {/*<!-- Google tag (gtag.js) -->*/}
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
      {children}
      <Footer />
    </>
  )
}
