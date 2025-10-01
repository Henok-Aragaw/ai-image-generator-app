"use client"
import { authClient } from "~/lib/auth-client"
import { Button } from "../ui/button"
import { Crown, Sparkles } from "lucide-react"


const Upgrade = () => {
  const upgrade = async() => {
    await authClient.checkout({
      products: [
        "30ebd140-c672-4e73-871a-50d1cd5075bf",
        "780068c8-d699-49f3-9b53-7251782b6c65",
        "ab55e0fd-e436-49e7-8b9d-cf7109bf3837",
      ],
    });
  };

  return (
    <Button
    variant="outline"
    size="sm"
    onClick={upgrade}
    className="group relative ml-2 cursor-pointer overflow-hidden border-orange-400/50 bg-gradient-to-r from-orange-400/10 to-pink-500/10 text-orange-400 transition-all duration-300 hover:border-orange-500/70 hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-600 hover:text-white hover:shadow-lg hover:shadow-orange-500/25"
    >
      <div className="flex items-center gap-2">
        <Crown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12"/>
        <span className="font-medium">Upgrade</span>
        <Sparkles className="h-3 w-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100"/>
      </div>

      <div className="absolute inset-0 rounded-md bg-gradient-to-r from-orange-400/20 to-pink-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </Button>
  )
}

export default Upgrade