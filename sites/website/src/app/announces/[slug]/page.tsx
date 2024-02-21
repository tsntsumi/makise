import Header from "@/components/Header"
import Footer from "@/components/Footer"
import AnnouncePage from "./AnnouncePage"
import { announceBySlug } from "@/lib/firebase/firestore"
import type { Metadata } from "next"

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({
  params,
  searchParams
}: Props): Promise<Metadata> {
  const { slug } = params
  const announces = await announceBySlug(slug)
  const { title, date } = announces?.at(0)
  return {
    title: title,
    description: `${new Date(
      date
    ).toLocaleDateString()}のまきせ鍼灸整骨院からのお知らせです。`
  }
}

export default function Page({ params, searchParams }: Props) {
  return (
    <>
      <Header />
      <section className="mt-20 py-4">
        <AnnouncePage params={params} />
      </section>
      <Footer />
    </>
  )
}
