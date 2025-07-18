"use client"

import { Users, Target, TrendingUp, BookOpen, Shield, DollarSign } from "lucide-react"
import EnhancedCard from "./EnhancedCard"

export default function WorkshopSection() {
  return (
    <div className="relative z-10 py-12 xl:py-16 px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <EnhancedCard delay={200}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-8 sm:mb-12 lg:mb-16 xl:mb-20 2xl:mb-24 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-300 to-green-500 drop-shadow-2xl tracking-tight">
            This Workshop is For You If...
          </h2>
        </EnhancedCard>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
          {[
            {
              text: "You're new and want to start trading the right way",
              icon: Target,
              bgColor: "from-green-500/15 to-green-600/10",
              iconBg: "bg-green-500/20",
              iconBorder: "border-green-400/30",
              iconColor: "text-green-400",
            },
            {
              text: "You've traded before but struggle with consistency",
              icon: TrendingUp,
              bgColor: "from-orange-500/15 to-orange-600/10",
              iconBg: "bg-orange-500/20",
              iconBorder: "border-orange-400/30",
              iconColor: "text-orange-400",
            },
            {
              text: "You're tired of fake tips and want real, tested systems",
              icon: Shield,
              bgColor: "from-blue-500/15 to-blue-600/10",
              iconBg: "bg-blue-500/20",
              iconBorder: "border-blue-400/30",
              iconColor: "text-blue-400",
            },
            {
              text: "You want to build a side income from the stock market",
              icon: DollarSign,
              bgColor: "from-purple-500/15 to-purple-600/10",
              iconBg: "bg-purple-500/20",
              iconBorder: "border-purple-400/30",
              iconColor: "text-purple-400",
            },
            {
              text: "You're committed to long-term wealth creation",
              icon: BookOpen,
              bgColor: "from-yellow-500/15 to-yellow-600/10",
              iconBg: "bg-yellow-500/20",
              iconBorder: "border-yellow-400/30",
              iconColor: "text-yellow-400",
            },
            {
              text: "You want to learn from experienced professionals",
              icon: Users,
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

              <div className="relative p-6 sm:p-8 lg:p-10 text-center">
                <div className="mb-6 flex justify-center">
                  <div
                    className={`p-4 sm:p-5 ${item.iconBg} rounded-2xl border ${item.iconBorder} group-hover:scale-110 transition-all duration-700`}
                  >
                    <item.icon className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 ${item.iconColor}`} />
                  </div>
                </div>
                <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white leading-relaxed group-hover:text-blue-50 transition-colors duration-500">
                  {item.text}
                </p>
              </div>
            </EnhancedCard>
          ))}
        </div>
      </div>
    </div>
  )
}
