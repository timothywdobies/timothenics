import React from 'react'
import Layout from '@/components/Layout'
import Section from '@/components/Section'
import Card from '@/components/Card'

export default function Method() {
  return (
    <Layout>
      {/* Page Header */}
      <Section className="py-20 md:py-24 bg-background">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs md:text-sm font-medium tracking-wider uppercase text-gold mb-6">
            THE TIMOTHENICS METHOD
          </p>
          <h1 className="mb-6 text-white">The Timothenics System</h1>
          <p className="text-xl md:text-2xl text-foreground">
            Timothenics is simple on purpose: three 30-minute calisthenics sessions, one busy week, and a level system you unlock like a game.
          </p>
        </div>
      </Section>

      {/* Weekly Structure */}
      <Section className="bg-background-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-white mb-8">Weekly structure</h2>

          <p className="text-lg text-foreground-muted mb-8">
            Every week you run the same core structure:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-background border border-white/10 rounded-lg p-6 hover:border-gold transition-all duration-300">
              <h3 className="text-gold font-semibold mb-2 text-xl">Push 30</h3>
              <p className="text-foreground-muted">chest, shoulders, triceps</p>
            </div>
            <div className="bg-background border border-white/10 rounded-lg p-6 hover:border-gold transition-all duration-300">
              <h3 className="text-gold font-semibold mb-2 text-xl">Pull 30</h3>
              <p className="text-foreground-muted">back, biceps, grip</p>
            </div>
            <div className="bg-background border border-white/10 rounded-lg p-6 hover:border-gold transition-all duration-300">
              <h3 className="text-gold font-semibold mb-2 text-xl">Legs 30</h3>
              <p className="text-foreground-muted">quads, glutes, hamstrings, calves</p>
            </div>
          </div>

          <div className="bg-background border-l-4 border-gold rounded-lg p-8 mb-8">
            <p className="text-foreground mb-4">
              <span className="font-bold text-gold text-xl">Each session is built on the same framework: 5–20–5</span>
            </p>
            <div className="space-y-3 text-foreground-muted">
              <p><span className="text-gold font-semibold">5 minutes:</span> warm-up & activation</p>
              <p><span className="text-gold font-semibold">20 minutes:</span> focused strength work</p>
              <p><span className="text-gold font-semibold">5 minutes:</span> finisher / core / mobility</p>
            </div>
          </div>

          <p className="text-foreground-muted text-lg">
            No 90-minute marathons. No "what should I do today?" You just show up, hit the session, and log your progress.
          </p>
        </div>
      </Section>

      {/* Levels You Unlock */}
      <Section className="bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-white mb-8">Levels you unlock, not workouts you repeat</h2>

          <p className="text-lg text-foreground-muted mb-8">
            Timothenics is designed to feel more like a progression game than a random workout plan.
          </p>

          <p className="text-foreground mb-6">
            Each track—Push, Pull, Legs—has three levels:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-background-secondary border border-white/10 rounded-lg p-6 text-center hover:border-gold transition-all duration-300">
              <div className="text-4xl font-bold text-gold mb-3">Level 1</div>
              <h4 className="text-white font-semibold">Beginner</h4>
            </div>
            <div className="bg-background-secondary border border-white/10 rounded-lg p-6 text-center hover:border-gold transition-all duration-300">
              <div className="text-4xl font-bold text-gold mb-3">Level 2</div>
              <h4 className="text-white font-semibold">Intermediate</h4>
            </div>
            <div className="bg-background-secondary border border-white/10 rounded-lg p-6 text-center hover:border-gold transition-all duration-300">
              <div className="text-4xl font-bold text-gold mb-3">Level 3</div>
              <h4 className="text-white font-semibold">Advanced</h4>
            </div>
          </div>

          <p className="text-foreground-muted mb-12 text-lg">
            You don't just move on because time passed. You unlock the next level by hitting clear standards.
          </p>

          {/* Example Block */}
          <div className="bg-gradient-to-br from-background-secondary to-background border-2 border-gold rounded-lg p-8 md:p-10">
            <h3 className="text-gold mb-6 text-2xl font-semibold">Example (Push Track)</h3>

            <div className="space-y-6">
              <div className="bg-background-panel border border-white/10 rounded-lg p-6">
                <h4 className="text-white font-semibold mb-4 flex items-center">
                  <span className="text-gold mr-3 text-2xl">→</span>
                  Level 1 → Level 2 unlock:
                </h4>
                <ul className="space-y-2 text-foreground-muted ml-10">
                  <li>3 × 12 clean push-ups</li>
                  <li>3 × 10 incline or knee variations with full range</li>
                  <li>Solid core position (no sagging)</li>
                </ul>
              </div>

              <div className="bg-background-panel border border-white/10 rounded-lg p-6">
                <h4 className="text-white font-semibold mb-4 flex items-center">
                  <span className="text-gold mr-3 text-2xl">→</span>
                  Level 2 → Level 3 unlock:
                </h4>
                <ul className="space-y-2 text-foreground-muted ml-10">
                  <li>3 × 10 decline or deficit push-ups</li>
                  <li>Strong control in harder angles (pike / pseudo planche, etc.)</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-foreground-muted mt-8 text-lg">
            As you level up, the session stays 30 minutes, but the movements get more advanced, the volume and tempo change, and the tension and control go way up. The same idea applies to Pull and Legs.
          </p>
        </div>
      </Section>

      {/* Skill-Based Rewards */}
      <Section className="bg-background-secondary">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-white mb-8">Skill-based rewards: handstand, pull-up, pistol & more</h2>

          <p className="text-lg text-foreground mb-10">
            Instead of vague "get better" goals, Timothenics revolves around specific unlocks—skills you earn by doing the right work consistently.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Pull Track */}
            <div className="bg-background border border-white/10 rounded-lg p-8 hover:border-gold transition-all duration-300">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
                <h3 className="text-white font-semibold text-xl">Pull Track</h3>
              </div>
              <ul className="space-y-3 text-foreground-muted">
                <li className="flex items-start">
                  <span className="text-gold mr-2">→</span>
                  <span>Unlock your first band-assisted row standard</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">→</span>
                  <span>Unlock your first strict pull-up</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">→</span>
                  <span>Unlock multiple clean pull-ups and lever foundations</span>
                </li>
              </ul>
            </div>

            {/* Legs Track */}
            <div className="bg-background border border-white/10 rounded-lg p-8 hover:border-gold transition-all duration-300">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <h3 className="text-white font-semibold text-xl">Legs Track</h3>
              </div>
              <ul className="space-y-3 text-foreground-muted">
                <li className="flex items-start">
                  <span className="text-gold mr-2">→</span>
                  <span>Unlock deeper, controlled squats</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">→</span>
                  <span>Unlock strong split squats and Bulgarians</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">→</span>
                  <span>Unlock pistol squat progressions</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-foreground-muted text-center text-lg">
            It's not just "do handstand stuff." It's: run the sessions, meet the criteria, unlock the next tier.
          </p>
        </div>
      </Section>

      {/* How It Feels As a User */}
      <Section className="bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-white mb-8">How it feels as a user</h2>

          <p className="text-lg text-foreground mb-8">
            Instead of "Here's a PDF, do 3 × 10 of this forever," Timothenics is:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-background-secondary border border-white/10 rounded-lg p-6 hover:border-gold transition-all duration-300">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-gold mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="text-white font-semibold mb-2">Three 30-minute "missions" each week</h4>
                  <p className="text-foreground-muted text-sm">Push, Pull, Legs</p>
                </div>
              </div>
            </div>

            <div className="bg-background-secondary border border-white/10 rounded-lg p-6 hover:border-gold transition-all duration-300">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-gold mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="text-white font-semibold mb-2">Tracks with levels</h4>
                  <p className="text-foreground-muted text-sm">so you always know where you are</p>
                </div>
              </div>
            </div>

            <div className="bg-background-secondary border border-white/10 rounded-lg p-6 hover:border-gold transition-all duration-300">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-gold mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="text-white font-semibold mb-2">Unlock tests</h4>
                  <p className="text-foreground-muted text-sm">so you always know what you're working toward</p>
                </div>
              </div>
            </div>

            <div className="bg-background-secondary border border-white/10 rounded-lg p-6 hover:border-gold transition-all duration-300">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-gold mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="text-white font-semibold mb-2">Skill rewards</h4>
                  <p className="text-foreground-muted text-sm">like your first pull-up, deeper squats, and real handstand progress</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-background-secondary to-background border-l-4 border-gold rounded-lg p-8 text-center">
            <p className="text-foreground text-xl">
              Your day stays busy. Your training stays short. Your progress feels like <span className="text-gold font-semibold">leveling up in a game</span>—not guessing in the dark.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-background-secondary">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="mb-6 text-white">Ready to unlock your first level?</h2>
          <p className="text-xl text-foreground-muted mb-8">
            Start with the free 7-Day Plan and experience the level-based system firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#free-plan"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-gold text-dark font-semibold text-sm uppercase tracking-wide hover:bg-gold-light transition-all duration-300 shadow-lg"
            >
              Get the Free 7-Day Plan
            </a>
            <a
              href="/programs"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-transparent border-2 border-white text-white font-semibold text-sm uppercase tracking-wide hover:bg-white hover:text-dark transition-all duration-300"
            >
              See All Programs
            </a>
          </div>
        </div>
      </Section>
    </Layout>
  )
}
