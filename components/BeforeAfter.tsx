"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function BeforeAfter() {
  return (
    <section className="py-20 bg-[#0B1527] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Reduce Tech Stack Costs by Up to 70%</h2>
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
          {/* Left side */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold mb-4">Before: Software Sprawl</h3>
            <p className="text-xl text-gray-400 mb-12">
              Managing multiple subscriptions, juggling different tools, and watching costs spiral out of control.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div className="relative w-16 h-16">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MJybTTu1tWAKcatgHWJiD1gXz0QLMZ.png"
                  alt="Integration tools"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-16 h-16">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MJybTTu1tWAKcatgHWJiD1gXz0QLMZ.png"
                  alt="Salesforce logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-16 h-16">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MJybTTu1tWAKcatgHWJiD1gXz0QLMZ.png"
                  alt="Slack logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-16 h-16">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MJybTTu1tWAKcatgHWJiD1gXz0QLMZ.png"
                  alt="LinkedIn logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-16 h-16">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MJybTTu1tWAKcatgHWJiD1gXz0QLMZ.png"
                  alt="Outlook logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-16 h-16">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MJybTTu1tWAKcatgHWJiD1gXz0QLMZ.png"
                  alt="Google logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Right side */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-4">After: All-in-One Solution</h3>
            <p className="text-xl text-gray-400 mb-12">
              One powerful platform, one subscription, massive cost savings. Replace your entire sales tech stack with
              Renoir.
            </p>
            <div className="grid grid-cols-4 gap-6">
              {Array.from({ length: 16 }).map((_, index) => (
                <div key={index} className="relative w-16 h-16">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MJybTTu1tWAKcatgHWJiD1gXz0QLMZ.png"
                    alt={`Tool ${index + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

