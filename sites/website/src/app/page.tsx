"use client"
import Image from "next/image"
import Head from "next/head"
import { ThemeProvider } from "next-themes"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Outline from "@/components/Outline"
import Problem from "@/components/Problem"
import Testimonial from "@/components/Testimonial"
import Feature from "@/components/Features"
import Process from "@/components/Processes"
import Pricing from "@/components/Pricing"
import About from "@/components/About"
import Access from "@/components/Access"
import CTA from "@/components/CTA"
import Magnet from "@/components/Magnet"
import LatestAnnounces from "@/components/Announces/Latests"

import firebaseConfig from "@/firebase-config"

export default function Page() {
  return (
    <>
      <ThemeProvider
        enableSystem={false}
        attribute="class"
        defaultTheme="light"
      >
        <Header />
        <Hero />
        <Outline />
        <Problem />
        <Testimonial />
        <CTA />
        <About />
        <Feature />
        <CTA />
        <Process />
        <Pricing />
        <CTA />
        <Access />
        <Magnet />
        <CTA />
        <Footer />
      </ThemeProvider>
    </>
  )
}
