import React, { useState } from 'react';
import { Award, ShieldCheck, Heart } from 'lucide-react';

interface DoctorVisualProps {
  className?: string;
  size?: 'hero' | 'card' | 'compact';
  showOverlay?: boolean;
  imageSrc?: string;
  doctorName?: string;
  qualifications?: string;
  specialization?: string;
}

export const DR_DIVYA_RAO_PHOTO = '/images/dr-divya-rao.jpeg';

export const DoctorVisual: React.FC<DoctorVisualProps> = ({
  className = '',
  showOverlay = true,
  imageSrc = DR_DIVYA_RAO_PHOTO,
  doctorName = 'Dr. Divya Rao',
  qualifications = 'B.D.S., M.D.S.',
  specialization = 'Consultant Pedodontist (Pediatric Dentist)',
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-white border border-[#2798CC]/20 shadow-md ${className}`}
    >
      {!imgError ? (
        <div className="relative w-full aspect-[3/4] flex items-center justify-center overflow-hidden bg-slate-50">
          <img
            src={imageSrc}
            alt={`${doctorName}, ${specialization} at Omni Dental Care`}
            className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-[1.015]"
            onError={() => setImgError(true)}
            loading="eager"
          />
          {showOverlay && (
            <>
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#193D70]/90 via-[#193D70]/40 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 inset-x-0 p-4 text-white text-left">
                <div className="flex items-end justify-between gap-2">
                  <div>
                    <p className="text-lg font-bold leading-snug">{doctorName}</p>
                    <p className="text-xs text-[#7DD3FC] font-semibold">{qualifications}</p>
                    <p className="text-[11px] text-slate-200">{specialization}</p>
                  </div>
                  <div className="px-2.5 py-1 bg-[#168D3D] rounded-full text-[10px] font-semibold tracking-wide uppercase shadow-xs shrink-0">
                    Specialist
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      ) : (
        /* Fallback representation if image cannot load */
        <div className="relative w-full aspect-[3/4] flex flex-col items-center justify-between p-6 text-center overflow-hidden bg-gradient-to-b from-[#F2F9FC] to-[#F2FAF4]">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-white/90 rounded-full border border-[#2798CC]/20 text-[#193D70] text-xs font-semibold">
            <ShieldCheck className="w-4 h-4 text-[#168D3D]" />
            <span>{specialization}</span>
          </div>

          <div className="my-4 flex flex-col items-center">
            <h3 className="text-xl font-bold text-[#193D70]">{doctorName}</h3>
            <p className="text-sm font-semibold text-[#168D3D]">{qualifications}</p>
            <p className="text-xs text-slate-600 mt-0.5">{specialization}</p>
          </div>

          <div className="w-full grid grid-cols-2 gap-2 text-left bg-white/95 p-3 rounded-xl border border-slate-100">
            <div className="flex items-start gap-2">
              <Heart className="w-4 h-4 text-[#2798CC] shrink-0 mt-0.5" />
              <div>
                <p className="text-[11px] font-semibold text-[#193D70]">Gentle & Caring</p>
                <p className="text-[10px] text-slate-500">Child-friendly clinic</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Award className="w-4 h-4 text-[#168D3D] shrink-0 mt-0.5" />
              <div>
                <p className="text-[11px] font-semibold text-[#193D70]">M.D.S. Specialist</p>
                <p className="text-[10px] text-slate-500">Pediatric dentistry</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

