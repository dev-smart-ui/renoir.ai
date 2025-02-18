"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function About() {
  return (
    <section id="about" className="py-20 bg-secondary scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Renoir: Sales & Revenue Enablement, Built for Scale</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A boutique go-to-market (GTM) consultancy specializing in AI-driven sales automation, revenue strategy, and
            deep sales enablement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
            <p className="text-muted-foreground mb-6">
              Unlike traditional consultants or agencies, we bring firsthand CRO experience—scaling companies from zero
              to exit—with a proven track record in building, optimizing, and enabling high-performing sales teams.
            </p>
            <p className="text-muted-foreground mb-6">
              We don't just design strategies—we equip sales and revenue teams with the right tools, automation, and
              insights to execute at scale. From sales process refinement and data-driven prospecting to intelligent
              deal acceleration, Renoir ensures every part of your GTM motion is enabled, optimized, and built to win.
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Learn More</Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">Our Expertise</h3>
            <p className="text-muted-foreground mb-6">
              With 15+ years of hands-on GTM and revenue leadership experience, Renoir was built to fill a critical gap
              in the market: real, execution-focused expertise that drives results.
            </p>
            <p className="text-muted-foreground mb-6">
              Unlike traditional consultants who advise from the sidelines, we roll up our sleeves and work
              shoulder-to-shoulder with our clients—applying proven GTM frameworks, AI-driven prospecting, and revenue
              automation to accelerate sales and scale efficiently.
            </p>
            <p className="text-muted-foreground mb-6">
              With experience leading GTM at companies like Crexi, Hemlane, and Pacaso, and advising many others, we
              combine strategic insight with tactical execution, ensuring your sales and revenue teams are equipped to
              scale efficiently. We don't just consult—we build, execute, and optimize so you can hit your next growth
              milestone faster.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

