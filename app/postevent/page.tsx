import React from 'react'
import { DatePicker } from '@/components/date-picker'
import { TypeInput } from '@/components/type-input'
import { PlatformInput } from '@/components/platform-input'

export default function page() {
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
          <input type="text" placeholder='Event title' className='h-10' />
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
