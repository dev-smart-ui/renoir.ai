import Link from "next/link"
import Image from "next/image"
import { Facebook, X, LinkedinIcon as LinkedIn } from "lucide-react"
import styles from "./FooterSection.module.scss"


const Twitter = () => (
  <svg 
    width="300" 
    height="300.251" 
    viewBox="0 0 300 300.251" 
    xmlns="http://www.w3.org/2000/svg"
    className={styles.icon}
  >
    <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66"/>
  </svg>
);


export function Footer() {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-muted-foreground hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                     
              <Twitter/>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <LinkedIn />
              </Link>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">Stay updated with our latest news and offers.</p>
            <form className="flex">
              <input type="email" placeholder="Enter your email" className="flex-grow p-2 rounded-l-md" />
              <button type="submit" className="bg-primary text-primary-foreground p-2 rounded-r-md">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-muted-foreground/20 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Renoir.AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

