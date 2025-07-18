"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"

// Loading Skeleton Component
const LoadingSkeleton = ({ className = "" }: { className?: string }) => (
  <div className={`animate-pulse bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl ${className}`} />
)

// Enhanced Card Component with Loading State
interface EnhancedCardProps {
  children: React.ReactNode
  isLoading?: boolean
  className?: string
  delay?: number
}

export default function EnhancedCard({ children, isLoading = false, className = "", delay = 0 }: EnhancedCardProps) {
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
