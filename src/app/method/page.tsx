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
          <h1 className="mb-6 text-white">The Method</h1>
          <p className="text-xl md:text-2xl text-foreground">
            How 30-minute sessions build real strength without your life revolving around training.
          </p>
        </div>
      </Section>

      {/* Overview */}
      <Section className="bg-background-secondary">
        <div className="max-w-3xl mx-auto">
          <div className="bg-background border border-white/10 rounded-lg p-8 md:p-12">
            <h3 className="mb-4 text-white">Designed for Full Days</h3>
            <p className="text-foreground-muted mb-4">
              Most training programs assume you have unlimited time, unlimited energy, and unlimited flexibility.
              They're built for people whose entire day revolves around training, eating, and recovering.
            </p>
            <p className="text-foreground-muted mb-4">
              Timothenics starts with a different assumption: you have a full calendar. Work, school, relationships,
              side projects, life. You have maybe 30 minutes of focused time, and that window could be early morning,
              lunch break, or late evening when the noise finally dies down.
            </p>
            <p className="text-foreground-muted">
              So the method is built around that constraint. Not as a compromise, but as a feature. Thirty minutes
              of focused, progressive work is enough to build strength, change your physique, and unlock movements
              you couldn't do before. You just need to eliminate filler and structure every session with intention.
            </p>
          </div>
        </div>
      </Section>

      {/* The 5-20-5 Framework */}
      <Section className="bg-background">
        <div className="text-center mb-12">
          <p className="text-xs md:text-sm font-medium tracking-wider uppercase text-gold mb-4">
            SIMPLE STRUCTURE, SERIOUS RESULTS
          </p>
          <h2 className="text-white mb-2">The 5–20–5 Framework</h2>
          <p className="text-foreground-muted">Every Timothenics session follows the same structure</p>
        </div>
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="bg-background-secondary border border-white/10 rounded-lg p-8 md:p-12 hover:border-gold transition-all duration-300 group">
            <div className="flex items-start">
              <div className="text-5xl font-bold text-gold mr-6 flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:text-gold-light">5</div>
              <div>
                <h3 className="mb-3 text-white group-hover:text-gold transition-colors">Warm-Up & Activation</h3>
                <p className="text-foreground-muted mb-3">
                  You don't skip this. Five minutes to get joints mobile, muscles firing, and nervous system ready.
                  Wrist circles, shoulder dislocates, scapular shrugs, hip openers, and light movement prep.
                </p>
                <p className="text-foreground-muted">
                  This isn't filler—it's insurance. It reduces injury risk and makes the next 20 minutes more effective.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-background-secondary border border-white/10 rounded-lg p-8 md:p-12 hover:border-gold transition-all duration-300 group">
            <div className="flex items-start">
              <div className="text-5xl font-bold text-gold mr-6 flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:text-gold-light">20</div>
              <div>
                <h3 className="mb-3 text-white group-hover:text-gold transition-colors">Main Strength Work</h3>
                <p className="text-foreground-muted mb-3">
                  This is the heart of the session. Push, pull, or legs focus depending on the day. Three to four
                  exercises, structured sets, clear rep targets. Every set has a purpose.
                </p>
                <p className="text-foreground-muted mb-3">
                  No wandering. No extra sets "just in case." You follow the plan, hit your reps, and move on.
                  Twenty minutes is more than enough when there's zero wasted time.
                </p>
                <p className="text-foreground-muted">
                  Example: Push-ups, pike push-ups, dips, and tricep extensions. Progressive overload every week.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-background-secondary border border-white/10 rounded-lg p-8 md:p-12 hover:border-gold transition-all duration-300 group">
            <div className="flex items-start">
              <div className="text-5xl font-bold text-gold mr-6 flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:text-gold-light">5</div>
              <div>
                <h3 className="mb-3 text-white group-hover:text-gold transition-colors">Core or Skill Finisher</h3>
                <p className="text-foreground-muted mb-3">
                  End with targeted core work or skill practice. Planks, hollow holds, L-sit progressions,
                  or handstand work. Five minutes to build stability and lock in the session.
                </p>
                <p className="text-foreground-muted">
                  This is where you build the foundation for advanced movements and keep your core ahead of your limbs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Progression Over Randomness */}
      <Section className="bg-background-secondary">
        <div className="text-center mb-12">
          <p className="text-xs md:text-sm font-medium tracking-wider uppercase text-gold mb-4">
            STRUCTURED PROGRESSION
          </p>
          <h2 className="text-white mb-2">Progression Over Randomness</h2>
          <p className="text-foreground-muted">Every movement has levels. You move up when you earn it.</p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-background border border-white/10 rounded-lg p-8 md:p-12 mb-8">
            <p className="text-foreground-muted mb-6">
              Timothenics doesn't randomize workouts. There's no "muscle confusion" or daily variety for variety's sake.
              Instead, every exercise has a clear progression ladder. You start where you are, hit clean rep targets,
              and move to the next level when you're ready.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="mb-4 text-gold font-semibold">Push Example</h4>
                <ol className="space-y-2 text-foreground-muted">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">1.</span>
                    <span>Incline push-ups (elevated hands)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">2.</span>
                    <span>Standard push-ups</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">3.</span>
                    <span>Diamond push-ups</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">4.</span>
                    <span>Decline push-ups (elevated feet)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">5.</span>
                    <span>Pseudo-planche push-ups</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">6.</span>
                    <span>One-arm push-up progressions</span>
                  </li>
                </ol>
              </div>

              <div>
                <h4 className="mb-4 text-gold font-semibold">Pull Example</h4>
                <ol className="space-y-2 text-foreground-muted">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">1.</span>
                    <span>Band-assisted pull-ups</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">2.</span>
                    <span>Negative pull-ups</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">3.</span>
                    <span>Full pull-ups</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">4.</span>
                    <span>Archer pull-ups</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">5.</span>
                    <span>Typewriter pull-ups</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">6.</span>
                    <span>One-arm pull-up progressions</span>
                  </li>
                </ol>
              </div>
            </div>

            <p className="text-foreground-muted mt-6">
              You move up when you hit the rep target for your current level—not before. This removes guesswork
              and ensures you're always training at the right intensity.
            </p>
          </div>
        </div>
      </Section>

      {/* Train Wherever */}
      <Section className="bg-background">
        <div className="text-center mb-12">
          <p className="text-xs md:text-sm font-medium tracking-wider uppercase text-gold mb-4">
            TRAIN ANYWHERE
          </p>
          <h2 className="text-white mb-2">Train Wherever</h2>
          <p className="text-foreground-muted">Home, park, or tiny apartment—it doesn't matter</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="bg-background-secondary border border-white/10 rounded-lg p-8 md:p-12">
            <p className="text-foreground-muted mb-6">
              Timothenics is built for minimal gear and minimal space. A pull-up bar, the floor, and about
              6 feet by 3 feet of clear space. That's the entire setup.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="mb-2 text-white">Home Training</h4>
                <p className="text-foreground-muted">
                  Living room, bedroom, garage. Wherever you have a doorway bar and floor space. No commute,
                  no waiting for equipment, no opening hours.
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-white">Park Training</h4>
                <p className="text-foreground-muted">
                  Outdoor bars, benches, and open space. Bring bands in a backpack and you have everything
                  you need. Fresh air, sunlight, and focused work.
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-white">Travel Training</h4>
                <p className="text-foreground-muted">
                  Hotel rooms, Airbnbs, or any space with a sturdy door. Bands and sliders are portable.
                  Your training doesn't pause when you're away from home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Why This Works */}
      <Section className="bg-background-secondary">
        <div className="text-center mb-12">
          <h2 className="text-white">Why This Works</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-background border border-white/10 rounded-lg p-8 hover:border-gold transition-all duration-300 hover:scale-105 group">
            <h4 className="mb-3 text-white group-hover:text-gold transition-colors">Consistency beats intensity</h4>
            <p className="text-foreground-muted">
              Four 30-minute sessions you actually complete beat the perfect 90-minute workout you keep skipping.
              The program you follow is infinitely better than the program you don't.
            </p>
          </div>

          <div className="bg-background border border-white/10 rounded-lg p-8 hover:border-gold transition-all duration-300 hover:scale-105 group">
            <h4 className="mb-3 text-white group-hover:text-gold transition-colors">Structure removes decisions</h4>
            <p className="text-foreground-muted">
              You don't show up and wonder what to do. You follow the session, hit your reps, and you're done.
              Zero mental energy wasted on "what should I train today?"
            </p>
          </div>

          <div className="bg-background border border-white/10 rounded-lg p-8 hover:border-gold transition-all duration-300 hover:scale-105 group">
            <h4 className="mb-3 text-white group-hover:text-gold transition-colors">Progressive overload is simple</h4>
            <p className="text-foreground-muted">
              More reps, harder variation, or less assistance. The progression is built in. You just follow
              the path and watch yourself get stronger.
            </p>
          </div>

          <div className="bg-background border border-white/10 rounded-lg p-8 hover:border-gold transition-all duration-300 hover:scale-105 group">
            <h4 className="mb-3 text-white group-hover:text-gold transition-colors">Minimal gear means minimal friction</h4>
            <p className="text-foreground-muted">
              No commute, no membership fees, no waiting for equipment. Your gym is wherever you are.
              Less friction means more training.
            </p>
          </div>
        </div>
      </Section>
    </Layout>
  )
}
