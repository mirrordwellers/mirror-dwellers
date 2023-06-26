"use client"

import React from 'react'
import { DatePicker } from '@/components/date-picker'
import { TypeInput } from '@/components/type-input'
import { PlatformInput } from '@/components/platform-input'
import { useState, useEffect } from 'react'

export default function page() {

  // the functions and states are used for uploading the data for the database
  // a node app has to be configurated to all this stuff work

  const [thumbnail, setThumbnail] = useState("")
  const [title, setTitle] = useState('')
  const [eventDate, setEventDate] = useState('')

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
      eventTime: eventDate
    })
  }).then((res) => res.json()).then((data) => {console.log(data)})
  window.location.reload()
}

function getImage() {
  fetch("http://localhost:5000/get-image", {
    method: "GET",
  }).then((res) => res.json()).then((data) => {console.log(data), setAllData(data.data)})
}

useEffect(() => {
  getImage()
}, [])



  return (
    <div className='flex justify-center'>
      <div className=' bg-[#AA00FF] w-[400px] flex h-screen justify-center items-center'>
        <section className='grid '>
          <h1 className='text-center font-[500] text-[32px] mb-8'>Create your event</h1>
          <span className='text-[18px] mb-4 mt-4'>Choose the event cover</span>
          <input type="file" />
          <span className='text-[18px] mb-4 mt-4'>Choose the event date</span>
          <DatePicker />
          <span className='text-[18px] mb-4 mt-4'>Choose the event title</span>
          <input type="text" placeholder='&nbsp; Event title' className='h-10' />
          <span className='text-[18px] mb-4 mt-4'>Choose the event type</span>
          <TypeInput />
          <span className='text-[18px] mb-4 mt-4'>Choose the event Platform</span>
          <PlatformInput />
      
          <button className='h-[51px] w-[146px] bg-[#FFCD00] text-[black] font-[500] '>POST EVENT</button>
        </section>
      </div>
    </div>
  )
}
