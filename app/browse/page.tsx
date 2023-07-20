"use client"

// import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { SiteHeader } from "@/components/site-header"

export default function page() {
  return (
    <div className="border-2 border-red-50">
      <SiteHeader />
      <form>
        <div className="flex justify-center border-2 border-red-500"></div>

        <h1 className="text-xl">Upcoming events</h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4 pt-[40px] border-red-400 border-2">
            <Link key="1" href="/">
              <div className="overflow-hidden shadow rounded-2xl">
                <div className="w-400 h-500">
                  <Image
                    className="object-cover w-full h-40 h-50 rounded-t-2xl"
                    src=""
                    alt=""
                    width={400}
                    height={500}
                    sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                    quality={50}
                  />
                </div>
                <div className="relative z-20 grid grid-cols-4 px-3 py-2 -mt-5 bg-white rounded-2xl">
                  <div className="col-span-3 p-0">
                    <h5 className="overflow-hidden font-normal tracking-tight text-gray-900 lg:w-auto text-md md:text-sm lg:text-md text-ellipsis whitespace-nowrap">
                      Title
                    </h5>
                    <p className="text-sm font-normal dark:text-gray-400">
                      Date
                    </p>
                  </div>
                  <div className="flex mt-auto mb-auto border-black justify-self-end ">
                    <button className="flex items-center justify-end w-10 text-sm font-medium text-center border-black h-9 p-auto rounded-2xl opacity-90"></button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}
