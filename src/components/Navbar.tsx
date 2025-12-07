'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'HOME' },
  { href: '/programs', label: 'PROGRAMS' },
  { href: '/gear', label: 'EQUIPMENT' },
  { href: '/clothing', label: 'APPAREL' },
  { href: '/about', label: 'ABOUT' },
  { href: '/app', label: 'APP' },
  { href: '/contact', label: 'CONTACT' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-black h-[72px]">
      <div className="max-w-[1400px] mx-auto px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <span className="text-gold font-bold text-2xl transition-all duration-200 group-hover:text-gold-light">
            T
          </span>
          <span className="ml-2 text-lg font-bold text-white uppercase tracking-wide transition-colors duration-200 group-hover:text-gold">
            Timothenics
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                text-sm font-medium tracking-[0.14em] transition-colors duration-200
                ${pathname === link.href
                  ? 'text-gold'
                  : 'text-white hover:text-gray-300'
                }
              `}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center">
          <button className="text-white hover:text-gray-300 transition-colors duration-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-white hover:text-gold transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block h-0.5 w-full bg-current transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-current transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black border-t border-white/10 px-8 py-4">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                block py-3 text-sm font-medium tracking-wide transition-colors duration-200
                ${pathname === link.href
                  ? 'text-gold'
                  : 'text-white hover:text-gray-300'
                }
              `}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
