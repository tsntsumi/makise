import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export default async function Page() {
  return (
    <section
      id="lead-magnet"
      className="overflow-hidden px-4 pb-20 md:px-8 lg:pb-25 xl:pb-30 2xl:px-0"
    >
      <div className="mx-auto max-w-c-1390 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] px-7.5 py-12.5 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark md:px-12.5 xl:px-17.5 xl:py-16">
        <div className="flex flex-wrap gap-8 md:items-center md:justify-between">
          <div className="w-11/12 md:w-5/12 mx-auto">
            <h1 className="mb-4 text-3xl text-justify font-bold text-black dark:text-white xl:text-sectiontitle4">
              まきせのオフィス・ストレッチブックPDF無料プレゼントページ
            </h1>
            <p className="mb-4 text-justify text-black dark:text-white ">
              お仕事中の隙間時間にその場でストレッチして、
              体の歪みを予防し、仕事のパフォーマンスを取り戻して下さい。
            </p>
            <p className="mb-4 text-justify text-black dark:text-white ">
              まきせ鍼灸整骨院のLINE公式アカウント、
              「まきせの健康ライフ」@150vnsuc と
              <a
                data-v-6fa6a74a=""
                href="https://lin.ee/COpvvk1"
                className="p-4"
              >
                <Image
                  data-v-6fa6a74a=""
                  src="/images/icon/line-add-friend-ja.png"
                  width="92"
                  height="32"
                  alt="友だちになる"
                  className="max-h-10 mx-[0.2em] inline-block"
                />
              </a>
              と、 今なら無料電子小冊子のPDFをダウンロードしていただけます。
            </p>
          </div>
          <div className="w-8/12 md:w-5/12 mx-auto pl-12">
            <Image
              width={600}
              height={600}
              src="/images/shape/makise-offer-pdf.png"
              alt="まきせのストレッチブック"
              className="mx-auto object-cover"
            />
          </div>
          <div className="mt-12 mx-auto justify-center">
            <a data-v-6fa6a74a="" href="https://lin.ee/COpvvk1" className="p-4">
              まきせ鍼灸整骨院のLINE公式アカウント「まきせの健康ライフ」@150vnsuc
              はこちらからどうぞ。
            </a>
          </div>
        </div>
        <div className="inline w-fit mx-auto">
          <a data-v-6fa6a74a="" href="https://lin.ee/COpvvk1" className="p-4">
            <Image
              alt="line qr"
              src="/images/shape/S_gainfriends_2dbarcodes_GW.png"
              className="mx-auto w-[180px] min-w-[180px]"
              width={180}
              height={180}
            />
          </a>
          <div className="w-8/12 md:w-5/12 mx-auto items-center justify-center">
            <p>
              スマホでみるのがつらいという方は、まきせ鍼灸整骨院までいらして下さい。
              製本した冊子をお渡しいたします。
            </p>
            <p>
              B6サイズの小さな冊子です。バッグに入れて気になったときにご覧ください。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
