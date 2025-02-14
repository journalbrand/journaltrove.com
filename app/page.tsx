import Link from 'next/link'
import { ArrowDownIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="container-width">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">
              Your Journals, <span className="text-brand-accent">Your Control</span>
              —Discover JournalTrove
            </h1>
            <p className="body-text mb-8">
              A decentralized journaling platform that seamlessly integrates AI transcription, 
              iOS Journal API, and secure peer-to-peer sharing—completely on your terms.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#early-access" className="button-primary">
                Get Early Access
              </Link>
              <Link href="#features" className="button-secondary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative background elements */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,var(--tw-gradient-from)_0%,var(--tw-gradient-to)_100%)] from-brand-background to-brand-primary/5" />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDownIcon className="h-6 w-6 text-brand-primary" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-padding bg-white">
        <div className="container-width">
          <h2 className="heading-2 mb-12 text-center">Your Journal, Enhanced</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border border-brand-leather/20 bg-brand-background">
              <h3 className="heading-3 mb-3 text-brand-primary">Decentralized Storage</h3>
              <p className="body-text">Your journals remain yours, stored securely and privately on your own terms.</p>
            </div>
            <div className="p-6 rounded-lg border border-brand-leather/20 bg-brand-background">
              <h3 className="heading-3 mb-3 text-brand-primary">AI Integration</h3>
              <p className="body-text">Transform voice notes into written entries with advanced AI transcription.</p>
            </div>
            <div className="p-6 rounded-lg border border-brand-leather/20 bg-brand-background">
              <h3 className="heading-3 mb-3 text-brand-primary">iOS Journal API</h3>
              <p className="body-text">Seamlessly sync with Apple's Journal app for a unified experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Early Access Section */}
      <section id="early-access" className="section-padding bg-brand-primary text-white">
        <div className="container-width text-center">
          <h2 className="heading-2 mb-6">Join the Waitlist</h2>
          <p className="body-text mb-8 max-w-2xl mx-auto text-white/90">
            Be among the first to experience JournalTrove. Early access members will receive lifetime benefits and help shape the future of digital journaling.
          </p>
          <Link href="https://forms.gle/your-google-form" className="inline-block bg-brand-accent hover:bg-brand-accent/90 text-white font-medium py-3 px-8 rounded-lg transition-colors">
            Join Waitlist
          </Link>
        </div>
      </section>
    </main>
  )
} 