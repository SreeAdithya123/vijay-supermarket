import React from 'react';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { GalleryItem, STORE_INFO } from '../../data/supermarketData';

interface LightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, items, onClose, onSelect }) => {
  if (!item) return null;

  const currentIndex = items.findIndex(i => i.id === item.id);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIdx = (currentIndex - 1 + items.length) % items.length;
    onSelect(items[prevIdx]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIdx = (currentIndex + 1) % items.length;
    onSelect(items[nextIdx]);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-brand-600 text-white text-xs font-bold rounded-full uppercase tracking-wider">
              {item.category}
            </span>
            <span className="text-xs text-slate-400 font-medium">
              Photo {currentIndex + 1} of {items.length}
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Main Display */}
        <div className="relative flex-1 bg-black flex items-center justify-center min-h-[300px] max-h-[65vh] overflow-hidden">
          <img 
            src={item.image} 
            alt={item.title} 
            className="max-h-[60vh] max-w-full object-contain transition-all duration-300"
          />

          {/* Navigation Controls */}
          {items.length > 1 && (
            <>
              <button 
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-slate-950/60 hover:bg-brand-600 text-white rounded-full transition-colors border border-slate-700/50 backdrop-blur-md"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-slate-950/60 hover:bg-brand-600 text-white rounded-full transition-colors border border-slate-700/50 backdrop-blur-md"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {/* Caption & Location footer */}
        <div className="p-6 bg-slate-900 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-white">{item.title}</h3>
            <p className="text-xs text-slate-400 mt-1">{item.caption}</p>
          </div>
          <a
            href={STORE_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold rounded-xl flex items-center gap-2 transition-all"
          >
            <MapPin className="w-4 h-4" />
            Visit Vijay Supermarket
          </a>
        </div>
      </div>
    </div>
  );
};
