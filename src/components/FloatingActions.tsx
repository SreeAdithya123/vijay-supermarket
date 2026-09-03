import React from 'react';
import { MapPin, PhoneCall, MessageSquare } from 'lucide-react';
import { STORE_INFO } from '../data/supermarketData';

export const FloatingActions: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2.5 items-end">
      {/* WhatsApp FAB */}
      <a
        href={`https://wa.me/${STORE_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-xl hover:scale-110 transition-all flex items-center justify-center border border-emerald-400 group"
        title="WhatsApp Vijay Supermarket"
        aria-label="WhatsApp Store"
      >
        <MessageSquare className="w-5 h-5" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap text-xs font-bold pl-0 group-hover:pl-2">
          WhatsApp Store
        </span>
      </a>

      {/* Direct Directions FAB */}
      <a
        href={STORE_INFO.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-full shadow-2xl hover:scale-105 transition-all flex items-center gap-2 border border-brand-400 font-extrabold text-xs m3-button-ripple"
        title="Get Store Directions"
      >
        <MapPin className="w-4 h-4 text-amber-300" />
        <span className="hidden sm:inline">Directions</span>
      </a>
    </div>
  );
};
