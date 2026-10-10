import React, { useState } from 'react';
import { Calendar, ArrowRight, ShieldCheck, MapPin, User, Building2, CheckCircle2 } from 'lucide-react';
import { DoctorVisual } from './DoctorVisual';
import { ClinicBuildingVisual } from './ClinicBuildingVisual';
import { CLINIC_CONTACT } from '../data/treatments';

interface HeroProps {
  onBookAppointmentClick: () => void;
  onExploreTreatmentsClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onBookAppointmentClick,
  onExploreTreatmentsClick,
}) => {
  const [activeVisualTab, setActiveVisualTab] = useState<'doctor' | 'clinic'>('doctor');

  return (
    <section id="home" className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F2F9FC]/60 via-white to-white">
      {/* Decorative Subtle Dental Accent Circles */}
      <div className="absolute top-10 right-5 w-96 h-96 rounded-full bg-[#2798CC]/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-96 h-96 rounded-full bg-[#168D3D]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Verified Location & Speciality Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F2F9FC] border border-[#2798CC]/20 text-[#193D70] text-xs font-semibold mb-6 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#168D3D] animate-pulse" />
              <span>Multi-Speciality Dental Clinic in Kota, Rajasthan</span>
              <span className="text-slate-300">·</span>
              <span className="text-[#2798CC]">Borkhera</span>
            </div>

            {/* Exact Headline Required */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#193D70] tracking-tight leading-[1.15] font-heading">
              Healthy Smiles <br />
              <span className="text-[#2798CC]">Begin Here.</span>
            </h1>

            {/* Exact Supporting Text Required */}
            <p className="mt-5 text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed">
              Personalized dental care for healthier smiles and confident lives.
            </p>

            {/* Key Verified Clinic Highlights (No fabricated stats) */}
            <div className="mt-6 flex flex-wrap gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#168D3D]" />
                <span className="font-medium text-slate-700">Dr. Divya Rao (B.D.S., M.D.S.)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#2798CC]" />
                <span className="font-medium text-slate-700">Consultant Pedodontist Specialist</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#168D3D]" />
                <span className="font-medium text-slate-700">Hygienic & Painless Treatments</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <button
                onClick={onBookAppointmentClick}
                type="button"
                className="inline-flex items-center justify-center gap-2 bg-[#2798CC] hover:bg-[#1f80ad] text-white text-base font-semibold px-6 py-3.5 rounded-xl shadow-sm hover:shadow transition-all active:scale-[0.98] cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                <span>Book an Appointment</span>
              </button>

              <button
                onClick={onExploreTreatmentsClick}
                type="button"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#193D70] border border-slate-200 text-base font-semibold px-6 py-3.5 rounded-xl shadow-2xs hover:border-[#2798CC]/40 transition-all cursor-pointer"
              >
                <span>Explore Our Treatments</span>
                <ArrowRight className="w-4 h-4 text-[#2798CC]" />
              </button>
            </div>

            {/* Location & Quick Inquiry footnote */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#2798CC]" />
                <span>Opposite Sanjay Gandhi School, Borkhera Labour Chauraha</span>
              </div>
              <span className="text-slate-300">|</span>
              <a
                href={CLINIC_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#168D3D] hover:underline font-semibold"
              >
                WhatsApp Quick Assist: +91 85280 43685
              </a>
            </div>
          </div>

          {/* Right Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            {/* Visual Selector Tabs: Switch between Doctor and Clinic Facility */}
            <div className="mb-3 flex items-center justify-between">
              <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200/80">
                <button
                  type="button"
                  onClick={() => setActiveVisualTab('doctor')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    activeVisualTab === 'doctor'
                      ? 'bg-white text-[#193D70] shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <User className="w-3.5 h-3.5 text-[#2798CC]" />
                  <span>Dr. Divya Rao</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveVisualTab('clinic')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    activeVisualTab === 'clinic'
                      ? 'bg-white text-[#193D70] shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Building2 className="w-3.5 h-3.5 text-[#168D3D]" />
                  <span>Clinic Facility</span>
                </button>
              </div>

              <div className="text-[11px] text-slate-500 font-medium">
                Verified Clinic Profile
              </div>
            </div>

            {/* Visual Container */}
            <div className="relative">
              {activeVisualTab === 'doctor' ? (
                <DoctorVisual size="hero" className="w-full" />
              ) : (
                <ClinicBuildingVisual className="w-full min-h-[420px]" />
              )}

              {/* Floating Doctor/Clinic Trust Badge */}
              <div className="absolute -bottom-4 -left-3 sm:-left-6 bg-white p-3 rounded-xl border border-[#2798CC]/20 shadow-md flex items-center gap-3 max-w-xs">
                <div className="w-10 h-10 rounded-lg bg-[#F2FAF4] text-[#168D3D] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#193D70]">Omni Dental Care</p>
                  <p className="text-[11px] text-slate-500">Pediatric & Multi-Speciality Clinic</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
