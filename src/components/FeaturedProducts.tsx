import React, { useState } from 'react';
import { Search, Eye, MapPin, Tag, ShieldCheck, Info } from 'lucide-react';
import { FEATURED_PRODUCTS, Product } from '../data/supermarketData';
import { ProductModal } from './modals/ProductModal';

interface FeaturedProductsProps {
  onVisitStore: () => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ onVisitStore }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterCategories = ['All', 'Groceries & Staples', 'Fruits & Vegetables', 'Dairy & Bakery', 'Cleaning Products', 'Beverages & Drinks', 'Snacks & Namkeen'];

  const filteredProducts = FEATURED_PRODUCTS.filter((prod) => {
    const matchesCategory = activeCategory === 'All' || prod.category === activeCategory;
    const matchesSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          prod.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prod.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-16 bg-white border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-700 bg-brand-100 px-3.5 py-1 rounded-full border border-brand-200">
            In-Store Product Showcase
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-3 font-display">
            Everyday Essentials & Fresh Items
          </h2>
          <p className="text-sm text-slate-600 mt-2 font-medium">
            Browse examples of our quality products and MRP savings available when you walk into Vijay Supermarket.
          </p>
        </div>

        {/* Informational Disclaimer Banner */}
        <div className="mb-8 p-3.5 bg-brand-50/70 border border-brand-200 rounded-2xl flex flex-wrap items-center justify-between gap-3 text-xs text-brand-900 max-w-4xl mx-auto">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-brand-600 flex-shrink-0" />
            <span className="font-semibold">
              <strong>Walk-in Store Catalogue:</strong> Products are displayed for price reference and shelf availability. No online checkout required.
            </span>
          </div>
          <button 
            onClick={onVisitStore}
            className="text-brand-800 hover:text-brand-950 font-bold underline text-xs"
          >
            Find Store Location →
          </button>
        </div>

        {/* Filters & Search */}
        <div className="space-y-4 mb-8">
          {/* Search bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search rice, oil, milk, apples, detergent..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 bg-surface-soft focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-sm outline-none transition-all shadow-sm"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-brand-600 text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12 bg-slate-50 rounded-3xl border border-slate-200 max-w-lg mx-auto">
            <p className="text-sm font-bold text-slate-600">No products matching "{searchQuery}"</p>
            <p className="text-xs text-slate-400 mt-1">Try searching for rice, milk, flour, or oil</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
              className="mt-4 px-4 py-2 bg-brand-600 text-white text-xs font-bold rounded-xl"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-m3-sm hover:shadow-m3-md transition-all duration-300 flex flex-col justify-between group m3-card"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-48 bg-slate-100 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Discount badge */}
                    {product.discountBadge && (
                      <span className="absolute top-3 left-3 bg-amber-400 text-slate-950 text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-md">
                        {product.discountBadge}
                      </span>
                    )}

                    {/* In store badge */}
                    <span className="absolute bottom-3 right-3 bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-semibold px-2 py-0.5 rounded-md">
                      {product.unit}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-2">
                    <span className="text-[10px] font-extrabold uppercase text-brand-700 tracking-wider">
                      {product.category}
                    </span>
                    <h3 className="text-base font-extrabold text-slate-900 group-hover:text-brand-800 transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Price display */}
                    <div className="pt-3 flex items-baseline justify-between border-t border-slate-100">
                      <div>
                        <span className="text-[10px] text-slate-400 font-bold uppercase block">In-Store MRP</span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-lg font-black text-brand-800">{product.price}</span>
                          {product.originalPrice && (
                            <span className="text-xs text-slate-400 line-through font-semibold">
                              {product.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>

                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        In Stock
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Action CTA */}
                <div className="p-5 pt-0">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="w-full py-2.5 px-4 bg-surface-soft hover:bg-brand-600 text-slate-800 hover:text-white rounded-2xl text-xs font-extrabold transition-all flex items-center justify-center gap-2 border border-slate-200 hover:border-brand-600 shadow-sm"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Product Details</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onVisitStore={onVisitStore}
      />
    </section>
  );
};
