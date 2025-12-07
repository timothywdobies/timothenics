'use client'

import React from 'react'
import Layout from '@/components/Layout'
import Section from '@/components/Section'

export default function Timothenics30() {
  // This would be connected to your payment system later
  const hasPaid = false

  return (
    <Layout>
      {/* Hero Section */}
      <Section className="bg-background py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block bg-gold text-dark px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
              First Launch
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight">
            Timothenics 30
          </h1>
          <p className="text-xl md:text-2xl text-foreground-muted max-w-3xl mx-auto leading-relaxed mb-8">
            An 8-week, level-based calisthenics system built around four 30-minute sessions per week. Progress through Beginner, Intermediate, and Advanced levels—and unlock specific abilities along the way.
          </p>
        </div>
      </Section>

      {/* Pricing Section - Paywall */}
      <Section className="bg-background-secondary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white mb-6">Get Full Access</h2>
          <p className="text-foreground-muted mb-8 text-lg">
            Unlock the complete Timothenics 30 program and start building real strength with level-based progression.
          </p>

          <div className="glass-card p-10 max-w-md mx-auto">
            <div className="text-center mb-6">
              <div className="text-5xl font-bold text-white mb-2">$1</div>
              <p className="text-foreground-muted">Complete 8-week program</p>
            </div>

            <ul className="text-left mb-8 space-y-3">
              <li className="flex items-start text-foreground">
                <svg className="w-5 h-5 text-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Full 4-day workout split (Push, Pull, Legs, Skills)</span>
              </li>
              <li className="flex items-start text-foreground">
                <svg className="w-5 h-5 text-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Level-based progression system</span>
              </li>
              <li className="flex items-start text-foreground">
                <svg className="w-5 h-5 text-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Lifetime access to all program updates</span>
              </li>
            </ul>

            <button className="w-full group relative inline-flex items-center justify-center px-10 py-4 rounded-full bg-gradient-to-r from-gold via-gold-light to-gold text-dark font-bold text-sm uppercase tracking-wide transition-all duration-300 shadow-glow hover:shadow-glow-lg hover:scale-105 overflow-hidden">
              <span className="relative z-10">Unlock Program for $1</span>
              <div className="absolute inset-0 bg-shimmer animate-shimmer"></div>
            </button>

            <p className="text-foreground-muted/60 text-xs mt-4">
              Payment processing coming soon
            </p>
          </div>
        </div>
      </Section>

      {/* The Program Content - Locked */}
      <Section className="bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">Timothenics – 4 Day / 30 Min Split</h2>
            <div className="glass-card border-l-4 border-gold rounded-xl p-6 max-w-3xl mx-auto mb-8">
              <p className="text-foreground text-lg">
                <span className="font-bold text-gold">Every day:</span> Set a 30-minute timer. Work down the list in order, resting as needed. When you reach the end, loop back to the top until time is up.
              </p>
            </div>
          </div>

          {/* Locked Content Overlay */}
          <div className="relative">
            {/* Blurred preview of content */}
            <div className={hasPaid ? '' : 'blur-sm pointer-events-none select-none'}>
              {/* Day 1 - Push */}
              <div className="glass-card p-8 mb-6 hover:border-gold transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center mr-4">
                    <span className="text-gold font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="text-white text-2xl font-bold">Day 1 – Push 30</h3>
                    <p className="text-gold text-sm">Focus: Handstand / 90° / Planche + push strength</p>
                  </div>
                </div>
                <div className="bg-background-panel rounded-lg p-6">
                  <p className="text-foreground-muted mb-4 font-semibold">Circuit (repeat for 30 minutes):</p>
                  <ul className="space-y-3">
                    {[
                      { exercise: 'Tuck planche lean', reps: '20s' },
                      { exercise: '90° hold progression', reps: '15s' },
                      { exercise: 'Wall handstand hold', reps: '25s' },
                      { exercise: 'Pseudo planche push-ups', reps: '8 reps' },
                      { exercise: 'Pike push-ups', reps: '6 reps' },
                      { exercise: 'Straight bar or parallel bar dips', reps: '8 reps' },
                      { exercise: 'Push-ups (normal / diamond / wide)', reps: '12 reps' },
                    ].map((item, index) => (
                      <li key={index} className="flex justify-between items-center text-foreground">
                        <span>{item.exercise}</span>
                        <span className="text-gold font-semibold ml-4">{item.reps}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Day 2 - Pull */}
              <div className="glass-card p-8 mb-6 hover:border-gold transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center mr-4">
                    <span className="text-gold font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="text-white text-2xl font-bold">Day 2 – Pull 30</h3>
                    <p className="text-gold text-sm">Focus: Muscle-up + front lever</p>
                  </div>
                </div>
                <div className="bg-background-panel rounded-lg p-6">
                  <p className="text-foreground-muted mb-4 font-semibold">Circuit (repeat for 30 minutes):</p>
                  <ul className="space-y-3">
                    {[
                      { exercise: 'Muscle-up negatives', reps: '3 slow reps' },
                      { exercise: 'Pull-ups (bodyweight or weighted)', reps: '6 reps' },
                      { exercise: 'Bodyweight rows', reps: '10 reps' },
                      { exercise: 'Tuck front lever hold', reps: '15s' },
                      { exercise: 'Upside-down deadlift', reps: '4 reps' },
                      { exercise: 'Toes-to-bar', reps: '8 reps' },
                    ].map((item, index) => (
                      <li key={index} className="flex justify-between items-center text-foreground">
                        <span>{item.exercise}</span>
                        <span className="text-gold font-semibold ml-4">{item.reps}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Day 3 - Legs */}
              <div className="glass-card p-8 mb-6 hover:border-gold transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center mr-4">
                    <span className="text-gold font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="text-white text-2xl font-bold">Day 3 – Legs 30</h3>
                    <p className="text-gold text-sm">Focus: Pistols / unilateral strength + jump power</p>
                  </div>
                </div>
                <div className="bg-background-panel rounded-lg p-6">
                  <p className="text-foreground-muted mb-4 font-semibold">Circuit (repeat for 30 minutes):</p>
                  <ul className="space-y-3">
                    {[
                      { exercise: 'Pistol squats (or progression)', reps: '4 reps/leg' },
                      { exercise: 'Bulgarian split squats', reps: '8 reps/leg' },
                      { exercise: 'Nordic curl progression', reps: '6 reps' },
                      { exercise: 'Calf raises', reps: '15 reps' },
                      { exercise: 'Step-ups or walking lunges', reps: '10 reps/leg' },
                      { exercise: 'Jump squats', reps: '12 reps' },
                    ].map((item, index) => (
                      <li key={index} className="flex justify-between items-center text-foreground">
                        <span>{item.exercise}</span>
                        <span className="text-gold font-semibold ml-4">{item.reps}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Day 4 - Skills */}
              <div className="glass-card p-8 hover:border-gold transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center mr-4">
                    <span className="text-gold font-bold text-xl">4</span>
                  </div>
                  <div>
                    <h3 className="text-white text-2xl font-bold">Day 4 – Skills 30</h3>
                    <p className="text-gold text-sm">Focus: Handstand + front lever + core skills</p>
                  </div>
                </div>
                <div className="bg-background-panel rounded-lg p-6">
                  <p className="text-foreground-muted mb-4 font-semibold">Circuit (repeat for 30 minutes):</p>
                  <ul className="space-y-3">
                    {[
                      { exercise: 'Chest-to-wall handstand hold', reps: '25s' },
                      { exercise: 'Wall handstand shoulder taps', reps: '10 reps/side' },
                      { exercise: 'Tuck front lever pull', reps: '12s' },
                      { exercise: 'Dragon flags', reps: '8 reps' },
                      { exercise: 'L-sit (tuck or advanced)', reps: '20s' },
                      { exercise: 'Hollow body hold', reps: '25s' },
                    ].map((item, index) => (
                      <li key={index} className="flex justify-between items-center text-foreground">
                        <span>{item.exercise}</span>
                        <span className="text-gold font-semibold ml-4">{item.reps}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Lock Overlay - Only shown if not paid */}
            {!hasPaid && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="glass-card p-12 text-center max-w-md border-2 border-gold">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center">
                    <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-4">Program Locked</h3>
                  <p className="text-foreground-muted mb-8">
                    Unlock the complete 4-day workout program for just $1 and start your training today.
                  </p>
                  <a
                    href="#pricing"
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector('.bg-background-secondary')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-gradient-to-r from-gold via-gold-light to-gold text-dark font-bold text-sm uppercase tracking-wide transition-all duration-300 shadow-glow hover:shadow-glow-lg hover:scale-105"
                  >
                    Unlock for $1
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </Section>
    </Layout>
  )
}
