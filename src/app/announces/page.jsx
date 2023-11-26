import AnnounceListings from "@/components/Announces/Listings"
import { retrieveAnnounces } from "@/lib/firebase/firestore.js"

// List all announce items
export default async function Page() {
  const announces = await retrieveAnnounces()
  return (
    <AnnounceListings
      headerInfo={{
        title: "お知らせ",
        subtitle: "これまでのお知らせの一覧です",
        description: <></>
      }}
      announces={announces}
    />
  )
}
