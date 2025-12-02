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
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/hero-image.jpg)',
            backgroundColor: '#0a0a0a',
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white tracking-tight">
            Best shape of your life, <span className="text-gold">30 minutes at a time.</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Timothenics turns four 30-minute calisthenics sessions a week into a level system you unlock like a game. Push, Pull, Legs, and Skills—each with clear standards, levels, and skills you earn over time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#free-plan"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-white text-dark font-semibold text-sm uppercase tracking-wide hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Get the Free 7-Day Plan
            </a>
            <a
              href="/programs"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-gold text-dark font-semibold text-sm uppercase tracking-wide hover:bg-gold-light transition-all duration-300 shadow-lg"
            >
              See Timothenics 30
            </a>
          </div>
        </div>
      </section>

      {/* How Timothenics Works */}
      <Section className="bg-background">
        <div className="text-center mb-12">
          <h2 className="text-white mb-6">How Timothenics works</h2>
          <p className="text-lg text-foreground-muted max-w-3xl mx-auto">
            Timothenics is built around four 30-minute "missions" each week: Push, Pull, Legs, and Skills. Every session follows the same 5–20–5 structure so you always know what to do when it's time to train.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          <div className="bg-background-secondary border border-white/10 rounded-lg p-8 hover:border-gold transition-all duration-300 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-white mb-2 text-xl font-semibold">Push 30</h3>
            <p className="text-foreground-muted text-sm">chest, shoulders, triceps</p>
          </div>

          <div className="bg-background-secondary border border-white/10 rounded-lg p-8 hover:border-gold transition-all duration-300 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
              </svg>
            </div>
            <h3 className="text-white mb-2 text-xl font-semibold">Pull 30</h3>
            <p className="text-foreground-muted text-sm">back, biceps, grip</p>
          </div>

          <div className="bg-background-secondary border border-white/10 rounded-lg p-8 hover:border-gold transition-all duration-300 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-white mb-2 text-xl font-semibold">Legs 30</h3>
            <p className="text-foreground-muted text-sm">quads, glutes, hamstrings, calves</p>
          </div>

          <div className="bg-background-secondary border border-white/10 rounded-lg p-8 hover:border-gold transition-all duration-300 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h3 className="text-white mb-2 text-xl font-semibold">Skills 30</h3>
            <p className="text-foreground-muted text-sm">handstand, core, levers, control</p>
          </div>
        </div>

        <div className="bg-background-secondary border-l-4 border-gold rounded-lg p-6 max-w-4xl mx-auto">
          <p className="text-foreground text-center">
            <span className="font-bold text-gold">All sessions use the 5–20–5 framework:</span> 5 minutes warm-up, 20 minutes focused strength work, 5 minutes finisher or core.
          </p>
        </div>
      </Section>

      {/* Levels & Unlocks */}
      <Section className="bg-background-secondary">
        <div className="text-center mb-12">
          <h2 className="text-white mb-6">Levels you unlock, not workouts you repeat</h2>
          <p className="text-lg text-foreground-muted max-w-3xl mx-auto mb-10">
            Each track—Push, Pull, Legs, and Skills—has three levels: Beginner, Intermediate, and Advanced. You don't just move on because time passes. You unlock the next level by hitting clear standards, like clean push-up reps, controlled rows, or specific hold times.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          <div className="bg-background border border-white/10 rounded-lg p-8 text-center hover:border-gold transition-all duration-300">
            <div className="text-4xl font-bold text-gold mb-4">Level 1</div>
            <h4 className="text-white font-semibold text-lg">Beginner</h4>
          </div>
          <div className="bg-background border border-white/10 rounded-lg p-8 text-center hover:border-gold transition-all duration-300">
            <div className="text-4xl font-bold text-gold mb-4">Level 2</div>
            <h4 className="text-white font-semibold text-lg">Intermediate</h4>
          </div>
          <div className="bg-background border border-white/10 rounded-lg p-8 text-center hover:border-gold transition-all duration-300">
            <div className="text-4xl font-bold text-gold mb-4">Level 3</div>
            <h4 className="text-white font-semibold text-lg">Advanced</h4>
          </div>
        </div>

        <p className="text-foreground-muted text-center max-w-3xl mx-auto">
          As you level up, the sessions stay 30 minutes, but the movements get more advanced, the tension increases, and your skills and physique follow.
        </p>
      </Section>

      {/* What You Can Unlock */}
      <Section className="bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-white mb-6">What you can unlock</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-background-secondary border border-white/10 rounded-lg p-6 hover:border-gold transition-all duration-300">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-gold mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-foreground">Your first strict pull-up</span>
              </div>
            </div>

            <div className="bg-background-secondary border border-white/10 rounded-lg p-6 hover:border-gold transition-all duration-300">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-gold mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-foreground">Stronger, deeper squats and single-leg strength</span>
              </div>
            </div>

            <div className="bg-background-secondary border border-white/10 rounded-lg p-6 hover:border-gold transition-all duration-300">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-gold mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-foreground">Handstand progress—from prep to wall holds to freestanding</span>
              </div>
            </div>

            <div className="bg-background-secondary border border-white/10 rounded-lg p-6 hover:border-gold transition-all duration-300">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-gold mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-foreground">More control, tension, and confidence in your body</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/programs"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-gold text-dark font-semibold text-sm uppercase tracking-wide hover:bg-gold-light transition-all duration-300 shadow-lg"
            >
              Explore Timothenics 30
            </a>
          </div>
        </div>
      </Section>

      {/* Free 7-Day Plan Section */}
      <Section className="bg-background-secondary" id="free-plan">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white mb-6">Get the Free 7-Day Plan</h2>
          <p className="text-lg text-foreground-muted mb-8">
            Test the system with seven days of guided 30-minute sessions. See how Push, Pull, Legs, and Skills fit into your actual schedule.
          </p>
          <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                className="flex-1 px-6 py-4 rounded-full bg-background border-2 border-white/20 text-white placeholder-foreground-muted/50 focus:border-gold focus:outline-none"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 rounded-full bg-gold text-dark font-semibold text-sm uppercase tracking-wide hover:bg-gold-light transition-all duration-300 shadow-lg whitespace-nowrap"
              >
                Get Started
              </button>
            </div>
          </form>
        </div>
      </Section>

      {/* Bottom Promo Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-background-secondary border-t border-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between overflow-x-auto">
          <div className="flex items-center space-x-12 text-foreground">
            <div className="flex items-center space-x-2 whitespace-nowrap">
              <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-xs font-medium uppercase tracking-wide">LEVEL-BASED PROGRESSION</span>
            </div>
            <div className="flex items-center space-x-2 whitespace-nowrap">
              <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-xs font-medium uppercase tracking-wide">UNLOCKABLE SKILLS</span>
            </div>
            <div className="flex items-center space-x-2 whitespace-nowrap">
              <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-xs font-medium uppercase tracking-wide">30-MINUTE SESSIONS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Add padding to prevent content being hidden by fixed promo bar */}
      <div className="h-16"></div>
    </Layout>
  )
}
