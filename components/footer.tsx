import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold text-green-700">Innovative Agriculture</h3>
            <p className="mt-2 text-sm text-gray-600">
              Premium dehydrated vegetable products for optimal health and wellness.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-green-700">Quick Links</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-green-700">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/mission" className="text-gray-600 hover:text-green-700">
                  Mission
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-gray-600 hover:text-green-700">
                  Process
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-600 hover:text-green-700">
                  Shop
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-green-700">Connect</h3>
            <div className="mt-2 flex space-x-4">
              <Link href="https://www.instagram.com/inniaggie/" className="text-gray-600 hover:text-green-700">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-green-700">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-green-700">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-6">
          <p className="text-xs text-gray-500">
            *FDA Disclaimer: These statements have not been evaluated by the Food and Drug Administration. This product
            is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
          <p className="mt-4 text-xs text-gray-500">© {new Date().getFullYear()} Innovative Agriculture. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
