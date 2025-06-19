import React, { useState } from 'react';
import { ChevronDown, ChevronRight, X, Filter, Search, RotateCcw } from 'lucide-react';
import { useFilter } from '../context/FilterContext';
import { categories } from '../data/categories';
import { productTypes } from '../data/productTypes';
import { products } from '../data/products';

interface FilterSidebarProps {
  totalProducts?: number;
  onMobileClose?: () => void;
  isMobileOpen?: boolean;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ 
  totalProducts = 0, 
  onMobileClose,
  isMobileOpen = false 
}) => {
  const {
    selectedCategories,
    selectedProductTypes,
    expandedProductTypes,
    toggleCategory,
    toggleProductType,
    toggleProductTypeExpansion,
    setSelectedCategories,
    setSelectedProductTypes,
  } = useFilter();

  const [isOpen, setIsOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedSections, setExpandedSections] = useState(['product-types', 'categories']);

  // Calculate counts for each filter option
  const getCategoryCount = (categoryId: string) => {
    return products.filter(p => p.category === categoryId && p.id !== 999).length;
  };

  const getProductTypeCount = (typeId: string) => {
    return products.filter(p => p.productType === typeId && p.id !== 999).length;
  };

  // Toggle section expansion
  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedProductTypes([]);
    setSearchTerm('');
  };

  // Get active filter count
  const activeFilterCount = selectedCategories.length + selectedProductTypes.length;

  // Filter items based on search
  const filterBySearch = <T extends { name: string }>(items: T[]): T[] => {
    if (!searchTerm) return items;
    return items.filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const sidebarContent = (
    <>
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-navy/60" />
        <input
          type="text"
          placeholder="Search filters..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-3 py-3 text-base border-2 border-navy/20 rounded-lg focus:border-copper focus:outline-none transition-colors bg-white/80"
        />
      </div>

      {/* Clear All Button */}
      {activeFilterCount > 0 && (
        <button
          onClick={clearAllFilters}
          className="w-full flex items-center justify-center space-x-2 py-3 bg-copper text-navy text-base font-semibold rounded-lg hover:bg-copper/90 transition-colors"
        >
          <RotateCcw className="w-5 h-5" />
          <span>Clear All Filters ({activeFilterCount})</span>
        </button>
      )}

      {/* Results Count */}
      <div className="bg-navy/10 rounded-lg p-4 text-center">
        <p className="text-navy font-bold text-lg">{totalProducts} Products Found</p>
      </div>

      {/* Product Types Section */}
      <div className="border-t border-b border-navy/10">
        <button
          onClick={() => toggleSection('product-types')}
          className="w-full p-4 flex items-center justify-between hover:bg-navy/5 transition-colors group"
        >
          <span className="font-slab font-bold text-navy text-lg group-hover:text-copper transition-colors">
            Product Types
          </span>
          {expandedSections.includes('product-types') ? (
            <ChevronDown className="w-5 h-5 text-navy group-hover:text-copper transition-all" />
          ) : (
            <ChevronRight className="w-5 h-5 text-navy group-hover:text-copper transition-all" />
          )}
        </button>
        
        {expandedSections.includes('product-types') && (
          <div className="p-3 space-y-3">
            {Object.entries(productTypes).map(([key, category]) => (
              <div key={key} className="space-y-2">
                <button
                  onClick={() => toggleProductTypeExpansion(key)}
                  className="w-full flex items-center justify-between text-left hover:text-copper transition-colors"
                >
                  <h4 className="font-slab font-semibold text-navy text-base">{category.name}</h4>
                  <ChevronDown 
                    className={`w-3 h-3 transition-transform duration-200 ${
                      expandedProductTypes.includes(key) ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                {expandedProductTypes.includes(key) && (
                  <div className="space-y-1 ml-3">
                    {filterBySearch(category.items).map((item) => {
                      const count = getProductTypeCount(item.id);
                      const isSelected = selectedProductTypes.includes(item.id);
                      
                      return (
                        <label
                          key={item.id}
                          className={`flex items-center justify-between p-2 rounded cursor-pointer transition-all duration-200 ${
                            isSelected 
                              ? 'bg-navy text-parchment' 
                              : 'hover:bg-copper/10'
                          }`}
                        >
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              checked={isSelected}
                              onChange={() => toggleProductType(item.id)}
                              className="w-4 h-4 text-copper rounded border-2 border-navy/30 focus:ring-copper focus:ring-offset-0"
                            />
                            <span className={`text-base ${isSelected ? 'text-parchment' : 'text-navy'}`}>
                              {item.name}
                            </span>
                          </div>
                          <span className={`text-sm px-2 py-1 rounded ${
                            isSelected 
                              ? 'bg-parchment/20 text-parchment' 
                              : 'bg-navy/10 text-navy/60'
                          }`}>
                            {count}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Design Categories Section */}
      <div className="border-b border-navy/10">
        <button
          onClick={() => toggleSection('categories')}
          className="w-full p-4 flex items-center justify-between hover:bg-navy/5 transition-colors group"
        >
          <span className="font-slab font-bold text-navy text-lg group-hover:text-copper transition-colors">
            Design Categories
          </span>
          {expandedSections.includes('categories') ? (
            <ChevronDown className="w-5 h-5 text-navy group-hover:text-copper transition-all" />
          ) : (
            <ChevronRight className="w-5 h-5 text-navy group-hover:text-copper transition-all" />
          )}
        </button>
        
        {expandedSections.includes('categories') && (
          <div className="p-3 space-y-1">
            {filterBySearch(categories.filter(cat => cat.id !== 'custom-requests')).map((category) => {
              const count = getCategoryCount(category.id);
              const isSelected = selectedCategories.includes(category.id);
              
              return (
                <label
                  key={category.id}
                  className={`flex items-center justify-between p-2 rounded cursor-pointer transition-all duration-200 ${
                    isSelected 
                      ? 'bg-navy text-parchment' 
                      : 'hover:bg-copper/10'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleCategory(category.id)}
                      className="w-4 h-4 text-copper rounded border-2 border-navy/30 focus:ring-copper focus:ring-offset-0"
                    />
                    <span className={`text-base ${isSelected ? 'text-parchment' : 'text-navy'}`}>
                      {category.name}
                    </span>
                  </div>
                  <span className={`text-sm px-2 py-1 rounded ${
                    isSelected 
                      ? 'bg-parchment/20 text-parchment' 
                      : 'bg-navy/10 text-navy/60'
                  }`}>
                    {count}
                  </span>
                </label>
              );
            })}
          </div>
        )}
      </div>

      {/* Decorative Gear */}
      <div className="mt-6 flex justify-center opacity-20">
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          className="text-navy animate-spin-slow"
        >
          <circle cx="30" cy="30" r="25" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="30" cy="30" r="15" stroke="currentColor" strokeWidth="1" fill="none" />
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30) * Math.PI / 180;
            const x1 = 30 + 20 * Math.cos(angle);
            const y1 = 30 + 20 * Math.sin(angle);
            const x2 = 30 + 28 * Math.cos(angle);
            const y2 = 30 + 28 * Math.sin(angle);
            return (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="2" />
            );
          })}
        </svg>
      </div>
    </>
  );

  // Desktop View
  const desktopSidebar = (
    <aside className={`hidden lg:block transition-all duration-300 ${isOpen ? 'w-80' : 'w-16'} flex-shrink-0`}>
      <div className="sticky top-28 bg-gradient-to-b from-parchment to-copper/20 border-2 border-navy/40 rounded-lg shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-navy/90 p-4 flex items-center justify-between">
          <h3 className={`text-2xl font-slab font-bold text-parchment transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
            Filters
            {activeFilterCount > 0 && (
              <span className="ml-2 text-base bg-copper text-navy px-2 py-1 rounded-full">
                {activeFilterCount}
              </span>
            )}
          </h3>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-parchment hover:text-copper transition-colors"
            aria-label={isOpen ? 'Collapse filters' : 'Expand filters'}
          >
            <Filter className="w-5 h-5" />
          </button>
        </div>

        {/* Collapsed State */}
        {!isOpen && (
          <div className="p-4 flex flex-col items-center space-y-4">
            <button
              onClick={() => setIsOpen(true)}
              className="relative group hover:scale-110 transition-transform cursor-pointer"
              aria-label="Expand filters"
            >
              <Filter className="w-6 h-6 text-navy group-hover:text-copper transition-colors" />
              {activeFilterCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-copper text-navy rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  {activeFilterCount}
                </span>
              )}
            </button>
            <span className="text-xs text-navy/60 rotate-90 origin-center whitespace-nowrap mt-4">
              Filters
            </span>
          </div>
        )}

        {/* Expanded State */}
        {isOpen && (
          <div className="p-4 space-y-4 overflow-hidden">
            {sidebarContent}
          </div>
        )}
      </div>
    </aside>
  );

  // Mobile View
  const mobileSidebar = isMobileOpen && (
    <div className="lg:hidden fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50" onClick={onMobileClose} />
      <div className="absolute left-0 top-0 h-full w-80 bg-gradient-to-b from-parchment to-copper/20 shadow-2xl overflow-y-auto">
        {/* Mobile Header */}
        <div className="bg-navy p-4 flex items-center justify-between sticky top-0 z-10">
          <h3 className="text-xl font-slab font-bold text-parchment">
            Filters
            {activeFilterCount > 0 && (
              <span className="ml-2 text-sm bg-copper text-navy px-2 py-1 rounded-full">
                {activeFilterCount}
              </span>
            )}
          </h3>
          <button
            onClick={onMobileClose}
            className="text-parchment hover:text-copper transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Content */}
        <div className="p-4 space-y-4">
          {sidebarContent}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {desktopSidebar}
      {mobileSidebar}
    </>
  );
};

export default FilterSidebar;