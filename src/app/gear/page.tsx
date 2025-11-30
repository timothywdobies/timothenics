import React from 'react'
import Layout from '@/components/Layout'
import Section from '@/components/Section'
import Button from '@/components/Button'
import Card from '@/components/Card'

export default function Gear() {
  return (
    <Layout>
      {/* Page Header */}
      <Section className="py-20 md:py-24 bg-gradient-to-b from-white to-background">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="mb-6">Timothenics Gear</h1>
          <p className="text-xl md:text-2xl text-foreground/80">
            Minimal tools for effective 30-minute sessions. Everything you need, nothing you don't.
          </p>
        </div>
      </Section>

      {/* Introduction */}
      <Section>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg md:text-xl text-foreground/80">
            You don't need a full gym to build serious strength. A pull-up bar, the floor, and a few smart accessories
            are enough to train push, pull, legs, and core. These tools make home or park sessions more versatile and progressive.
          </p>
        </div>
      </Section>

      {/* Product Cards */}
      <Section className="bg-white" containerClassName="max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Timothenics Starter Kit */}
          <Card hover className="flex flex-col">
            <div className="mb-4">
              <div className="bg-accent/10 h-48 rounded-lg flex items-center justify-center mb-4">
                <span className="text-6xl text-accent">●●●</span>
              </div>
              <h3 className="mb-2">Timothenics Starter Kit</h3>
              <p className="text-2xl font-bold text-accent mb-4">$49</p>
            </div>

            <div className="mb-6 flex-grow">
              <p className="text-foreground/80 mb-4">
                Complete set of resistance bands and sliders. Everything you need to scale progressions,
                add resistance, and train movements you can't do with bodyweight alone.
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2">What's Included:</h4>
                <ul className="space-y-1 text-sm text-foreground/70">
                  <li>• 3 resistance bands (light, medium, heavy)</li>
                  <li>• 2 slider discs for any floor surface</li>
                  <li>• Mesh carry bag</li>
                  <li>• Quick-start exercise guide</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2">How It's Used in Timothenics 30:</h4>
                <ul className="space-y-1 text-sm text-foreground/70">
                  <li>• Assist pull-ups and dips as you build strength</li>
                  <li>• Add resistance to push-ups and squats</li>
                  <li>• Slider hamstring curls and core work</li>
                  <li>• Scale movements to your current level</li>
                </ul>
              </div>
            </div>

            <div className="mt-auto">
              <Button className="w-full">Add to Cart</Button>
            </div>
          </Card>

          {/* Timothenics Parallettes */}
          <Card hover className="flex flex-col">
            <div className="mb-4">
              <div className="bg-foreground/10 h-48 rounded-lg flex items-center justify-center mb-4">
                <span className="text-6xl text-foreground">∏∏</span>
              </div>
              <h3 className="mb-2">Timothenics Parallettes</h3>
              <div className="mb-4">
                <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                  Coming Soon
                </span>
              </div>
            </div>

            <div className="mb-6 flex-grow">
              <p className="text-foreground/80 mb-4">
                Low-profile parallettes designed for home training. Elevate your push movements,
                unlock L-sits, and build toward advanced skills like handstands and handstand push-ups.
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2">Specs:</h4>
                <ul className="space-y-1 text-sm text-foreground/70">
                  <li>• 12" height, ideal for home ceilings</li>
                  <li>• Non-slip rubber feet</li>
                  <li>• Lightweight and portable</li>
                  <li>• Supports 300+ lbs</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2">How It's Used in Timothenics 30:</h4>
                <ul className="space-y-1 text-sm text-foreground/70">
                  <li>• Deeper push-up range of motion</li>
                  <li>• L-sit progressions for core</li>
                  <li>• Elevated plank and pike variations</li>
                  <li>• Foundation for handstand work</li>
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

      {/* What You Already Have */}
      <Section
        title="What You Already Have"
        subtitle="Start training today with these basics"
        dark
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-5xl mb-4">▬</div>
            <h4 className="mb-3">Pull-Up Bar</h4>
            <p className="text-background/70">
              Doorway bar, outdoor bar, or park equipment. All you need for pull, grip, and hanging work.
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">▭</div>
            <h4 className="mb-3">The Floor</h4>
            <p className="text-background/70">
              Push-ups, planks, leg raises, bridges. Most of your training happens right here.
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">⊡</div>
            <h4 className="mb-3">A Clear Space</h4>
            <p className="text-background/70">
              About 6 feet by 3 feet. That's all. Train in your living room, bedroom, or backyard.
            </p>
          </div>
        </div>
      </Section>

      {/* Why Minimal Gear Works */}
      <Section title="Why minimal gear works">
        <div className="max-w-3xl mx-auto">
          <Card>
            <div className="space-y-6">
              <div>
                <h4 className="mb-2">No Friction</h4>
                <p className="text-foreground/70">
                  When your gym is wherever you are, there's no commute, no opening hours, no excuses.
                  You just start.
                </p>
              </div>
              <div>
                <h4 className="mb-2">Portable Training</h4>
                <p className="text-foreground/70">
                  Bands and sliders fit in a backpack. Take your training to the park, on trips, or anywhere with a bar.
                </p>
              </div>
              <div>
                <h4 className="mb-2">Focus on Fundamentals</h4>
                <p className="text-foreground/70">
                  Less gear means more focus on progressive overload, form, and consistency—the things that actually build strength.
                </p>
              </div>
              <div>
                <h4 className="mb-2">One-Time Investment</h4>
                <p className="text-foreground/70">
                  No monthly gym fees. Get the basics once, train for years. The return on investment is unbeatable.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>
    </Layout>
  )
}
