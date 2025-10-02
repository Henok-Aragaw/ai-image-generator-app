import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { Download, Sparkles } from 'lucide-react'

const CtaSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-100/70 to-purple-100/70 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl font-heading">
              Ready to Transform Your Images?
            </h2>
            <p className="mt-4 text-lg text-slate-600 font-sans">
              Join thousands of creators using AI to enhance their visual
              content
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="cursor-pointer gap-2 bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-6 text-base hover:from-blue-600 hover:to-purple-700"
                >
                  <Sparkles className="h-5 w-5" />
                  Try It Free Now
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button
                  variant="outline"
                  size="lg"
                  className="cursor-pointer gap-2 border-slate-300 px-8 py-6 text-base text-slate-700 hover:bg-slate-100"
                >
                  <Download className="h-5 w-5" />
                  View Examples
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
  )
}

export default CtaSection