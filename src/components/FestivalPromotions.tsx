import React, { useState } from 'react';
import { Sparkles, Calendar, Tag, ArrowRight, Gift } from 'lucide-react';
import { FESTIVAL_CAMPAIGNS } from '../data/supermarketData';

interface FestivalPromotionsProps {
  onNavigateOffers: () => void;
}

export const FestivalPromotions: React.FC<FestivalPromotionsProps> = ({ onNavigateOffers }) => {
  const [selectedFestivalId, setSelectedFestivalId] = useState<string>(FESTIVAL_CAMPAIGNS[0].id);

  const activeCampaign = FESTIVAL_CAMPAIGNS.find(f => f.id === selectedFestivalId) || FESTIVAL_CAMPAIGNS[0];

  return (
    <section className="py-16 bg-white border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-900 bg-amber-200 px-3.5 py-1 rounded-full border border-amber-300">
            Festive Celebrations & Seasons
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-3 font-display">
            Festival & Seasonal Grocery Specials
          </h2>
          <p className="text-sm text-slate-600 mt-2 font-medium">
            From Sankranti and Ugadi to Diwali and Christmas, Vijay Supermarket brings special festive hampers and bulk discounts to your family.
          </p>
        </div>

        {/* Festival Tabs Switcher */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {FESTIVAL_CAMPAIGNS.map((fest) => (
            <button
              key={fest.id}
              onClick={() => setSelectedFestivalId(fest.id)}
              className={`px-4 py-2.5 rounded-2xl text-xs font-extrabold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                selectedFestivalId === fest.id
                  ? 'bg-brand-900 text-amber-300 shadow-md border border-amber-400/40'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              <Gift className={`w-3.5 h-3.5 ${selectedFestivalId === fest.id ? 'text-amber-400' : 'text-slate-500'}`} />
              <span>{fest.name}</span>
            </button>
          ))}
        </div>

        {/* Active Festival Feature Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-slate-950 text-white shadow-2xl border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[380px]">
            {/* Left Banner Content */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-6 relative z-10">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-amber-400 text-slate-950 text-xs font-black rounded-full uppercase tracking-wider">
                    {activeCampaign.season}
                  </span>
                  <span className="text-xs text-brand-300 font-bold flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    {activeCampaign.discountHighlight}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight font-display">
                  {activeCampaign.headline}
                </h3>

                <p className="text-sm text-slate-300 font-medium leading-relaxed max-w-xl">
                  {activeCampaign.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-slate-400">
                  <span className="font-bold text-white block">In-Store Festive Stalls</span>
                  <span>Available at Vijay Supermarket Entrance</span>
                </div>

                <button
                  onClick={onNavigateOffers}
                  className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-black rounded-2xl shadow-lg transition-all flex items-center gap-2 m3-button-ripple"
                >
                  <span>Explore This Month's Offers</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Banner Image */}
            <div className="lg:col-span-5 relative h-64 lg:h-auto overflow-hidden">
              <img
                src={activeCampaign.image}
                alt={activeCampaign.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
