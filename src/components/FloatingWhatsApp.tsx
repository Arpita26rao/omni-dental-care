import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CLINIC_CONTACT } from '../data/treatments';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = `${CLINIC_CONTACT.whatsappUrl}?text=${encodeURIComponent(
    'Hello Omni Dental Care, I would like to book a dental appointment. Please share the available slots.'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip on hover */}
      <div className="mr-3 hidden md:flex items-center px-3.5 py-1.5 rounded-xl bg-white text-[#193D70] text-xs font-bold shadow-lg border border-slate-200 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <span>Chat with Omni Dental Care</span>
      </div>

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Omni Dental Care on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#168D3D] hover:bg-[#127733] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 active:scale-95 relative"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-white animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-white" />
        <MessageCircle className="w-7 h-7 fill-white/20" />
      </a>
    </div>
  );
};
