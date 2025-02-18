import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { BeforeAfter } from "@/components/BeforeAfter"
import { ICP } from "@/components/ICP"
import { Features } from "@/components/Features"
import { Testimonials } from "@/components/Testimonials"
import { CTA } from "@/components/CTA"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ICP />
      <BeforeAfter />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}

