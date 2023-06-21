import React from "react"
import Image from "next/image"
import Link from "next/link"

import backgroundImage from "../images/BackgroundImage.png"

export default function SiteHero() {
  return (
    <div className="fixed w-full h-screen">
      <Image
        src={backgroundImage}
        alt=""
        priority
        fill={true}
        style={{ objectFit: "cover", objectPosition: "center" }}
        className="bg-center"
      />
      <div className="relative flex justify-between">
        <div className="this_align_left w-[720px] h-[250px] ml-[80px]">
          <div className="leading-[85px] -rotate-90 absolute top-56 -left-36 ml-[40px]">
            <h1 className="uppercase font-[600] text-[108px]">virtual</h1>
            <h1 className="uppercase font-[600] text-[88px]">rejects</h1>
          </div>
          <div className="font-[400] text-[14px] relative top-[76px] left-16">
            <h3>愛を込めて</h3>
            <h3>@2023</h3>
          </div>
          <h3 className="uppercase w-[180px] text-[13.3px] absolute top-[550px] left-1 ml-[40px]">
            An underground tale ABOUT DISCOVERY AND INTERACTION DURING DISTOPIAN
            TIMES.
          </h3>
        </div>
        <div className="this_align_right pr-[40px] absolute -bottom-96 right-0 ">
          <Link href="/browse">
            <div className="flex-col  w-[260px] h-[88px] bg-[#FFCD00] relative -top-8 justify-center text-center">
              <div className="pt-6 pl-12 text-justify">
                <p className="text-black font-[400] text-[14px] -mb-1">
                  LAUNCH HERE TO
                </p>
                <p className="text-black font-[600] text-[21px] italic">
                  FIND EVENTS &gt;&gt;&gt;
                </p>
              </div>
            </div>
          </Link>
          <h4 className="">ART BY @username</h4>
        </div>
      </div>
    </div>
  )
}
