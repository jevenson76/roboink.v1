import React from 'react';
import { Link } from 'react-router-dom';

const CustomSection: React.FC = () => {
  return (
    <section className="py-12 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border-2 border-navy/20 rounded-2xl shadow-xl overflow-hidden">
          
          {/* Main Content Area */}
          <div className="p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              
              {/* Left Content */}
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-5xl md:text-6xl font-slab font-bold text-navy mb-4">
                  Need Something Unique?
                </h2>
                <p className="text-xl md:text-2xl text-copper font-medium mb-8 max-w-xl">
                  Commission a one-of-a-kind steampunk design tailored to your vision
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    to="/custom-requests"
                    className="inline-block px-8 py-3 bg-copper text-white font-slab font-semibold rounded-full hover:bg-rust transition-all duration-300 shadow-lg text-center"
                  >
                    Start Custom Order
                  </Link>
                  <Link
                    to="/collections"
                    className="inline-block px-8 py-3 bg-white border-2 border-navy text-navy font-slab font-semibold rounded-full hover:bg-navy hover:text-white transition-all duration-300 text-center"
                  >
                    Browse Collections
                  </Link>
                </div>
              </div>
              
              {/* Right Visual - Simplified Gear */}
              <div className="flex-shrink-0">
                <div className="relative w-48 h-48 lg:w-56 lg:h-56">
                  {/* Animated gear outline */}
                  <svg className="absolute inset-0 w-full h-full text-copper/30 animate-spin-slow" viewBox="0 0 200 200">
                    <g>
                      {/* Simple gear spokes */}
                      {Array.from({ length: 12 }).map((_, i) => {
                        const angle = (i * 30) * Math.PI / 180;
                        const x1 = 100 + 70 * Math.cos(angle);
                        const y1 = 100 + 70 * Math.sin(angle);
                        const x2 = 100 + 90 * Math.cos(angle);
                        const y2 = 100 + 90 * Math.sin(angle);
                        return (
                          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="2" />
                        );
                      })}
                      <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" fill="none" />
                      <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="1" fill="none" />
                    </g>
                  </svg>
                  
                  {/* Center badge */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-parchment border-2 border-copper rounded-lg px-6 py-3 shadow-lg">
                      <span className="text-3xl font-slab font-bold text-copper">CUSTOM</span>
                      <span className="block text-sm font-slab text-navy tracking-wider uppercase text-center">Designs</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Features Section - Bottom */}
          <div className="bg-parchment/50 border-t border-navy/10 px-8 py-10 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-copper/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-slab font-bold text-navy mb-2">Personalized Text</h3>
                <p className="text-base text-navy/70">
                  Add custom steampunk-styled text, names, or quotes to any design
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-copper/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-slab font-bold text-navy mb-2">Original Artwork</h3>
                <p className="text-base text-navy/70">
                  Commission completely new designs based on your ideas
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-copper/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-slab font-bold text-navy mb-2">Design Modifications</h3>
                <p className="text-base text-navy/70">
                  Customize existing designs with color changes or added elements
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomSection; 