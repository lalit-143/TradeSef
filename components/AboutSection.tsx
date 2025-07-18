"use client"
import EnhancedCard from "./EnhancedCard"

export default function AboutSection() {
  return (
    <div className="relative z-10 py-12 sm:py-16 lg:py-20 xl:py-24 2xl:py-32 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
      <div className="max-w-4xl mx-auto">
        <EnhancedCard delay={200}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 text-center text-green-400 drop-shadow-lg">
            About Us
          </h2>
        </EnhancedCard>

        <EnhancedCard delay={400}>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/15 to-orange-400/15 backdrop-blur-md border border-green-300/15 rounded-3xl shadow-xl group-hover:shadow-green-300/20 transition-all duration-700" />

            <div className="relative p-8 sm:p-10 lg:p-12 xl:p-16 text-center">
              <div className="mb-4">
                <span className="text-green-400 font-bold text-lg sm:text-xl lg:text-2xl">TRADESEF ACADEMY</span>
              </div>
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-300 leading-relaxed">
                is a trusted community delivering real-time stock market signals, in-depth analysis, and premium trading
                education — empowering traders at every level to achieve{" "}
                <span className="text-green-400 font-semibold">financial freedom</span>.
              </p>
            </div>
          </div>
        </EnhancedCard>

        {/* Centered image below the content card */}
        <div className="flex justify-center mt-10">
          <img
            src="/loss_profit.webp"
            alt="Profit and Loss Illustration"
            className="w-full max-w-md sm:max-w-4xl h-auto rounded-3xl shadow-md object-contain"
            style={{}}
          />
        </div>
      </div>
    </div>
  )
}
