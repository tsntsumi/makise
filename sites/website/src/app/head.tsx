import Script from "next/script"

export default function Head() {
  return (
    <>
      <title>まきせ鍼灸整骨院</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="description"
        content="水戸市で「慢性のしびれ・痛み」といえば、まきせにお任せ下さい。もし、医師もお手上げのしびれ・痛みをたった数回で改善できて再発しないとしたら？ずっと改善されず、もう諦めているなら一度だけわたしを信じてみて下さい"
      />
      <link rel="icon" href="/images/favicon.ico" />
      {/*<!-- Google tag (gtag.js) -->*/}
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
    </>
  )
}
