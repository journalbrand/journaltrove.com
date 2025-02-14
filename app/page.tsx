import Link from 'next/link'
import { ArrowDownIcon, MicrophoneIcon, DevicePhoneMobileIcon, LockClosedIcon, DocumentTextIcon, SparklesIcon, ShareIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] flex items-center relative overflow-hidden">
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
        <Link href="#features" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDownIcon className="h-6 w-6 text-brand-primary hover:text-brand-primary/80 transition-colors" />
        </Link>
      </section>

      {/* Features Section */}
      <section id="features" className="section-padding bg-white">
        <div className="container-width">
          <h2 className="heading-2 mb-4 text-center">Your Journal, Enhanced</h2>
          <p className="body-text text-center mb-12 max-w-2xl mx-auto">
            Experience journaling with uncompromising privacy, powerful features, and seamless integration.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Local Transcription & Voice Journaling */}
            <div className="p-6 rounded-lg border border-brand-leather/20 bg-brand-background">
              <div className="mb-4 inline-block p-2 bg-brand-primary/10 rounded-lg">
                <MicrophoneIcon className="h-6 w-6 text-brand-primary" />
              </div>
              <h3 className="heading-3 mb-3 text-brand-primary">Voice Journaling</h3>
              <ul className="space-y-2">
                <li className="body-text">• Hands-free journaling</li>
                <li className="body-text">• No data leaves your device</li>
                <li className="body-text">• Fast & accurate transcription</li>
              </ul>
            </div>

            {/* iOS Journaling API Integration */}
            <div className="p-6 rounded-lg border border-brand-leather/20 bg-brand-background">
              <div className="mb-4 inline-block p-2 bg-brand-primary/10 rounded-lg">
                <DevicePhoneMobileIcon className="h-6 w-6 text-brand-primary" />
              </div>
              <h3 className="heading-3 mb-3 text-brand-primary">iOS Integration</h3>
              <ul className="space-y-2">
                <li className="body-text">• Automatic syncing with iOS Journal</li>
                <li className="body-text">• No extra steps needed</li>
                <li className="body-text">• Compatible with iPhone, iPad, Mac</li>
              </ul>
            </div>

            {/* JournalBridge */}
            <div className="p-6 rounded-lg border border-brand-leather/20 bg-brand-background">
              <div className="mb-4 inline-block p-2 bg-brand-primary/10 rounded-lg">
                <ShareIcon className="h-6 w-6 text-brand-primary" />
              </div>
              <h3 className="heading-3 mb-3 text-brand-primary">JournalBridge</h3>
              <ul className="space-y-2">
                <li className="body-text">• No central servers</li>
                <li className="body-text">• Fully controlled by you</li>
                <li className="body-text">• Encrypted & secure transmissions</li>
              </ul>
            </div>

            {/* Local Hardware Encryption */}
            <div className="p-6 rounded-lg border border-brand-leather/20 bg-brand-background">
              <div className="mb-4 inline-block p-2 bg-brand-primary/10 rounded-lg">
                <LockClosedIcon className="h-6 w-6 text-brand-primary" />
              </div>
              <h3 className="heading-3 mb-3 text-brand-primary">Local Encryption</h3>
              <ul className="space-y-2">
                <li className="body-text">• Private keys controlled by you</li>
                <li className="body-text">• Military-grade security</li>
                <li className="body-text">• No third-party snooping</li>
              </ul>
            </div>

            {/* Rich Journaling Experience */}
            <div className="p-6 rounded-lg border border-brand-leather/20 bg-brand-background">
              <div className="mb-4 inline-block p-2 bg-brand-primary/10 rounded-lg">
                <DocumentTextIcon className="h-6 w-6 text-brand-primary" />
              </div>
              <h3 className="heading-3 mb-3 text-brand-primary">Rich Experience</h3>
              <ul className="space-y-2">
                <li className="body-text">• Fully customizable prompts</li>
                <li className="body-text">• Search through all entries</li>
                <li className="body-text">• Personalized daily forms</li>
              </ul>
            </div>
            {/* Summaries & Insights */}
            <div className="p-6 rounded-lg border border-brand-leather/20 bg-brand-background">
              <div className="mb-4 inline-block p-2 bg-brand-primary/10 rounded-lg">
                <SparklesIcon className="h-6 w-6 text-brand-primary" />
              </div>
              <h3 className="heading-3 mb-3 text-brand-primary">Smart Summarization</h3>
              <ul className="space-y-2">
                <li className="body-text">• Private on-device audio transcription</li>
                <li className="body-text">• Search through voice & text entries</li>
                <li className="body-text">• Local processing with your device's hardware</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="section-padding bg-brand-background">
        <div className="container-width">
          <h2 className="heading-2 mb-4 text-center">How It Works</h2>
          <p className="body-text text-center mb-12 max-w-2xl mx-auto">
            Get started with JournalTrove in four simple steps
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-primary text-white text-xl font-bold">
                1
              </div>
              <h3 className="heading-3 mb-3">Download & Install</h3>
              <ul className="space-y-2">
                <li className="body-text">• Mobile app for on-the-go journaling</li>
                <li className="body-text">• Desktop app for P2P capabilities</li>
              </ul>
            </div>
            
            <div className="relative">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-primary text-white text-xl font-bold">
                2
              </div>
              <h3 className="heading-3 mb-3">Set Up Your Journals</h3>
              <ul className="space-y-2">
                <li className="body-text">• Customize your settings</li>
                <li className="body-text">• Choose journaling prompts</li>
                <li className="body-text">• Connect iOS journaling</li>
              </ul>
            </div>

            <div className="relative">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-primary text-white text-xl font-bold">
                3
              </div>
              <h3 className="heading-3 mb-3">Activate JournalBridge</h3>
              <ul className="space-y-2">
                <li className="body-text">• Create your secure node</li>
                <li className="body-text">• Add JournalContacts</li>
                <li className="body-text">• Enable sharing (optional)</li>
              </ul>
            </div>

            <div className="relative">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-primary text-white text-xl font-bold">
                4
              </div>
              <h3 className="heading-3 mb-3">Start Journaling</h3>
              <ul className="space-y-2">
                <li className="body-text">• Voice or text entries</li>
                <li className="body-text">• Everything stays local</li>
                <li className="body-text">• Share only if you choose</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* JournalBridge Spotlight */}
      <section id="journal-bridge" className="section-padding bg-white">
        <div className="container-width">
          <div className="lg:flex lg:items-center lg:gap-12">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="heading-2 mb-4">Secure, Peer-to-Peer Connections</h2>
              <p className="body-text mb-8">
                Set up your desktop as your personal node for journaling and seamlessly exchange entries 
                with a JournalContact—no intermediaries, total control.
              </p>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="p-4 rounded-lg bg-brand-background">
                  <h3 className="text-lg font-semibold text-brand-primary mb-2">Privacy & Ownership</h3>
                  <p className="text-sm text-brand-secondary">Your data never leaves your control</p>
                </div>
                <div className="p-4 rounded-lg bg-brand-background">
                  <h3 className="text-lg font-semibold text-brand-primary mb-2">Offline-first</h3>
                  <p className="text-sm text-brand-secondary">Works without internet connection</p>
                </div>
                <div className="p-4 rounded-lg bg-brand-background">
                  <h3 className="text-lg font-semibold text-brand-primary mb-2">Simplified Sharing</h3>
                  <p className="text-sm text-brand-secondary">Share with trusted contacts only</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="aspect-square rounded-lg bg-brand-primary/5 p-8">
                {/* Placeholder for network visualization */}
                <div className="w-full h-full rounded border-2 border-dashed border-brand-primary/20 flex items-center justify-center">
                  <p className="text-brand-primary/60 text-center">Network Visualization Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding bg-brand-background">
        <div className="container-width">
          <h2 className="heading-2 mb-4 text-center">What Our Early Users Say</h2>
          <p className="body-text text-center mb-12 max-w-2xl mx-auto">
            Join our growing community of mindful journalers who value privacy and meaningful connections.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="p-6 rounded-lg bg-white border border-brand-leather/20">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center">
                  <span className="text-brand-primary font-serif text-xl">A</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-brand-primary">Alex M.</h3>
                  <p className="text-sm text-brand-secondary">iOS Journal User</p>
                </div>
              </div>
              <p className="text-brand-secondary">
                "The seamless integration with my iOS Journal is exactly what I needed. 
                Plus, the privacy features give me peace of mind."
              </p>
            </div>
            {/* Testimonial 2 */}
            <div className="p-6 rounded-lg bg-white border border-brand-leather/20">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center">
                  <span className="text-brand-primary font-serif text-xl">S</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-brand-primary">Sarah K.</h3>
                  <p className="text-sm text-brand-secondary">Daily Journaler</p>
                </div>
              </div>
              <p className="text-brand-secondary">
                "Voice journaling has transformed my daily practice. 
                The transcription is incredibly accurate, and I love that it's all processed locally."
              </p>
            </div>
            {/* Testimonial 3 */}
            <div className="p-6 rounded-lg bg-white border border-brand-leather/20">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center">
                  <span className="text-brand-primary font-serif text-xl">R</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-brand-primary">Ryan T.</h3>
                  <p className="text-sm text-brand-secondary">Privacy Advocate</p>
                </div>
              </div>
              <p className="text-brand-secondary">
                "Finally, a journaling platform that takes privacy seriously. 
                The peer-to-peer sharing is brilliant and gives me complete control."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-padding bg-white">
        <div className="container-width">
          <h2 className="heading-2 mb-4 text-center">Frequently Asked Questions</h2>
          <p className="body-text text-center mb-12 max-w-2xl mx-auto">
            Everything you need to know about JournalTrove and your privacy.
          </p>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="p-6 rounded-lg bg-brand-background">
              <h3 className="font-semibold text-brand-primary mb-2">Is my data really private?</h3>
              <p className="text-brand-secondary">
                Absolutely. Your journal entries never leave your device unless you explicitly choose to share them. 
                All processing, including voice transcription and AI insights, happens locally on your device.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-brand-background">
              <h3 className="font-semibold text-brand-primary mb-2">How does JournalBridge work?</h3>
              <p className="text-brand-secondary">
                JournalBridge creates a secure, peer-to-peer connection between you and your chosen contacts. 
                No central servers are involved, ensuring your data remains under your control at all times.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-brand-background">
              <h3 className="font-semibold text-brand-primary mb-2">What devices are supported?</h3>
              <p className="text-brand-secondary">
                JournalTrove works on iOS devices (iPhone, iPad) and desktop computers. 
                The desktop app is required for JournalBridge features. Android support is coming soon.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-brand-background">
              <h3 className="font-semibold text-brand-primary mb-2">Do I need an internet connection?</h3>
              <p className="text-brand-secondary">
                No, JournalTrove works completely offline. Internet is only needed for syncing with iOS Journal 
                or when you choose to share entries via JournalBridge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Social Proof */}
      <footer id="footer" className="section-padding bg-brand-primary text-white">
        <div className="container-width">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">JournalTrove</h3>
              <p className="text-white/80 mb-4">
                Your private space for meaningful journaling, enhanced by technology that respects your privacy.
              </p>
              <div className="flex space-x-4">
                {/* Social proof badges */}
                <div className="bg-white/10 px-3 py-1 rounded text-sm">
                  SOC 2 Type II
                </div>
                <div className="bg-white/10 px-3 py-1 rounded text-sm">
                  GDPR Ready
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Features</h3>
              <ul className="space-y-2 text-white/80">
                <li>Voice Journaling</li>
                <li>iOS Integration</li>
                <li>JournalBridge</li>
                <li>Local Encryption</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-white/80">
                <li><Link href="#faq" className="hover:text-white">FAQ</Link></li>
                <li><Link href="#how-it-works" className="hover:text-white">How It Works</Link></li>
                <li><Link href="#testimonials" className="hover:text-white">Testimonials</Link></li>
                <li><Link href="#early-access" className="hover:text-white">Early Access</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Trust & Security</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <div>
                    <p className="font-medium">End-to-End Encryption</p>
                    <p className="text-sm text-white/80">Your data, your keys</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <div>
                    <p className="font-medium">Zero Knowledge</p>
                    <p className="text-sm text-white/80">We can't access your data</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/20 text-center text-white/60">
            <p>&copy; {new Date().getFullYear()} JournalTrove. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Early Access Section */}
      <section id="early-access" className="section-padding bg-brand-primary text-white">
        <div className="container-width text-center">
          <h2 className="heading-2 mb-6">Join the Waitlist</h2>
          <p className="body-text mb-8 max-w-2xl mx-auto text-white/90">
            Be among the first to experience JournalTrove. Early access members will receive lifetime benefits and help shape the future of digital journaling.
          </p>
          <Link href="https://forms.zohopublic.com/contactjourna1/form/JournalTroveWaitlistSignup/formperma/eC2IsbiK3N-JhhRz8Y2BVv980_ruGk83XZjkgWynrLw" target="_blank" rel="noopener noreferrer" className="inline-block bg-brand-accent hover:bg-brand-accent/90 text-white font-medium py-3 px-8 rounded-lg transition-colors">
            Join Waitlist
          </Link>
        </div>
      </section>
    </main>
  )
} 