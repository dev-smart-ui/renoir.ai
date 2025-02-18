"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"

const visualItems = [
  { src: "/inbox.png", alt: "AI-powered Inbox" },
  { src: "/leads.png", alt: "Lead Management" },
  { src: "/analytics.png", alt: "Revenue Analytics" },
]

export function DynamicVisuals() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % visualItems.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-[600px]">
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute top-0 left-0 w-full h-full"
        >
          <Image
            src={visualItems[currentIndex].src || "/placeholder.svg"}
            alt={visualItems[currentIndex].alt}
            layout="fill"
            objectFit="contain"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

