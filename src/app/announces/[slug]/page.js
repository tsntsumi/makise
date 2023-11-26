import SingleAnnouncePage from "@/components/Announces/SingleAnnouncePage"
import NextImage from "next/image"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeKatex from "rehype-katex"
import "katex/dist/katex.min.css"
import { db, storage } from "@/lib/firebase/app"
import { retrieveAnnounces } from "@/lib/firebase/firestore"
import Media, { Image, Video } from "@/components/Media"
const logger = require("firebase-functions/logger")

const ContentImage = ({ path, width, height, ...rest }) => {
  return (
    <Image
      src={path}
      width={width || 640}
      height={height || 480}
      alt="announce content image"
      {...rest}
    />
  )
}

const ContentVideo = async ({ path, width, height, ...rest }) => {
  return (
    <>
      <video
        src={url}
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
  /* if (content.type === "images") {
   *   const images = [...content.value]
   *   // return images.map((image, key) => <ContentImage path={image} key={key} />)
   *   return <></>
   * }
   * if (content.type === "videos") {
   *   const videos = [...content.value]
   *   // return videos.map((video, key) => <ContentVideo path={video} key={key} />)
   *   return <></>
   * } */
  return <>{content.value}</>
}

export default async function AnnouncePage({ params }) {
  const announces = await retrieveAnnounces({ slug: params.slug })

  return announces?.map((announce) => (
    <SingleAnnouncePage key={announce.id} announce={announce}>
      {announce.content?.map((c, key) => (
        <Content content={c} key={`$key`} />
      ))}
    </SingleAnnouncePage>
  ))
}
