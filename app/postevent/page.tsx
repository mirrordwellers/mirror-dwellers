"use client"

import React from 'react'
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
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Grid } from 'lucide-react'
import { MapPin } from 'lucide-react'

import { Textarea } from "@/components/ui/textarea"

export default function page() {

  // the functions and states are used for uploading the data for the database
  // a node app has to be configurated to all this stuff work

  const [thumbnail, setThumbnail] = useState("")
  const [title, setTitle] = useState('')
  const [eventDate, setEventDate] = useState('')
  const [description, setDescription] = useState('')
  const [eventLink, setEventLink] = useState('')


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
      eventTime: date,
      eventType: typeOption,
      platform: platformOption,
      description: description,
      eventLink: eventLink,

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

const [typeOption, setTypeOption] = useState("+18")
const EventOptionType = () => {
   return (
      <Select value={typeOption} onValueChange={setTypeOption}>
        <SelectTrigger className="w-[180px] h-[51px] text-[black]">
          <span><Grid /></span>
          <SelectValue placeholder="Type of event" />
        </SelectTrigger>
        <SelectContent>
        <SelectGroup>
          <SelectLabel>Events</SelectLabel>
              <SelectItem value="Any">Any</SelectItem>
              <SelectItem value="+18">+18</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
   ) 
  }

const [platformOption, setPlatformOption] = useState("Both")
const EventPlatformOption = () => {
   return (
      <Select value={platformOption} onValueChange={setPlatformOption}>
        <SelectTrigger className="w-[180px] h-[51px] text-[black]">
          <span><MapPin /></span>
          <SelectValue placeholder="Type of event" />
        </SelectTrigger>
        <SelectContent>
        <SelectGroup>
          <SelectLabel>Events</SelectLabel>
              <SelectItem value="PC">PC</SelectItem>
              <SelectItem value="Quest">Quest</SelectItem>
              <SelectItem value="Both">Both</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
   ) 
  }

  return (
    <div className='flex justify-center'>
      <div className=' bg-[#AA00FF] w-[400px] flex h-full justify-center items-center'>
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
                aria-required="true"
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
          
          {/* <TypeInput /> */}

          <EventOptionType />

          <span className='text-[18px] mb-4 mt-4'>Choose the event Platform</span>
          {/* <PlatformInput /> */}

          <EventPlatformOption />

          <span className='text-[18px] mb-4 mt-4'>Event Description</span>

          <div className="grid w-full gap-1.5 mb-4 bg-[#3B3B3B]">
            <Textarea  placeholder="Type the event description here." value={description} onChange={(e) => setDescription(e.currentTarget.value)} />
          </div>

          <span className='text-[18px] mb-4 mt-4'>Event Link / Discord Link</span>
          
          <div className="grid w-full gap-1.5 mb-4 bg-[#3B3B3B]">
            <input 
              type="url" 
              placeholder='&nbsp; Event link' 
              className='h-10' 
              value={eventLink}
              onChange={(e) => setEventLink(e.currentTarget.value)}
            />
          </div>
      
          <button className='h-[51px] w-[146px] bg-[#FFCD00] text-[black] font-[500]' onClick={uploadEvent}>POST EVENT</button>
        </section>
      </div>
    </div>
  )
}

          {/* <Select>
            <SelectTrigger className="w-[180px] h-[51px] text-[black]">
              <span className="-mr-8"><MapPin /></span>
              <SelectValue placeholder="Platform" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup onChange={(e) => setSelectedPlatformOption(e.currentTarget.value)}>
                <SelectLabel>Platforms</SelectLabel>
                  {platformOptions.map((o) => (
                    <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
                  ))}
              </SelectGroup>
            </SelectContent>
          </Select> */}

                    {/* <Select>
            <SelectTrigger className="w-[180px] h-[51px] text-[black]">
              <span><Grid /></span>
              <SelectValue placeholder="Type of event" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Events</SelectLabel>
                    <SelectItem value="Any">Any</SelectItem>
                    <SelectItem value="+18">+18</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select> */}

                    {/* <Select>
            <SelectTrigger className="w-[180px] h-[51px] text-[black]">
              <span><Grid /></span>
              <SelectValue placeholder="Type of event" />
            </SelectTrigger>
            <SelectContent >
              <SelectGroup>
                <SelectLabel>Events</SelectLabel>
                {typeOptions.map((o) => (
                    <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
                  ))} 
              </SelectGroup>
            </SelectContent>
          </Select> */}