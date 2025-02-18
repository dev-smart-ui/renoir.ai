"use client"

import { motion } from "framer-motion"
import { Target, Users, Building2, TrendingUp, Lightbulb } from "lucide-react"
import { Button } from "./ui/button"

const icpFeatures = [
  {
    icon: Lightbulb,
    title: "Discovery and Assessment",
    description:
      "We engage key stakeholders to refine your ICP, assess sales processes, and uncover growth opportunities, ensuring a strong foundation before applying AI-driven prospecting and automation.",
  },
  {
    icon: Target,
    title: "AI-Powered Prospect Matching",
    description: "AI Agents identify companies that perfectly align with your ideal customer profile",
  },
  {
    icon: Users,
    title: "Intelligent Decision Maker Mapping",
    description: "AI Agents pinpoint and prioritize key decision makers within target accounts",
  },
  {
    icon: Building2,
    title: "Deep Company Insights",
    description: "AI Agents analyze company size, industry, and technology usage for strategic targeting",
  },
  {
    icon: TrendingUp,
    title: "Predictive Growth Scoring",
    description: "AI Agents score prospects based on their likelihood to convert and potential value",
  },
]

export function ICP() {
  return (
    <section id="icp" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Pinpoint Your Perfect Prospects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leverage AI Agents to identify and engage high-value targets with precision, dramatically boosting your
            conversion rates and ROI
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {icpFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background p-6 rounded-lg shadow-lg"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Activate AI-Powered Targeting
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            Harness the power of AI Agents to boost your sales efficiency by up to 40% and skyrocket your ROI
          </p>
        </div>
      </div>
    </section>
  )
}

