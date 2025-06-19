import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppPRD from './AppPRD';
import ProductDetailPage from './pages/ProductDetailPage';
import CollectionsPage from './pages/CollectionsPage';
import CollectionCategoryPage from './pages/CollectionCategoryPage';
import CartPage from './pages/CartPage';
import AboutPage from './pages/AboutPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import SizeGuidePage from './pages/SizeGuidePage';
import ReturnsPage from './pages/ReturnsPage';
import ShippingPage from './pages/ShippingPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import CarePage from './pages/CarePage';
import CustomRequestsPage from './pages/CustomRequestsPage';
import ScrollToTop from './components/ScrollToTop';
import { CartProvider } from './context/CartContext';
import { FilterProvider } from './context/FilterContext';

function AppWithRouter() {
  return (
    <Router>
      <CartProvider>
        <FilterProvider>
          <ScrollToTop />
          <Routes>
          <Route path="/" element={<AppPRD />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/collections/:category" element={<CollectionCategoryPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/size-guide" element={<SizeGuidePage />} />
          <Route path="/returns" element={<ReturnsPage />} />
          <Route path="/shipping" element={<ShippingPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/care" element={<CarePage />} />
          <Route path="/custom-requests" element={<CustomRequestsPage />} />
          <Route path="*" element={
            <div className="min-h-screen bg-parchment flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-6xl font-slab font-bold text-navy mb-4">404</h1>
                <p className="text-2xl text-copper mb-8">Page Not Found</p>
                <a href="/" className="inline-block px-8 py-3 bg-navy text-white font-slab rounded-full hover:bg-navy/80 transition-colors">
                  Return Home
                </a>
              </div>
            </div>
          } />
        </Routes>
        </FilterProvider>
      </CartProvider>
    </Router>
  );
}

export default AppWithRouter;