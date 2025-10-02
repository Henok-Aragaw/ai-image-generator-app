import { ImageIcon, Play, Sparkles } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const HeroSection = () => {
  return (
     <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-blue-100/30 px-4 py-2 text-sm">
              <Sparkles className="h-4 w-4 text-blue-600"/>
              <span className="font-medium text-blue-700 font-heading">
                Powered by Advanced AI
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-800 sm:text-6xl font-heading">
              Transform Images {" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AI Magic</span>
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-slate-600 sm:text-xl font-sans">
              Professional image editing powered by artificial intelligence.
              Remove backgrounds, upscale images, and crop with precision - all
              in seconds.
            </p>

            <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
              <Link
               href={"/dashboard"}
              >
               <Button
               size={"lg"}
               className="cursor-pointer gap-2 px-8 py-6 text-base font-sans"
               >
                <Play className="h-5 w-5"/>
                Try It Free Now
               </Button>
              </Link>
              <Link
              href={"/dashboard"}
              >
                <Button
                 variant={"outline"}
                 size={"lg"}
                 className="cursor-pointer gap-2 px-8 py-6 text-base font-sans"
                >
                  <ImageIcon />
                  View Demo
                </Button>
              </Link>
            </div>

            <div className="mt-16 text-center">
              <p className="mb-8 text-sm text-slate-500 font-sans">
                Trusted by thousands of creators worldwide
              </p>
              <div className="grid grid-cols-2 items-center justify-center gap-6 opacity-80 sm:grid-cols-5">
                <div className="text-center">
                  <div className="text-2xl text-slate-700 font-sans">10K</div>
                  <div className="text-xs text-slate-500 font-sans">Images Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-slate-700 font-sans">2.5K</div>
                  <div className="text-xs text-slate-500 font-sans">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-slate-700 font-sans">99.9%</div>
                  <div className="text-xs text-slate-500 font-sans">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-600 font-sans">4.8★</div>
                  <div className="text-xs text-slate-500 font-sans">User Rating</div>
                </div>
                <div className="col-span-2 text-center sm:col-span-1">
                  <div className="text-2xl font-bold text-slate-700 font-sans">24/7</div>
                  <div className="text-xs text-slate-500 font-sans">AI Processing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default HeroSection