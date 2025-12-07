'use client'

import React, { useEffect, useState } from 'react'
import Layout from '@/components/Layout'
import Section from '@/components/Section'
import { useRouter } from 'next/navigation'

export default function SevenDayAccess() {
  const [hasAccess, setHasAccess] = useState(false)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check if user has access
    const access = localStorage.getItem('7dayPlanAccess')
    if (access === 'true') {
      setHasAccess(true)
    } else {
      // Redirect to signup if no access
      router.push('/7-day-plan')
    }
    setLoading(false)
  }, [router])

  if (loading) {
    return (
      <Layout>
        <Section className="bg-background py-24">
          <div className="text-center">
            <p className="text-foreground-muted">Loading...</p>
          </div>
        </Section>
      </Layout>
    )
  }

  if (!hasAccess) {
    return null
  }

  return (
    <Layout>
      {/* Hero */}
      <Section className="bg-background py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block bg-gold text-dark px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
              Your Free Program
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight">
            7-Day Calisthenics Plan
          </h1>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto leading-relaxed">
            Welcome! Below is your complete 7-day training plan. Each session is 30 minutes or less.
          </p>
        </div>
      </Section>

      {/* The 7-Day Program */}
      <Section className="bg-background-secondary">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">Your 7-Day Program</h2>
            <div className="glass-card border-l-4 border-gold rounded-xl p-6 max-w-3xl mx-auto mb-8">
              <p className="text-foreground text-lg">
                <span className="font-bold text-gold">Each day:</span> Follow the workout below. Rest as needed between exercises. Focus on form over speed.
              </p>
            </div>
          </div>

          {/* Day 1 */}
          <div className="glass-card p-8 mb-6">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center mr-4">
                <span className="text-gold font-bold text-xl">1</span>
              </div>
              <div>
                <h3 className="text-white text-2xl font-bold">Day 1 – Push Foundation</h3>
                <p className="text-gold text-sm">Focus: Basic push movements</p>
              </div>
            </div>
            <div className="bg-background-panel rounded-lg p-6">
              <p className="text-foreground-muted mb-4 font-semibold">Workout:</p>
              <ul className="space-y-3">
                {[
                  { exercise: 'Push-ups (or knee push-ups)', reps: '3 sets of 8-12 reps' },
                  { exercise: 'Plank hold', reps: '3 sets of 20-30 seconds' },
                  { exercise: 'Shoulder taps', reps: '3 sets of 10 reps each side' },
                  { exercise: 'Incline push-ups', reps: '2 sets of 10 reps' },
                ].map((item, index) => (
                  <li key={index} className="flex justify-between items-center text-foreground">
                    <span>{item.exercise}</span>
                    <span className="text-gold font-semibold ml-4">{item.reps}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Day 2 */}
          <div className="glass-card p-8 mb-6">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center mr-4">
                <span className="text-gold font-bold text-xl">2</span>
              </div>
              <div>
                <h3 className="text-white text-2xl font-bold">Day 2 – Pull Foundation</h3>
                <p className="text-gold text-sm">Focus: Basic pull movements</p>
              </div>
            </div>
            <div className="bg-background-panel rounded-lg p-6">
              <p className="text-foreground-muted mb-4 font-semibold">Workout:</p>
              <ul className="space-y-3">
                {[
                  { exercise: 'Bodyweight rows (table or low bar)', reps: '3 sets of 8-12 reps' },
                  { exercise: 'Dead hang (if possible)', reps: '3 sets of 10-20 seconds' },
                  { exercise: 'Superman holds', reps: '3 sets of 15 seconds' },
                  { exercise: 'Scapular retractions', reps: '2 sets of 12 reps' },
                ].map((item, index) => (
                  <li key={index} className="flex justify-between items-center text-foreground">
                    <span>{item.exercise}</span>
                    <span className="text-gold font-semibold ml-4">{item.reps}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Day 3 */}
          <div className="glass-card p-8 mb-6">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center mr-4">
                <span className="text-gold font-bold text-xl">3</span>
              </div>
              <div>
                <h3 className="text-white text-2xl font-bold">Day 3 – Legs Foundation</h3>
                <p className="text-gold text-sm">Focus: Lower body strength</p>
              </div>
            </div>
            <div className="bg-background-panel rounded-lg p-6">
              <p className="text-foreground-muted mb-4 font-semibold">Workout:</p>
              <ul className="space-y-3">
                {[
                  { exercise: 'Bodyweight squats', reps: '3 sets of 15 reps' },
                  { exercise: 'Reverse lunges', reps: '3 sets of 10 reps each leg' },
                  { exercise: 'Glute bridges', reps: '3 sets of 15 reps' },
                  { exercise: 'Calf raises', reps: '2 sets of 20 reps' },
                ].map((item, index) => (
                  <li key={index} className="flex justify-between items-center text-foreground">
                    <span>{item.exercise}</span>
                    <span className="text-gold font-semibold ml-4">{item.reps}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Day 4 */}
          <div className="glass-card p-8 mb-6">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center mr-4">
                <span className="text-gold font-bold text-xl">4</span>
              </div>
              <div>
                <h3 className="text-white text-2xl font-bold">Day 4 – Core & Skills</h3>
                <p className="text-gold text-sm">Focus: Core strength and control</p>
              </div>
            </div>
            <div className="bg-background-panel rounded-lg p-6">
              <p className="text-foreground-muted mb-4 font-semibold">Workout:</p>
              <ul className="space-y-3">
                {[
                  { exercise: 'Hollow body hold', reps: '3 sets of 15-20 seconds' },
                  { exercise: 'Dead bug', reps: '3 sets of 10 reps each side' },
                  { exercise: 'Bicycle crunches', reps: '3 sets of 20 reps' },
                  { exercise: 'Side plank', reps: '2 sets of 20 seconds each side' },
                ].map((item, index) => (
                  <li key={index} className="flex justify-between items-center text-foreground">
                    <span>{item.exercise}</span>
                    <span className="text-gold font-semibold ml-4">{item.reps}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Day 5 */}
          <div className="glass-card p-8 mb-6">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center mr-4">
                <span className="text-gold font-bold text-xl">5</span>
              </div>
              <div>
                <h3 className="text-white text-2xl font-bold">Day 5 – Full Body Circuit</h3>
                <p className="text-gold text-sm">Focus: Combining all movements</p>
              </div>
            </div>
            <div className="bg-background-panel rounded-lg p-6">
              <p className="text-foreground-muted mb-4 font-semibold">Workout (complete 3 rounds):</p>
              <ul className="space-y-3">
                {[
                  { exercise: 'Push-ups', reps: '10 reps' },
                  { exercise: 'Bodyweight squats', reps: '15 reps' },
                  { exercise: 'Bodyweight rows', reps: '8 reps' },
                  { exercise: 'Plank hold', reps: '30 seconds' },
                  { exercise: 'Rest', reps: '90 seconds between rounds' },
                ].map((item, index) => (
                  <li key={index} className="flex justify-between items-center text-foreground">
                    <span>{item.exercise}</span>
                    <span className="text-gold font-semibold ml-4">{item.reps}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Day 6 */}
          <div className="glass-card p-8 mb-6">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center mr-4">
                <span className="text-gold font-bold text-xl">6</span>
              </div>
              <div>
                <h3 className="text-white text-2xl font-bold">Day 6 – Active Recovery</h3>
                <p className="text-gold text-sm">Focus: Movement and mobility</p>
              </div>
            </div>
            <div className="bg-background-panel rounded-lg p-6">
              <p className="text-foreground-muted mb-4 font-semibold">Workout:</p>
              <ul className="space-y-3">
                {[
                  { exercise: 'Cat-cow stretches', reps: '2 sets of 10 reps' },
                  { exercise: 'Hip circles', reps: '2 sets of 10 each direction' },
                  { exercise: 'Shoulder rolls', reps: '2 sets of 10 each direction' },
                  { exercise: 'Light walking or yoga', reps: '15-20 minutes' },
                ].map((item, index) => (
                  <li key={index} className="flex justify-between items-center text-foreground">
                    <span>{item.exercise}</span>
                    <span className="text-gold font-semibold ml-4">{item.reps}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Day 7 */}
          <div className="glass-card p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center mr-4">
                <span className="text-gold font-bold text-xl">7</span>
              </div>
              <div>
                <h3 className="text-white text-2xl font-bold">Day 7 – Test Day</h3>
                <p className="text-gold text-sm">Focus: See your progress</p>
              </div>
            </div>
            <div className="bg-background-panel rounded-lg p-6">
              <p className="text-foreground-muted mb-4 font-semibold">Test your baseline:</p>
              <ul className="space-y-3">
                {[
                  { exercise: 'Max push-ups (good form)', reps: 'Record your number' },
                  { exercise: 'Max bodyweight squats', reps: 'Record your number' },
                  { exercise: 'Plank hold for time', reps: 'Record your time' },
                  { exercise: 'Wall handstand hold (if possible)', reps: 'Record your time' },
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

      {/* Next Steps */}
      <Section className="bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white mb-6">Ready for More?</h2>
          <p className="text-foreground-muted mb-8 text-lg">
            You've completed the 7-day introduction. Ready to take your training to the next level with structured progression?
          </p>
          <a
            href="/timothenics-30"
            className="inline-flex items-center justify-center px-12 py-5 rounded-full bg-gradient-to-r from-gold via-gold-light to-gold text-dark font-bold text-sm uppercase tracking-wide transition-all duration-300 shadow-glow-lg hover:shadow-glow-lg hover:scale-105"
          >
            Get Timothenics 30
          </a>
        </div>
      </Section>
    </Layout>
  )
}
