'use client'

import React, { useState } from 'react'
import Layout from '@/components/Layout'
import Section from '@/components/Section'
import Button from '@/components/Button'
import Card from '@/components/Card'

export default function Home() {
  const [email, setEmail] = useState('')

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email submitted:', email)
    alert(`Thanks! We'll send the 7-Day Plan to ${email}`)
    setEmail('')
  }

  return (
    <Layout>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/hero-image.jpg)',
            backgroundColor: '#9E9EA2',
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <p className="text-xs md:text-sm font-medium tracking-wider uppercase text-foreground/60 mb-6">
            ELITE TRAINING FOR BUSY PEOPLE
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white tracking-tight">
            Join Timothenics for $1
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-10 leading-relaxed">
            Get your first month for just $1 and train alongside thousands building elite strength in 30-minute sessions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#free-plan"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-white text-dark font-semibold text-sm uppercase tracking-wide hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
              </svg>
              Get Free 7-Day Plan
            </a>
            <a
              href="/programs"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-dark text-white font-semibold text-sm uppercase tracking-wide hover:bg-gray-900 transition-all shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              See Timothenics 30
            </a>
          </div>
        </div>
      </section>

      {/* Main Offerings - Clean Grid */}
      <section className="py-24 md:py-32 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-white mb-4">EVERYTHING YOU NEED</h2>
            <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
              Elite training systems, minimal gear, and apparel built for movement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Programs */}
            <a href="/programs" className="group block">
              <div className="relative overflow-hidden rounded-lg bg-background border border-white/10 hover:border-accent transition-all duration-300 h-full">
                <div className="aspect-[4/3] bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                  <span className="text-8xl">💪</span>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 uppercase">Programs</h3>
                  <p className="text-foreground/60 mb-4">
                    30-minute sessions. Progressive structure. Real strength.
                  </p>
                  <div className="flex items-center text-accent text-sm font-semibold uppercase tracking-wide group-hover:translate-x-2 transition-transform">
                    Explore Programs
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>

            {/* Equipment */}
            <a href="/gear" className="group block">
              <div className="relative overflow-hidden rounded-lg bg-background border border-white/10 hover:border-accent transition-all duration-300 h-full">
                <div className="aspect-[4/3] bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                  <span className="text-8xl">🎯</span>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 uppercase">Equipment</h3>
                  <p className="text-foreground/60 mb-4">
                    Minimal tools that maximize results. Bands, sliders, parallettes.
                  </p>
                  <div className="flex items-center text-accent text-sm font-semibold uppercase tracking-wide group-hover:translate-x-2 transition-transform">
                    Shop Equipment
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>

            {/* Clothing */}
            <a href="/clothing" className="group block">
              <div className="relative overflow-hidden rounded-lg bg-background border border-white/10 hover:border-accent transition-all duration-300 h-full">
                <div className="aspect-[4/3] bg-gradient-to-br from-foreground-muted/10 to-foreground-muted/5 flex items-center justify-center">
                  <span className="text-8xl">👕</span>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 uppercase">Apparel</h3>
                  <p className="text-foreground/60 mb-4">
                    Training apparel designed for movement. Clean, functional design.
                  </p>
                  <div className="flex items-center text-foreground/40 text-sm font-semibold uppercase tracking-wide">
                    Coming Soon
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Features - Build for Busy People */}
      <Section className="bg-background">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4">BUILT FOR A FULL DAY</h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Not a free day. Most training programs assume unlimited time. Timothenics doesn't.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <div className="bg-background-secondary border border-white/10 rounded-lg p-8 hover:border-accent transition-colors">
            <h4 className="text-white mb-3 font-semibold">Full Calendar</h4>
            <p className="text-foreground/60 text-sm">
              Work, school, life. Your schedule is stacked, and that's not changing.
            </p>
          </div>
          <div className="bg-background-secondary border border-white/10 rounded-lg p-8 hover:border-accent transition-colors">
            <h4 className="text-white mb-3 font-semibold">No 90-Minute Splits</h4>
            <p className="text-foreground/60 text-sm">
              Traditional programs demand hours plus commute. That's a dealbreaker.
            </p>
          </div>
          <div className="bg-background-secondary border border-white/10 rounded-lg p-8 hover:border-accent transition-colors">
            <h4 className="text-white mb-3 font-semibold">30 Focused Minutes</h4>
            <p className="text-foreground/60 text-sm">
              Strip away the filler. Focus on what builds strength. Get in, work, get out.
            </p>
          </div>
          <div className="bg-background-secondary border border-white/10 rounded-lg p-8 hover:border-accent transition-colors">
            <h4 className="text-white mb-3 font-semibold">Clear Plan</h4>
            <p className="text-foreground/60 text-sm">
              No guesswork. Show up, follow the session, watch yourself get stronger.
            </p>
          </div>
        </div>
      </Section>

      {/* The 5-20-5 Framework */}
      <Section className="bg-background-secondary">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4">THE 5–20–5 FRAMEWORK</h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Every session follows the same efficient structure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-7xl font-bold text-accent mb-6">5</div>
            <h3 className="text-white mb-3 font-semibold text-xl">Warm-Up</h3>
            <p className="text-foreground/60">
              Get joints mobile and muscles firing. Prepare for serious work.
            </p>
          </div>
          <div className="text-center">
            <div className="text-7xl font-bold text-accent mb-6">20</div>
            <h3 className="text-white mb-3 font-semibold text-xl">Strength Work</h3>
            <p className="text-foreground/60">
              Push, pull, or legs focus. Progressive exercises that build real strength.
            </p>
          </div>
          <div className="text-center">
            <div className="text-7xl font-bold text-accent mb-6">5</div>
            <h3 className="text-white mb-3 font-semibold text-xl">Core / Skill</h3>
            <p className="text-foreground/60">
              Targeted core work or skill practice. Lock in the session.
            </p>
          </div>
        </div>
      </Section>

      {/* Bottom Promo Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-light border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between overflow-x-auto">
          <div className="flex items-center space-x-12 text-dark">
            <div className="flex items-center space-x-2 whitespace-nowrap">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-xs font-medium uppercase tracking-wide">BUILT FOR PERFORMANCE</span>
            </div>
            <div className="flex items-center space-x-2 whitespace-nowrap">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-xs font-medium uppercase tracking-wide">MINIMAL GEAR REQUIRED</span>
            </div>
            <div className="flex items-center space-x-2 whitespace-nowrap">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-xs font-medium uppercase tracking-wide">30-MINUTE SYSTEMS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Add padding to prevent content being hidden by fixed promo bar */}
      <div className="h-16"></div>
    </Layout>
  )
}
