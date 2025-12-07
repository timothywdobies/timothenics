'use client'

import React, { useState } from 'react'
import Layout from '@/components/Layout'
import Section from '@/components/Section'
import { useRouter } from 'next/navigation'

export default function SevenDayPlan() {
  const [email, setEmail] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // For now, just store in localStorage that they signed up
    // Later, connect this to your email service (ConvertKit, Mailchimp, etc.)
    localStorage.setItem('7dayPlanEmail', email)
    localStorage.setItem('7dayPlanAccess', 'true')

    // Redirect to access page
    router.push('/7-day-plan/access')
  }

  return (
    <Layout>
      {/* Hero Section */}
      <Section className="bg-background py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block bg-gold/20 text-gold px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
              Free 7-Day Plan
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight">
            Start Your Calisthenics Journey
          </h1>
          <p className="text-xl md:text-2xl text-foreground-muted max-w-3xl mx-auto leading-relaxed mb-12">
            Get 7 days of guided 30-minute training sessions. Experience the Timothenics approach and see what level-based calisthenics can do for you.
          </p>
        </div>
      </Section>

      {/* Signup Section */}
      <Section className="bg-background-secondary">
        <div className="max-w-2xl mx-auto">
          <div className="glass-card p-10 md:p-12">
            <h2 className="text-white text-center mb-6">Get Instant Access</h2>
            <p className="text-foreground-muted text-center mb-8">
              Enter your email below to receive your free 7-day training plan.
            </p>

            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
              <div className="flex flex-col gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full px-6 py-4 rounded-full bg-background/50 backdrop-blur-sm border-2 border-white/20 text-white placeholder-foreground-muted/50 focus:border-gold focus:outline-none focus:shadow-glow transition-all duration-300"
                  required
                />
                <button
                  type="submit"
                  className="w-full group relative px-10 py-4 rounded-full bg-gradient-to-r from-gold via-gold-light to-gold text-dark font-bold text-sm uppercase tracking-wide transition-all duration-300 shadow-glow hover:shadow-glow-lg hover:scale-105 overflow-hidden"
                >
                  <span className="relative z-10">Get Free Access</span>
                  <div className="absolute inset-0 bg-shimmer animate-shimmer"></div>
                </button>
              </div>
            </form>

            <p className="text-foreground-muted/60 text-sm text-center mt-6">
              No credit card required. Instant access after signup.
            </p>
          </div>
        </div>
      </Section>

      {/* What's Included */}
      <Section className="bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">What's Included</h2>
            <p className="text-foreground-muted">
              7 days of structured training to introduce you to level-based calisthenics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: '7 Complete Workouts', desc: 'One session per day, all 30 minutes or less' },
              { title: 'Push, Pull, Legs, Skills', desc: 'Experience all four training tracks' },
              { title: 'Beginner-Friendly', desc: 'Designed for all fitness levels' },
              { title: 'Zero Equipment Needed', desc: 'Train with just your bodyweight' },
            ].map((item, index) => (
              <div key={index} className="glass-card p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-dark" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                    <p className="text-foreground-muted text-sm">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </Layout>
  )
}
