"use client"

import { ArrowRight, Sparkle } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/60 bg-slate-50/95 backdrop-blur supports-[backdrop-filter]:bg-slate-50/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
                <Sparkle className="h-5 w-5 text-white" />
              </div>
              <span className="bg-gradient-to-r from-blue-600 to bg-purple-600 bg-clip-text text-xl font-bold text-transparent font-heading">Pixora</span>
            </div>
            
            <div className="hidden items-center space-x-8 md:flex">
              <Link
              href={"#features"}
              className="text-slate-600 transition-colors hover:text-blue-600 font-sans"
              >
                Features
              </Link>
              <Link
              href={"#pricing"}
              className="text-slate-600 transition-colors hover:text-blue-600 font-sans"
              >
                Pricing
              </Link>
              <Link
              href={"#testimonials"}
              className="text-slate-600 transition-colors hover:text-blue-600 font-sans"
              >
                Reviews
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <Link
               href={"/auth/sign-in"}
              >
                <Button variant={"ghost"} size={"sm"} className="cursor-pointer">Sign In</Button>
              </Link>
              <Link
               href={"/dashboard"}
              >
                <Button size={"sm"} className="cursor-pointer gap-2">
                  Try Free
                  <ArrowRight />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default NavBar