"use client"

import React, { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DatePicker } from "@/components/date-picker"
import { PlatformInput } from "@/components/platform-input"
import { TypeInput } from "@/components/type-input"

export default function page() {
  // the functions and states are used for uploading the data for the database
  // a node app has to be configurated to all this stuff work

  const [thumbnail, setThumbnail] = useState("")
  const [title, setTitle] = useState("")
  const [eventDate, setEventDate] = useState("")

  const [allData, setAllData] = useState([])

  function convertToBase64(e) {
    console.log(e)
    var reader = new FileReader()
    reader.readAsDataURL(e.target.files[0])
    reader.onload = () => {
      console.log(reader.result) // base64encoded string
      setThumbnail(reader.result)
    }
    reader.onerror = (error) => {
      console.log("Error: ", error)
    }
  }

  function uploadImage(e) {
    e.preventDefault()
    fetch("http://localhost:5000/upload-image", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        thumbnailBase64: thumbnail,
        eventTitle: title,
        eventTime: eventDate,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
    window.location.reload()
  }

  function getImage() {
    fetch("http://localhost:5000/get-image", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data), setAllData(data.data)
      })
  }

  useEffect(() => {
    getImage()
  }, [])

  // this needs to be a form. I will make this with react hook form + zod (look at shadcn docs)

  return (
    <div className=" bg-[#AA00FF] w-full flex h-screen">
      <section className="">
        <h1 className="text-xl font-medium text-center">Create your event</h1>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Title</Label>
          <Input type="email" id="email" placeholder="Tittle of the event" />
          <Label htmlFor="picture">Picture</Label>
          <Input id="picture" type="file" />
          <Label htmlFor="date">Pick a date</Label>
          <DatePicker />
          <Label htmlFor="type">Type</Label>
          <TypeInput />
          <Label htmlFor="platform">Platform</Label>
          <PlatformInput />
          <Button className="h-12 w-[146px] bg-[#FFCD00] text-[black] font-[500]">
            Post event
          </Button>
        </div>
      </section>
    </div>
  )
}
