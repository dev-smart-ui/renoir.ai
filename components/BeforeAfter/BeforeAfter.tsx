"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Before from "./img/beforeImage.png"
import After from "./img/afterImage.png"
import styles from "./BeforeAfter.module.scss"

export function BeforeAfter() {
  return (
    <section className="py-20 bg-[#0B1527] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Reduce Tech Stack Costs by Up to 70%</h2>
        <div className="flex flex-col lg:flex-row justify-between items-stretch gap-16">
          {/* Left side */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{opacity: 0, x: -50}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.5}}

            style={{
              borderRadius: '24px',
              border: '1px solid #A07DFF',
              position: 'relative',
              minHeight: '460px'
            }}
          >
            <h3 className="text-3xl font-bold mb-4 text-left w-full pl-[32px] pr-[32px] pt-[32px]">Before: Software
              Sprawl</h3>
            <p className="text-xl text-gray-400 mb-12 pl-[32px] pr-[32px]">
              Managing multiple subscriptions, juggling different tools, and watching costs spiral out of control.
            </p>
            <div className="absolute bottom-0 right-0">
              <Image
                src={Before}
                alt="List logos"
                className={styles.after}
                width={560}
                height={260}
              />
            </div>

          </motion.div>

          {/* Right side */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              textAlign: 'left',
              padding: '32px',
              borderRadius: '24px',
              background: 'linear-gradient(to right, #1C2152, #14183F)',
              border: '1px solid #5F28F5',
              boxShadow: '0px 0px 10px 3px rgba(96, 164, 250, 0.32)',
            }}
          >
            <h3 className="text-3xl font-bold mb-4 text-left w-full">After: All-in-One Solution</h3>
            <p className="text-xl text-gray-400 mb-12">
              One powerful platform, one subscription, massive cost savings. Replace your entire sales tech stack with
              Renoir.
            </p>
            <div className="grid grid-cols-1 gap-6">
              <Image
                  src={After}
                  alt="List logos"
                  className={styles.after}
                  width={600}
                  height={360}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

