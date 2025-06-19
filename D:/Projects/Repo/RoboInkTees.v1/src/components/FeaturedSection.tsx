import React from 'react';
import { Link } from 'react-router-dom';
import ProductCardPRD from './ProductCardPRD';
import { products } from '../data/products';
import { useInView } from '../hooks/useInView';

const AnimatedProductCard: React.FC<{ product: any; index: number }> = ({ product, index }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <ProductCardPRD {...product} />
    </div>
  );
};

const FeaturedSection: React.FC = () => {
  // Get 3 apparel items (t-shirt, hoodie, beanie)
  const apparelProducts = [
    products.find(p => p.id === 1), // Victorian Clockwork Automaton - T-shirt
    products.find(p => p.id === 2), // Steampunk Airship Navigator - Hoodie
    products.find(p => p.id === 23) // Gear Head Beanie
  ].filter(Boolean);

  // Get one item from each other category
  const otherCategoryProducts = [
    products.find(p => p.id === 6), // Retro Future Vision - Tote Bag (Bags)
    products.find(p => p.id === 12), // Steam Bot Water Bottle (Drinkware)
    products.find(p => p.id === 27), // Gear Wolf Blanket (Home Decor)
    products.find(p => p.id === 7), // Cogwheel Skull Design - Phone Case (Accessories)
    products.find(p => p.id === 26) // Brass Bird Pet Bandana (Pet Items)
  ].filter(Boolean);

  const featuredProducts = [...apparelProducts, ...otherCategoryProducts];

  return (
    <section id="featured-section-enhanced-2024" className="relative bg-gradient-to-b from-white via-navy/5 to-navy/10 py-16 text-center border-b-4 border-navy/40 overflow-hidden">
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
            Featured Designs
          </h2>
          
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-1 w-24 bg-gradient-to-r from-transparent to-copper"></div>
            <div className="w-3 h-3 bg-copper rounded-full"></div>
            <div className="h-1 w-24 bg-gradient-to-l from-transparent to-copper"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-copper font-slab font-bold max-w-3xl mx-auto leading-relaxed"
             style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.2)' }}>
            Discover our most popular steampunk creations, ready to wear
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => product && (
            <AnimatedProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link 
            to="/collections" 
            className="inline-block px-8 py-3 bg-navy border-2 border-navy text-parchment font-slab font-semibold rounded-full transition-all duration-300 hover:bg-copper hover:text-navy"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;