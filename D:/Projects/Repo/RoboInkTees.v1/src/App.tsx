import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryShowcase from './components/CategoryShowcase';
import ProductCollection from './components/ProductCollection';
import FeaturedSection from './components/FeaturedSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <FeaturedSection />
        <Hero />
        <CategoryShowcase />
        <ProductCollection />
      </main>
      <Footer />
    </div>
  );
}

export default App;