import React from 'react';
import { Building2, MapPin, CheckCircle, Calendar, Navigation } from 'lucide-react';
import { ClinicBuildingVisual } from './ClinicBuildingVisual';
import { CLINIC_CONTACT } from '../data/treatments';

interface AboutSectionProps {
  onBookAppointmentClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onBookAppointmentClick }) => {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#F2F9FC]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Column: Real Clinic Building & Entrance Photograph */}
          <div className="lg:col-span-5">
            <div className="max-w-md mx-auto lg:max-w-none">
              <ClinicBuildingVisual
                className="w-full shadow-lg"
                showBadge={false}
                aspectClass="aspect-[3/4]"
              />

              {/* Address Caption Card below building photograph */}
              <div className="mt-3.5 bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs flex items-center justify-between gap-3">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#2798CC] shrink-0 mt-0.5" />
                  <div className="text-xs leading-snug">
                    <span className="font-bold text-[#193D70] block">
                      Omni Dental Care · Borkhera Labour Chauraha
                    </span>
                    <span className="text-slate-500 block mt-0.5">
                      Opposite Sanjay Gandhi School, Kota, Rajasthan
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Our Clinic Introduction & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-[#2798CC]/20 text-[#193D70] text-xs font-semibold mb-4 shadow-2xs">
              <Building2 className="w-3.5 h-3.5 text-[#2798CC]" />
              <span>Our Clinic</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#193D70] font-heading tracking-tight leading-tight">
              Welcome to <span className="text-[#2798CC]">Omni Dental Care</span>
            </h2>

            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Conveniently located at <strong>Borkhera Labour Chauraha, Opposite Sanjay Gandhi School, Kota, Rajasthan</strong>, Omni Dental Care is a multi-speciality dental and implant clinic dedicated to providing gentle, ethical, and modern oral healthcare for children, adults, and seniors.
            </p>

            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              From specialized pediatric dentistry led by Dr. Divya Rao (B.D.S., M.D.S.) to preventive, restorative, orthodontic, and implant care, our clinic focuses on patient comfort, clear communication, and strict clinical hygiene at every visit.
            </p>

            {/* Core Commitments Checklist */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full">
              <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                <CheckCircle className="w-4 h-4 text-[#168D3D] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-[#193D70] block">Child-Friendly Atmosphere</strong>
                  <span className="text-slate-500">Gentle pediatric dentistry designed to ease dental anxiety for young children.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                <CheckCircle className="w-4 h-4 text-[#2798CC] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-[#193D70] block">Sterilization & Hygiene</strong>
                  <span className="text-slate-500">Strict instrument disinfection and hygiene protocols for patient safety.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                <CheckCircle className="w-4 h-4 text-[#168D3D] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-[#193D70] block">Transparent Consultations</strong>
                  <span className="text-slate-500">Every treatment choice is thoroughly discussed with honest recommendations.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                <CheckCircle className="w-4 h-4 text-[#2798CC] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-[#193D70] block">Modern Equipment</strong>
                  <span className="text-slate-500">Rotary endodontics, digital diagnostics, and comfortable treatment chairs.</span>
                </div>
              </div>
            </div>

            {/* Primary Actions: Get Directions & Book Appointment */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href={CLINIC_CONTACT.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#168D3D] hover:bg-[#127733] text-white text-sm font-semibold px-5 py-3 rounded-xl shadow-xs hover:shadow-sm transition-all active:scale-[0.98]"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

              <button
                onClick={onBookAppointmentClick}
                type="button"
                className="inline-flex items-center gap-2 bg-[#2798CC] hover:bg-[#1f80ad] text-white text-sm font-semibold px-5 py-3 rounded-xl shadow-xs hover:shadow-sm transition-all active:scale-[0.98] cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

