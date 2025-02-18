import Link from "next/link"
import { Button } from "../components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <Link href="/" className="text-2xl font-bold text-primary">
          Renoir.AI
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="#products" className="text-sm hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="#solutions" className="text-sm hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#resources" className="text-sm hover:text-primary transition-colors">
            Resources
          </Link>
          <Link href="#pricing" className="text-sm hover:text-primary transition-colors"></Link>
        </div>
        <Button>Boost Your Sales Now</Button>
      </nav>
    </header>
  )
}

