import SectionHeader from "../Common/SectionHeader"
import AnnounceData from "./Data"
import AnnounceList from "./List"

export default async function AllAnnounces() {
  const announces = await AnnounceData(null, 0)
  return (
    <AnnounceList
      headerInfo={{
        title: "お知らせ一覧",
        subtitle: "まきせ鍼灸整骨院からのお知らせ",
        description: <></>
      }}
      announces={announces}
    />
  )
}
