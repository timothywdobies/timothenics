import React from 'react'
import Container from './Container'

interface SectionProps {
  children: React.ReactNode
  title?: string
  subtitle?: string
  className?: string
  containerClassName?: string
  dark?: boolean
}

export default function Section({
  children,
  title,
  subtitle,
  className = '',
  containerClassName = '',
  dark = false
}: SectionProps) {
  return (
    <section className={`py-16 md:py-24 ${dark ? 'bg-foreground text-background' : ''} ${className}`}>
      <Container className={containerClassName}>
        {(title || subtitle) && (
          <div className="text-center mb-12 md:mb-16">
            {title && <h2 className="mb-4">{title}</h2>}
            {subtitle && <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-80">{subtitle}</p>}
          </div>
        )}
        {children}
      </Container>
    </section>
  )
}
