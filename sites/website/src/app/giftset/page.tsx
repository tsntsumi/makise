import Image from "next/image"
import Script from "next/script"
import { motion } from "framer-motion"
import ClientComponent from "./ClientComponent"
import type { Metadata } from "next"
import * as React from "react"

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "stripe-pricing-table": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >
    }
  }
}

export const metadata: Metadata = {
  title: "まきせの整体ギフト券セット",
  description:
    "あなたの大切な人にずっと健康でいてほしいなら、感謝と健康を贈って見ませんか？まきせの整体ギフト券セットのご案内です。４種類のギフト券セットを確認してください。"
}

export default function Page() {
  // const publishableKey = process.env.STRIPE_PUBLISHABLE_KEY
  return <ClientComponent />
}
