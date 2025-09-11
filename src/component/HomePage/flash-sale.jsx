"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Star } from "lucide-react"
import { useState, useEffect } from "react"

export function FlashSale() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const flashProducts = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      originalPrice: 299,
      salePrice: 89,
      image: "/premium-wireless-headphones.png",
      rating: 4.8,
      discount: 70,
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      originalPrice: 399,
      salePrice: 149,
      image: "/smart-fitness-watch.png",
      rating: 4.6,
      discount: 63,
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      originalPrice: 199,
      salePrice: 59,
      image: "/bluetooth-speaker.png",
      rating: 4.7,
      discount: 70,
    },
    {
      id: 4,
      name: "Gaming Mouse",
      originalPrice: 129,
      salePrice: 39,
      image: "/gaming-mouse.png",
      rating: 4.9,
      discount: 70,
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-red-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <h2 className="text-3xl font-bold text-foreground">⚡ Flash Sale</h2>
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          </div>
          <p className="text-muted-foreground mb-6">Limited time offers - Grab them before they're gone!</p>

          <div className="flex items-center justify-center gap-4 mb-8">
            <Clock className="h-5 w-5 text-red-500" />
            <div className="flex gap-2">
              <div className="bg-red-500 text-white px-3 py-2 rounded-lg font-bold">
                {String(timeLeft.hours).padStart(2, "0")}
              </div>
              <span className="text-2xl font-bold">:</span>
              <div className="bg-red-500 text-white px-3 py-2 rounded-lg font-bold">
                {String(timeLeft.minutes).padStart(2, "0")}
              </div>
              <span className="text-2xl font-bold">:</span>
              <div className="bg-red-500 text-white px-3 py-2 rounded-lg font-bold">
                {String(timeLeft.seconds).padStart(2, "0")}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {flashProducts.map((product, index) => (
            <Card
              key={product.id}
              className="group hover:shadow-xl transition-all duration-300 animate-fade-in-up border-2 hover:border-red-200"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-4">
                <div className="relative mb-4">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">-{product.discount}%</Badge>
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full p-1">
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-medium">{product.rating}</span>
                    </div>
                  </div>
                </div>

                <h3 className="font-semibold text-sm mb-2 line-clamp-2">{product.name}</h3>

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg font-bold text-red-500">${product.salePrice}</span>
                  <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                </div>

                <Button className="w-full bg-red-500 hover:bg-red-600 text-white border-0">Add to Cart</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
