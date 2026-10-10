import React, { useState, useEffect, useRef } from 'react';
import { MapPin, ShieldCheck, Upload, Building2, ExternalLink } from 'lucide-react';
import { CLINIC_CONTACT } from '../data/treatments';

interface ClinicBuildingVisualProps {
  className?: string;
  showBadge?: boolean;
}

export const ClinicBuildingVisual: React.FC<ClinicBuildingVisualProps> = ({
  className = '',
  showBadge = true
}) => {
  const [buildingSrc, setBuildingSrc] = useState<string | null>(null);
  const [candidateIdx, setCandidateIdx] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const candidateImages = [
    '/images/clinic-building.jpeg',
    '/images/clinic-building.jpg',
    '/images/clinic_building.jpeg',
    '/images/clinic_building.jpg',
    '/images/clinic.jpeg',
    '/images/clinic.jpg',
    '/clinic-building.jpg'
  ];

  useEffect(() => {
    const stored = localStorage.getItem('omni_clinic_building');
    if (stored) {
      setBuildingSrc(stored);
      return;
    }

    let found = false;
    for (const path of candidateImages) {
      const img = new Image();
      img.onload = () => {
        if (!found) {
          found = true;
          setBuildingSrc(path);
        }
      };
      img.src = path;
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setBuildingSrc(result);
          try {
            localStorage.setItem('omni_clinic_building', result);
          } catch (err) {
            console.warn('Storage limit reached for local building image caching', err);
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImgError = () => {
    if (candidateIdx < candidateImages.length - 1) {
      const nextIdx = candidateIdx + 1;
      setCandidateIdx(nextIdx);
      setBuildingSrc(candidateImages[nextIdx]);
    } else {
      setBuildingSrc(null);
    }
  };

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-white border border-[#2798CC]/20 shadow-md ${className}`}
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />

      {buildingSrc ? (
        /* Real Clinic Building Photograph with object-fit: cover, proper positioning, and rounded corners */
        <div className="relative w-full h-full min-h-[380px] flex items-center justify-center overflow-hidden group">
          <img
            src={buildingSrc}
            alt="Omni Dental Care Clinic Building - Borkhera Labour Chauraha, Kota"
            className="w-full h-full min-h-[380px] object-cover object-center rounded-2xl transition-transform duration-500 group-hover:scale-102"
            onError={handleImgError}
            referrerPolicy="no-referrer"
          />
          {showBadge && (
            <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-[#193D70] via-[#193D70]/85 to-transparent text-white rounded-b-2xl">
              <div className="flex items-end justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#2798CC] text-white text-[10px] font-bold uppercase tracking-wider mb-1.5">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Clinic Facility</span>
                  </div>
                  <h3 className="text-xl font-bold font-heading">Omni Dental Care</h3>
                  <p className="text-xs text-slate-200 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-[#2798CC]" />
                    Borkhera Labour Chauraha, Opp. Sanjay Gandhi School, Kota
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] bg-white/20 hover:bg-white/30 text-white px-2 py-1 rounded-md backdrop-blur-xs flex items-center gap-1"
                  title="Change clinic building photo"
                >
                  <Upload className="w-3 h-3" />
                  <span>Update Photo</span>
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Clean Professional Building Placeholder */
        <div className="relative w-full h-full min-h-[380px] p-6 flex flex-col justify-between items-center text-center bg-gradient-to-b from-[#F2F9FC] to-white rounded-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white rounded-full border border-[#2798CC]/20 text-[#193D70] text-xs font-semibold shadow-2xs">
            <Building2 className="w-4 h-4 text-[#2798CC]" />
            <span>Clinic Infrastructure</span>
          </div>

          <div className="my-6 flex flex-col items-center">
            <div className="w-20 h-20 rounded-2xl bg-white border-2 border-dashed border-[#2798CC]/40 flex items-center justify-center text-[#2798CC] shadow-xs mb-3">
              <Building2 className="w-9 h-9 text-[#2798CC]/70" />
            </div>

            <h3 className="text-xl font-bold text-[#193D70] font-heading">
              Omni Dental Care Facility
            </h3>
            <p className="text-xs text-[#168D3D] font-semibold mt-0.5">
              Borkhera Labour Chauraha, Opposite Sanjay Gandhi School
            </p>
            <p className="text-[11px] text-slate-500 mt-1">
              Kota, Rajasthan, India
            </p>
          </div>

          {/* Asset Upload Guidance Box */}
          <div className="w-full bg-white p-4 rounded-xl border border-slate-200/90 shadow-2xs text-left">
            <div className="flex items-start gap-2.5">
              <Upload className="w-4 h-4 text-[#2798CC] shrink-0 mt-0.5" />
              <div className="text-xs">
                <p className="font-bold text-[#193D70]">
                  Clinic Building Photograph:
                </p>
                <p className="text-[11px] text-slate-600 mt-0.5">
                  Upload file as <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-800 font-mono text-[10px]">/public/images/clinic-building.jpeg</code>
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="mt-3 w-full py-2 px-3 rounded-lg bg-[#2798CC] hover:bg-[#1f80ad] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Click to Select & Load 'clinic-building.jpeg'</span>
            </button>
          </div>

          {/* Location link */}
          <div className="w-full pt-3 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 mt-4">
            <span>Verified Clinic Location</span>
            <a
              href={CLINIC_CONTACT.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2798CC] font-semibold hover:underline inline-flex items-center gap-1"
            >
              <span>View Map</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
