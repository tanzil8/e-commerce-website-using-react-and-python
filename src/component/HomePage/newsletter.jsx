"use client"



import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Gift, Truck, Shield } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  const benefits = [
    {
      icon: Gift,
      title: "Exclusive Offers",
      description: "Get access to member-only deals and early sales",
    },
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Enjoy free shipping on orders over $100",
    },
    {
      icon: Shield,
      title: "Secure Shopping",
      description: "100% secure payment and data protection",
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
                Stay Updated with Our Latest Collections
              </h2>
              <p className="text-muted-foreground text-lg text-pretty">
                Subscribe to our newsletter and be the first to know about new arrivals, exclusive offers, and fashion
                trends.
              </p>
            </div>

            {/* Newsletter Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-card border-border focus:border-primary transition-colors duration-200"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105"
                >
                  Subscribe Now
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                By subscribing, you agree to our Privacy Policy and Terms of Service.
              </p>
            </form>

            {/* Benefits */}
            <div className="grid gap-4 pt-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 animate-slide-in-left"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                      <Icon className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative animate-scale-in">
            <Card className="border-border bg-gradient-to-br from-card to-secondary/20 overflow-hidden">
              <CardContent className="p-8">
                <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-secondary to-muted">
                  <img src="/fashion-newsletter-subscription-modern-design.jpg" alt="Newsletter" className="w-full h-full object-cover" />
                </div>

                {/* Floating Stats */}
                <div
                  className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-lg p-3 animate-fade-in-up"
                  style={{ animationDelay: "0.3s" }}
                >
                  <div className="text-xs text-muted-foreground">Subscribers</div>
                  <div className="text-lg font-bold text-foreground">50K+</div>
                </div>

                <div
                  className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg p-3 animate-fade-in-up"
                  style={{ animationDelay: "0.6s" }}
                >
                  <div className="text-xs text-muted-foreground">Satisfaction</div>
                  <div className="text-lg font-bold text-foreground">98%</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
