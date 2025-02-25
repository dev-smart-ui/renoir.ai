 
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import type React from "react" // Added import for React
import { Header } from "@/components/Header"
import { Footer } from "@/components/FooterSection/FooterSection"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Renoir.AI - AI-Powered Sales & Revenue Automation",
  description: "Streamline growth, optimize efficiency, and close more deals with AI-driven workflows.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     
      <body className={inter.className}>   <Header/> <main> {children} </main><Footer/></body>
    </html>
  )
}
 