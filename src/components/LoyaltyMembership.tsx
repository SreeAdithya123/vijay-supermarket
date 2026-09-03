import React from 'react';
import { CreditCard, Sparkles, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { LOYALTY_TIERS } from '../data/supermarketData';

interface LoyaltyMembershipProps {
  onOpenMembershipModal: () => void;
}

export const LoyaltyMembership: React.FC<LoyaltyMembershipProps> = ({ onOpenMembershipModal }) => {
  return (
    <section className="py-16 bg-surface-cream border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-900 bg-amber-200 px-3.5 py-1 rounded-full border border-amber-300">
            Vijay Supermarket Family Club
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-3 font-display">
            Every Visit Should Feel More Valuable.
          </h2>
          <p className="text-sm text-slate-600 mt-2 font-medium">
            Join thousands of local families saving on every monthly grocery bill with our Vijay Family Loyalty Card.
          </p>
        </div>

        {/* 3 Loyalty Card Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {LOYALTY_TIERS.map((tier, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-3xl p-6 border shadow-m3-sm hover:shadow-m3-md transition-all duration-300 flex flex-col justify-between group m3-card ${
                idx === 1 ? 'ring-2 ring-brand-500 border-brand-300 relative' : 'border-slate-200/80'
              }`}
            >
              {idx === 1 && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-600 text-white text-[10px] font-black uppercase tracking-wider px-3 py-0.5 rounded-full shadow-sm">
                  Most Popular For Families
                </span>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-full border ${tier.badgeColor}`}>
                    {tier.name}
                  </span>
                  <CreditCard className="w-6 h-6 text-brand-600" />
                </div>

                <h3 className="text-lg font-black text-slate-900">{tier.name}</h3>
                <p className="text-xs text-brand-800 font-extrabold mt-1">{tier.pointsRate}</p>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">Min spend: {tier.minMonthlySpend}</p>

                <div className="my-5 border-t border-slate-100 pt-4 space-y-2.5">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Card Member Benefits:</span>
                  {tier.perks.map((perk, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={onOpenMembershipModal}
                className={`w-full py-2.5 px-4 rounded-2xl text-xs font-extrabold transition-all flex items-center justify-center gap-2 ${
                  idx === 1
                    ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-md'
                    : 'bg-surface-soft hover:bg-slate-200 text-slate-800 border border-slate-200'
                }`}
              >
                <span>Ask About Membership</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="p-6 bg-white rounded-3xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm max-w-4xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center flex-shrink-0 font-bold border border-amber-200">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-slate-900">Physical Cards Issued Instantly at Counter</h4>
              <p className="text-xs text-slate-600 mt-0.5">No complicated mobile app downloads required. Collect your card in 2 minutes!</p>
            </div>
          </div>
          <button
            onClick={onOpenMembershipModal}
            className="px-5 py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-2xl text-xs font-extrabold whitespace-nowrap shadow transition-all m3-button-ripple"
          >
            Inquire Card Now
          </button>
        </div>
      </div>
    </section>
  );
};
