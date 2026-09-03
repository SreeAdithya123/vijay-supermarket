import React, { useState, useEffect } from 'react';
import { 
  Store, 
  MapPin, 
  PhoneCall, 
  MessageSquare, 
  Menu, 
  X, 
  ShoppingBag, 
  Sparkles, 
  ChevronRight,
  Clock
} from 'lucide-react';
import { STORE_INFO } from '../data/supermarketData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenMembership: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate, onOpenMembership }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'categories', label: 'Categories' },
    { id: 'offers', label: 'Offers' },
    { id: 'why-us', label: 'Why Choose Us' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Banner Bar */}
      <div className="bg-brand-950 text-brand-100 text-xs py-2 px-4 border-b border-brand-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 font-medium">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Store Hours: <strong>7:00 AM – 10:00 PM</strong> (Open All Days)</span>
            </span>
            <span className="flex items-center gap-1.5 text-brand-300">
              <MapPin className="w-3.5 h-3.5 text-brand-400" />
              <span>Velachery Main Road, Chennai</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold">
            <button 
              onClick={onOpenMembership}
              className="text-amber-300 hover:text-amber-200 flex items-center gap-1 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ask About Family Loyalty Card</span>
            </button>
            <a 
              href={`tel:${STORE_INFO.phone.replace(/\s+/g, '')}`} 
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <PhoneCall className="w-3.5 h-3.5 text-brand-400" />
              <span>{STORE_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-100' 
            : 'bg-white py-4 border-b border-slate-200/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('hero')} 
            className="flex items-center gap-3 group text-left"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 font-display">
                  VIJAY
                </span>
                <span className="text-xs font-extrabold text-brand-700 bg-brand-100 px-2 py-0.5 rounded-full border border-brand-200 uppercase">
                  SUPERMARKET
                </span>
              </div>
              <p className="text-[11px] font-semibold text-slate-500 hidden sm:block">
                Fresh Groceries • Better Value
              </p>
            </div>
          </button>

          {/* Desktop Navigation links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-2 rounded-full text-sm font-bold transition-all ${
                  activeSection === item.id
                    ? 'text-brand-800 bg-brand-100/80 shadow-sm'
                    : 'text-slate-600 hover:text-brand-700 hover:bg-slate-100/70'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={`tel:${STORE_INFO.phone.replace(/\s+/g, '')}`}
              className="p-2.5 text-slate-700 hover:text-brand-700 hover:bg-brand-50 rounded-2xl transition-colors flex items-center gap-1.5 text-xs font-bold border border-slate-200"
              title="Call Supermarket Store"
            >
              <PhoneCall className="w-4 h-4 text-brand-600" />
              <span className="hidden xl:inline">Call Store</span>
            </a>

            <a
              href={`https://wa.me/${STORE_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-2xl transition-colors flex items-center gap-1.5 text-xs font-bold border border-emerald-200"
              title="WhatsApp Store"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span className="hidden xl:inline">WhatsApp</span>
            </a>

            <a
              href={STORE_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 text-xs font-extrabold text-white bg-brand-600 hover:bg-brand-700 rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 m3-button-ripple"
            >
              <MapPin className="w-4 h-4" />
              <span>Visit Our Store</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={STORE_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-xs font-extrabold text-white bg-brand-600 rounded-xl flex items-center gap-1 shadow-sm sm:hidden"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Visit</span>
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-2xl transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Material 3 Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-fade-in border-l border-slate-100">
            <div>
              {/* Drawer Top Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-brand-600 text-white flex items-center justify-center font-bold">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-slate-900 leading-tight">Vijay Supermarket</h3>
                    <p className="text-[10px] text-slate-500 font-semibold">Your Local Supermarket</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-slate-400 hover:text-slate-700 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Status Pill */}
              <div className="p-3 bg-brand-50 rounded-2xl border border-brand-200 mb-6 flex items-center gap-2.5 text-xs text-brand-900">
                <Store className="w-4 h-4 text-brand-600 flex-shrink-0" />
                <div>
                  <span className="font-bold block">OPEN TODAY</span>
                  <span className="text-[11px] text-brand-700">7:00 AM – 10:00 PM</span>
                </div>
              </div>

              {/* Navigation Items */}
              <nav className="space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-bold transition-all text-left ${
                      activeSection === item.id
                        ? 'bg-brand-600 text-white shadow-md'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className={`w-4 h-4 ${activeSection === item.id ? 'text-white' : 'text-slate-400'}`} />
                  </button>
                ))}
              </nav>

              <div className="pt-4 border-t border-slate-100 mt-6 space-y-2">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenMembership();
                  }}
                  className="w-full py-2.5 px-3 bg-amber-100 text-amber-900 rounded-xl text-xs font-bold flex items-center justify-center gap-2 border border-amber-300"
                >
                  <Sparkles className="w-4 h-4 text-amber-700" />
                  Ask About Loyalty Card
                </button>
              </div>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="pt-6 border-t border-slate-100 space-y-2.5">
              <a
                href={STORE_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-2xl text-xs font-extrabold flex items-center justify-center gap-2 shadow-md"
              >
                <MapPin className="w-4 h-4" />
                Get Store Directions
              </a>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${STORE_INFO.phone.replace(/\s+/g, '')}`}
                  className="py-2.5 bg-slate-100 text-slate-800 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border border-slate-200"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-brand-600" />
                  Call Store
                </a>
                <a
                  href={`https://wa.me/${STORE_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 bg-emerald-50 text-emerald-800 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border border-emerald-200"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
