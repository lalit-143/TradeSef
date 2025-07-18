"use client"

import { Trophy, TrendingUp, Shield, Users, Star, ArrowRight, Loader2 } from "lucide-react"
import EnhancedCard from "./EnhancedCard"

interface TrustSectionProps {
  buttonLoading: string | null
  handleButtonClick: (buttonId: string) => void
}

export default function TrustSection({ buttonLoading, handleButtonClick }: TrustSectionProps) {
  return (
    <div className="relative z-10 py-12 xl:py-16 px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="max-w-7xl mx-auto">
        <EnhancedCard delay={200}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-12 text-green-400 drop-shadow-lg">
            Why Choose Us ?
          </h2>
        </EnhancedCard>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-4xl mx-auto">
          {[
            {
              icon: Trophy,
              text: "Real-Time Signals",
              desc: "Get instant trading alerts and market opportunities delivered directly to your device with precision timing.",
              color: "green",
              bgColor: "from-green-500/15 to-green-600/10",
            },
            {
              icon: TrendingUp,
              text: "Expert Market Insights",
              desc: "Professional analysis and market predictions from seasoned trading experts with proven track records.",
              color: "orange",
              bgColor: "from-orange-500/15 to-orange-600/10",
            },
            {
              icon: Shield,
              text: "Daily Financial News",
              desc: "Stay updated with curated market news and economic events that impact trading decisions and opportunities.",
              color: "yellow",
              bgColor: "from-yellow-500/15 to-yellow-600/10",
            },
            {
              icon: Users,
              text: "Proven Profit Records",
              desc: "Track record of successful trades and consistent profitability for our community members worldwide.",
              color: "teal",
              bgColor: "from-teal-500/15 to-teal-600/10",
            },
          ].map((item, index) => (
            <EnhancedCard key={index} delay={400 + index * 100} className="group relative">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} backdrop-blur-sm border border-${item.color}-400/20 rounded-3xl shadow-lg group-hover:shadow-xl transition-all duration-700 group-hover:scale-[1.02]`}
              />

              <div className="relative p-6 sm:p-8 lg:p-10 text-center">
                <div className="mb-6 flex justify-center">
                  <div
                    className={`p-4 sm:p-5 bg-${item.color}-500/30 rounded-full border border-${item.color}-400/40 group-hover:scale-110 transition-all duration-700`}
                  >
                    <item.icon className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:w-8 text-${item.color}-400`} />
                  </div>
                </div>
                <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold text-${item.color}-400 mb-3 sm:mb-4`}>
                  {item.text}
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
                  {item.desc}
                </p>
              </div>
            </EnhancedCard>
          ))}
        </div>

        {/* CTA Button */}
        <EnhancedCard delay={1000}>
          <div className="text-center mt-8 sm:mt-12 lg:mt-16 xl:mt-20">
            <button
              onClick={() => handleButtonClick("join-masterclass")}
              disabled={buttonLoading === "join-masterclass"}
              className="group relative inline-flex items-center justify-center px-6 sm:px-8 lg:px-12 xl:px-16 py-3 sm:py-4 lg:py-6 xl:py-8 text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-white transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 active:scale-95 focus:outline-none focus:ring-4 focus:ring-green-400/30 disabled:opacity-70"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-400/20 backdrop-blur-xl border border-green-400/25 rounded-2xl shadow-2xl group-hover:shadow-green-400/40 transition-all duration-700 group-hover:border-green-300/40 group-hover:from-green-500/30 group-hover:to-green-400/30" />
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-700 blur-sm" />

              <div className="relative flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
                {buttonLoading === "join-masterclass" ? (
                  <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 animate-spin" />
                ) : (
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500" />
                )}
                <span className="tracking-wide hidden lg:inline">
                  {buttonLoading === "join-masterclass" ? "Joining..." : "Join The Masterclass"}
                </span>
                <span className="tracking-wide lg:hidden">
                  {buttonLoading === "join-masterclass" ? "Joining..." : "Join The Masterclass"}
                </span>
                {buttonLoading !== "join-masterclass" && (
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-500" />
                )}
              </div>

              <div className="absolute inset-0 -top-1 -bottom-1 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:animate-shimmer-enhanced opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </EnhancedCard>
      </div>
    </div>
  )
}
