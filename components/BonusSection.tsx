"use client"

import { BookOpen, Target, Users, Gift } from "lucide-react"
import EnhancedCard from "./EnhancedCard"

export default function BonusSection() {
  return (
    <div className="relative z-10 py-12 xl:py-16 px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <EnhancedCard delay={200}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-6 sm:mb-8 lg:mb-12 xl:mb-16 2xl:mb-20 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-300 to-green-500 drop-shadow-2xl tracking-tight">
            Free Bonuses Worth ₹5,000+
          </h2>
        </EnhancedCard>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
          {[
            { icon: BookOpen, title: '"Smart Trader\'s Playbook"', desc: "Your post-class PDF", color: "green" },
            { icon: Target, title: '"Entry/Exit Checklist"', desc: "A real-world cheat sheet", color: "orange" },
            { icon: Users, title: "Lifetime Access to Demo Signal Group", desc: "Trial version", color: "purple" },
          ].map((item, index) => (
            <EnhancedCard key={index} delay={400 + index * 150} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/40 to-gray-900/30 backdrop-blur-sm border border-gray-600/30 rounded-3xl shadow-lg group-hover:shadow-xl transition-all duration-700 group-hover:scale-[1.02]" />

              {/* Gift Badge */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-700">
                <Gift className="w-4 h-4 text-white" />
              </div>

              <div className="relative p-6 sm:p-8 lg:p-10 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 sm:p-5 bg-green-500/20 rounded-2xl border border-green-400/30 group-hover:scale-110 transition-all duration-700">
                    <item.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:w-8 text-green-400" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-3 group-hover:text-green-50 transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                  {item.desc}
                </p>
              </div>
            </EnhancedCard>
          ))}
        </div>
      </div>
    </div>
  )
}
