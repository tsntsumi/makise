import BlogData from "@/components/Blogs/Data"
import SingleBlogPage from "@/components/Blogs/SingleBlogPage"

export default async function BlogPage({ params }) {
  const blogs = await BlogData(params.slug)
  return blogs.map((blog, i) => (
    <SingleBlogPage key={`${i}`} data={blog}>
      {blog.content}
    </SingleBlogPage>
  ))
}
