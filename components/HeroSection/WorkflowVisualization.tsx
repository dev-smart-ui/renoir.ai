"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import { SliderContent } from "@/components/HeroSection/SliderContent/SliderContent"

import img1 from './img/heroImg1.png'
import img2 from './img/heroImg2.png'
import img3 from './img/heroImg3.png'
import img4 from './img/heroImg4.png'
import img5 from './img/heroImg5.png'

export function WorkflowVisualization() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const slides = [img1, img2, img3, img4, img5]

  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const startAutoSlide = () => {
    return setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
  }

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = startAutoSlide()
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isHovered])

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    if (!isHovered) {
      intervalRef.current = startAutoSlide()
    }
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    resetInterval()
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    resetInterval()
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    resetInterval()
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div className="bg-[#0B1527] p-4 md:p-8 rounded-xl overflow-hidden lg:w-1/2 flex flex-col items-center"
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
    >
      <SliderContent currentSlide={currentSlide} slides={slides} />

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center gap-5 md:gap-10 mt-8"
      >
        <button
          onClick={prevSlide}
          className="bg-[#1F2953]/80 p-2 rounded-full hover:bg-[#1F2953] transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-[#6D7DFF]" />
        </button>

        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-6 md:w-11 h-1 rounded-full transition-all ${
                currentSlide === index ? 'bg-[#6D7DFF]' : 'bg-[#1F2953]'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="bg-[#1F2953]/80 p-2 rounded-full hover:bg-[#1F2953] transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-[#6D7DFF]" />
        </button>
      </motion.div>
    </div>
  )
}