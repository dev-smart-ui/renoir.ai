"use client"

import { motion } from "framer-motion"
import { Users, TrendingUp, Rocket } from "lucide-react"

const useCases = [
  {
    title: "Sales Teams",
    description: "Automate outreach and focus on closing deals",
    icon: Users,
  },
  {
    title: "Revenue Leaders",
    description: "Make data-driven decisions for predictable growth",
    icon: TrendingUp,
  },
  {
    title: "Founders",
    description: "Scale go-to-market efforts with AI-powered insights",
    icon: Rocket,
  },
]

export function UseCases() {
  return (
    <section id="use-cases" className="py-20 bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Who It's For</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              className="bg-background p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <useCase.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
              <p className="text-muted-foreground">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

