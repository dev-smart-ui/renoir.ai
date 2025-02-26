"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Slack from "./Slack_icon_2019.svg.png"
import SalesForce from "./Salesforce.com_logo.svg.png"
import HubSpot from "./HubSpot_icon.png"
import Calendly from "./Calendly_icon.png"
import Linkedin from "./Linkedin_icon.png"
import Outlook from "./Outlook_icon.png"
import After from "./After_image.webp"
import styles from "./BeforeAfter.module.scss"

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
            <div className="grid grid-cols-3 row-icons gap-6">
              <div className="relative w-16 h-16">
                <Image
                  src={HubSpot}
                  alt="HubSpot icon"
                  className="object-contain"
                />
              </div>
              <div className="relative w-16 h-16">
                <Image
                  src={SalesForce}
                  alt="Salesforce logo"
                  className="object-contain"
                />
              </div>
              <div className="relative w-16 h-16">
                <Image
                  src={Slack}
                  alt="Slack logo"
                  className="object-contain"
                />
              </div>
              <div className="relative w-16 h-16">
                <Image
                  src={Calendly}
                  alt="Calendly logo"  
                  className="object-contain"
                />
              </div>
              <div className="relative w-16 h-16">
                <Image
                  src={Linkedin}
                  alt="Linkedin logo"
                  className="object-contain"
                />
              </div>
              <div className="relative w-16 h-16">
                <Image
                  src={Outlook}
                  alt="Outlook logo" 
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
            <div className="grid grid-cols-1 gap-6">
              <Image
                  src={After}
                  alt="List logos"
                  className={styles.after}
                  width={400}
                  height={400}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

