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
    <section className="py-12 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-slab font-bold text-navy text-center mb-2" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
          Our Collections
        </h2>
        
        <p className="text-lg text-copper font-slab font-bold text-center mb-12 max-w-3xl mx-auto">
          Explore our curated selection of steampunk-inspired designs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            return (
              <Link
                key={category.id}
                to={category.id === 'custom-requests' ? '/custom-requests' : `/collections?category=${category.id}`}
                className="group bg-parchment rounded-lg shadow-lg hover:shadow-[0_10px_30px_-5px_rgba(212,180,131,0.7)] transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="flex items-center justify-center h-64 p-4 overflow-hidden">
                  <img 
                    src={categoryImages[category.id]} 
                    alt={category.name} 
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center border-t-2 border-navy/10 bg-parchment">
                  <h3 className="font-slab font-bold text-navy text-xl">{category.name}</h3>
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