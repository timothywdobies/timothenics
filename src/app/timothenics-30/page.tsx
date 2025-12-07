'use client'

import React from 'react'
import Layout from '@/components/Layout'
import Section from '@/components/Section'

export default function Timothenics30() {
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

      {/* Program Overview */}
      <Section className="bg-background-secondary">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">How it works</h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              Four focused 30-minute missions each week: Push, Pull, Legs, and Skills. Every session follows the same 5–20–5 structure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { title: 'Push 30', desc: 'chest, shoulders, triceps', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
              { title: 'Pull 30', desc: 'back, biceps, grip', icon: 'M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4' },
              { title: 'Legs 30', desc: 'quads, glutes, hamstrings, calves', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
              { title: 'Skills 30', desc: 'handstand, core, levers, control', icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' },
            ].map((track, index) => (
              <div
                key={index}
                className="glass-card p-8 text-center group hover:shadow-glow transition-all duration-300"
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
        </div>
      </Section>

      {/* The Program Content - Placeholder */}
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
      </Section>

      {/* Pricing Section - Placeholder for future paywall */}
      <Section className="bg-background-secondary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white mb-6">Get Started</h2>
          <p className="text-foreground-muted mb-8 text-lg">
            Join Timothenics 30 and start building real strength with level-based progression.
          </p>

          <div className="glass-card p-10 max-w-md mx-auto">
            <div className="text-center mb-6">
              <div className="text-5xl font-bold text-white mb-2">$1</div>
              <p className="text-foreground-muted">8-week program</p>
            </div>

            <button className="w-full group relative inline-flex items-center justify-center px-10 py-4 rounded-full bg-gradient-to-r from-gold via-gold-light to-gold text-dark font-bold text-sm uppercase tracking-wide transition-all duration-300 shadow-glow hover:shadow-glow-lg hover:scale-105 overflow-hidden">
              <span className="relative z-10">Join Now</span>
              <div className="absolute inset-0 bg-shimmer animate-shimmer"></div>
            </button>

            <p className="text-foreground-muted/60 text-xs mt-4">
              Payment processing coming soon
            </p>
          </div>
        </div>
      </Section>
    </Layout>
  )
}
