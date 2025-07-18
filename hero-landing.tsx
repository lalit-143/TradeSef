"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import LoadingScreen from "./components/LoadingScreen"
import BackgroundElements from "./components/BackgroundElements"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import LearningSection from "./components/LearningSection"
import WorkshopSection from "./components/WorkshopSection"
import TrustSection from "./components/TrustSection"
import MentorSection from "./components/MentorSection"
import BonusSection from "./components/BonusSection"
import EliteSection from "./components/EliteSection"
import FAQSection from "./components/FAQSection"
import Footer from "./components/Footer"

// Loading Skeleton Component
const LoadingSkeleton = ({ className = "" }: { className?: string }) => (
  <div className={`animate-pulse bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl ${className}`} />
)

// Enhanced Card Component with Loading State
const EnhancedCard = ({
  children,
  isLoading = false,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode
  isLoading?: boolean
  className?: string
  delay?: number
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1, rootMargin: "50px" },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [delay])

  if (isLoading) {
    return <LoadingSkeleton className={`h-64 ${className}`} />
  }

  return (
    <div
      ref={cardRef}
      className={`transform transition-all duration-1000 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  )
}

export default function Component() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [buttonLoading, setButtonLoading] = useState<string | null>(null)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => setIsLoading(false), 2000)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleButtonClick = (buttonId: string) => {
    setButtonLoading(buttonId)
    setTimeout(() => setButtonLoading(null), 2000)
  }

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-gray-900 relative overflow-hidden">
      <BackgroundElements mousePosition={mousePosition} scrollY={scrollY} />

      <div ref={heroRef}>
        <HeroSection buttonLoading={buttonLoading} handleButtonClick={handleButtonClick} />
      </div>

      <AboutSection />
      <LearningSection buttonLoading={buttonLoading} handleButtonClick={handleButtonClick} />
      <WorkshopSection />
      <TrustSection buttonLoading={buttonLoading} handleButtonClick={handleButtonClick} />
      <MentorSection />
      <BonusSection />
      <EliteSection buttonLoading={buttonLoading} handleButtonClick={handleButtonClick} />
      <FAQSection openFAQ={openFAQ} toggleFAQ={toggleFAQ} />
      <Footer scrollY={scrollY} />
    </div>
  )
}
