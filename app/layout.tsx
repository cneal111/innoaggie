import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import StickyHeader from "@/components/sticky-header"
import Footer from "@/components/footer"
import ScrollIndicator from "@/components/scroll-indicator"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Innovative Agriculture | Small Greens. Bigger Impact.",
  description: "Premium broccoli dehydrated vegetable product for optimal health and wellness.",
    generator: 'v0.dev',
    icons: {
      icon: '/favicon.jpg',
    },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
          <ScrollIndicator />
          <div className="flex min-h-screen flex-col">
            <StickyHeader />
            <main className="flex-1 pt-16">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
