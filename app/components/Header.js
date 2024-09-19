'use client'

import React from 'react'
import Link from 'next/link'

const Header = () => {

  return (
    <header className="w-screen p-4 md:px-24 md:py-8 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="left hidden md:flex items-center gap-8">
          <Link className="uppercase" href="/collections">
            collections
          </Link>
          <Link className="uppercase" href="/about">
            about
          </Link>
          <Link className="uppercase" href="/contact">
            contact
          </Link>
        </div>

        <Link href="/" className="text-xl">
          <span className="text-red-500 font-great">C</span>
          <span className="font-quest">&nbsp;d lusso</span>
        </Link>

        <div className="right flex items-center gap-12">

          <div className="cart-count uppercase flex items-center gap-2 cursor-pointer">
            <p className="hidden md:flex">cart</p>
            <p className="italic">(0)</p>
          </div>

          <div className="hidden md:flex uppercase cursor-pointer">
            <p>women&apos;s</p>
          </div>

          <button aria-label="Menu" className="flex flex-col gap-2 w-12 cursor-pointer">
            <span className="w-full h-[1px] bg-color-light"></span>
            <span className="w-full h-[1px] bg-color-light"></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
