import React, { useState } from 'react';
import { Building2, Sparkles, MapPin, Maximize2, Shield, Heart } from 'lucide-react';
import { ClinicBuildingVisual } from './ClinicBuildingVisual';

interface GalleryItem {
  id: string;
  title: string;
  category: 'exterior' | 'operatory' | 'consultation' | 'sterilization';
  description: string;
  badge: string;
}

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'exterior' | 'interior'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'building-exterior',
      title: 'Clinic Building Exterior',
      category: 'exterior',
      description: 'Exterior view of Omni Dental Care at Borkhera Labour Chauraha, Opposite Sanjay Gandhi School, Kota, Rajasthan.',
      badge: 'Borkhera Landmark'
    },
    {
      id: 'treatment-room',
      title: 'Modern Treatment Operatory',
      category: 'operatory',
      description: 'Ergonomic dental chair and hygienic treatment station equipped for restorative, pediatric, and general procedures.',
      badge: 'High Hygiene Standards'
    },
    {
      id: 'consultation-zone',
      title: 'Patient Consultation Area',
      category: 'consultation',
      description: 'Comfortable consultation space where Dr. Divya Rao explains diagnostic plans and answers parent questions.',
      badge: 'Parent & Child Comfort'
    },
    {
      id: 'sterilization-station',
      title: 'Clinical Sterilization Protocol',
      category: 'sterilization',
      description: 'Dedicated sterilization zone adhering to rigorous clinical autoclave and hygiene standards for safety.',
      badge: '100% Sterile Protocol'
    }
  ];

  const filteredItems = galleryItems.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'exterior') return item.category === 'exterior';
    if (activeFilter === 'interior') return item.category !== 'exterior';
    return true;
  });

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F2F9FC] text-[#2798CC] rounded-full text-xs font-semibold mb-2 border border-[#2798CC]/20">
              <Building2 className="w-3.5 h-3.5" />
              <span>Clinic Environment</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#193D70] font-heading">
              Omni Dental Care Gallery
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-xl">
              Explore our clinic infrastructure at Borkhera, Kota. Designed for hygiene, patient comfort, and a calming pediatric-friendly experience.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200 self-start md:self-auto">
            <button
              onClick={() => setActiveFilter('all')}
              type="button"
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeFilter === 'all'
                  ? 'bg-white text-[#193D70] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Views
            </button>
            <button
              onClick={() => setActiveFilter('exterior')}
              type="button"
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeFilter === 'exterior'
                  ? 'bg-white text-[#193D70] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Clinic Exterior
            </button>
            <button
              onClick={() => setActiveFilter('interior')}
              type="button"
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeFilter === 'interior'
                  ? 'bg-white text-[#193D70] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Treatment & Care
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              {/* Image / Graphic Display */}
              <div className="relative h-56 bg-[#F2F9FC] overflow-hidden">
                {item.category === 'exterior' ? (
                  <ClinicBuildingVisual className="w-full h-full rounded-none border-none shadow-none" showBadge={false} />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#F2F9FC] to-[#F2FAF4]">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-slate-200 flex items-center justify-center text-[#2798CC] mb-3">
                      {item.category === 'operatory' && <Sparkles className="w-6 h-6 text-[#168D3D]" />}
                      {item.category === 'consultation' && <Heart className="w-6 h-6 text-[#2798CC]" />}
                      {item.category === 'sterilization' && <Shield className="w-6 h-6 text-[#193D70]" />}
                    </div>
                    <p className="text-xs font-bold text-[#193D70]">{item.title}</p>
                    <p className="text-[11px] text-slate-500 mt-1">Omni Dental Care · Kota Facility</p>
                  </div>
                )}

                {/* Overlay Zoom Button */}
                <button
                  onClick={() => setSelectedPhoto(item)}
                  type="button"
                  className="absolute top-3 right-3 p-1.5 rounded-lg bg-white/90 text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity shadow-xs hover:bg-white"
                  title="View details"
                >
                  <Maximize2 className="w-4 h-4 text-[#193D70]" />
                </button>

                {/* Badge */}
                <div className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-md bg-white/95 backdrop-blur-xs text-[10px] font-bold text-[#193D70] shadow-xs">
                  {item.badge}
                </div>
              </div>

              {/* Card Footer Text */}
              <div className="p-4 text-left">
                <h4 className="text-sm font-bold text-[#193D70]">{item.title}</h4>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Note about real clinic photos */}
        <div className="mt-8 p-4 rounded-xl bg-[#F2F9FC] border border-[#2798CC]/20 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 gap-3">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#2798CC] shrink-0" />
            <span>
              Real clinic facility located at <strong>Borkhera Labour Chauraha, Opposite Sanjay Gandhi School, Kota</strong>.
            </span>
          </div>
          <span className="text-[11px] text-slate-500">
            Additional clinic photos are verified directly by clinic administration.
          </span>
        </div>

        {/* Lightbox / Details Modal */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-slate-100 text-left"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs font-semibold text-[#168D3D]">{selectedPhoto.badge}</span>
                  <h3 className="text-xl font-bold text-[#193D70] font-heading">{selectedPhoto.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="p-1 rounded-md text-slate-400 hover:text-slate-700"
                >
                  ✕
                </button>
              </div>

              <div className="rounded-xl overflow-hidden mb-4 bg-slate-100 min-h-[260px] flex items-center justify-center">
                {selectedPhoto.category === 'exterior' ? (
                  <ClinicBuildingVisual className="w-full h-64 border-none shadow-none" />
                ) : (
                  <div className="p-8 text-center">
                    <Sparkles className="w-10 h-10 text-[#168D3D] mx-auto mb-2" />
                    <p className="text-sm font-semibold text-[#193D70]">{selectedPhoto.title}</p>
                    <p className="text-xs text-slate-500 mt-1">Omni Dental Care Kota Clinical Facility</p>
                  </div>
                )}
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{selectedPhoto.description}</p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
