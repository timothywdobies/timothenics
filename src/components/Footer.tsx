import React from 'react'
import Link from 'next/link'
import Container from './Container'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-3">Timothenics</h3>
            <p className="text-background/80 max-w-md">
              Best shape of your life, 30 minutes at a time. Efficient calisthenics systems for busy people.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Navigate</h4>
            <ul className="space-y-2">
              <li><Link href="/programs" className="text-background/80 hover:text-background transition-colors">Programs</Link></li>
              <li><Link href="/gear" className="text-background/80 hover:text-background transition-colors">Gear</Link></li>
              <li><Link href="/method" className="text-background/80 hover:text-background transition-colors">Method</Link></li>
              <li><Link href="/about" className="text-background/80 hover:text-background transition-colors">About</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Instagram</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">TikTok</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">YouTube</a></li>
              <li><Link href="/contact" className="text-background/80 hover:text-background transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 text-center text-background/60">
          <p>&copy; {currentYear} Timothenics. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}
