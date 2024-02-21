import Image from "next/image"
import ClientPage from "@/components/Common/ClientPage"
import Footer from "@/components/Footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ありがとうございます",
  description: "あなたの大切な人への想いを受け取りました。"
}

export default function Page() {
  return (
    <>
      <ClientPage>
        <section className="my-12 mx-4">
          <h1 className="md:text-6xl text-center">
            ご注文ありがとうございます
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="text-2xl font-serif">
              <div className="text-black my-12 text-2xl md:text-3xl font-bold text-rose-800">
                あなたが整体ギフトに込めた想い、必ず大切な方に伝わるよう、心を込めて施術いたします。
              </div>
              <div className="text-4xl mt-14 mb-7 font-black text-rose-400">
                あなたからの、想いのこもったギフト券をまもなくお送りします。到着するまでしばしお待ち下さい。
              </div>
            </div>
            <div className="block">
              <div className="grid grid-cols-1 items-center justify-center">
                <Image
                  src="/images/user/makise-welcome.jpg"
                  alt="牧瀬院長があなたの大切な人をケアします"
                  width="720"
                  height="480"
                  className="w-full"
                />
                <div className="mx-auto">まきせ鍼灸整骨院・牧瀬院長</div>
              </div>
            </div>
            <div>
              <div>
                発送いたしましたら、ご登録いただいたメールアドレスまでご連絡いたします。
              </div>
              <div className="text-xs mt-8">
                お問い合わせは、画面下の「特定商取引法」のページをご覧ください。
              </div>
            </div>
          </div>
        </section>
      </ClientPage>
      <Footer />
    </>
  )
}
