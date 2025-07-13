import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import AnimatedSection from "@/components/animated-section"

export default function MissionPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-green-50 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-green-800 md:text-5xl">Our Mission</h1>
            <p className="mt-4 text-lg text-gray-600">
              We're on a mission to make the extraordinary health benefits of broccoli microgreens accessible to
              everyone.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-white py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <AnimatedSection className="flex items-center justify-center" parallax parallaxSpeed={0.1}>
              <div className="relative h-[300px] w-full overflow-hidden rounded-lg md:h-[400px]">
                <Image src="/placeholder.svg?height=800&width=800" alt="Our mission" fill className="object-cover" />
              </div>
            </AnimatedSection>

            <AnimatedSection className="flex flex-col justify-center" direction="right">
              <h2 className="text-3xl font-bold tracking-tight text-green-800 md:text-4xl">Small Greens, Big Vision</h2>
              <p className="mt-4 text-gray-600">
                At Innovative Agriculture, we believe that nature provides the most powerful tools for health and wellness. Our
                journey began with a simple observation: broccoli microgreens contain extraordinary levels of beneficial
                compounds that can transform health outcomes.
              </p>
              <p className="mt-4 text-gray-600">
                We've dedicated ourselves to perfecting the growing, harvesting, and processing of these remarkable
                plants to create supplements that deliver their full potential in a convenient form.
              </p>
              <div className="mt-8">
                <Button asChild className="bg-green-700 hover:bg-green-800">
                  <Link href="/process">
                    See How We Do It <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section className="bg-green-50 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-green-800 md:text-4xl">Backed by Science</h2>
            <p className="mt-4 text-gray-600">
              Our approach is grounded in scientific research on the health benefits of broccoli microgreens.
            </p>
          </AnimatedSection>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <AnimatedSection delay={0.1}>
              <div className="rounded-lg bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-bold text-green-700">Sulforaphane</h3>
                <p className="mt-2 text-gray-600">
                  Broccoli microgreens are rich in sulforaphane, a compound with powerful antioxidant and
                  anti-inflammatory properties.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="rounded-lg bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-bold text-green-700">Nutrient Density</h3>
                <p className="mt-2 text-gray-600">
                  Research shows microgreens contain up to 40 times more nutrients than their mature counterparts.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="rounded-lg bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-bold text-green-700">Bioavailability</h3>
                <p className="mt-2 text-gray-600">
                  Our gentle processing methods preserve the bioavailability of these crucial compounds.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-green-800 md:text-4xl">Our Team</h2>
            <p className="mt-4 text-gray-600">Meet the passionate experts behind Innovative Agriculture.</p>
          </AnimatedSection>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <AnimatedSection delay={0.1}>
              <div className="text-center">
                <div className="mx-auto h-32 w-32 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=128&width=128"
                    alt="Team member"
                    width={128}
                    height={128}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-4 text-xl font-bold text-green-700">Idrees Ahmad</h3>
                <p className="text-gray-600">President</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="text-center">
                <div className="mx-auto h-32 w-32 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=128&width=128"
                    alt="Team member"
                    width={128}
                    height={128}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-4 text-xl font-bold text-green-700">Stephen Brady</h3>
                <p className="text-gray-600">Vice President</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="text-center">
                <div className="mx-auto h-32 w-32 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=128&width=128"
                    alt="Team member"
                    width={128}
                    height={128}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-4 text-xl font-bold text-green-700">Cesar Bernal</h3>
                <p className="text-gray-600">Wealth Investor Who Funds Us</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-green-50 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-green-800 md:text-4xl">What Experts Say</h2>
          </AnimatedSection>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <AnimatedSection direction="left">
              <blockquote className="rounded-lg bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <p className="text-gray-600 italic">
                  "The concentration of bioactive compounds in these broccoli microgreen supplements is impressive. This
                  represents a significant advancement in plant-based nutrition."
                </p>
                <footer className="mt-4">
                  <p className="font-bold text-green-700">Dr. Emily Richards</p>
                  <p className="text-sm text-gray-500">Professor of Nutritional Sciences</p>
                </footer>
              </blockquote>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <blockquote className="rounded-lg bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <p className="text-gray-600 italic">
                  "I've been researching cruciferous vegetables for decades, and the potential health benefits of
                  concentrated broccoli microgreen compounds are truly exciting."
                </p>
                <footer className="mt-4">
                  <p className="font-bold text-green-700">Dr. James Wilson</p>
                  <p className="text-sm text-gray-500">Research Director, Plant Nutrition Institute</p>
                </footer>
              </blockquote>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}
