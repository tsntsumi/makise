"use client"
import Image from "next/image"
import { motion } from "framer-motion"

export default async function Page() {
  return (
    <>
      <section className="my-12 mx-4">
        <h1 className="md:text-6xl text-center">
          あなたの大切な人に感謝と健康を贈りませんか？
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center adjust-between">
          <div className="text-2xl text-center font-serif">
            <div className="text-black my-12 text-2xl md:text-3xl font-bold text-rose-900">
              <p>あなたは、あなたの大切な人に</p>
              <p>どんな風に幸せになってもらいたいですか？</p>
            </div>
            <div className="md:hidden block">
              <div className="grid grid-cols-1 items-center justify-center">
                <Image
                  src="/images/features/makise-massage.jpg"
                  alt="牧瀬院長があなたの大切な人をケアします"
                  width="720"
                  height="480"
                  className="w-full"
                />
                <div>わたしがあなたの大切な人をケアします</div>
              </div>
            </div>
            <div className="text-black my-12 text-2xl md:text-3xl font-bold text-rose-800">
              <p>あなたの願いを込め</p>
              <p className="md:text-[1.4em]">あなたの愛の深さを伝えたいなら</p>
            </div>
            <div className="text-black my-12 text-2xl md:text-3xl font-bold text-rose-600">
              <p>健康で元気な人生を歩んでいってほしいなら</p>
            </div>
            <div className="text-black my-12 text-2xl md:text-3xl font-bold text-rose-400">
              <p className="mx-auto my-4">「いつもありがとう」と伝えたいなら</p>
            </div>
            <div className="text-black my-12 text-3xl md:text-4xl font-bold text-red-900">
              <p>あなたの想いと、健康を一緒に伝える</p>
            </div>
            <div className="text-black my-12 text-5xl md:text-4xl font-bold text-red-500">
              <p>まきせの健康ケア　整体セットギフト券</p>
            </div>
          </div>
          <div className="hidden md:block">
            <Image
              src="/images/features/makise-massage.jpg"
              alt="牧瀬院長"
              width="720"
              height="480"
              className="w-full"
            />
          </div>
        </div>
      </section>

      <section className="overflow-hidden pt-20 pb-6 lg:pb-10 xl:pb-16">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5 flex-wrap md:flex-nowrap">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20
                },

                visible: {
                  opacity: 1,
                  x: 0
                }
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto height-auto aspect-[16/9] block w-full md:w-1/2"
            >
              <Image
                src="/images/about/makise-flat.jpg"
                alt="MAKISE Hiroto Incho"
                className="dark:hidden mx-auto object-cover"
                width={720}
                height={404}
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20
                },

                visible: {
                  opacity: 1,
                  x: 0
                }
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                あなたの大切な人の施術を担当するのは……
              </h2>
              <h3>牧瀬洋人院長</h3>
              <div>
                <p>わたしは、整骨院の専門学校を卒業後、整形外科で入職。</p>
                <p>
                  厚生労働省認可の教員資格と、３つの国家資格を取得し、
                  縁もあって専門学校の講師も同時にするという二足のわらじを履くようになりました。
                  専門学校付属整骨院の院長も任されていました。
                </p>
                <p>
                  しかし、数年間施術をしていくうちに、施術後は改善するが、
                  数日するとまた症状が戻るといった事が多々あったのです。
                </p>
                <p>それもあって、治療に対して何度も壁にぶつかりました。</p>
                <p>
                  そこで全身をみる東洋医学の学校に通いはじめました。
                  二足のわらじが三足になりましたが、いても立ってもいられなかったんです。
                </p>
                <p>
                  はり、きゅう師の国家資格を得たのも、
                  患者さんの体を根本から改善して差し上げたいという思いからです。
                </p>
                <p>
                  ですが、それでも補うことのできないことを、数多く経験しました。
                </p>
                <p>
                  そこで、休日になると、いいと言われる講習会には、いくつも、いくつも
                  参加したんです。
                </p>
                <p>
                  そんな折、たまたま行った講習会で、
                  ゆがみ取りSPATの創始者の医師・鹿島田忠史先生と出会いました。
                </p>
                <p>
                  ゆがみ取りSPATは、再現性の高い手法でした。
                  わたしはコレこそ求めていたものと感銘を受け、
                  早速SPATのマスターセラピストと、
                  認定SPAT指導講師の資格を取得したんです。
                </p>
                <p>
                  SPATの効果は素晴らしく、今ではまきせ鍼灸整骨院のメインの施術となり、
                  皆さんに感謝して頂いています。
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h2 className="w-fit mx-auto text-6xl">
            <span className="text-2xl">あなたも、まきせの健康ケア</span>
            <br />
            整体セットギフト券を贈ってみませんか？
          </h2>
          <h3 className="w-fit mx-auto">
            ４つの整体ケアセットの中からお選びいただけます
          </h3>
          <div className="mt-7 mb-14">
            <Image
              src="/images/features/giftset-package.jpg"
              alt="ギフトセット包装例"
              width="720"
              height="480"
              className="mx-auto"
            />
          </div>
          <div className="flex flex-wrap gap-6 items-start adjust-between w-full">
            <div className="w-[40%] md:w-[22%]">
              <h4>初体験セット</h4>
              <p>
                腰や体の痛みで、普段の生活がきつくなったと感じている方が、
                まきせの整体を試していただけるセットです。
              </p>
              <p>整体コース２回分と、初診券がついています</p>
            </div>
            <div className="w-[40%] md:w-[22%]">
              <h4>基本ケアセット</h4>
              <p>
                長く続いている腰などの体の痛みで、趣味でも生活でも楽しめなくなっているとお悩みの方のための基本のケアセットです。
              </p>
              <p>
                初体験セットの内容に加え、はり整体コースのギフト券がついています。
              </p>
            </div>
            <div className="w-[40%] md:w-[22%]">
              <h4>トータルケアセット</h4>
              <p>
                もうずっと腰や体の痛みで悩んでいて、メンタルまで不調になってきたとお悩みの方のためのセットです。
              </p>
              <p>
                基本ケアセットの内容に加え、整体コース＋３回（全５回分）と、お灸のギフト券、カッピングのギフト券がついています。
              </p>
              <p>
                はりはメンタルだけでなく、自律神経の不調にも効果があります。おすすめです。
              </p>
            </div>
            <div className="w-[40%] md:w-[22%]">
              <h4>新ママ応援セット</h4>
              <p>
                産後の不調で子育てがつらいと感じているママさんが、骨盤矯正で体調をもとに戻し、赤ちゃんを楽しく育てられるようになるセットです。
              </p>
              <p>
                トータルケアセットの内容のうち、整体コース１回分が産後骨盤矯正のチケットに変わっています。
              </p>
              <p>赤ちゃんに愛情を注げないと、自分を責めないで下さい。</p>
              <p>
                体の不調が 精神に悪影響を及ぼしているんです。
                体を整えれば、子育てが楽しくなりますよ。
              </p>
            </div>
          </div>
          <h3 className="w-fit mx-auto">
            ４種類のメッセージカードとブランクのカードもご用意しました。
          </h3>
          <div className="flex flex-wrap gap-2 items-start adjust-between w-fit mx-auto">
            <div>
              <Image
                src="/images/features/makise-message-card-1.svg"
                alt="Message card"
                width="300"
                height="200"
              />
            </div>
            <div>
              <Image
                src="/images/features/makise-message-card-2.svg"
                alt="Message card"
                width="300"
                height="200"
              />
            </div>
            <div>
              <Image
                src="/images/features/makise-message-card-3.svg"
                alt="Message card"
                width="300"
                height="200"
              />
            </div>
            <div>
              <Image
                src="/images/features/makise-message-card-4.svg"
                alt="Message card"
                width="300"
                height="200"
              />
            </div>
            <div>
              <Image
                src="/images/features/makise-message-card-5.svg"
                alt="Message card"
                width="300"
                height="200"
              />
            </div>
          </div>
          <p>
            ４つの中からお選びいただくか、ブランクのメッセージカードにあなたの想いを書いてお贈り下さい。
          </p>
          <p>
            ご自身で自筆のメッセージをお書き添えになりたい場合は、ギフトカードと梱包用の箱と一緒に、
            ４種類のメッセージカードと、ブランクのカード、包装紙とリボンを、あなたのご住所にお届けします。
          </p>
          <p>同梱の包装紙とリボンで飾って、大切な人にお渡し下さい。</p>
          <p>
            もし、お贈りする方が遠方にお住まいで、当院から直接お届けしたい場合は、
            ご注文時にどのカードをお贈りするかお選び下さい。
          </p>
          <p>
            メッセージカードに記入はいたしませんが、
            丁寧に包装してリボンを貼付して、あなたの代わりに心を込めて発送いたします。
          </p>
          <div>
            <script
              async
              src="https://js.stripe.com/v3/pricing-table.js"
            ></script>
            <stripe-pricing-table
              pricing-table-id="prctbl_1OQYvGFI0fllSO6vfMl6spCI"
              publishable-key={`${process.env.STRIPE_APIKEY}`}
            ></stripe-pricing-table>
          </div>
          <div className="text-center text-4xl mt-14 mb-7 font-black text-rose-400">
            あなたからの、想いのこもったご注文をお待ちしております
          </div>
        </div>
      </section>
    </>
  )
}
