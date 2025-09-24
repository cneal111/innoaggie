import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import AnimatedSection from "@/components/animated-section"

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
  const inStock = typeof inventory === "number" ? inventory > 0 : false;

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
                    Buy a single bottle of Broccoli Microgreen Supplements. No commitment.
                  </p>
                  <div className="mt-6 w-full">
                    {inStock ? (
                      <Button asChild className="bg-green-700 hover:bg-green-800  hover:text-green-100 w-full">
                        <Link href="https://buy.stripe.com/test_cNiaEX3QzfKi3q10QX1sQ01">
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
                        <Link href="https://buy.stripe.com/test_fZuaEXfzh9lUgcN9nt1sQ00">
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
