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
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden group">
        {/* Background Image with parallax effect */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
          style={{
            backgroundImage: 'url(/hero-image.jpg)',
            backgroundColor: '#0a0a0a',
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 animate-fade-in">
          <p className="text-xs md:text-sm font-medium tracking-wider uppercase text-gold mb-6 animate-slide-up">
            ELITE TRAINING FOR BUSY PEOPLE
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white tracking-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Join Timothenics for <span className="text-gold">$1</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Get your first month for just $1 and train alongside thousands building elite strength in 30-minute sessions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <a
              href="#free-plan"
              className="group/btn inline-flex items-center justify-center px-10 py-4 rounded-full bg-white text-dark font-semibold text-sm uppercase tracking-wide hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
            >
              <svg className="w-5 h-5 mr-3 transition-transform group-hover/btn:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
              </svg>
              Get Free 7-Day Plan
            </a>
            <a
              href="/programs"
              className="group/btn inline-flex items-center justify-center px-10 py-4 rounded-full bg-accent text-white font-semibold text-sm uppercase tracking-wide hover:bg-accent-hover transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
            >
              <svg className="w-5 h-5 mr-3 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              See Timothenics 30
            </a>
          </div>
        </div>
      </section>

      {/* Programs Section - Full Width */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden group">
        {/* Background Image Placeholder with hover zoom */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
          style={{
            backgroundImage: 'url(/programs-bg.jpg)',
            backgroundColor: '#0a0a0a',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50 group-hover:from-black/85 transition-all duration-500"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl transform transition-all duration-500 group-hover:translate-x-4">
            <svg className="w-16 h-16 md:w-20 md:h-20 text-gold mb-8 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:text-gold-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h2 className="text-white mb-6 transition-colors duration-300 group-hover:text-gold">Programs</h2>
            <p className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed transition-all duration-300">
              Structured 30-minute sessions designed for real life. Progressive systems that build serious strength without your life revolving around training.
            </p>
            <ul className="space-y-3 mb-10 text-foreground-muted">
              <li className="flex items-start transition-all duration-300 hover:translate-x-2 hover:text-white">
                <svg className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Timothenics 30 - 8-week cycle, 4 sessions/week</span>
              </li>
              <li className="flex items-start transition-all duration-300 hover:translate-x-2 hover:text-white">
                <svg className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Push, pull, legs, and core progressions</span>
              </li>
              <li className="flex items-start transition-all duration-300 hover:translate-x-2 hover:text-white">
                <svg className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Home or park training, minimal equipment</span>
              </li>
            </ul>
            <a
              href="/programs"
              className="group/btn inline-flex items-center justify-center px-10 py-4 rounded-full bg-white text-dark font-semibold text-sm uppercase tracking-wide hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
            >
              Explore Programs
              <svg className="w-5 h-5 ml-3 transition-transform duration-300 group-hover/btn:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Equipment Section - Full Width */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden group">
        {/* Background Image Placeholder with hover zoom */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
          style={{
            backgroundImage: 'url(/equipment-bg.jpg)',
            backgroundColor: '#0a0a0a',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-l from-black/90 via-black/70 to-black/50 group-hover:from-black/85 transition-all duration-500"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl ml-auto transform transition-all duration-500 group-hover:translate-x-4">
            <svg className="w-16 h-16 md:w-20 md:h-20 text-gold mb-8 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:text-gold-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <h2 className="text-white mb-6 transition-colors duration-300 group-hover:text-gold">Equipment</h2>
            <p className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed">
              Minimal tools that maximize results. Bands, parallettes, sliders—everything you actually need, nothing you don't.
            </p>
            <ul className="space-y-3 mb-10 text-foreground-muted">
              <li className="flex items-start transition-all duration-300 hover:translate-x-2 hover:text-white">
                <svg className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Resistance bands - 3 levels for progression</span>
              </li>
              <li className="flex items-start transition-all duration-300 hover:translate-x-2 hover:text-white">
                <svg className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Slider discs for any floor surface</span>
              </li>
              <li className="flex items-start transition-all duration-300 hover:translate-x-2 hover:text-white">
                <svg className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Portable, effective, built to last</span>
              </li>
            </ul>
            <a
              href="/gear"
              className="group/btn inline-flex items-center justify-center px-10 py-4 rounded-full bg-white text-dark font-semibold text-sm uppercase tracking-wide hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
            >
              Shop Equipment
              <svg className="w-5 h-5 ml-3 transition-transform duration-300 group-hover/btn:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Apparel Section - Full Width */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden group">
        {/* Background Image Placeholder with hover zoom */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
          style={{
            backgroundImage: 'url(/apparel-bg.jpg)',
            backgroundColor: '#0a0a0a',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50 group-hover:from-black/85 transition-all duration-500"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl transform transition-all duration-500 group-hover:translate-x-4">
            <svg className="w-16 h-16 md:w-20 md:h-20 text-gold mb-8 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:text-gold-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
            <h2 className="text-white mb-6 transition-colors duration-300 group-hover:text-gold">Apparel</h2>
            <p className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed transition-all duration-300">
              Training apparel designed for movement. Minimal branding, maximum function. Clean design that performs.
            </p>
            <ul className="space-y-3 mb-10 text-foreground-muted">
              <li className="flex items-start transition-all duration-300 hover:translate-x-2 hover:text-white">
                <svg className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Performance training tees and shorts</span>
              </li>
              <li className="flex items-start transition-all duration-300 hover:translate-x-2 hover:text-white">
                <svg className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Movement-focused fit, unrestricted range</span>
              </li>
              <li className="flex items-start transition-all duration-300 hover:translate-x-2 hover:text-white">
                <svg className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Launching soon</span>
              </li>
            </ul>
            <button
              disabled
              className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-gold/20 text-gold-light/80 font-semibold text-sm uppercase tracking-wide cursor-not-allowed"
            >
              Coming Soon
            </button>
          </div>
        </div>
      </section>

      {/* Features - Build for Busy People */}
      <Section className="bg-background">
        <div className="text-center mb-16">
          <p className="text-xs md:text-sm font-medium tracking-wider uppercase text-gold mb-4">
            THE TIMOTHENICS DIFFERENCE
          </p>
          <h2 className="text-white mb-4">BUILT FOR A FULL DAY</h2>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            Not a free day. Most training programs assume unlimited time. Timothenics doesn't.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <div className="bg-background-secondary border border-white/10 rounded-lg p-8 hover:border-gold transition-all duration-300 hover:scale-105 group">
            <h4 className="text-white mb-3 font-semibold group-hover:text-gold transition-colors">Full Calendar</h4>
            <p className="text-foreground-muted text-sm">
              Work, school, life. Your schedule is stacked, and that's not changing.
            </p>
          </div>
          <div className="bg-background-secondary border border-white/10 rounded-lg p-8 hover:border-gold transition-all duration-300 hover:scale-105 group">
            <h4 className="text-white mb-3 font-semibold group-hover:text-gold transition-colors">No 90-Minute Splits</h4>
            <p className="text-foreground-muted text-sm">
              Traditional programs demand hours plus commute. That's a dealbreaker.
            </p>
          </div>
          <div className="bg-background-secondary border border-white/10 rounded-lg p-8 hover:border-gold transition-all duration-300 hover:scale-105 group">
            <h4 className="text-white mb-3 font-semibold group-hover:text-gold transition-colors">30 Focused Minutes</h4>
            <p className="text-foreground-muted text-sm">
              Strip away the filler. Focus on what builds strength. Get in, work, get out.
            </p>
          </div>
          <div className="bg-background-secondary border border-white/10 rounded-lg p-8 hover:border-gold transition-all duration-300 hover:scale-105 group">
            <h4 className="text-white mb-3 font-semibold group-hover:text-gold transition-colors">Clear Plan</h4>
            <p className="text-foreground-muted text-sm">
              No guesswork. Show up, follow the session, watch yourself get stronger.
            </p>
          </div>
        </div>
      </Section>

      {/* The 5-20-5 Framework */}
      <Section className="bg-background-secondary">
        <div className="text-center mb-16">
          <p className="text-xs md:text-sm font-medium tracking-wider uppercase text-gold mb-4">
            SIMPLE STRUCTURE, SERIOUS RESULTS
          </p>
          <h2 className="text-white mb-4">THE 5–20–5 FRAMEWORK</h2>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            Every session follows the same efficient structure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center group">
            <div className="text-7xl font-bold text-gold mb-6 transition-all duration-300 group-hover:scale-110 group-hover:text-gold-light">5</div>
            <h3 className="text-white mb-3 font-semibold text-xl group-hover:text-gold transition-colors">Warm-Up</h3>
            <p className="text-foreground-muted">
              Get joints mobile and muscles firing. Prepare for serious work.
            </p>
          </div>
          <div className="text-center group">
            <div className="text-7xl font-bold text-gold mb-6 transition-all duration-300 group-hover:scale-110 group-hover:text-gold-light">20</div>
            <h3 className="text-white mb-3 font-semibold text-xl group-hover:text-gold transition-colors">Strength Work</h3>
            <p className="text-foreground-muted">
              Push, pull, or legs focus. Progressive exercises that build real strength.
            </p>
          </div>
          <div className="text-center group">
            <div className="text-7xl font-bold text-gold mb-6 transition-all duration-300 group-hover:scale-110 group-hover:text-gold-light">5</div>
            <h3 className="text-white mb-3 font-semibold text-xl group-hover:text-gold transition-colors">Core / Skill</h3>
            <p className="text-foreground-muted">
              Targeted core work or skill practice. Lock in the session.
            </p>
          </div>
        </div>
      </Section>

      {/* Bottom Promo Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-background-secondary border-t border-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between overflow-x-auto">
          <div className="flex items-center space-x-12 text-foreground">
            <div className="flex items-center space-x-2 whitespace-nowrap group">
              <svg className="w-4 h-4 text-gold transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-xs font-medium uppercase tracking-wide group-hover:text-gold transition-colors">BUILT FOR PERFORMANCE</span>
            </div>
            <div className="flex items-center space-x-2 whitespace-nowrap group">
              <svg className="w-4 h-4 text-gold transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-xs font-medium uppercase tracking-wide group-hover:text-gold transition-colors">MINIMAL GEAR REQUIRED</span>
            </div>
            <div className="flex items-center space-x-2 whitespace-nowrap group">
              <svg className="w-4 h-4 text-gold transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-xs font-medium uppercase tracking-wide group-hover:text-gold transition-colors">30-MINUTE SYSTEMS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Add padding to prevent content being hidden by fixed promo bar */}
      <div className="h-16"></div>
    </Layout>
  )
}
