import React from 'react';
import { Link } from 'react-router-dom';

const FooterPRD: React.FC = () => {
  return (
    <footer className="bg-parchment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-slab font-bold text-navy mb-4">
              RoboInkTees
            </h3>
            <p className="text-navy/80 mb-4">
              Where Victorian Engineering Meets Modern Style.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              {/* Facebook */}
              <a
                href="#"
                className="w-10 h-10 border-2 border-navy rounded-full flex items-center justify-center text-navy hover:bg-navy hover:text-parchment hover:scale-110 hover:rotate-12 transition-all duration-300"
                aria-label="Facebook"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {/* Twitter/X */}
              <a
                href="#"
                className="w-10 h-10 border-2 border-navy rounded-full flex items-center justify-center text-navy hover:bg-navy hover:text-parchment hover:scale-110 hover:rotate-12 transition-all duration-300"
                aria-label="Twitter"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#"
                className="w-10 h-10 border-2 border-navy rounded-full flex items-center justify-center text-navy hover:bg-navy hover:text-parchment hover:scale-110 hover:rotate-12 transition-all duration-300"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
              </a>
              {/* Pinterest */}
              <a
                href="#"
                className="w-10 h-10 border-2 border-navy rounded-full flex items-center justify-center text-navy hover:bg-navy hover:text-parchment hover:scale-110 hover:rotate-12 transition-all duration-300"
                aria-label="Pinterest"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-slab font-bold text-navy mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-navy/80 hover:text-copper transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/collections" className="text-navy/80 hover:text-copper transition-colors">
                  Collections
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-navy/80 hover:text-copper transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-navy/80 hover:text-copper transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-slab font-bold text-navy mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-navy/80 hover:text-copper transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-navy/80 hover:text-copper transition-colors">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-navy/80 hover:text-copper transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/size-guide" className="text-navy/80 hover:text-copper transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link to="/care" className="text-navy/80 hover:text-copper transition-colors">
                  Care Instructions
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-slab font-bold text-navy mb-4">Stay Connected</h4>
            <p className="text-navy/80 mb-4">
              Subscribe for exclusive designs and Steampunk inspirations.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 bg-parchment border-2 border-navy rounded-full text-navy placeholder-navy/50 focus:outline-none focus:ring-2 focus:ring-copper"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-navy border-2 border-navy rounded-full text-parchment font-slab font-semibold hover:bg-copper hover:text-navy transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy flex flex-col md:flex-row justify-between items-center">
          <p className="text-navy/70 text-base font-slab mb-4 md:mb-0">
            © {new Date().getFullYear()} RoboInkTees. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-navy/70 hover:text-copper text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-navy/70 hover:text-copper text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-navy/70 hover:text-copper text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterPRD;