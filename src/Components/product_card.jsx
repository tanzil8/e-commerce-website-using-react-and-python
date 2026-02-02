'use client'

import React from "react"

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Heart, ShoppingCart, Star } from 'lucide-react'
import { Product } from '@/lib/types'
import { useCart } from '@/lib/context'
import { useWishlist } from '@/lib/context'



export function ProductCard({ product }) {
  const [imageError, setImageError] = useState(false)
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const inWishlist = isInWishlist(product.id)

  const handleAddToCart = (e) => {
    e.preventDefault()
    addToCart(product, 1)
  }

  const handleWishlistToggle = (e) => {
    e.preventDefault()
    if (inWishlist) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
  }

  return (
    <Link href={`/product/${product.id}`}>
      <div className="group h-full">
        <div className="relative bg-gray-100 rounded-lg overflow-hidden mb-4 aspect-square">
          {!imageError ? (
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
              No image
            </div>
          )}

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center space-x-2 opacity-0 group-hover:opacity-100">
            <button
              onClick={handleWishlistToggle}
              className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 active:scale-95"
              aria-label="Add to wishlist"
            >
              <Heart
                className="w-5 h-5"
                fill={inWishlist ? 'currentColor' : 'none'}
              />
            </button>
            <button
              onClick={handleAddToCart}
              className="bg-gray-900 text-white p-3 rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-110 active:scale-95"
              aria-label="Add to cart"
            >
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>

          {/* Rating Badge */}
          <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full flex items-center space-x-1 text-sm">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium text-gray-900">{product.rating}</span>
          </div>
        </div>

        {/* Product Info */}
        <div>
          <p className="text-xs uppercase text-gray-500 font-semibold mb-1 group-hover:text-gray-700 transition-colors">
            {product.category}
          </p>
          <h3 className="font-bold text-gray-900 group-hover:text-gray-700 transition-colors line-clamp-2 text-sm">
            {product.name}
          </h3>
          <p className="text-xs text-gray-500 mt-2">${product.price.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  )
}
