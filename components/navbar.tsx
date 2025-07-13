"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const routes = [
  { href: "/", label: "Home" },
  { href: "/mission", label: "Mission" },
  { href: "/process", label: "Process" },
  { href: "/shop", label: "Shop" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-green-700">Innovative Agriculture</span>
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="text-sm font-medium transition-colors hover:text-green-700"
            >
              {route.label}
            </Link>
          ))}
          <Button className="bg-green-700 hover:bg-green-800">Get Updates</Button>
        </nav>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Menu className={cn("h-6 w-6", isOpen ? "hidden" : "block")} />
          <X className={cn("h-6 w-6", isOpen ? "block" : "hidden")} />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile menu */}
      <div className={cn("container md:hidden", isOpen ? "block" : "hidden")}>
        <nav className="flex flex-col space-y-4 pb-4">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="text-sm font-medium transition-colors hover:text-green-700"
              onClick={() => setIsOpen(false)}
            >
              {route.label}
            </Link>
          ))}
          <Button className="bg-green-700 hover:bg-green-800">Get Updates</Button>
        </nav>
      </div>
    </header>
  )
}
