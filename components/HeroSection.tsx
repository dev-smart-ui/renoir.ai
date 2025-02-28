"use client"

import { motion } from "framer-motion"
import { MultiStepForm } from "./MultiStepForm/MultiStepForm"
import { WorkflowVisualization } from "./WorkflowVisualization"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0B1527] overflow-hidden py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-[#7945f5]">
              Designed by a CRO, Powered by AI—GTM That Works
            </h1>
            <p className="text-xl mb-8 text-gray-300">Built for Sales Leaders, Engineered for Revenue Growth.</p>
            <MultiStepForm />
          </motion.div>
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <WorkflowVisualization />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

