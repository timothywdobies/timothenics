'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Layout from '@/components/Layout'
import Section from '@/components/Section'

export default function Home() {
  const [email, setEmail] = useState('')
  const router = useRouter()

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Redirect to 7-day plan signup page
    router.push('/7-day-plan')
  }

  return (
    <Layout>
      {/* Hero Section - Full Background */}
      <section className="relative h-screen min-h-[640px] overflow-hidden">
        {/* Full Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/hero-handstand.png)',
          }}
        >
          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>

        {/* Content - Left Aligned */}
        <div className="relative z-10 h-full flex items-center px-8 md:px-16">
          <div className="max-w-[560px] w-full">
            {/* Eyebrow */}
            <div className="mb-3">
              <span className="text-sm font-medium tracking-[0.18em] uppercase text-gold">
                TIMOTHENICS
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-[34px] md:text-[44px] lg:text-[56px] font-extrabold leading-[1.05] tracking-tight text-white mb-4">
              MASTER BODYWEIGHT STRENGTH
            </h1>

            {/* Subheading */}
            <p className="text-base md:text-lg leading-relaxed text-gray-300 mb-7 max-w-[420px]">
              Build real strength with minimal equipment, unlock skills like handstands and muscle-ups, and train anywhere, anytime.
            </p>

            {/* CTA Button */}
            <a
              href="/programs"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-gold hover:bg-gold-light text-dark font-semibold text-[15px] uppercase tracking-wide transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:shadow-glow-lg hover:scale-105"
            >
              PROGRAMS
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
