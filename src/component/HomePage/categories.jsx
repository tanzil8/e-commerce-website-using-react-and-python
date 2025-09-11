"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Shirt, Watch, Footprints, Glasses, Gem, Briefcase } from "lucide-react"

const categories = [
  {
    name: "Clothing",
    icon: Shirt,
    count: "200+ items",
    image: "/modern-clothing-collection.png",
  },
  {
    name: "Accessories",
    icon: Watch,
    count: "150+ items",
    image: "/luxury-accessories-watches.jpg",
  },
  {
    name: "Footwear",
    icon: Footprints,
    count: "100+ items",
    image: "/premium-shoes-sneakers.jpg",
  },
  {
    name: "Eyewear",
    icon: Glasses,
    count: "80+ items",
    image: "/designer-sunglasses-eyewear.jpg",
  },
  {
    name: "Jewelry",
    icon: Gem,
    count: "120+ items",
    image: "/elegant-jewelry-collection.png",
  },
  {
    name: "Bags",
    icon: Briefcase,
    count: "90+ items",
    image: "/luxury-handbags-backpacks.jpg",
  },
]

export function Categories() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Shop by Category</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Discover our carefully curated collections across different categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card
                key={category.name}
                className="group cursor-pointer border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-4 text-center">
                  <div className="relative mb-4">
                    <div className="aspect-square rounded-lg overflow-hidden bg-secondary/50 mb-3">
                      <img
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-card border border-border rounded-full p-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-200">
                    {category.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">{category.count}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
