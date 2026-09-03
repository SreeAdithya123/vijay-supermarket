import React, { useState } from 'react';
import { Maximize2, Camera } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/supermarketData';
import { LightboxModal } from './modals/LightboxModal';

export const StoreGallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'exterior', label: 'Store Exterior' },
    { id: 'interior', label: 'Interior Aisles' },
    { id: 'produce', label: 'Fresh Produce' },
    { id: 'staff', label: 'Store Staff' },
  ];

  const filteredItems = GALLERY_ITEMS.filter(
    item => activeCategory === 'all' || item.category === activeCategory
  );

  return (
    <section id="gallery" className="py-16 bg-white border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-700 bg-brand-100 px-3.5 py-1 rounded-full border border-brand-200">
            A Glimpse Inside Vijay Supermarket
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-3 font-display">
            Our Store Gallery & Facilities
          </h2>
          <p className="text-sm text-slate-600 mt-2 font-medium">
            Take a visual tour of our clean, well-lit, spacious shopping aisles and fresh produce counters.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-brand-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-m3-sm hover:shadow-m3-lg transition-all duration-500 cursor-pointer h-64 flex flex-col justify-end"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Hover overlay button */}
              <div className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-md text-slate-900 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Caption details */}
              <div className="relative z-10 p-5">
                <span className="text-[10px] font-extrabold uppercase text-amber-300 tracking-wider block mb-1">
                  {item.category}
                </span>
                <h3 className="text-sm font-extrabold text-white leading-snug">
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-300 line-clamp-1 mt-1 opacity-90 font-medium">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={selectedItem}
        items={filteredItems}
        onClose={() => setSelectedItem(null)}
        onSelect={(item) => setSelectedItem(item)}
      />
    </section>
  );
};
