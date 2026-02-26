import React from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Check, Home } from 'lucide-react';
import { Button } from '../components/Button';

export const OrderConfirmation: React.FC = () => {
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
          Order Confirmed
        </h1>

        <p className="text-base md:text-lg text-[#0B0B0C]/70 mb-4">
          Thank you for your purchase. Your artwork will be carefully prepared and shipped with the utmost care.
        </p>

        <p className="text-sm md:text-base text-[#0B0B0C]/60 mb-6 md:mb-8">
          You'll receive a confirmation email with tracking details shortly.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button variant="gold" size="lg" className="w-full sm:w-auto">
              <Home className="w-5 h-5 mr-2" />
              Return Home
            </Button>
          </Link>
          <Link to="/collection">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};