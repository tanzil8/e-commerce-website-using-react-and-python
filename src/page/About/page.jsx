import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Award, Users, Zap, Globe } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: 'Quality First',
      description: 'We carefully curate each product to ensure premium quality and style',
    },
    {
      icon: Users,
      title: 'Customer Focused',
      description: 'Your satisfaction is our priority. Outstanding service, every time',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Constantly exploring new trends and technologies in fashion',
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'Committed to ethical practices and sustainable fashion',
    },
  ]

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah',
    },
    {
      name: 'Michael Chen',
      role: 'Head of Design',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=michael',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Lead Stylist',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=emily',
    },
    {
      name: 'David Park',
      role: 'Operations Manager',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=david',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About StyleHub</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We believe in making premium fashion accessible to everyone. Founded on the principles of quality, style, and
            customer satisfaction.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                StyleHub was founded in 2020 with a simple mission: to bring premium fashion to the modern consumer at fair prices.
                What started as a small curated collection has grown into a trusted platform serving thousands of customers worldwide.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We partner with the world's best designers and manufacturers to bring you exclusive, high-quality pieces that make a
                statement. Every item in our collection is handpicked by our style experts to ensure it meets our strict quality standards.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, StyleHub is more than just an online store—it's a community of fashion enthusiasts who share our passion for
                quality, style, and self-expression.
              </p>
            </div>
            <div className="bg-gray-300 rounded-2xl overflow-hidden h-96">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                alt="StyleHub team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="text-center group">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-gray-900 group-hover:text-white transition-all duration-300">
                      <Icon className="w-8 h-8" />
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-bold text-gray-900">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">50K+</p>
              <p className="text-gray-300">Happy Customers</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">1000+</p>
              <p className="text-gray-300">Premium Products</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">4.8★</p>
              <p className="text-gray-300">Customer Rating</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">150+</p>
              <p className="text-gray-300">Countries Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Explore?</h2>
          <p className="text-gray-600 mb-8 text-lg">Discover our latest collection and find your perfect style</p>
          <Link href="/products">
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 inline-flex items-center space-x-2">
              <span>Shop Now</span>
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
