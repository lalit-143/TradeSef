"use client"

import { MessageCircle, ArrowRight, Loader2, Zap, TrendingUp, Shield } from "lucide-react"
import EnhancedCard from "./EnhancedCard"
import "../styles/scroll-animations.css"
import "../styles/scroll-animations.css"

interface HeroSectionProps {
  buttonLoading: string | null
  handleButtonClick: (buttonId: string) => void
}

export default function HeroSection({ buttonLoading, handleButtonClick }: HeroSectionProps) {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 mt-8 text-center">
      {/* Enhanced Logo with Scroll Animation */}
      <EnhancedCard className="mb-6 lg:mb-8" delay={80}>
        <div className="group">
          {/* <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-300 to-green-500 tracking-wider drop-shadow-2xl group-hover:scale-105 transition-transform duration-700">
            TRADESEF
          </h1>
          <div className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-light text-gray-300 tracking-[0.3em] mt-1 sm:mt-2 drop-shadow-lg opacity-90">
            ACADEMY
          </div> */}

          <div className="flex justify-center">
            <img
              src="/logo_trans.png"
              alt="Tradesef Logo"
              className="mx-auto w-44 lg:w-48 h-auto drop-shadow-2xl"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="w-24 lg:w-28 h-0.5 sm:h-1 bg-gradient-to-r from-green-400 via-orange-400 to-green-400 mx-auto mt-2 sm:mt-4 rounded-full shadow-lg shadow-green-400/30 animate-gradient-x" />
        </div>
      </EnhancedCard>

      {/* Enhanced Hero Content */}
      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6 lg:space-y-8 xl:space-y-10">
        {/* Main Headline with Staggered Animation */}
        <EnhancedCard delay={120}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white leading-tight px-2 sm:px-4 tracking-tight">
            <span className="inline-block animate-slide-in-left-fast">Unlock </span>{" "}
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-300 drop-shadow-lg animate-slide-in-up-fast">
              10x
            </span>{" "}
            <span className="inline-block animate-slide-in-right-fast">-</span>
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-300 drop-shadow-lg animate-slide-in-up-fast">
              100x
            </span>{" "}
            <br />
            <span className="inline-block animate-slide-in-left-fast" style={{ animationDelay: "0.08s" }}>
              Crypto
            </span>{" "}
            <span
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 drop-shadow-lg animate-slide-in-up-fast"
              style={{ animationDelay: "0.12s" }}
            >
               Returns
            </span>
          </h2>
        </EnhancedCard>

        {/* Secondary Headline */}
        <EnhancedCard delay={180}>
          <h3
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-gray-200 leading-relaxed px-2 sm:px-4 opacity-0 animate-fade-in-up-fast"
            style={{ animationDelay: "0.18s", animationFillMode: "forwards" }}
          >
            Learn How Top Traders Spot{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-300 to-green-500 drop-shadow-lg">
              Opportunities
            </span>{" "}
            Before the Crowd
          </h3>
        </EnhancedCard>

        {/* Enhanced Subheading */}
        <EnhancedCard delay={240}>
          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-gray-300 max-w-6xl mx-auto leading-relaxed px-2 sm:px-4 opacity-0 animate-fade-in-up-fast"
            style={{ animationDelay: "0.24s", animationFillMode: "forwards" }}
          >
            Get exclusive access to real-time stock market signals, actionable insights, and a community that wins —{" "}
            <span className="text-green-400 font-semibold drop-shadow-lg">consistently</span>.
          </p>
        </EnhancedCard>

        {/* Enhanced CTA Button */}
        <EnhancedCard delay={300}>
          <div className="pt-4 xl:pt-6">
            <button
              onClick={() => handleButtonClick("main-cta")}
              disabled={buttonLoading === "main-cta"}
              className="group relative inline-flex items-center justify-center px-6 xl:px-12 py-4 xl:py-6 text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-white transition-all duration-400 transform hover:scale-102 hover:-translate-y-2 active:scale-95 focus:outline-none focus:ring-4 focus:ring-green-400/30 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {/* Enhanced Button Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-400/20 backdrop-blur-xl border border-green-400/25 rounded-2xl shadow-2xl group-hover:shadow-green-400/40 transition-all duration-400 group-hover:border-green-300/40 group-hover:from-green-500/30 group-hover:to-green-400/30 group-hover:shadow-2xl" />

              {/* Multi-layered Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-400 blur-sm" />
              <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-green-400 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-400 blur-md scale-110" />

              {/* Button Content */}
              <div className="relative flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
                {buttonLoading === "main-cta" ? (
                  <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 animate-spin" />
                ) : (
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300" />
                )}
                <span className="tracking-wide">
                  {buttonLoading === "main-cta" ? "Connecting..." : "Join WhatsApp Group"}
                </span>
                {buttonLoading !== "main-cta" && (
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
                )}
              </div>

              {/* Enhanced Shimmer Effect */}
              <div className="absolute inset-0 -top-1 -bottom-1 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:animate-shimmer-enhanced opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </button>
          </div>
        </EnhancedCard>

        {/* Enhanced Stats Section */}
        <EnhancedCard delay={360}>
          <div className="pt-8 xl:pt-12 flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-16 xl:gap-20 text-center px-2 sm:px-4">
            {[
              { value: "5K+", label: "Active Traders", color: "green" },
              { value: "92%", label: "Success Rate", color: "orange" },
              { value: "24/7", label: "Market Coverage", color: "yellow" },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div
                  className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-${stat.color}-400 mb-1 sm:mb-2 drop-shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </EnhancedCard>

        {/* Simplified Trust Indicators */}
        <EnhancedCard delay={420}>
          <div className="pt-6 sm:pt-8 lg:pt-10 flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 text-gray-400 text-xs sm:text-sm lg:text-base px-2 sm:px-4">
            {[
              { text: "Live Trading Signals", icon: Zap, color: "green" },
              { text: "Expert Analysis", icon: TrendingUp, color: "orange" },
              { text: "24/7 Support", icon: Shield, color: "yellow" },
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-2 group cursor-default">
                <div className={`w-2 h-2 bg-${item.color}-400 rounded-full animate-pulse`} />
                <item.icon
                  className={`w-4 h-4 text-${item.color}-400 opacity-70 group-hover:opacity-100 transition-opacity duration-300`}
                />
                <span className="group-hover:text-gray-300 transition-colors duration-300">{item.text}</span>
              </div>
            ))}
          </div>
        </EnhancedCard>
      </div>
    </div>
  )
}
