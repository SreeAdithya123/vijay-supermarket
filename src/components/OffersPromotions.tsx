import React, { useState } from 'react';
import { Tag, Calendar, Sparkles, MapPin, ArrowRight } from 'lucide-react';
import { OFFERS, Offer } from '../data/supermarketData';
import { OfferModal } from './modals/OfferModal';

interface OffersPromotionsProps {
  onVisitStore: () => void;
}

export const OffersPromotions: React.FC<OffersPromotionsProps> = ({ onVisitStore }) => {
  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);
  const [activeTab, setActiveTab] = useState<string>('All');

  const tabs = ['All', 'Weekend Specials', 'Apartment Community Offers', 'Fresh Produce Specials', 'Family Grocery Deals', 'Festival Offers'];

  const filteredOffers = OFFERS.filter(off => activeTab === 'All' || off.category === activeTab);

  return (
    <section id="offers" className="py-16 bg-surface-cream border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-900 bg-amber-200 px-3.5 py-1 rounded-full border border-amber-300">
            Store Promotions & Discounts
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-3 font-display">
            Special Deals & Community Savings
          </h2>
          <p className="text-sm text-slate-600 mt-2 font-medium">
            Save big on your monthly family budget with Vijay Supermarket's exclusive in-store promotional campaigns.
          </p>
        </div>

        {/* Tab Filter */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                activeTab === tab
                  ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOffers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-m3-sm hover:shadow-m3-lg transition-all duration-300 flex flex-col justify-between group m3-card"
            >
              {/* Image & Gradient Banner Header */}
              <div className="relative h-48 overflow-hidden bg-slate-900">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${offer.bannerBg} opacity-85 mix-blend-multiply`} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                <span className="absolute top-3 left-3 bg-amber-400 text-slate-950 text-xs font-black px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  {offer.discount}
                </span>

                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[10px] font-bold text-amber-200 uppercase tracking-widest block mb-1">
                    {offer.category}
                  </span>
                  <h3 className="text-lg font-extrabold text-white leading-snug">
                    {offer.title}
                  </h3>
                </div>
              </div>

              {/* Offer Info */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {offer.description}
                </p>

                <div className="flex items-center gap-2 text-xs font-semibold text-brand-800 bg-brand-50 p-2.5 rounded-xl border border-brand-200">
                  <Calendar className="w-4 h-4 text-brand-600 flex-shrink-0" />
                  <span>{offer.validity}</span>
                </div>

                <button
                  onClick={() => setSelectedOffer(offer)}
                  className="w-full py-2.5 px-4 bg-brand-600 hover:bg-brand-700 text-white rounded-2xl text-xs font-extrabold transition-all flex items-center justify-center gap-2 shadow-sm m3-button-ripple"
                >
                  <span>View Offer Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Offer Detail Modal */}
      <OfferModal
        offer={selectedOffer}
        onClose={() => setSelectedOffer(null)}
        onClaimOffer={onVisitStore}
      />
    </section>
  );
};
