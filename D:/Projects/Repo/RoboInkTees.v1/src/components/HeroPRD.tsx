import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero.png';

const HeroPRD: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-[750px] flex items-center overflow-hidden bg-parchment">
      {/* Hero Image Background with enhanced effects */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        {/* Multi-layer overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-parchment/10 to-parchment/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/20 via-transparent to-navy/20"></div>
        
        {/* Enhanced shimmer effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_8s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_12s_ease-in-out_infinite_reverse] bg-gradient-to-r from-transparent via-yellow-500/5 to-transparent"></div>
        </div>
      </div>

      {/* Floating gear decorations */}
      <div className="absolute inset-0 z-[5] pointer-events-none">
        <svg className="hero-gear-accent top-left" viewBox="0 0 60 60">
          <circle cx="30" cy="30" r="20" stroke="#B87333" strokeWidth="2" fill="none" />
          <circle cx="30" cy="30" r="10" fill="#B87333" />
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i * 45) * Math.PI / 180;
            const x1 = 30 + 15 * Math.cos(angle);
            const y1 = 30 + 15 * Math.sin(angle);
            const x2 = 30 + 25 * Math.cos(angle);
            const y2 = 30 + 25 * Math.sin(angle);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#B87333" strokeWidth="3" />;
          })}
        </svg>
      </div>

      {/* Enhanced Content */}
      <div className="relative z-10 flex justify-center w-full">
        <div className="inline-block text-center px-8">
          
          {/* Main Title with maximum impact */}
          <h1 
            className={`text-5xl md:text-6xl lg:text-7xl font-slab font-bold text-parchment mb-8 text-shadow-lg text-center leading-tight ${isLoaded ? 'hero-text-reveal' : 'opacity-0'}`}
            style={{ animationDelay: '0.5s', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}
          >
            Artfully Engineered. Robotically Inked.
          </h1>
          
          {/* Victorian ornament below title */}
          <div className={`victorian-divider ${isLoaded ? 'hero-text-reveal' : 'opacity-0'}`} 
               style={{ animationDelay: '1s' }} />
          
          {/* Enhanced CTA Button */}
          <div className={`mt-12 ${isLoaded ? 'hero-text-reveal' : 'opacity-0'}`}
               style={{ animationDelay: '1.2s' }}>
            <Link 
              to="/collections" 
              className="hero-cta-steampunk inline-block group"
            >
              <span className="relative z-10 flex items-center gap-3">
                Explore Collections
                <svg className="w-6 h-6 transition-transform group-hover:translate-x-2" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Animated steam particles */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute bottom-0 w-20 h-20 bg-white/10 rounded-full blur-xl animate-steam"
            style={{
              left: `${20 * i}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i}s`
            }}
          />
        ))}
      </div>

      {/* Bottom border with gear pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-navy via-[#B87333] to-navy"></div>
    </section>
  );
};

export default HeroPRD;