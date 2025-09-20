import { 
  ArrowLeft,
  ArrowRight,
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

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Graphic Designer",
      content:
        "This tool has revolutionized my workflow. Background removal that used to take hours now takes seconds!",
      rating: 5,
    },
    {
      name: "Marcus Johnson",
      role: "E-commerce Owner",
      content:
        "Perfect for product photography. The AI upscaling feature makes my images look professional.",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      role: "Content Creator",
      content:
        "The object cropping feature is incredible. It knows exactly what I want to focus on.",
      rating: 5,
    },
  ];

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
              <span className="bg-gradient-to-r from-blue-600 to bg-purple-600 bg-clip-text text-xl font-bold text-transparent font-sans">Pixora</span>
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
              <span className="font-medium text-blue-700 font-sans">
                Powered by Advanced AI
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-800 sm:text-6xl font-heading">
              Transform Images {" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-sans">AI Magic</span>
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
      
    </div>
  )
}

export default HomePage