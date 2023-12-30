import Image from "next/image"

export default async function Page() {
  return (
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
            <Image
              src="/images/hero/hero-image-square.png"
              alt="牧瀬院長"
              width="720"
              height="480"
              className="w-full"
            />
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
        </div>
        <div className="hidden md:block">
          <Image
            src="/images/hero/hero-image-square.png"
            alt="牧瀬院長"
            width="720"
            height="480"
            className="w-full"
          />
        </div>
      </div>
      <h2 className="w-fit mx-auto text-6xl">
        <span className="text-2xl">まきせの健康ケア</span>
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
        <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
        <stripe-pricing-table
          pricing-table-id="prctbl_1OQYvGFI0fllSO6vfMl6spCI"
          publishable-key={`${process.env.STRIPE_APIKEY}`}
        ></stripe-pricing-table>
      </div>
      <div className="text-center text-4xl mt-14 mb-7 font-black text-rose-400">
        あなたからの、想いのこもったご注文をお待ちしております
      </div>
    </section>
  )
}
