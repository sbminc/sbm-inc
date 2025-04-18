"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ContactPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setError('')

    try {
      // Here you would typically send the form data to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      // Optionally redirect after successful submission
      // setTimeout(() => router.push('/'), 2000)
    } catch (err) {
      setStatus('error')
      setError('Something went wrong. Please try again.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-deep-blue to-midnight-blue text-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-gold/10 to-orange/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-gold/10 to-orange/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact <span className="shimmer-text">Us</span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Have questions or want to get involved? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="glass-card-dark p-8 rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-lg font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-gold transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-lg font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-gold transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-lg font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-gold transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-lg font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-gold transition-colors resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className={`w-full bg-gradient-to-r from-gold to-orange text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-orange/20 shine-effect ${
                      status === 'submitting' ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                </div>

                {/* Status Messages */}
                {status === 'success' && (
                  <div className="p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-300">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-300">
                    {error}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-2xl text-center">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-white/80">Volusia County, Florida</p>
            </div>

            <div className="glass-card p-8 rounded-2xl text-center">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a 
                href="mailto:info@sbminc.org" 
                className="text-gold hover:text-orange transition-colors"
              >
                info@sbminc.org
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 