"use client"
import React from "react"
import Script from "next/script"
import accessesData from "./accessesData"
import SingleAccess from "./SingleAccess"
import SectionHeader from "../Common/SectionHeader"

const Access = () => {
  return (
    <>
      {/* <!-- ===== Accesses Start ===== --> */}
      <section id="accesses" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "当院へのアクセス",
              subtitle: "",
              description: (
                <div>
                  <div>
                    <h3>営業時間</h3>
                    <p>8:00～12:30、15:00～20:00</p>
                    <p>予約優先（予約なしでも受診できます）</p>
                    <h3>定休日</h3>
                    <p>日曜・祝日・水曜午後</p>
                    <h3>電車でお越しの場合</h3>
                    <p>
                      最寄り駅は３つございますが、常磐線水戸駅よりバス又はタクシーをご利用されることをおすすめします。
                    </p>
                    <div className="pl-6">
                      <h4 className="my-2">常磐線・水戸駅から</h4>
                      <p>水戸駅北口バスターミナル３番停留所より</p>
                      <p>茨城交通・若宮団地方面行き（③系統バス）乗車</p>
                      <p>若宮団地アパート入口バス停下車、徒歩２分</p>
                      <h4 className="my-2">水郡線・常陸青柳駅から</h4>
                      <p>徒歩22分</p>
                      <h4 className="my-2">鹿島臨海鉄道・東水戸駅から</h4>
                      <p>徒歩23分</p>
                    </div>
                    <h3>お車でお越しの場合</h3>
                    <div className="pl-6">
                      <h4 className="my-2">国道６号方面から</h4>
                      <p>
                        若宮団地入口交差点（ファミリーマート水戸若宮店近く）から、旧陸前浜街道方面に進んで下さい。
                      </p>
                      <h4 className="my-2">水戸駅方面から</h4>
                      <p>国道５１号を国道６号方面に向かい、</p>
                      <p>
                        茨城交通バス(株)
                        浜田営業所手前のセブンイレブン水戸東桜川店前の交差点を桜川方面に曲がり、
                      </p>
                      <p>常磐線を渡って直進すると、右手に見えてきます。</p>
                    </div>
                  </div>
                </div>
              )
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {/* <!-- Accesses item Start --> */}

            {accessesData.map((access, key) => (
              <SingleAccess access={access} key={key} />
            ))}
            {/* <!-- Accesses item End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Accesses End ===== --> */}
    </>
  )
}

export default Access
