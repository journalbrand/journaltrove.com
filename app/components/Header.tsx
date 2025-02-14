'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '#features' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'JournalBridge', href: '#journal-bridge' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Early Access', href: '#early-access' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-brand-background/95 backdrop-blur">
      <nav className="container-width flex items-center justify-between py-4" aria-label="Global">
        <div className="flex items-center gap-x-12">
          <Link href="/" className="-m-1.5 p-1.5 text-2xl font-bold text-brand-primary">
            JT
          </Link>
          <div className="hidden md:flex md:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold text-brand-secondary hover:text-brand-primary"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-x-6">
          <Link
            href="#early-access"
            className="hidden md:block text-sm font-semibold text-brand-accent hover:text-brand-accent/90"
          >
            Get Early Access
          </Link>
          <button
            type="button"
            className="md:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-brand-secondary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container-width py-6">
          <div className="space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-sm font-semibold text-brand-secondary hover:text-brand-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#early-access"
              className="block text-sm font-semibold text-brand-accent hover:text-brand-accent/90"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Early Access
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
} 