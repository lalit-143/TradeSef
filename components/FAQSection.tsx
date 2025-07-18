"use client"

import { ChevronDown, ChevronUp } from "lucide-react"
import EnhancedCard from "./EnhancedCard"

interface FAQSectionProps {
  openFAQ: number | null
  toggleFAQ: (index: number) => void
}

export default function FAQSection({ openFAQ, toggleFAQ }: FAQSectionProps) {
  return (
    <div className="relative z-10 py-12 xl:py-16 px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="max-w-5xl mx-auto">
        <EnhancedCard delay={200}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 xl:mb-20 2xl:mb-24 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-300 to-green-500 drop-shadow-2xl tracking-tight">
            Frequently Asked Questions
          </h2>
        </EnhancedCard>

        <div className="space-y-3 sm:space-y-4 lg:space-y-6">
          {[
            {
              q: "Is this masterclass really free?",
              a: "Yes! You can reserve a seat at zero cost. You'll also get access to bonus material for attending live.",
            },
            {
              q: "Will there be a recording?",
              a: "A replay will be e-mailed for 24 hours, but the bonuses are only for live attendees.",
            },
            {
              q: "Do I need prior trading knowledge?",
              a: "No. We start from core concepts and quickly move to intermediate & pro strategies.",
            },
            {
              q: "How long is the session?",
              a: "Roughly 90 minutes + live Q&A at the end.",
            },
          ].map((faq, index) => (
            <EnhancedCard
              key={index}
              delay={400 + index * 100}
              className="group relative bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-600/30 overflow-hidden hover:border-gray-500/40 hover:bg-gray-800/40 transition-all duration-700"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-4 sm:p-6 lg:p-8 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-green-400/30 rounded-2xl transition-all duration-300"
              >
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-white pr-4 group-hover:text-green-50 transition-colors duration-300">
                  {faq.q}
                </h3>
                <div className="flex-shrink-0 p-1 rounded-full bg-green-500/20 border border-green-400/30 transition-all duration-300 group-hover:bg-green-500/30 group-hover:rotate-180">
                  {openFAQ === index ? (
                    <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-green-400" />
                  ) : (
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-green-400" />
                  )}
                </div>
              </button>

              <div
                className={`px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-400 leading-relaxed transition-all duration-500 ${
                  openFAQ === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {faq.a}
              </div>
            </EnhancedCard>
          ))}
        </div>
      </div>
    </div>
  )
}
