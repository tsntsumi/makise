"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import Join from "../Join"

const Hero = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <section className="overflow-hidden py-8 xl:pb-25">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="md:w-1/2 md:mx-auto">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                Googleビジネスプロフィールを一緒に勉強しよう
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                検索上位表示でみんなが
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                  集まるお店に
                </span>
              </h1>
              <p className="text-justify">
                これをしておかないと信頼度が下がってしまう「ビジネス情報設定ガイド」
                <span className="text-[0.6rem]">（非売品）</span>{" "}
                を一緒に読みながら、お勉強しましょう。参加者には無料でPDFを差し上げます。
              </p>

              <div className="md:hidden w-full mt-4">
                <Image
                  className="h-40 w-52 mx-auto rounded shadow-solid-l dark:hidden object-cover"
                  src="/images/hero/gbp-setup-guide-light.png"
                  alt="GBPビジネス情報設定ガイド"
                  width={640}
                  height={400}
                />
                <Image
                  className="hidden h-40 w-52 mx-auto rounded shadow-solid-l dark:block bg-slate-200 object-cover"
                  src="/images/hero/gbp-setup-guide-dark.png"
                  alt="GBPビジネス情報設定ガイド"
                  width={640}
                  height={400}
                />
              </div>

              <p className="my-4 text-center">
                LINEでお友だちになって参加表明してください。
              </p>

              <div className="flex flex-wrap gap-5">
                <Join>一緒に勉強する</Join>
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 md:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className=" relative aspect-[700/444] w-full">
                  <Image
                    className="shadow-solid-l dark:hidden"
                    src="/images/hero/gbp-setup-guide-light.png"
                    alt="GBPビジネス情報設定ガイド"
                    fill
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block bg-slate-200"
                    src="/images/hero/gbp-setup-guide-dark.png"
                    alt="GBPビジネス情報設定ガイド"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
