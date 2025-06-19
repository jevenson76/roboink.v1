import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star, Cog } from 'lucide-react';

interface ProductCardPRDProps {
  id: number;
  title: string;
  price: number;
  image: string;
  rating?: number;
  reviewCount?: number;
}

const ProductCardPRD: React.FC<ProductCardPRDProps> = ({ id, title, price, image, rating, reviewCount }) => {
  return (
    <div className="group bg-parchment border border-navy rounded-lg overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      <Link to={`/product/${id}`} className="block flex-1 flex flex-col">
        {/* Product Image */}
        <div className="aspect-square overflow-hidden bg-parchment">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {/* Product Info */}
        <div className="p-4 border-t border-navy flex-1 flex flex-col transition-colors duration-300 group-hover:bg-gradient-to-t from-copper/20 to-parchment">
          <h3 className="text-lg font-slab font-semibold text-navy mb-2 line-clamp-2 flex-1">
            {title}
          </h3>
        
          {/* Star Rating */}
          {rating && (
            <div className="flex items-center gap-1 mb-3">
              {[1, 2, 3, 4, 5].map((star) => {
                const filled = star <= Math.round(rating);
                return (
                  <Star 
                    key={star}
                    className={`w-4 h-4 ${filled ? 'text-copper fill-copper' : 'text-navy/30 fill-navy/30'}`}
                  />
                );
              })}
              {reviewCount !== undefined && (
                <span className="text-sm text-navy/60 ml-1">
                  ({reviewCount})
                </span>
              )}
            </div>
          )}
        </div>
      </Link>
      
      {/* Price and Cart Button - Always at bottom */}
      <div className="px-4 pb-4">
        <div className="flex items-center justify-between">
          <p className="text-2xl font-slab font-bold text-navy">
            ${price.toFixed(2)}
          </p>
          
          <button className="group p-3 bg-transparent border-2 border-navy rounded-full text-navy hover:bg-navy hover:text-parchment hover:scale-110 transition-all duration-300 relative overflow-hidden">
            <ShoppingCart className="w-5 h-5 transition-opacity duration-300 group-hover:opacity-0" />
            <Cog className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-spin" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardPRD;