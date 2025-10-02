import React from 'react'
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import Link from 'next/link';
import { CheckCircle2, Sparkles } from 'lucide-react';

  const pricingFeatures = [
    "AI Background Removal",
    "Smart Image Upscaling",
    "Object-Focused Cropping",
    "High-Quality Downloads",
    "Fast Processing",
    "Cloud Storage",
  ];

const PricingSection = () => {
  return (
    <section
        id="pricing"
        className="bg-gradient-to-br from-slate-50 to-blue-50/50 py-20 sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl font-heading">
              Start Creating{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-heading">
                For Free
              </span>
            </h2>
            <p className="mt-4 text-lg text-slate-600 font-sans">
              No credit card required. Begin transforming your images instantly.
            </p>
          </div>

          <div className="mx-auto max-w-lg">
            <Card className="relative overflow-hidden border-2 border-blue-300 bg-white/70 backdrop-blur-sm">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-1 text-sm font-medium text-white">
                Free to Start
              </div>
              <CardContent className="p-8">
                <div className="mb-8 text-center">
                  <h3 className="text-2xl font-bold text-slate-800 font-heading">
                    Free Plan
                  </h3>
                  <div className="mt-4 flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-slate-800">
                      $0
                    </span>
                    <span className="ml-2 text-slate-600">to start</span>
                  </div>
                  <p className="mt-2 text-slate-600">
                    Try all features with free credits
                  </p>
                </div>

                <ul className="mb-8 space-y-4">
                  {pricingFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-emerald-500" />
                      <span className="text-sm text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/dashboard">
                  <Button
                    className="w-full cursor-pointer gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                    size="lg"
                  >
                    <Sparkles className="h-4 w-4" />
                    Try It Free Now
                  </Button>
                </Link>

                <p className="mt-4 text-center text-xs text-slate-500">
                  Includes 10 free credits • No credit card required
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
    </section>
  )
}

export default PricingSection