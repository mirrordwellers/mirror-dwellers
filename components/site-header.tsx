import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"


export function SiteHeader() {
  return (
    <header className="fixed z-40 w-full ">
      <div className="flex h-16 items-center sm:justify-between sm:space-x-0">
        <div className="flex absolute left-8 gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-[300] text-[#FFCD00]">V-REJECTS</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4 pr-8">
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5 text-[#FFCD00]" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
