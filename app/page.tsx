import { Header } from "../components/Header"
import { Hero } from "../components/HeroSection"
import { BeforeAfter } from "../components/BeforeAfter/BeforeAfter"
import { ICP } from "../components/ICP"
import { Features } from "../components/FeaturesList"
import { About } from "../components/About"
import { Testimonials } from "../components/TestimonialsSection/TestimonialSection"
import { CTASection } from "../components/CTASection"
import { Footer } from "../components/FooterSection/FooterSection"

export default function Home() {
  return (
    <main id="top" className="min-h-screen">
      <Header />
      <Hero />
      <ICP />
      <BeforeAfter />
      <Features />
      <About />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  )
}

