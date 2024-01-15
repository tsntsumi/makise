"use client"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import SectionHeader from "../Common/SectionHeader"
import { gtag_report_conversion } from "@/lib/googleTag"
import { BookWithLineTalk, BookWithPhoneCall } from "@/components/Common/Book"

const Pricing = () => {
  return (
    <>
      {/* <!-- ===== Pricing Table Start ===== --> */}
      <section
        id="pricing"
        className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30"
      >
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `施術料金`,
                subtitle: (
                  <div className="mx-auto text-center">ふたつのコース料金</div>
                ),
                description: (
                  <>
                    <p>まきせの整体は、通常次のようになっています。</p>
                    <div className="flex justify-center">
                      <dl>
                        <dt className="font-bold">整体コース: </dt>
                        <dd className="ml-8">
                          初回 5,480円、2回目以降 4,480円
                          <br />
                          長く続いている腰など痛みや手足のしびれで、
                          趣味でも生活でも
                          楽しめなくなっているとお悩みの方のための コースです。
                        </dd>
                        <dt className="font-bold">はり整体コース: </dt>
                        <dd className="ml-8">
                          初回 7,480円、 2回目以降 6,480円
                          <br />
                          ずっと腰の痛み、手腕足や指のしびれで悩んでいて、
                          メンタルまで不調になってきたと
                          お悩みの方にぴったりのコースです。
                          <br />
                          自律神経の乱れで体温調整や汗が止まらない方には
                          特におすすめです。
                        </dd>
                      </dl>
                    </div>
                  </>
                )
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

        <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="py-2 mb-6 w-fit mx-auto block rounded-full bg-zumthor px-4.5 dark:border dark:border-strokedark dark:bg-blacksection">
            <span className="text-sectiontitle font-medium text-black dark:text-white">
              なんですが・・・
            </span>
          </div>
          <div className="w-full">
            <h3 className="text-center md:w-3/4 mx-auto">
              <span className="whitespace-nowrap leading-relaxed">
                リニューアルした
              </span>
              <span className="whitespace-nowrap leading-relaxed">
                このホームページを見たあなただけに
              </span>
              <span className="whitespace-nowrap leading-relaxed">
                特別なご提案があります
              </span>
            </h3>
            <div className="flex flex-nowrap items-center gap-4 md:w-2/3 md:mx-auto my-12 text-base">
              <div className="text-right">
                <div className="whitespace-nowrap text-xs md:text-xl">
                  通常初回施術
                </div>
                <div className="font-bold text-xl md:text-2xl">
                  <s>7,480</s>
                  <span className="text-sm">円</span>
                </div>
                <div className="font-bold text-xl md:text-2xl">
                  <s>5,480</s>
                  <span className="text-sm">円</span>
                </div>
                <div className="text-left text-[0.6rem] leading-3 md:text-sm">
                  人気の
                  <span className="whitespace-nowrap">はり整体 コース</span>
                </div>
                <div className="text-left text-[0.6rem] leading-3 md:text-sm">
                  <span className="whitespace-nowrap">整体 コース</span>
                </div>
              </div>
              <div className="whitespace-nowrap text-xs md:text-xl text-center">
                のところ
              </div>
              <div className="col-span-3 flex flex-nowrap justify-end">
                <div className="justify-center text-red-500 font-bold">
                  <div className="text-sm md:text-3xl">
                    <span className="whitespace-nowrap">初回限定の</span>
                    <span className="whitespace-nowrap">特別価格</span>
                  </div>
                  <div className="flex flex-nowrap items-end text-5xl md:text-8xl">
                    5,480<span className="text-sm md:text-2xl">円</span>
                  </div>
                  <div className="flex flex-nowrap items-end text-5xl md:text-8xl">
                    3,980<span className="text-sm md:text-2xl">円</span>
                  </div>
                </div>
                <div className="flex whitespace-nowrap text-center rounded-full bg-red-500 p-2 w-fit aspect-square md:w-32 md:h-32 text-white items-center justify-center text-xs md:text-xl m-0">
                  およそ
                  <br />
                  25% OFF
                </div>
              </div>
            </div>
            <div className="text-xl md:text-4xl font-bold text-white bg-orange-500 w-fit mx-auto p-4">
              各１日２名様限定割引となります
            </div>

            <div className="p-0 my-12 w-full md:w-2/3 md:mx-auto text-justify">
              <div className="text-lg md:text-4xl font-bold border-2 mx-auto p-4">
                初回を3,980円、5,480円にさせていただく理由
              </div>
              <div className="m-0 p-4 border-2 border-t-0">
                <p>
                  ほとんどのお医者さんがやっているのは、
                  症状を取り除くだけの対症療法で、
                  根本から痛みの原因を取り除くことはありません。
                </p>
                <p>
                  多くの人が、身体も腸もガチガチに固めてしまうコルセット、
                  強い痛み止め、すぐにゆがみが戻ってしまうマッサージ、
                  本当に効いているのかわからない湿布など、
                  対症療法に何度も何度も通って、無駄にお金を使うだけでなく、
                  時間も浪費しています。
                </p>
                <p>
                  わたしの施術の良さをどのようにあなたに伝えたらいいかを考えました。
                  そこで、通常7,480円と5,480円のまきせで一番人気の施術のお試し体験会を
                  行うことにしました。
                </p>
                <p>それぞれ１日２名限定となります。</p>
                <p>
                  一人ひとりに責任を持って施術したいため、少人数制となっています。
                </p>
                <p>
                  もし、本気で改善したいのでしたら、すぐに予約のお電話をください。
                  結果を出すことをお約束いたします。
                </p>
              </div>
              <div className="m-0 p-4 border-2 border-t-0">
                <BookWithPhoneCall />
              </div>
              <div className="m-0 p-4 border-2 border-t-0">
                <BookWithLineTalk />
              </div>
            </div>

            <div id="money-back-guarantee" className="mb-40"></div>
            <div className="flex flex-nowrap items-start justify-between w-full md:w-2/3 md:mx-auto">
              <Image
                src="/images/icon/money-back-100.svg"
                alt="100% money back guarantee"
                width={512}
                height={512}
                className="w-1/3"
              />
              <div>
                <h3>初回施術費の全額返金保証</h3>
                <p>
                  初回の施術で効果を実感できなければ、施術費を全額返金します。
                </p>
                <p>
                  ちょっとでも違うと思ったり、効果を実感できなければ、初回の施術が終わった時点でお伝えください。
                </p>
                <p>無条件で全額返金します。（初回のみ）</p>
                <h4>なぜ全額返金保証をするのか？</h4>
                <p>
                  なぜなら、わたしの施術の良さをあなたに試してもらいたいから、
                  安心して施術を受けに来てもらいたいためです。
                </p>
                <p>そして、確実に満足していただける自信があるからです。</p>
              </div>
            </div>
            <div className="m-0 p-4 w-full md:w-2/3 md:mx-auto">
              <BookWithPhoneCall />
            </div>
            <div className="m-0 p-4 w-full md:w-2/3 md:mx-auto">
              <BookWithLineTalk />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Pricing Table End ===== --> */}
    </>
  )
}

export default Pricing
