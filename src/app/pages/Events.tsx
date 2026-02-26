import React from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Calendar, MapPin, DollarSign, Users } from 'lucide-react';
import { mockEvents } from '../data/mockData';
import { Button } from '../components/Button';

export const Events: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 bg-[#F5F1EA]">
      {/* Header */}
      <section className="py-16 px-6 lg:px-12 bg-[#0B0B0C]">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ fontFamily: 'var(--font-serif)' }}
            className="text-5xl md:text-6xl text-[#F5F1EA] mb-6"
          >
            Events & Exhibitions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#F5F1EA]/70 text-lg max-w-2xl"
          >
            Join us for exclusive viewings, exhibitions, and intimate gatherings celebrating contemporary art.
          </motion.p>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-12">
          {mockEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8 bg-white overflow-hidden"
            >
              <div className="relative h-64 md:h-80 lg:h-auto overflow-hidden group">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src={event.bannerImage}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C]/50 to-transparent" />
                {event.isPaid && (
                  <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-[#C6A75E] text-[#0B0B0C] px-3 py-1 md:px-4 md:py-2 text-xs md:text-sm uppercase tracking-wider">
                    ${event.price}
                  </div>
                )}
              </div>

              <div className="p-6 md:p-8 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 text-[#C6A75E] mb-4 text-xs md:text-sm uppercase tracking-wider">
                  <Calendar className="w-4 h-4" />
                  <span>{event.eventType}</span>
                </div>

                <h2 style={{ fontFamily: 'var(--font-serif)' }} className="text-2xl sm:text-3xl md:text-4xl text-[#0B0B0C] mb-4">
                  {event.title}
                </h2>

                <p className="text-sm md:text-base text-[#0B0B0C]/70 mb-6 leading-relaxed">
                  {event.description}
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-sm md:text-base text-[#0B0B0C]">
                    <Calendar className="w-5 h-5 text-[#C6A75E] flex-shrink-0" />
                    <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} • {event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm md:text-base text-[#0B0B0C]">
                    <MapPin className="w-5 h-5 text-[#C6A75E] flex-shrink-0" />
                    <span>{event.location}</span>
                  </div>
                  {event.isPaid && (
                    <>
                      <div className="flex items-center gap-3 text-sm md:text-base text-[#0B0B0C]">
                        <DollarSign className="w-5 h-5 text-[#C6A75E] flex-shrink-0" />
                        <span>${event.price} per person</span>
                      </div>
                      {event.availableSeats && (
                        <div className="flex items-center gap-3 text-sm md:text-base text-[#0B0B0C]">
                          <Users className="w-5 h-5 text-[#C6A75E] flex-shrink-0" />
                          <span>{event.availableSeats} seats available</span>
                        </div>
                      )}
                    </>
                  )}
                </div>

                <Link to={`/events/${event.id}`}>
                  <Button variant="gold" size="lg" className="w-full sm:w-auto">
                    {event.isPaid ? 'Reserve Your Spot' : 'RSVP'}
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};