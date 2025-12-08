'use client'

import React from 'react'
import Layout from '@/components/Layout'
import Section from '@/components/Section'
import AppDownloadSection from '@/components/AppDownloadSection'

export default function App() {
  return (
    <Layout>
      {/* Coming Soon Hero */}
      <Section className="bg-background py-12 md:py-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="inline-block bg-gold/20 text-gold px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wide animate-fade-in">
              Coming Soon
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white tracking-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Timothenics App
          </h1>
          <p className="text-xl md:text-2xl text-foreground-muted max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Train anywhere, track your progress, and unlock new levels. The complete Timothenics experience is coming to iOS and Android.
          </p>
        </div>
      </Section>

      {/* App Download Section */}
      <AppDownloadSection />

      {/* Notify Me CTA */}
      <Section className="bg-background">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-white mb-6">Get notified when we launch</h2>
          <p className="text-foreground-muted mb-8">
            Be the first to know when the Timothenics app is available for download.
          </p>
          <form className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="your.email@example.com"
                className="flex-1 px-6 py-4 rounded-full bg-background-secondary/50 backdrop-blur-sm border-2 border-white/20 text-white placeholder-foreground-muted/50 focus:border-gold focus:outline-none focus:shadow-glow transition-all duration-300"
                required
              />
              <button
                type="submit"
                className="group relative px-10 py-4 rounded-full bg-gradient-to-r from-gold via-gold-light to-gold text-dark font-bold text-sm uppercase tracking-wide transition-all duration-300 shadow-glow hover:shadow-glow-lg hover:scale-105 whitespace-nowrap overflow-hidden"
              >
                <span className="relative z-10">Notify Me</span>
                <div className="absolute inset-0 bg-shimmer animate-shimmer"></div>
              </button>
            </div>
          </form>
        </div>
      </Section>
    </Layout>
  )
}
