"use client"

import { CheckCircle, Trophy, ArrowRight, Loader2 } from "lucide-react"
import EnhancedCard from "./EnhancedCard"

interface EliteSectionProps {
  buttonLoading: string | null
  handleButtonClick: (buttonId: string) => void
}

export default function EliteSection({ buttonLoading, handleButtonClick }: EliteSectionProps) {
  return (
    <div className="relative z-10 py-12 xl:py-16 px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <EnhancedCard delay={200}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-6 sm:mb-8 lg:mb-12 xl:mb-16 2xl:mb-20 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-300 to-green-500 drop-shadow-2xl tracking-tight">
            Join the 1% of Traders Who Win Consistently
          </h2>
        </EnhancedCard>

        <EnhancedCard delay={400}>
          <div className="relative group max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-orange-400/5 backdrop-blur-md border border-green-300/15 rounded-3xl shadow-xl group-hover:shadow-green-200/10 transition-all duration-700" />

            <div className="relative p-8 sm:p-10 lg:p-12 xl:p-16 text-center">
              <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-300 leading-relaxed mb-8">
                The majority of traders lose because they follow noise. Our students follow{" "}
                <span className="text-green-400 font-semibold">systems</span>.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  "Follow structured strategies",
                  "Learn to trust charts, not emotions",
                  "Build long-term, sustainable income",
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-center space-x-3 group/item text-left">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-sm sm:text-base lg:text-lg text-white group-hover/item:text-green-100 transition-colors duration-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => handleButtonClick("join-elite")}
                disabled={buttonLoading === "join-elite"}
                className="group relative inline-flex items-center justify-center mt-4 px-6 sm:px-8 lg:px-12 py-3 xl:py-4 text-base sm:text-lg lg:text-xl font-bold text-white transition-all duration-700 transform hover:scale-101 hover:-translate-y-2 active:scale-95 focus:outline-none focus:ring-4 focus:ring-green-400/30 disabled:opacity-70"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-400/20 backdrop-blur-xl border border-green-400/25 rounded-2xl shadow-2xl group-hover:shadow-green-400/20 transition-all duration-700 group-hover:border-green-300/40 group-hover:from-green-500/30 group-hover:to-green-400/30" />
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-700 blur-sm" />

                <div className="relative flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
                  {buttonLoading === "join-elite" ? (
                    <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 animate-spin" />
                  ) : (
                    <Trophy className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500" />
                  )}
                  <span className="tracking-wide hidden lg:inline">
                    {buttonLoading === "join-elite"
                      ? "Joining..."
                      : "Join Our Community"}
                  </span>
                  <span className="tracking-wide lg:hidden">
                    {buttonLoading === "join-elite" ? "Joining..." : "Join Our Community"}
                  </span>
                  {buttonLoading !== "join-elite" && (
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-500" />
                  )}
                </div>

                <div className="absolute inset-0 -top-1 -bottom-1 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:animate-shimmer-enhanced opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </div>
        </EnhancedCard>
      </div>
    </div>
  )
}
