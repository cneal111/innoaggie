"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Leaf, Shield, Award, Zap } from "lucide-react"

const iconMap = {
  leaf: Leaf,
  shield: Shield,
  award: Award,
  zap: Zap
}

interface InteractiveCardProps {
  iconName: keyof typeof iconMap
  title: string
  description: string
  className?: string
}

export default function InteractiveCard({ iconName, title, description, className }: InteractiveCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const MappedIcon = iconMap[iconName]

  return (
    <motion.div
      className={cn("relative overflow-hidden rounded-xl border bg-white p-6 shadow-sm transition-all", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        y: -5,
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.3 },
      }}
    >
      <motion.div
        className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-green-100 opacity-0"
        animate={{
          scale: isHovered ? 1.2 : 1,
          opacity: isHovered ? 0.5 : 0,
        }}
        transition={{ duration: 0.5 }}
      />

      <motion.div
        animate={{
          y: isHovered ? -5 : 0,
          color: isHovered ? "#15803d" : "#000000",
        }}
        transition={{ duration: 0.3 }}
      >
        <MappedIcon className="h-8 w-8 text-green-700" />
      </motion.div>

      <motion.h3
        className="mt-4 text-xl font-bold"
        animate={{
          y: isHovered ? -2 : 0,
          color: isHovered ? "#15803d" : "#000000",
        }}
        transition={{ duration: 0.3 }}
      >
        {title}
      </motion.h3>

      <motion.p
        className="mt-2 text-gray-600"
        animate={{
          y: isHovered ? -2 : 0,
        }}
        transition={{ duration: 0.3, delay: 0.05 }}
      >
        {description}
      </motion.p>
    </motion.div>
  )
}
