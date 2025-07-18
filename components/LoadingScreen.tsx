"use client"

export default function LoadingScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-gray-900 flex items-center justify-center">
      <div className="text-center space-y-8">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-green-400/20 border-t-green-400 rounded-full animate-spin mx-auto" />
          <div
            className="absolute inset-0 w-20 h-20 border-4 border-transparent border-t-orange-400/50 rounded-full animate-spin mx-auto"
            style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-orange-400">
            TRADESEF ACADEMY
          </h2>
          <p className="text-gray-400 animate-pulse">Loading your trading journey...</p>
        </div>
      </div>
    </div>
  )
}
