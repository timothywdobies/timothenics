'use client'

import React, { useState } from 'react'
import Layout from '@/components/Layout'
import Section from '@/components/Section'
import Card from '@/components/Card'
import Button from '@/components/Button'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  })

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      message: ''
    }

    let isValid = true

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
      isValid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
      isValid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
      isValid = false
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
      isValid = false
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      console.log('Form submitted:', formData)
      alert(`Thanks for reaching out, ${formData.name}! We'll get back to you at ${formData.email} soon.`)

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      })
      setErrors({
        name: '',
        email: '',
        message: ''
      })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  return (
    <Layout>
      {/* Page Header */}
      <Section className="py-20 md:py-24 bg-background">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs md:text-sm font-medium tracking-wider uppercase text-gold mb-6">
            GET IN TOUCH
          </p>
          <h1 className="mb-6 text-white">Need help fitting Timothenics into your week?</h1>
          <p className="text-xl md:text-2xl text-foreground">
            Tell us about your schedule, equipment, and goals. We'll help you figure out the best approach.
          </p>
        </div>
      </Section>

      {/* Contact Form */}
      <Section className="bg-background-secondary">
        <div className="max-w-2xl mx-auto">
          <div className="bg-background border border-white/10 rounded-lg p-8 md:p-12">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`
                      w-full px-4 py-3 rounded-lg border-2 transition-colors bg-background-panel text-white placeholder-foreground-muted/50
                      ${errors.name
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-white/20 focus:border-gold'
                      }
                      focus:outline-none text-base
                    `}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`
                      w-full px-4 py-3 rounded-lg border-2 transition-colors bg-background-panel text-white placeholder-foreground-muted/50
                      ${errors.email
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-white/20 focus:border-gold'
                      }
                      focus:outline-none text-base
                    `}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 text-white">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`
                      w-full px-4 py-3 rounded-lg border-2 transition-colors resize-none bg-background-panel text-white placeholder-foreground-muted/50
                      ${errors.message
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-white/20 focus:border-gold'
                      }
                      focus:outline-none text-base
                    `}
                    placeholder="Tell us about your schedule, what equipment you have access to, and what you're looking to achieve. The more detail, the better we can help."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full px-10 py-4 rounded-full bg-gold text-dark font-semibold text-sm uppercase tracking-wide hover:bg-gold-light transition-all duration-300 shadow-lg">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </Section>

      {/* Additional Info */}
      <Section className="bg-background">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-white mb-2">Common Questions</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background-secondary border border-white/10 rounded-lg p-8 hover:border-gold transition-all duration-300">
              <h4 className="mb-2 text-white">How much space do I need?</h4>
              <p className="text-foreground-muted text-sm">
                About 6 feet by 3 feet of clear floor space. Enough to do a push-up and have arm clearance
                for a pull-up bar.
              </p>
            </div>

            <div className="bg-background-secondary border border-white/10 rounded-lg p-8 hover:border-gold transition-all duration-300">
              <h4 className="mb-2 text-white">What if I can't do pull-ups yet?</h4>
              <p className="text-foreground-muted text-sm">
                That's exactly what progressions are for. Start with band-assisted pull-ups or negatives.
                The program meets you where you are.
              </p>
            </div>

            <div className="bg-background-secondary border border-white/10 rounded-lg p-8 hover:border-gold transition-all duration-300">
              <h4 className="mb-2 text-white">Can I train more than 3 days a week?</h4>
              <p className="text-foreground-muted text-sm">
                You can, but the program is designed for 3 sessions. More isn't always better. Recovery
                matters as much as training.
              </p>
            </div>

            <div className="bg-background-secondary border border-white/10 rounded-lg p-8 hover:border-gold transition-all duration-300">
              <h4 className="mb-2 text-white">What if I miss a session?</h4>
              <p className="text-foreground-muted text-sm">
                Just pick up where you left off. Don't try to "make up" sessions. Consistency over weeks
                matters more than perfection.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-background-secondary">
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="mb-4 text-white">Not sure if Timothenics is right for you?</h3>
          <p className="text-xl text-foreground-muted mb-8">
            Get the free 7-Day Start plan and see how 30-minute sessions fit into your actual life.
          </p>
          <a href="/#free-plan" className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-gold text-dark font-semibold text-sm uppercase tracking-wide hover:bg-gold-light transition-all duration-300 shadow-lg">
            Get the Free 7-Day Plan
          </a>
        </div>
      </Section>
    </Layout>
  )
}
