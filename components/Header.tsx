"use client"

import { Button } from "@/components/ui/button"

export function Header() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md" id="top">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <button onClick={() => scrollToSection("top")} className="text-2xl font-bold text-primary">
          Renoir.AI
        </button>
        <div className="hidden md:flex space-x-6">
          <button onClick={() => scrollToSection("products")} className="text-sm hover:text-primary transition-colors">
            Home
          </button>
          <button onClick={() => scrollToSection("about")} className="text-sm hover:text-primary transition-colors">
            About
          </button>
          <button onClick={() => scrollToSection("resources")} className="text-sm hover:text-primary transition-colors">
            Resources
          </button>
        </div>
        <Button>Boost Your Sales Now</Button>
      </nav>
    </header>
  )
}

