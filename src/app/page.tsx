import CtaSection from "~/components/cta";
import FeatureSection from "~/components/feature";
import FooterSection from "~/components/footer";
import GuidSection from "~/components/guid";
import HeroSection from "~/components/hero";
import NavBar from "~/components/nav-bar";
import PricingSection from "~/components/pricing";

const HomePage = () => {

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

  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-slate-100">
      {/* Navbar */}
      <NavBar />
      {/* hero section */}
      <HeroSection />
      {/* feature section */}
      <FeatureSection />

      {/* How it works section */}
      <GuidSection />
      {/* Pricing Section */}
      <PricingSection />
      {/* CTA Section */}
      <CtaSection />
      {/* Footer Section */}
      <FooterSection />
    </div>
  )
}

export default HomePage