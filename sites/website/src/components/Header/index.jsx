"use client"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

import ThemeToggler from "./ThemeToggler"
import menuData from "./menuData"
import { bookMenu } from "./menuData"

const Header = () => {
  const [dropdownToggler, setDropdownToggler] = useState(false)
  const [stickyMenu, setStickyMenu] = useState(false)

  const pathUrl = usePathname()

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true)
    } else {
      setStickyMenu(false)
    }
  }

  const onClickMenuItem = (onClick) => {
    onClick && onClick()
    setDropdownToggler(!dropdownToggler)
    console.debug("onClickMenuItem")
  }

  const Book = ({ onClick }) => {
    return (
      <>
        <ul
          className={`flex flex-col gap-4 justify-around xl:flex-row xl:gap-6`}
        >
          <li key="booking" className="group relative">
            <>
              <button
                onClick={() => setDropdownToggler(!dropdownToggler)}
                className="flex cursor-pointer items-center justify-between gap-3 hover:text-primary"
              >
                {bookMenu.title}
                <span>
                  <svg
                    className="h-3 w-3 cursor-pointer fill-waterloo group-hover:fill-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                  </svg>
                </span>
              </button>
              <ul className={`dropdown ${dropdownToggler ? "flex" : ""}`}>
                {bookMenu.submenu.map((item, key) => (
                  <li key={key} className="hover:text-primary">
                    <a
                      href={item.path || "#"}
                      onClick={() => setDropdownToggler(false)}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          </li>
        </ul>
      </>
    )
  }

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu)
  })

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-99999 w-full py-7 ${
          stickyMenu
            ? "bg-white !py-4 shadow transition duration-100 dark:bg-black"
            : ""
        }`}
      >
        <div className="relative mx-auto max-c-1390 items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
          <div
            className={`flex w-full ${
              dropdownToggler ? "items-start" : "items-center"
            } justify-between xl:w-1/4 gap-4`}
          >
            <a href="/">
              <Image
                src="/images/logo/logo-sq-dark.svg"
                alt="logo"
                width={85}
                height={85}
                className="hidden min-w-[64px] h-[64px] min-h-[64px] dark:block"
              />
              <Image
                src="/images/logo/logo-sq-light.svg"
                alt="logo"
                width={85}
                height={85}
                className="min-w-[64px] h-[64px] min-h-[64px] dark:hidden"
              />
            </a>
            {/* Booking */}
            <Book onClick={() => setDropdownTrigger(!dropdownToggler)} />
            {/* Booking End */}
            {/* Address */}
            <div className="flex flex-col flex-wrap text-xs">
              <div className="block whitespace-nowrap">水戸市城東３丁目</div>
              <div className="block">
                <span className="whitespace-nowrap">城東ロイヤルハイツ</span>
                <span className="whitespace-nowrap">103</span>
              </div>
            </div>
            {/* Address End */}

            <ThemeToggler />
          </div>
        </div>
      </header>
    </>
  )
}

// w-full delay-300

export default Header
