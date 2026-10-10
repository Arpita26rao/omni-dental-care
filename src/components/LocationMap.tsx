import React from 'react';
import { MapPin, Navigation, Compass, ExternalLink, School, Car } from 'lucide-react';
import { CLINIC_CONTACT } from '../data/treatments';

export const LocationMap: React.FC = () => {
  return (
    <section id="location" className="py-16 md:py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-[#193D70] rounded-full text-xs font-semibold mb-2 border border-slate-200">
            <Compass className="w-3.5 h-3.5 text-[#2798CC]" />
            <span>Clinic Location & Accessibility</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#193D70] font-heading">
            Visit Omni Dental Care in Kota
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Easily accessible from all major parts of Kota via Borkhera Labour Chauraha.
          </p>
        </div>

        {/* Location Display Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
            
            {/* Left Info Panel */}
            <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between text-left">
              <div>
                <div className="flex items-center gap-2 text-[#2798CC] text-xs font-bold uppercase tracking-wider mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>Physical Address</span>
                </div>

                <h3 className="text-2xl font-extrabold text-[#193D70] font-heading">
                  Omni Dental Care
                </h3>

                {/* Exact Address as requested */}
                <div className="mt-4 p-4 rounded-xl bg-[#F2F9FC] border border-[#2798CC]/20 text-sm text-slate-700 leading-relaxed space-y-1">
                  <p className="font-bold text-[#193D70]">Borkhera Labour Chauraha,</p>
                  <p className="text-slate-700 font-medium">Opposite Sanjay Gandhi School,</p>
                  <p className="text-slate-600">Kota, Rajasthan, India.</p>
                </div>

                {/* Key Landmarks */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-2.5 text-xs text-slate-600">
                    <School className="w-4 h-4 text-[#168D3D] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800">Direct Landmark:</strong> Directly opposite Sanjay Gandhi School at the Labour Chauraha junction.
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs text-slate-600">
                    <Car className="w-4 h-4 text-[#2798CC] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800">Parking & Access:</strong> Ground-level roadside access with convenient parking for patients and two-wheelers.
                    </div>
                  </div>
                </div>
              </div>

              {/* Get Directions Button */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3">
                <a
                  href={CLINIC_CONTACT.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#2798CC] hover:bg-[#1f80ad] text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-xs transition-all active:scale-[0.98] w-full sm:w-auto"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>
            </div>

            {/* Right Map Visual Card */}
            <div className="md:col-span-6 bg-slate-100 relative min-h-[300px] flex flex-col items-center justify-center p-6 border-t md:border-t-0 md:border-l border-slate-200">
              {/* Map Illustration & Interactive Overlay */}
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-sky-50 via-slate-50 to-emerald-50 border border-slate-200 p-6 flex flex-col items-center justify-center text-center relative overflow-hidden group">
                {/* Background grid lines */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#193D70_1px,transparent_1px)] [background-size:20px_20px]" />
                
                {/* Center marker */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-[#193D70] text-white flex items-center justify-center shadow-lg border-2 border-white animate-bounce">
                    <MapPin className="w-7 h-7 text-[#2798CC]" />
                  </div>
                  <div className="mt-3 bg-white/95 backdrop-blur-xs px-4 py-2 rounded-xl shadow-md border border-slate-200">
                    <p className="text-xs font-extrabold text-[#193D70]">Omni Dental Care</p>
                    <p className="text-[11px] text-slate-500 font-medium">Borkhera Labour Chauraha · Kota</p>
                  </div>
                </div>

                {/* Map Action Prompt */}
                <div className="relative z-10 mt-6">
                  <a
                    href={CLINIC_CONTACT.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#168D3D] bg-white px-3 py-1.5 rounded-lg border border-emerald-200 shadow-2xs hover:bg-emerald-50 transition-colors"
                  >
                    <span>Open in Google Maps App</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
