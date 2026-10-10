import React, { useState } from 'react';
import { Upload, X, Check, Image as ImageIcon, Sparkles, AlertCircle, Trash2 } from 'lucide-react';

interface AssetUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AssetUploadModal: React.FC<AssetUploadModalProps> = ({ isOpen, onClose }) => {
  const [logoState, setLogoState] = useState<string | null>(
    () => localStorage.getItem('omni_clinic_logo')
  );
  const [doctorState, setDoctorState] = useState<string | null>(
    () => localStorage.getItem('omni_doctor_photo')
  );
  const [buildingState, setBuildingState] = useState<string | null>(
    () => localStorage.getItem('omni_clinic_building')
  );

  if (!isOpen) return null;

  const handleFileUpload = (
    key: 'omni_clinic_logo' | 'omni_doctor_photo' | 'omni_clinic_building',
    setter: (val: string | null) => void,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setter(result);
          try {
            localStorage.setItem(key, result);
            window.location.reload(); // Refresh to propagate across all components
          } catch (err) {
            console.warn('Failed to save to localStorage', err);
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemove = (
    key: 'omni_clinic_logo' | 'omni_doctor_photo' | 'omni_clinic_building',
    setter: (val: string | null) => void
  ) => {
    localStorage.removeItem(key);
    setter(null);
    window.location.reload();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 text-left relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#168D3D] mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Omni Dental Care · Clinic Assets</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#193D70] font-heading">
              Manage Clinic Photographs & Logo
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Select your real photos here or place them in the project folder.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Instructions Banner */}
        <div className="my-5 p-4 rounded-2xl bg-[#F2F9FC] border border-[#2798CC]/20 text-xs text-slate-700 space-y-1.5">
          <p className="font-bold text-[#193D70] flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4 text-[#2798CC]" />
            <span>Folder Location for Permanent Deployment:</span>
          </p>
          <p className="text-slate-600">
            You can drop your real images into the <code className="bg-white px-1.5 py-0.5 rounded font-mono text-[11px] text-slate-800 border border-slate-200">/public/images/</code> folder:
          </p>
          <ul className="list-disc list-inside text-[11px] text-slate-600 space-y-0.5 pl-1 font-mono">
            <li>/public/images/Omni logo.jpeg</li>
            <li>/public/images/Dr.Divya Rao.jpeg</li>
            <li>/public/images/clinic-building.jpeg</li>
          </ul>
        </div>

        {/* 3 Upload Slots */}
        <div className="space-y-4">
          
          {/* 1. Omni Logo */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center overflow-hidden shrink-0">
                {logoState ? (
                  <img src={logoState} alt="Logo" className="w-full h-full object-contain" />
                ) : (
                  <ImageIcon className="w-6 h-6 text-slate-400" />
                )}
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#193D70]">Clinic Logo</h4>
                <p className="text-xs text-slate-500">Omni logo.jpeg (Navbar & Footer)</p>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <label className="cursor-pointer py-2 px-3.5 rounded-xl bg-[#2798CC] hover:bg-[#1f80ad] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-2xs">
                <Upload className="w-3.5 h-3.5" />
                <span>{logoState ? 'Replace' : 'Upload'} Logo</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileUpload('omni_clinic_logo', setLogoState, e)}
                  className="hidden"
                />
              </label>

              {logoState && (
                <button
                  type="button"
                  onClick={() => handleRemove('omni_clinic_logo', setLogoState)}
                  className="p-2 rounded-xl text-rose-500 hover:bg-rose-50 transition-colors"
                  title="Remove uploaded logo"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* 2. Dr. Divya Rao Photo */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center overflow-hidden shrink-0">
                {doctorState ? (
                  <img src={doctorState} alt="Doctor" className="w-full h-full object-cover object-top" />
                ) : (
                  <ImageIcon className="w-6 h-6 text-slate-400" />
                )}
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#193D70]">Dr. Divya Rao Photograph</h4>
                <p className="text-xs text-slate-500">Dr.Divya Rao.jpeg (Hero & Doctor Profile)</p>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <label className="cursor-pointer py-2 px-3.5 rounded-xl bg-[#168D3D] hover:bg-[#127733] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-2xs">
                <Upload className="w-3.5 h-3.5" />
                <span>{doctorState ? 'Replace' : 'Upload'} Doctor Photo</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileUpload('omni_doctor_photo', setDoctorState, e)}
                  className="hidden"
                />
              </label>

              {doctorState && (
                <button
                  type="button"
                  onClick={() => handleRemove('omni_doctor_photo', setDoctorState)}
                  className="p-2 rounded-xl text-rose-500 hover:bg-rose-50 transition-colors"
                  title="Remove doctor photo"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* 3. Clinic Building Photo */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center overflow-hidden shrink-0">
                {buildingState ? (
                  <img src={buildingState} alt="Building" className="w-full h-full object-cover" />
                ) : (
                  <ImageIcon className="w-6 h-6 text-slate-400" />
                )}
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#193D70]">Clinic Building Photograph</h4>
                <p className="text-xs text-slate-500">clinic-building.jpeg (Hero, About, Gallery)</p>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <label className="cursor-pointer py-2 px-3.5 rounded-xl bg-[#2798CC] hover:bg-[#1f80ad] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-2xs">
                <Upload className="w-3.5 h-3.5" />
                <span>{buildingState ? 'Replace' : 'Upload'} Building Photo</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileUpload('omni_clinic_building', setBuildingState, e)}
                  className="hidden"
                />
              </label>

              {buildingState && (
                <button
                  type="button"
                  onClick={() => handleRemove('omni_clinic_building', setBuildingState)}
                  className="p-2 rounded-xl text-rose-500 hover:bg-rose-50 transition-colors"
                  title="Remove building photo"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
