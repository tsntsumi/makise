import { Brand } from "@/types/brand"

const brandData: Brand[] = [
  {
    id: 0.25,
    name: "STEP 1",
    href: "#",
    image: "",
    imageLight: "",
    content: (
      <div className="opacity-90 transition-all duration-300 hover:opacity-100 border-2 p-0 border-white rounded-xl text-white font-bold m-0 text-base text-center w-full md:w-[180px] whitespace-nowrap">
        <div className="px-1 m-0">水戸日赤病院</div>
        <div className="px-1 m-0">城 東 小 学 校</div>
        <div className="px-1 m-0">近 く</div>
      </div>
    )
  },
  {
    id: 0.3,
    name: "STEP 2",
    href: "#",
    image: "",
    imageLight: "",
    content: (
      <div className="opacity-90 transition-all duration-300 hover:opacity-100 border-2 p-0 border-white rounded-xl text-white font-bold m-0 text-base text-center w-full md:w-[180px] whitespace-nowrap">
        <div className="px-1 m-0">
          <br />
        </div>
        <div className="px-1 m-0">完全予約制</div>
        <div className="px-1 m-0">
          <br />
        </div>
      </div>
    )
  },
  {
    id: 0.35,
    name: "STEP 2",
    href: "#",
    image: "",
    imageLight: "",
    content: (
      <div className="opacity-90 transition-all duration-300 hover:opacity-100 border-2 p-0 border-white rounded-xl text-white font-bold m-0 text-base text-center w-full md:w-[180px] whitespace-nowrap">
        <div className="px-1 m-0 text-base">初回特別施術</div>
        <div className="px-1 m-0 text-2xl">1,980円</div>
        <div className="px-1 m-0 text-xs">12月20日まで</div>
      </div>
    )
  }
]

export default brandData
