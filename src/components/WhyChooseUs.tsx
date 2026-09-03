import React from 'react';
import { 
  ShieldCheck, 
  Tag, 
  MapPin, 
  ShoppingBag, 
  HeartHandshake, 
  Clock, 
  Sparkles, 
  Building2 
} from 'lucide-react';
import { WHY_CHOOSE_US, STORE_INFO } from '../data/supermarketData';

export const WhyChooseUs: React.FC = () => {
  const highlights = [
    { title: "Quality Products", icon: ShieldCheck, desc: "Rigorous quality inspection for all grains, packaged goods, and fresh produce." },
    { title: "Competitive Prices", icon: Tag, desc: "Guaranteed MRP discounts and price-match guarantee against big box stores." },
    { title: "Convenient Location", icon: MapPin, desc: "Located right on Velachery Main Road with wide entrance and dedicated parking." },
    { title: "Wide Product Selection", icon: ShoppingBag, desc: "Over 5,000+ items covering local South Indian specialties to national brands." },
    { title: "Fresh Daily Essentials", icon: Clock, desc: "Fresh milk, curd, paneer, and farm vegetables replenished every day at 7:00 AM." },
    { title: "Family-Friendly Shopping", icon: HeartHandshake, desc: "Wide clean air-conditioned aisles designed for pram and trolley convenience." },
    { title: "Regular Offers", icon: Sparkles, desc: "Weekly weekend bonanzas, festival combos, and seasonal discount hampers." },
    { title: "Local Community Support", icon: Building2, desc: "Dedicated discounts and priority service for surrounding residential societies." }
  ];

  return (
    <section id="why-us" className="py-16 bg-white border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-700 bg-brand-100 px-3.5 py-1 rounded-full border border-brand-200">
            Our Supermarket Standards
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-3 font-display">
            Why Choose Vijay Supermarket?
          </h2>
          <p className="text-sm text-slate-600 mt-2 font-medium">
            We combine modern supermarket convenience with warm neighbourhood trust to make every shopping trip effortless.
          </p>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-surface-soft hover:bg-white rounded-3xl border border-slate-200/80 shadow-m3-sm hover:shadow-m3-md transition-all duration-300 group m3-card flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white group-hover:bg-brand-600 group-hover:text-white text-brand-700 border border-slate-200/80 flex items-center justify-center mb-4 shadow-sm transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 group-hover:text-brand-800 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-slate-400">
                  <span>Standard #0{idx + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
