import { Sparkles } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const FooterSection = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-16">
            <div className="grid gap-8 md:grid-cols-4">
              <div className="md:col-span-2">
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-xl font-bold text-transparent font-heading">
                    Pixora
                  </span>
                </div>
                <p className="max-w-md text-slate-600 font-sans">
                  Professional image editing powered by artificial intelligence.
                  Transform your images with cutting-edge AI technology.
                </p>
              </div>

              <div>
                <h3 className="mb-4 font-semibold text-slate-800 font-heading">Product</h3>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li>
                    <Link
                      href="#features"
                      className="transition-colors hover:text-blue-600"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#pricing"
                      className="transition-colors hover:text-blue-600"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard"
                      className="transition-colors hover:text-blue-600"
                    >
                      Dashboard
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-4 font-semibold text-slate-800 font-heading">Support</h3>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li>
                    <Link
                      href="#"
                      className="transition-colors hover:text-blue-600"
                    >
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="transition-colors hover:text-blue-600"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="transition-colors hover:text-blue-600"
                    >
                      Privacy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-16 border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
              <p>&copy; 2025 AI Image Editor. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default FooterSection