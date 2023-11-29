"use client"
import { React, useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import {
  retrieveAnnounces,
  retrieveAnnouncesSnapshot
} from "@/lib/firebase/firestore.js"
import SectionHeader from "@/components/Common/SectionHeader"
import AnnounceItem from "./Item"

export default function AnnounceListings({ headerInfo, searchParams }) {
  const router = useRouter()
  const [announces, setAnnounces] = useState([])

  useEffect(() => {
    const unsubscribe = retrieveAnnouncesSnapshot((data) => {
      setAnnounces(data)
    })
    return () => {
      if (unsubscribe && typeof unsubscribe === "function") {
        unsubscribe()
      }
    }
  }, [setAnnounces])
  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top mx-auto text-center">
          <SectionHeader headerInfo={headerInfo} />
        </div>
        {/* <!-- Section Title End --> */}
      </div>

      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {!announces && <p>お知らせはありません。</p>}
          {announces?.map((announce) => (
            <AnnounceItem key={announce.id} announce={announce} />
          ))}
        </div>
      </div>
    </section>
  )
}
