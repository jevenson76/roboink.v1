import React from 'react';
import { Link } from 'react-router-dom';

const CustomSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-parchment via-parchment to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section - Clean and Centered */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-slab font-bold text-navy mb-6 tracking-tight">
            Create Your Vision
          </h2>
          <p className="text-xl md:text-2xl text-copper font-medium max-w-3xl mx-auto leading-relaxed">
            Transform your ideas into unique steampunk designs
          </p>
        </div>

        {/* Interactive Gear Animation - Standalone */}
        <div className="relative w-64 h-64 mx-auto mb-16">
          {/* Animated outer gear */}
          <svg className="absolute inset-0 w-full h-full text-copper/20 animate-spin-slow" viewBox="0 0 256 256">
            <g>
              {/* Gear teeth */}
              {Array.from({ length: 24 }).map((_, i) => {
                const angle = (i * 15) * Math.PI / 180;
                const innerRadius = 110;
                const outerRadius = 125;
                const x1 = 128 + innerRadius * Math.cos(angle);
                const y1 = 128 + innerRadius * Math.sin(angle);
                const x2 = 128 + outerRadius * Math.cos(angle);
                const y2 = 128 + outerRadius * Math.sin(angle);
                return (
                  <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="4" />
                );
              })}
              <circle cx="128" cy="128" r="110" stroke="currentColor" strokeWidth="3" fill="none" />
              <circle cx="128" cy="128" r="90" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="128" cy="128" r="30" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.05" />
            </g>
          </svg>
          
          {/* Center content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white border-3 border-copper rounded-2xl px-8 py-4 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <span className="text-3xl font-slab font-bold text-copper block">CUSTOM</span>
              <span className="text-sm font-slab text-navy tracking-[0.3em] uppercase">Designs</span>
            </div>
          </div>
        </div>

        {/* CTA Buttons - Prominent and Centered */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 px-4">
          <Link
            to="/custom-requests"
            className="inline-flex items-center justify-center px-10 py-5 bg-copper text-white font-slab font-bold text-xl rounded-full hover:bg-rust transform hover:scale-105 transition-all duration-300 shadow-xl"
          >
            Start Your Custom Order
          </Link>
          <Link
            to="/collections"
            className="inline-flex items-center justify-center px-10 py-5 bg-transparent border-3 border-navy text-navy font-slab font-bold text-xl rounded-full hover:bg-navy hover:text-white hover:border-navy transition-all duration-300"
          >
            Browse Collections
          </Link>
        </div>

        {/* Features Grid - Modern Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center group">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-copper/20 to-copper/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 text-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h3 className="text-2xl font-slab font-bold text-navy mb-4">Custom Text</h3>
            <p className="text-navy/70 leading-relaxed">
              Add personalized messages, names, or quotes in authentic steampunk typography
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center group">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-copper/20 to-copper/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 text-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-slab font-bold text-navy mb-4">Original Art</h3>
            <p className="text-navy/70 leading-relaxed">
              Commission unique designs crafted specifically for your vision
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center group">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-copper/20 to-copper/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 text-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-2xl font-slab font-bold text-navy mb-4">Modifications</h3>
            <p className="text-navy/70 leading-relaxed">
              Customize existing designs with new colors or elements
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomSection; 