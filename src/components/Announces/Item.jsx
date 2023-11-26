"use client"
import { React, useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
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
    text?.slice(0, count) + (text.length > count ? "..." : "")
  return (
    <>
      <div>
        <Link
          href={`/announce/${announce.slug}`}
          className="relative block aspect-[368/239]"
        >
          <Media src={announce.hero} alt={announce.title} unoptimized fill />
        </Link>

        <div className="px-4">
          <Link href={`/announce/${announce.slug}`}>
            <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-lg font-medium text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2 w-full text-justify">
              {elipsis(announce.title, 40)}
            </h3>
          </Link>
          <div>
            <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeKatex]}>
              {announce.summary}
            </Markdown>
          </div>
        </div>
      </div>
    </>
  )
}
