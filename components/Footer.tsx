"use client"

import EnhancedCard from "./EnhancedCard"

interface FooterProps {
  scrollY: number
}

export default function Footer({ scrollY }: FooterProps) {
  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp group link
    const whatsappLink = "https://wa.me/+1234567890" // Replace with your WhatsApp number or group link
    window.open(whatsappLink, "_blank")
  }

  return (
    <>
      {/* Enhanced Footer Section */}
      <footer className="relative z-10 py-6 sm:py-8 lg:py-12 xl:py-16 2xl:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 border-t border-gray-800/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-center">
          <EnhancedCard delay={200}>
            <div className="mb-4 sm:mb-6 lg:mb-8">
              <div className="w-12 sm:w-16 lg:w-20 xl:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-green-400 via-orange-400 to-green-400 mx-auto rounded-full shadow-lg shadow-green-400/20 animate-gradient-x" />
            </div>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-3 sm:mb-4 lg:mb-6">
              Developed by{" "}
              <a
                href="https://devhencesolutions.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-orange-400 font-semibold hover:from-green-300 hover:to-orange-300 transition-all duration-500 cursor-pointer drop-shadow-lg"
              >
                Devhence Solution
              </a>
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-1 sm:space-y-0 sm:space-x-4 lg:space-x-6 text-gray-500 text-xs sm:text-sm lg:text-base">
              <span>© 2025 TRADESEF ACADEMY</span>
              <span className="hidden sm:inline opacity-50">•</span>
              <span>All Rights Reserved</span>
            </div>
          </EnhancedCard>
        </div>
      </footer>

      {/* Enhanced Bottom Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 lg:h-40 xl:h-48 bg-gradient-to-t from-green-500/8 via-green-500/4 to-transparent" />

      {/* Professional WhatsApp Floating Button */}
      <div
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 lg:bottom-10 lg:right-10 z-50 group cursor-pointer"
        onClick={handleWhatsAppClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleWhatsAppClick()
          }
        }}
        aria-label="Join WhatsApp Group"
      >
        {/* Outer Glow Ring */}
        <div className="absolute inset-0 w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 bg-gradient-to-r from-green-400/30 to-green-500/30 rounded-full animate-ping opacity-75 group-hover:opacity-100" />

        {/* Middle Glow Ring */}
        <div className="absolute inset-1 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-green-400/40 to-green-500/40 rounded-full animate-pulse opacity-60 group-hover:opacity-80" />

        {/* Main Button Container */}
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 bg-gradient-to-br from-green-500 via-green-400 to-green-600 rounded-full shadow-2xl transform transition-all duration-500 ease-out group-hover:scale-110 group-hover:shadow-green-400/50 group-active:scale-95">
          {/* Inner Highlight */}
          <div className="absolute inset-1 bg-gradient-to-br from-white/20 to-transparent rounded-full" />

          {/* WhatsApp SVG Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 text-white drop-shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
            </svg>
          </div>

          {/* Shimmer Effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer-whatsapp transition-opacity duration-300" />
        </div>

        {/* Professional Tooltip */}
        <div className="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <div className="relative bg-gray-900/95 backdrop-blur-sm text-white px-4 py-2 rounded-xl shadow-2xl border border-gray-700/50 whitespace-nowrap">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium">Join WhatsApp Group</span>
            </div>
            {/* Tooltip Arrow */}
            <div className="absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 border-t-6 border-transparent border-t-gray-900/95" />
          </div>
        </div>

        {/* Success Ripple Effect */}
        <div className="absolute inset-0 w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 bg-green-400/20 rounded-full scale-0 group-active:scale-150 group-active:opacity-0 transition-all duration-300" />
      </div>
    </>
  )
}
