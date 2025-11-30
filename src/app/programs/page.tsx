'use client'

import React from 'react'
import Layout from '@/components/Layout'
import Section from '@/components/Section'
import Button from '@/components/Button'
import Card from '@/components/Card'

export default function Programs() {
  return (
    <Layout>
      {/* Page Header */}
      <Section className="py-20 md:py-24 bg-gradient-to-b from-white to-background">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="mb-6">Programs</h1>
          <p className="text-xl md:text-2xl text-foreground/80">
            Structured calisthenics systems designed for real schedules. Progressive, efficient, and built to fit your life.
          </p>
        </div>
      </Section>

      {/* Main Featured Program: Timothenics 30 */}
      <Section title="Timothenics 30" subtitle="The flagship 8-week cycle">
        <div className="max-w-5xl mx-auto">
          <Card className="mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 text-center">
              <div>
                <div className="text-4xl font-bold text-accent mb-2">8</div>
                <p className="text-sm text-foreground/70">Weeks</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">4</div>
                <p className="text-sm text-foreground/70">Sessions per Week</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">~30</div>
                <p className="text-sm text-foreground/70">Minutes per Session</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">Min</div>
                <p className="text-sm text-foreground/70">Gear Required</p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="mb-4">Built For</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <span className="text-accent mr-3 text-xl">✓</span>
                  <p className="text-foreground/80">People with full calendars who still want elite strength standards</p>
                </div>
                <div className="flex items-start">
                  <span className="text-accent mr-3 text-xl">✓</span>
                  <p className="text-foreground/80">Anyone tired of workouts that demand 90+ minutes plus commute time</p>
                </div>
                <div className="flex items-start">
                  <span className="text-accent mr-3 text-xl">✓</span>
                  <p className="text-foreground/80">Home or park training with minimal gear (bar + floor, bands optional)</p>
                </div>
                <div className="flex items-start">
                  <span className="text-accent mr-3 text-xl">✓</span>
                  <p className="text-foreground/80">Clear progression without guesswork or wandering between exercises</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="mb-4">Outcomes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <span className="text-accent mr-3 text-xl">→</span>
                  <p className="text-foreground/80">More reps in push-ups, pull-ups, dips, and core movements</p>
                </div>
                <div className="flex items-start">
                  <span className="text-accent mr-3 text-xl">→</span>
                  <p className="text-foreground/80">Visible improvements in body composition (shoulders, arms, core)</p>
                </div>
                <div className="flex items-start">
                  <span className="text-accent mr-3 text-xl">→</span>
                  <p className="text-foreground/80">Confidence from consistent training that fits your actual schedule</p>
                </div>
                <div className="flex items-start">
                  <span className="text-accent mr-3 text-xl">→</span>
                  <p className="text-foreground/80">Foundation for advanced calisthenics skills and continued progression</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="mb-4">Example Weekly Structure</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-background rounded-lg p-4">
                  <div className="font-semibold text-accent mb-2">Monday</div>
                  <p className="text-sm text-foreground/70">Push Focus</p>
                  <p className="text-xs text-foreground/60 mt-1">5-20-5 structure</p>
                </div>
                <div className="bg-background rounded-lg p-4">
                  <div className="font-semibold text-accent mb-2">Tuesday</div>
                  <p className="text-sm text-foreground/70">Pull Focus</p>
                  <p className="text-xs text-foreground/60 mt-1">5-20-5 structure</p>
                </div>
                <div className="bg-background rounded-lg p-4">
                  <div className="font-semibold text-accent mb-2">Thursday</div>
                  <p className="text-sm text-foreground/70">Legs Focus</p>
                  <p className="text-xs text-foreground/60 mt-1">5-20-5 structure</p>
                </div>
                <div className="bg-background rounded-lg p-4">
                  <div className="font-semibold text-accent mb-2">Saturday</div>
                  <p className="text-sm text-foreground/70">Full Body / Skills</p>
                  <p className="text-xs text-foreground/60 mt-1">5-20-5 structure</p>
                </div>
              </div>
              <p className="text-sm text-foreground/60 mt-4">
                Rest days: Wednesday, Friday, Sunday. Adjust to your schedule while maintaining the 4-session rhythm.
              </p>
            </div>

            <div className="text-center">
              <Button>Get Timothenics 30</Button>
            </div>
          </Card>
        </div>
      </Section>

      {/* Coming Soon Programs */}
      <Section
        title="Coming Soon"
        subtitle="Additional programs for different goals and experience levels"
        className="bg-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card hover>
            <div className="mb-4">
              <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold mb-3">
                Coming Soon
              </span>
              <h3>Timothenics 60</h3>
            </div>
            <p className="text-foreground/70 mb-4">
              For those with more time flexibility. 60-minute sessions with expanded volume,
              skill work, and advanced progressions. Same efficient structure, deeper training.
            </p>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>• 12-week cycle</li>
              <li>• 4-5 sessions per week</li>
              <li>• Advanced skill progressions</li>
              <li>• Higher volume strength work</li>
            </ul>
          </Card>

          <Card hover>
            <div className="mb-4">
              <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold mb-3">
                Coming Soon
              </span>
              <h3>Timothenics Skills</h3>
            </div>
            <p className="text-foreground/70 mb-4">
              Dedicated skill-focused cycles. Handstands, levers, muscle-ups, and other movement goals.
              Structured progressions that build the prerequisites you actually need.
            </p>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>• Skill-specific progressions</li>
              <li>• 6-8 week cycles per skill</li>
              <li>• Prerequisite strength pathways</li>
              <li>• Video form guidance</li>
            </ul>
          </Card>
        </div>
      </Section>
    </Layout>
  )
}
