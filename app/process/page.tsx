import Link from "next/link"
import { ArrowRight, Leaf, Droplets, Sun, FlaskRound, Package, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedSection from "@/components/animated-section"
import ProcessStep from "@/components/process-step"

export default function ProcessPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-green-50 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-green-800 md:text-5xl">Our Process</h1>
            <p className="mt-4 text-lg text-gray-600">
              From seed to supplement, we maintain the highest standards at every step.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-white py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="space-y-16">
              <ProcessStep
                iconName="leaf"
                title="Premium Seed Selection"
                description="We start with carefully selected, non-GMO broccoli seeds known for their high nutrient content and sulforaphane potential. Each batch is tested for purity and germination rate."
                imageSrc=""
                imageAlt="Premium seed selection"
                index={0}
              />

              <ProcessStep
                iconName="droplets"
                title="Controlled Growing Environment"
                description="Our microgreens are grown in a controlled indoor environment with precise temperature, humidity, and light conditions. We use purified water and organic growing medium to ensure the highest quality."
                imageSrc=""
                imageAlt="Controlled growing environment"
                index={1}
                reverse
              />

              <ProcessStep
                iconName="sun"
                title="Peak Harvest Timing"
                description="We harvest our broccoli microgreens at precisely the right moment when their nutrient content and bioactive compounds are at their highest levels, typically 7-10 days after germination."
                imageSrc=""
                imageAlt="Peak harvest timing"
                index={2}
              />

              <ProcessStep
                iconName="flask"
                title="Gentle Processing"
                description="We use a proprietary low-temperature drying process that preserves the delicate bioactive compounds. This ensures maximum retention of nutrients and health benefits in the final product."
                imageSrc=""
                imageAlt="Gentle processing"
                index={3}
                reverse
              />

              <ProcessStep
                iconName="package"
                title="Packaging & Quality Control"
                description="Each batch is tested for purity and potency before being packaged in eco-friendly, light-resistant containers that preserve freshness. We maintain strict quality control standards throughout the entire process."
                imageSrc=""
                imageAlt="Packaging and quality control"
                index={4}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="bg-green-50 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            {/* <h2 className="text-3xl font-bold tracking-tight text-green-800 md:text-4xl">Our Quality Commitment</h2>
            <p className="mt-4 text-gray-600">We maintain rigorous quality standards throughout our entire process.</p> */}
            <h2 className="text-3xl font-bold tracking-tight text-green-800 md:text-4xl">We Honor the Science Behind Better Living.</h2>
            <p className="mt-4 text-gray-600">Here's what the experts have to say.</p>
          </AnimatedSection>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatedSection delay={0.1}>
              <Link
                href="https://www.cambridge.org/core/journals/proceedings-of-the-nutrition-society/article/effects-of-broccoli-sprouts-intake-on-oxidative-stress-inflammation-microalbuminuria-and-platelet-function-in-human-volunteers-a-crossover-study/0DEDA73F445B67B4E3DCDB7B415A48DA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300 hover:bg-green-50"
              >
                <CheckCircle className="h-12 w-12 text-green-700" />
                <h3 className="mt-4 text-xl font-bold text-green-700">Oxidative Stress & Inflammation</h3>
                <p className="mt-2 text-gray-600">
                  Human trials show broccoli sprouts reduce oxidative stress, inflammation, and kidney stress markers.  
                  This highlights their role in protecting cardiovascular and cellular health.
                </p>
                <span className="mt-2 text-green-600 underline text-sm">View Article</span>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Link
                href="https://www.mdpi.com/2223-7747/11/20/2750"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300 hover:bg-green-50"
              >
                <CheckCircle className="h-12 w-12 text-green-700" />
                <h3 className="mt-4 text-xl font-bold text-green-700">Thyroid Health & Safety</h3>
                <p className="mt-2 text-gray-600">
                  Research shows broccoli sprouts slow thyroid cancer cell growth and ease inflammation.  
                  They also demonstrate a strong safety profile, supporting natural thyroid wellness.
                </p>
                <span className="mt-2 text-green-600 underline text-sm">View Article</span>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Link
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5773831/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300 hover:bg-green-50"
              >
                <CheckCircle className="h-12 w-12 text-green-700" />
                <h3 className="mt-4 text-xl font-bold text-green-700">Digestive Health & Gut Support</h3>
                <p className="mt-2 text-gray-600">
                  Daily broccoli sprouts improved digestive regularity and eased constipation in clinical trials.  
                  They also boosted antioxidant defenses and supported a healthier gut microbiome.
                </p>
                <span className="mt-2 text-green-600 underline text-sm">View Article</span>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <Link
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8398379/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300 hover:bg-green-50"
              >
                <CheckCircle className="h-12 w-12 text-green-700" />
                <h3 className="mt-4 text-xl font-bold text-green-700">Sprouts as Functional Foods</h3>
                <p className="mt-2 text-gray-600">
                  Reviews highlight sprouts like broccoli as nutrient-dense superfoods packed with phytochemicals.  
                  These compounds provide antioxidant, anti-inflammatory, and functional nutrition benefits.
                </p>
                <span className="mt-2 text-green-600 underline text-sm">View Article</span>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <Link
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2794877/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300 hover:bg-green-50"
              >
                <CheckCircle className="h-12 w-12 text-green-700" />
                <h3 className="mt-4 text-xl font-bold text-green-700">Prostate Health Potential</h3>
                <p className="mt-2 text-gray-600">
                  Selenium-enriched broccoli sprouts showed stronger anti-cancer effects in prostate cell studies.  
                  They reduced tumor growth pathways and promoted cancer cell death.
                </p>
                <span className="mt-2 text-green-600 underline text-sm">View Article</span>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <Link
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7465980/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300 hover:bg-green-50"
              >
                <CheckCircle className="h-12 w-12 text-green-700" />
                <h3 className="mt-4 text-xl font-bold text-green-700">Broad-Spectrum Benefits</h3>
                <p className="mt-2 text-gray-600">
                  Updated reviews describe broccoli sprouts as rich in antioxidants, vitamins, and bioactive compounds.  
                  They support anti-inflammatory, antidiabetic, antimicrobial, and even anti-cancer functions.
                </p>
                <span className="mt-2 text-green-600 underline text-sm">View Article</span>
              </Link>
            </AnimatedSection>
            
          {/* 
            <AnimatedSection delay={0.1}>
              <div className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                <CheckCircle className="h-12 w-12 text-green-700" />
                <h3 className="mt-4 text-xl font-bold text-green-700">Third-Party Testing</h3>
                <p className="mt-2 text-gray-600">Every batch is independently tested for purity and potency.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                <CheckCircle className="h-12 w-12 text-green-700" />
                <h3 className="mt-4 text-xl font-bold text-green-700">GMP Certified</h3>
                <p className="mt-2 text-gray-600">Our facility follows Good Manufacturing Practices.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                <CheckCircle className="h-12 w-12 text-green-700" />
                <h3 className="mt-4 text-xl font-bold text-green-700">Sustainable Practices</h3>
                <p className="mt-2 text-gray-600">We minimize environmental impact at every stage.</p>
              </div>
            </AnimatedSection> 
            */}

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-green-800 md:text-4xl">
              Ready to Experience the Difference?
            </h2>
            <p className="mt-4 text-gray-600">
              Our broccoli microgreen supplements are available now!
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-green-700 hover:bg-green-800">
                <Link href="/shop">
                  Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
