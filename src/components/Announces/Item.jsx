"use client"
import { motion } from "framer-motion"
import NextLink from "next/link"
import Link from "@/components/Link"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeKatex from "rehype-katex"
import "katex/dist/katex.min.css"
import Media, { Image, Video } from "@/components/Media"

const components = {
  Image: Image,
  Video: Video,
  Media: Media
}

export default function AnnounceItem({ announce }) {
  const elipsis = (text, count) =>
    text?.slice(0, count) + (text?.length > count ? "..." : "")
  const content = announce.content
    ?.filter((c) => c.type === "text")
    ?.at(0).value
  const summary = elipsis(content, 40)
  return (
    <>
      <div>
        <div className="px-4">
          <NextLink href={`/announces/${announce.slug}`}>
            <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-lg font-medium text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2 w-full text-justify">
              {elipsis(announce.title, 40)}
            </h3>
          </NextLink>
          <div>{announce?.date}</div>
          <div>
            <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeKatex]}>
              {summary || ""}
            </Markdown>
          </div>
          <Link href={`/announces/${announce.slug}`}>詳しく</Link>
        </div>
      </div>
    </>
  )
}
