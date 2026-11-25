import React, { useState, useEffect } from 'react';
import {
  Baby,
  Activity,
  ShieldCheck,
  Smile,
  Sparkles,
  Shield,
  Scissors,
  FileText,
  Calendar,
  Check,
  Info
} from 'lucide-react';
import { TREATMENTS } from '../data/treatments';
import { Treatment } from '../types';

interface TreatmentsSectionProps {
  onSelectTreatmentForBooking: (treatmentTitle: string) => void;
}

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({
  onSelectTreatmentForBooking,
}) => {
  const [selectedTreatmentModal, setSelectedTreatmentModal] = useState<Treatment | null>(null);

  useEffect(() => {
    if (!selectedTreatmentModal) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedTreatmentModal(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedTreatmentModal]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Baby':
        return Baby;
      case 'Activity':
        return Activity;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'Smile':
        return Smile;
      case 'Sparkles':
        return Sparkles;
      case 'Shield':
        return Shield;
      case 'Scissors':
        return Scissors;
      case 'FileText':
      default:
        return FileText;
    }
  };

  return (
    <section id="treatments" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-bold uppercase tracking-wider text-[#168D3D]">
            Comprehensive Dental Solutions
          </p>
          <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold text-[#193D70] font-heading">
            Our Dental Treatments
          </h2>
          <p className="mt-3 text-base text-slate-600">
            From pediatric care and cavity prevention to advanced root canals and cosmetic smile enhancements, discover personalized treatments tailored to your oral health.
          </p>
        </div>

        {/* 8 Verified Treatments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TREATMENTS.map((treatment) => {
            const IconComponent = getIcon(treatment.icon);
            const isPediatric = treatment.isPediatric;

            return (
              <div
                key={treatment.id}
                className={`group rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between border ${
                  isPediatric
                    ? 'bg-gradient-to-b from-[#F2FAF4] to-white border-[#168D3D]/30 shadow-xs hover:shadow-md'
                    : 'bg-white border-slate-200 hover:border-[#2798CC]/40 hover:shadow-md'
                }`}
              >
                <div>
                  {/* Relevant Treatment Image */}
                  <div className="relative h-44 bg-[#F2F9FC] overflow-hidden">
                    <img
                      src={treatment.imageSrc}
                      alt={`${treatment.title} at Omni Dental Care`}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        if (
                          treatment.fallbackImageSrc &&
                          e.currentTarget.src !== treatment.fallbackImageSrc
                        ) {
                          e.currentTarget.src = treatment.fallbackImageSrc;
                        }
                      }}
                    />

                    {/* Subtle icon badge */}
                    <div
                      className={`absolute bottom-3 left-3 w-9 h-9 rounded-xl flex items-center justify-center shadow-sm ${
                        isPediatric
                          ? 'bg-[#168D3D] text-white'
                          : 'bg-white/95 text-[#2798CC] border border-[#2798CC]/20'
                      }`}
                    >
                      <IconComponent className="w-4.5 h-4.5" />
                    </div>

                    {isPediatric && (
                      <span className="absolute top-3 right-3 text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full bg-white/95 text-[#168D3D] border border-[#168D3D]/20 shadow-2xs">
                        Pediatric Speciality
                      </span>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="p-5 pb-4 text-left">
                    <h3 className="text-lg font-bold text-[#193D70] group-hover:text-[#2798CC] transition-colors font-heading">
                      {treatment.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#168D3D] mt-1">
                      {treatment.tagline}
                    </p>

                    <p className="mt-2.5 text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {treatment.description}
                    </p>

                    <ul className="mt-3.5 space-y-1.5 pt-3 border-t border-slate-100">
                      {treatment.benefits.slice(0, 2).map((benefit, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-[11px] text-slate-500">
                          <Check className="w-3.5 h-3.5 text-[#168D3D] shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Actions */}
                <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedTreatmentModal(treatment)}
                    type="button"
                    className="text-xs font-semibold text-slate-500 hover:text-[#193D70] inline-flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5 text-[#2798CC]" />
                    <span>Details</span>
                  </button>

                  <button
                    onClick={() => onSelectTreatmentForBooking(treatment.title)}
                    type="button"
                    className="inline-flex items-center gap-1.5 bg-[#2798CC] hover:bg-[#1f80ad] text-white text-xs font-semibold px-3.5 py-2 rounded-xl shadow-2xs transition-all active:scale-[0.98] cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Appointment</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Treatment Details Modal */}
        {selectedTreatmentModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn"
            onClick={() => setSelectedTreatmentModal(null)}
            role="dialog"
            aria-modal="true"
            aria-label={selectedTreatmentModal.title}
          >
            <div
              className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-100 text-left relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Image Header */}
              <div className="relative h-48 bg-[#F2F9FC]">
                <img
                  src={selectedTreatmentModal.imageSrc}
                  alt={selectedTreatmentModal.title}
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    if (
                      selectedTreatmentModal.fallbackImageSrc &&
                      e.currentTarget.src !== selectedTreatmentModal.fallbackImageSrc
                    ) {
                      e.currentTarget.src = selectedTreatmentModal.fallbackImageSrc;
                    }
                  }}
                />
                <button
                  onClick={() => setSelectedTreatmentModal(null)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 text-slate-700 hover:bg-white flex items-center justify-center shadow-sm transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 md:p-7">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#168D3D] mb-1">
                  <span>Omni Dental Care</span>
                  <span>·</span>
                  <span>Multi-Speciality Kota</span>
                </div>
                <h3 className="text-2xl font-extrabold text-[#193D70] font-heading">
                  {selectedTreatmentModal.title}
                </h3>
                <p className="text-xs font-semibold text-[#2798CC] mt-0.5">
                  {selectedTreatmentModal.tagline}
                </p>

                <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                  {selectedTreatmentModal.description}
                </p>

                <div className="mt-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Key Patient Benefits & Procedures:
                  </h4>
                  <ul className="space-y-2">
                    {selectedTreatmentModal.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check className="w-4 h-4 text-[#168D3D] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedTreatmentModal(null)}
                    type="button"
                    className="px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                  >
                    Close
                  </button>

                  <button
                    onClick={() => {
                      const title = selectedTreatmentModal.title;
                      setSelectedTreatmentModal(null);
                      onSelectTreatmentForBooking(title);
                    }}
                    type="button"
                    className="inline-flex items-center gap-2 bg-[#2798CC] hover:bg-[#1f80ad] text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-xs transition-colors cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book {selectedTreatmentModal.title}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

