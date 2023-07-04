"use client"

import React, { useState, useEffect } from "react"

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

export default function Page({ params }: { params: { slug: string } }) {

const [post, setPost] = useState ('')
useEffect (() => {
    const fetchPost = async () => {
        const res = await fetch (`http://localhost:5000/getOne/${params.slug}`)
        const data = await res.json ()
        setPost (data)
        console.log (data)
      }
      fetchPost ()
    }, [])
    

return (
    <div className="flex justify-center pt-12">
      {/* My Post: {params.slug} */}
      <Card className="w-[465px]">
        <div>
          <Image src={post.thumbnail} width={465} height={382} alt="" />
          <CardHeader>
            <CardDescription>{post.eventTime}</CardDescription>
            <CardTitle>{post.eventTitle}</CardTitle>
          </CardHeader>
        </div>
        <CardContent>
          <p>Type of event: {post.eventType} | Platform: {post.platform}</p>
        </CardContent>
        <CardContent>
          <p>{post.description}</p>
        </CardContent>
        <CardFooter>
        <button className='h-[51px] w-[146px] bg-[#FFCD00] text-[black] font-[500] '>
            <Link href={`${post.eventLink}`} target='_blank'>Join event</Link>
        </button>
        </CardFooter>
      </Card>
    </div>
  )
}