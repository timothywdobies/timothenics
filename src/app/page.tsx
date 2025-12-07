'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Layout from '@/components/Layout'
import Section from '@/components/Section'
import Button from '@/components/Button'
import Card from '@/components/Card'

export default function Home() {
  const [email, setEmail] = useState('')
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({})
  const observerRef = useRef<IntersectionObserver | null>(null)
  const router = useRouter()

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('[data-animate]')
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Redirect to 7-day plan signup page
    router.push('/7-day-plan')
  }

  return (
    <Layout>
      {/* Hero Section - Full Screen */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image - Handstand at Sunset */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/hero-handstand.png)',
            backgroundPosition: 'center center',
          }}
        >
          {/* Subtle Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
        </div>

        {/* Content Positioned in Upper Area */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center -mt-32">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-white tracking-tight animate-fade-in-up text-shadow drop-shadow-2xl">
            Master Bodyweight Strength
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up font-medium drop-shadow-lg" style={{ animationDelay: '0.1s', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
            Build real strength with minimal equipment, unlock skills like handstands and muscle-ups, and train anywhere, anytime.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <a
              href="/programs"
              className="group relative inline-flex items-center justify-center px-12 py-5 rounded-full bg-gradient-to-r from-gold via-gold-light to-gold text-dark font-bold text-sm uppercase tracking-wide transition-all duration-300 shadow-glow-lg hover:shadow-glow-lg hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10">Programs</span>
              <div className="absolute inset-0 bg-shimmer animate-shimmer"></div>
            </a>
          </div>
        </div>
      </section>

      {/* Timothenics 30 - Product Showcase */}
      <Section className="bg-background-secondary py-24 md:py-32">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-background to-background-panel border-2 border-gold rounded-lg overflow-hidden">
            <div className="p-8 md:p-12 text-center">
              <div className="mb-6">
                <div className="inline-block bg-gold text-dark px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                  First Launch
                </div>
                <h2 className="text-white mb-4">Timothenics 30</h2>
                <p className="text-xl text-foreground max-w-2xl mx-auto mb-8">
                  8-week level-based calisthenics program. Four 30-minute sessions per week. Progress through clear standards and unlock new abilities.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">4</div>
                  <div className="text-sm text-foreground-muted">Sessions/Week</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">30</div>
                  <div className="text-sm text-foreground-muted">Minutes Each</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">8</div>
                  <div className="text-sm text-foreground-muted">Week Program</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">$29</div>
                  <div className="text-sm text-foreground-muted">One-Time</div>
                </div>
              </div>

              <a
                href="/timothenics-30"
                className="inline-flex items-center justify-center px-12 py-5 rounded-full bg-gradient-to-r from-gold via-gold-light to-gold text-dark font-bold text-sm uppercase tracking-wide transition-all duration-300 shadow-glow-lg hover:shadow-glow-lg hover:scale-105"
              >
                Get Timothenics 30
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Free 7-Day Plan Section */}
      <Section className="bg-background-secondary py-24 md:py-32" id="free-plan">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white mb-6">Get the Free 7-Day Plan</h2>
          <p className="text-lg text-foreground-muted mb-10">
            Test the system with seven days of guided 30-minute sessions. See how Push, Pull, Legs, and Skills fit into your actual schedule.
          </p>
          <form onSubmit={handleEmailSubmit} className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                className="flex-1 px-6 py-4 rounded-full bg-background/50 backdrop-blur-sm border-2 border-white/20 text-white placeholder-foreground-muted/50 focus:border-gold focus:outline-none focus:shadow-glow transition-all duration-300"
                required
              />
              <button
                type="submit"
                className="group relative px-10 py-4 rounded-full bg-gradient-to-r from-gold via-gold-light to-gold text-dark font-bold text-sm uppercase tracking-wide transition-all duration-300 shadow-glow hover:shadow-glow-lg hover:scale-105 whitespace-nowrap overflow-hidden"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-shimmer animate-shimmer"></div>
              </button>
            </div>
          </form>
        </div>
      </Section>
    </Layout>
  )
}
