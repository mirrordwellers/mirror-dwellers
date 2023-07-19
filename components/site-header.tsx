import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

import logo from "../images/logo.png"

export function SiteHeader() {
  return (
    <nav className="p-4 bg-black">
      <div className="grid items-center grid-cols-[auto_1fr_auto] gap-3 text-lg p-0 m-0 lg:grid-cols-[1fr_auto_auto]">
        <Link href="/">
          <Image src={logo} alt="logo" width={50} height={50} quality={35} />
        </Link>
        <h1 className="text-sm font-medium text-center lg:hidden">
          What are you posting?
        </h1>
        <Button asChild variant="outline" size="sm">
          <Link href="/postevent">Create</Link>
        </Button>
      </div>
    </nav>
  )
}
