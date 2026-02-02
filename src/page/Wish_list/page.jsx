'use client'

import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ProductCard } from '@/components/product-card'
import { useWishlist } from '@/lib/context'
import { Button } from '@/components/ui/button'
import { Heart, ShoppingCart, ArrowRight } from 'lucide-react'

export default function WishlistPage() {
  const { items, removeFromWishlist } = useWishlist()

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />

      {/* Header */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">My Wishlist</h1>
          <p className="text-gray-600">Save your favorite items for later</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1">
        {items.length === 0 ? (
          <div className="text-center py-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-gray-400" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-8">Start adding items to your wishlist and we'll save them for you</p>
            <Link href="/products">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 inline-flex items-center space-x-2">
                <span>Start Shopping</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        ) : (
          <div>
            {/* Wishlist Stats */}
            <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-blue-900 font-medium">
                You have <span className="font-bold">{items.length}</span> item
                {items.length !== 1 ? 's' : ''} in your wishlist
              </p>
            </div>

            {/* Wishlist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {items.map((product) => (
                <div key={product.id} className="relative group">
                  <ProductCard product={product} />
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
                    aria-label="Remove from wishlist"
                  >
                    <Heart className="w-5 h-5 fill-current" />
                  </button>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 border-t border-gray-200">
              <Link href="/products">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-gray-200 text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-lg transition-all bg-transparent"
                >
                  Continue Shopping
                </Button>
              </Link>
              <Link href="/cart">
                <Button className="w-full sm:w-auto bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-2">
                  <ShoppingCart className="w-4 h-4" />
                  <span>View Cart</span>
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
