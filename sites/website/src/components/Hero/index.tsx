"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import Join from "@/components/Join"

const Hero = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <section className="overflow-hidden pb-0 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:py-0">
          <div className="flex lg:items-start lg:gap-8 xl:gap-32.5">
            <div className="md:w-2/3 md:mx-auto text-justify">
              <div className="h4 mb-8 text-xs md:text-lg text-center font-medium rounded-full bg-orange-500 px-6 py-1 text-white">
                水戸市で「慢性腰痛」といえば、まきせにお任せください
              </div>
              <div>
                <h1 className="mb-5 text-2xl font-bold text-black dark:text-white xl:text-6xl">
                  もし、医師もお手上げの慢性腰痛を
                  <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                    たった数回で
                  </span>
                  改善できて再発しないとしたら？
                </h1>
                <div className="flex flex-nowrap items-end md:items-start gap-4 ">
                  <div className="w-3/5 md:w-full text-2xl md:text-5xl">
                    <p className="indent-0 mb-6">
                      ずっと改善されず、もう諦めているなら
                    </p>
                    <p className="indent-0">
                      一度だけ、わたしを信じてみて下さい……
                    </p>
                  </div>
                  <div className="w-2/5 bg-white md:hidden">
                    <Image
                      className="shadow-solid-l rounded-xl dark:hidden object-cover"
                      src="/images/hero/hero-image.png"
                      alt="牧瀬院長"
                      unoptimized
                      width={512}
                      height={768}
                    />
                    <Image
                      className="hidden shadow-solid-l rounded-xl dark:block object-cover"
                      src="/images/hero/hero-image.png"
                      alt="牧瀬院長"
                      unoptimized
                      width={512}
                      height={768}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="animate_right hidden md:w-1/3 md:block">
              <div className="relative 2xl:-mr-7.5">
                <div className="relative aspect-[700/444] w-full bg-white rounded-xl">
                  <Image
                    className="shadow-solid-l dark:hidden object-cover"
                    src="/images/hero/hero-image.png"
                    alt="Hero"
                    unoptimized
                    width={700}
                    height={444}
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block object-cover"
                    src="/images/hero/hero-image.png"
                    alt="Hero"
                    unoptimized
                    width={700}
                    height={444}
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
