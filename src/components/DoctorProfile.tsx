import React from 'react';
import { Calendar, ShieldCheck, Phone, GraduationCap, Stethoscope, MapPin } from 'lucide-react';
import { DoctorVisual, DR_DIVYA_RAO_PHOTO } from './DoctorVisual';
import { CLINIC_CONTACT } from '../data/treatments';

interface DoctorProfileProps {
  onBookAppointmentClick: () => void;
}

interface VerifiedDoctor {
  id: string;
  name: string;
  qualifications: string;
  specialization: string;
  clinicalRole: string;
  location: string;
  photoSrc: string;
  bio: string[];
  expertise: string[];
}

const VERIFIED_DOCTORS: VerifiedDoctor[] = [
  {
    id: 'dr-divya-rao',
    name: 'Dr. Divya Rao',
    qualifications: 'B.D.S., M.D.S.',
    specialization: 'Consultant Pedodontist (Pediatric Dentist)',
    clinicalRole: 'Specialist in Pedodontics & Preventive Dentistry',
    location: 'Omni Dental Care, Borkhera, Kota',
    photoSrc: DR_DIVYA_RAO_PHOTO,
    bio: [
      'Dr. Divya Rao holds a Bachelor of Dental Surgery (B.D.S.) and a Master of Dental Surgery (M.D.S.) with specialization in Pedodontics and Preventive Dentistry.',
      'As a Consultant Pedodontist at Omni Dental Care, she focuses on gentle, child-friendly oral healthcare, early preventive guidance, and transparent communication with parents and families.',
    ],
    expertise: [
      'Pediatric Dental Treatments',
      'Early Preventive Oral Care',
      'Child Habit Counseling & Guidance',
      'Cavity Prevention & Fluoride Care',
    ],
  },
];

export const DoctorProfile: React.FC<DoctorProfileProps> = ({ onBookAppointmentClick }) => {
  return (
    <section id="doctor" className="py-16 md:py-24 bg-gradient-to-b from-white via-[#F2FAF4]/35 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F2FAF4] text-[#168D3D] rounded-full text-xs font-semibold mb-3 border border-[#168D3D]/20">
            <Stethoscope className="w-3.5 h-3.5" />
            <span>Verified Clinical Specialist</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#193D70] font-heading tracking-tight">
            Our Doctors
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-600">
            Dedicated dental specialist providing gentle, evidence-based care for children and families at Omni Dental Care, Kota.
          </p>
        </div>

        {/* Individual Doctor Profile Cards */}
        <div className="space-y-8">
          {VERIFIED_DOCTORS.map((doctor) => (
            <article
              key={doctor.id}
              className="max-w-4xl mx-auto bg-white rounded-3xl border border-[#2798CC]/20 shadow-md overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-stretch">

                {/* Clean Portrait Crop Column */}
                <div className="md:col-span-5 p-6 sm:p-8 flex items-center justify-center bg-gradient-to-b from-[#F2F9FC] to-[#F2FAF4]/80">
                  <div className="w-full max-w-[290px]">
                    <DoctorVisual
                      imageSrc={doctor.photoSrc}
                      doctorName={doctor.name}
                      qualifications={doctor.qualifications}
                      specialization={doctor.specialization}
                      showOverlay={false}
                      className="w-full shadow-sm"
                    />
                  </div>
                </div>

                {/* Verified Credentials & Bio Column */}
                <div className="md:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between text-left">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#168D3D]/10 text-[#168D3D] text-xs font-semibold">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>M.D.S. Specialist</span>
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500">
                        <MapPin className="w-3.5 h-3.5 text-[#2798CC]" />
                        <span>{doctor.location}</span>
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#193D70] font-heading">
                      {doctor.name}
                    </h3>

                    {/* Verified Credentials Grid */}
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-3 rounded-xl bg-[#F2F9FC]/70 border border-[#2798CC]/15">
                        <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                          <GraduationCap className="w-3.5 h-3.5 text-[#2798CC]" />
                          <span>Qualifications</span>
                        </div>
                        <p className="mt-1 text-sm font-bold text-[#193D70]">
                          {doctor.qualifications}
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-[#F2FAF4]/80 border border-[#168D3D]/15">
                        <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                          <Stethoscope className="w-3.5 h-3.5 text-[#168D3D]" />
                          <span>Specialization</span>
                        </div>
                        <p className="mt-1 text-sm font-bold text-[#193D70]">
                          {doctor.specialization}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 space-y-3 text-sm text-slate-600 leading-relaxed">
                      {doctor.bio.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>

                    {/* Focus Areas */}
                    <div className="mt-6 pt-5 border-t border-slate-100">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                        Areas of Clinical Focus
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
                        {doctor.expertise.map((area, idx) => (
                          <div key={area} className="flex items-center gap-2">
                            <span
                              className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                                idx % 2 === 0 ? 'bg-[#168D3D]' : 'bg-[#2798CC]'
                              }`}
                            />
                            <span>{area}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Book Appointment Action */}
                  <div className="mt-7 pt-5 border-t border-slate-100 flex flex-wrap items-center gap-3">
                    <button
                      onClick={onBookAppointmentClick}
                      type="button"
                      className="inline-flex items-center gap-2 bg-[#2798CC] hover:bg-[#1f80ad] text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-xs hover:shadow-sm transition-all active:scale-[0.98] cursor-pointer"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book Appointment</span>
                    </button>

                    <a
                      href={`tel:+91${CLINIC_CONTACT.phone}`}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#193D70] hover:text-[#2798CC] px-3.5 py-2.5 rounded-xl border border-slate-200 hover:bg-[#F2F9FC] transition-colors"
                    >
                      <Phone className="w-4 h-4 text-[#2798CC]" />
                      <span>Call: {CLINIC_CONTACT.phoneFormatted}</span>
                    </a>
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

