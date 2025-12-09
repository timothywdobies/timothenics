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
          <p className="text-xl md:text-2xl text-foreground-muted max-w-3xl mx-auto leading-relaxed mb-8">
            An 8-week, level-based calisthenics system built around three 30-minute sessions per week. Progress through Beginner, Intermediate, and Advanced levels—and unlock specific abilities along the way.
          </p>
        </div>
      </Section>

      {/* Why Timothenics 30 */}
      <Section className="bg-background-secondary">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-white mb-6">Why Timothenics 30?</h2>
            <p className="text-foreground text-lg leading-relaxed max-w-3xl mx-auto mb-8">
              Most programs demand 60-90 minutes in a gym. Timothenics 30 is designed for real life—three focused 30-minute sessions each week that build functional strength you can use anywhere. No fluff, no wasted time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="glass-card p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-white font-semibold mb-2">30 Minutes</h4>
              <p className="text-foreground-muted text-sm">No marathon workouts. Every session fits your schedule.</p>
            </div>

            <div className="glass-card p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-white font-semibold mb-2">Level-Based</h4>
              <p className="text-foreground-muted text-sm">Progress from Beginner to Advanced with clear standards.</p>
            </div>

            <div className="glass-card p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-white font-semibold mb-2">Minimal Gear</h4>
              <p className="text-foreground-muted text-sm">Pull-up bar and parallettes. Train anywhere.</p>
            </div>
          </div>

          {/* Purchase Section */}
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
