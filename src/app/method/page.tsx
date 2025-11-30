import React from 'react'
import Layout from '@/components/Layout'
import Section from '@/components/Section'
import Card from '@/components/Card'

export default function Method() {
  return (
    <Layout>
      {/* Page Header */}
      <Section className="py-20 md:py-24 bg-gradient-to-b from-white to-background">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="mb-6">The Timothenics Method</h1>
          <p className="text-xl md:text-2xl text-foreground/80">
            How 30-minute sessions build real strength without your life revolving around training.
          </p>
        </div>
      </Section>

      {/* Overview */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <Card>
            <h3 className="mb-4">Designed for Full Days</h3>
            <p className="text-foreground/80 mb-4">
              Most training programs assume you have unlimited time, unlimited energy, and unlimited flexibility.
              They're built for people whose entire day revolves around training, eating, and recovering.
            </p>
            <p className="text-foreground/80 mb-4">
              Timothenics starts with a different assumption: you have a full calendar. Work, school, relationships,
              side projects, life. You have maybe 30 minutes of focused time, and that window could be early morning,
              lunch break, or late evening when the noise finally dies down.
            </p>
            <p className="text-foreground/80">
              So the method is built around that constraint. Not as a compromise, but as a feature. Thirty minutes
              of focused, progressive work is enough to build strength, change your physique, and unlock movements
              you couldn't do before. You just need to eliminate filler and structure every session with intention.
            </p>
          </Card>
        </div>
      </Section>

      {/* The 5-20-5 Framework */}
      <Section
        title="The 5–20–5 Framework"
        subtitle="Every Timothenics session follows the same structure"
        dark
      >
        <div className="max-w-5xl mx-auto space-y-8">
          <Card className="bg-background text-foreground">
            <div className="flex items-start">
              <div className="text-5xl font-bold text-accent mr-6 flex-shrink-0">5</div>
              <div>
                <h3 className="mb-3">Warm-Up & Activation</h3>
                <p className="text-foreground/80 mb-3">
                  You don't skip this. Five minutes to get joints mobile, muscles firing, and nervous system ready.
                  Wrist circles, shoulder dislocates, scapular shrugs, hip openers, and light movement prep.
                </p>
                <p className="text-foreground/70">
                  This isn't filler—it's insurance. It reduces injury risk and makes the next 20 minutes more effective.
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-background text-foreground">
            <div className="flex items-start">
              <div className="text-5xl font-bold text-accent mr-6 flex-shrink-0">20</div>
              <div>
                <h3 className="mb-3">Main Strength Work</h3>
                <p className="text-foreground/80 mb-3">
                  This is the heart of the session. Push, pull, or legs focus depending on the day. Three to four
                  exercises, structured sets, clear rep targets. Every set has a purpose.
                </p>
                <p className="text-foreground/70 mb-3">
                  No wandering. No extra sets "just in case." You follow the plan, hit your reps, and move on.
                  Twenty minutes is more than enough when there's zero wasted time.
                </p>
                <p className="text-foreground/70">
                  Example: Push-ups, pike push-ups, dips, and tricep extensions. Progressive overload every week.
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-background text-foreground">
            <div className="flex items-start">
              <div className="text-5xl font-bold text-accent mr-6 flex-shrink-0">5</div>
              <div>
                <h3 className="mb-3">Core or Skill Finisher</h3>
                <p className="text-foreground/80 mb-3">
                  End with targeted core work or skill practice. Planks, hollow holds, L-sit progressions,
                  or handstand work. Five minutes to build stability and lock in the session.
                </p>
                <p className="text-foreground/70">
                  This is where you build the foundation for advanced movements and keep your core ahead of your limbs.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Progression Over Randomness */}
      <Section
        title="Progression Over Randomness"
        subtitle="Every movement has levels. You move up when you earn it."
      >
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <p className="text-foreground/80 mb-6">
              Timothenics doesn't randomize workouts. There's no "muscle confusion" or daily variety for variety's sake.
              Instead, every exercise has a clear progression ladder. You start where you are, hit clean rep targets,
              and move to the next level when you're ready.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="mb-3 text-accent">Push Example</h4>
                <ol className="space-y-2 text-foreground/70">
                  <li>1. Incline push-ups (elevated hands)</li>
                  <li>2. Standard push-ups</li>
                  <li>3. Diamond push-ups</li>
                  <li>4. Decline push-ups (elevated feet)</li>
                  <li>5. Pseudo-planche push-ups</li>
                  <li>6. One-arm push-up progressions</li>
                </ol>
              </div>

              <div>
                <h4 className="mb-3 text-accent">Pull Example</h4>
                <ol className="space-y-2 text-foreground/70">
                  <li>1. Band-assisted pull-ups</li>
                  <li>2. Negative pull-ups</li>
                  <li>3. Full pull-ups</li>
                  <li>4. Archer pull-ups</li>
                  <li>5. Typewriter pull-ups</li>
                  <li>6. One-arm pull-up progressions</li>
                </ol>
              </div>
            </div>

            <p className="text-foreground/70 mt-6">
              You move up when you hit the rep target for your current level—not before. This removes guesswork
              and ensures you're always training at the right intensity.
            </p>
          </Card>
        </div>
      </Section>

      {/* Train Wherever */}
      <Section
        title="Train Wherever"
        subtitle="Home, park, or tiny apartment—it doesn't matter"
        className="bg-white"
      >
        <div className="max-w-3xl mx-auto">
          <Card>
            <p className="text-foreground/80 mb-6">
              Timothenics is built for minimal gear and minimal space. A pull-up bar, the floor, and about
              6 feet by 3 feet of clear space. That's the entire setup.
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="mb-2">Home Training</h4>
                <p className="text-foreground/70">
                  Living room, bedroom, garage. Wherever you have a doorway bar and floor space. No commute,
                  no waiting for equipment, no opening hours.
                </p>
              </div>

              <div>
                <h4 className="mb-2">Park Training</h4>
                <p className="text-foreground/70">
                  Outdoor bars, benches, and open space. Bring bands in a backpack and you have everything
                  you need. Fresh air, sunlight, and focused work.
                </p>
              </div>

              <div>
                <h4 className="mb-2">Travel Training</h4>
                <p className="text-foreground/70">
                  Hotel rooms, Airbnbs, or any space with a sturdy door. Bands and sliders are portable.
                  Your training doesn't pause when you're away from home.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Why This Works */}
      <Section title="Why This Works" dark>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="bg-background text-foreground">
            <h4 className="mb-3">Consistency beats intensity</h4>
            <p className="text-foreground/70">
              Four 30-minute sessions you actually complete beat the perfect 90-minute workout you keep skipping.
              The program you follow is infinitely better than the program you don't.
            </p>
          </Card>

          <Card className="bg-background text-foreground">
            <h4 className="mb-3">Structure removes decisions</h4>
            <p className="text-foreground/70">
              You don't show up and wonder what to do. You follow the session, hit your reps, and you're done.
              Zero mental energy wasted on "what should I train today?"
            </p>
          </Card>

          <Card className="bg-background text-foreground">
            <h4 className="mb-3">Progressive overload is simple</h4>
            <p className="text-foreground/70">
              More reps, harder variation, or less assistance. The progression is built in. You just follow
              the path and watch yourself get stronger.
            </p>
          </Card>

          <Card className="bg-background text-foreground">
            <h4 className="mb-3">Minimal gear means minimal friction</h4>
            <p className="text-foreground/70">
              No commute, no membership fees, no waiting for equipment. Your gym is wherever you are.
              Less friction means more training.
            </p>
          </Card>
        </div>
      </Section>
    </Layout>
  )
}
