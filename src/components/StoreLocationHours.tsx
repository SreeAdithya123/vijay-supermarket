import React from 'react';
import { MapPin, Clock, PhoneCall, MessageSquare, Mail, Navigation, Store, CheckCircle2 } from 'lucide-react';
import { STORE_INFO } from '../data/supermarketData';

export const StoreLocationHours: React.FC = () => {
  // Check live time for open status
  const currentHour = new Date().getHours();
  const isOpenNow = currentHour >= STORE_INFO.openTime && currentHour < STORE_INFO.closeTime;

  return (
    <section className="py-16 bg-surface-cream border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-700 bg-brand-100 px-3.5 py-1 rounded-full border border-brand-200">
            Find Us Near You
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-3 font-display">
            Store Location & Opening Hours
          </h2>
          <p className="text-sm text-slate-600 mt-2 font-medium">
            Conveniently located on Velachery Main Road with ground floor access and free customer parking.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Store Hours & Contact Details Card */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            {/* Opening Hours Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-m3-sm space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-brand-100 text-brand-700 flex items-center justify-center font-bold">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-slate-900">Opening Hours</h3>
                    <p className="text-xs text-slate-500 font-semibold">Weekly Schedule</p>
                  </div>
                </div>

                {/* Open Status Indicator */}
                <span className={`px-3 py-1 text-xs font-extrabold rounded-full flex items-center gap-1.5 ${
                  isOpenNow 
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                    : 'bg-amber-100 text-amber-900 border border-amber-300'
                }`}>
                  <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-500 animate-ping' : 'bg-amber-500'}`} />
                  {isOpenNow ? 'OPEN TODAY' : 'STORE CLOSED NOW'}
                </span>
              </div>

              <div className="space-y-3">
                <div className="p-3 bg-surface-soft rounded-2xl flex items-center justify-between text-xs font-bold">
                  <span className="text-slate-700">Monday – Sunday</span>
                  <span className="text-brand-800 font-extrabold">{STORE_INFO.hours.split(': ')[1]}</span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium px-1">
                  * Open on all public holidays and festival days for your convenience.
                </p>
              </div>

              {/* Address details */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="flex items-start gap-3 text-xs text-slate-700">
                  <MapPin className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Supermarket Address</span>
                    <p className="font-medium text-slate-600 mt-0.5">{STORE_INFO.address}</p>
                    <p className="text-brand-700 font-bold mt-1">Landmark: {STORE_INFO.landmark}</p>
                  </div>
                </div>
              </div>

              {/* Direct CTAs */}
              <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-3">
                <a
                  href={STORE_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 bg-brand-600 hover:bg-brand-700 text-white rounded-2xl text-xs font-extrabold text-center shadow-md transition-all flex items-center justify-center gap-1.5 m3-button-ripple"
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </a>
                <a
                  href={`tel:${STORE_INFO.phone.replace(/\s+/g, '')}`}
                  className="py-3 px-4 bg-surface-soft hover:bg-slate-200 text-slate-800 rounded-2xl text-xs font-bold text-center border border-slate-200 transition-all flex items-center justify-center gap-1.5"
                >
                  <PhoneCall className="w-4 h-4 text-brand-600" />
                  Call Store
                </a>
              </div>
            </div>
          </div>

          {/* Right Interactive Map Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-m3-sm flex flex-col justify-between">
            <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Store className="w-5 h-5 text-amber-400" />
                <span className="text-xs font-black">Google Maps Location — Vijay Supermarket</span>
              </div>
              <a
                href={STORE_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-bold text-amber-300 hover:underline flex items-center gap-1"
              >
                <span>Open in Maps App</span>
                <Navigation className="w-3 h-3" />
              </a>
            </div>

            {/* Map Frame Embed */}
            <div className="relative w-full h-[360px] sm:h-[420px] bg-slate-100">
              <iframe
                title="Vijay Supermarket Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9734185292415!2d80.2201!3d12.9734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzI0LjIiTiA4MMKwMTMnMTIuNCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter contrast-105"
              />

              {/* Overlay location box */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-xl flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-black text-slate-900">Vijay Supermarket Velachery</h4>
                  <p className="text-[11px] text-slate-500 font-medium">Free customer parking available</p>
                </div>
                <a
                  href={STORE_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs font-extrabold shadow"
                >
                  Navigate Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
