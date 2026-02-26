import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Button } from '../components/Button';

export const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useApp();
  const navigate = useNavigate();
  const [shippingOption, setShippingOption] = useState('standard');
  const [showCheckout, setShowCheckout] = useState(false);

  const shippingCosts = {
    standard: 150,
    express: 350,
    white_glove: 750,
  };

  const shippingLabels = {
    standard: 'Standard Shipping (7-10 days)',
    express: 'Express Shipping (3-5 days)',
    white_glove: 'White Glove Service (Premium Installation)',
  };

  const subtotal = getCartTotal();
  const shipping = shippingCosts[shippingOption as keyof typeof shippingCosts];
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-[#F5F1EA]">
        <div className="text-center px-6">
          <h2 style={{ fontFamily: 'var(--font-serif)' }} className="text-4xl text-[#0B0B0C] mb-6">
            Your Bag is Empty
          </h2>
          <p className="text-[#0B0B0C]/70 mb-8">
            Discover exclusive artworks and add them to your collection.
          </p>
          <Link to="/collection">
            <Button variant="gold" size="lg">
              Explore Collection
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-[#F5F1EA]">
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ fontFamily: 'var(--font-serif)' }}
            className="text-3xl sm:text-4xl md:text-5xl text-[#0B0B0C] mb-8 md:mb-12"
          >
            Shopping Bag
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cart.map((item, index) => (
                <motion.div
                  key={item.painting.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-4 md:p-6 flex flex-col sm:flex-row gap-4 md:gap-6"
                >
                  <Link to={`/painting/${item.painting.id}`} className="w-full sm:w-24 md:w-32 h-48 sm:h-24 md:h-32 flex-shrink-0">
                    <img
                      src={item.painting.images[0]}
                      alt={item.painting.title}
                      className="w-full h-full object-cover"
                    />
                  </Link>

                  <div className="flex-1">
                    <Link to={`/painting/${item.painting.id}`}>
                      <h3 style={{ fontFamily: 'var(--font-serif)' }} className="text-xl md:text-2xl text-[#0B0B0C] mb-2 hover:text-[#C6A75E] transition-colors">
                        {item.painting.title}
                      </h3>
                    </Link>
                    <p className="text-xs md:text-sm text-[#0B0B0C]/60 mb-3 md:mb-4">
                      {item.painting.medium} • {item.painting.dimensions}
                    </p>
                    <p className="text-base md:text-lg text-[#C6A75E] mb-3 md:mb-4">
                      ${item.painting.price.toLocaleString()}
                    </p>

                    <div className="flex items-center gap-4">
                      {item.painting.isPrint && (
                        <div className="flex items-center gap-2 bg-[#F5F1EA] px-3 py-1">
                          <button
                            onClick={() => updateQuantity(item.painting.id, item.quantity - 1)}
                            className="text-[#0B0B0C] hover:text-[#C6A75E]"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center text-[#0B0B0C]">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.painting.id, item.quantity + 1)}
                            className="text-[#0B0B0C] hover:text-[#C6A75E]"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                      <button
                        onClick={() => removeFromCart(item.painting.id)}
                        className="flex items-center gap-2 text-xs md:text-sm text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                        Remove
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 md:p-8 lg:sticky lg:top-32">
                <h2 className="text-lg md:text-xl text-[#0B0B0C] mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm md:text-base text-[#0B0B0C]">
                    <span>Subtotal</span>
                    <span>${subtotal.toLocaleString()}</span>
                  </div>

                  {/* Shipping Options */}
                  <div className="pt-4 border-t border-[#0B0B0C]/10">
                    <label className="text-xs md:text-sm text-[#0B0B0C]/70 mb-3 block">Shipping Method</label>
                    <div className="space-y-2">
                      {Object.entries(shippingLabels).map(([key, label]) => (
                        <label key={key} className="flex items-center gap-2 md:gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="shipping"
                            value={key}
                            checked={shippingOption === key}
                            onChange={(e) => setShippingOption(e.target.value)}
                            className="w-4 h-4 accent-[#C6A75E]"
                          />
                          <span className="text-xs md:text-sm text-[#0B0B0C] flex-1">{label}</span>
                          <span className="text-xs md:text-sm text-[#0B0B0C]/70">
                            ${shippingCosts[key as keyof typeof shippingCosts]}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between text-sm md:text-base text-[#0B0B0C]">
                    <span>Shipping</span>
                    <span>${shipping.toLocaleString()}</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#0B0B0C]/10 mb-6">
                  <div className="flex justify-between text-lg md:text-xl text-[#0B0B0C]" style={{ fontFamily: 'var(--font-serif)' }}>
                    <span>Total</span>
                    <span>${total.toLocaleString()}</span>
                  </div>
                </div>

                {!showCheckout ? (
                  <Button
                    variant="gold"
                    size="lg"
                    onClick={() => setShowCheckout(true)}
                    className="w-full"
                  >
                    Proceed to Checkout
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                ) : (
                  <CheckoutForm total={total} onSuccess={() => {
                    clearCart();
                    navigate('/order-confirmation');
                  }} />
                )}

                <Link to="/collection" className="block mt-4">
                  <Button variant="ghost" size="md" className="w-full">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

interface CheckoutFormProps {
  total: number;
  onSuccess: () => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ total, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate payment processing
    setTimeout(onSuccess, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="text-xs uppercase tracking-wider text-[#0B0B0C]/70 mb-2 block">
          Full Name
        </label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full bg-[#F5F1EA] border border-[#0B0B0C]/10 px-4 py-2 text-[#0B0B0C] focus:outline-none focus:border-[#C6A75E]"
        />
      </div>

      <div>
        <label className="text-xs uppercase tracking-wider text-[#0B0B0C]/70 mb-2 block">
          Email
        </label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full bg-[#F5F1EA] border border-[#0B0B0C]/10 px-4 py-2 text-[#0B0B0C] focus:outline-none focus:border-[#C6A75E]"
        />
      </div>

      <div>
        <label className="text-xs uppercase tracking-wider text-[#0B0B0C]/70 mb-2 block">
          Shipping Address
        </label>
        <input
          type="text"
          required
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          className="w-full bg-[#F5F1EA] border border-[#0B0B0C]/10 px-4 py-2 text-[#0B0B0C] focus:outline-none focus:border-[#C6A75E]"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-xs uppercase tracking-wider text-[#0B0B0C]/70 mb-2 block">
            City
          </label>
          <input
            type="text"
            required
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            className="w-full bg-[#F5F1EA] border border-[#0B0B0C]/10 px-4 py-2 text-[#0B0B0C] focus:outline-none focus:border-[#C6A75E]"
          />
        </div>
        <div>
          <label className="text-xs uppercase tracking-wider text-[#0B0B0C]/70 mb-2 block">
            ZIP
          </label>
          <input
            type="text"
            required
            value={formData.zip}
            onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
            className="w-full bg-[#F5F1EA] border border-[#0B0B0C]/10 px-4 py-2 text-[#0B0B0C] focus:outline-none focus:border-[#C6A75E]"
          />
        </div>
      </div>

      <div className="pt-4 border-t border-[#0B0B0C]/10">
        <h3 className="text-sm uppercase tracking-wider text-[#0B0B0C] mb-4">Payment Details</h3>

        <div className="space-y-4">
          <div>
            <label className="text-xs uppercase tracking-wider text-[#0B0B0C]/70 mb-2 block">
              Card Number
            </label>
            <input
              type="text"
              required
              placeholder="1234 5678 9012 3456"
              value={formData.cardNumber}
              onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
              className="w-full bg-[#F5F1EA] border border-[#0B0B0C]/10 px-4 py-2 text-[#0B0B0C] focus:outline-none focus:border-[#C6A75E]"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs uppercase tracking-wider text-[#0B0B0C]/70 mb-2 block">
                Expiry
              </label>
              <input
                type="text"
                required
                placeholder="MM/YY"
                value={formData.expiry}
                onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
                className="w-full bg-[#F5F1EA] border border-[#0B0B0C]/10 px-4 py-2 text-[#0B0B0C] focus:outline-none focus:border-[#C6A75E]"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-[#0B0B0C]/70 mb-2 block">
                CVV
              </label>
              <input
                type="text"
                required
                placeholder="123"
                value={formData.cvv}
                onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                className="w-full bg-[#F5F1EA] border border-[#0B0B0C]/10 px-4 py-2 text-[#0B0B0C] focus:outline-none focus:border-[#C6A75E]"
              />
            </div>
          </div>
        </div>
      </div>

      <Button type="submit" variant="gold" size="lg" className="w-full mt-6">
        Complete Purchase • ${total.toLocaleString()}
      </Button>
    </form>
  );
};