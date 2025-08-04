import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"
import NewsletterSignup from "@/components/newsletter-signup"
import AnimatedSection from "@/components/animated-section"

export default function ShopPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-green-50 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-green-800 md:text-5xl">Coming Soon</h1>
            <p className="mt-4 text-lg text-gray-600">
              Our premium broccoli microgreen supplements will be available for purchase soon.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="bg-white py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <AnimatedSection>
              <div className="rounded-lg border border-green-100 bg-green-50 p-8 text-center">
                <Mail className="mx-auto h-16 w-16 text-green-700" />
                <h2 className="mt-6 text-2xl font-bold text-green-800">Be the First to Know</h2>
                <p className="mt-2 text-gray-600">
                  Sign up for our newsletter to receive updates on product launches, exclusive early access, and special
                  offers.
                </p>
                <div className="mt-6">
                  <NewsletterSignup />
                </div>
              </div>
            </AnimatedSection>

            <div className="mt-12 space-y-8">
              <AnimatedSection delay={0.1}>
                <div>
                  <h2 className="text-2xl font-bold text-green-800">What to Expect</h2>
                  <p className="mt-2 text-gray-600">Our initial product line will include:</p>
                  <ul className="mt-4 list-inside list-disc space-y-2 text-gray-600">
                    <li>Broccoli Microgreen Capsules</li>
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div>
                  <h2 className="text-2xl font-bold text-green-800">Launching Soon</h2>
                  <p className="mt-2 text-gray-600">
                    We're in the final stages of product development and testing. Our commitment to quality means we
                    won't rush the process - we want to ensure you receive the most effective, pure, and potent broccoli
                    microgreen supplements possible.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div>
                  <h2 className="text-2xl font-bold text-green-800">Questions?</h2>
                  <p className="mt-2 text-gray-600">
                    If you have any questions about our upcoming products or would like more information, please don't
                    hesitate to reach out to us at{" "}
                    <span className="font-medium text-green-700">innoaggie@gmail.com</span>
                  </p>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection className="mt-12 flex justify-center" delay={0.4}>
              <Button asChild className="bg-green-700 hover:bg-green-800">
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
