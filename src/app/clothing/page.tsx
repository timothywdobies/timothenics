'use client'

import React from 'react'
import Layout from '@/components/Layout'
import Section from '@/components/Section'
import Button from '@/components/Button'
import Card from '@/components/Card'

export default function Clothing() {
  return (
    <Layout>
      {/* Page Header */}
      <Section className="py-20 md:py-24 bg-gradient-to-b from-white to-background">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="mb-6">Timothenics Clothing</h1>
          <p className="text-xl md:text-2xl text-foreground/80">
            Training apparel designed for movement. Minimal branding, maximum function.
          </p>
        </div>
      </Section>

      {/* Introduction */}
      <Section>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg md:text-xl text-foreground/80">
            Clothing built for people who train hard with limited time. Clean design, performance fabrics,
            and a fit that doesn't restrict movement. No loud logos—just gear that works.
          </p>
        </div>
      </Section>

      {/* Product Cards */}
      <Section className="bg-white" containerClassName="max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Training Tee */}
          <Card hover className="flex flex-col">
            <div className="mb-4">
              <div className="bg-foreground/5 h-64 rounded-lg flex items-center justify-center mb-4">
                <span className="text-8xl">👕</span>
              </div>
              <h3 className="mb-2">Timothenics Training Tee</h3>
              <div className="mb-4">
                <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                  Coming Soon
                </span>
              </div>
            </div>

            <div className="mb-6 flex-grow">
              <p className="text-foreground/80 mb-4">
                Performance training shirt designed for calisthenics. Breathable, mobile, and built to handle
                pull-ups, dips, push-ups, and everything in between.
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2">Features:</h4>
                <ul className="space-y-1 text-sm text-foreground/70">
                  <li>• Moisture-wicking performance fabric</li>
                  <li>• Athletic fit that moves with you</li>
                  <li>• Minimal Timothenics branding</li>
                  <li>• Reinforced seams for durability</li>
                  <li>• Available in multiple colors</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2">Perfect For:</h4>
                <ul className="space-y-1 text-sm text-foreground/70">
                  <li>• 30-minute training sessions</li>
                  <li>• Park and home workouts</li>
                  <li>• Full range of motion movements</li>
                  <li>• Everyday training and casual wear</li>
                </ul>
              </div>
            </div>

            <div className="mt-auto">
              <Button variant="outline" className="w-full cursor-not-allowed opacity-50" onClick={(e) => e?.preventDefault()}>
                Notify When Available
              </Button>
            </div>
          </Card>

          {/* Training Shorts */}
          <Card hover className="flex flex-col">
            <div className="mb-4">
              <div className="bg-foreground/5 h-64 rounded-lg flex items-center justify-center mb-4">
                <span className="text-8xl">🩳</span>
              </div>
              <h3 className="mb-2">Timothenics Training Shorts</h3>
              <div className="mb-4">
                <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                  Coming Soon
                </span>
              </div>
            </div>

            <div className="mb-6 flex-grow">
              <p className="text-foreground/80 mb-4">
                Lightweight shorts built for dynamic movement. Deep squats, high knees, leg raises—nothing
                holds you back. Clean design, zero restriction.
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2">Features:</h4>
                <ul className="space-y-1 text-sm text-foreground/70">
                  <li>• Stretch fabric for unrestricted movement</li>
                  <li>• Secure zippered pocket</li>
                  <li>• Elastic waistband with drawstring</li>
                  <li>• Lightweight and quick-drying</li>
                  <li>• 7-inch inseam (athletic fit)</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2">Perfect For:</h4>
                <ul className="space-y-1 text-sm text-foreground/70">
                  <li>• Legs-focused training days</li>
                  <li>• Full-body sessions</li>
                  <li>• Outdoor park workouts</li>
                  <li>• High-intensity movements</li>
                </ul>
              </div>
            </div>

            <div className="mt-auto">
              <Button variant="outline" className="w-full cursor-not-allowed opacity-50" onClick={(e) => e?.preventDefault()}>
                Notify When Available
              </Button>
            </div>
          </Card>
        </div>
      </Section>

      {/* Why Timothenics Apparel */}
      <Section
        title="Built for Movement, Not Logos"
        dark
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-5xl mb-4">⚡</div>
            <h4 className="mb-3">Performance First</h4>
            <p className="text-background/70">
              Every piece is tested during actual training. If it restricts movement or feels off, it doesn't make the cut.
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">🎨</div>
            <h4 className="mb-3">Minimal Design</h4>
            <p className="text-background/70">
              Clean, understated branding. You know what you're wearing. Everyone else just sees quality apparel.
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">💯</div>
            <h4 className="mb-3">Training Tested</h4>
            <p className="text-background/70">
              Designed by someone who actually trains in it. Not a boardroom decision—a pull-up bar decision.
            </p>
          </div>
        </div>
      </Section>

      {/* Coming Soon Notice */}
      <Section className="bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <Card>
            <h3 className="mb-4">Launching Soon</h3>
            <p className="text-foreground/80 mb-6">
              Timothenics apparel is currently in development. We're finalizing fabrics, fits, and production
              to ensure every piece meets the standard. If you want to be notified when we launch, drop your
              email below.
            </p>
            <form className="max-w-md mx-auto" onSubmit={(e) => {
              e.preventDefault()
              alert('Thanks! We\'ll notify you when Timothenics clothing launches.')
            }}>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  className="flex-1 px-4 py-3 rounded-lg border-2 border-foreground/20 focus:border-accent focus:outline-none"
                />
                <Button type="submit">Notify Me</Button>
              </div>
            </form>
          </Card>
        </div>
      </Section>
    </Layout>
  )
}
