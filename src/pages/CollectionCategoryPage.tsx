import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavbarPRD from '../components/NavbarPRD';
import FooterPRD from '../components/FooterPRD';
import ProductCardPRD from '../components/ProductCardPRD';
import OrnamentalDivider from '../components/OrnamentalDivider';
import FilterSidebar from '../components/FilterSidebar';
import { useFilter } from '../context/FilterContext';
import { products } from '../data/products';
import { productTypes } from '../data/productTypes';
import { ChevronDown } from 'lucide-react';

interface CategoryMapping {
  [key: string]: {
    name: string;
    productTypeKey: keyof typeof productTypes;
  };
}

const categoryMapping: CategoryMapping = {
  'apparel': { name: 'Apparel', productTypeKey: 'apparel' },
  'bags': { name: 'Bags', productTypeKey: 'bags' },
  'drinkware': { name: 'Drinkware', productTypeKey: 'drinkware' },
  'home-decor': { name: 'Home Decor', productTypeKey: 'homeDecor' },
  'accessories': { name: 'Accessories', productTypeKey: 'accessories' },
  'pet-items': { name: 'Pet Items', productTypeKey: 'petItems' }
};

const CollectionCategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const { selectedProductTypes, sortBy, setSortBy } = useFilter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!category || !categoryMapping[category]) {
    return <div>Category not found</div>;
  }

  const categoryInfo = categoryMapping[category];
  const categoryProductTypes = productTypes[categoryInfo.productTypeKey];
  
  // Get all product type IDs for this category
  const categoryProductTypeIds = categoryProductTypes.items.map(item => item.id);
  
  // Filter products by category
  let filteredProducts = products.filter(p => 
    categoryProductTypeIds.includes(p.productType) && p.id !== 999
  );
  
  // Apply selected product type filters
  if (selectedProductTypes.length > 0) {
    filteredProducts = filteredProducts.filter(p => 
      selectedProductTypes.includes(p.productType)
    );
  }

  // Sort products
  switch (sortBy) {
    case 'price-low':
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filteredProducts.sort((a, b) => b.rating - a.rating);
      break;
    case 'featured':
    default:
      filteredProducts.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return b.rating * b.reviewCount - a.rating * a.reviewCount;
      });
  }

  return (
    <div className="min-h-screen bg-parchment animate-fade-in-from-top">
      <NavbarPRD />
      
      {/* Hero Section - Enhanced to match Collections page */}
      <section className="relative bg-gradient-to-b from-white via-navy/5 to-navy/10 py-16 text-center border-b-4 border-navy/40 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-copper to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-navy to-transparent rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-slab font-bold text-navy mb-6 drop-shadow-2xl tracking-tight" 
              style={{ 
                textShadow: '3px 3px 6px rgba(0, 0, 0, 0.4), 0 0 30px rgba(184, 115, 51, 0.3)',
                background: 'linear-gradient(180deg, #1A2634 0%, #1A2634 50%, #2a3644 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
            {categoryInfo.name}
          </h1>
          
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-1 w-24 bg-gradient-to-r from-transparent to-copper"></div>
            <div className="w-3 h-3 bg-copper rounded-full"></div>
            <div className="h-1 w-24 bg-gradient-to-l from-transparent to-copper"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-copper font-slab font-bold max-w-3xl mx-auto leading-relaxed"
             style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.2)' }}>
            Explore our collection of handcrafted {categoryInfo.name.toLowerCase()}
          </p>
        </div>
      </section>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex gap-12">
        <FilterSidebar totalProducts={filteredProducts.length} />
        
        <main className="flex-1">
          {/* Sort Bar */}
          <div className="flex flex-wrap items-center justify-between mb-8 pb-4 border-b border-navy/20">
            <p className="text-navy font-semibold">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'Item' : 'Items'}
            </p>
            
            <div className="flex items-center space-x-2">
              <label htmlFor="sort-by" className="text-navy font-semibold">Sort by:</label>
              <div className="relative">
                <select
                  id="sort-by"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-parchment border-2 border-navy/30 rounded-lg px-4 py-2 text-navy focus:outline-none focus:border-copper transition-colors cursor-pointer pr-8"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-navy" />
              </div>
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map(product => (
                <ProductCardPRD key={product.id} {...product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl font-slab font-bold text-navy mb-4">No Products Found</h3>
              <p className="text-navy/70">
                Try adjusting your filters or check back later for new additions.
              </p>
            </div>
          )}
        </main>
      </div>

      <OrnamentalDivider className="my-16" bgColor="bg-parchment" />
      <div className="h-1 bg-navy"></div>
      <FooterPRD />
    </div>
  );
};

export default CollectionCategoryPage;