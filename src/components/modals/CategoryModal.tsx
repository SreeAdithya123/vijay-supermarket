import React from 'react';
import { X, CheckCircle2, MapPin, Store, Tag } from 'lucide-react';
import { Category, STORE_INFO } from '../../data/supermarketData';

interface CategoryModalProps {
  category: Category | null;
  onClose: () => void;
  onVisitStore: () => void;
}

export const CategoryModal: React.FC<CategoryModalProps> = ({ category, onClose, onVisitStore }) => {
  if (!category) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-brand-100 transition-all max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Banner Image */}
        <div className="relative h-48 bg-slate-900 overflow-hidden">
          <img 
            src={category.image} 
            alt={category.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-slate-950/50 hover:bg-slate-950/80 text-white rounded-full transition-colors backdrop-blur-md"
            aria-label="Close category info"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="inline-block px-3 py-1 bg-brand-500 text-white text-xs font-extrabold rounded-full shadow-md uppercase tracking-wider mb-2">
              {category.itemCount} In Store
            </span>
            <h3 className="text-2xl font-black text-white leading-tight">
              {category.name}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5">
          <p className="text-sm text-slate-600 leading-relaxed font-medium">
            {category.description}
          </p>

          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Popular Items Available In-Store</h4>
            <div className="grid grid-cols-2 gap-2.5">
              {category.featuredItems.map((item, idx) => (
                <div key={idx} className="p-3 bg-surface-soft rounded-xl border border-slate-200/80 flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
            <Store className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block">In-Store Walk-in Inventory</span>
              <span>
                Our entire stock of {category.name} is refreshed daily. Visit Vijay Supermarket at {STORE_INFO.landmark} for fresh availability and weekly discount offers!
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 px-6 border-t border-slate-100 bg-surface-soft flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onVisitStore();
            }}
            className="px-5 py-2.5 text-sm font-bold text-white bg-brand-600 hover:bg-brand-700 rounded-xl shadow-md transition-all flex items-center gap-2 m3-button-ripple"
          >
            <MapPin className="w-4 h-4" />
            Visit Store Aisle
          </button>
        </div>
      </div>
    </div>
  );
};
