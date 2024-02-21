import Image from "next/image"

export default function Confirmation() {
  return (
    <div className="py-8 sm:py-16 mx-auto max-w-2xl">
      <Image
        src="/images/makise-welcome.jpg"
        alt="まきせ院長"
        width="256"
        height="128"
        className="float-right ml-2 mb-2"
      />
      <h1 className="text-3xl font-bold tracking-tight text-accent-700 sm:text-5xl">
        ご予約のお申し込み、ありがとうございます。
      </h1>
      <p className="mt-6 text-xl text-gray-800 font-medium">
        予定を確認し、出来るだけ早くご返信いたします。しばらくお待ち下さい。
      </p>
      <h2>予約確定までの流れ</h2>
      <dl>
        <dt>1. 予約状況と予定の確認</dt>
        <dd>
          <div>
            この予約カレンダー以外からの予約が重複していてダブルブッキングになっていたり、
            緊急の予定が入っていてお申し込みを受けられないといったことがないことを確認します。
          </div>
          <div>
            施術の合間に確認を行いますので、回答が遅くなる場合がございます。
            夜間や休日でも、時間が許す限り確認をしておりますので、しばらくお待ちください。
          </div>
          <div>ご迷惑をおかけしますが、ご理解の程をお願いいたします。</div>
        </dd>
        <dt>2. ご予約可能な場合</dt>
        <dd>
          <div>予約をカレンダーに追加して、メールにてお知らせいたします。</div>
          <div>
            「招待：＜ご予約のコース名＞」というタイトルでご送付いたします。
          </div>
          <div>
            メール本文に、まきせのGoogleカレンダーのリンクがございます。
            こちらからご予約内容を確認していただくことができます。
          </div>
          <div>
            ご予約日が近づきますと、お手元に通知が届くようになっています。
            ご予約日時の備忘としてお使い下さい。
          </div>
        </dd>
        <dt>3. ご予約できない場合</dt>
        <dd>
          <div>
            ほとんどありえませんが、もし万が一、都合によりご予約を受けられない場合、その旨のメールをお送りいたします。
          </div>
          <div>
            「Re: ご予約のお申し込みについて」というタイトルでお送りいたします。
          </div>
          <div>
            その際には、大変お手数をおかけしますが、もう一度
            別の日時をお選びいただいて、ご予約をしていただけると幸いです。
          </div>
          <div>よろしくお願いいたします。</div>
        </dd>
      </dl>
      <div>それでは、お体をお大事になさって下さい。</div>
    </div>
  )
}
