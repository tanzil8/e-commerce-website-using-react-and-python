"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, ShoppingCart } from "lucide-react"
import { useState } from "react"

export function BestSelling() {
  const [favorites, setFavorites] = useState([])

  const toggleFavorite = (id) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]))
  }

  const bestSellingProducts = [
    {
      id: 1,
      name: "Classic White Sneakers",
      price: 129,
      image: "/classic-white-sneakers.jpg",
      rating: 4.9,
      reviews: 2847,
      badge: "#1 Best Seller",
    },
    {
      id: 2,
      name: "Leather Crossbody Bag",
      price: 89,
      image: "/leather-crossbody-bag.png",
      rating: 4.8,
      reviews: 1923,
      badge: "Top Rated",
    },
    {
      id: 3,
      name: "Wireless Earbuds Pro",
      price: 199,
      image: "/wireless-earbuds-pro.jpg",
      rating: 4.7,
      reviews: 3156,
      badge: "Editor's Choice",
    },
    {
      id: 4,
      name: "Minimalist Watch",
      price: 249,
      image: "/minimalist-watch.png",
      rating: 4.9,
      reviews: 1654,
      badge: "Premium",
    },
    {
      id: 5,
      name: "Cotton T-Shirt",
      price: 29,
      image: "/cotton-t-shirt.jpg",
      rating: 4.6,
      reviews: 4521,
      badge: "Best Value",
    },
    {
      id: 6,
      name: "Denim Jacket",
      price: 79,
      image: "/classic-denim-jacket.png",
      rating: 4.8,
      reviews: 987,
      badge: "Trending",
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">🏆 Best Selling Products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular items loved by thousands of customers worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bestSellingProducts.map((product, index) => (
            <Card
              key={product.id}
              className="group hover:shadow-2xl transition-all duration-300 animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-3 left-3 bg-green-500 hover:bg-green-600">{product.badge}</Badge>
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
                  >
                    <Heart
                      className={`h-4 w-4 transition-colors ${
                        favorites.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-600"
                      }`}
                    />
                  </button>

                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" className="bg-black hover:bg-gray-800 text-white border-0">
                      <ShoppingCart className="h-4 w-4 mr-1" />
                      Quick Add
                    </Button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {product.rating} ({product.reviews.toLocaleString()})
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-foreground">${product.price}</span>
                    <Button
                      variant="outline"
                      className="hover:bg-black hover:text-white bg-white text-black border-gray-300"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="hover:bg-black hover:text-white bg-white text-black border-gray-300"
          >
            View All Best Sellers
          </Button>
        </div>
      </div>
    </section>
  )
}
