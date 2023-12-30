import { Brand } from "@/types/brand"

const brandData: Brand[] = [
  {
    id: 0.25,
    name: "STEP 1",
    href: "/#accesses",
    image: "",
    imageLight: "",
    content: (
      <div className="opacity-90 transition-all duration-300 hover:opacity-100 border-2 p-0 border-white rounded-xl text-white font-bold m-0 text-xs lg:text-sm md:text-base text-center w-full md:w-[180px] whitespace-nowrap h-full flex flex-col justify-around">
        <div className="px-1 m-0">水戸日赤病院</div>
        <div className="px-1 m-0">城 東 小 学 校</div>
        <div className="px-1 m-0">近 く</div>
      </div>
    )
  },
  {
    id: 0.3,
    name: "STEP 2",
    href: "/#processes",
    image: "",
    imageLight: "",
    content: (
      <div className="opacity-90 transition-all duration-300 hover:opacity-100 border-2 p-0 border-white rounded-xl text-white font-bold m-0 text-sm md:text-base text-center w-full md:w-[180px] whitespace-nowrap h-full flex flex-col justify-center">
        <div className="px-1 m-0 text-base lg:text-xl">完全予約制</div>
      </div>
    )
  },
  {
    id: 0.4,
    name: "STEP 3",
    href: "/#money-back-guarantee",
    image: "",
    imageLight: "",
    content: (
      <div className="opacity-90 transition-all duration-300 hover:opacity-100 border-2 p-0 border-white rounded-xl text-white font-bold m-0 text-sm md:text-base text-center w-full md:w-[180px] whitespace-nowrap h-full flex flex-col justify-around">
        <div className="px-1 m-0 text-sm md:text-base">初回費用</div>
        <div className="px-1 m-0 text-sm md:text-2xl">全額返金保証</div>
      </div>
    )
  },
  {
    id: 0.5,
    name: "STEP 4",
    href: "/#pricing",
    image: "",
    imageLight: "",
    content: (
      <div className="opacity-90 transition-all duration-300 hover:opacity-100 border-2 p-0 border-white rounded-xl text-white font-bold m-0 text-sm md:text-base text-center w-full md:w-[180px] whitespace-nowrap h-full flex flex-col justify-around md:py-2">
        <div className="px-1 m-0 text-xs md:text-sm">初回特別価格</div>
        <div className="px-1 m-0 text-xl">
          <span className="text-sm">はり整体</span> 5,480
          <span className="text-xs">円</span>
        </div>
        <div className="px-1 m-0 text-xl">
          <span className="text-xs">整体コース</span> 3,980
          <span className="text-xs">円</span>
        </div>
      </div>
    )
  }
]

export default brandData
