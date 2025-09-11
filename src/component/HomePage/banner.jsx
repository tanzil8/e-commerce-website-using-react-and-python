"use client"

import { X } from "lucide-react"
import { useState } from "react"

export function Banner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-red-600 text-white py-2 px-4 text-center relative animate-slide-in-left">
      <div className="flex items-center justify-center gap-2">
        <span className="text-sm font-medium">🔥 FLASH SALE: Up to 70% OFF - Limited Time Only!</span>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 hover:bg-red-700 rounded-full p-1 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
