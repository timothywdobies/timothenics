'use client'

import React from 'react'
import Layout from '@/components/Layout'
import Section from '@/components/Section'
import Button from '@/components/Button'
import Card from '@/components/Card'

export default function Clothing() {
  return (
    <Layout>
      {/* Page Header */}
      <Section className="py-20 md:py-24 bg-background">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs md:text-sm font-medium tracking-wider uppercase text-gold mb-6">
            TIMOTHENICS APPAREL
          </p>
          <h1 className="mb-6 text-white">Training Apparel</h1>
          <p className="text-xl md:text-2xl text-foreground">
            Training apparel designed for movement. Minimal branding, maximum function.
          </p>
        </div>
      </Section>

      {/* Introduction */}
      <Section className="bg-background-secondary">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg md:text-xl text-foreground-muted">
            Clothing built for people who train hard with limited time. Clean design, performance fabrics,
            and a fit that doesn't restrict movement. No loud logos—just gear that works.
          </p>
        </div>
      </Section>

      {/* Product Cards */}
      <Section className="bg-background" containerClassName="max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Training Tee */}
          <div className="bg-background-secondary border border-white/10 rounded-lg overflow-hidden hover:border-gold transition-all duration-300 group">
            <div className="relative h-80 bg-background-panel overflow-hidden">
              {/* Image Placeholder - Replace with actual image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                style={{
                  backgroundImage: 'url(/clothing/training-tee.jpg)',
                  backgroundColor: '#0a0a0a',
                }}
              >
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <svg className="w-20 h-20 text-gold/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="absolute top-4 right-4">
                <span className="inline-block bg-gold/20 text-gold px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                  Coming Soon
                </span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-white mb-3 font-semibold text-xl group-hover:text-gold transition-colors">Training Tee</h3>
              <p className="text-foreground-muted mb-4 text-sm">
                Performance training shirt designed for calisthenics. Breathable, mobile, and built to handle pull-ups, dips, and everything in between.
              </p>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-sm text-foreground-muted">
                  <svg className="w-4 h-4 text-gold mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Moisture-wicking fabric</span>
                </li>
                <li className="flex items-start text-sm text-foreground-muted">
                  <svg className="w-4 h-4 text-gold mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Athletic fit that moves with you</span>
                </li>
                <li className="flex items-start text-sm text-foreground-muted">
                  <svg className="w-4 h-4 text-gold mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Minimal branding</span>
                </li>
              </ul>

              <button
                disabled
                className="w-full px-6 py-3 rounded-full bg-gold/20 text-gold-light/80 font-semibold text-sm uppercase tracking-wide cursor-not-allowed"
              >
                Notify Me
              </button>
            </div>
          </div>

          {/* Training Shorts */}
          <div className="bg-background-secondary border border-white/10 rounded-lg overflow-hidden hover:border-gold transition-all duration-300 group">
            <div className="relative h-80 bg-background-panel overflow-hidden">
              {/* Image Placeholder - Replace with actual image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                style={{
                  backgroundImage: 'url(/clothing/training-shorts.jpg)',
                  backgroundColor: '#0a0a0a',
                }}
              >
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <svg className="w-20 h-20 text-gold/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="absolute top-4 right-4">
                <span className="inline-block bg-gold/20 text-gold px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                  Coming Soon
                </span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-white mb-3 font-semibold text-xl group-hover:text-gold transition-colors">Training Shorts</h3>
              <p className="text-foreground-muted mb-4 text-sm">
                Lightweight shorts built for dynamic movement. Deep squats, high knees, leg raises—nothing holds you back. Clean design, zero restriction.
              </p>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-sm text-foreground-muted">
                  <svg className="w-4 h-4 text-gold mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Stretch fabric for movement</span>
                </li>
                <li className="flex items-start text-sm text-foreground-muted">
                  <svg className="w-4 h-4 text-gold mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Secure zippered pocket</span>
                </li>
                <li className="flex items-start text-sm text-foreground-muted">
                  <svg className="w-4 h-4 text-gold mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Quick-drying material</span>
                </li>
              </ul>

              <button
                disabled
                className="w-full px-6 py-3 rounded-full bg-gold/20 text-gold-light/80 font-semibold text-sm uppercase tracking-wide cursor-not-allowed"
              >
                Notify Me
              </button>
            </div>
          </div>

          {/* Performance Hoodie */}
          <div className="bg-background-secondary border border-white/10 rounded-lg overflow-hidden hover:border-gold transition-all duration-300 group">
            <div className="relative h-80 bg-background-panel overflow-hidden">
              {/* Image Placeholder - Replace with actual image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                style={{
                  backgroundImage: 'url(/clothing/performance-hoodie.jpg)',
                  backgroundColor: '#0a0a0a',
                }}
              >
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <svg className="w-20 h-20 text-gold/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="absolute top-4 right-4">
                <span className="inline-block bg-gold/20 text-gold px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                  Coming Soon
                </span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-white mb-3 font-semibold text-xl group-hover:text-gold transition-colors">Performance Hoodie</h3>
              <p className="text-foreground-muted mb-4 text-sm">
                Lightweight performance hoodie for warm-ups and outdoor training. Breathable enough for movement, warm enough for early mornings.
              </p>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-sm text-foreground-muted">
                  <svg className="w-4 h-4 text-gold mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Lightweight performance fabric</span>
                </li>
                <li className="flex items-start text-sm text-foreground-muted">
                  <svg className="w-4 h-4 text-gold mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Athletic fit for movement</span>
                </li>
                <li className="flex items-start text-sm text-foreground-muted">
                  <svg className="w-4 h-4 text-gold mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Front pocket storage</span>
                </li>
              </ul>

              <button
                disabled
                className="w-full px-6 py-3 rounded-full bg-gold/20 text-gold-light/80 font-semibold text-sm uppercase tracking-wide cursor-not-allowed"
              >
                Notify Me
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* Why Timothenics Apparel */}
      <Section className="bg-background-secondary">
        <div className="text-center mb-16">
          <p className="text-xs md:text-sm font-medium tracking-wider uppercase text-gold mb-4">
            THE TIMOTHENICS STANDARD
          </p>
          <h2 className="text-white mb-4">Built for Movement, Not Logos</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center group">
            <svg className="w-16 h-16 text-gold mx-auto mb-6 transition-all duration-300 group-hover:text-gold-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h4 className="mb-3 text-white font-semibold group-hover:text-gold transition-colors">Performance First</h4>
            <p className="text-foreground-muted">
              Every piece is tested during actual training. If it restricts movement or feels off, it doesn't make the cut.
            </p>
          </div>
          <div className="text-center group">
            <svg className="w-16 h-16 text-gold mx-auto mb-6 transition-all duration-300 group-hover:text-gold-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
            <h4 className="mb-3 text-white font-semibold group-hover:text-gold transition-colors">Minimal Design</h4>
            <p className="text-foreground-muted">
              Clean, understated branding. You know what you're wearing. Everyone else just sees quality apparel.
            </p>
          </div>
          <div className="text-center group">
            <svg className="w-16 h-16 text-gold mx-auto mb-6 transition-all duration-300 group-hover:text-gold-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            <h4 className="mb-3 text-white font-semibold group-hover:text-gold transition-colors">Training Tested</h4>
            <p className="text-foreground-muted">
              Designed by someone who actually trains in it. Not a boardroom decision—a pull-up bar decision.
            </p>
          </div>
        </div>
      </Section>

      {/* Coming Soon Notice */}
      <Section className="bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-background-secondary border border-white/10 rounded-lg p-8 md:p-12">
            <p className="text-xs md:text-sm font-medium tracking-wider uppercase text-gold mb-4">
              STAY UPDATED
            </p>
            <h3 className="mb-4 text-white">Launching Soon</h3>
            <p className="text-foreground-muted mb-8">
              Timothenics apparel is currently in development. We're finalizing fabrics, fits, and production
              to ensure every piece meets the standard. If you want to be notified when we launch, drop your
              email below.
            </p>
            <form className="max-w-md mx-auto" onSubmit={(e) => {
              e.preventDefault()
              alert('Thanks! We\'ll notify you when Timothenics clothing launches.')
            }}>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  className="flex-1 px-4 py-3 rounded-lg bg-background border-2 border-white/20 text-white placeholder-foreground-muted focus:border-gold focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="px-8 py-3 rounded-full bg-gold text-dark font-semibold text-sm uppercase tracking-wide hover:bg-gold-light transition-all duration-300 shadow-lg"
                >
                  Notify Me
                </button>
              </div>
            </form>
          </div>
        </div>
      </Section>
    </Layout>
  )
}
