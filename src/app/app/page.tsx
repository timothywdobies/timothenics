'use client'

import React from 'react'
import Layout from '@/components/Layout'
import Section from '@/components/Section'
import AppDownloadSection from '@/components/AppDownloadSection'

export default function App() {
  return (
    <Layout>
      {/* Coming Soon Hero */}
      <Section className="bg-background py-32 md:py-40">
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

      {/* Features Preview */}
      <Section className="bg-background-secondary">
        <div className="text-center mb-12">
          <h2 className="text-white mb-4">What's in the app</h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Everything you need to train with Timothenics, right in your pocket.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="glass-card p-8 text-center group hover:shadow-glow transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-gold group-hover:text-gold-light transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h4 className="text-white mb-3 font-semibold group-hover:text-gold transition-colors">Guided Sessions</h4>
            <p className="text-foreground-muted text-sm">
              Follow along with every 30-minute mission. Timer, exercise demos, and rest periods all built in.
            </p>
          </div>

          <div className="glass-card p-8 text-center group hover:shadow-glow transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-gold group-hover:text-gold-light transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h4 className="text-white mb-3 font-semibold group-hover:text-gold transition-colors">Progress Tracking</h4>
            <p className="text-foreground-muted text-sm">
              Log your workouts, track your level progression, and see your strength gains over time.
            </p>
          </div>

          <div className="glass-card p-8 text-center group hover:shadow-glow transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-gold group-hover:text-gold-light transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h4 className="text-white mb-3 font-semibold group-hover:text-gold transition-colors">Unlock New Levels</h4>
            <p className="text-foreground-muted text-sm">
              Complete clear standards to unlock advanced movements and progress to the next level.
            </p>
          </div>
        </div>
      </Section>

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
