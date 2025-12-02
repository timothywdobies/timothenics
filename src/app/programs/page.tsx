import React from 'react'
import Layout from '@/components/Layout'
import Section from '@/components/Section'
import Card from '@/components/Card'

export default function Programs() {
  return (
    <Layout>
      {/* Page Header */}
      <Section className="py-20 md:py-24 bg-background">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs md:text-sm font-medium tracking-wider uppercase text-gold mb-6">
            PROGRAMS
          </p>
          <h1 className="mb-6 text-white">Programs</h1>
          <p className="text-xl md:text-2xl text-foreground">
            Timothenics programs are built around four 30-minute sessions a week—Push, Pull, Legs, and Skills—organized into levels you unlock like a game. You start where you are and climb through Beginner, Intermediate, and Advanced by meeting clear standards.
          </p>
        </div>
      </Section>

      {/* Free 7-Day Start */}
      <Section className="bg-background-secondary">
        <div className="max-w-4xl mx-auto">
          <div className="bg-background border border-white/10 rounded-lg overflow-hidden hover:border-gold transition-all duration-300">
            <div className="p-8 md:p-12">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-white mb-2">Timothenics 7-Day Start</h2>
                  <div className="inline-block bg-gold/20 text-gold px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                    Free
                  </div>
                </div>
              </div>

              <p className="text-foreground-muted mb-6 text-lg">
                A free 7-day introduction to the Timothenics system. Four 30-minute sessions that show you what Push, Pull, Legs, and Skills feel like—with minimal gear and clear structure.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground">7 days of guided 30-minute sessions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground">Train at home or at a park</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground">Perfect way to test the system before committing</span>
                </li>
              </ul>

              <a
                href="/#free-plan"
                className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-gold text-dark font-semibold text-sm uppercase tracking-wide hover:bg-gold-light transition-all duration-300 shadow-lg"
              >
                Get the 7-Day Plan
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Timothenics 30 - Main Program */}
      <Section className="bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-background-secondary to-background border-2 border-gold rounded-lg overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="mb-6">
                <div className="inline-block bg-gold text-dark px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                  Flagship Program
                </div>
                <h2 className="text-white mb-4">Timothenics 30 – Levels Program</h2>
                <p className="text-xl text-foreground mb-8">
                  An 8-week, level-based calisthenics system built around four 30-minute sessions per week. Progress through Beginner, Intermediate, and Advanced levels in the Push, Pull, Legs, and Skills tracks—and unlock specific abilities along the way.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground">4 × 30-minute "missions" each week: Push, Pull, Legs, Skills</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground">Three levels in each track: Beginner, Intermediate, Advanced</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground">Clear unlock standards so you know exactly when to level up</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground">Skill-based rewards like your first pull-up, deeper squats, and handstand progress</span>
                  </li>
                </ul>
              </div>

              {/* Example Unlocks */}
              <div className="bg-background-panel border border-white/10 rounded-lg p-8 mb-8">
                <h3 className="text-white mb-6 text-2xl font-semibold">Example unlocks</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-gold font-semibold mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                      </svg>
                      Pull Track
                    </h4>
                    <ul className="space-y-2 text-foreground-muted text-sm">
                      <li className="flex items-start">
                        <span className="text-gold mr-2">→</span>
                        <span>Unlock your first strict pull-up</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold mr-2">→</span>
                        <span>Then multiple clean reps</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-gold font-semibold mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      Legs Track
                    </h4>
                    <ul className="space-y-2 text-foreground-muted text-sm">
                      <li className="flex items-start">
                        <span className="text-gold mr-2">→</span>
                        <span>Progress from stable squats to stronger single-leg work</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-gold font-semibold mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                      Skills Track
                    </h4>
                    <ul className="space-y-2 text-foreground-muted text-sm">
                      <li className="flex items-start">
                        <span className="text-gold mr-2">→</span>
                        <span>Move from hollow holds and wall prep to wall handstands</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold mr-2">→</span>
                        <span>Eventually freestanding holds</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-gold text-dark font-semibold text-sm uppercase tracking-wide hover:bg-gold-light transition-all duration-300 shadow-lg"
              >
                Get Timothenics 30
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Why This Works */}
      <Section className="bg-background-secondary">
        <div className="text-center mb-12">
          <h2 className="text-white">Why level-based training works</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-background border border-white/10 rounded-lg p-8 hover:border-gold transition-all duration-300">
            <h4 className="mb-3 text-white font-semibold">Clear Standards</h4>
            <p className="text-foreground-muted">
              You know exactly what you need to hit to level up. No guessing, no vague "get better" goals.
            </p>
          </div>

          <div className="bg-background border border-white/10 rounded-lg p-8 hover:border-gold transition-all duration-300">
            <h4 className="mb-3 text-white font-semibold">Measurable Progress</h4>
            <p className="text-foreground-muted">
              Track your journey from beginner movements to advanced skills. See your progress in real achievements.
            </p>
          </div>

          <div className="bg-background border border-white/10 rounded-lg p-8 hover:border-gold transition-all duration-300">
            <h4 className="mb-3 text-white font-semibold">Intrinsic Motivation</h4>
            <p className="text-foreground-muted">
              Unlocking skills feels like leveling up in a game. The progress itself becomes the reward.
            </p>
          </div>

          <div className="bg-background border border-white/10 rounded-lg p-8 hover:border-gold transition-all duration-300">
            <h4 className="mb-3 text-white font-semibold">No Plateaus</h4>
            <p className="text-foreground-muted">
              Always working toward the next unlock. There's always a clear next step in your progression.
            </p>
          </div>

          <div className="bg-background border border-white/10 rounded-lg p-8 hover:border-gold transition-all duration-300">
            <h4 className="mb-3 text-white font-semibold">Structured Freedom</h4>
            <p className="text-foreground-muted">
              The framework is fixed, but you progress at your own pace. No rushing, no falling behind.
            </p>
          </div>

          <div className="bg-background border border-white/10 rounded-lg p-8 hover:border-gold transition-all duration-300">
            <h4 className="mb-3 text-white font-semibold">Sustainable Intensity</h4>
            <p className="text-foreground-muted">
              30-minute sessions mean you can train consistently without burning out or sacrificing your life.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-background">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="mb-6 text-white">Ready to start leveling up?</h2>
          <p className="text-xl text-foreground-muted mb-8">
            Test the system with the free 7-Day Start, or jump straight into Timothenics 30 and start unlocking skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#free-plan"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-gold text-dark font-semibold text-sm uppercase tracking-wide hover:bg-gold-light transition-all duration-300 shadow-lg"
            >
              Get the Free 7-Day Plan
            </a>
            <a
              href="/method"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-transparent border-2 border-white text-white font-semibold text-sm uppercase tracking-wide hover:bg-white hover:text-dark transition-all duration-300"
            >
              Learn About the System
            </a>
          </div>
        </div>
      </Section>
    </Layout>
  )
}
