import React from 'react';
import { 
  Apple, 
  Tag, 
  MapPin, 
  ShoppingBag, 
  Users, 
  ShieldCheck 
} from 'lucide-react';
import { TRUST_VALUES } from '../data/supermarketData';

export const TrustValue: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Apple': return <Apple className="w-6 h-6 text-brand-600" />;
      case 'Tag': return <Tag className="w-6 h-6 text-amber-600" />;
      case 'MapPin': return <MapPin className="w-6 h-6 text-emerald-600" />;
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6 text-brand-700" />;
      case 'Users': return <Users className="w-6 h-6 text-orange-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-emerald-700" />;
      default: return <ShieldCheck className="w-6 h-6 text-brand-600" />;
    }
  };

  return (
    <section className="py-14 bg-white border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-700 bg-brand-100 px-3.5 py-1 rounded-full border border-brand-200">
            Why Shop At Vijay Supermarket
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-3 font-display">
            Built for Your Family's Everyday Shopping Needs
          </h2>
          <p className="text-sm text-slate-600 mt-2 font-medium">
            We take pride in providing a clean, friendly, and budget-smart supermarket experience right in your neighbourhood.
          </p>
        </div>

        {/* 6 Material 3 Expressive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRUST_VALUES.map((item) => (
            <div 
              key={item.id}
              className="p-6 bg-surface-soft hover:bg-white rounded-3xl border border-slate-200/80 shadow-m3-sm hover:shadow-m3-md transition-all duration-300 m3-card group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white group-hover:bg-brand-50 border border-slate-200/80 flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                  {getIcon(item.icon)}
                </div>
                <h3 className="text-lg font-black text-slate-900 group-hover:text-brand-800 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-brand-700">
                <span>Walk-in Store Guarantee</span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
