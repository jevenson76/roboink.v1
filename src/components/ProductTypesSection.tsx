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
    <section className="py-16 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-slab font-bold text-navy mb-4" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
            Shop by Product Type
          </h2>
          <p className="text-lg text-copper font-slab font-bold max-w-3xl mx-auto">
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
                className="group relative bg-parchment rounded-lg shadow-lg hover:shadow-[0_10px_30px_-5px_rgba(212,180,131,0.7)] p-8 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center"
              >
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-50 transition-opacity duration-300">
                  <GearIcon className="w-12 h-12 text-navy/50 group-hover:text-copper transition-colors duration-300 group-hover:animate-spin" />
                </div>

                <div className="mb-4">
                  <Icon className="w-16 h-16 text-navy group-hover:text-copper transition-colors duration-300" />
                </div>
                
                <h3 className="text-2xl font-slab font-bold text-navy mb-2">
                  {category.name}
                </h3>
                
                <p className="text-copper font-semibold mb-4">
                  {itemCount} {itemCount === 1 ? 'Design' : 'Designs'} Available
                </p>
                
                <div className="mt-auto px-6 py-2 bg-navy text-parchment rounded-full font-slab font-semibold transition-all duration-300 group-hover:bg-copper group-hover:text-navy">
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