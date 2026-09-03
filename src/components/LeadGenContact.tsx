import React, { useState } from 'react';
import { PhoneCall, MessageSquare, MapPin, Send, Clock, CheckCircle2, Building, Sparkles } from 'lucide-react';
import { STORE_INFO } from '../data/supermarketData';

interface LeadGenContactProps {
  onSubmitSuccess: (msg: string) => void;
}

export const LeadGenContact: React.FC<LeadGenContactProps> = ({ onSubmitSuccess }) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !mobile) return;
    onSubmitSuccess(`Thank you ${name}! Vijay Supermarket will get back to you soon at ${mobile}.`);
    setName('');
    setMobile('');
    setMessage('');
  };

  return (
    <section id="contact" className="py-16 bg-white border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-700 bg-brand-100 px-3.5 py-1 rounded-full border border-brand-200">
            Get In Touch With Vijay Supermarket
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-3 font-display">
            Contact Us & Enquire About Offers
          </h2>
          <p className="text-sm text-slate-600 mt-2 font-medium">
            Have questions about product availability, apartment bulk deals, or festival hampers? We are here to help!
          </p>
        </div>

        {/* 3 Quick Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Call Us Card */}
          <a
            href={`tel:${STORE_INFO.phone.replace(/\s+/g, '')}`}
            className="p-6 bg-brand-50 hover:bg-brand-100/80 rounded-3xl border border-brand-200 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-brand-600 text-white flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform">
                <PhoneCall className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-slate-900">Call Us Directly</h3>
              <p className="text-xs text-slate-600 mt-1 font-medium">
                Speak directly to our store manager or billing counter staff.
              </p>
              <p className="text-sm font-extrabold text-brand-800 mt-3">{STORE_INFO.phone}</p>
            </div>
            <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-brand-700">
              Tap to Call Now →
            </span>
          </a>

          {/* WhatsApp Card */}
          <a
            href={`https://wa.me/${STORE_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-emerald-50 hover:bg-emerald-100/80 rounded-3xl border border-emerald-200 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-slate-900">WhatsApp Us</h3>
              <p className="text-xs text-slate-600 mt-1 font-medium">
                Chat with us for quick stock checks, offers, or directions.
              </p>
              <p className="text-sm font-extrabold text-emerald-800 mt-3">{STORE_INFO.whatsapp}</p>
            </div>
            <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-emerald-700">
              Open WhatsApp Chat →
            </span>
          </a>

          {/* Visit Us Card */}
          <a
            href={STORE_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-amber-50 hover:bg-amber-100/80 rounded-3xl border border-amber-200 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-slate-900">Visit Our Store</h3>
              <p className="text-xs text-slate-600 mt-1 font-medium">
                {STORE_INFO.landmark}
              </p>
              <p className="text-xs font-bold text-amber-900 mt-3">Open Daily 7:00 AM – 10:00 PM</p>
            </div>
            <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-amber-800">
              Get Store Navigation →
            </span>
          </a>
        </div>

        {/* Lead Generation Form Container */}
        <div className="bg-surface-cream rounded-3xl p-6 sm:p-10 border border-slate-200 max-w-3xl mx-auto shadow-sm">
          <div className="text-center mb-8">
            <h3 className="text-xl font-black text-slate-900 font-display">Enquire About Offers & Products</h3>
            <p className="text-xs text-slate-600 mt-1 font-medium">
              Fill in your details below and our supermarket team will respond promptly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-sm outline-none transition-all bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Enter your phone or WhatsApp"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-sm outline-none transition-all bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Your Message / Product Enquiry
              </label>
              <textarea
                rows={3}
                placeholder="Ask about product availability, festival hampers, or apartment society offers..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-sm outline-none transition-all bg-white"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-sm rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 m3-button-ripple"
            >
              <Send className="w-4 h-4" />
              <span>Submit Offer Enquiry</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
