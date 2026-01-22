"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, Eye, Star, ArrowRight } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Premium Cotton T-Shirt",
    price: 89,
    originalPrice: 120,
    rating: 4.8,
    reviews: 124,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUc2CyapAkcsbH_dKVJnoVoPlND27rtf5X1w&s",
    badge: "Best Seller",
    colors: ["#000000", "#FFFFFF", "#808080"],
  },
  {
    id: 2,
    name: "Luxury Watch Collection",
    price: 299,
    originalPrice: 399,
    rating: 4.9,
    reviews: 89,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUc2CyapAkcsbH_dKVJnoVoPlND27rtf5X1w&s",
    badge: "Limited",
    colors: ["#C0C0C0", "#FFD700", "#000000"],
  },
  {
    id: 3,
    name: "Designer Sneakers",
    price: 159,
    originalPrice: 200,
    rating: 4.7,
    reviews: 203,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUc2CyapAkcsbH_dKVJnoVoPlND27rtf5X1w&s",
    badge: "New",
    colors: ["#FFFFFF", "#000000", "#FF0000"],
  },
  {
    id: 4,
    name: "Leather Handbag",
    price: 249,
    originalPrice: 320,
    rating: 4.9,
    reviews: 156,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUc2CyapAkcsbH_dKVJnoVoPlND27rtf5X1w&s",
    badge: "Trending",
    colors: ["#8B4513", "#000000", "#FFFFFF"],
  },
  {
    id: 5,
    name: "Sunglasses Collection",
    price: 129,
    originalPrice: 180,
    rating: 4.6,
    reviews: 78,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUc2CyapAkcsbH_dKVJnoVoPlND27rtf5X1w&s",
    badge: "Sale",
    colors: ["#000000", "#8B4513", "#C0C0C0"],
  },
  {
    id: 6,
    name: "Casual Jacket",
    price: 199,
    originalPrice: 280,
    rating: 4.8,
    reviews: 167,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUc2CyapAkcsbH_dKVJnoVoPlND27rtf5X1w&s",
    badge: "Popular",
    colors: ["#000000", "#808080", "#000080"],
  },
]

export function FeaturedProducts() {
  const [hoveredProduct, setHoveredProduct] = useState(null)

  return (
    <section className="py-16 lg:py-24 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12 animate-fade-in-up">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Featured Products</h2>
            <p className="text-muted-foreground text-lg">Handpicked items just for you</p>
          </div>

          <Button variant="outline" className="hidden sm:flex group bg-transparent">
            View All
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="group cursor-pointer border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden bg-secondary/20">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Badge */}
                  <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">{product.badge}</Badge>

                  {/* Quick Actions */}
                  <div
                    className={`absolute top-3 right-3 flex flex-col gap-2 transition-all duration-300 ${
                      hoveredProduct === product.id ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                    }`}
                  >
                    <Button
                      size="icon"
                      variant="secondary"
                      className="h-8 w-8 hover:bg-primary hover:text-primary-foreground"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="h-8 w-8 hover:bg-primary hover:text-primary-foreground"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Add to Cart Overlay */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent transition-all duration-300 ${
                      hoveredProduct === product.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                  >
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group">
                      <ShoppingCart className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                      Add to Cart
                    </Button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-200 text-balance">
                      {product.name}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${
                              i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                  </div>

                  {/* Colors */}
                  <div className="flex items-center gap-2">
                    {product.colors.map((color, i) => (
                      <div
                        key={i}
                        className="w-4 h-4 rounded-full border border-border cursor-pointer hover:scale-110 transition-transform duration-200"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-foreground">${product.price}</span>
                    <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                    <Badge variant="secondary" className="text-xs">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="flex justify-center mt-8 sm:hidden">
          <Button variant="outline" className="group bg-transparent">
            View All Products
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </div>
      </div>
    </section>
  )
}
