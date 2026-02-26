import React from 'react';
import { Link, useLocation } from 'react-router';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  if (isAdmin) return null;

  return (
    <footer className="bg-[#0B0B0C] text-[#F5F1EA] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-serif)' }} className="text-xl md:text-2xl mb-4">
              Elena Rousseau
            </h3>
            <p className="text-xs md:text-sm text-[#F5F1EA]/70 leading-relaxed">
              Contemporary artist creating exclusive works that bridge the timeless and the modern.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs md:text-sm uppercase tracking-wider mb-4">Navigate</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/collection" className="text-xs md:text-sm text-[#F5F1EA]/70 hover:text-[#C6A75E] transition-colors">
                  Collection
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-xs md:text-sm text-[#F5F1EA]/70 hover:text-[#C6A75E] transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-xs md:text-sm text-[#F5F1EA]/70 hover:text-[#C6A75E] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/admin" className="text-xs md:text-sm text-[#F5F1EA]/70 hover:text-[#C6A75E] transition-colors">
                  Admin
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-xs md:text-sm uppercase tracking-wider mb-4">Connect</h4>
            <p className="text-xs md:text-sm text-[#F5F1EA]/70 mb-4">
              inquiries@elenarouseau.art
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#F5F1EA]/70 hover:text-[#C6A75E] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#F5F1EA]/70 hover:text-[#C6A75E] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#F5F1EA]/70 hover:text-[#C6A75E] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#F5F1EA]/10 pt-6 md:pt-8 text-center">
          <p className="text-xs text-[#F5F1EA]/50">
            © 2026 Elena Rousseau. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};