import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Award, Upload, Image as ImageIcon, Heart } from 'lucide-react';

interface DoctorVisualProps {
  className?: string;
  size?: 'hero' | 'card' | 'compact';
}

export const DoctorVisual: React.FC<DoctorVisualProps> = ({
  className = '',
  size = 'hero'
}) => {
  const [photoSrc, setPhotoSrc] = useState<string | null>(null);
  const [candidateIdx, setCandidateIdx] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const candidateImages = [
    '/images/Dr.Divya Rao.jpeg',
    '/images/dr-divya-rao.jpeg',
    '/images/Dr.Divya Rao.jpg',
    '/images/dr-divya-rao.jpg',
    '/images/dr_divya_rao.jpeg',
    '/images/dr_divya_rao.jpg',
    '/images/doctor.jpg'
  ];

  useEffect(() => {
    // Check localStorage first
    const storedPhoto = localStorage.getItem('omni_doctor_photo');
    if (storedPhoto) {
      setPhotoSrc(storedPhoto);
      return;
    }

    // Try candidate paths
    let found = false;
    for (const path of candidateImages) {
      const img = new Image();
      img.onload = () => {
        if (!found) {
          found = true;
          setPhotoSrc(path);
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
          setPhotoSrc(result);
          try {
            localStorage.setItem('omni_doctor_photo', result);
          } catch (err) {
            console.warn('Storage limit reached for local photo caching', err);
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
      setPhotoSrc(candidateImages[nextIdx]);
    } else {
      setPhotoSrc(null);
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

      {photoSrc ? (
        /* Real Doctor Photograph displayed with object-fit: cover, proper positioning, and rounded corners */
        <div className="relative w-full h-full min-h-[420px] flex items-center justify-center overflow-hidden group">
          <img
            src={photoSrc}
            alt="Dr. Divya Rao (B.D.S., M.D.S.) - Consultant Pedodontist at Omni Dental Care"
            className="w-full h-full min-h-[420px] object-cover object-top rounded-2xl transition-transform duration-500 group-hover:scale-102"
            onError={handleImgError}
            referrerPolicy="no-referrer"
          />
          {/* Subtle bottom gradient for readability */}
          <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-[#193D70] via-[#193D70]/85 to-transparent text-white rounded-b-2xl">
            <div className="flex items-end justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#168D3D] text-white text-[10px] font-bold uppercase tracking-wider mb-1.5">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Consultant Pedodontist</span>
                </div>
                <h3 className="text-xl font-bold font-heading">Dr. Divya Rao</h3>
                <p className="text-xs text-[#2798CC] font-bold">B.D.S., M.D.S.</p>
                <p className="text-[11px] text-slate-200 mt-0.5">
                  Pediatric Dental Specialist · Omni Dental Care
                </p>
              </div>

              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] bg-white/20 hover:bg-white/30 text-white px-2 py-1 rounded-md backdrop-blur-xs flex items-center gap-1"
                title="Change or re-upload photo"
              >
                <Upload className="w-3 h-3" />
                <span>Update Photo</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Clean Professional Healthcare Placeholder (NO cartoon avatars, NO emojis, NO AI faces) */
        <div className="relative w-full h-full min-h-[420px] p-6 flex flex-col justify-between items-center text-center bg-gradient-to-b from-[#F2F9FC] to-white rounded-2xl">
          {/* Top Verification Header */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white rounded-full border border-[#2798CC]/20 text-[#193D70] text-xs font-semibold shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-[#168D3D]" />
            <span>Consultant Pedodontist Specialist</span>
          </div>

          {/* Neutral Dignified Clinical Emblem (NOT a face or cartoon) */}
          <div className="my-6 flex flex-col items-center">
            <div className="w-24 h-24 rounded-2xl bg-white border-2 border-dashed border-[#2798CC]/40 flex items-center justify-center text-[#2798CC] shadow-xs mb-4">
              <ImageIcon className="w-10 h-10 text-[#2798CC]/70" />
            </div>

            <h3 className="text-2xl font-extrabold text-[#193D70] font-heading">
              Dr. Divya Rao
            </h3>
            <p className="text-sm font-bold text-[#168D3D] mt-0.5">
              B.D.S., M.D.S.
            </p>
            <p className="text-xs text-slate-600 mt-1">
              Consultant Pedodontist (Pediatric Dentist)
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Omni Dental Care · Kota, Rajasthan
            </p>
          </div>

          {/* Clear Asset Upload Guidance Box as instructed */}
          <div className="w-full bg-white p-4 rounded-xl border border-slate-200/90 shadow-2xs text-left">
            <div className="flex items-start gap-2.5">
              <Upload className="w-4 h-4 text-[#2798CC] shrink-0 mt-0.5" />
              <div className="text-xs">
                <p className="font-bold text-[#193D70]">
                  Doctor Photograph File:
                </p>
                <p className="text-[11px] text-slate-600 mt-0.5">
                  Upload file as <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-800 font-mono text-[10px]">/public/images/Dr.Divya Rao.jpeg</code>
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="mt-3 w-full py-2 px-3 rounded-lg bg-[#2798CC] hover:bg-[#1f80ad] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Click to Select & Load 'Dr.Divya Rao.jpeg'</span>
            </button>
          </div>

          {/* Clinical Pillars */}
          <div className="w-full grid grid-cols-2 gap-2 mt-4 text-left">
            <div className="p-2.5 rounded-lg bg-[#F2FAF4] border border-[#168D3D]/20 text-xs">
              <p className="font-bold text-[#168D3D]">Pediatric Dental Care</p>
              <p className="text-[10px] text-slate-600">Child-friendly treatments</p>
            </div>
            <div className="p-2.5 rounded-lg bg-[#F2F9FC] border border-[#2798CC]/20 text-xs">
              <p className="font-bold text-[#193D70]">M.D.S. Specialist</p>
              <p className="text-[10px] text-slate-600">Preserving young smiles</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
