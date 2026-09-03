import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Building } from 'lucide-react';
import { TESTIMONIALS } from '../data/supermarketData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="py-16 bg-surface-cream border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-700 bg-brand-100 px-3.5 py-1 rounded-full border border-brand-200">
            Neighbourhood Reviews
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-3 font-display">
            Loved By Nearby Families & Communities
          </h2>
          <p className="text-sm text-slate-600 mt-2 font-medium">
            Hear what our regular walk-in shoppers and apartment residents have to say about their experience.
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-m3-sm hover:shadow-m3-md transition-all duration-300 flex flex-col justify-between m3-card"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-brand-200 mb-2" />

                <p className="text-xs text-slate-700 leading-relaxed font-medium italic">
                  "{t.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-brand-200"
                />
                <div>
                  <h4 className="text-xs font-extrabold text-slate-900">{t.name}</h4>
                  <div className="flex items-center gap-1 text-[10px] text-brand-700 font-semibold mt-0.5">
                    <Building className="w-3 h-3 text-brand-600" />
                    <span>{t.locality}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="block md:hidden">
          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md relative">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-[10px] font-bold text-slate-400">
                {currentIndex + 1} of {TESTIMONIALS.length}
              </span>
            </div>

            <Quote className="w-8 h-8 text-brand-200 mb-2" />

            <p className="text-xs text-slate-700 leading-relaxed font-medium italic min-h-[80px]">
              "{TESTIMONIALS[currentIndex].comment}"
            </p>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={TESTIMONIALS[currentIndex].avatar}
                  alt={TESTIMONIALS[currentIndex].name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-brand-200"
                />
                <div>
                  <h4 className="text-xs font-extrabold text-slate-900">{TESTIMONIALS[currentIndex].name}</h4>
                  <p className="text-[10px] text-brand-700 font-semibold">{TESTIMONIALS[currentIndex].locality}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-brand-600 text-white"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
