import { 
  ArrowRight,
  CheckCircle2,
  Download,
  Expand, 
  ImageIcon, 
  Play, 
  Scissors, 
  Sparkle, 
  Sparkles, 
  Target, 
  Zap 
} from "lucide-react"
import Link from "next/link";
import { Button } from "~/components/ui/button"
import { Card, CardContent } from "~/components/ui/card"

const HomePage = () => {
  const features = [
    {
      icon: <Scissors className="h-8 w-8" />,
      title: "AI Background Removal",
      description:
        "Remove backgrounds instantly with advanced AI technology. Perfect for product photos and portraits.",
      color: "text-emerald-600",
      bgColor: "bg-emerald-100",
    },
    {
      icon: <Expand className="h-8 w-8" />,
      title: "Smart Upscaling",
      description:
        "Enhance image quality and resolution without losing clarity using cutting-edge AI algorithms.",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Object-Focused Cropping",
      description:
        "Intelligently crop images around specific objects with AI-powered detection and framing.",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning Fast",
      description:
        "Process images in seconds, not minutes. Our optimized AI infrastructure delivers results instantly.",
      color: "text-amber-600",
      bgColor: "bg-amber-100",
    },
  ];

  // const testimonials = [
  //   {
  //     name: "Sarah Chen",
  //     role: "Graphic Designer",
  //     content:
  //       "This tool has revolutionized my workflow. Background removal that used to take hours now takes seconds!",
  //     rating: 5,
  //   },
  //   {
  //     name: "Marcus Johnson",
  //     role: "E-commerce Owner",
  //     content:
  //       "Perfect for product photography. The AI upscaling feature makes my images look professional.",
  //     rating: 5,
  //   },
  //   {
  //     name: "Emma Rodriguez",
  //     role: "Content Creator",
  //     content:
  //       "The object cropping feature is incredible. It knows exactly what I want to focus on.",
  //     rating: 5,
  //   },
  // ];

  const pricingFeatures = [
    "AI Background Removal",
    "Smart Image Upscaling",
    "Object-Focused Cropping",
    "High-Quality Downloads",
    "Fast Processing",
    "Cloud Storage",
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-slate-100">
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
      
      {/* hero section */}
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

      {/* feature section */}
      <section id="features" className="bg-white py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl font-heading">
              Powerful AI Tools at Your {" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-heading">Fingertips</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600 font-sans">
              Everything you need to create stunning images with the power of
              artificial intelligence
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature,index) => (
              <Card
              key={index}
              className="group relative overflow-hidden border-slate-200 bg-white/70 backdrop-blur-sm transition-all hover:shadow-lg"
              >
                <CardContent>
                  <div 
                  className={`${feature.bgColor} mb-4 inline-flex items-center justify-center rounded-lg p-3 ${feature.color}`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-lg mb-2 font-semibold text-slate-800 font-heading">{feature.title}</h3>
                  <p className="text-sm text-slate-600 font-sans">{feature.description}</p>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-blue-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works section */}
      <section className="bg-slate-50 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl font-heading">
              Simple. Fast. Professional.
            </h2>
            <p className="mt-4 text-lg text-slate-600 font-sans">
              Get professional results in three simple steps
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Upload Your Image",
                description:
                  "Drag and drop or select your image. We support all major formats including JPG, PNG, and WebP.",
              },
              {
                step: "02",
                title: "Choose AI Tools",
                description:
                  "Select from our powerful AI tools: background removal, upscaling, or object-focused cropping.",
              },
              {
                step: "03",
                title: "Download Results",
                description:
                  "Get your professionally edited image in seconds. High-quality results ready for any use.",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="mb-4 flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-lg font-bold text-white shadow-lg font-sans">
                    {item.step}
                  </div>
                  {index < 2 && (
                    <div className="ml-4 hidden h-0.5 w-full bg-slate-300 md:block" />
                  )}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-slate-800 font-heading">
                  {item.title}
                </h3>
                <p className="text-slate-600 font-sans">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* Pricing Section */}
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

            {/* CTA Section */}
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
    </div>
  )
}

export default HomePage