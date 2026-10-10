import React from 'react';
import { Calendar, ShieldCheck, Heart, Sparkles, Phone, MessageCircle } from 'lucide-react';
import { DoctorVisual } from './DoctorVisual';
import { CLINIC_CONTACT } from '../data/treatments';

interface DoctorProfileProps {
  onBookAppointmentClick: () => void;
}

export const DoctorProfile: React.FC<DoctorProfileProps> = ({ onBookAppointmentClick }) => {
  return (
    <section id="doctor" className="py-16 md:py-24 bg-gradient-to-b from-white via-[#F2FAF4]/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F2FAF4] text-[#168D3D] rounded-full text-xs font-semibold mb-2 border border-[#168D3D]/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Pediatric Dental Specialist</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#193D70] font-heading">
            Meet Our Doctor
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Dedicated pediatric dental specialist delivering gentle, patient-first care for children and families in Kota.
          </p>
        </div>

        {/* Doctor Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-[#2798CC]/20 shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-center">
            
            {/* Photograph Column */}
            <div className="md:col-span-5 p-6 md:p-8 flex items-center justify-center bg-gradient-to-b from-[#F2F9FC] to-[#F2FAF4]">
              <div className="w-full max-w-xs">
                <DoctorVisual size="hero" className="w-full shadow-sm" />
              </div>
            </div>

            {/* Qualifications & Profile Column */}
            <div className="md:col-span-7 p-6 md:p-8 lg:p-10 text-left">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#168D3D]/10 text-[#168D3D] text-xs font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  M.D.S. Specialist
                </span>
                <span className="text-slate-300">·</span>
                <span className="text-xs font-medium text-slate-500">Kota, Rajasthan</span>
              </div>

              {/* Exact Name & Qualification as specified */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#193D70] font-heading">
                Dr. Divya Rao
              </h3>

              <div className="mt-1 flex flex-wrap items-baseline gap-2">
                <span className="text-base font-bold text-[#168D3D]">
                  B.D.S., M.D.S.
                </span>
                <span className="text-sm font-semibold text-[#2798CC]">
                  Consultant Pedodontist (Pediatric Dentist)
                </span>
              </div>

              <div className="mt-5 space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  <strong>Dr. Divya Rao</strong> holds a Master of Dental Surgery (M.D.S.) specializing in Pedodontics and Preventive Dentistry. Her practice is focused on providing children with positive dental experiences, early preventive care, and customized treatment.
                </p>
                <p>
                  As a Consultant Pedodontist, she believes that dental care for children requires not just clinical precision, but also patience, gentle behavioral guidance, and close communication with parents to instill lifelong oral health habits.
                </p>
              </div>

              {/* Focus Areas */}
              <div className="mt-6 pt-5 border-t border-slate-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Areas of Clinical Expertise:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#168D3D]" />
                    <span>Pediatric Dental Treatments</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2798CC]" />
                    <span>Early Preventive Oral Care</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#168D3D]" />
                    <span>Child Habit Breaking Guidance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2798CC]" />
                    <span>Cavity Prevention & Fluoride</span>
                  </div>
                </div>
              </div>

              {/* Doctor Appointment CTA */}
              <div className="mt-8 pt-5 border-t border-slate-100 flex flex-wrap items-center gap-3">
                <button
                  onClick={onBookAppointmentClick}
                  type="button"
                  className="inline-flex items-center gap-2 bg-[#2798CC] hover:bg-[#1f80ad] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl shadow-xs transition-all active:scale-[0.98] cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book with Dr. Divya Rao</span>
                </button>

                <a
                  href={`tel:+91${CLINIC_CONTACT.phone}`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:text-[#193D70] px-3 py-2 rounded-xl hover:bg-slate-100 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#2798CC]" />
                  <span>Call: +91 85280 43685</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
