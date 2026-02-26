import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router';
import { motion } from 'motion/react';
import { Calendar, MapPin, DollarSign, Users, ArrowLeft, Check } from 'lucide-react';
import { mockEvents } from '../data/mockData';
import { Button } from '../components/Button';

export const EventDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [tickets, setTickets] = useState(1);
  const [registered, setRegistered] = useState(false);

  const event = mockEvents.find(e => e.id === id);

  if (!event) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-[#0B0B0C] mb-4">Event not found</h2>
          <Link to="/events">
            <Button variant="primary">Back to Events</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleRSVP = () => {
    setRegistered(true);
    setTimeout(() => navigate('/events'), 2000);
  };

  const totalCost = event.isPaid ? (event.price || 0) * tickets : 0;

  return (
    <div className="min-h-screen pt-20 bg-[#F5F1EA]">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[#0B0B0C]/70 hover:text-[#0B0B0C] transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm uppercase tracking-wider">Back to Events</span>
        </button>
      </div>

      {/* Event Banner */}
      <section className="relative h-64 md:h-96 overflow-hidden">
        <img
          src={event.bannerImage}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 lg:px-12 pb-8 md:pb-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-flex items-center gap-2 text-[#C6A75E] mb-3 md:mb-4 text-xs md:text-sm uppercase tracking-wider">
                <Calendar className="w-4 h-4" />
                <span>{event.eventType}</span>
              </div>
              <h1 style={{ fontFamily: 'var(--font-serif)' }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F5F1EA] mb-4">
                {event.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-12 md:py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white p-6 md:p-8 mb-8">
                <h2 className="text-xl md:text-2xl text-[#0B0B0C] mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
                  About This Event
                </h2>
                <p className="text-[#0B0B0C]/80 leading-relaxed text-base md:text-lg">
                  {event.description}
                </p>
              </div>

              <div className="bg-white p-6 md:p-8">
                <h2 className="text-xl md:text-2xl text-[#0B0B0C] mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
                  What to Expect
                </h2>
                <ul className="space-y-3 text-sm md:text-base text-[#0B0B0C]/80">
                  <li className="flex items-start gap-3">
                    <span className="text-[#C6A75E] mt-1">•</span>
                    <span>Exclusive viewing of featured artworks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#C6A75E] mt-1">•</span>
                    <span>Meet the artist and hear firsthand about creative process</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#C6A75E] mt-1">•</span>
                    <span>Light refreshments and networking opportunity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#C6A75E] mt-1">•</span>
                    <span>First access to new pieces before public release</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar - Registration */}
            <div className="lg:col-span-1">
              <div className="bg-white p-8 sticky top-32">
                <h3 className="text-xl text-[#0B0B0C] mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
                  Event Details
                </h3>

                <div className="space-y-4 mb-8 pb-8 border-b border-[#0B0B0C]/10">
                  <div className="flex items-start gap-3 text-[#0B0B0C]">
                    <Calendar className="w-5 h-5 text-[#C6A75E] mt-1" />
                    <div>
                      <p className="font-medium">
                        {new Date(event.date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </p>
                      <p className="text-sm text-[#0B0B0C]/60">{event.time}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-[#0B0B0C]">
                    <MapPin className="w-5 h-5 text-[#C6A75E] mt-1" />
                    <p>{event.location}</p>
                  </div>

                  {event.isPaid && (
                    <>
                      <div className="flex items-start gap-3 text-[#0B0B0C]">
                        <DollarSign className="w-5 h-5 text-[#C6A75E] mt-1" />
                        <p>${event.price} per person</p>
                      </div>
                      {event.availableSeats && (
                        <div className="flex items-start gap-3 text-[#0B0B0C]">
                          <Users className="w-5 h-5 text-[#C6A75E] mt-1" />
                          <p>{event.availableSeats} seats remaining</p>
                        </div>
                      )}
                    </>
                  )}
                </div>

                {!registered ? (
                  <div className="space-y-6">
                    {event.isPaid && (
                      <div>
                        <label className="text-sm text-[#0B0B0C]/70 mb-2 block">
                          Number of Tickets
                        </label>
                        <input
                          type="number"
                          min="1"
                          max={event.availableSeats || 10}
                          value={tickets}
                          onChange={(e) => setTickets(Math.max(1, parseInt(e.target.value) || 1))}
                          className="w-full bg-[#F5F1EA] border border-[#0B0B0C]/10 px-4 py-2 text-[#0B0B0C]"
                        />
                      </div>
                    )}

                    {event.isPaid && (
                      <div className="bg-[#F5F1EA] p-4">
                        <div className="flex justify-between text-[#0B0B0C]">
                          <span>Total</span>
                          <span className="text-xl" style={{ fontFamily: 'var(--font-serif)' }}>
                            ${totalCost.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    )}

                    <Button
                      variant="gold"
                      size="lg"
                      onClick={handleRSVP}
                      className="w-full"
                    >
                      {event.isPaid ? 'Reserve Tickets' : 'RSVP Now'}
                    </Button>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-[#C6A75E] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-[#0B0B0C]" />
                    </div>
                    <h3 className="text-xl text-[#0B0B0C] mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                      You're Registered!
                    </h3>
                    <p className="text-[#0B0B0C]/70 text-sm">
                      Check your email for confirmation details.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};