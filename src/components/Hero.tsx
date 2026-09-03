import React from 'react';
import { 
  MapPin, 
  Tag, 
  PhoneCall, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  ShoppingBag, 
  CheckCircle2,
  ArrowRight,
  Store
} from 'lucide-react';
import { STORE_INFO } from '../data/supermarketData';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-surface-mint via-surface-cream to-white pt-6 pb-16 lg:py-20 border-b border-slate-100">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-200/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-amber-200/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Live Store Hours & Location Badge */}
        <div className="inline-flex flex-wrap items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full border border-brand-200/80 shadow-sm text-xs font-bold text-slate-700 mb-6">
          <span className="flex items-center gap-1.5 text-emerald-700 font-extrabold bg-emerald-100 px-2.5 py-0.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            OPEN TODAY
          </span>
          <span className="text-slate-400">•</span>
          <span className="flex items-center gap-1 text-slate-700">
            <Clock className="w-3.5 h-3.5 text-brand-600" />
            {STORE_INFO.hours}
          </span>
          <span className="text-slate-400 hidden sm:inline">•</span>
          <span className="hidden sm:flex items-center gap-1 text-brand-800">
            <MapPin className="w-3.5 h-3.5 text-brand-600" />
            {STORE_INFO.landmark}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Content Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-extrabold border border-amber-300">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Your Trusted Local Neighbourhood Supermarket</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.15] tracking-tight font-display">
              Fresh Groceries. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-brand-700 to-emerald-800">
                Better Value.
              </span> <br />
              Right Around the Corner.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl">
              {STORE_INFO.subtitle}
            </p>

            {/* Three CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Primary CTA */}
              <a
                href={STORE_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 text-sm sm:text-base font-extrabold text-white bg-brand-600 hover:bg-brand-700 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-2.5 m3-button-ripple"
              >
                <MapPin className="w-5 h-5 text-amber-300" />
                <span>Visit Our Store</span>
              </a>

              {/* Secondary CTA */}
              <button
                onClick={() => onNavigate('offers')}
                className="px-6 py-3.5 text-sm sm:text-base font-bold text-brand-900 bg-brand-100/90 hover:bg-brand-200/90 rounded-2xl border border-brand-300 shadow-sm hover:shadow transition-all flex items-center gap-2"
              >
                <Tag className="w-4 h-4 text-brand-700" />
                <span>Explore Offers</span>
              </button>

              {/* Additional CTA */}
              <a
                href={`tel:${STORE_INFO.phone.replace(/\s+/g, '')}`}
                className="px-5 py-3.5 text-sm sm:text-base font-bold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 rounded-2xl border border-slate-300 shadow-sm transition-all flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-brand-600" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Trust Indicator Pills */}
            <div className="pt-6 border-t border-slate-200/70 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0" />
                <span className="text-xs font-bold text-slate-700">100% Farm Fresh</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0" />
                <span className="text-xs font-bold text-slate-700">Best MRP Savings</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0" />
                <span className="text-xs font-bold text-slate-700">10+ Years Trust</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0" />
                <span className="text-xs font-bold text-slate-700">Ample Parking</span>
              </div>
            </div>
          </div>

          {/* Right Hero Media Column */}
          <div className="lg:col-span-5 relative">
            {/* Main Visual Showcase Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=80" 
                alt="Vijay Supermarket Fresh Groceries" 
                className="w-full h-[380px] sm:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

              {/* Floating Top Badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-slate-200 flex items-center gap-2">
                <Store className="w-4 h-4 text-brand-600" />
                <span className="text-xs font-black text-slate-800">Velachery Supermarket Branch</span>
              </div>

              {/* Overlay Bottom Content */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-slate-100">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-black uppercase text-amber-600 tracking-wider block">Today's Store Highlight</span>
                    <h3 className="text-sm font-extrabold text-slate-900">Fresh Produce & Monthly Staples</h3>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">Over 5,000+ items stocked daily</p>
                  </div>
                  <button 
                    onClick={() => onNavigate('categories')}
                    className="p-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-xl shadow transition-all"
                    aria-label="Browse categories"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Side Trust Badge */}
            <div className="absolute -bottom-6 -left-6 bg-amber-400 text-slate-950 p-4 rounded-3xl shadow-xl border-2 border-white hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-950 text-amber-400 rounded-2xl flex items-center justify-center font-black">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-wider text-slate-900">1,000+ Families</p>
                <p className="text-[11px] font-bold text-slate-800">Trust Us Every Week</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
