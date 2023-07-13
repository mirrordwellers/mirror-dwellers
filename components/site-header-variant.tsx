import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

// const homeURL = () => window.location.href
export function SiteHeaderVariant() {
  return (
    <header className="fixed z-40 w-full ">
      <div className="flex items-center h-16 sm:justify-between sm:space-x-0">
        <div className="absolute flex gap-6 left-8 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-semibold text-[#FFCD00]">
              V-REJECTS
            </span>
          </Link>
        </div>
        <div className="flex items-center justify-end flex-1 pr-8 space-x-4">
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
                <Icons.discord className="h-5 w-5 text-[#FFCD00]" />
                <span className="sr-only">Discord</span>
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
