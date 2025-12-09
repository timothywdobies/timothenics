'use client'

import React from 'react'
import Layout from '@/components/Layout'
import Section from '@/components/Section'

export default function Timothenics30() {
  return (
    <Layout>
      {/* Hero Section */}
      <Section className="bg-background py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block bg-gold text-dark px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
              First Launch
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight">
            Timothenics 30
          </h1>
          <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Timothenics 30 gives you only the calisthenics movements that matter, with clear progressions, so you always know what to do next and how to level up. No fluff, no random exercises, just the ones that move you forward.
          </p>
        </div>
      </Section>

      {/* Purchase Section */}
      <Section className="bg-background-secondary">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-10 md:p-12 max-w-2xl mx-auto border-2 border-gold">
            <div className="text-center mb-8">
              <h3 className="text-white text-3xl font-bold mb-3">Get Timothenics 30</h3>
              <div className="text-6xl font-bold text-gold mb-3">$29</div>
              <p className="text-foreground-muted">One-time payment • Lifetime access</p>
            </div>

            <ul className="text-left mb-10 space-y-4 max-w-md mx-auto">
              <li className="flex items-start text-foreground">
                <svg className="w-6 h-6 text-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Complete 8-week program with 3-day split</span>
              </li>
              <li className="flex items-start text-foreground">
                <svg className="w-6 h-6 text-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Push, Pull, and Legs sessions</span>
              </li>
              <li className="flex items-start text-foreground">
                <svg className="w-6 h-6 text-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Beginner to Advanced progression tracks</span>
              </li>
              <li className="flex items-start text-foreground">
                <svg className="w-6 h-6 text-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>All future updates included</span>
              </li>
            </ul>

            <button className="w-full group relative inline-flex items-center justify-center px-12 py-5 rounded-full bg-gradient-to-r from-gold via-gold-light to-gold text-dark font-bold text-base uppercase tracking-wide transition-all duration-300 shadow-glow-lg hover:shadow-glow-lg hover:scale-105 overflow-hidden">
              <span className="relative z-10">Buy Now - $29</span>
              <div className="absolute inset-0 bg-shimmer animate-shimmer"></div>
            </button>

            <p className="text-foreground-muted/60 text-sm mt-6 text-center">
              Secure payment processing coming soon
            </p>
          </div>
        </div>
      </Section>
    </Layout>
  )
}
