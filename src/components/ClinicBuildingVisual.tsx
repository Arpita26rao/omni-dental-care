import React, { useState } from 'react';
import { MapPin, ShieldCheck } from 'lucide-react';
import { CLINIC_CONTACT } from '../data/treatments';

interface ClinicBuildingVisualProps {
  className?: string;
  showBadge?: boolean;
  aspectClass?: string;
}

export const CLINIC_BUILDING_PHOTO = '/images/clinic-building.jpeg';
export const CLINIC_CERTIFICATES_PHOTO = '/images/clinic-certificates.jpeg';

export const ClinicBuildingVisual: React.FC<ClinicBuildingVisualProps> = ({
  className = '',
  showBadge = true,
  aspectClass = 'aspect-[3/4]',
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-white border border-[#2798CC]/20 shadow-md ${className}`}
    >
      {!imgError ? (
        <div
          className={`relative w-full ${aspectClass} flex items-center justify-center overflow-hidden bg-slate-50`}
        >
          <img
            src={CLINIC_BUILDING_PHOTO}
            alt="Omni Dental Care clinic building exterior and entrance at Borkhera Labour Chauraha, Kota"
            className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-[1.015]"
            onError={() => setImgError(true)}
            loading="eager"
          />
          {showBadge && (
            <>
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#193D70]/90 via-[#193D70]/40 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 inset-x-0 p-4 text-white text-left">
                <p className="text-base font-bold">Omni Dental Care</p>
                <p className="text-xs text-slate-200 flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#2798CC] shrink-0" />
                  <span>Borkhera Labour Chauraha, Opp. Sanjay Gandhi School, Kota</span>
                </p>
              </div>
            </>
          )}
        </div>
      ) : (
        /* Fallback representation */
        <div className="relative w-full h-full min-h-[320px] flex flex-col justify-between p-6 text-slate-800 overflow-hidden bg-gradient-to-br from-[#F2F9FC] to-[#F2FAF4]">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/90 rounded-full border border-[#2798CC]/20 text-[#193D70] text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#168D3D]" />
              <span>Multi-Speciality Dental Clinic</span>
            </div>
            <div className="flex items-center gap-1 text-xs font-medium text-slate-500 bg-white/80 px-2.5 py-1 rounded-md">
              <MapPin className="w-3.5 h-3.5 text-[#2798CC]" />
              <span>Kota, Rajasthan</span>
            </div>
          </div>

          <div className="my-4 text-center">
            <h4 className="text-lg font-bold text-[#193D70]">OMNI DENTAL CARE</h4>
            <p className="text-xs text-slate-600 mt-1">Borkhera Labour Chauraha, Kota</p>
          </div>

          <div className="bg-white/90 p-3 rounded-xl border border-slate-100 flex items-center justify-between text-xs">
            <div>
              <p className="font-semibold text-[#193D70]">Borkhera Labour Chauraha</p>
              <p className="text-[11px] text-slate-500">Opposite Sanjay Gandhi School, Kota</p>
            </div>
            <a
              href={CLINIC_CONTACT.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2798CC] font-semibold hover:underline"
            >
              View Map →
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

