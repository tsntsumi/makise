"use client"
import Image from "next/image"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Brands from "@/components/Brands"
import Problem from "@/components/Problem"
import Testimonial from "@/components/Testimonial"
import Feature from "@/components/Features"
import Process from "@/components/Processes"
import Pricing from "@/components/Pricing"
import About from "@/components/About"
import Access from "@/components/Access"
import CTA from "@/components/CTA"
import Magnet from "@/components/Magnet"
import LatestBlogs from "@/components/Blogs/Latests"

import firebaseConfig from "@/firebase-config"

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <Brands />
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
    </>
  )
}
