import React  from 'react'
import { DatePicker } from '@/components/date-picker'
import { PlatformInput } from '@/components/platform-input'
import { TypeInput } from './type-input'

const SearchBar = () => {
  return (
    <div className='absolute bg-[#AA00FF]'>
        <section className='bg-[#ffffff] relative  bottom-2 right-2'>
            <div className='flex'>
                <input type="text" placeholder='&nbsp; &nbsp; Search by name or tag' className='h-[51px] w-[348px] bg-transparent text-black' />
                    <div className='w-[1.8px] h-[51px] bg-black'></div>
                <DatePicker />
                    <div className='w-[1.8px] h-[51px] bg-black'></div>
                <PlatformInput />
                    <div className='w-[1.8px] h-[51px] bg-black'></div>
                <TypeInput />
                <button className='h-[51px] w-[146px] bg-[#FFCD00] text-[black] font-[500] '>Search</button>
            </div>
        </section>
    </div>
  )
}

export default SearchBar