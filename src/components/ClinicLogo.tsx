import React, { useState, useEffect } from 'react';

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
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [imgFailed, setImgFailed] = useState(false);

  useEffect(() => {
    // Check localStorage first (if uploaded via the web interface)
    const storedLogo = localStorage.getItem('omni_clinic_logo');
    if (storedLogo) {
      setImageSrc(storedLogo);
      return;
    }

    // Check candidate paths in public/images
    const candidatePaths = [
      '/images/Omni logo.jpeg',
      '/images/omni-logo.jpeg',
      '/images/omni-logo.png',
      '/images/omni_logo.jpeg',
      '/images/omni_logo.png'
    ];

    let found = false;
    for (const path of candidatePaths) {
      const img = new Image();
      img.onload = () => {
        if (!found) {
          found = true;
          setImageSrc(path);
        }
      };
      img.src = path;
    }
  }, []);

  const isWhite = variant === 'white';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Clinic Logo Emblem */}
      <div className="relative flex items-center justify-center shrink-0">
        {imageSrc && !imgFailed ? (
          <img
            src={imageSrc}
            alt="Omni Dental Care Logo"
            className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-full shadow-2xs"
            onError={() => setImgFailed(true)}
            referrerPolicy="no-referrer"
          />
        ) : (
          /* Exact high-fidelity SVG recreation of the official Omni Dental Care logo */
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-white shadow-2xs relative">
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer Circular Arcs */}
              {/* Green Arc (Top & Left) */}
              <path
                d="M 100 12 A 88 88 0 0 0 12 100"
                stroke="#168D3D"
                strokeWidth="12"
                strokeLinecap="round"
              />
              <path
                d="M 100 12 A 88 88 0 0 1 180 60"
                stroke="#168D3D"
                strokeWidth="12"
                strokeLinecap="round"
              />

              {/* Blue/Navy Arc (Bottom & Left) */}
              <path
                d="M 12 100 A 88 88 0 0 0 100 188"
                stroke="#193D70"
                strokeWidth="12"
                strokeLinecap="round"
              />
              <path
                d="M 100 188 A 88 88 0 0 0 188 100"
                stroke="#168D3D"
                strokeWidth="12"
                strokeLinecap="round"
              />

              {/* Central Tooth Shape */}
              <g id="tooth">
                {/* Right / Main Blue Tooth Body */}
                <path
                  d="M 80 58 C 95 62 110 65 125 60 C 135 70 148 76 150 96 C 152 116 142 142 120 162 C 114 140 102 118 90 114 C 82 126 78 142 75 160 C 65 152 50 120 50 95 C 50 78 65 54 80 58 Z"
                  fill="#2798CC"
                />

                {/* Left Green Section / Root with shadow */}
                <path
                  d="M 80 58 C 70 65 52 82 50 98 C 48 118 60 146 75 160 C 76 135 82 115 90 105 C 75 95 60 85 80 58 Z"
                  fill="#168D3D"
                />

                {/* Green Shaded Fold Detail */}
                <path
                  d="M 52 92 C 72 96 85 102 92 115 C 84 125 78 142 75 160 C 66 145 56 122 52 92 Z"
                  fill="#0D6B2C"
                />

                {/* Shield on Upper Right */}
                <path
                  d="M 122 50 C 132 44 142 44 150 50 C 150 68 142 78 136 82 C 130 78 122 68 122 50 Z"
                  fill="#168D3D"
                />
                {/* White Cross inside Shield */}
                <path
                  d="M 136 56 V 74 M 127 65 H 145"
                  stroke="#FFFFFF"
                  strokeWidth="4"
                  strokeLinecap="round"
                />

                {/* Letters O M N I */}
                {/* O in circle */}
                <circle cx="72" cy="80" r="10" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
                <circle cx="72" cy="80" r="5" stroke="#FFFFFF" strokeWidth="2" fill="none" />

                {/* M */}
                <text
                  x="90"
                  y="92"
                  fill="#FFFFFF"
                  fontSize="22"
                  fontWeight="900"
                  fontFamily="system-ui, sans-serif"
                >
                  M
                </text>

                {/* N */}
                <text
                  x="112"
                  y="110"
                  fill="#FFFFFF"
                  fontSize="22"
                  fontWeight="900"
                  fontFamily="system-ui, sans-serif"
                >
                  N
                </text>

                {/* I */}
                <text
                  x="132"
                  y="126"
                  fill="#FFFFFF"
                  fontSize="20"
                  fontWeight="900"
                  fontFamily="system-ui, sans-serif"
                >
                  I
                </text>
              </g>
            </svg>
          </div>
        )}
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
