import React from 'react';
import { Award, Users, ShoppingBag, Clock, Heart, CheckCircle2 } from 'lucide-react';
import { STORE_INFO } from '../data/supermarketData';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-surface-cream border-b border-slate-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Store Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
              <img
                src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1000&q=80"
                alt="Vijay Supermarket Store Front"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-slate-200">
                <span className="text-[10px] font-black uppercase tracking-wider text-brand-700 block">Established 2014</span>
                <h4 className="text-sm font-extrabold text-slate-900">Serving Velachery & Nearby Communities</h4>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Family-owned & operated neighbourhood supermarket</p>
              </div>
            </div>

            {/* Side Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-brand-600 text-white p-4 rounded-3xl shadow-xl hidden sm:flex items-center gap-3 border-2 border-white">
              <Award className="w-8 h-8 text-amber-300" />
              <div>
                <p className="text-xs font-black">#1 Recommended</p>
                <p className="text-[10px] text-brand-200 font-semibold">Neighbourhood Store</p>
              </div>
            </div>
          </div>

          {/* Right Text Story Content */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-700 bg-brand-100 px-3.5 py-1 rounded-full border border-brand-200">
                About Vijay Supermarket
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 leading-tight font-display">
                More Than a Supermarket — Your Everyday Shopping Partner.
              </h2>
            </div>

            <p className="text-base text-slate-600 leading-relaxed font-medium">
              Founded over a decade ago, <strong>Vijay Supermarket</strong> was built on a simple vision: to bring top-tier supermarket variety, farm-fresh produce, and honest MRP savings right to the doorsteps of local families and residential communities.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              Unlike impersonal e-commerce delivery apps, we believe in real relationships, fresh morning grocery arrivals at 7 AM, clean air-conditioned shopping aisles, and friendly store staff who know you by name.
            </p>

            {/* 4 Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              <div className="p-4 bg-white rounded-2xl border border-slate-200/80 text-center shadow-sm">
                <span className="text-2xl sm:text-3xl font-black text-brand-700 block font-display">
                  {STORE_INFO.stats.yearsInService}
                </span>
                <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider mt-1 block">
                  Years of Service
                </span>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-slate-200/80 text-center shadow-sm">
                <span className="text-2xl sm:text-3xl font-black text-brand-700 block font-display">
                  {STORE_INFO.stats.productsCount}
                </span>
                <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider mt-1 block">
                  Products Stocked
                </span>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-slate-200/80 text-center shadow-sm">
                <span className="text-2xl sm:text-3xl font-black text-brand-700 block font-display">
                  {STORE_INFO.stats.happyFamilies}
                </span>
                <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider mt-1 block">
                  Happy Families
                </span>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-slate-200/80 text-center shadow-sm">
                <span className="text-2xl sm:text-3xl font-black text-brand-700 block font-display">
                  7 AM
                </span>
                <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider mt-1 block">
                  Daily Fresh Arrival
                </span>
              </div>
            </div>

            {/* Core Values */}
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600" />
                <span>Local Community Mindset</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600" />
                <span>Honest Transparent Pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600" />
                <span>Strict Hygiene & Quality</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
