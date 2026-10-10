import React from 'react';
import { ShieldCheck, Heart, Sparkles, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { ClinicBuildingVisual } from './ClinicBuildingVisual';
import { CLINIC_CONTACT } from '../data/treatments';

interface AboutSectionProps {
  onBookAppointmentClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onBookAppointmentClick }) => {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#F2F9FC]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Clinic Building Image Card */}
          <div className="lg:col-span-5">
            <div className="relative">
              <ClinicBuildingVisual className="w-full min-h-[400px] shadow-lg" />
              
              {/* Location Badge below card */}
              <div className="mt-3 bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-2xs flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#2798CC] shrink-0" />
                  <div className="text-xs">
                    <span className="font-bold text-[#193D70]">Borkhera Labour Chauraha</span>
                    <span className="text-slate-500 block">Opp. Sanjay Gandhi School, Kota</span>
                  </div>
                </div>
                <a
                  href={CLINIC_CONTACT.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#168D3D] hover:underline shrink-0"
                >
                  Directions →
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: About Details */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-[#2798CC]/20 text-[#193D70] text-xs font-semibold mb-4 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#2798CC]" />
              <span>About Omni Dental Care</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#193D70] font-heading tracking-tight leading-tight">
              Compassionate Dentistry for <br />
              <span className="text-[#2798CC]">Every Generation in Your Family</span>
            </h2>

            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Located at Borkhera Labour Chauraha in Kota, Rajasthan, <strong>Omni Dental Care</strong> is committed to delivering gentle, ethical, and high-quality dental treatments in a warm, welcoming clinical atmosphere.
            </p>

            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              We understand that visiting the dentist can bring apprehension. That is why our clinical philosophy centers around patient comfort, clear treatment explanations, rigorous sterilization standards, and personalized attention from the moment you step through our doors.
            </p>

            {/* Core Commitments Checklist */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80">
                <CheckCircle className="w-4 h-4 text-[#168D3D] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-[#193D70] block">Child-Friendly Atmosphere</strong>
                  <span className="text-slate-500">Pediatric dentistry designed to alleviate dental anxiety for young children.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80">
                <CheckCircle className="w-4 h-4 text-[#2798CC] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-[#193D70] block">Sterilization & Hygiene</strong>
                  <span className="text-slate-500">Strict instrument disinfection and hygiene protocols for patient safety.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80">
                <CheckCircle className="w-4 h-4 text-[#168D3D] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-[#193D70] block">Transparent Consultations</strong>
                  <span className="text-slate-500">Every treatment choice is thoroughly discussed with honest recommendations.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80">
                <CheckCircle className="w-4 h-4 text-[#2798CC] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-[#193D70] block">Modern Equipment</strong>
                  <span className="text-slate-500">Rotary endodontics, digital diagnostics, and gentle treatment chairs.</span>
                </div>
              </div>
            </div>

            {/* CTA action */}
            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={onBookAppointmentClick}
                type="button"
                className="inline-flex items-center gap-2 bg-[#193D70] hover:bg-[#132f57] text-white text-sm font-semibold px-5 py-3 rounded-xl shadow-xs transition-all active:scale-[0.98] cursor-pointer"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#2798CC]" />
              </button>

              <a
                href={CLINIC_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-[#168D3D] hover:underline"
              >
                Ask a Question on WhatsApp →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
