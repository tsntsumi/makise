"use client"
import { React, useState, useEffect } from "react"
import SingleAnnouncePage from "@/components/Announces/SingleAnnouncePage"
import NextImage from "next/image"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeKatex from "rehype-katex"
import "katex/dist/katex.min.css"
import { basename } from "path"
import { db, storage } from "@/lib/firebase/app"
import { retrieveAnnouncesSnapshot } from "@/lib/firebase/firestore"
import Media, { Image, Video } from "@/components/Media"

const ContentImage = ({ path, width, height, ...rest }) => {
  return (
    <Image
      src={path}
      width={width || 320}
      height={height || 240}
      alt="announce content image"
      {...rest}
    />
  )
}

const ContentVideo = ({ path, width, height, ...rest }) => {
  return (
    <>
      <Video
        src={path}
        width={width || 320}
        height={height || 240}
        controls
        muted={true}
        autoPlay={true}
        alt="announce content video"
        className="mx-auto"
        {...rest}
      />
    </>
  )
}

const components = {
  Image: Image,
  Video: Video,
  Media: Media
}

const ContentText = ({ text }) => {
  return (
    <Markdown
      components={components}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeKatex]}
    >
      {text}
    </Markdown>
  )
}

const Content = ({ content }) => {
  if (content.type === "text") {
    return <ContentText text={content.value} />
  }
  if (content.type === "images") {
    const images = [...content.value]
    return (
      <div className="flex flex-wrap gap-2 items-start justify-around w-full">
        {images.map((image, key) => (
          <Image alt={`content image ${key}`} path={image} key={key} />
        ))}
      </div>
    )
  }
  if (content.type === "videos") {
    const videos = [...content.value]
    return (
      <div className="flex flex-wrap gap-2 items-start justify-around w-full">
        {videos.map((video, key) => (
          <Video alt={`content video ${key}`} path={video} key={key} />
        ))}
      </div>
    )
  }
  return <>{content.value}</>
}

export default function AnnouncePage({ params }) {
  const { slug } = params
  const [announces, setAnnounces] = useState([])
  const [filters, setFilters] = useState({ slug: slug })

  useEffect(() => {
    const unsubscribe = retrieveAnnouncesSnapshot((data) => {
      setAnnounces(data)
    }, filters)
    return () => {
      if (unsubscribe && typeof unsubscribe === "function") {
        unsubscribe()
      }
    }
  }, [filters, slug])

  if (!announces || !announces.length) {
    return (
      <div className="flex flex-nowrap h-screen w-full items-center justify-center">
        お知らせはありません
      </div>
    )
  }
  return (
    <>
      <SingleAnnouncePage announce={announces.at(0)}>
        {announces?.at(0)?.content?.map((c, k) => (
          <Content content={c} key={k} />
        ))}
      </SingleAnnouncePage>
    </>
  )
}
