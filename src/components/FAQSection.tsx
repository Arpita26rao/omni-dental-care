import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';
import { FAQS } from '../data/faqs';
import { CLINIC_CONTACT } from '../data/treatments';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id || null);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-slate-50/70 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-[#193D70] rounded-full text-xs font-semibold mb-2 border border-slate-200">
            <HelpCircle className="w-3.5 h-3.5 text-[#2798CC]" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#193D70] font-heading">
            Got Questions? We Have Answers
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Find quick answers regarding our dental clinic, appointments, treatments, and pediatric care in Kota.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-white border border-slate-200/90 shadow-2xs overflow-hidden transition-all text-left"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50/60 transition-colors cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-[#193D70] font-heading">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#2798CC] text-white rotate-180'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 pt-1 sm:px-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-10 p-5 rounded-2xl bg-[#F2FAF4] border border-[#168D3D]/20 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-slate-700 gap-4 text-center sm:text-left">
          <div>
            <p className="font-bold text-[#193D70]">Have a question not listed here?</p>
            <p className="text-xs text-slate-500 mt-0.5">Feel free to ask Dr. Divya Rao or our reception team directly on WhatsApp.</p>
          </div>
          <a
            href={CLINIC_CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#168D3D] hover:bg-[#127733] text-white font-semibold px-4 py-2.5 rounded-xl shadow-xs transition-colors shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
