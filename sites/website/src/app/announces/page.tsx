import ClientPage from "@/components/Common/ClientPage"
import AnnounceListings from "@/components/Announces/Listings"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "お知らせ",
  description: `まきせ鍼灸整骨院からのお知らせです。みなさまへのお役立ち情報を掲載していきます。ぜひ確認してください。`
}

// List all announce items
export default function Page({
  params,
  searchParams
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  return (
    <ClientPage>
      <Header />
      <AnnounceListings
        headerInfo={{
          title: "お知らせ",
          subtitle: "これまでのお知らせの一覧です",
          description: <></>
        }}
        searchParams={searchParams}
      />
      <Footer />
    </ClientPage>
  )
}
