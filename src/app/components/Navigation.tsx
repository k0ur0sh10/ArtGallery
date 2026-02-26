import { Link, useLocation } from 'react-router';
import { ShoppingBag, Heart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Navigation() {
  const { totalItems } = useCart();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const links = [
    { path: '/', label: 'Home' },
    { path: '/collection', label: 'Collection' },
    { path: '/events', label: 'Events' },
    { path: '/about', label: 'About' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F5F1EA]/95 backdrop-blur-sm border-b border-[#0B0B0C]/5">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="group">
            <h1 className="text-2xl lg:text-3xl tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              <span className="text-[#0B0B0C] group-hover:text-[#C6A75E] transition-colors duration-300">
                Isabella Moreau
              </span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm tracking-widest uppercase transition-colors duration-300 relative ${
                  isActive(link.path) ? 'text-[#C6A75E]' : 'text-[#0B0B0C] hover:text-[#C6A75E]'
                }`}
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
              >
                {link.label}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-2 left-0 right-0 h-[1px] bg-[#C6A75E]"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-6">
            <Link
              to="/cart"
              className="relative text-[#0B0B0C] hover:text-[#C6A75E] transition-colors duration-300"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#C6A75E] text-[#0B0B0C] rounded-full flex items-center justify-center text-xs" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                  {totalItems}
                </span>
              )}
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-[#0B0B0C] hover:text-[#C6A75E] transition-colors duration-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#F5F1EA] border-t border-[#0B0B0C]/5"
          >
            <div className="px-6 py-8 space-y-6">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-lg tracking-widest uppercase transition-colors duration-300 ${
                    isActive(link.path) ? 'text-[#C6A75E]' : 'text-[#0B0B0C]'
                  }`}
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
