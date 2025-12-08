import React from 'react'
import Link from 'next/link'
import Container from './Container'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background-secondary border-t border-white/10 text-foreground py-16 md:py-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full border-2 border-gold flex items-center justify-center">
                <span className="text-gold font-bold text-xl">T</span>
              </div>
              <span className="ml-3 text-xl font-bold uppercase tracking-wide">
                Timothenics
              </span>
            </div>
            <p className="text-foreground/60 max-w-md leading-relaxed">
              30-minute calisthenics systems for busy people. Build elite strength without your life revolving around training.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide">Navigate</h4>
            <ul className="space-y-3">
              <li><Link href="/programs" className="text-foreground/60 hover:text-gold transition-colors text-sm">Programs</Link></li>
              <li><Link href="/gear" className="text-foreground/60 hover:text-gold transition-colors text-sm">Equipment</Link></li>
              <li><Link href="/about" className="text-foreground/60 hover:text-gold transition-colors text-sm">About</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide">Connect</h4>
            <ul className="space-y-3">
              <li><a href="https://instagram.com/timothenics" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-gold transition-colors text-sm">Instagram</a></li>
              <li><a href="https://tiktok.com/@timothenics" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-gold transition-colors text-sm">TikTok</a></li>
              <li><a href="https://youtube.com/@timothenics" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-gold transition-colors text-sm">YouTube</a></li>
              <li><Link href="/contact" className="text-foreground/60 hover:text-gold transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-foreground/40 text-sm">&copy; {currentYear} Timothenics. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}
