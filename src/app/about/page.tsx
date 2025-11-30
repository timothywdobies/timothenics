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
      <Section className="py-20 md:py-24 bg-gradient-to-b from-white to-background">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="mb-6">Why Timothenics Exists</h1>
          <p className="text-xl md:text-2xl text-foreground/80">
            Built for people who want elite physical standards without their life revolving around training.
          </p>
        </div>
      </Section>

      {/* Founder Story */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              {/* Placeholder for founder photo */}
              <div className="bg-accent/10 rounded-xl h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📸</div>
                  <p className="text-foreground/60">Photo: Training in action</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-6">The Problem</h2>
              <p className="text-foreground/80 mb-4">
                Most training programs are designed for people with unlimited time. Two-hour gym sessions.
                Morning cardio. Evening mobility work. Meal prep Sundays. Recovery protocols. They assume
                training is your primary focus and everything else fits around it.
              </p>
              <p className="text-foreground/80">
                But that's not real life for most people. You have work, school, relationships, side projects,
                and a list of things that never gets shorter. You don't have two free hours, and even if you did,
                you probably wouldn't want to spend them all in a gym.
              </p>
            </div>
          </div>

          <Card className="mb-12">
            <h3 className="mb-4">What If Time Wasn't the Problem?</h3>
            <p className="text-foreground/80 mb-4">
              After years of trying to force 90-minute programs into 30-minute windows, it became clear:
              the problem wasn't lack of time. It was programs that refused to respect the time you actually had.
            </p>
            <p className="text-foreground/80 mb-4">
              Timothenics started with a different question: What if we designed training around real schedules
              from the beginning? What if 30 minutes wasn't a compromise, but the actual constraint we optimized for?
            </p>
            <p className="text-foreground/80">
              Turns out, 30 minutes is more than enough. You just have to eliminate filler, structure every session
              with intention, and focus on progressive overload in fundamental movements. No wasted sets. No random
              exercises. Just clear work that builds strength.
            </p>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <h4 className="mb-3">Who This Is For</h4>
              <ul className="space-y-2 text-foreground/70">
                <li>• People with full calendars who still want elite strength</li>
                <li>• Anyone tired of programs that demand 90+ minutes</li>
                <li>• Those who value efficiency and hate wasted time</li>
                <li>• Anyone who's skipped workouts because they "didn't have enough time"</li>
              </ul>
            </Card>

            <Card>
              <h4 className="mb-3">Who This Isn't For</h4>
              <ul className="space-y-2 text-foreground/70">
                <li>• People who want to spend hours in the gym</li>
                <li>• Those seeking random "muscle confusion" workouts</li>
                <li>• Anyone who needs complex equipment and machines</li>
                <li>• People looking for shortcuts without consistent effort</li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* Mission */}
      <Section
        title="The Mission"
        dark
      >
        <div className="max-w-3xl mx-auto text-center">
          <Card className="bg-background text-foreground">
            <h3 className="mb-4">Best shape of your life without your life revolving around training</h3>
            <p className="text-foreground/80 mb-4">
              You shouldn't have to choose between getting strong and having a full life. Training should enhance
              your life, not consume it.
            </p>
            <p className="text-foreground/80 mb-4">
              Timothenics builds systems that fit into real schedules. Thirty-minute sessions. Minimal gear.
              Progressive structure. Clear outcomes. You show up, do the work, and get stronger—without rearranging
              your entire day.
            </p>
            <p className="text-foreground/80">
              The goal isn't just strength. It's proving to yourself that you can commit to something challenging
              and follow through, even when your schedule is stacked. That confidence carries over into everything else.
            </p>
          </Card>
        </div>
      </Section>

      {/* Values */}
      <Section
        title="What We Believe"
        className="bg-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card hover>
            <h4 className="mb-3">Efficiency Over Volume</h4>
            <p className="text-foreground/70">
              More time doesn't mean better results. Focused 30-minute sessions beat distracted 2-hour workouts
              every time.
            </p>
          </Card>

          <Card hover>
            <h4 className="mb-3">Progression Over Randomness</h4>
            <p className="text-foreground/70">
              Clear progression paths beat "muscle confusion." You get stronger by doing harder variations,
              not random exercises.
            </p>
          </Card>

          <Card hover>
            <h4 className="mb-3">Consistency Over Perfection</h4>
            <p className="text-foreground/70">
              Four good sessions beat zero perfect ones. The program you follow is better than the program you skip.
            </p>
          </Card>

          <Card hover>
            <h4 className="mb-3">Fundamentals Over Complexity</h4>
            <p className="text-foreground/70">
              Push, pull, legs, core. Master the basics before chasing advanced skills. Strong fundamentals unlock everything.
            </p>
          </Card>

          <Card hover>
            <h4 className="mb-3">Minimal Gear, Maximum Results</h4>
            <p className="text-foreground/70">
              A bar, the floor, and a few bands are enough. Expensive equipment doesn't build strength—progressive overload does.
            </p>
          </Card>

          <Card hover>
            <h4 className="mb-3">Honest Marketing</h4>
            <p className="text-foreground/70">
              No 30-day transformations. No magic protocols. Just structured training, consistent effort, and real results
              over weeks and months.
            </p>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="mb-6">Ready to get started?</h2>
          <p className="text-xl text-background/80 mb-8">
            Test the system with the free 7-Day Timothenics Start plan, or jump straight into the full 8-week
            Timothenics 30 program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/#free-plan">Get the Free 7-Day Plan</Button>
            <Button href="/programs" variant="outline" className="border-background text-background hover:bg-background hover:text-foreground">
              See Timothenics 30
            </Button>
          </div>
        </div>
      </Section>
    </Layout>
  )
}
