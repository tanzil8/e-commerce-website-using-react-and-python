"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                Discover Your
                <span className="block text-primary">Perfect Style</span>
              </h1>
              <p className="text-lg text-muted-foreground text-pretty max-w-md">
                Explore our curated collection of premium fashion and lifestyle products. Quality meets elegance in
                every piece.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="group bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105"
              >
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="group border-border hover:bg-secondary transition-all duration-300 bg-transparent"
              >
                <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                Watch Story
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8">
              {[
                { number: "10K+", label: "Happy Customers" },
                { number: "500+", label: "Products" },
                { number: "50+", label: "Brands" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-foreground">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-secondary to-muted">
              <img
                src="/elegant-fashion-model-in-modern-clothing.jpg"
                alt="Fashion Model"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />

              {/* Floating Elements */}
              <div
                className="absolute top-8 right-8 bg-card/90 backdrop-blur-sm rounded-lg p-4 animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="text-sm text-muted-foreground">New Collection</div>
                <div className="text-lg font-semibold text-foreground">Spring 2024</div>
              </div>

              <div
                className="absolute bottom-8 left-8 bg-card/90 backdrop-blur-sm rounded-lg p-4 animate-fade-in-up"
                style={{ animationDelay: "0.6s" }}
              >
                <div className="text-sm text-muted-foreground">Starting from</div>
                <div className="text-xl font-bold text-foreground">$99</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
    </section>
  )
}
