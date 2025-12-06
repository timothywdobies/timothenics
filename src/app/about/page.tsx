'use client'

import React from 'react'
import Layout from '@/components/Layout'
import Section from '@/components/Section'
import Card from '@/components/Card'
import Button from '@/components/Button'

export default function About() {
  return (
    <Layout>
      {/* Page Header */}
      <Section className="py-20 md:py-24 bg-background">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs md:text-sm font-medium tracking-wider uppercase text-gold mb-6">
            ABOUT TIMOTHENICS
          </p>
          <h1 className="mb-6 text-white">Why Timothenics Exists</h1>
          <p className="text-xl md:text-2xl text-foreground">
            Built for people who want elite physical standards without their life revolving around training.
          </p>
        </div>
      </Section>

      {/* Founder Story */}
      <Section className="bg-background-secondary">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              {/* Placeholder for founder photo */}
              <div className="bg-background-panel border border-white/10 rounded-xl h-96 flex items-center justify-center overflow-hidden group">
                <div className="text-center">
                  <svg className="w-24 h-24 text-gold/50 mx-auto mb-4 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-foreground-muted">Photo: Training in action</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-white">The Problem</h2>
              <p className="text-foreground-muted mb-4">
                Most training programs are designed for people with unlimited time. Two-hour gym sessions.
                Morning cardio. Evening mobility work. Meal prep Sundays. Recovery protocols. They assume
                training is your primary focus and everything else fits around it.
              </p>
              <p className="text-foreground-muted">
                But that's not real life for most people. You have work, school, relationships, side projects,
                and a list of things that never gets shorter. You don't have two free hours, and even if you did,
                you probably wouldn't want to spend them all in a gym.
              </p>
            </div>
          </div>

          <div className="bg-background border border-white/10 rounded-lg p-8 md:p-12 mb-12">
            <h3 className="mb-4 text-white">What If Time Wasn't the Problem?</h3>
            <p className="text-foreground-muted mb-4">
              After years of trying to force 90-minute programs into 30-minute windows, it became clear:
              the problem wasn't lack of time. It was programs that refused to respect the time you actually had.
            </p>
            <p className="text-foreground-muted mb-4">
              Timothenics started with a different question: What if we designed training around real schedules
              from the beginning? What if 30 minutes wasn't a compromise, but the actual constraint we optimized for?
            </p>
            <p className="text-foreground-muted">
              Turns out, 30 minutes is more than enough. You just have to eliminate filler, structure every session
              with intention, and focus on progressive overload in fundamental movements. No wasted sets. No random
              exercises. Just clear work that builds strength.
            </p>
          </div>

        </div>
      </Section>

      {/* Mission */}
      <Section className="bg-background">
        <div className="text-center mb-12">
          <p className="text-xs md:text-sm font-medium tracking-wider uppercase text-gold mb-4">
            THE MISSION
          </p>
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-background-secondary border border-white/10 rounded-lg p-8 md:p-12">
            <h3 className="mb-4 text-white">Best shape of your life without your life revolving around training</h3>
            <p className="text-foreground-muted mb-4">
              You shouldn't have to choose between getting strong and having a full life. Training should enhance
              your life, not consume it.
            </p>
            <p className="text-foreground-muted mb-4">
              Timothenics builds systems that fit into real schedules. Thirty-minute sessions. Minimal gear.
              Progressive structure. Clear outcomes. You show up, do the work, and get stronger—without rearranging
              your entire day.
            </p>
            <p className="text-foreground-muted">
              The goal isn't just strength. It's proving to yourself that you can commit to something challenging
              and follow through, even when your schedule is stacked. That confidence carries over into everything else.
            </p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-background-secondary">
        <div className="text-center mb-12">
          <p className="text-xs md:text-sm font-medium tracking-wider uppercase text-gold mb-4">
            CORE VALUES
          </p>
          <h2 className="text-white">What We Believe</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-background border border-white/10 rounded-lg p-8 hover:border-gold transition-all duration-300 group">
            <h4 className="mb-3 text-white group-hover:text-gold transition-colors">Efficiency Over Volume</h4>
            <p className="text-foreground-muted">
              More time doesn't mean better results. Focused 30-minute sessions beat distracted 2-hour workouts
              every time.
            </p>
          </div>

          <div className="bg-background border border-white/10 rounded-lg p-8 hover:border-gold transition-all duration-300 group">
            <h4 className="mb-3 text-white group-hover:text-gold transition-colors">Progression Over Randomness</h4>
            <p className="text-foreground-muted">
              Clear progression paths beat "muscle confusion." You get stronger by doing harder variations,
              not random exercises.
            </p>
          </div>

          <div className="bg-background border border-white/10 rounded-lg p-8 hover:border-gold transition-all duration-300 group">
            <h4 className="mb-3 text-white group-hover:text-gold transition-colors">Consistency Over Perfection</h4>
            <p className="text-foreground-muted">
              Four good sessions beat zero perfect ones. The program you follow is better than the program you skip.
            </p>
          </div>

          <div className="bg-background border border-white/10 rounded-lg p-8 hover:border-gold transition-all duration-300 group">
            <h4 className="mb-3 text-white group-hover:text-gold transition-colors">Fundamentals Over Complexity</h4>
            <p className="text-foreground-muted">
              Push, pull, legs, core. Master the basics before chasing advanced skills. Strong fundamentals unlock everything.
            </p>
          </div>

          <div className="bg-background border border-white/10 rounded-lg p-8 hover:border-gold transition-all duration-300 group">
            <h4 className="mb-3 text-white group-hover:text-gold transition-colors">Minimal Gear, Maximum Results</h4>
            <p className="text-foreground-muted">
              A bar, the floor, and a few bands are enough. Expensive equipment doesn't build strength—progressive overload does.
            </p>
          </div>

          <div className="bg-background border border-white/10 rounded-lg p-8 hover:border-gold transition-all duration-300 group">
            <h4 className="mb-3 text-white group-hover:text-gold transition-colors">Honest Marketing</h4>
            <p className="text-foreground-muted">
              No 30-day transformations. No magic protocols. Just structured training, consistent effort, and real results
              over weeks and months.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-background">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="mb-6 text-white">Ready to get started?</h2>
          <p className="text-xl text-foreground-muted mb-8">
            Test the system with the free 7-Day Timothenics Start plan, or jump straight into the full 8-week
            Timothenics 30 program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#free-plan" className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-gold text-dark font-semibold text-sm uppercase tracking-wide hover:bg-gold-light transition-all duration-300 shadow-lg">
              Get the Free 7-Day Plan
            </a>
            <a href="/programs" className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-transparent border-2 border-white text-white font-semibold text-sm uppercase tracking-wide hover:bg-white hover:text-dark transition-all duration-300">
              See Timothenics 30
            </a>
          </div>
        </div>
      </Section>
    </Layout>
  )
}
