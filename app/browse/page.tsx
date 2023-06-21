"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import SearchBar from "@/components/search-bar"

const cardsData = [
  {
    id: 1,
    title: "TubeVR Party Night",
    date: "2/10/2023 | 9PM",
    image: "/1.jpeg",
  },
  {
    id: 2,
    title: "React Workshop",
    date: "3/25/2023 | 10AM",
    image: "/2.jpeg",
  },
  {
    id: 3,
    title: "Next.js Meetup",
    date: "4/15/2023 | 6PM",
    image: "/3.jpeg",
  },
  {
    id: 4,
    title: "Railway Meetup",
    date: "4/15/2023 | 6PM",
    image: "/4.jpeg",
  },
  {
    id: 5,
    title: "Today in VR",
    date: "4/15/2023 | 6PM",
    image: "/5.jpeg",
  },
  {
    id: 6,
    title: "Get Started Next.js",
    date: "4/15/2023 | 6PM",
    image: "/6.jpeg",
  },
  {
    id: 7,
    title: "Beer pong Contest",
    date: "4/15/2023 | 6PM",
    image: "/7.jpeg",
  },
  {
    id: 8,
    title: "World Pizza Championship",
    date: "4/15/2023 | 6PM",
    image: "/8.jpg",
  },
]

export default function page() {
  return (
    <div>
      {/* <div className="flex justify-center mt-32">
        <SearchBar />
      </div> */}
      <hr />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {cardsData.map((card, key) => (
          <Link href="/">
            <Card key={card.id}>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

{
  /* <Link key={card.id} href="/">
            <div className="overflow-hidden shadow rounded-2xl">
              <div className="w-400 h-500">
                <Image
                  className="object-cover w-full h-40 h-50 rounded-t-2xl"
                  src={card.image}
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
                    {card.title}
                  </h5>
                  <p className="text-sm font-normal dark:text-gray-400">
                    {card.date}
                  </p>
                </div>
                <div className="flex mt-auto mb-auto border-black justify-self-end ">
                  <button className="flex items-center justify-end w-10 text-sm font-medium text-center border-black h-9 p-auto rounded-2xl opacity-90"></button>
                </div>
              </div>
            </div>
          </Link> */
}
