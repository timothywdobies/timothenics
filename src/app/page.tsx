'use client'

import React, { useState, useEffect, useRef } from 'react'
import Layout from '@/components/Layout'
import Section from '@/components/Section'
import Button from '@/components/Button'
import Card from '@/components/Card'

export default function Home() {
  const [email, setEmail] = useState('')
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({})
  const observerRef = useRef<IntersectionObserver | null>(null)

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
    console.log('Email submitted:', email)
    alert(`Thanks! We'll send the 7-Day Plan to ${email}`)
    setEmail('')
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
            Join Timothenics for <span className="text-white">$1</span>
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up font-medium drop-shadow-lg" style={{ animationDelay: '0.1s', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
            Four 30-minute sessions a week. Level-based progression. Unlock skills like handstands, pull-ups, and advanced calisthenics moves.
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

      {/* How Timothenics Works */}
      <Section className="bg-background py-24 md:py-32">
        <div id="how-it-works" data-animate className={`text-center mb-16 transition-all duration-1000 ${isVisible['how-it-works'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-white mb-6">How Timothenics works</h2>
          <p className="text-lg text-foreground-muted max-w-3xl mx-auto">
            Timothenics is built around four 30-minute "missions" each week: Push, Pull, Legs, and Skills. Every session follows the same 5–20–5 structure so you always know what to do when it's time to train.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {[
            { icon: 'M13 10V3L4 14h7v7l9-11h-7z', title: 'Push 30', desc: 'chest, shoulders, triceps', delay: '0s' },
            { icon: 'M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4', title: 'Pull 30', desc: 'back, biceps, grip', delay: '0.1s' },
            { icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10', title: 'Legs 30', desc: 'quads, glutes, hamstrings, calves', delay: '0.2s' },
            { icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z', title: 'Skills 30', desc: 'handstand, core, levers, control', delay: '0.3s' },
          ].map((track, index) => (
            <div
              key={index}
              id={`track-${index}`}
              data-animate
              className={`card-premium glass-card p-8 hover:shadow-glow transition-all duration-500 text-center group ${isVisible[`track-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: track.delay }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-gold group-hover:text-gold-light transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={track.icon} />
                </svg>
              </div>
              <h3 className="text-white mb-2 text-xl font-semibold group-hover:text-gold transition-colors">{track.title}</h3>
              <p className="text-foreground-muted text-sm">{track.desc}</p>
            </div>
          ))}
        </div>

        <div className="glass-card border-l-4 border-gold rounded-xl p-8 max-w-4xl mx-auto shadow-premium">
          <p className="text-foreground text-center text-lg">
            <span className="font-bold text-gold">All sessions use the 5–20–5 framework:</span> 5 minutes warm-up, 20 minutes focused strength work, 5 minutes finisher or core.
          </p>
        </div>
      </Section>

      {/* Levels & Unlocks */}
      <Section className="bg-background-secondary py-24 md:py-32">
        <div id="levels" data-animate className={`text-center mb-16 transition-all duration-1000 ${isVisible['levels'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-white mb-6">Levels you unlock, not workouts you repeat</h2>
          <p className="text-lg text-foreground-muted max-w-3xl mx-auto mb-10">
            Each track—Push, Pull, Legs, and Skills—has three levels: Beginner, Intermediate, and Advanced. You don't just move on because time passes. You unlock the next level by hitting clear standards, like clean push-up reps, controlled rows, or specific hold times.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {[1, 2, 3].map((level, index) => (
            <div
              key={level}
              id={`level-${level}`}
              data-animate
              className={`glass-card p-10 text-center group hover:shadow-glow transition-all duration-500 ${isVisible[`level-${level}`] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="text-6xl font-bold gradient-text mb-4 group-hover:scale-110 transition-transform duration-300">Level {level}</div>
              <h4 className="text-white font-semibold text-lg group-hover:text-gold transition-colors">{level === 1 ? 'Beginner' : level === 2 ? 'Intermediate' : 'Advanced'}</h4>
              <div className="mt-6 h-2 bg-background rounded-full overflow-hidden">
                <div className={`h-full bg-gradient-to-r from-gold to-gold-light transition-all duration-1000 ${isVisible[`level-${level}`] ? 'w-full' : 'w-0'}`} style={{ transitionDelay: `${index * 0.1 + 0.3}s` }}></div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-foreground-muted text-center max-w-3xl mx-auto text-lg">
          As you level up, the sessions stay 30 minutes, but the movements get more advanced, the tension increases, and your skills and physique follow.
        </p>
      </Section>

      {/* What You Can Unlock */}
      <Section className="bg-background py-24 md:py-32">
        <div className="max-w-5xl mx-auto">
          <div id="unlocks" data-animate className={`text-center mb-16 transition-all duration-1000 ${isVisible['unlocks'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-white mb-6">What you can unlock</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              'Your first strict pull-up',
              'Stronger, deeper squats and single-leg strength',
              'Handstand progress—from prep to wall holds to freestanding',
              'More control, tension, and confidence in your body'
            ].map((unlock, index) => (
              <div
                key={index}
                id={`unlock-${index}`}
                data-animate
                className={`glass-card p-6 group hover:shadow-glow transition-all duration-500 ${isVisible[`unlock-${index}`] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-dark" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-foreground group-hover:text-white transition-colors">{unlock}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/programs"
              className="group relative inline-flex items-center justify-center px-12 py-5 rounded-full bg-gradient-to-r from-gold via-gold-light to-gold text-dark font-bold text-sm uppercase tracking-wide transition-all duration-300 shadow-glow-lg hover:shadow-glow-lg hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10">Explore Timothenics 30</span>
              <div className="absolute inset-0 bg-shimmer animate-shimmer"></div>
            </a>
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

      {/* Bottom Promo Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 backdrop-blur-lg bg-background-secondary/80 border-t border-gold/30 shadow-premium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between overflow-x-auto">
          <div className="flex items-center space-x-12 text-foreground">
            {['LEVEL-BASED PROGRESSION', 'UNLOCKABLE SKILLS', '30-MINUTE SESSIONS'].map((item, index) => (
              <div key={index} className="flex items-center space-x-2 whitespace-nowrap group">
                <div className="w-1.5 h-1.5 rounded-full bg-gold group-hover:scale-150 transition-transform duration-300"></div>
                <span className="text-xs font-medium uppercase tracking-wide group-hover:text-gold transition-colors">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add padding to prevent content being hidden by fixed promo bar */}
      <div className="h-16"></div>
    </Layout>
  )
}
