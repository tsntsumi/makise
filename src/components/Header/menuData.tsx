import { Menu } from "@/types/menu"

const menuData: Menu[] = [
  {
    id: 1,
    title: (
      <div className="text-xs">
        <div>住所：水戸市城東３丁目</div>
        <div>城東ロイヤルハイツ103</div>
      </div>
    ),
    newTab: false,
    path: "#"
  },
  {
    id: 2,
    title: <div className="text-xs underline">患者様の声</div>,
    newTab: false,
    path: "#testimonial"
  },
  {
    id: 2,
    title: <div className="text-xs underline">自己紹介</div>,
    newTab: false,
    path: "#about"
  },
  {
    id: 3,
    title: <div className="text-xs underline">選ばれる理由</div>,
    newTab: false,
    path: "#features"
  },
  {
    id: 4,
    title: <div className="text-xs underline">お知らせ</div>,
    newTab: false,
    path: "/announces"
  },
  {
    id: 5,
    title: <div className="text-xs underline">その他...</div>,
    newTab: false,
    submenu: [
      {
        id: 5.1,
        title: <div className="text-xs underline">施術の流れ</div>,
        newTab: false,
        path: "#processes"
      },
      {
        id: 5.2,
        title: <div className="text-xs underline">施術料金</div>,
        newTab: false,
        path: "#pricing"
      },
      {
        id: 5.3,
        title: <div className="text-xs underline">返金保証</div>,
        newTab: false,
        path: "#money-back-guarantee"
      },
      {
        id: 5.4,
        title: <div className="text-xs underline">道順</div>,
        newTab: false,
        path: "#accesses"
      }
    ]
  }
]

export default menuData
