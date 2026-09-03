import React from 'react';
import { X, Tag, Calendar, ShieldCheck, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { Offer, STORE_INFO } from '../../data/supermarketData';

interface OfferModalProps {
  offer: Offer | null;
  onClose: () => void;
  onClaimOffer: () => void;
}

export const OfferModal: React.FC<OfferModalProps> = ({ offer, onClose, onClaimOffer }) => {
  if (!offer) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-brand-100 transition-all max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Banner Image with Overlay */}
        <div className="relative h-48 sm:h-56 bg-slate-900 overflow-hidden">
          <img 
            src={offer.image} 
            alt={offer.title} 
            className="w-full h-full object-cover opacity-80"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${offer.bannerBg} opacity-85 mix-blend-multiply`} />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-slate-950/50 hover:bg-slate-950/80 text-white rounded-full transition-colors backdrop-blur-md"
            aria-label="Close offer details"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-400 text-slate-950 text-xs font-extrabold rounded-full shadow-md uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              {offer.discount}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
              {offer.title}
            </h3>
          </div>
        </div>

        {/* Offer Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 pb-3 border-b border-slate-100">
            <div className="flex items-center gap-1.5 text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
              <Tag className="w-3.5 h-3.5" />
              <span>{offer.category}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
              <Calendar className="w-3.5 h-3.5 text-brand-600" />
              <span>{offer.validity}</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Offer Details</h4>
            <p className="text-sm text-slate-700 leading-relaxed font-medium">
              {offer.description}
            </p>
          </div>

          {/* Terms & Conditions */}
          {offer.terms && offer.terms.length > 0 && (
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-600" />
                How to Redeem at Store
              </h4>
              <ul className="space-y-1.5">
                {offer.terms.map((term, idx) => (
                  <li key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 flex-shrink-0 mt-0.5" />
                    <span>{term}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Store Location Reminder */}
          <div className="p-3 bg-brand-50/60 rounded-xl border border-brand-200 flex items-center justify-between">
            <div className="text-xs text-brand-900">
              <span className="font-bold block">Redeemable In-Store</span>
              <span className="text-brand-700">{STORE_INFO.address.slice(0, 45)}...</span>
            </div>
            <MapPin className="w-5 h-5 text-brand-600 flex-shrink-0" />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 px-6 border-t border-slate-100 bg-surface-soft flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-slate-900 rounded-xl transition-colors"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onClaimOffer();
            }}
            className="px-5 py-2.5 text-sm font-bold text-white bg-brand-600 hover:bg-brand-700 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 m3-button-ripple"
          >
            <MapPin className="w-4 h-4" />
            Get Store Directions for Offer
          </button>
        </div>
      </div>
    </div>
  );
};
