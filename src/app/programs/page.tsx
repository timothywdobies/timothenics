'use client'

import React from 'react'
import Layout from '@/components/Layout'
import Section from '@/components/Section'
import Button from '@/components/Button'
import Card from '@/components/Card'

export default function Programs() {
  return (
    <Layout>
      {/* Page Header */}
      <Section className="py-20 md:py-24 bg-background">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs md:text-sm font-medium tracking-wider uppercase text-gold mb-6">
            TIMOTHENICS TRAINING PROGRAMS
          </p>
          <h1 className="mb-6 text-white">Programs</h1>
          <p className="text-xl md:text-2xl text-foreground">
            Structured calisthenics systems designed for real schedules. Progressive, efficient, and built to fit your life.
          </p>
        </div>
      </Section>

      {/* Main Featured Program: Timothenics 30 */}
      <Section className="bg-background-secondary">
        <div className="text-center mb-12">
          <p className="text-xs md:text-sm font-medium tracking-wider uppercase text-gold mb-4">
            FLAGSHIP PROGRAM
          </p>
          <h2 className="text-white mb-2">Timothenics 30</h2>
          <p className="text-foreground-muted">The flagship 8-week cycle</p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="bg-background border border-white/10 rounded-lg p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 text-center">
              <div className="group">
                <div className="text-4xl font-bold text-gold mb-2 transition-all duration-300 group-hover:scale-110 group-hover:text-gold-light">8</div>
                <p className="text-sm text-foreground-muted">Weeks</p>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-gold mb-2 transition-all duration-300 group-hover:scale-110 group-hover:text-gold-light">4</div>
                <p className="text-sm text-foreground-muted">Sessions per Week</p>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-gold mb-2 transition-all duration-300 group-hover:scale-110 group-hover:text-gold-light">~30</div>
                <p className="text-sm text-foreground-muted">Minutes per Session</p>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-gold mb-2 transition-all duration-300 group-hover:scale-110 group-hover:text-gold-light">Min</div>
                <p className="text-sm text-foreground-muted">Gear Required</p>
              </div>
            </div>

            <div className="mb-10">
              <h3 className="mb-6 text-white">Built For</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-foreground-muted">People with full calendars who still want elite strength standards</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-foreground-muted">Anyone tired of workouts that demand 90+ minutes plus commute time</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-foreground-muted">Home or park training with minimal gear (bar + floor, bands optional)</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-foreground-muted">Clear progression without guesswork or wandering between exercises</p>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h3 className="mb-6 text-white">Outcomes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <p className="text-foreground-muted">More reps in push-ups, pull-ups, dips, and core movements</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <p className="text-foreground-muted">Visible improvements in body composition (shoulders, arms, core)</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <p className="text-foreground-muted">Confidence from consistent training that fits your actual schedule</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <p className="text-foreground-muted">Foundation for advanced calisthenics skills and continued progression</p>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h3 className="mb-6 text-white">Example Weekly Structure</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-background-secondary border border-white/10 rounded-lg p-4 hover:border-gold transition-all duration-300">
                  <div className="font-semibold text-gold mb-2">Monday</div>
                  <p className="text-sm text-foreground-muted">Push Focus</p>
                  <p className="text-xs text-foreground-muted/60 mt-1">5-20-5 structure</p>
                </div>
                <div className="bg-background-secondary border border-white/10 rounded-lg p-4 hover:border-gold transition-all duration-300">
                  <div className="font-semibold text-gold mb-2">Tuesday</div>
                  <p className="text-sm text-foreground-muted">Pull Focus</p>
                  <p className="text-xs text-foreground-muted/60 mt-1">5-20-5 structure</p>
                </div>
                <div className="bg-background-secondary border border-white/10 rounded-lg p-4 hover:border-gold transition-all duration-300">
                  <div className="font-semibold text-gold mb-2">Thursday</div>
                  <p className="text-sm text-foreground-muted">Legs Focus</p>
                  <p className="text-xs text-foreground-muted/60 mt-1">5-20-5 structure</p>
                </div>
                <div className="bg-background-secondary border border-white/10 rounded-lg p-4 hover:border-gold transition-all duration-300">
                  <div className="font-semibold text-gold mb-2">Saturday</div>
                  <p className="text-sm text-foreground-muted">Full Body / Skills</p>
                  <p className="text-xs text-foreground-muted/60 mt-1">5-20-5 structure</p>
                </div>
              </div>
              <p className="text-sm text-foreground-muted mt-4">
                Rest days: Wednesday, Friday, Sunday. Adjust to your schedule while maintaining the 4-session rhythm.
              </p>
            </div>

            <div className="text-center">
              <button className="px-10 py-4 rounded-full bg-gold text-dark font-semibold text-sm uppercase tracking-wide hover:bg-gold-light transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105">
                Get Timothenics 30
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* Coming Soon Programs */}
      <Section className="bg-background">
        <div className="text-center mb-12">
          <p className="text-xs md:text-sm font-medium tracking-wider uppercase text-gold mb-4">
            COMING SOON
          </p>
          <h2 className="text-white mb-2">Additional Programs</h2>
          <p className="text-foreground-muted">Different goals and experience levels</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-background-secondary border border-white/10 rounded-lg p-8 hover:border-gold transition-all duration-300 hover:scale-105 group">
            <div className="mb-6">
              <span className="inline-block bg-gold/20 text-gold px-3 py-1 rounded-full text-xs font-semibold mb-4 uppercase tracking-wide">
                Coming Soon
              </span>
              <h3 className="text-white group-hover:text-gold transition-colors">Timothenics 60</h3>
            </div>
            <p className="text-foreground-muted mb-6">
              For those with more time flexibility. 60-minute sessions with expanded volume,
              skill work, and advanced progressions. Same efficient structure, deeper training.
            </p>
            <ul className="space-y-2 text-sm text-foreground-muted">
              <li className="flex items-start">
                <svg className="w-4 h-4 text-gold mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>12-week cycle</span>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 text-gold mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>4-5 sessions per week</span>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 text-gold mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Advanced skill progressions</span>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 text-gold mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Higher volume strength work</span>
              </li>
            </ul>
          </div>

          <div className="bg-background-secondary border border-white/10 rounded-lg p-8 hover:border-gold transition-all duration-300 hover:scale-105 group">
            <div className="mb-6">
              <span className="inline-block bg-gold/20 text-gold px-3 py-1 rounded-full text-xs font-semibold mb-4 uppercase tracking-wide">
                Coming Soon
              </span>
              <h3 className="text-white group-hover:text-gold transition-colors">Timothenics Skills</h3>
            </div>
            <p className="text-foreground-muted mb-6">
              Dedicated skill-focused cycles. Handstands, levers, muscle-ups, and other movement goals.
              Structured progressions that build the prerequisites you actually need.
            </p>
            <ul className="space-y-2 text-sm text-foreground-muted">
              <li className="flex items-start">
                <svg className="w-4 h-4 text-gold mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Skill-specific progressions</span>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 text-gold mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>6-8 week cycles per skill</span>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 text-gold mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Prerequisite strength pathways</span>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 text-gold mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Video form guidance</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </Layout>
  )
}
