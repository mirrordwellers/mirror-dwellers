import * as React from "react"

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

export function TypeInput() {
  return (
    <Select>
      <SelectTrigger className="w-[180px] h-[51px] text-[black]">
        <span><Grid /></span>
        <SelectValue placeholder="Type of event" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Events</SelectLabel>
          <SelectItem value="Any">Any</SelectItem>
          <SelectItem value="18+">18+</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
