"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Package, Leaf, Shield, Award, Zap, Droplets, Sun, FlaskRound } from "lucide-react"

const iconMap = {
  package: Package,
  leaf: Leaf,
  shield: Shield,
  award: Award,
  zap: Zap,
  droplets: Droplets,
  sun: Sun,
  flask: FlaskRound,
}

interface ProcessStepProps {
  iconName: keyof typeof iconMap
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  index: number
  reverse?: boolean
}

export default function ProcessStep({
  iconName,
  title,
  description,
  imageSrc,
  imageAlt,
  index,
  reverse = false,
}: ProcessStepProps) {
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const Icon = iconMap[iconName]

  return (
    <motion.div
      ref={ref}
      className="grid gap-8 md:grid-cols-2 md:gap-12"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <div className={`flex flex-col justify-center ${reverse ? "md:order-2" : ""}`}>
        <motion.div
          className="flex items-center"
          whileHover={{ x: 5 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <motion.div
            className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700"
            animate={{
              scale: isHovered ? 1.1 : 1,
              backgroundColor: isHovered ? "#bbf7d0" : "#dcfce7",
            }}
          >
            <Icon className="h-6 w-6" />
          </motion.div>
          <motion.h2
            className="ml-4 text-2xl font-bold text-green-800"
            animate={{
              x: isHovered ? 5 : 0,
              color: isHovered ? "#15803d" : "#166534",
            }}
          >
            {title}
          </motion.h2>
        </motion.div>
        <motion.p
          className="mt-4 text-gray-600"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
        >
          {description}
        </motion.p>
      </div>

      <div className={`flex items-center justify-center ${reverse ? "md:order-1" : ""}`}>
        <motion.div
          className="relative h-[250px] w-full overflow-hidden rounded-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
        >
          <motion.div whileHover={{ scale: 1.03 }} className="h-full w-full">
            {/* <Image
              src={imageSrc || ""} //placeholder.svg?height=500&width=500
              alt={imageAlt}
              fill
              className="object-cover transition-transform duration-700"
              style={{
                // transform: isHovered ? "scale(1.05)" : "scale(1)",
              }}
            /> */}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
