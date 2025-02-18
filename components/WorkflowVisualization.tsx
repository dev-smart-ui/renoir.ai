"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Calendar, User, Linkedin, Search } from "lucide-react"

export function WorkflowVisualization() {
  return (
    <div className="bg-[#0B1527] p-8 rounded-xl relative overflow-hidden">
      {/* Discovery step */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="flex flex-col items-center group">
          <div className="w-12 h-12 rounded-full bg-[#1a2b4b] flex items-center justify-center">
            <Search className="w-6 h-6 text-[#4FFFB0]" />
          </div>
          <span className="text-white text-sm mt-2">Identify ICP</span>
          <div className="absolute invisible group-hover:visible bg-white text-black text-xs p-2 rounded mt-16 z-10">
            Discover and Identify Ideal Customer Profile
          </div>
        </div>
      </motion.div>

      {/* Ready to buy path */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <div className="flex items-center gap-8 relative">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#1a2b4b] flex items-center justify-center">
              <User className="w-6 h-6 text-[#4FFFB0]" />
            </div>
            <span className="text-white text-sm mt-2">Ready to buy</span>
          </div>

          {/* Connection line with items */}
          <div className="flex-1 flex items-center justify-between relative">
            <div className="absolute top-1/2 left-0 right-0 border-t-2 border-dotted border-[#4FFFB0]/30" />

            {/* Workflow items */}
            {[
              { icon: Mail, delay: 0.1 },
              { icon: Phone, delay: 0.2 },
              { icon: Mail, delay: 0.3 },
              { icon: Linkedin, delay: 0.4 },
              { icon: Phone, delay: 0.5 },
              { icon: Calendar, delay: 0.6 },
            ].map((Item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: Item.delay }}
                className="w-10 h-10 rounded-full bg-[#1a2b4b] flex items-center justify-center z-10"
              >
                <Item.icon className="w-5 h-5 text-[#4FFFB0]" />
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#1a2b4b] flex items-center justify-center">
              <Calendar className="w-6 h-6 text-[#4FFFB0]" />
            </div>
            <span className="text-white text-sm mt-2">Meeting booked</span>
          </div>
        </div>
      </motion.div>

      {/* Discovery step for No Interest path */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8"
      >
        <div className="flex flex-col items-center group">
          <div className="w-12 h-12 rounded-full bg-[#1a2b4b] flex items-center justify-center">
            <Search className="w-6 h-6 text-[#4FFFB0]" />
          </div>
          <span className="text-white text-sm mt-2">Identify ICP</span>
          <div className="absolute invisible group-hover:visible bg-white text-black text-xs p-2 rounded mt-16 z-10">
            Discover and Identify Ideal Customer Profile
          </div>
        </div>
      </motion.div>

      {/* No Interest path */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="flex items-center gap-8">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#1a2b4b] flex items-center justify-center">
              <User className="w-6 h-6 text-[#4FFFB0]" />
            </div>
            <span className="text-white text-sm mt-2">No Interest</span>
          </div>

          <div className="flex-1 relative">
            <div className="absolute top-1/2 left-0 right-0 border-t-2 border-dotted border-[#4FFFB0]/30" />
            <div className="flex justify-between">
              {[Mail, Mail].map((Icon, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="w-10 h-10 rounded-full bg-[#1a2b4b] flex items-center justify-center z-10"
                >
                  <Icon className="w-5 h-5 text-[#4FFFB0]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

