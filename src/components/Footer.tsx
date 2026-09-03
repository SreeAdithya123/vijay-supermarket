import React, { useState } from 'react';
import { 
  ShoppingBag, 
  PhoneCall, 
  MessageSquare, 
  MapPin, 
  Clock, 
  Sparkles, 
  Heart, 
  ShieldCheck,
  Facebook,
  Instagram,
  Twitter,
  Youtube
} from 'lucide-react';
import { STORE_INFO } from '../data/supermarketData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenMembership: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenMembership, onOpenContact }) => {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-brand-600 text-white flex items-center justify-center font-bold shadow-md">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-black tracking-tight text-white font-display">
                  VIJAY SUPERMARKET
                </span>
                <p className="text-[10px] text-brand-400 font-extrabold uppercase tracking-wider">
                  Neighbourhood Store
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 font-medium leading-relaxed max-w-sm">
              Your trusted neighbourhood supermarket for everyday essentials, farm-fresh produce, household needs, and unbeatable family savings.
            </p>

            <div className="flex items-center gap-3 text-xs font-semibold pt-2 text-slate-400">
              <div className="p-2 bg-slate-900 rounded-xl border border-slate-800 flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Open Daily: 7:00 AM – 10:00 PM</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              <a href="#" className="p-2.5 bg-slate-900 hover:bg-brand-600 text-slate-400 hover:text-white rounded-xl transition-all border border-slate-800" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 bg-slate-900 hover:bg-brand-600 text-slate-400 hover:text-white rounded-xl transition-all border border-slate-800" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 bg-slate-900 hover:bg-brand-600 text-slate-400 hover:text-white rounded-xl transition-all border border-slate-800" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 bg-slate-900 hover:bg-brand-600 text-slate-400 hover:text-white rounded-xl transition-all border border-slate-800" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider mb-4 border-l-2 border-brand-500 pl-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li>
                <button onClick={() => onNavigate('hero')} className="hover:text-amber-300 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-amber-300 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('categories')} className="hover:text-amber-300 transition-colors">
                  Product Categories
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('offers')} className="hover:text-amber-300 transition-colors">
                  Offers & Deals
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('why-us')} className="hover:text-amber-300 transition-colors">
                  Why Choose Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('gallery')} className="hover:text-amber-300 transition-colors">
                  Store Gallery
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-amber-300 transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Links */}
          <div>
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider mb-4 border-l-2 border-emerald-500 pl-2">
              Customer Links
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li>
                <a href={`tel:${STORE_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-emerald-400 flex items-center gap-1.5 transition-colors">
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Call Store Desk</span>
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${STORE_INFO.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 flex items-center gap-1.5 transition-colors">
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-500" />
                  <span>WhatsApp Supermarket</span>
                </a>
              </li>
              <li>
                <a href={STORE_INFO.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 flex items-center gap-1.5 transition-colors">
                  <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Get Directions</span>
                </a>
              </li>
              <li>
                <span className="flex items-center gap-1.5 text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-emerald-500" />
                  <span>7 AM – 10 PM (All Days)</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-2">
              Community Privileges
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li>
                <button onClick={onOpenContact} className="hover:text-amber-300 text-left transition-colors">
                  Apartment Society Offers
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('offers')} className="hover:text-amber-300 text-left transition-colors">
                  Festival Savings Hampers
                </button>
              </li>
              <li>
                <button onClick={onOpenMembership} className="hover:text-amber-300 text-left transition-colors">
                  Family Loyalty Card
                </button>
              </li>
              <li>
                <button onClick={onOpenContact} className="hover:text-amber-300 text-left transition-colors">
                  Customer Enquiries
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & legal placeholders */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Vijay Supermarket. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button onClick={() => setModalType('privacy')} className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={() => setModalType('terms')} className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Privacy & Terms */}
      {modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-slate-900 text-white rounded-3xl p-6 max-w-lg w-full border border-slate-800 shadow-2xl">
            <h3 className="text-lg font-bold mb-2">
              {modalType === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed space-y-2">
              {modalType === 'privacy'
                ? 'Vijay Supermarket values your privacy. This website is a frontend walk-in showcase for local customers. Personal details submitted via contact or loyalty enquiry forms are strictly used to contact you regarding supermarket offers and never shared with third parties.'
                : 'All products, prices, discounts, and promotional offers displayed on this website represent walk-in store availability at Vijay Supermarket. Offers are subject to in-store stock availability and society verification where applicable.'}
            </p>
            <div className="mt-6 text-right">
              <button
                onClick={() => setModalType(null)}
                className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs font-bold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
