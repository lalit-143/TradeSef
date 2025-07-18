"use client"

import {
  TrendingUp,
  TrendingDown,
  Bitcoin,
  PieChart,
  LineChart,
  Activity,
  CandlestickChart,
  BarChart3,
  DollarSign,
  Coins,
  Target,
  ArrowUpRight,
  ArrowDownRight,
  Zap,
  Globe,
  Calculator,
  CreditCard,
  Banknote,
  Wallet,
  TrendingUpIcon as TrendingUpDown,
} from "lucide-react"

interface BackgroundElementsProps {
  mousePosition: { x: number; y: number }
  scrollY: number
}

export default function BackgroundElements({ mousePosition, scrollY }: BackgroundElementsProps) {
  return (
    <div className="absolute inset-0">
      {/* Enhanced Gradient Background - Green to Orange */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900" />
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 via-gray-900/40 to-orange-900/20" />
      <div className="absolute inset-0 bg-gradient-to-br from-green-800/10 via-transparent to-orange-800/10" />

      {/* Additional Overlay for Better Dark Theme Integration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/30 to-transparent" />

      {/* Trading Icons - Floating and Moving */}
      <div className="absolute top-20 left-8 sm:top-24 sm:left-16 lg:left-20 animate-float-enhanced">
        <Bitcoin className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-orange-400/30 drop-shadow-lg" />
      </div>

      <div className="absolute top-32 right-12 sm:top-40 sm:right-24 lg:right-32 animate-float-enhanced-delayed">
        <CandlestickChart className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-green-400/25 drop-shadow-lg" />
      </div>

      <div className="absolute top-48 left-16 sm:top-56 sm:left-32 lg:left-40 animate-float-enhanced">
        <PieChart className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-400/20 drop-shadow-lg" />
      </div>

      <div className="absolute bottom-40 left-12 sm:bottom-48 sm:left-24 lg:left-32 animate-float-enhanced-delayed">
        <LineChart className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-green-300/25 drop-shadow-lg" />
      </div>

      <div className="absolute top-60 right-20 sm:top-72 sm:right-48 lg:right-56 animate-float-enhanced">
        <Activity className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-yellow-400/30 drop-shadow-lg" />
      </div>

      <div className="absolute bottom-32 right-8 sm:bottom-40 sm:right-16 lg:right-20 animate-float-enhanced-delayed">
        <Coins className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-orange-400/25 drop-shadow-lg" />
      </div>

      <div className="absolute top-80 left-24 sm:top-96 sm:left-48 lg:left-56 animate-float-enhanced">
        <Target className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-purple-400/20 drop-shadow-lg" />
      </div>

      <div className="absolute bottom-60 right-32 sm:bottom-72 sm:right-64 lg:right-80 animate-float-enhanced-delayed">
        <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-green-500/30 drop-shadow-lg" />
      </div>

      <div className="absolute top-40 right-40 sm:top-48 sm:right-80 lg:right-96 animate-float-enhanced">
        <TrendingDown className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-red-400/15 drop-shadow-lg" />
      </div>

      <div className="absolute top-16 left-4 sm:top-20 sm:left-10 lg:left-16 animate-float-enhanced-delayed">
        <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-green-400/35 drop-shadow-lg" />
      </div>

      <div className="absolute top-36 right-6 sm:top-44 sm:right-18 lg:right-28 animate-float-enhanced">
        <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-orange-400/25 drop-shadow-lg" />
      </div>

      <div className="absolute bottom-28 left-6 sm:bottom-36 sm:left-18 lg:left-28 animate-float-enhanced-delayed">
        <Globe className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-green-300/20 drop-shadow-lg" />
      </div>

      <div className="absolute top-52 right-14 sm:top-64 sm:right-36 lg:right-44 animate-float-enhanced">
        <Zap className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-yellow-400/30 drop-shadow-lg" />
      </div>

      <div className="absolute bottom-44 right-2 sm:bottom-52 sm:right-8 lg:right-12 animate-float-enhanced-delayed">
        <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-green-400/30 drop-shadow-lg" />
      </div>

      <div className="absolute top-72 left-8 sm:top-88 sm:left-20 lg:left-28 animate-float-enhanced">
        <Calculator className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-400/20 drop-shadow-lg" />
      </div>

      <div className="absolute bottom-20 right-24 sm:bottom-28 sm:right-52 lg:right-64 animate-float-enhanced-delayed">
        <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-purple-400/25 drop-shadow-lg" />
      </div>

      <div className="absolute top-28 left-32 sm:top-36 sm:left-64 lg:left-80 animate-float-enhanced">
        <Banknote className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-green-500/25 drop-shadow-lg" />
      </div>

      <div className="absolute bottom-52 left-20 sm:bottom-64 sm:left-44 lg:left-60 animate-float-enhanced-delayed">
        <Wallet className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-orange-400/20 drop-shadow-lg" />
      </div>

      <div className="absolute top-64 right-28 sm:top-80 sm:right-60 lg:right-72 animate-float-enhanced">
        <TrendingUpDown className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-blue-500/25 drop-shadow-lg" />
      </div>

      <div className="absolute bottom-36 left-28 sm:bottom-44 sm:left-56 lg:left-72 animate-float-enhanced-delayed">
        <ArrowDownRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-red-400/20 drop-shadow-lg" />
      </div>

      {/* Profit/Loss Indicators - Moving Particles */}
      <div className="absolute top-1/4 left-1/3 animate-profit-pulse">
        <div className="flex items-center space-x-1 bg-green-500/10 backdrop-blur-sm rounded-full px-2 py-1 border border-green-400/20">
          <ArrowUpRight className="w-3 h-3 text-green-400" />
          <span className="text-xs text-green-400 font-semibold">+24.5%</span>
        </div>
      </div>

      <div className="absolute top-1/2 right-1/4 animate-profit-pulse-delayed">
        <div className="flex items-center space-x-1 bg-orange-500/10 backdrop-blur-sm rounded-full px-2 py-1 border border-orange-400/20">
          <TrendingUp className="w-3 h-3 text-orange-400" />
          <span className="text-xs text-orange-400 font-semibold">₹12.3K</span>
        </div>
      </div>

      <div className="absolute bottom-1/3 left-1/4 animate-profit-pulse">
        <div className="flex items-center space-x-1 bg-blue-500/10 backdrop-blur-sm rounded-full px-2 py-1 border border-blue-400/20">
          <Bitcoin className="w-3 h-3 text-blue-400" />
          <span className="text-xs text-blue-400 font-semibold">BTC</span>
        </div>
      </div>

      <div className="absolute top-3/4 right-1/3 animate-profit-pulse-delayed">
        <div className="flex items-center space-x-1 bg-purple-500/10 backdrop-blur-sm rounded-full px-2 py-1 border border-purple-400/20">
          <Coins className="w-3 h-3 text-purple-400" />
          <span className="text-xs text-purple-400 font-semibold">+18%</span>
        </div>
      </div>

      <div className="absolute bottom-1/4 right-1/2 animate-profit-pulse">
        <div className="flex items-center space-x-1 bg-yellow-500/10 backdrop-blur-sm rounded-full px-2 py-1 border border-yellow-400/20">
          <Zap className="w-3 h-3 text-yellow-400" />
          <span className="text-xs text-yellow-400 font-semibold">LIVE</span>
        </div>
      </div>

      <div className="absolute top-1/6 left-1/2 animate-profit-pulse-delayed">
        <div className="flex items-center space-x-1 bg-emerald-500/10 backdrop-blur-sm rounded-full px-2 py-1 border border-emerald-400/20">
          <Target className="w-3 h-3 text-emerald-400" />
          <span className="text-xs text-emerald-400 font-semibold">HIT</span>
        </div>
      </div>

      {/* Moving Chart Lines */}
      <div className="absolute inset-0 opacity-4">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <path
            d="M0 600 Q300 400 600 500 T1200 450"
            stroke="rgba(34,197,94,0.08)"
            strokeWidth="1.5"
            fill="none"
            className="animate-draw-line"
          />
          <path
            d="M0 650 Q400 450 800 550 T1200 500"
            stroke="rgba(251,146,60,0.06)"
            strokeWidth="1.5"
            fill="none"
            className="animate-draw-line-delayed"
          />
          <path
            d="M0 550 Q200 350 400 450 T800 400 T1200 380"
            stroke="rgba(59,130,246,0.05)"
            strokeWidth="1"
            fill="none"
            className="animate-draw-line-slow"
          />
        </svg>
      </div>

      {/* Subtle Ambient Particles */}
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-green-500/2 rounded-full blur-3xl animate-pulse-ambient-slow" />
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-orange-500/2 rounded-full blur-3xl animate-pulse-ambient-slow" />
      <div className="absolute top-1/2 left-1/4 w-60 h-60 bg-blue-500/1.5 rounded-full blur-2xl animate-pulse-ambient-delayed" />
      <div className="absolute bottom-1/2 right-1/4 w-60 h-60 bg-purple-500/1.5 rounded-full blur-2xl animate-pulse-ambient" />
    </div>
  )
}
