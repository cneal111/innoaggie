"use client"

import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const routes = [
  { href: "/", label: "Home" },
  { href: "/mission", label: "Mission" },
  { href: "/process", label: "Process" },
  { href: "/shop", label: "Shop" },
]

export default function StickyHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const { scrollY } = useScroll()

  // Transform header opacity and backdrop blur based on scroll
  const headerOpacity = useTransform(scrollY, [0, 50], [0, 1])
  const headerBlur = useTransform(scrollY, [0, 50], [0, 8])

  return (
    <motion.header
      className="fixed top-0 z-50 w-full"
      initial={{ y: 0 }}
      style={{
        backdropFilter: `blur(${headerBlur}px)`,
      }}
    >
      <motion.div className="absolute inset-0 bg-white/80" style={{ opacity: headerOpacity }} />

      <div className="container relative flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 z-10">
          <motion.span
            className="text-xl font-bold text-green-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Innovative Agriculture
          </motion.span>
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-6 z-10 text-gray-600">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors relative",
                pathname === route.href ? "text-green-700" : "hover:text-green-700",
              )}
            >
              {route.label}
              {pathname === route.href && (
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-700"
                  layoutId="navbar-indicator"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <motion.button
            className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={() => { window.location.href = 'https://billing.stripe.com/p/login/test_fZuaEXfzh9lUgcN9nt1sQ00' }}
          >
            Subscribers
          </motion.button>
        </nav>

        <motion.div className="md:hidden z-10" whileTap={{ scale: 0.9 }}>
          <Button
            variant="ghost"
            size="icon"
            className="z-10"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className={cn("h-6 w-6", isOpen ? "hidden" : "block")} />
            <X className={cn("h-6 w-6", isOpen ? "block" : "hidden")} />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </motion.div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className={cn(
          "fixed inset-0 z-40 md:hidden overflow-hidden transition-all",
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
        style={{
          background: isOpen ? "rgba(0,0,0,0.97)" : "transparent",
        }}
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "100vh" : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.nav
          className="flex flex-col space-y-4 pb-4 pt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-lg font-medium transition-colors relative text-white",
            pathname === route.href ? "text-green-400" : "hover:text-green-400"
          )}
          onClick={() => setIsOpen(false)}
        >
          {route.label}
        </Link>
          ))}
          <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
        transition={{ delay: isOpen ? routes.length * 0.1 : 0 }}
          >
        <motion.button
          className="bg-green-700 hover:bg-green-800 w-full text-white px-4 py-2 rounded"
          type="button"
          onClick={() => { window.location.href = 'https://billing.stripe.com/p/login/test_fZuaEXfzh9lUgcN9nt1sQ00' }}
        >
          Subscribers
        </motion.button>
          </motion.div>
        </motion.nav>
      </motion.div>
    </motion.header>
  )
}
