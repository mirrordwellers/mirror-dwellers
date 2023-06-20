import Link from "next/link"

import SiteHero from "@/components/site-hero"

export default function IndexPage() {
  return (
    <section className="overflow-hidden">
      <SiteHero />
      <div className="h-screen">
        <h1>Hello World!</h1>
        
      </div>
      <SiteHero />

    </section>
  )
}
