import { MetadataRoute } from "next"
import { retrieveAnnounces } from "@/lib/firebase/firestore"

const SITE_URL = "https://makise-seikotsu.com"

type PageProp = {
  url: string
  lastModified?: string | Date
  changeFrequency?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never"
  priority?: number
}

const announcesMap = async (baseurl: string): Promise<PageProp[]> => {
  const announces = await retrieveAnnounces()
  return announces?.map((a, i) => {
    return {
      url: `${baseurl}/announces/${a.slug}`,
      lastModified: new Date(a.date),
      changeFrequency: "monthly",
      priority: 0.7
    }
  })
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticMaps: PageProp[] = [
    {
      url: `${SITE_URL}/legal`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7
    },
    {
      url: `${SITE_URL}/giftset`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7
    },
    {
      url: `${SITE_URL}/confirmation`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7
    },
    {
      url: `${SITE_URL}/policy`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7
    },
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7
    },
    {
      url: `${SITE_URL}/announces`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7
    }
  ]
  const announces: PageProp[] = await announcesMap(SITE_URL)
  return [...staticMaps, ...announces]
}
