import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

// const homeURL = () => window.location.href
export function SiteHeader() {
  return (
    <header className="w-full mb-12 bg-black">
      <div className="flex items-center justify-between h-16">
        <div className="flex">
          <Link href="/" className="flex items-center">
            <span className="inline-block font-semibold text-[#FFCD00]">
              Virtual Rejects
            </span>
          </Link>
        </div>
        <div className="flex items-center justify-end">
          <div className="flex items-center">
            <Link href="/postevent" className="text-[#FFCD00] font-semibold">
              Post Event
            </Link>
          </div>
        </div>
        <hr />
      </div>
    </header>
  )
}
