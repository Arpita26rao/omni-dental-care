import React from 'react';

interface ClinicLogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'white';
  showSubtitle?: boolean;
}

export const ClinicLogo: React.FC<ClinicLogoProps> = ({
  className = '',
  variant = 'full',
  showSubtitle = true
}) => {
  const isWhite = variant === 'white';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official Omni Dental Care Logo Image */}
      <div className="relative flex items-center justify-center shrink-0">
        <div
          className={`w-11 h-11 md:w-12 md:h-12 rounded-xl flex items-center justify-center p-1 border shadow-xs overflow-hidden ${
            isWhite
              ? 'bg-white border-white/20'
              : 'bg-white border-slate-200/80 hover:border-[#2798CC]/40'
          } transition-colors`}
        >
          <img
            src="/images/omni-logo.png"
            alt="Omni Dental Care Logo"
            className="w-full h-full object-contain aspect-square"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Brand Name Typography */}
      {variant !== 'icon' && (
        <div className="flex flex-col text-left leading-tight">
          <span
            className={`font-extrabold tracking-tight text-lg md:text-xl font-heading ${
              isWhite ? 'text-white' : 'text-[#193D70]'
            }`}
          >
            OMNI <span className={isWhite ? 'text-[#2798CC]' : 'text-[#2798CC]'}>DENTAL</span>{' '}
            <span className={isWhite ? 'text-[#34D399]' : 'text-[#168D3D]'}>CARE</span>
          </span>
          {showSubtitle && (
            <span
              className={`text-[10px] md:text-[11px] font-semibold tracking-wider uppercase ${
                isWhite ? 'text-slate-300' : 'text-slate-500'
              }`}
            >
              Multi-Speciality Clinic · Kota
            </span>
          )}
        </div>
      )}
    </div>
  );
};
