"use client"

import { Star, ArrowRight, Loader2, Target, TrendingUp, Shield, BookOpen, Zap, BarChart3 } from "lucide-react"
import EnhancedCard from "./EnhancedCard"

interface LearningSectionProps {
  buttonLoading: string | null
  handleButtonClick: (buttonId: string) => void
}

export default function LearningSection({ buttonLoading, handleButtonClick }: LearningSectionProps) {
  return (
    <div className="relative z-10 py-6 xl:py-8 px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="max-w-7xl mx-auto">
        <EnhancedCard delay={200}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 xl:mb-20 2xl:mb-24 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-300 to-green-500 drop-shadow-2xl tracking-tight">
            What You'll Learn
          </h2>
        </EnhancedCard>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 max-w-6xl mx-auto">
          {[
            {
              text: "The 3-Step Strategy to Catch Market Trends Early",
              icon: TrendingUp,
              bgColor: "from-green-500/15 to-green-600/10",
              iconBg: "bg-green-500/20",
              iconBorder: "border-green-400/30",
              iconColor: "text-green-400",
            },
            {
              text: "How to Identify High-Probability Trade Setups",
              icon: Target,
              bgColor: "from-orange-500/15 to-orange-600/10",
              iconBg: "bg-orange-500/20",
              iconBorder: "border-orange-400/30",
              iconColor: "text-orange-400",
            },
            {
              text: "When to Buy, Hold, or Exit with Confidence",
              icon: Shield,
              bgColor: "from-blue-500/15 to-blue-600/10",
              iconBg: "bg-blue-500/20",
              iconBorder: "border-blue-400/30",
              iconColor: "text-blue-400",
            },
            {
              text: "How to Manage Risk Like a Professional",
              icon: BookOpen,
              bgColor: "from-purple-500/15 to-purple-600/10",
              iconBg: "bg-purple-500/20",
              iconBorder: "border-purple-400/30",
              iconColor: "text-purple-400",
            },
            {
              text: "Tools & Indicators That Actually Work",
              icon: Zap,
              bgColor: "from-yellow-500/15 to-yellow-600/10",
              iconBg: "bg-yellow-500/20",
              iconBorder: "border-yellow-400/30",
              iconColor: "text-yellow-400",
            },
            {
              text: "Advanced Chart Analysis and Pattern Recognition",
              icon: BarChart3,
              bgColor: "from-teal-500/15 to-teal-600/10",
              iconBg: "bg-teal-500/20",
              iconBorder: "border-teal-400/30",
              iconColor: "text-teal-400",
            },
          ].map((item, index) => (
            <EnhancedCard key={index} delay={400 + index * 100} className="group relative">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} backdrop-blur-sm border border-gray-600/30 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-700 group-hover:scale-[1.02]`}
              />

              <div className="relative p-6 sm:p-8 lg:p-10 flex items-center space-x-4 sm:space-x-6">
                <div className="flex-shrink-0">
                  <div
                    className={`p-3 sm:p-4 ${item.iconBg} rounded-xl border ${item.iconBorder} group-hover:scale-110 transition-all duration-700`}
                  >
                    <item.icon className={`w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 ${item.iconColor}`} />
                  </div>
                </div>
                <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white font-medium leading-relaxed group-hover:text-green-50 transition-colors duration-500">
                  {item.text}
                </p>
              </div>
            </EnhancedCard>
          ))}
        </div>

        {/* CTA Button */}
        <EnhancedCard delay={1000}>
          <div className="text-center mt-8 sm:mt-12 lg:mt-16 xl:mt-20">
            <button
              onClick={() => handleButtonClick("reserve-seat")}
              disabled={buttonLoading === "reserve-seat"}
              className="group relative inline-flex items-center justify-center px-6 sm:px-8 lg:px-12 xl:px-16 py-3 sm:py-4 lg:py-6 xl:py-8 text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-white transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 active:scale-95 focus:outline-none focus:ring-4 focus:ring-orange-400/30 disabled:opacity-70"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-400/20 backdrop-blur-xl border border-orange-400/25 rounded-2xl shadow-2xl group-hover:shadow-orange-400/40 transition-all duration-700 group-hover:border-orange-300/40 group-hover:from-orange-500/30 group-hover:to-orange-400/30" />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-700 blur-sm" />

              <div className="relative flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
                {buttonLoading === "reserve-seat" ? (
                  <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 animate-spin" />
                ) : (
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500" />
                )}
                <span className="tracking-wide">
                  {buttonLoading === "reserve-seat" ? "Reserving..." : "Reserve Your Seat Now"}
                </span>
                {buttonLoading !== "reserve-seat" && (
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
