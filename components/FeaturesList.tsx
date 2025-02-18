"use client"

import { motion } from "framer-motion"
import { Brain, MessageSquare, PieChart, TrendingUp } from "lucide-react"

const features = [
  {
    title: "Automated Lead Qualification",
    description: "AI-driven insights to prioritize the best opportunities",
    icon: Brain,
  },
  {
    title: "Personalized Outreach",
    description: "Hyper-targeted messaging at scale",
    icon: MessageSquare,
  },
  {
    title: "Pipeline Optimization",
    description: "Data-backed recommendations for closing more deals faster",
    icon: TrendingUp,
  },
  {
    title: "Revenue Intelligence",
    description: "Real-time analytics for predictable growth",
    icon: PieChart,
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-background p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

