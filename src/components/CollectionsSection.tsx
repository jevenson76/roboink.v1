import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';

// Import category images
import robotsImg from '../assets/ROBOTS.png';
import vehiclesImg from '../assets/VEHICLES.png';
import clockworkImg from '../assets/CLOCKWORK CREATURES.png';
import gadgetryImg from '../assets/GADGETRY & GIZMOS.png';
import typographicImg from '../assets/TEXT.png';
import victorianImg from '../assets/VICTORIAN VANGUARD.png';
import retroImg from '../assets/RETRO-FUTURISM.png';
import skullsImg from '../assets/SKULLS.png';
import customImg from '../assets/CUSTOM.png';

// Map category IDs to their images
const categoryImages: { [key: string]: string } = {
  'robots': robotsImg,
  'vehicles': vehiclesImg,
  'clockwork-creatures': clockworkImg,
  'gadgetry-gizmos': gadgetryImg,
  'typographic-treasures': typographicImg,
  'victorian-vanguard': victorianImg,
  'retro-futurism': retroImg,
  'skulls': skullsImg,
  'custom-requests': customImg
};

const CollectionsSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-white via-navy/5 to-navy/10 py-16 text-center border-b-4 border-navy/40 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-copper to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-navy to-transparent rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-slab font-bold text-navy mb-6 drop-shadow-2xl tracking-tight" 
              style={{ 
                textShadow: '3px 3px 6px rgba(0, 0, 0, 0.4), 0 0 30px rgba(184, 115, 51, 0.3)',
                background: 'linear-gradient(180deg, #1A2634 0%, #1A2634 50%, #2a3644 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
            Our Collections
          </h2>
          
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-1 w-24 bg-gradient-to-r from-transparent to-copper"></div>
            <div className="w-3 h-3 bg-copper rounded-full"></div>
            <div className="h-1 w-24 bg-gradient-to-l from-transparent to-copper"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-copper font-slab font-bold max-w-3xl mx-auto leading-relaxed"
             style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.2)' }}>
            Explore our curated selection of steampunk-inspired designs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            return (
              <Link
                key={category.id}
                to={category.id === 'custom-requests' ? '/custom-requests' : `/collections?category=${category.id}`}
                className="group relative bg-white border-2 border-navy/20 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-copper/10 to-navy/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative flex items-center justify-center h-64 p-6 overflow-hidden">
                  <img 
                    src={categoryImages[category.id]} 
                    alt={category.name} 
                    className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="relative p-6 text-center border-t-2 border-navy/10 bg-white">
                  <h3 className="text-3xl font-slab font-bold text-navy group-hover:text-copper transition-colors duration-300">
                    {category.name}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;