import React from 'react';
import { Link } from 'react-router-dom';
import { Cog, Zap, Clock, Palette } from 'lucide-react';

const ValueSection: React.FC = () => {
  return (
    <div className="py-6 relative z-10" style={{ backgroundColor: 'rgba(245, 238, 211, 0.95)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-slab font-bold text-navy mb-4" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
            Why Choose RoboInkTees?
          </h2>
          <p className="text-base md:text-lg text-copper font-slab font-semibold max-w-3xl mx-auto">
            Our unique blend of Victorian aesthetics and cutting-edge AI technology creates wearable art that stands the test of time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {/* Feature 1 */}
          <div className="bg-navy p-6 rounded-lg border-2 border-copper/40 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(184,115,51,0.3)] relative z-10">
            <div className="w-12 h-12 bg-copper/20 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Cog className="h-7 w-7 text-copper" />
            </div>
            <h3 className="text-lg font-slab font-bold text-parchment text-center mb-2">Precision Engineering</h3>
            <p className="text-sm text-parchment/80 text-center leading-relaxed">
              Each design is meticulously crafted with attention to every gear, cog, and mechanical detail.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-navy p-6 rounded-lg border-2 border-copper/40 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(184,115,51,0.3)] relative z-10">
            <div className="w-12 h-12 bg-copper/20 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Zap className="h-7 w-7 text-copper" />
            </div>
            <h3 className="text-lg font-slab font-bold text-parchment text-center mb-2">AI-Powered Designs</h3>
            <p className="text-sm text-parchment/80 text-center leading-relaxed">
              Our proprietary algorithms generate unique steampunk patterns that are truly one-of-a-kind.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-navy p-6 rounded-lg border-2 border-copper/40 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(184,115,51,0.3)] relative z-10">
            <div className="w-12 h-12 bg-copper/20 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Clock className="h-7 w-7 text-copper" />
            </div>
            <h3 className="text-lg font-slab font-bold text-parchment text-center mb-2">Timeless Quality</h3>
            <p className="text-sm text-parchment/80 text-center leading-relaxed">
              Premium materials and printing techniques ensure your garments last for years to come.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-navy p-6 rounded-lg border-2 border-copper/40 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(184,115,51,0.3)] relative z-10">
            <div className="w-12 h-12 bg-copper/20 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Palette className="h-7 w-7 text-copper" />
            </div>
            <h3 className="text-lg font-slab font-bold text-parchment text-center mb-2">Custom Creations</h3>
            <p className="text-sm text-parchment/80 text-center leading-relaxed">
              Request personalized designs that blend your ideas with our steampunk aesthetic.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center relative z-10">
          <Link 
            to="/faq#process" 
            className="inline-block px-8 py-3 bg-navy text-parchment rounded-full font-slab font-semibold text-base transition-all duration-300 hover:bg-copper hover:text-navy hover:shadow-lg transform hover:-translate-y-1 border-2 border-navy"
          >
            Discover Our Process
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ValueSection;