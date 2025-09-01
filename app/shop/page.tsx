import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import AnimatedSection from "@/components/animated-section"

export default function ShopPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-green-50 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-green-800 md:text-5xl">Shop Broccoli Microgreens</h1>
            <p className="mt-4 text-lg text-gray-600">
              Choose your purchase option below and enjoy the benefits of our premium broccoli microgreen supplements.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Shop Options */}
      <section className="bg-white py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="grid gap-8 md:grid-cols-2">
              {/* One-Time Purchase */}
              <AnimatedSection>
                <div className="rounded-lg border border-green-100 bg-green-50 p-8 text-center flex flex-col items-center">
                  <h2 className="text-2xl font-bold text-green-800">One-Time Purchase</h2>
                  <p className="mt-2 text-gray-600">
                    Buy a single bottle of Broccoli Microgreen Capsules. No commitment.
                  </p>
                  <div className="mt-6">
                    <Button asChild className="bg-green-700 hover:bg-green-800  hover:text-green-100 w-full">
                      <Link href="https://buy.stripe.com/test_cNiaEX3QzfKi3q10QX1sQ01">
                        Buy Now <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </AnimatedSection>

              {/* Subscription */}
              <AnimatedSection delay={0.1}>
                <div className="rounded-lg border border-green-100 bg-green-50 p-8 text-center flex flex-col items-center">
                  <h2 className="text-2xl font-bold text-green-800">Subscribe & Save</h2>
                  <p className="mt-2 text-gray-600">
                    Get a bottle delivered every month at a discounted rate. Cancel anytime.
                  </p>
                  <div className="mt-6">
                    <Button asChild className="bg-green-700 hover:bg-green-800 hover:text-green-100 w-full">
                      <Link href="https://buy.stripe.com/test_fZuaEXfzh9lUgcN9nt1sQ00">
                        Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection className="mt-12 flex justify-center" delay={0.2}>
              <Button asChild variant="outline" className="border-green-700 text-green-700 hover:text-green-100">
                <Link href="/process">
                  Learn About Our Process <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}
