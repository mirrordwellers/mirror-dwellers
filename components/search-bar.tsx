import React, { useState } from 'react'
import { DatePicker } from '@/components/date-picker'
import { PlatformInput } from '@/components/platform-input'
import { TypeInput } from './type-input'

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

const SearchBar = () => {
  
const [searchInput, setSearchInput] = useState('')
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
    <div className='absolute bg-[#AA00FF]'>
        <section className='bg-[#ffffff] relative  bottom-2 right-2'>
            <div className='flex'>
                <input 
                    type="text" 
                    placeholder='&nbsp; &nbsp; Search by name or tag' 
                    className='h-[51px] w-[348px] bg-transparent text-black' 
                    onChange={(e) => setSearchInput(e.currentTarget.value)}
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
                <button className='h-[51px] w-[146px] bg-[#FFCD00] text-[black] font-[500]'>Search</button>
            </div>
        </section>
    </div>
  )
}

export default SearchBar

// {allData.map((card, key) => (
//   <Link href={`/browse/${card._id}`} key={card._id}>
//       <Card className="w-[265px]" key={key}>
//         <div>
//           <Image src={card.thumbnail} width={265} height={182} alt="" />
//           <CardHeader>
//             <CardDescription>{card.eventTime.substring(0, 10)}</CardDescription>
//             <CardTitle>{card.eventTitle}</CardTitle>
//           </CardHeader>
//         </div>
//         <CardContent>
//           <p>Type of event: {card.eventType} | Platform: {card.platform}</p>
//         </CardContent>
//         {/* <CardContent>
//           <p>Card Content</p>
//           </CardContent>
//           <CardFooter>
//           <p>Card Footer</p>
//         </CardFooter> */}
//       </Card>
//     </Link>
//   ))}