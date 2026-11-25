import React from 'react';
import { Calendar, ArrowRight, Building2, MapPin, CheckCircle2, MessageCircle, ExternalLink } from 'lucide-react';
import { CLINIC_CONTACT } from '../data/treatments';

interface HeroProps {
  onBookAppointmentClick: () => void;
  onExploreTreatmentsClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onBookAppointmentClick,
  onExploreTreatmentsClick,
}) => {
  return (
    <section id="home" className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F2F9FC]/60 via-white to-white">
      {/* Decorative Subtle Dental Accent Circles */}
      <div className="absolute top-10 right-5 w-96 h-96 rounded-full bg-[#2798CC]/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-96 h-96 rounded-full bg-[#168D3D]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">

          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Verified Location & Speciality Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F2F9FC] border border-[#2798CC]/20 text-[#193D70] text-xs font-semibold mb-6 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#168D3D]" />
              <span>Omni Dental Care · Multi-Speciality Dental Clinic</span>
              <span className="text-slate-300">·</span>
              <span className="text-[#2798CC]">Kota, Rajasthan</span>
            </div>

            {/* Exact Headline Required */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#193D70] tracking-tight leading-[1.15] font-heading">
              Healthy Smiles <br />
              <span className="text-[#2798CC]">Begin Here.</span>
            </h1>

            {/* Exact Supporting Text Required */}
            <p className="mt-5 text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed">
              Personalized dental care for healthier smiles and confident lives. Trusted pediatric, preventive, restorative, and implant dentistry in Borkhera, Kota.
            </p>

            {/* Key Verified Clinic Highlights */}
            <div className="mt-6 flex flex-wrap gap-y-2.5 gap-x-5 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#168D3D] shrink-0" />
                <span className="font-medium text-slate-700">Pediatric &amp; Family Dental Care</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#2798CC] shrink-0" />
                <span className="font-medium text-slate-700">Hygienic &amp; Painless Treatments</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#168D3D] shrink-0" />
                <span className="font-medium text-slate-700">M.D.S. Specialist Care</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onBookAppointmentClick}
                type="button"
                className="inline-flex items-center justify-center gap-2 bg-[#2798CC] hover:bg-[#1f80ad] text-white text-base font-semibold px-6 py-3.5 rounded-xl shadow-sm hover:shadow transition-all active:scale-[0.98] cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                <span>Book an Appointment</span>
              </button>

              <a
                href={`${CLINIC_CONTACT.whatsappUrl}?text=${encodeURIComponent(CLINIC_CONTACT.defaultQrMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#168D3D] hover:bg-[#127733] text-white text-base font-semibold px-6 py-3.5 rounded-xl shadow-sm hover:shadow transition-all active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </a>

              <button
                onClick={onExploreTreatmentsClick}
                type="button"
                className="inline-flex items-center justify-center gap-1.5 bg-white hover:bg-[#F2F9FC] text-[#193D70] border border-slate-200 text-sm font-semibold px-4 py-3.5 rounded-xl shadow-2xs hover:border-[#2798CC]/40 transition-all cursor-pointer"
              >
                <span>Explore Treatments</span>
                <ArrowRight className="w-4 h-4 text-[#2798CC]" />
              </button>
            </div>

            {/* Location & Phone Footnote */}
            <div className="mt-7 pt-5 border-t border-slate-100 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#2798CC] shrink-0" />
                <span>Opposite Sanjay Gandhi School, Borkhera Labour Chauraha, Kota</span>
              </div>
              <span className="text-slate-300 hidden sm:inline">|</span>
              <a
                href={`tel:+91${CLINIC_CONTACT.phone}`}
                className="text-[#193D70] hover:text-[#2798CC] font-semibold transition-colors"
              >
                Call: {CLINIC_CONTACT.phoneFormatted}
              </a>
            </div>
          </div>

          {/* Right Hero Visual: Clinic Facility Only */}
          <div className="lg:col-span-5 relative w-full max-w-md mx-auto lg:max-w-[440px] lg:ml-auto">
            {/* Clinic Facility Header Label (No Doctor Toggle) */}
            <div className="mb-3 flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-[#2798CC]/20 text-[#193D70] text-xs font-semibold shadow-2xs">
                <Building2 className="w-3.5 h-3.5 text-[#168D3D]" />
                <span>Clinic Facility</span>
              </div>
              <span className="text-[11px] font-medium text-slate-500">
                Borkhera, Kota
              </span>
            </div>

            {/* Premium Clinic Building Photograph Card */}
            <div className="rounded-3xl bg-white border border-[#2798CC]/20 shadow-lg overflow-hidden">
              <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] max-h-[480px] bg-slate-100 overflow-hidden">
                <img
                  src="/images/clinic-building.jpeg"
                  alt="Omni Dental Care clinic building exterior at Borkhera Labour Chauraha, Kota, Rajasthan"
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
                  loading="eager"
                  decoding="async"
                />
              </div>

              {/* Clinic Name, Address & View Map Link Below Photograph */}
              <div className="p-4 sm:p-5 bg-white border-t border-slate-100 flex items-center justify-between gap-3 text-left">
                <div className="min-w-0">
                  <p className="text-sm sm:text-base font-extrabold text-[#193D70] font-heading">
                    Omni Dental Care
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5 flex items-start gap-1.5 leading-snug">
                    <MapPin className="w-3.5 h-3.5 text-[#2798CC] shrink-0 mt-0.5" />
                    <span>Borkhera Labour Chauraha, Opposite Sanjay Gandhi School, Kota</span>
                  </p>
                </div>

                <a
                  href={CLINIC_CONTACT.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#F2FAF4] hover:bg-[#168D3D] text-[#168D3D] hover:text-white border border-[#168D3D]/20 text-xs font-semibold transition-colors shrink-0"
                >
                  <span>View Map</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};


