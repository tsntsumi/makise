import Image from "next/image"
import { LEAD_TIME, OFFER_DAYS } from "@/config"

export default function Template() {
  const now = Date.now()
  //const now = new Date(2024, 2 - 1, 2, 0, 0, 0).getTime() // Date.now()
  //const now = new Date(2024, 2 - 1, 10, 0, 0, 0).getTime() // Date.now()
  //const now = new Date(2024, 2 - 1, 20, 0, 0, 0).getTime() // Date.now()
  //const now = new Date(2024, 3 - 1, 3, 0, 0, 0).getTime() // Date.now()
  const campaignStart = new Date(2024, 2 - 1, 1, 0, 0, 0).getTime()
  const campaignMiddle = new Date(2024, 2 - 1, 8, 0, 0, 0).getTime()
  const campaignEnd = new Date(2024, 2 - 1, 15, 23, 59, 59).getTime()
  const announceEnd = new Date(2024, 2 - 1, 28, 23, 59, 59).getTime()
  const thanksEnd = new Date(2024, 3 - 1, 7, 23, 59, 59).getTime()
  const campaignDisplay =
    campaignStart <= now && now <= campaignEnd ? "block" : "hidden"
  const campaignMiddleDisplay =
    campaignMiddle <= now && now <= campaignEnd ? "block" : "hidden"
  const announceDisplay =
    campaignEnd <= now && now <= announceEnd ? "block" : "hidden"
  const thanksDisplay =
    announceEnd <= now && now <= thanksEnd ? "block" : "hidden"
  return (
    <div className="pt-8 sm:pt-16 pb-4 sm:pb-16">
      <div className="w-1/4 flex items-center justify-center float-right">
        <Image
          src="/images/avatar.png"
          alt="Avatar Image"
          width="92"
          height="92"
          classname="w-full object-cover"
        />
      </div>

      <h1 className="text-3xl font-bold tracking-tight text-accent-800 sm:text-5xl">
        まきせ鍼灸整骨院
      </h1>
      <p className="mt-2 sm:mt-6 text-sm text-gray-800 font-medium">
        コースを選んでから日付を選ぶと予約可能な時間がカレンダーの下に表示されます。
      </p>
      <div className={`${campaignDisplay}`}>
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-accent-800 sm:text-3xl">
          まきせのゆがみ・しびれのお悩み解決施術体験会（1980円＠2/14〜2/28）参加申込方法
        </h2>
        <p className="mt-2 text-sm text-gray-800 font-medium">
          体験会にご参加希望の方は、整体コース（初回）:
          ６０分コースをお選びの上、
          参加される時間をタップしてメッセージ入力欄に、
          チラシの下段のクーポンを入力してお申し込みください。
        </p>
        <p
          className={`${campaignMiddleDisplay} mt-2 text-sm text-gray-800 font-medium`}>
          おかげさまで、たくさんの方々からお申し込みいただいております。
          まだ余裕がありますので、ぜひご参加ください。
        </p>
        <p className="mt-2 text-sm text-gray-800 font-medium">
          あなたのお申し込みをお待ちしております。
        </p>
      </div>
      <div className={`${announceDisplay}`}>
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-accent-800 sm:text-3xl">
          まきせのゆがみ・しびれのお悩み解決施術体験会（1980円＠2/14〜2/28）締め切りました
        </h2>
        <p className="mt-2 text-sm text-gray-800 font-medium">
          体験会のお申し込みを締め切りました。
        </p>
        <p className="mt-2 text-sm text-gray-800 font-medium">
          お申し込みいただいたみなさま、ありがとうございました。
          おかげさまで、たくさんの方々にお申し込みいただきました。
        </p>
        <p className="mt-2 text-sm text-gray-800 font-medium">
          今回お申し込に間に合わなかったみなさま、次の体験会でお待ちしております。
        </p>
      </div>
      <div className={`${thanksDisplay}`}>
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-accent-800 sm:text-3xl">
          まきせのゆがみ・しびれのお悩み解決施術体験会（1980円＠2/14〜2/28）終了しました
        </h2>
        <p className="mt-2 text-sm text-gray-800 font-medium">
          体験会にご参加いただいたみなさま、ありがとうございました。
          おかげさまで、たくさんの方に私の施術のよさを体験していただけました。
        </p>
        <p className="mt-2 text-sm text-gray-800 font-medium">
          今回ご参加できなかったみなさまには、次の体験会でお待ちしております。
        </p>
      </div>
    </div>
  )
}
