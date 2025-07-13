"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  triggerOnce?: boolean
  parallax?: boolean
  parallaxSpeed?: number
}

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
  triggerOnce = true,
  parallax = false,
  parallaxSpeed = 0.2,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: triggerOnce, amount: 0.2 })

  // For parallax effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], parallax ? [100 * parallaxSpeed, -100 * parallaxSpeed] : [0, 0])

  const springY = useSpring(y, { stiffness: 100, damping: 30 })

  // Animation variants based on direction
  const getVariants = () => {
    const distance = 50

    switch (direction) {
      case "up":
        return {
          hidden: { y: distance, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }
      case "down":
        return {
          hidden: { y: -distance, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }
      case "left":
        return {
          hidden: { x: distance, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }
      case "right":
        return {
          hidden: { x: -distance, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }
      case "none":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }
    }
  }

  return (
    <motion.div
      ref={ref}
      className={cn("relative overflow-hidden", className)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={getVariants()}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.22, 1, 0.36, 1], // Custom easing similar to Apple's
      }}
      style={parallax ? { y: springY } : undefined}
    >
      {children}
    </motion.div>
  )
}
