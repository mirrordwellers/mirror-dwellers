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


export default function page() {
  const [allData, setAllData] = useState([])

  const [query, setQuery] = useState("")

  // function getEvents() {
  //   fetch("http://localhost:5000/searchOne/:eventTitle" + `${searchInput}`, {
  //     method: "GET",
  //   }).then((res) => res.json()).then((data) => {console.log(data), setSearchInput(data.data)})
  // }

  function getEvents() {
    fetch("http://localhost:5000/getAllEvent", {
      method: "GET",
    }).then((res) => res.json()).then((data) => {console.log(data), setAllData(data.data)})
  }
  
  useEffect(() => {
    getEvents()
    console.log(allData)
  }, [])

  const [searchFieldValue, setSearchFieldValue] = useState('')
  const [dateInput, setDateInput] = useState('')
      
  const [typeInput, setTypeInput] = useState('')
  const TypeSearch = () => {
     return (
        <Select value={typeInput} onValueChange={setTypeInput}>
          <SelectTrigger className="w-[180px] h-[51px] text-[black]">
            <span><Grid /></span>
            <SelectValue placeholder="Type of event" />
          </SelectTrigger>
          <SelectContent>
          <SelectGroup>
            <SelectLabel>Events</SelectLabel>
                <SelectItem value="">Type of event</SelectItem>
                <SelectItem value="Any">Any</SelectItem>
                <SelectItem value="+18">+18</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
     ) 
    }
  
    
  const [platformInput, setPlatformInput] = useState('')
  const PlatformSearch = () => {
     return (
        <Select value={platformInput} onValueChange={setPlatformInput}>
          <SelectTrigger className="w-[180px] h-[51px] text-[black]">
            <span><MapPin /></span>
            <SelectValue placeholder="Type of event" />
          </SelectTrigger>
          <SelectContent>
          <SelectGroup>
            <SelectLabel>Events</SelectLabel>
                <SelectItem value="">Platform</SelectItem>
                <SelectItem value="PC">PC</SelectItem>
                <SelectItem value="Quest">Quest</SelectItem>
                <SelectItem value="Both">Both</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
     ) 
    }
  
  const [date, setDate] = React.useState<Date>()
  return (
    <div className="overflow-hidden">
      <form>
        <div className="flex justify-center mt-32 pb-[140px]">

          {/* <SearchBar /> */}

          <div className='absolute bg-[#AA00FF]'>
            <section className='bg-[#ffffff] relative  bottom-2 right-2'>
              <div className='flex'>
                  <input 
                      type="text" 
                      placeholder='&nbsp; &nbsp; Search by name' 
                      className='h-[51px] w-[348px] bg-transparent text-black' 
                      onChange={(e) => setQuery(e.currentTarget.value)}
                      />
                      <div className='w-[1.8px] h-[51px] bg-black'></div>
                      <Popover>
                          <PopoverTrigger asChild>
                              <Button
                              // variant={"outline"} this makes rounded and with outline
                              className={cn(
                                "w-[146px]  h-[51px] justify-start text-left font-normal ",
                                !date && "text-muted-foreground"
                                )}
                                >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {date ? format(date, "PPP") : <span className="text-[black]">Date</span>}
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
                      <div className='w-[1.8px] h-[51px] bg-black'></div>
                  <PlatformSearch />
                      <div className='w-[1.8px] h-[51px] bg-black'></div>
                  <TypeSearch />
                  <button 
                  className='h-[51px] w-[146px] bg-[#FFCD00] text-[black] font-[500]'

                  >Search</button>
              </div>
            </section>
          </div>
        </div>

        <hr />

        <h1 className="text-[36px] relative left-52 top-4">Upcoming events</h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4 pt-[40px]">
            {allData.filter((card) => {
              if (query === "") {
                //if query is empty
                return card;
              } else if (card.eventTitle.toLowerCase().includes(query.toLowerCase())) {
                //returns filtered array
                return card;
              }
            }).map((card, key) => (
              <Link href={`/browse/${card._id}`} key={card._id}>
              <Card className="w-[265px]" key={key}>
                <div>
                  <Image src={card.thumbnail} width={265} height={182} alt="" />
                  <CardHeader>
                    <CardDescription>{card.eventTime.substring(0, 10)}</CardDescription>
                    <CardTitle>{card.eventTitle}</CardTitle>
                  </CardHeader>
                </div>
                <CardContent>
                  <p>Type of event: {card.eventType} | Platform: {card.platform}</p>
                </CardContent>
              </Card>
            </Link>
            ))}
          </div>
        </div>
      </form>
    </div>
  )
}

  // allData.filter((card) => {
  //   if (query === "") {
  //     //if query is empty
  //     return card;
  //   } else if (card.eventTitle.toLowerCase().includes(query.toLowerCase())) {
  //     //returns filtered array
  //     return card;
  //   }
  // }).map((card, key) => (
  //   <Link href={`/browse/${card._id}`} key={card._id}>
  //   <Card className="w-[265px]" key={key}>
  //     <div>
  //       <Image src={card.thumbnail} width={265} height={182} alt="" />
  //       <CardHeader>
  //         <CardDescription>{card.eventTime.substring(0, 10)}</CardDescription>
  //         <CardTitle>{card.eventTitle}</CardTitle>
  //       </CardHeader>
  //     </div>
  //     <CardContent>
  //       <p>Type of event: {card.eventType} | Platform: {card.platform}</p>
  //     </CardContent>
  //     {/* <CardContent>
  //       <p>Card Content</p>
  //       </CardContent>
  //       <CardFooter>
  //       <p>Card Footer</p>
  //     </CardFooter> */}
  //   </Card>
  // </Link>
  // ))