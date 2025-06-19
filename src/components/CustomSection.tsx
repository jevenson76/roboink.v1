import React from 'react';
import { Link } from 'react-router-dom';

const CustomSection: React.FC = () => {
  return (
    <section className="py-6 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-parchment border-2 border-navy rounded-lg shadow-xl p-8 md:p-12">
          
          {/* Top Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left side - Content */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl font-slab font-bold text-navy mb-3">
                Need Something Unique?
              </h2>
              <p className="text-lg text-copper font-semibold mb-8 max-w-lg">
                Commission a one-of-a-kind steampunk design tailored to your vision
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  to="/custom-requests"
                  className="inline-block px-8 py-3 bg-navy text-parchment font-slab font-semibold rounded-full hover:bg-navy/80 transition-all duration-300 shadow-lg text-center"
                >
                  Start Custom Order
                </Link>
                <Link
                  to="/collections?category=typographic-treasures"
                  className="inline-block px-8 py-3 bg-parchment border-2 border-navy text-navy font-slab font-semibold rounded-full hover:bg-navy hover:text-parchment transition-all duration-300 text-center"
                >
                  Browse Text Designs
                </Link>
              </div>
            </div>

            {/* Right side - Visual element */}
            <div className="flex-shrink-0 w-56 h-56 relative flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full text-copper/30" viewBox="0 0 200 200">
                {Array.from({ length: 12 }).map((_, i) => (
                  <line 
                    key={i}
                    x1="100" y1="100" 
                    x2={100 + 100 * Math.cos(i * 2 * Math.PI / 12)} 
                    y2={100 + 100 * Math.sin(i * 2 * Math.PI / 12)}
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                ))}
                <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="1" fill="none" />
              </svg>

              <div className="relative bg-parchment border-2 border-navy rounded-full w-40 h-40 flex flex-col items-center justify-center">
                <span className="text-2xl font-slab font-bold text-rust">CUSTOM</span>
                <span className="text-sm font-slab text-navy tracking-widest">DESIGNS</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-12 border-t border-navy/20"></div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-lg font-slab font-bold text-navy mb-2">Personalized Text</h3>
              <p className="text-base text-navy/70">
                Add custom steampunk-styled text, names, or quotes to any design
              </p>
            </div>
            <div>
              <h3 className="text-lg font-slab font-bold text-navy mb-2">Original Artwork</h3>
              <p className="text-base text-navy/70">
                Commission completely new designs based on your ideas
              </p>
            </div>
            <div>
              <h3 className="text-lg font-slab font-bold text-navy mb-2">Design Modifications</h3>
              <p className="text-base text-navy/70">
                Customize existing designs with color changes or added elements
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomSection; 