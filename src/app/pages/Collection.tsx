import React, { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import Masonry from 'react-responsive-masonry';
import { Filter } from 'lucide-react';
import { mockPaintings } from '../data/mockData';
import { Painting } from '../types';

export const Collection: React.FC = () => {
  const [selectedCollection, setSelectedCollection] = useState<string>('all');
  const [selectedAvailability, setSelectedAvailability] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);

  const collections = ['all', ...Array.from(new Set(mockPaintings.map(p => p.collection)))];

  const filteredPaintings = mockPaintings.filter(painting => {
    const collectionMatch = selectedCollection === 'all' || painting.collection === selectedCollection;
    const availabilityMatch = selectedAvailability === 'all' || painting.availability === selectedAvailability;
    return collectionMatch && availabilityMatch;
  });

  const getAvailabilityLabel = (status: string) => {
    switch (status) {
      case 'available': return 'Available';
      case 'sold': return 'Sold';
      case 'reserved': return 'Reserved';
      default: return status;
    }
  };

  const getAvailabilityColor = (status: string) => {
    switch (status) {
      case 'available': return 'text-green-600';
      case 'sold': return 'text-red-600';
      case 'reserved': return 'text-[#C6A75E]';
      default: return 'text-gray-600';
    }
  };

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
            The Collection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#F5F1EA]/70 text-lg max-w-2xl"
          >
            Explore exclusive contemporary artworks, each piece a unique expression of modern elegance.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-20 z-40 bg-[#F5F1EA] border-b border-[#0B0B0C]/10 py-6 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-[#0B0B0C] md:hidden"
            >
              <Filter className="w-5 h-5" />
              <span className="text-sm uppercase tracking-wider">Filters</span>
            </button>

            <div className={`${showFilters ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-6`}>
              {/* Collection Filter */}
              <div>
                <label className="text-xs uppercase tracking-wider text-[#0B0B0C]/70 mb-2 block">
                  Collection
                </label>
                <select
                  value={selectedCollection}
                  onChange={(e) => setSelectedCollection(e.target.value)}
                  className="bg-white border border-[#0B0B0C]/10 text-[#0B0B0C] px-4 py-2 min-w-[200px] focus:outline-none focus:border-[#C6A75E]"
                >
                  {collections.map(collection => (
                    <option key={collection} value={collection}>
                      {collection === 'all' ? 'All Collections' : collection}
                    </option>
                  ))}
                </select>
              </div>

              {/* Availability Filter */}
              <div>
                <label className="text-xs uppercase tracking-wider text-[#0B0B0C]/70 mb-2 block">
                  Availability
                </label>
                <select
                  value={selectedAvailability}
                  onChange={(e) => setSelectedAvailability(e.target.value)}
                  className="bg-white border border-[#0B0B0C]/10 text-[#0B0B0C] px-4 py-2 min-w-[200px] focus:outline-none focus:border-[#C6A75E]"
                >
                  <option value="all">All Status</option>
                  <option value="available">Available</option>
                  <option value="reserved">Reserved</option>
                  <option value="sold">Sold</option>
                </select>
              </div>
            </div>

            <p className="text-sm text-[#0B0B0C]/60">
              {filteredPaintings.length} {filteredPaintings.length === 1 ? 'work' : 'works'}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <Masonry
            columnsCount={1}
            gutter="1.5rem"
            className="masonry-grid sm:hidden"
          >
            {filteredPaintings.map((painting, index) => (
              <motion.div
                key={painting.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Link to={`/painting/${painting.id}`} className="group block">
                  <div className="relative overflow-hidden mb-4 bg-white">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                      src={painting.images[0]}
                      alt={painting.title}
                      className="w-full h-auto"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#0B0B0C]/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                      <div className="text-center text-[#F5F1EA] p-6">
                        <h3 style={{ fontFamily: 'var(--font-serif)' }} className="text-xl md:text-2xl mb-2">
                          {painting.title}
                        </h3>
                        <p className="text-[#C6A75E] mb-2">
                          ${painting.price.toLocaleString()}
                        </p>
                        <p className="text-sm opacity-70">View Details</p>
                      </div>
                    </div>

                    {/* Availability Badge */}
                    {painting.availability !== 'available' && (
                      <div className="absolute top-4 right-4 bg-[#0B0B0C]/90 text-[#F5F1EA] px-3 py-1 text-xs uppercase tracking-wider">
                        {getAvailabilityLabel(painting.availability)}
                      </div>
                    )}
                  </div>

                  <div className="px-2">
                    <h3 style={{ fontFamily: 'var(--font-serif)' }} className="text-xl text-[#0B0B0C] mb-1">
                      {painting.title}
                    </h3>
                    <p className="text-sm text-[#0B0B0C]/60 mb-2">
                      {painting.medium} • {painting.dimensions}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-[#C6A75E] font-medium">
                        ${painting.price.toLocaleString()}
                      </p>
                      <p className={`text-xs uppercase tracking-wider ${getAvailabilityColor(painting.availability)}`}>
                        {getAvailabilityLabel(painting.availability)}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </Masonry>

          <Masonry
            columnsCount={2}
            gutter="1.5rem"
            className="masonry-grid hidden sm:block md:hidden"
          >
            {filteredPaintings.map((painting, index) => (
              <motion.div
                key={painting.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Link to={`/painting/${painting.id}`} className="group block">
                  <div className="relative overflow-hidden mb-4 bg-white">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                      src={painting.images[0]}
                      alt={painting.title}
                      className="w-full h-auto"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#0B0B0C]/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                      <div className="text-center text-[#F5F1EA] p-6">
                        <h3 style={{ fontFamily: 'var(--font-serif)' }} className="text-xl md:text-2xl mb-2">
                          {painting.title}
                        </h3>
                        <p className="text-[#C6A75E] mb-2">
                          ${painting.price.toLocaleString()}
                        </p>
                        <p className="text-sm opacity-70">View Details</p>
                      </div>
                    </div>

                    {/* Availability Badge */}
                    {painting.availability !== 'available' && (
                      <div className="absolute top-4 right-4 bg-[#0B0B0C]/90 text-[#F5F1EA] px-3 py-1 text-xs uppercase tracking-wider">
                        {getAvailabilityLabel(painting.availability)}
                      </div>
                    )}
                  </div>

                  <div className="px-2">
                    <h3 style={{ fontFamily: 'var(--font-serif)' }} className="text-xl text-[#0B0B0C] mb-1">
                      {painting.title}
                    </h3>
                    <p className="text-sm text-[#0B0B0C]/60 mb-2">
                      {painting.medium} • {painting.dimensions}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-[#C6A75E] font-medium">
                        ${painting.price.toLocaleString()}
                      </p>
                      <p className={`text-xs uppercase tracking-wider ${getAvailabilityColor(painting.availability)}`}>
                        {getAvailabilityLabel(painting.availability)}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </Masonry>

          <Masonry
            columnsCount={3}
            gutter="2rem"
            className="masonry-grid hidden md:block"
          >
            {filteredPaintings.map((painting, index) => (
              <motion.div
                key={painting.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Link to={`/painting/${painting.id}`} className="group block">
                  <div className="relative overflow-hidden mb-4 bg-white">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                      src={painting.images[0]}
                      alt={painting.title}
                      className="w-full h-auto"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#0B0B0C]/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                      <div className="text-center text-[#F5F1EA] p-6">
                        <h3 style={{ fontFamily: 'var(--font-serif)' }} className="text-2xl mb-2">
                          {painting.title}
                        </h3>
                        <p className="text-[#C6A75E] mb-2">
                          ${painting.price.toLocaleString()}
                        </p>
                        <p className="text-sm opacity-70">View Details</p>
                      </div>
                    </div>

                    {/* Availability Badge */}
                    {painting.availability !== 'available' && (
                      <div className="absolute top-4 right-4 bg-[#0B0B0C]/90 text-[#F5F1EA] px-3 py-1 text-xs uppercase tracking-wider">
                        {getAvailabilityLabel(painting.availability)}
                      </div>
                    )}
                  </div>

                  <div className="px-2">
                    <h3 style={{ fontFamily: 'var(--font-serif)' }} className="text-xl text-[#0B0B0C] mb-1">
                      {painting.title}
                    </h3>
                    <p className="text-sm text-[#0B0B0C]/60 mb-2">
                      {painting.medium} • {painting.dimensions}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-[#C6A75E] font-medium">
                        ${painting.price.toLocaleString()}
                      </p>
                      <p className={`text-xs uppercase tracking-wider ${getAvailabilityColor(painting.availability)}`}>
                        {getAvailabilityLabel(painting.availability)}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </Masonry>

          {filteredPaintings.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#0B0B0C]/60 text-lg">
                No artworks found with the selected filters.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};