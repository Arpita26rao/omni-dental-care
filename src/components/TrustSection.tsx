import React from 'react';
import { Layers, HeartHandshake, Baby } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const trustPillars = [
    {
      title: 'Multi-Speciality Dental Care',
      description:
        'Comprehensive oral health treatments under one roof, ranging from advanced root canals and implants to braces, extractions, and cosmetic dentistry.',
      icon: Layers,
      accentColor: '#2798CC',
      bgColor: 'bg-[#F2F9FC]',
      borderColor: 'border-[#2798CC]/20',
      badge: 'All Ages Welcome'
    },
    {
      title: 'Personalized Patient Care',
      description:
        'Every patient receives individualized attention, calm chairside communication, transparent diagnosis, and customized treatment plans suited to their comfort.',
      icon: HeartHandshake,
      accentColor: '#168D3D',
      bgColor: 'bg-[#F2FAF4]',
      borderColor: 'border-[#168D3D]/20',
      badge: 'Gentle & Patient-First'
    },
    {
      title: 'Pediatric Dental Specialist',
      description:
        'Specialized child oral care spearheaded by Dr. Divya Rao (B.D.S., M.D.S. Consultant Pedodontist), creating fear-free and positive dental experiences for young smiles.',
      icon: Baby,
      accentColor: '#193D70',
      bgColor: 'bg-white',
      borderColor: 'border-slate-200',
      badge: 'M.D.S. Pedodontist'
    }
  ];

  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs font-bold uppercase tracking-wider text-[#2798CC]">
            Committed to Quality Dental Practice
          </p>
          <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-[#193D70] font-heading">
            Why Patients Choose Omni Dental Care
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            A patient-centric clinic dedicated to ethical dentistry, sterilization protocols, and compassionate care in Kota.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trustPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={`rounded-2xl p-6 ${pillar.bgColor} border ${pillar.borderColor} shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-xs"
                      style={{ backgroundColor: pillar.accentColor }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 bg-white/80 px-2.5 py-1 rounded-full border border-slate-200">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#193D70] mb-2 font-heading">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-[#193D70]">
                  <span>Dedicated Standards in Kota</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
