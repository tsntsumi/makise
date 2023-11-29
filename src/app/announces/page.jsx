import AnnounceListings from "@/components/Announces/Listings"

// List all announce items
export default async function Page() {
  return (
    <AnnounceListings
      headerInfo={{
        title: "お知らせ",
        subtitle: "これまでのお知らせの一覧です",
        description: <></>
      }}
      searchParams={{}}
    />
  )
}
