/**
 * 特定商取引法に基づく表記
 */
import Link from "next/link"

export const metadata = {
  title: "まきせ鍼灸整骨院",
  description: "特定商取引法に基づく表記"
}

const LegalPage = () => {
  return (
    <main className="notice pb-20 pt-40">
      <h1>特定商取引法に基づく表記</h1>
      <h2>販売業者</h2>
      <p>
        牧瀬{"　"}洋人{"　"}（まきせ鍼灸整骨院）
      </p>
      <h2>運営統括責任者</h2>
      <p>堤{"　"}紀久夫（アリザ・アイデアル）</p>
      <h2>所在地</h2>
      <p>〒310-0012 茨城県水戸市城東３丁目５−８ 城東ロイヤルハイツ １０３</p>
      <h2>連絡先</h2>
      <dl className="ml-4">
        <dt>メールアドレス</dt>
        <dd className="mt-0">
          <div className="link">
            <Link
              href="mailto:info+makise-seikotsu@alizza-ideal.com"
              className="text-[12pt]"
            >
              mailto:info+makise-seikotsu@alizza-ideal.com
            </Link>
          </div>
        </dd>
        <dt>電話番号</dt>
        <dd className="mt-0">
          <div className="link">
            <Link href="tel:0292240076" className="text-[12pt]">
              0292240076
            </Link>
          </div>
          <div className="text-[8pt]"></div>
        </dd>
      </dl>
      <h2>その他について</h2>
      <dl className="ml-4">
        <dt>販売価格</dt>
        <dd>商品販売ページに表示</dd>
        <dt>商品代金以外の必要金額</dt>
        <dd>送料など</dd>
        <dt>個人情報について</dt>
        <dd className="text-md">
          当社はお客様のプライバシーを第一に考え運営しております。詳細は弊サイト{" "}
          <span className="link">
            &lt;
            <Link href="/policy/" className="text-sm">
              個人情報保護方針
            </Link>
            &gt;{" "}
          </span>
          をご覧ください。
        </dd>
        <dt>受け付け可能な決済手段</dt>
        <dd>クレジットカードまたは国内の銀行振込。</dd>
        <dt>決済期間</dt>
        <dd>
          クレジットカード決済の場合はただちに処理されますが、国内の銀行振込の場合は注文から
          3 日以内にお振り込みいただく必要があります。
        </dd>
        <dt>交換および返品</dt>
        <dd>
          商品が破損していた場合にのみ、ご購入代金を全額返金いたします。返品は承っておりません。
        </dd>
      </dl>
    </main>
  )
}
export default LegalPage
