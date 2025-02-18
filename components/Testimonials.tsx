"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    quote:
      "After working with various agencies and consultants, it's refreshing to have a partner like Renoir who truly understands our challenges. They've been in our shoes, and it shows in their approach.",
    author: "Sarah Chen",
    title: "VP of Sales",
    company: "Tech Innovators Inc.",
  },
  {
    quote:
      "Renoir's AI-powered prospect matching has revolutionized our sales process. We're now targeting the right companies with precision, significantly boosting our conversion rates.",
    author: "Marcus Rodriguez",
    title: "Sales Director",
    company: "Global Solutions Ltd.",
  },
  {
    quote:
      "The workflow automation and personalized outreach capabilities of Renoir have dramatically increased our team's productivity. We're closing deals faster than ever before.",
    author: "Emily Watson",
    title: "Revenue Operations Manager",
    company: "Growth Dynamics",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-secondary p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center mb-6">
                <Image
                  src={`/testimonial-${index + 1}.jpg`}
                  alt={testimonial.author}
                  width={60}
                  height={60}
                  className="rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.author}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-lg mb-4">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

