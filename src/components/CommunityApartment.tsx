import React from 'react';
import { Building2, Heart, ShieldCheck, Gift, Users, MessageSquare, ArrowRight } from 'lucide-react';
import { STORE_INFO } from '../data/supermarketData';

interface CommunityApartmentProps {
  onOpenContact: () => void;
}

export const CommunityApartment: React.FC<CommunityApartmentProps> = ({ onOpenContact }) => {
  const apartmentPartnerships = [
    { name: "Green View Apartments", discount: "5% Resident Benefit", distance: "200m away" },
    { name: "Oakwood Heights Society", discount: "Special Monthly Pass", distance: "400m away" },
    { name: "Sunshine Colony Residents", discount: "Weekend Bulk Deals", distance: "600m away" },
    { name: "Landmark Residency", discount: "Free Door Carrying", distance: "300m away" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-950 text-white relative overflow-hidden">
      {/* Decorative radial glows */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-brand-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left info column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/30">
              <Building2 className="w-4 h-4 text-amber-400" />
              <span>Neighbourhood & Society Privileges</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight font-display">
              Your Neighbourhood Supermarket
            </h2>

            <p className="text-base text-brand-100 font-medium leading-relaxed max-w-2xl">
              Conveniently serving families and residential communities around Vijay Supermarket with exclusive society privileges, bulk family deals, and festive community hampers.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="p-2 bg-amber-400 text-slate-950 rounded-xl font-bold">
                    <Gift className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white">Apartment Society Discounts</h4>
                </div>
                <p className="text-xs text-brand-200 leading-relaxed">
                  Special bulk bill reductions for residents of registered nearby apartment complexes.
                </p>
              </div>

              <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="p-2 bg-brand-400 text-slate-950 rounded-xl font-bold">
                    <Heart className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white">Senior Citizen Priority</h4>
                </div>
                <p className="text-xs text-brand-200 leading-relaxed">
                  Free assistance carrying heavy rice sacks & oil tins right to your apartment vehicle.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenContact}
                className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs sm:text-sm font-black rounded-2xl shadow-lg transition-all flex items-center gap-2.5 m3-button-ripple"
              >
                <Users className="w-4 h-4" />
                <span>Contact Us for Community Offers</span>
              </button>

              <a
                href={`https://wa.me/${STORE_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold rounded-2xl border border-white/20 backdrop-blur-md transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Community Desk</span>
              </a>
            </div>
          </div>

          {/* Right Cards Showcase */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-2xl">
              <h3 className="text-sm font-bold text-amber-300 uppercase tracking-wider mb-4 flex items-center justify-between">
                <span>Nearby Partner Communities</span>
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
              </h3>

              <div className="space-y-3">
                {apartmentPartnerships.map((partner, i) => (
                  <div key={i} className="p-3.5 bg-slate-950/40 rounded-2xl border border-white/10 flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-white">{partner.name}</h4>
                      <p className="text-[10px] text-brand-300 font-medium">{partner.distance}</p>
                    </div>
                    <span className="text-[11px] font-black text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/30">
                      {partner.discount}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-brand-200 mt-4 text-center font-medium">
                Want Vijay Supermarket to partner with your apartment association? Click above to inquire!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
