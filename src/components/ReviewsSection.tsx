import React from 'react';
import { Star, MessageSquare, ExternalLink, Heart, ShieldCheck, ThumbsUp } from 'lucide-react';
import { CLINIC_CONTACT } from '../data/treatments';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-[#F2F9FC]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-[#193D70] rounded-full text-xs font-semibold mb-2 border border-slate-200 shadow-2xs">
            <MessageSquare className="w-3.5 h-3.5 text-[#2798CC]" />
            <span>Patient Feedback & Trust</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#193D70] font-heading">
            Patient Experience at Omni Dental Care
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            We value genuine feedback from our patients and parents. Every review helps us maintain our patient-first approach and high standards of dental care in Kota.
          </p>
        </div>

        {/* Transparent Review Invitation Card (Anti-fake review policy) */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 md:p-12 border border-[#2798CC]/20 shadow-md text-left">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-1 text-amber-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <h3 className="text-xl font-bold text-[#193D70]">
                Verified Google Business Profile
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Omni Dental Care · Borkhera Labour Chauraha, Kota
              </p>
            </div>

            <a
              href={CLINIC_CONTACT.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#193D70] hover:bg-[#132f57] text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-xl shadow-xs transition-all active:scale-[0.98] shrink-0"
            >
              <span>Read Our Google Reviews</span>
              <ExternalLink className="w-4 h-4 text-[#2798CC]" />
            </a>
          </div>

          {/* Genuine Feedback Framework */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-xl bg-[#F2F9FC] border border-[#2798CC]/10">
              <Heart className="w-5 h-5 text-[#2798CC] mb-2" />
              <h4 className="text-xs font-bold text-[#193D70]">Child-Friendly Visits</h4>
              <p className="text-xs text-slate-600 mt-1">
                Parents appreciate Dr. Divya Rao’s patient approach that helps young children feel calm during dental procedures.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F2FAF4] border border-[#168D3D]/10">
              <ShieldCheck className="w-5 h-5 text-[#168D3D] mb-2" />
              <h4 className="text-xs font-bold text-[#193D70]">Clean & Sterile Clinic</h4>
              <p className="text-xs text-slate-600 mt-1">
                Patients consistently notice our hygienic environment, sterile instrument protocols, and comfortable dental setup.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <ThumbsUp className="w-5 h-5 text-[#193D70] mb-2" />
              <h4 className="text-xs font-bold text-[#193D70]">Transparent Consultation</h4>
              <p className="text-xs text-slate-600 mt-1">
                Clear treatment explanations without unnecessary procedures or unexpected surprises.
              </p>
            </div>
          </div>

          {/* Invitation to leave a review */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
            <span>Visited our clinic recently? Share your honest experience with our community.</span>
            <a
              href={CLINIC_CONTACT.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#168D3D] font-bold hover:underline"
            >
              Write a Google Review →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
