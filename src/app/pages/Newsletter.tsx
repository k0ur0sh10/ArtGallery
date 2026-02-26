import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Check } from 'lucide-react';
import { Button } from '../components/Button';

export const Newsletter: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate subscription
    setSubscribed(true);
  };

  if (subscribed) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-[#F5F1EA] px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-2xl"
        >
          <div className="w-20 h-20 md:w-24 md:h-24 bg-[#C6A75E] rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
            <Check className="w-10 h-10 md:w-12 md:h-12 text-[#0B0B0C]" />
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)' }} className="text-3xl sm:text-4xl md:text-5xl text-[#0B0B0C] mb-4 md:mb-6">
            Welcome to the Collection
          </h1>
          <p className="text-base md:text-lg text-[#0B0B0C]/70 mb-6 md:mb-8">
            Thank you for subscribing, {formData.name}. You'll receive exclusive updates on new works,
            exhibitions, and private viewings.
          </p>
          <p className="text-sm text-[#0B0B0C]/60">
            Check your inbox at {formData.email} for a confirmation email.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-[#F5F1EA]">
      <section className="py-16 md:py-24 px-6 lg:px-12">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <Mail className="w-12 h-12 md:w-16 md:h-16 text-[#C6A75E] mx-auto mb-6" />
            <h1 style={{ fontFamily: 'var(--font-serif)' }} className="text-4xl sm:text-5xl md:text-6xl text-[#0B0B0C] mb-6">
              Stay Inspired
            </h1>
            <p className="text-base md:text-lg text-[#0B0B0C]/70">
              Join our exclusive mailing list to receive updates on new artworks, exhibitions,
              and private viewings before they're announced to the public.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 md:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-xs md:text-sm uppercase tracking-wider text-[#0B0B0C]/70 mb-3 block">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full bg-[#F5F1EA] border-b-2 border-[#0B0B0C]/10 px-0 py-3 md:py-4 text-[#0B0B0C] text-base md:text-lg focus:outline-none focus:border-[#C6A75E] transition-colors"
                />
              </div>

              <div>
                <label className="text-xs md:text-sm uppercase tracking-wider text-[#0B0B0C]/70 mb-3 block">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full bg-[#F5F1EA] border-b-2 border-[#0B0B0C]/10 px-0 py-3 md:py-4 text-[#0B0B0C] text-base md:text-lg focus:outline-none focus:border-[#C6A75E] transition-colors"
                />
              </div>

              <div className="pt-6">
                <Button type="submit" variant="gold" size="lg" className="w-full">
                  Subscribe to Newsletter
                </Button>
              </div>

              <p className="text-xs text-[#0B0B0C]/50 text-center pt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
            <div>
              <h3 className="text-xl md:text-2xl text-[#C6A75E] mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                Exclusive
              </h3>
              <p className="text-xs md:text-sm text-[#0B0B0C]/70">
                First access to new artworks
              </p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl text-[#C6A75E] mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                Curated
              </h3>
              <p className="text-xs md:text-sm text-[#0B0B0C]/70">
                Monthly insights from the artist
              </p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl text-[#C6A75E] mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                Intimate
              </h3>
              <p className="text-xs md:text-sm text-[#0B0B0C]/70">
                Private event invitations
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};