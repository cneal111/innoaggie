import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import AnimatedSection from "@/components/animated-section"
import { Carousel } from "@/components/ui/carousel"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {Accordion,AccordionItem,AccordionTrigger,AccordionContent,} from "@/components/ui/accordion"

async function getInventory() {
  const STRAPI_URL = process.env.STRAPI_API_URL;
  const STRAPI_TOKEN = process.env.STRAPI_TOKEN || process.env.STRAPI_API_TOKEN;
  const MG1 = process.env.MG1; // Product ID for Broccoli Microgreen Supplements in Strapi
  const MYPRODUCT = process.env.MYPRODUCT; // Product ID for test product in Strapi
  if (!STRAPI_URL || !STRAPI_TOKEN) return null;

  // Query the product by slug (mg-1). Adjust if your slug differs.
  const url = new URL(`${STRAPI_URL}/api/products/${MG1}`);
  url.searchParams.set("filters[slug][$eq]", "mg-1");
  url.searchParams.append("fields[0]", "inventory");
  url.searchParams.append("fields[1]", "name");
  url.searchParams.append("pagination[pageSize]", "1");

  try {
    const res = await fetch(url.toString(), {
      method: "GET",
      headers: { Authorization: `Bearer ${STRAPI_TOKEN}` },
      // ensure we don't serve a stale value; inventory changes after checkout
      cache: "no-store",
    });
    if (!res.ok) return null;
    const json = await res.json();
    const p = json?.data;
    console.log("Product data:", p);
    // support flattened or attributes shape
    const inventory = p?.inventory ?? p?.attributes?.inventory ?? null;
    return typeof inventory === "number" ? inventory : Number(inventory ?? 0);
  } catch {
    return null;
  }
}

export default async function ShopPage() {
  const inventory = await getInventory();
  const inStock = typeof inventory === "number" ? inventory > 1 : false;

  return (
    <div className="flex flex-col">

<AnimatedSection className="mx-auto max-w-6xl px-4 md:px-6" parallax parallaxSpeed={0.1}>
  {/* Mobile: stack. Desktop: grid, equal widths, top-aligned */}
  <div className="mx-auto grid w-full max-w-5xl gap-8 md:grid-cols-2 md:items-start">
    {/* Bottle */}
    <div className="w-40 sm:w-48 md:w-[26rem] mx-auto md:mx-0">
      <img
        src="/product_bottle-5.png?height=1200&width=1200"
        alt="MG-1 microgreens dehydrated vegetable capsule bottle"
        className="h-full w-full object-cover"
      />
    </div>

    {/* Nutrition Facts (dark-mode ready) */}
    <Card className="w-full md:w-[26rem] mt-4 mb-4 md:mt-20 shadow-md bg-white dark:bg-neutral-900">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-neutral-900 dark:text-neutral-100">
          Nutrition Facts
        </CardTitle>
      </CardHeader>

      <CardContent className="p-0 md:p-6">
        <div className="rounded-2xl border-2 mx-2 my-2 border-emerald-800 bg-emerald-50/40 p-4 sm:p-5 dark:border-emerald-600 dark:bg-emerald-950/30">
          <div className="border-t-4 border-black pt-3 dark:border-white">
            {/* Mobile quick chips */}
            <div className="mb-3 flex flex-wrap gap-2 text-[13px] sm:text-sm">
              <span className="rounded-full border border-emerald-300 bg-white/70 px-3 py-1 text-neutral-900 dark:border-emerald-700 dark:bg-emerald-900/50 dark:text-neutral-100">
                Serving Size: <strong>1 Capsule</strong>
              </span>
              <span className="rounded-full border border-emerald-300 bg-white/70 px-3 py-1 text-neutral-900 dark:border-emerald-700 dark:bg-emerald-900/50 dark:text-neutral-100">
                Servings: <strong>32</strong>
              </span>
            </div>

            {/* Headers (hidden on xs) */}
            <div className="hidden items-center justify-between border-b-4 border-black py-2 font-extrabold text-neutral-900 dark:border-white dark:text-neutral-100 sm:flex">
              <span>Amount Per Serving</span>
              <span>% Daily Value</span>
            </div>

            {/* Ingredient row */}
            <div className="border-b py-2 text-[15px] text-neutral-900 dark:text-neutral-100 dark:border-neutral-700 sm:grid sm:grid-cols-[1fr_auto] sm:items-center sm:gap-3">
              <div className="font-medium">Brassica oleracea (Broccoli)*</div>
              <div className="mt-1 sm:mt-0 sm:text-right">400mg †</div>
            </div>

            <ul className="mt-3 space-y-1 text-[13px] leading-5 text-neutral-900 dark:text-neutral-200">
              <li>† Daily Value not established</li>
              <li>*Ingredients include leaf, stem &amp; root</li>
              <li><span className="font-semibold">Directions:</span> Take 1 capsule per day.</li>
            </ul>

            {/* FDA disclaimer */}
            <div className="mt-3 sm:hidden">
              <details>
                <summary className="cursor-pointer text-[13px] text-neutral-900 dark:text-neutral-100">
                  Read FDA disclaimer
                </summary>
                <p className="mt-2 text-[13px] leading-5 text-neutral-900 dark:text-neutral-200">
                  **These statements have not been evaluated by the Food and Drug Administration.
                  This product is not intended to diagnose, treat, cure, or prevent any disease.
                </p>
              </details>
            </div>
            <p className="mt-3 hidden text-[8px] leading-6 text-neutral-900 dark:text-neutral-200 sm:block">
              **These statements have not been evaluated by the Food and Drug Administration.
              This product is not intended to diagnose, treat, cure, or prevent any disease.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</AnimatedSection>


      {/* Hero Section */}
      <section className="bg-green-50 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-green-800 md:text-5xl">Shop Broccoli Microgreens</h1>
            <p className="mt-4 text-lg text-gray-600">
              Choose your purchase option below and enjoy the benefits of our premium broccoli dehydrated vegetable product.
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
                    Buy a single bottle of Broccoli Dehydrated Capsules. No commitment.
                  </p>
                  <div className="mt-6 w-full">
                    {inStock ? (
                      <Button asChild className="bg-green-700 hover:bg-green-800  hover:text-green-100 w-full">
                        <Link href="https://buy.stripe.com/3cI14nfAo9Xf3ErfI4cQU00">
                          Buy Now <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    ) : (
                      <Button disabled className="w-full opacity-60 cursor-not-allowed" aria-disabled>
                        Sold Out
                      </Button>
                    )}
                  </div>
                </div>
              </AnimatedSection>

              {/* Subscription */}
              <AnimatedSection delay={0.1}>
                <div className="rounded-lg border border-green-100 bg-green-50 p-8 text-center flex flex-col items-center">
                  <h2 className="text-2xl font-bold text-green-800">Subscribe & Save</h2>
                  <p className="mt-2 text-gray-600">
                    Get a bottle delivered every month at a discounted rate. Cancel anytime.
                    <br /> <br />   
                  </p>
                  <div className="mt-6 w-full">
                    {inStock ? (
                      <Button asChild className="bg-green-700 hover:bg-green-800 hover:text-green-100 w-full">
                        <Link href="https://buy.stripe.com/eVq9AT4VK0mF4Iv9jGcQU01">
                          Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    ) : (
                      <Button disabled className="w-full opacity-60 cursor-not-allowed" aria-disabled>
                        Subscribe (Unavailable)
                      </Button>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {!inStock && (
              <p className="mt-4 text-center text-sm text-red-600">Currently out of stock. Please check back soon.</p>
            )}

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
