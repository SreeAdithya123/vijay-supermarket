import React, { useState } from 'react';
import { ArrowRight, Grid, Store, CheckCircle2 } from 'lucide-react';
import { CATEGORIES, Category } from '../data/supermarketData';
import { CategoryModal } from './modals/CategoryModal';

interface CategoriesProps {
  onVisitStore: () => void;
}

export const Categories: React.FC<CategoriesProps> = ({ onVisitStore }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  return (
    <section id="categories" className="py-16 bg-surface-cream border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-700 bg-brand-100 px-3.5 py-1 rounded-full border border-brand-200">
              Explore Our Aisles
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-3 font-display">
              12 Product Categories In-Store
            </h2>
            <p className="text-sm text-slate-600 mt-1 font-medium max-w-xl">
              From morning farm produce to evening snacks and household staples, explore everything available under one roof.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 bg-white px-4 py-2 rounded-2xl border border-slate-200 shadow-sm self-start md:self-auto">
            <Store className="w-4 h-4 text-brand-600" />
            <span>Informational Showcase • Available for Walk-in Shopping</span>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-m3-sm hover:shadow-m3-lg transition-all duration-300 flex flex-col justify-between group m3-card"
            >
              {/* Category Image Header */}
              <div className="relative h-44 overflow-hidden bg-slate-100">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <span className="absolute top-3 right-3 bg-brand-950/80 backdrop-blur-md text-brand-300 text-[11px] font-bold px-2.5 py-1 rounded-full border border-brand-800">
                  {cat.itemCount}
                </span>
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="text-lg font-extrabold text-white leading-snug">
                    {cat.name}
                  </h3>
                </div>
              </div>

              {/* Category Description & Teaser */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  {cat.description}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Featured Brands & Staples:</span>
                  <div className="flex flex-wrap gap-1">
                    {cat.featuredItems.slice(0, 3).map((item, idx) => (
                      <span key={idx} className="text-[10px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedCategory(cat)}
                  className="w-full py-2.5 px-4 bg-brand-50 hover:bg-brand-600 text-brand-800 hover:text-white rounded-2xl text-xs font-bold transition-all flex items-center justify-center gap-2 border border-brand-200 hover:border-brand-600 shadow-sm"
                >
                  <span>Browse Category</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category Modal */}
      <CategoryModal
        category={selectedCategory}
        onClose={() => setSelectedCategory(null)}
        onVisitStore={onVisitStore}
      />
    </section>
  );
};
