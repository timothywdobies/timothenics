'use client'

import React from 'react'
import Layout from '@/components/Layout'

export default function Clothing() {
  // Placeholder product data - replace with actual Timothenics apparel images
  const products = [
    {
      id: 1,
      name: 'Training Tee',
      image: '/clothing/training-tee.jpg', // TODO: Replace with actual product image
    },
    {
      id: 2,
      name: 'Performance Hoodie',
      image: '/clothing/performance-hoodie.jpg', // TODO: Replace with actual product image
    },
    {
      id: 3,
      name: 'Training Shorts',
      image: '/clothing/training-shorts.jpg', // TODO: Replace with actual product image
    },
    {
      id: 4,
      name: 'Track Pants',
      image: '/clothing/track-pants.jpg', // TODO: Replace with actual product image
    },
  ]

  return (
    <Layout>
      {/* Light gradient background section */}
      <section className="relative bg-gradient-to-l from-gray-50 via-gray-50/50 to-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-20 md:mb-28">
            {/* Small label */}
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-gray-500 mb-6">
              TIMOTHENICS APPAREL
            </p>

            {/* Main heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-0" style={{ letterSpacing: '-0.02em' }}>
              Timothenics Apparel Collection
            </h1>
          </div>

          {/* Product Grid - 4 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto">
            {products.map((product) => (
              <div
                key={product.id}
                className="group cursor-pointer"
              >
                {/* Product card - tall vertical rectangle */}
                <div className="relative aspect-[3/4] bg-[#f6f6f6] rounded-lg overflow-hidden flex items-center justify-center p-8">
                  {/* Show actual image for Training Tee, placeholder for others */}
                  {product.id === 1 ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <svg className="w-20 h-20 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-sm text-gray-400">{product.name}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
