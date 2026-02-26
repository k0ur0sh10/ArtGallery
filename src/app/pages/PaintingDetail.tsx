import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Heart, ArrowLeft, Check } from 'lucide-react';
import { mockPaintings } from '../data/mockData';
import { useApp } from '../context/AppContext';
import { Button } from '../components/Button';
import Masonry from 'react-responsive-masonry';

export const PaintingDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart, wishlist, toggleWishlist } = useApp();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const painting = mockPaintings.find(p => p.id === id);

  if (!painting) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-[#0B0B0C] mb-4">Artwork not found</h2>
          <Link to="/collection">
            <Button variant="primary">Back to Collection</Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedPaintings = mockPaintings
    .filter(p => p.collection === painting.collection && p.id !== painting.id)
    .slice(0, 3);

  const isInWishlist = wishlist.includes(painting.id);

  const handleAddToCart = () => {
    if (painting.availability === 'available') {
      addToCart(painting, quantity);
      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 2000);
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-[#F5F1EA]">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[#0B0B0C]/70 hover:text-[#0B0B0C] transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm uppercase tracking-wider">Back</span>
        </button>
      </div>

      {/* Product Section */}
      <section className="px-6 lg:px-12 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="lg:sticky lg:top-32">
                <div className="bg-white p-4 mb-4">
                  <img
                    src={painting.images[selectedImage]}
                    alt={painting.title}
                    className="w-full h-auto"
                  />
                </div>
                {painting.images.length > 1 && (
                  <div className="grid grid-cols-4 gap-2 md:gap-4">
                    {painting.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`bg-white p-2 ${selectedImage === index ? 'ring-2 ring-[#C6A75E]' : ''}`}
                      >
                        <img src={image} alt={`${painting.title} ${index + 1}`} className="w-full h-auto" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <p className="text-sm uppercase tracking-wider text-[#0B0B0C]/60 mb-2">
                  {painting.collection} Collection
                </p>
                <h1 style={{ fontFamily: 'var(--font-serif)' }} className="text-3xl sm:text-4xl md:text-5xl text-[#0B0B0C] mb-4">
                  {painting.title}
                </h1>
                <p className="text-2xl md:text-3xl text-[#C6A75E] mb-6">
                  ${painting.price.toLocaleString()}
                </p>
              </div>

              <div className="space-y-4 mb-8 pb-8 border-b border-[#0B0B0C]/10">
                <div className="flex items-center justify-between">
                  <span className="text-[#0B0B0C]/70">Availability</span>
                  <span className={`uppercase text-sm tracking-wider ${painting.availability === 'available' ? 'text-green-600' :
                      painting.availability === 'reserved' ? 'text-[#C6A75E]' :
                        'text-red-600'
                    }`}>
                    {painting.availability}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#0B0B0C]/70">Dimensions</span>
                  <span className="text-[#0B0B0C] text-sm md:text-base">{painting.dimensions}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#0B0B0C]/70">Medium</span>
                  <span className="text-[#0B0B0C] text-sm md:text-base">{painting.medium}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#0B0B0C]/70">Year</span>
                  <span className="text-[#0B0B0C]">{painting.year}</span>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-[#0B0B0C]/80 leading-relaxed text-sm md:text-base">
                  {painting.description}
                </p>
              </div>

              {painting.availability === 'available' && (
                <div className="space-y-6">
                  {painting.isPrint && (
                    <div>
                      <label className="text-sm text-[#0B0B0C]/70 mb-2 block">Quantity</label>
                      <input
                        type="number"
                        min="1"
                        max={painting.printStock || 1}
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-24 bg-white border border-[#0B0B0C]/10 px-4 py-2 text-[#0B0B0C]"
                      />
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      variant="gold"
                      size="lg"
                      onClick={handleAddToCart}
                      className="flex-1"
                      disabled={addedToCart}
                    >
                      {addedToCart ? (
                        <>
                          <Check className="w-5 h-5 mr-2" />
                          Added to Bag
                        </>
                      ) : (
                        'Add to Bag'
                      )}
                    </Button>
                    <Button
                      variant="secondary"
                      size="lg"
                      onClick={() => toggleWishlist(painting.id)}
                      className="px-6 sm:px-8"
                    >
                      <Heart
                        className={`w-5 h-5 ${isInWishlist ? 'fill-[#C6A75E] text-[#C6A75E]' : ''}`}
                      />
                    </Button>
                  </div>
                </div>
              )}

              {painting.availability === 'sold' && (
                <div className="bg-[#0B0B0C]/5 p-6 text-center">
                  <p className="text-[#0B0B0C]/70">
                    This artwork has been sold. Please contact us for similar available works or commission requests.
                  </p>
                </div>
              )}

              {painting.availability === 'reserved' && (
                <div className="bg-[#C6A75E]/10 p-6 text-center">
                  <p className="text-[#0B0B0C]/70">
                    This artwork is currently reserved. Contact us to be notified if it becomes available.
                  </p>
                </div>
              )}

              <div className="mt-12 pt-12 border-t border-[#0B0B0C]/10">
                <h3 className="text-sm uppercase tracking-wider text-[#0B0B0C] mb-4">
                  Artist Statement
                </h3>
                <p className="text-[#0B0B0C]/70 italic leading-relaxed text-sm md:text-base">
                  "Each piece is born from a moment of quiet observation, a meditation on the interplay
                  between light and shadow, permanence and change. I invite viewers to find their own
                  meaning within these spaces of color and form."
                </p>
                <p className="text-[#0B0B0C] mt-4">— Elena Rousseau</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Works */}
      {relatedPaintings.length > 0 && (
        <section className="py-24 px-6 lg:px-12 bg-[#E8E4DC]">
          <div className="max-w-7xl mx-auto">
            <h2 style={{ fontFamily: 'var(--font-serif)' }} className="text-3xl md:text-4xl text-[#0B0B0C] mb-12">
              Related Works
            </h2>

            {/* Mobile: 1 column */}
            <Masonry columnsCount={1} gutter="1.5rem" className="sm:hidden">
              {relatedPaintings.map((relatedPainting) => (
                <Link
                  key={relatedPainting.id}
                  to={`/painting/${relatedPainting.id}`}
                  className="group block"
                >
                  <div className="relative overflow-hidden mb-4 bg-white">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                      src={relatedPainting.images[0]}
                      alt={relatedPainting.title}
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-[#0B0B0C]/0 group-hover:bg-[#0B0B0C]/20 transition-all duration-500" />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-serif)' }} className="text-xl text-[#0B0B0C] mb-1">
                    {relatedPainting.title}
                  </h3>
                  <p className="text-[#C6A75E]">
                    ${relatedPainting.price.toLocaleString()}
                  </p>
                </Link>
              ))}
            </Masonry>

            {/* Tablet: 2 columns */}
            <Masonry columnsCount={2} gutter="1.5rem" className="hidden sm:block lg:hidden">
              {relatedPaintings.map((relatedPainting) => (
                <Link
                  key={relatedPainting.id}
                  to={`/painting/${relatedPainting.id}`}
                  className="group block"
                >
                  <div className="relative overflow-hidden mb-4 bg-white">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                      src={relatedPainting.images[0]}
                      alt={relatedPainting.title}
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-[#0B0B0C]/0 group-hover:bg-[#0B0B0C]/20 transition-all duration-500" />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-serif)' }} className="text-xl text-[#0B0B0C] mb-1">
                    {relatedPainting.title}
                  </h3>
                  <p className="text-[#C6A75E]">
                    ${relatedPainting.price.toLocaleString()}
                  </p>
                </Link>
              ))}
            </Masonry>

            {/* Desktop: 3 columns */}
            <Masonry columnsCount={3} gutter="2rem" className="hidden lg:block">
              {relatedPaintings.map((relatedPainting) => (
                <Link
                  key={relatedPainting.id}
                  to={`/painting/${relatedPainting.id}`}
                  className="group block"
                >
                  <div className="relative overflow-hidden mb-4 bg-white">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                      src={relatedPainting.images[0]}
                      alt={relatedPainting.title}
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-[#0B0B0C]/0 group-hover:bg-[#0B0B0C]/20 transition-all duration-500" />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-serif)' }} className="text-xl text-[#0B0B0C] mb-1">
                    {relatedPainting.title}
                  </h3>
                  <p className="text-[#C6A75E]">
                    ${relatedPainting.price.toLocaleString()}
                  </p>
                </Link>
              ))}
            </Masonry>
          </div>
        </section>
      )}
    </div>
  );
};