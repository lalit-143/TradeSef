"use client"

import { User, CheckCircle } from "lucide-react"
import EnhancedCard from "./EnhancedCard"

export default function MentorSection() {
  return (
    <div className="relative z-10 py-12 xl:py-16 px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <EnhancedCard delay={200}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-8 sm:mb-12 lg:mb-16 xl:mb-20 2xl:mb-24 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-300 to-green-500 drop-shadow-2xl tracking-tight">
            Meet the experts!
          </h2>
        </EnhancedCard>

        <EnhancedCard delay={400}>
          <div className="relative group max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/40 to-gray-900/30 backdrop-blur-sm border border-gray-600/30 rounded-3xl shadow-lg group-hover:shadow-xl transition-all duration-700" />

            <div className="relative p-6 lg:p-8 xl:p-12">
              <div className="mb-12 flex justify-center">
                <div className="p-6 sm:p-8 bg-green-500/20 rounded-full border border-green-400/30 group-hover:scale-105 transition-all duration-700">
                  <User className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-green-400" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed mb-8">
                {[
                  "12+ years in the stock market",
                  "SEBI-certified research analyst",
                  "Helped 1,200+ traders go from losses to consistent profits",
                  "Featured in MoneyControl, ET Now, and InvestSmart Weekly",
                ].map((item, index) => (
                    <div
                    key={index}
                    className="flex items-center space-x-3 group/item hover:scale-105 transition-transform duration-500 text-left"
                    >
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0" />
                    <span className="group-hover/item:text-green-100 transition-colors duration-300">{item}</span>
                    </div>
                ))}
              </div>

              <div className="p-4 sm:p-6 bg-green-500/10 backdrop-blur-sm rounded-2xl border border-green-400/20">
                <blockquote className="text-lg sm:text-xl lg:text-2xl text-green-400 font-semibold italic text-center">
                  "Trading is a skill. Once you learn it, nobody can take it from you."
                </blockquote>
              </div>
            </div>
          </div>
        </EnhancedCard>
      </div>
    </div>
  )
}
