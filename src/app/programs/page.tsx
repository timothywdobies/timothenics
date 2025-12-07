import React from 'react'
import Layout from '@/components/Layout'
import Section from '@/components/Section'

export default function Programs() {
  return (
    <Layout>
      {/* Page Header */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
        {/* Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/programs-hero.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-8">
          <div className="mb-4">
            <span className="text-sm font-medium tracking-[0.18em] uppercase text-gold">
              TIMOTHENICS TRAINING
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white mb-4 drop-shadow-2xl">
            Choose Your Program
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Level-based calisthenics training. Clear standards, measurable progress, 30-minute sessions.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <Section className="bg-background py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Timothenics 30 - Main Program */}
            <div className="bg-background-secondary border-2 border-gold rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col">
              <div className="p-8 md:p-10 flex-grow">
                <div className="mb-6">
                  <div className="inline-block bg-gold text-dark px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                    Most Popular
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Timothenics 30</h2>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-bold text-gold">$29</span>
                    <span className="text-foreground-muted">one-time payment</span>
                  </div>
                  <p className="text-lg text-foreground-muted">
                    8-week level-based program. Four 30-minute sessions per week. Progress through Beginner, Intermediate, and Advanced levels.
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground">4 training tracks: Push, Pull, Legs, Skills</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground">30-minute sessions, 4x per week</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground">Clear unlock standards for progression</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground">Unlock skills: pull-ups, handstands, pistol squats</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground">Minimal equipment needed</span>
                  </li>
                </ul>
              </div>

              <div className="mt-auto pt-4">
                <a
                  href="/timothenics-30"
                  className="block w-full text-center px-8 py-4 rounded-full bg-gold hover:bg-gold-light text-dark font-bold text-sm uppercase tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Timothenics 30
                </a>
              </div>
            </div>

            {/* 7-Day Free Plan */}
            <div className="bg-background-secondary border border-white/10 rounded-xl overflow-hidden hover:border-gold transition-all duration-300 flex flex-col">
              <div className="p-8 md:p-10 flex-grow">
                <div className="mb-6">
                  <div className="inline-block bg-gold/20 text-gold px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                    Free
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">7-Day Start</h2>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-bold text-gold">$0</span>
                    <span className="text-foreground-muted">free forever</span>
                  </div>
                  <p className="text-lg text-foreground-muted">
                    Test the Timothenics system with a week of guided training. Experience all four tracks before committing.
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground">7 complete workouts</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground">30 minutes or less per session</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground">Experience all 4 training tracks</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground">Zero equipment required</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground">Perfect for beginners</span>
                  </li>
                </ul>

                <div className="mt-auto pt-4">
                  <a
                    href="/7-day-plan"
                    className="block w-full text-center px-8 py-4 rounded-full bg-transparent border-2 border-gold hover:bg-gold text-gold hover:text-dark font-bold text-sm uppercase tracking-wide transition-all duration-300"
                  >
                    Start Free 7-Day Plan
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Section>

      {/* Example Unlocks Section */}
      <Section className="bg-background-secondary">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">What You'll Unlock</h2>
            <p className="text-foreground-muted text-lg">
              Timothenics 30 is designed to help you achieve real calisthenics skills
            </p>
          </div>

          <div className="bg-background-panel border border-white/10 rounded-xl p-8 md:p-10">
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

            </div>
          </div>
        </div>
      </Section>

      {/* Why This Works */}
      <Section className="bg-background">
        <div className="text-center mb-12">
          <h2 className="text-white">Why level-based training works</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-background-secondary border border-white/10 rounded-lg p-8 hover:border-gold transition-all duration-300">
            <h4 className="mb-3 text-white font-semibold">Clear Standards</h4>
            <p className="text-foreground-muted">
              You know exactly what you need to hit to level up. No guessing, no vague "get better" goals.
            </p>
          </div>

          <div className="bg-background-secondary border border-white/10 rounded-lg p-8 hover:border-gold transition-all duration-300">
            <h4 className="mb-3 text-white font-semibold">Measurable Progress</h4>
            <p className="text-foreground-muted">
              Track your journey from beginner movements to advanced skills. See your progress in real achievements.
            </p>
          </div>

          <div className="bg-background-secondary border border-white/10 rounded-lg p-8 hover:border-gold transition-all duration-300">
            <h4 className="mb-3 text-white font-semibold">Intrinsic Motivation</h4>
            <p className="text-foreground-muted">
              Unlocking skills feels like leveling up in a game. The progress itself becomes the reward.
            </p>
          </div>

          <div className="bg-background-secondary border border-white/10 rounded-lg p-8 hover:border-gold transition-all duration-300">
            <h4 className="mb-3 text-white font-semibold">No Plateaus</h4>
            <p className="text-foreground-muted">
              Always working toward the next unlock. There's always a clear next step in your progression.
            </p>
          </div>

          <div className="bg-background-secondary border border-white/10 rounded-lg p-8 hover:border-gold transition-all duration-300">
            <h4 className="mb-3 text-white font-semibold">Structured Freedom</h4>
            <p className="text-foreground-muted">
              The framework is fixed, but you progress at your own pace. No rushing, no falling behind.
            </p>
          </div>

          <div className="bg-background-secondary border border-white/10 rounded-lg p-8 hover:border-gold transition-all duration-300">
            <h4 className="mb-3 text-white font-semibold">Sustainable Intensity</h4>
            <p className="text-foreground-muted">
              30-minute sessions mean you can train consistently without burning out or sacrificing your life.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-background-secondary">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="mb-6 text-white">Ready to Start?</h2>
          <p className="text-xl text-foreground-muted mb-10">
            Test the system with the free 7-Day Start, or jump straight into Timothenics 30.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/7-day-plan"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-dark font-semibold text-sm uppercase tracking-wide transition-all duration-300"
            >
              Start Free 7-Day Plan
            </a>
            <a
              href="/timothenics-30"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-gold text-dark font-semibold text-sm uppercase tracking-wide hover:bg-gold-light transition-all duration-300 shadow-lg"
            >
              Get Timothenics 30
            </a>
          </div>
        </div>
      </Section>
    </Layout>
  )
}
