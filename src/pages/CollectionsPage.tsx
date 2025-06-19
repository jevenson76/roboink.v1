import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import NavbarPRD from '../components/NavbarPRD';
import FooterPRD from '../components/FooterPRD';
import ProductCardPRD from '../components/ProductCardPRD';
import OrnamentalDivider from '../components/OrnamentalDivider';
import FilterSidebar from '../components/FilterSidebar';
import { useFilter } from '../context/FilterContext';
import { products } from '../data/products';
import { productTypes } from '../data/productTypes';
import { Filter, ChevronDown, X } from 'lucide-react';

const CollectionsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('category');
  const searchQuery = searchParams.get('search');
  const productTypeFromUrl = searchParams.get('productType');
  const typeFromUrl = searchParams.get('type');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  
  const {
    selectedCategories,
    setSelectedCategories,
    selectedProductTypes,
    setSelectedProductTypes,
    sortBy,
    setSortBy,
  } = useFilter();
  
  const [displayedProducts, setDisplayedProducts] = useState(24);
  const PRODUCTS_PER_PAGE = 24;

  useEffect(() => {
    if (categoryFromUrl) {
      setSelectedCategories([categoryFromUrl]);
    }
    if (productTypeFromUrl) {
      setSelectedProductTypes([productTypeFromUrl]);
    }
    if (typeFromUrl && typeFromUrl in productTypes) {
      const validKey = typeFromUrl as keyof typeof productTypes;
      const typeItems = productTypes[validKey].items.map(item => item.id);
      setSelectedProductTypes(typeItems);
    }
  }, [categoryFromUrl, productTypeFromUrl, typeFromUrl, setSelectedCategories, setSelectedProductTypes]);

  useEffect(() => {
    setDisplayedProducts(PRODUCTS_PER_PAGE);
  }, [selectedCategories, selectedProductTypes, searchQuery, sortBy]);

  // Filter products
  let filteredProducts = [...products.filter(p => p.id !== 999)];
  
  if (searchQuery) {
    filteredProducts = filteredProducts.filter(product => 
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.description && product.description.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }
  
  if (selectedCategories.length > 0) {
    filteredProducts = filteredProducts.filter(p => selectedCategories.includes(p.category));
  }
  
  if (selectedProductTypes.length > 0) {
    filteredProducts = filteredProducts.filter(p => selectedProductTypes.includes(p.productType));
  }

  // Sort products
  switch (sortBy) {
    case 'price-low':
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case 'newest':
      filteredProducts.sort((a, b) => b.id - a.id);
      break;
    case 'rating':
      filteredProducts.sort((a, b) => b.rating - a.rating);
      break;
    case 'featured':
    default:
      filteredProducts.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return a.id - b.id;
      });
      break;
  }

  const activeFilterCount = selectedCategories.length + selectedProductTypes.length;

  return (
    <div className="min-h-screen bg-parchment animate-fade-in-from-top">
      <NavbarPRD />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-parchment to-copper/20 py-12 text-center border-b-2 border-navy/30">
        <h1 className="text-5xl font-slab font-bold text-navy mb-2 drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
          {searchQuery ? `Search Results for "${searchQuery}"` : 
           (typeFromUrl && typeFromUrl in productTypes) ? `${productTypes[typeFromUrl as keyof typeof productTypes].name} Collection` :
           'Our Collections'}
        </h1>
        <p className="text-xl text-copper font-slab font-bold max-w-3xl mx-auto">
          {searchQuery ? 
            `Found ${filteredProducts.length} items matching your search` :
            (typeFromUrl && typeFromUrl in productTypes) ? 
            `Explore our collection of handcrafted ${productTypes[typeFromUrl as keyof typeof productTypes].name.toLowerCase()}` :
            'Explore our complete collection of steampunk-inspired designs'
          }
        </p>
      </section>

      {/* Mobile Filter Button */}
      <button
        onClick={() => setIsMobileFilterOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 z-40 bg-navy text-parchment p-4 rounded-full shadow-lg flex items-center space-x-2 hover:scale-110 transition-transform"
      >
        <Filter className="w-5 h-5" />
        {activeFilterCount > 0 && (
          <span className="bg-copper text-navy rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
            {activeFilterCount}
          </span>
        )}
      </button>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex gap-12">
        <FilterSidebar 
          totalProducts={filteredProducts.length}
          isMobileOpen={isMobileFilterOpen}
          onMobileClose={() => setIsMobileFilterOpen(false)}
        />
        
        <main className="flex-1">
          {/* Sort Bar */}
          <div className="flex flex-wrap items-center justify-between mb-8 pb-6 border-b border-navy/20">
            <p className="text-navy/60 font-semibold">
              {filteredProducts.length > displayedProducts 
                ? `Showing 1-${displayedProducts} of ${filteredProducts.length} Items`
                : `${filteredProducts.length} Items`
              }
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
                  <option value="newest">Newest</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-navy" />
              </div>
            </div>
          </div>

          {/* Active Filters */}
          {(selectedCategories.length > 0 || selectedProductTypes.length > 0) && (
            <div className="mb-6 p-4 bg-copper/20 border border-copper rounded-lg">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-navy font-slab font-semibold">Active filters:</span>
                {selectedCategories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategories(selectedCategories.filter(c => c !== cat))}
                    className="px-3 py-1 bg-navy text-parchment rounded-full text-sm flex items-center hover:bg-navy/80 transition-colors"
                  >
                    {cat.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    <X className="w-3 h-3 ml-2" />
                  </button>
                ))}
                {selectedProductTypes.map(type => {
                  const productType = Object.values(productTypes).flatMap(cat => cat.items).find(item => item.id === type);
                  return productType ? (
                    <button
                      key={type}
                      onClick={() => setSelectedProductTypes(selectedProductTypes.filter(t => t !== type))}
                      className="px-3 py-1 bg-navy text-parchment rounded-full text-sm flex items-center hover:bg-navy/80 transition-colors"
                    >
                      {productType.name}
                      <X className="w-3 h-3 ml-2" />
                    </button>
                  ) : null;
                })}
                <button
                  onClick={() => {
                    setSelectedCategories([]);
                    setSelectedProductTypes([]);
                  }}
                  className="text-navy hover:text-copper text-sm underline font-semibold ml-auto"
                >
                  Clear all
                </button>
              </div>
            </div>
          )}

          {/* Products Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-parchment border-2 border-navy/10 rounded-lg">
              <h3 className="text-2xl font-slab font-bold text-navy mb-4">No Products Found</h3>
              <p className="text-navy/70 mb-6">
                Try adjusting your filters or check back later for new additions.
              </p>
              <button
                onClick={() => {
                  setSelectedCategories([]);
                  setSelectedProductTypes([]);
                }}
                className="px-6 py-3 bg-navy text-parchment font-slab font-semibold rounded-full hover:bg-copper hover:text-navy transition-all duration-300"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredProducts.slice(0, displayedProducts).map(product => (
                  <ProductCardPRD key={product.id} {...product} />
                ))}
              </div>

              {/* Load More */}
              {filteredProducts.length > displayedProducts && (
                <div className="mt-16 text-center">
                  <button 
                    onClick={() => setDisplayedProducts(prev => prev + PRODUCTS_PER_PAGE)}
                    className="px-8 py-3 bg-navy border-2 border-navy text-parchment font-slab font-semibold rounded-full hover:bg-copper hover:text-navy transition-all duration-300"
                  >
                    Load More Products ({filteredProducts.length - displayedProducts} remaining)
                  </button>
                </div>
              )}
            </>
          )}
        </main>
      </div>

      <OrnamentalDivider className="my-16" bgColor="bg-parchment" />
      <div className="h-1 bg-navy"></div>
      <FooterPRD />
    </div>
  );
};

export default CollectionsPage;