"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ParallaxHeroProps {
  title: string
  highlightedTitle: string
  description: string
  primaryButtonText: string
  primaryButtonLink: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
  imageSrc?: string
  videoSrc?: string
  imageAlt: string
}

export default function ParallaxHero({
  title,
  highlightedTitle,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  imageSrc,
  videoSrc,
  imageAlt,
}: ParallaxHeroProps) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  // Text animations
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <div ref={ref} className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-green-50">
      <motion.div className="absolute inset-0 z-0" style={{ y, opacity, scale }}>
        <div className="relative h-full w-full">
          <Image src={imageSrc || "/green_interact-2.mp4"} alt={imageAlt} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-green-900/20" />
        </div>
      </motion.div>

      <div className="container relative z-10 px-4 py-12 md:px-6 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col justify-center">
            <motion.h1
              className="text-4xl font-bold tracking-tight text-green-500 md:text-5xl lg:text-6xl"
              initial="hidden"
              animate="visible"
              variants={titleVariants}
            >
              {title} <br />
              <span className="text-green-800">{highlightedTitle}</span>
            </motion.h1>

            <motion.p
              className="mt-4 max-w-md text-lg text-white"
              initial="hidden"
              animate="visible"
              variants={descriptionVariants}
            >
              {description}
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial="hidden"
              animate="visible"
              variants={buttonVariants}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  className="bg-green-700 hover:bg-green-800"
                >
                  <Link href={primaryButtonLink}>
                    {primaryButtonText} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>

              {secondaryButtonText && secondaryButtonLink && (
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                  >
                    <Link href={secondaryButtonLink}>{secondaryButtonText}</Link>
                  </Button>
                </motion.div>
              )}
            </motion.div>
          </div>

          <div className="hidden md:flex md:items-center md:justify-center">
            <motion.div
              className="relative h-[400px] w-[400px] overflow-hidden rounded-full"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <Image
                // src="/placeholder.svg?height=800&width=800"
                src="/inno_logo.png"
                alt="Innovative Agriculture Logo"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
