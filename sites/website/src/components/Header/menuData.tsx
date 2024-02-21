import { Menu } from "@/types/menu"
import Image from "next/image"
import { gtag_report_conversion } from "@/lib/googleTag"
import { gtag_report_phonebooking } from "@/lib/googleTag"

export const bookMenu: Menu = {
  id: 1,
  title: (
    <div className="flex flex-col flex-wrap">
      <div className="text-sm underline text-blue-500">ご予約はこちら</div>
      <div className="flex flex-col flex-wrap items-start">
        <div className="text-xs whitespace-nowrap">受付：8時〜20時</div>
        <div className="text-xs whitespace-nowrap">休診：日曜&amp;水曜午後</div>
      </div>
    </div>
  ),
  newTab: false,
  submenu: [
    {
      id: 1.1,
      title: (
        <div className="text-xs underline text-blue-500">
          ☏お電話(029-224-0076)で予約
        </div>
      ),
      newTab: false,
      path: "tel:0292240076",
      onClick: () => gtag_report_phonebooking("tel:0292240076")
    },
    {
      id: 1.2,
      title: (
        <div className="text-xs underline text-blue-500">
          📆カレンダーで予約
        </div>
      ),
      newTab: false,
      path: "https://meet-makise.alizza-ideal.com"
    },
    {
      id: 1.3,
      title: (
        <div className="text-xs underline text-blue-500">
          <Image
            src="/images/icon/LINE_APP_iOS.png"
            width="14"
            height="14"
            alt="LINEで予約"
            className="inline"
          />
          LINE (@712yzusq) で予約
        </div>
      ),
      newTab: false,
      path: "https://lin.ee/LuKG3mc",
      onClick: () => gtag_report_conversion("https://lin.ee/LuKG3mc")
    }
  ]
}

const menuData: Menu[] = [
  {
    id: 3,
    title: <div className="text-xs underline">患者様の声</div>,
    newTab: false,
    path: "/#testimonial"
  },
  {
    id: 4,
    title: <div className="text-xs underline">自己紹介</div>,
    newTab: false,
    path: "/#about"
  },
  {
    id: 5,
    title: <div className="text-xs underline">選ばれる理由</div>,
    newTab: false,
    path: "/#features"
  },
  {
    id: 6,
    title: <div className="text-xs underline">お知らせ</div>,
    newTab: false,
    path: "/announces"
  },
  {
    id: 7.1,
    title: <div className="text-xs underline">施術の流れ</div>,
    newTab: false,
    path: "/#processes"
  },
  {
    id: 7.2,
    title: <div className="text-xs underline">施術料金</div>,
    newTab: false,
    path: "/#pricing"
  },
  {
    id: 7.3,
    title: <div className="text-xs underline">返金保証</div>,
    newTab: false,
    path: "/#money-back-guarantee"
  },
  {
    id: 7.4,
    title: <div className="text-xs underline">道順</div>,
    newTab: false,
    path: "/#accesses"
  },
  {
    id: 7.5,
    title: <div className="text-xs underline">ストレッチブックプレゼント</div>,
    newTab: false,
    path: "/#lead-magnet"
  }
]

export default menuData
