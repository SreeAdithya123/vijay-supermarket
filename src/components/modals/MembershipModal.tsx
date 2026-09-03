import React, { useState } from 'react';
import { X, CreditCard, Sparkles, Check, PhoneCall, Send, ShieldCheck } from 'lucide-react';
import { LOYALTY_TIERS, STORE_INFO } from '../../data/supermarketData';

interface MembershipModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitSuccess: (msg: string) => void;
}

export const MembershipModal: React.FC<MembershipModalProps> = ({ isOpen, onClose, onSubmitSuccess }) => {
  const [selectedTier, setSelectedTier] = useState<string>(LOYALTY_TIERS[1].name);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [society, setSociety] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    onClose();
    onSubmitSuccess(`Thank you ${name}! Your membership inquiry for "${selectedTier}" has been received. Our Vijay Supermarket customer team will WhatsApp/call you shortly at ${phone}.`);
    setName('');
    setPhone('');
    setSociety('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-brand-100 transition-all max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-brand-900 via-brand-800 to-emerald-950 p-6 text-white relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2.5 bg-amber-400 text-slate-950 rounded-2xl shadow-lg">
              <CreditCard className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">Vijay Supermarket</span>
              <h3 className="text-xl font-black">Family Savings Card Inquiry</h3>
            </div>
          </div>
          <p className="text-xs text-brand-200 mt-1">
            Enjoy guaranteed monthly discounts, reward point cashback, and apartment community privileges!
          </p>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Tier Selection */}
          <div>
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
              Select Desired Loyalty Membership Plan
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {LOYALTY_TIERS.map((tier) => (
                <button
                  key={tier.name}
                  type="button"
                  onClick={() => setSelectedTier(tier.name)}
                  className={`p-3 text-left rounded-2xl border transition-all relative flex flex-col justify-between ${
                    selectedTier === tier.name
                      ? 'border-brand-600 bg-brand-50/80 ring-2 ring-brand-500 shadow-sm'
                      : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
                  }`}
                >
                  {selectedTier === tier.name && (
                    <span className="absolute top-2 right-2 p-0.5 bg-brand-600 text-white rounded-full">
                      <Check className="w-3 h-3" />
                    </span>
                  )}
                  <div>
                    <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full inline-block mb-1.5 ${tier.badgeColor}`}>
                      {tier.name.split(' ')[1] || 'Plan'}
                    </span>
                    <h4 className="text-xs font-black text-slate-900 leading-snug">{tier.name}</h4>
                  </div>
                  <p className="text-[11px] font-bold text-brand-700 mt-2">{tier.pointsRate}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Form inputs */}
          <form id="membership-form" onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Your Full Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Ramesh Sharma"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-sm outline-none transition-all"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Mobile / WhatsApp No. *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-sm outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Apartment / Locality</label>
                <input
                  type="text"
                  placeholder="e.g. Green View Society"
                  value={society}
                  onChange={(e) => setSociety(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-sm outline-none transition-all"
                />
              </div>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-2 text-xs text-slate-600">
              <ShieldCheck className="w-4 h-4 text-brand-600 flex-shrink-0" />
              <span>Membership cards are issued instantly at our supermarket billing counter.</span>
            </div>
          </form>
        </div>

        {/* Footer CTAs */}
        <div className="p-4 px-6 border-t border-slate-100 bg-surface-soft flex items-center justify-between gap-3">
          <a
            href={`tel:${STORE_INFO.phone.replace(/\s+/g, '')}`}
            className="text-xs font-bold text-slate-600 hover:text-brand-700 flex items-center gap-1.5"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Call Store Counter</span>
          </a>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="membership-form"
              className="px-5 py-2.5 text-sm font-bold text-white bg-brand-600 hover:bg-brand-700 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 m3-button-ripple"
            >
              <Send className="w-4 h-4" />
              Submit Membership Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
