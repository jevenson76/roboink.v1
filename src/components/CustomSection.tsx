import React from 'react';
import { Link } from 'react-router-dom';

const CustomSection: React.FC = () => {
  return (
    <section className="relative py-16 bg-gradient-to-br from-navy via-navy/95 to-copper/30 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-copper/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-copper/10 rounded-full blur-3xl"></div>
        {/* Gear pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4l-1.48-.56c-.233-.896-.594-1.738-1.06-2.5l.73-1.44-2.83-2.83-1.44.73c-.762-.466-1.604-.827-2.5-1.06L27 21h-4l-.56 1.48c-.896.233-1.738.594-2.5 1.06l-1.44-.73-2.83 2.83.73 1.44c-.466.762-.827 1.604-1.06 2.5L15 31v4l1.48.56c.233.896.594 1.738 1.06 2.5l-.73 1.44 2.83 2.83 1.44-.73c.762.466 1.604.827 2.5 1.06L24 45h4l.56-1.48c.896-.233 1.738-.594 2.5-1.06l1.44.73 2.83-2.83-.73-1.44c.466-.762.827-1.604 1.06-2.5L36 34zm-11 3c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-white/95 via-parchment/90 to-white/85 border-2 border-copper/50 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm">
          
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
          <div className="bg-gradient-to-r from-navy/90 via-navy/80 to-copper/30 border-t-2 border-copper/50 px-8 py-10 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-parchment/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-slab font-bold text-parchment mb-2">Personalized Text</h3>
                <p className="text-base text-parchment/80">
                  Add custom steampunk-styled text, names, or quotes to any design
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-parchment/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-slab font-bold text-parchment mb-2">Original Artwork</h3>
                <p className="text-base text-parchment/80">
                  Commission completely new designs based on your ideas
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-parchment/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-slab font-bold text-parchment mb-2">Design Modifications</h3>
                <p className="text-base text-parchment/80">
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