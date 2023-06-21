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

import { MapPin } from 'lucide-react'

export function PlatformInput() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]  h-[51px] text-[black] ouline-none">
        <span className="-mr-8"><MapPin /></span>
        <SelectValue placeholder="Platform" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Platforms</SelectLabel>
          <SelectItem value="PC">PC</SelectItem>
          <SelectItem value="Quest">Quest</SelectItem>
          <SelectItem value="Any">Both</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
