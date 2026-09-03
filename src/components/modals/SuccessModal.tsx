import React from 'react';
import { CheckCircle, X, MapPin, Phone, MessageSquare } from 'lucide-react';
import { STORE_INFO } from '../../data/supermarketData';

interface SuccessModalProps {
  message: string | null;
  onClose: () => void;
  onVisitStore: () => void;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({ message, onClose, onVisitStore }) => {
  if (!message) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 text-center space-y-5 border border-brand-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto text-brand-600 border-4 border-brand-50 shadow-inner">
          <CheckCircle className="w-9 h-9 animate-bounce" />
        </div>

        <div>
          <h3 className="text-xl font-extrabold text-slate-900">Enquiry Received!</h3>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed font-medium">
            {message}
          </p>
        </div>

        <div className="p-3.5 bg-surface-soft rounded-2xl border border-slate-200 text-xs text-slate-600 text-left space-y-1.5">
          <p className="font-bold text-slate-800 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-brand-600" />
            Supermarket Store Hours Today:
          </p>
          <p className="text-slate-700 pl-5 font-semibold">7:00 AM – 10:00 PM (Open 7 Days a Week)</p>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-2">
          <a
            href={`https://wa.me/${STORE_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            WhatsApp Store
          </a>
          <button
            onClick={() => {
              onClose();
              onVisitStore();
            }}
            className="px-3 py-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-all"
          >
            <MapPin className="w-4 h-4" />
            Visit Store
          </button>
        </div>
      </div>
    </div>
  );
};
