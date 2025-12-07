'use client'

import React from 'react'
import Layout from '@/components/Layout'
import Section from '@/components/Section'
import Button from '@/components/Button'
import Card from '@/components/Card'

export default function Gear() {
  return (
    <Layout>
      {/* Hero Section - Extended to show full parallettes */}
      <section className="relative min-h-[140vh] flex items-start justify-center overflow-hidden pt-32 md:pt-40">
        {/* Background Image - Parallettes */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/equipment-hero.png)',
            backgroundPosition: 'center center',
          }}
        >
          {/* Dark Overlay for White Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight animate-fade-in-up drop-shadow-2xl">
            Timothenics Equipment
          </h1>
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up font-semibold drop-shadow-lg" style={{ animationDelay: '0.2s' }}>
            Minimal tools for everything you need, nothing you don't.
          </p>
        </div>
      </section>

      {/* Product Cards */}
      <Section className="bg-background" containerClassName="max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Timothenics Starter Kit */}
          <div className="bg-background-secondary border border-white/10 rounded-lg overflow-hidden hover:border-gold transition-all duration-300 group flex flex-col">
            <div className="relative h-48 bg-background-panel flex items-center justify-center">
              <svg className="w-20 h-20 text-gold/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>

            <div className="p-8 flex-grow flex flex-col">
              <div className="mb-4">
                <h3 className="mb-2 text-white group-hover:text-gold transition-colors">Timothenics Starter Kit</h3>
                <p className="text-2xl font-bold text-gold mb-4">$49</p>
              </div>

              <div className="mb-6 flex-grow">
                <p className="text-foreground-muted mb-4">
                  Complete set of resistance bands and sliders. Everything you need to scale progressions,
                  add resistance, and train movements you can't do with bodyweight alone.
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-white">What's Included:</h4>
                  <ul className="space-y-1 text-sm text-foreground-muted">
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-gold mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>3 resistance bands (light, medium, heavy)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-gold mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>2 slider discs for any floor surface</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-gold mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Mesh carry bag</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-gold mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Quick-start exercise guide</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-auto">
                <button className="w-full px-8 py-3 rounded-full bg-gold text-dark font-semibold text-sm uppercase tracking-wide hover:bg-gold-light transition-all duration-300 shadow-lg">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Timothenics Parallettes */}
          <div className="bg-background-secondary border border-white/10 rounded-lg overflow-hidden hover:border-gold transition-all duration-300 group flex flex-col">
            <div className="relative h-48 bg-background-panel flex items-center justify-center">
              <svg className="w-20 h-20 text-gold/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
            </div>

            <div className="p-8 flex-grow flex flex-col">
              <div className="mb-4">
                <h3 className="mb-2 text-white group-hover:text-gold transition-colors">Timothenics Parallettes</h3>
                <div className="mb-4">
                  <span className="inline-block bg-gold/20 text-gold px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                    Coming Soon
                  </span>
                </div>
              </div>

              <div className="mb-6 flex-grow">
                <p className="text-foreground-muted mb-4">
                  Low-profile parallettes designed for home training. Elevate your push movements,
                  unlock L-sits, and build toward advanced skills like handstands and handstand push-ups.
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-white">Specs:</h4>
                  <ul className="space-y-1 text-sm text-foreground-muted">
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-gold mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>12" height, ideal for home ceilings</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-gold mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Non-slip rubber feet</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-gold mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Lightweight and portable</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-gold mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Supports 300+ lbs</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-auto">
                <button disabled className="w-full px-8 py-3 rounded-full bg-gold/20 text-gold-light/80 font-semibold text-sm uppercase tracking-wide cursor-not-allowed">
                  Notify When Available
                </button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* What You Already Have */}
      <Section className="bg-background-secondary">
        <div className="text-center mb-12">
          <p className="text-xs md:text-sm font-medium tracking-wider uppercase text-gold mb-4">
            START TODAY
          </p>
          <h2 className="text-white mb-2">What You Already Have</h2>
          <p className="text-foreground-muted">Start training today with these basics</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center group">
            <svg className="w-16 h-16 text-gold mx-auto mb-6 transition-all duration-300 group-hover:text-gold-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 12H4" />
            </svg>
            <h4 className="mb-3 text-white font-semibold group-hover:text-gold transition-colors">Pull-Up Bar</h4>
            <p className="text-foreground-muted">
              Doorway bar, outdoor bar, or park equipment. All you need for pull, grip, and hanging work.
            </p>
          </div>
          <div className="text-center group">
            <svg className="w-16 h-16 text-gold mx-auto mb-6 transition-all duration-300 group-hover:text-gold-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <h4 className="mb-3 text-white font-semibold group-hover:text-gold transition-colors">The Floor</h4>
            <p className="text-foreground-muted">
              Push-ups, planks, leg raises, bridges. Most of your training happens right here.
            </p>
          </div>
          <div className="text-center group">
            <svg className="w-16 h-16 text-gold mx-auto mb-6 transition-all duration-300 group-hover:text-gold-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            <h4 className="mb-3 text-white font-semibold group-hover:text-gold transition-colors">A Clear Space</h4>
            <p className="text-foreground-muted">
              About 6 feet by 3 feet. That's all. Train in your living room, bedroom, or backyard.
            </p>
          </div>
        </div>
      </Section>

      {/* Why Minimal Gear Works */}
      <Section className="bg-background">
        <div className="text-center mb-12">
          <h2 className="text-white">Why minimal gear works</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="bg-background-secondary border border-white/10 rounded-lg p-8 md:p-12">
            <div className="space-y-6">
              <div>
                <h4 className="mb-2 text-white">No Friction</h4>
                <p className="text-foreground-muted">
                  When your gym is wherever you are, there's no commute, no opening hours, no excuses.
                  You just start.
                </p>
              </div>
              <div>
                <h4 className="mb-2 text-white">Portable Training</h4>
                <p className="text-foreground-muted">
                  Bands and sliders fit in a backpack. Take your training to the park, on trips, or anywhere with a bar.
                </p>
              </div>
              <div>
                <h4 className="mb-2 text-white">Focus on Fundamentals</h4>
                <p className="text-foreground-muted">
                  Less gear means more focus on progressive overload, form, and consistency—the things that actually build strength.
                </p>
              </div>
              <div>
                <h4 className="mb-2 text-white">One-Time Investment</h4>
                <p className="text-foreground-muted">
                  No monthly gym fees. Get the basics once, train for years. The return on investment is unbeatable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  )
}
