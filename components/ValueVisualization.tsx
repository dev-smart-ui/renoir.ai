"use client"

import { motion } from "framer-motion"

const metrics = [
  { label: "Increase in Sales", value: "37%" },
  { label: "Time Saved", value: "5.2 hrs/day" },
  { label: "ROI", value: "312%" },
  { label: "Lead Conversion", value: "+41%" },
]

export function ValueVisualization() {
  return (
    <div className="grid grid-cols-2 gap-6">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.label}
          className="bg-white rounded-lg shadow-lg p-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <motion.h3
            className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          >
            {metric.value}
          </motion.h3>
          <p className="text-muted-foreground">{metric.label}</p>
        </motion.div>
      ))}
    </div>
  )
}

