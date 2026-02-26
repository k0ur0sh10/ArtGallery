import React from 'react';
import { Link, useLocation } from 'react-router';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from '../context/AppContext';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { cart } = useApp();
  const location = useLocation();

  const isAdmin = location.pathname.startsWith('/admin');

  if (isAdmin) return null;

  const navLinks = [
    { name: 'Collection', path: '/collection' },
    { name: 'Events', path: '/events' },
    { name: 'About', path: '/about' },
  ];

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#F5F1EA]/95 backdrop-blur-sm border-b border-[#0B0B0C]/10"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span style={{ fontFamily: 'var(--font-serif)' }} className="text-xl md:text-2xl tracking-tight text-[#0B0B0C]">
                Elena Rousseau
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm tracking-wider uppercase text-[#0B0B0C] hover:text-[#C6A75E] transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Cart & Mobile Menu */}
            <div className="flex items-center space-x-6">
              <Link to="/cart" className="relative">
                <ShoppingBag className="w-5 h-5 text-[#0B0B0C]" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#C6A75E] text-[#0B0B0C] text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </Link>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-[#0B0B0C]"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed top-20 left-0 right-0 bottom-0 bg-[#0B0B0C] z-40 md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl tracking-wider uppercase text-[#F5F1EA] hover:text-[#C6A75E] transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};