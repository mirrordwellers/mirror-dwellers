"use client"

import React from 'react'
import { DatePicker } from '@/components/date-picker'
import { TypeInput } from '@/components/type-input'
import { PlatformInput } from '@/components/platform-input'
import { useState, useEffect } from 'react'
import Image from 'next/image'

import PlusSign from '@/images/plus-sign.png'


import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Link from 'next/link'

export default function page() {

  // the functions and states are used for uploading the data for the database
  // a node app has to be configurated to all this stuff work

  const [thumbnail, setThumbnail] = useState("")
  const [title, setTitle] = useState('')
  const [eventDate, setEventDate] = useState('')

  const [allData, setAllData] = useState([])
  const [loading, setLoading] = useState([])


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



function uploadEvent(e) {
  e.preventDefault()
  fetch("http://localhost:5000/new-event", {
    method: "POST",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      thumbnail, 
      eventTitle: title,
      eventTime: date
    })
  }).then((res) => res.json()).then((data) => {console.log(data)})
  window.location.href = "/browse"
}

function getEvents() {
  fetch("http://localhost:5000/getAllEvent", {
    method: "GET",
  }).then((res) => res.json()).then((data) => {console.log(data), setAllData(data.data)})
}

useEffect(() => {
  getEvents()
}, [])

const [date, setDate] = React.useState<Date>()
  return (
    <div className='flex justify-center'>
      <div className=' bg-[#AA00FF] w-[400px] flex h-screen justify-center items-center'>
        <section className='grid '>
          <h1 className='text-center font-[500] text-[32px] mb-8'>Create your event</h1>
          <span className='text-[18px] mb-4 mt-4'>Choose the event cover</span>
          <input 
            type="file" 
            accept="image/*"
            onChange={convertToBase64}
          />
          {
              thumbnail == "" || thumbnail == null ? <Image width={144} height={144} src={PlusSign} style={{borderRadius:'8px'}} alt="" /> :
              <Image width={144} height={144} src={thumbnail} style={{borderRadius:'8px'}} alt="" />
          }
          <span className='text-[18px] mb-4 mt-4'>Choose the event date</span>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[280px] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
                onChange={(e) => setEventDate(e.currentTarget.value)}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>

          <span className='text-[18px] mb-4 mt-4'>Choose the event title</span>
          <input 
            type="text" 
            placeholder='&nbsp; Event title' 
            className='h-10' 
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
          <span className='text-[18px] mb-4 mt-4'>Choose the event type</span>
          <TypeInput />
          <span className='text-[18px] mb-4 mt-4'>Choose the event Platform</span>
          <PlatformInput />
      
          <button className='h-[51px] w-[146px] bg-[#FFCD00] text-[black] font-[500]' onClick={uploadEvent}>POST EVENT</button>
        </section>
      </div>
    </div>
  )
}
