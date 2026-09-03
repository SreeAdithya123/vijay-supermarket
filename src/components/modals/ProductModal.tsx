import React from 'react';
import { X, MapPin, CheckCircle, Store, ShieldCheck, Tag, Info } from 'lucide-react';
import { Product, STORE_INFO } from '../../data/supermarketData';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onVisitStore: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onVisitStore }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-brand-100 transition-all max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-surface-soft">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 text-xs font-semibold text-brand-800 bg-brand-100 rounded-full border border-brand-200">
              {product.category}
            </span>
            {product.discountBadge && (
              <span className="px-3 py-1 text-xs font-bold text-amber-900 bg-amber-200 rounded-full">
                {product.discountBadge}
              </span>
            )}
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/50 rounded-full transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Product Image */}
            <div className="relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 aspect-square group">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute top-3 left-3 bg-brand-950/80 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                <CheckCircle className="w-3.5 h-3.5 text-brand-400" />
                Available In Store
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 leading-tight">
                  {product.name}
                </h3>
                <p className="text-sm text-slate-500 font-medium mt-1">Pack Size: {product.unit}</p>
              </div>

              {/* Price Tag */}
              <div className="p-4 bg-brand-50/70 border border-brand-200/80 rounded-2xl flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-brand-800 font-semibold uppercase tracking-wider block">In-Store MRP Price</span>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="text-2xl font-black text-brand-800">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm font-semibold text-slate-400 line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full border border-emerald-200">
                    Stock Ready
                  </span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Product Description</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Store Aisle Info */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-brand-600 flex-shrink-0" />
                <div>
                  <span className="text-xs text-slate-400 font-medium">Store Shelf Location</span>
                  <p className="text-xs font-bold text-slate-800">{product.aisle}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights */}
          {product.highlights && product.highlights.length > 0 && (
            <div className="pt-4 border-t border-slate-100">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Quality Assurance</h4>
              <div className="flex flex-wrap gap-2">
                {product.highlights.map((h, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
                    {h}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* In-Store Notice Banner */}
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-3">
            <Info className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
            <div className="text-xs text-amber-900 space-y-1">
              <p className="font-bold">Walk-in Store Product Showcase</p>
              <p>
                Vijay Supermarket operates as a physical walk-in store to guarantee fresh products and personal community service. Visit us today at {STORE_INFO.landmark} to pick up this product!
              </p>
            </div>
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="p-4 px-6 border-t border-slate-100 bg-surface-soft flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-500 flex items-center gap-1.5">
            <Store className="w-4 h-4 text-brand-600" />
            <span>Open Today 7:00 AM – 10:00 PM</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-slate-900 rounded-xl transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onVisitStore();
              }}
              className="px-5 py-2.5 text-sm font-bold text-white bg-brand-600 hover:bg-brand-700 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 m3-button-ripple"
            >
              <MapPin className="w-4 h-4" />
              Visit Store to Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
