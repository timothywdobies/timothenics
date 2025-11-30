'use client'

import React, { useState } from 'react'
import Layout from '@/components/Layout'
import Section from '@/components/Section'
import Button from '@/components/Button'
import Card from '@/components/Card'

export default function Home() {
  const [email, setEmail] = useState('')

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email submitted:', email)
    alert(`Thanks! We'll send the 7-Day Plan to ${email}`)
    setEmail('')
  }

  return (
    <Layout>
      {/* Hero Section */}
      <Section className="py-20 md:py-32 bg-gradient-to-b from-white to-background">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="mb-6">Best shape of your life, 30 minutes at a time.</h1>
          <p className="text-xl md:text-2xl mb-10 text-foreground/80 max-w-3xl mx-auto">
            Build strength and unlock your body's full potential with efficient 30-minute calisthenics sessions.
            Designed for stacked schedules. Train at home or at a park with minimal gear.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="#free-plan">Get the Free 7-Day Plan</Button>
            <Button href="/programs" variant="secondary">See Timothenics 30</Button>
          </div>
        </div>
      </Section>

      {/* Built for Busy People */}
      <Section
        title="Built for a full day, not a free day."
        subtitle="Most training programs assume you have unlimited time. Timothenics doesn't."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card hover>
            <h4 className="mb-3">You already have a full calendar</h4>
            <p className="text-foreground/70">
              Work, school, family, side projects. Your schedule is stacked, and that's not changing.
            </p>
          </Card>
          <Card hover>
            <h4 className="mb-3">You don't need a 90-minute split</h4>
            <p className="text-foreground/70">
              Traditional programs demand hours plus commute time. That's a dealbreaker when you barely have 30 free minutes.
            </p>
          </Card>
          <Card hover>
            <h4 className="mb-3">You need 30 focused minutes</h4>
            <p className="text-foreground/70">
              Strip away the filler. Focus on what actually builds strength. Get in, work hard, get out.
            </p>
          </Card>
          <Card hover>
            <h4 className="mb-3">You need a clear plan</h4>
            <p className="text-foreground/70">
              No guesswork, no wandering around. Just show up, follow the session, and watch yourself get stronger.
            </p>
          </Card>
        </div>
      </Section>

      {/* Session Framework (5-20-5) */}
      <Section
        title="How Timothenics sessions work"
        subtitle="Every session follows the same efficient 5–20–5 structure"
        dark
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold mb-4 text-accent">5</div>
            <h4 className="mb-3">Warm-up & Activation</h4>
            <p className="text-background/80">
              Get your joints mobile and muscles firing. Prepare your body for serious work.
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold mb-4 text-accent">20</div>
            <h4 className="mb-3">Main Strength Work</h4>
            <p className="text-background/80">
              Push, pull, or legs focus. Progressive exercises that build real strength and visible physique changes.
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold mb-4 text-accent">5</div>
            <h4 className="mb-3">Core or Skill</h4>
            <p className="text-background/80">
              Finish with targeted core work or skill practice. Lock in the session.
            </p>
          </div>
        </div>
      </Section>

      {/* Flagship Program Highlight */}
      <Section
        title="Timothenics 30 – The 8-Week Cycle"
        subtitle="The complete system for building strength in 30-minute sessions"
      >
        <div className="max-w-3xl mx-auto">
          <Card className="text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div>
                <div className="text-3xl font-bold text-accent mb-2">8</div>
                <p className="text-sm text-foreground/70">Weeks</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">4</div>
                <p className="text-sm text-foreground/70">Sessions/Week</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">~30</div>
                <p className="text-sm text-foreground/70">Minutes Each</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">Min</div>
                <p className="text-sm text-foreground/70">Gear Needed</p>
              </div>
            </div>
            <p className="text-lg mb-6 text-foreground/80">
              A pull-up bar, the floor, and optional bands. That's all you need to build strength in push, pull, legs, and core.
            </p>
            <p className="text-base mb-8 text-foreground/70">
              Expect visible physique changes, more reps in core movements, and the confidence that comes from
              consistently hitting your sessions without your life revolving around training.
            </p>
            <Button href="/programs">View Timothenics 30</Button>
          </Card>
        </div>
      </Section>

      {/* Gear Preview */}
      <Section
        title="The Timothenics Setup"
        subtitle="You don't need a full gym. A bar, the floor, and a few smart tools are enough."
        className="bg-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card hover>
            <h4 className="mb-4">Resistance Bands</h4>
            <p className="text-foreground/70 mb-4">
              Scale progressions, add resistance, or assist difficult movements. Versatile and portable.
            </p>
            <p className="text-sm text-accent font-semibold">Essential for progression</p>
          </Card>
          <Card hover>
            <h4 className="mb-4">Parallettes</h4>
            <p className="text-foreground/70 mb-4">
              Elevate your push-ups, L-sits, and handstand work. Unlock advanced bodyweight strength.
            </p>
            <p className="text-sm text-accent font-semibold">Optional but powerful</p>
          </Card>
          <Card hover>
            <h4 className="mb-4">Sliders</h4>
            <p className="text-foreground/70 mb-4">
              Turn any floor into a dynamic training surface. Perfect for hamstring curls and core work.
            </p>
            <p className="text-sm text-accent font-semibold">Minimal cost, maximum impact</p>
          </Card>
        </div>
        <div className="text-center mt-10">
          <Button href="/gear" variant="outline">Explore Gear</Button>
        </div>
      </Section>

      {/* Why 30 Minutes Works */}
      <Section
        title="You don't need more time. You need more intention."
        subtitle="30 minutes of focused work beats hours of distracted training"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card>
            <h4 className="mb-3">30 minutes kills filler</h4>
            <p className="text-foreground/70">
              When you only have 30 minutes, you can't afford to waste time. Every exercise counts. Every set has a purpose.
            </p>
          </Card>
          <Card>
            <h4 className="mb-3">It fits before work or after dinner</h4>
            <p className="text-foreground/70">
              You don't need to carve out two hours. 30 minutes fits in the early morning, lunch break, or whenever the noise dies down.
            </p>
          </Card>
          <Card>
            <h4 className="mb-3">Four honest sessions beat perfect plans you skip</h4>
            <p className="text-foreground/70">
              Consistency wins. Four 30-minute sessions you actually complete beat the perfect 90-minute workout you keep postponing.
            </p>
          </Card>
        </div>
      </Section>

      {/* Email Capture - Free 7-Day Plan */}
      <Section
        id="free-plan"
        title="Test it for a week. Free."
        subtitle="Get the 7-Day Timothenics Start plan and experience how 30-minute sessions fit into your actual life"
        dark
      >
        <div className="max-w-xl mx-auto">
          <Card className="bg-background text-foreground">
            <form onSubmit={handleEmailSubmit}>
              <div className="mb-4">
                <p className="mb-6 text-foreground/80">
                  7 complete sessions. Each one 30 minutes or less. See what focused training feels like.
                </p>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-foreground/20 focus:border-accent focus:outline-none text-base"
                />
              </div>
              <Button type="submit" className="w-full">Send Me the Plan</Button>
            </form>
          </Card>
        </div>
      </Section>

      {/* Social/Content Strip */}
      <Section className="bg-white py-12">
        <div className="text-center">
          <h3 className="mb-4">See how Timothenics looks in real life.</h3>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
            Follow along for session breakdowns, form tips, and proof that 30 minutes is enough.
          </p>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-foreground hover:text-accent transition-colors">
              <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                <span className="text-xl font-bold">IG</span>
              </div>
            </a>
            <a href="#" className="text-foreground hover:text-accent transition-colors">
              <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                <span className="text-xl font-bold">TT</span>
              </div>
            </a>
            <a href="#" className="text-foreground hover:text-accent transition-colors">
              <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                <span className="text-xl font-bold">YT</span>
              </div>
            </a>
          </div>
        </div>
      </Section>
    </Layout>
  )
}
