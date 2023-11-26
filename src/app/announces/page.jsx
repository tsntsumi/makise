import BlogListings from "@/components/Blogs/Listings"
import { retrieveBlogs } from "@/lib/firebase/firestore.js"

// List all blog items
export default async function Page() {
  const posts = await retrieveBlogs()
  return (
    <BlogListings
      headerInfo={{
        title: "お知らせ",
        subtitle: "これまでのお知らせの一覧です",
        description: <></>
      }}
      blogs={posts}
    />
  )
}
