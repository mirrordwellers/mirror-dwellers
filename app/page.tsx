import Link from "next/link"

import SiteHero from "@/components/site-hero"
import SearchBar from "@/components/search-bar"

export default function IndexPage() {
  return (
    <section className="overflow-hidden">
      <SiteHero />
      <div className="h-screen">
        <div className="flex justify-center pt-8">
          <SearchBar />
        </div>
      </div>
      <SiteHero />

    </section>
  )
}
