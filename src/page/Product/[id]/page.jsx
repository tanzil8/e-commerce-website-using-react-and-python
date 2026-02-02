'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ProductCard } from '@/components/product-card'
import { products } from '@/lib/products'
import { useCart } from '@/lib/context'
import { useWishlist } from '@/lib/context'
import { Button } from '@/components/ui/button'
import { Heart, ShoppingCart, Plus, Minus, Star, ArrowLeft, Truck, RefreshCw } from 'lucide-react'

export default function ProductDetailPage() {
  const product = products.find((p) => p.id === params.id)
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const inWishlist = isInWishlist(params.id)
  const [imageError, setImageError] = useState(false)
  const [addedToCart, setAddedToCart] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link href="/products">
            <Button className="bg-gray-900 hover:bg-gray-800 text-white">Back to Products</Button>
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart(product, quantity)
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  const handleWishlistToggle = () => {
    if (inWishlist) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Breadcrumb */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/products"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            <span>Back to Products</span>
          </Link>
        </div>
      </section>

      {/* Product Detail */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image */}
          <div className="flex items-center justify-center bg-gray-100 rounded-xl overflow-hidden aspect-square">
            {!imageError ? (
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                onError={() => setImageError(true)}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                No image available
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col space-y-6">
            {/* Category & Rating */}
            <div>
              <p className="text-sm uppercase text-gray-500 font-semibold mb-2">{product.category}</p>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-semibold text-gray-900">{product.rating}</span>
                <span className="text-gray-500">(128 reviews)</span>
              </div>
            </div>

            {/* Price */}
            <div className="border-t border-b border-gray-200 py-4">
              <p className="text-4xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
              <p className="text-gray-600 mt-2">Free shipping on orders over $50</p>
            </div>

            {/* Description */}
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* In Stock Status */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-900 font-semibold">
                {product.inStock ? '✓ In Stock - Ships in 1-2 business days' : 'Out of Stock'}
              </p>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-3">Quantity</p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-2">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-1 text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center font-bold text-gray-900">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-1 text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className={`flex-1 py-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-2 ${
                    addedToCart
                      ? 'bg-green-600 hover:bg-green-600 text-white'
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>{addedToCart ? 'Added to Cart!' : 'Add to Cart'}</span>
                </Button>
                <button
                  onClick={handleWishlistToggle}
                  className="px-6 py-6 border-2 border-gray-200 rounded-lg hover:border-red-300 hover:bg-red-50 transition-all duration-300 group"
                >
                  <Heart
                    className={`w-5 h-5 transition-all ${
                      inWishlist
                        ? 'fill-red-600 text-red-600'
                        : 'text-gray-600 group-hover:text-red-600'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
              <div className="flex space-x-3">
                <div className="flex-shrink-0">
                  <Truck className="w-5 h-5 text-gray-900" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Free Shipping</p>
                  <p className="text-gray-600 text-xs">On orders over $50</p>
                </div>
              </div>
              <div className="flex space-x-3">
                <div className="flex-shrink-0">
                  <RefreshCw className="w-5 h-5 text-gray-900" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Easy Returns</p>
                  <p className="text-gray-600 text-xs">30-day return policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  )
}
