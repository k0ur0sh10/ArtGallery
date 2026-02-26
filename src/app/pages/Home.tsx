import React from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, Heart } from 'lucide-react';
import Masonry from 'react-responsive-masonry';
import { Button } from '../components/Button';
import { mockPaintings, mockEvents, mockTestimonials } from '../data/mockData';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export const Home: React.FC = () => {
  const featuredPaintings = mockPaintings.filter(p => p.featured).slice(0, 4);
  const upcomingEvent = mockEvents[0];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1536241455566-5709c3aefd3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGNvbnRlbXBvcmFyeSUyMHBhaW50aW5nJTIwYXJ0fGVufDF8fHx8MTc3MjA2NDMxOXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Hero Artwork"
            className="w-full h-full object-cover"
          />
          {/* Darker, more luxurious overlay */}
          <div className="absolute inset-0 bg-[#0B0B0C]/75" />
          {/* Sophisticated vignette effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0C]/60 via-transparent to-[#0B0B0C]/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0C]/40 via-transparent to-[#0B0B0C]/40" />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            style={{ fontFamily: 'var(--font-serif)' }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-6 md:mb-8 leading-[1.1] tracking-tight px-4"
          >
            <span className="block text-white mb-2" style={{ textShadow: '0 2px 30px rgba(0,0,0,0.5)' }}>
              Where Art Meets
            </span>
            <span className="block text-[#C6A75E] italic" style={{ textShadow: '0 2px 40px rgba(198,167,94,0.3)' }}>
              Timeless Elegance
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-base sm:text-lg md:text-xl text-white/90 mb-8 md:mb-12 max-w-2xl mx-auto tracking-wide px-4"
            style={{ textShadow: '0 1px 20px rgba(0,0,0,0.6)' }}
          >
            Exclusive contemporary artworks by <span className="text-[#C6A75E]">Elena Rousseau</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link to="/collection">
              <Button variant="gold" size="lg">
                Explore Collection
              </Button>
            </Link>
            <Link to="/events">
              <Button variant="secondary" size="lg">
                View Upcoming Events
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-[#F5F1EA]/50 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-[#F5F1EA]/50 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Paintings */}
      <section className="py-24 px-6 lg:px-12 bg-[#F5F1EA]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 style={{ fontFamily: 'var(--font-serif)' }} className="text-4xl md:text-5xl text-[#0B0B0C] mb-6">
              Featured Works
            </h2>
            <p className="text-[#0B0B0C]/70 max-w-2xl mx-auto">
              Discover the latest additions to the collection
            </p>
          </motion.div>

          <Masonry columnsCount={2} gutter="2rem">
            {featuredPaintings.map((painting, index) => (
              <motion.div
                key={painting.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <Link to={`/painting/${painting.id}`} className="group block">
                  <div className="relative overflow-hidden mb-4">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                      src={painting.images[0]}
                      alt={painting.title}
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-[#0B0B0C]/0 group-hover:bg-[#0B0B0C]/20 transition-all duration-500" />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-serif)' }} className="text-2xl text-[#0B0B0C] mb-2">
                    {painting.title}
                  </h3>
                  <p className="text-sm text-[#0B0B0C]/60 mb-2">
                    {painting.medium} • {painting.dimensions}
                  </p>
                  <p className="text-[#C6A75E]">
                    ${painting.price.toLocaleString()}
                  </p>
                </Link>
              </motion.div>
            ))}
          </Masonry>

          <div className="text-center mt-16">
            <Link to="/collection">
              <Button variant="primary" size="lg">
                View Full Collection
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 lg:px-12 bg-[#0B0B0C]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1664895080273-b9024dd4b609?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZmVtYWxlJTIwYXJ0aXN0JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcyMDY0MzIyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Elena Rousseau"
                className="w-full h-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 style={{ fontFamily: 'var(--font-serif)' }} className="text-4xl md:text-5xl text-[#F5F1EA] mb-8">
                The Artist
              </h2>
              <p className="text-[#F5F1EA]/80 text-lg leading-relaxed mb-6">
                Elena Rousseau is a contemporary painter whose work explores the intersection of classical
                beauty and modern abstraction. Her pieces are held in private collections across New York,
                Paris, and London.
              </p>
              <p className="text-[#F5F1EA]/80 text-lg leading-relaxed mb-8">
                Each painting is a meditation on light, color, and the ephemeral nature of beauty,
                created with meticulous attention to texture and composition.
              </p>
              <Link to="/about">
                <Button variant="gold" size="lg">
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Upcoming Event */}
      {upcomingEvent && (
        <section className="py-24 px-6 lg:px-12 bg-[#E8E4DC]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-2 text-[#C6A75E] mb-4">
                  <Calendar className="w-5 h-5" />
                  <span className="text-sm uppercase tracking-wider">Upcoming Event</span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-serif)' }} className="text-4xl md:text-5xl text-[#0B0B0C] mb-6">
                  {upcomingEvent.title}
                </h2>
                <p className="text-[#0B0B0C]/70 text-lg mb-6 leading-relaxed">
                  {upcomingEvent.description}
                </p>
                <div className="space-y-2 mb-8">
                  <p className="text-[#0B0B0C]">
                    <span className="font-medium">Date:</span> {new Date(upcomingEvent.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </p>
                  <p className="text-[#0B0B0C]">
                    <span className="font-medium">Time:</span> {upcomingEvent.time}
                  </p>
                  <p className="text-[#0B0B0C]">
                    <span className="font-medium">Location:</span> {upcomingEvent.location}
                  </p>
                </div>
                <Link to={`/events/${upcomingEvent.id}`}>
                  <Button variant="primary" size="lg">
                    RSVP Now
                  </Button>
                </Link>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-1 lg:order-2"
              >
                <ImageWithFallback
                  src={upcomingEvent.bannerImage}
                  alt={upcomingEvent.title}
                  className="w-full h-auto"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      <section className="py-24 px-6 lg:px-12 bg-[#F5F1EA]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 style={{ fontFamily: 'var(--font-serif)' }} className="text-4xl md:text-5xl text-[#0B0B0C] mb-6">
              What Collectors Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="bg-white p-8"
              >
                <Heart className="w-8 h-8 text-[#C6A75E] mb-6" />
                <p className="text-[#0B0B0C]/80 italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-medium text-[#0B0B0C]">{testimonial.name}</p>
                  <p className="text-sm text-[#0B0B0C]/60">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6 lg:px-12 bg-[#0B0B0C]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{ fontFamily: 'var(--font-serif)' }} className="text-4xl md:text-5xl text-[#F5F1EA] mb-6">
              Stay Inspired
            </h2>
            <p className="text-[#F5F1EA]/70 mb-12">
              Subscribe to receive exclusive updates on new works, exhibitions, and private viewings.
            </p>
            <Link to="/newsletter">
              <Button variant="gold" size="lg">
                Subscribe to Newsletter
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};