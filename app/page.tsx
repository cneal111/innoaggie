import Link from "next/link"
import { Leaf, Shield, Award, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import ParallaxHero from "@/components/parallax-hero"
import AnimatedSection from "@/components/animated-section"
import InteractiveCard from "@/components/interactive-card"
import NewsletterSignup from "@/components/newsletter-signup"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <ParallaxHero
        title="Small Greens."
        highlightedTitle="Bigger Impact."
        description="Our premium broccoli dehydrated vegetable product delivers concentrated nutrition for optimal health and wellness."
        primaryButtonText="Learn More"
        primaryButtonLink="/process"
        secondaryButtonText="View Products"
        secondaryButtonLink="/shop"
        // imageSrc="/placeholder.svg?height=1200&width=1200"
        imageAlt="Broccoli microgreen dehydrated vegetable capsule bottle"
      />

      {/* Benefits Section */}
      <section className="bg-white py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-green-800 md:text-4xl">
              The Power of Broccoli Microgreens
            </h2>
            <p className="mt-4 text-gray-600">
              Packed with essential nutrients and bioactive compounds that support your health journey.
            </p>
          </AnimatedSection>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <InteractiveCard
              iconName="leaf"
              title="Nutrient Dense"
              description="Up to 40x more nutrients than mature broccoli, packed with vitamins and minerals."
            />
            <InteractiveCard
              iconName="shield"
              title="Antioxidant Rich"
              description="Contains powerful antioxidants that help protect cells from damage."
            />
            <InteractiveCard
              iconName="award"
              title="Pure Quality"
              description="Grown in controlled environments without pesticides or harmful chemicals."
            />
            <InteractiveCard
              iconName="zap"
              title="Bioavailable"
              description="Easily absorbed by your body for maximum health benefits."
            />
          </div>
        </div>
      </section>

      {/* Process Preview Section */}
      <section className="bg-green-50 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <AnimatedSection className="flex items-center justify-center" parallax parallaxSpeed={0.1}>
              <div className="relative h-full w-full overflow-hidden rounded-lg md:h-full">
                <img
                  // src="/placeholder.svg?height=800&width=800"
                  src="/product_bottle-4.png?height=800&width=800"
                  // alt="Our growing process"
                  className="h-full w-full object-cover"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection className="flex flex-col justify-center" direction="right">
              <h2 className="text-3xl font-bold tracking-tight text-green-800 md:text-4xl">From Seed to Capsule</h2>
              <p className="mt-4 text-gray-600">
                We carefully nurture our vegetables in controlled environments to ensure maximum nutrient
                density and purity.
              </p>
              <ul className="mt-6 space-y-2">
                <li className="flex items-start">
                  <span className="mr-3 rounded-full bg-green-700 p-1 text-white">1</span>
                  <span className="text-gray-600">Premium seed selection</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 rounded-full bg-green-700 p-1 text-white">2</span>
                  <span className="text-gray-600">Controlled organic growing environment</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 rounded-full bg-green-700 p-1 text-white">3</span>
                  <span className="text-gray-600">Harvested at peak nutrient density</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 rounded-full bg-green-700 p-1 text-white">4</span>
                  <span className="text-gray-600">Gentle processing to preserve nutrients</span>
                </li>
              </ul>
              <div className="mt-8">
                <Button asChild className="bg-green-700 hover:bg-green-800">
                  <Link href="/process">View Our Process</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-white py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-green-800 md:text-4xl">Stay Updated</h2>
            <p className="mt-4 text-gray-600">
              Join our newsletter to receive updates on product launches, health tips, and other exclusives.
            </p>
            <div className="mt-8">
              <NewsletterSignup />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
