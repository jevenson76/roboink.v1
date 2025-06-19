import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Package, Coffee, Home, Smartphone, Heart } from 'lucide-react';
import { products } from '../data/products';
import { productTypes } from '../data/productTypes';
import GearIcon from './GearIcon';

const ProductTypesSection: React.FC = () => {
  const categoryData = [
    { key: 'apparel', name: 'Apparel', icon: ShoppingBag, link: '/collections/apparel' },
    { key: 'bags', name: 'Bags', icon: Package, link: '/collections/bags' },
    { key: 'drinkware', name: 'Drinkware', icon: Coffee, link: '/collections/drinkware' },
    { key: 'homeDecor', name: 'Home Decor', icon: Home, link: '/collections/home-decor' },
    { key: 'accessories', name: 'Accessories', icon: Smartphone, link: '/collections/accessories' },
    { key: 'petItems', name: 'Pet Items', icon: Heart, link: '/collections/pet-items' }
  ];

  const getCategoryItemCount = (categoryKey: string) => {
    const categoryTypes = productTypes[categoryKey as keyof typeof productTypes];
    if (!categoryTypes) return 0;
    
    const typeIds = categoryTypes.items.map(item => item.id);
    return products.filter(p => typeIds.includes(p.productType) && p.id !== 999).length;
  };

  return (
    <section className="relative bg-gradient-to-b from-white via-navy/5 to-navy/10 py-16 text-center border-b-4 border-navy/40 overflow-hidden" data-component="product-types-section">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-copper to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-navy to-transparent rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          {/* DEBUG: This should have gradient background */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-slab font-bold text-navy mb-6 drop-shadow-2xl tracking-tight" 
              style={{ 
                textShadow: '3px 3px 6px rgba(0, 0, 0, 0.4), 0 0 30px rgba(184, 115, 51, 0.3)',
                background: 'linear-gradient(180deg, #1A2634 0%, #1A2634 50%, #2a3644 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
            Shop by Product Type
          </h2>
          
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-1 w-24 bg-gradient-to-r from-transparent to-copper"></div>
            <div className="w-3 h-3 bg-copper rounded-full"></div>
            <div className="h-1 w-24 bg-gradient-to-l from-transparent to-copper"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-copper font-slab font-bold max-w-3xl mx-auto leading-relaxed"
             style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.2)' }}>
            Find the perfect canvas for your steampunk style
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryData.map((category) => {
            const Icon = category.icon;
            const itemCount = getCategoryItemCount(category.key);
            
            return (
              <Link
                key={category.key}
                to={category.link}
                className="group relative bg-white border-2 border-navy/20 rounded-2xl shadow-xl hover:shadow-2xl p-8 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-copper/10 to-navy/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Decorative gear */}
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-50 transition-opacity duration-300">
                  <GearIcon className="w-12 h-12 text-navy/50 group-hover:text-copper transition-colors duration-300 group-hover:animate-spin" />
                </div>

                <div className="relative mb-6">
                  <Icon className="w-20 h-20 text-navy group-hover:text-copper transition-colors duration-300" />
                </div>
                
                <h3 className="relative text-3xl font-slab font-bold text-navy mb-3 group-hover:text-copper transition-colors duration-300">
                  {category.name}
                </h3>
                
                <p className="relative text-lg text-copper font-semibold mb-6">
                  {itemCount} {itemCount === 1 ? 'Design' : 'Designs'} Available
                </p>
                
                <div className="relative mt-auto px-8 py-3 bg-navy text-white rounded-full font-slab font-semibold text-lg transition-all duration-300 group-hover:bg-copper group-hover:text-navy group-hover:shadow-lg">
                  Shop Now
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductTypesSection;