import React, { useState, useEffect } from 'react';
import { Building2, MapPin, Maximize2, Navigation, Sparkles, X } from 'lucide-react';
import { CLINIC_BUILDING_PHOTO, CLINIC_CERTIFICATES_PHOTO } from './ClinicBuildingVisual';
import { CLINIC_CONTACT } from '../data/treatments';

interface GalleryItem {
  id: string;
  title: string;
  group: 'building' | 'interior';
  description: string;
  badge: string;
  imageSrc: string;
  alt: string;
  isPortrait?: boolean;
}

const BUILDING_ITEMS: GalleryItem[] = [
  {
    id: 'building-exterior',
    title: 'Clinic Building Exterior & Entrance',
    group: 'building',
    description:
      'Actual exterior entrance of Omni Dental Care & Implant Center at Borkhera Labour Chauraha, Opposite Sanjay Gandhi School, Kota, Rajasthan.',
    badge: 'Main Entrance & Signage',
    imageSrc: CLINIC_BUILDING_PHOTO,
    alt: 'Omni Dental Care clinic building exterior and entrance signage at Borkhera Labour Chauraha, Kota',
    isPortrait: true,
  },
  {
    id: 'reception-certificates',
    title: 'Clinic Entrance Wall & Credentials',
    group: 'building',
    description:
      'Inside the clinic entrance showcasing verified academic certificates, conference recognitions, and transparent consultation details.',
    badge: 'Verified Credentials Wall',
    imageSrc: CLINIC_CERTIFICATES_PHOTO,
    alt: 'Omni Dental Care interior entrance wall with framed pediatric dentistry certificates and consultation information',
    isPortrait: true,
  },
];

const INTERIOR_ITEMS: GalleryItem[] = [
  {
    id: 'treatment-room',
    title: 'Modern Treatment Operatory',
    group: 'interior',
    description:
      'Ergonomic dental chair and hygienic treatment station equipped for restorative, pediatric, and general procedures.',
    badge: 'High Hygiene Standards',
    imageSrc: '/images/operatory.jpg',
    alt: 'Modern dental treatment operatory room with ergonomic dental chair and overhead light',
  },
  {
    id: 'consultation-zone',
    title: 'Patient Consultation Area',
    group: 'interior',
    description:
      'Calm, welcoming clinical care environment designed for comfortable family consultations and treatment planning.',
    badge: 'Parent & Child Comfort',
    imageSrc: '/images/consultation.jpg',
    alt: 'Bright modern dental care suite with clean clinical seating and patient stations',
  },
  {
    id: 'sterilization-station',
    title: 'Clinical Sterilization Protocol',
    group: 'interior',
    description:
      'Dedicated sterilization and infection-control practices adhering to rigorous clinical hygiene standards for patient safety.',
    badge: '100% Sterile Protocol',
    imageSrc: '/images/sterilization.jpg',
    alt: 'Clinical hygiene and sterilization protocol environment',
  },
];

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'building' | 'interior'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  useEffect(() => {
    if (!selectedPhoto) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedPhoto(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedPhoto]);

  const showBuilding = activeFilter === 'all' || activeFilter === 'building';
  const showInterior = activeFilter === 'all' || activeFilter === 'interior';

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
              Explore our clinic building entrance and interior care spaces at Borkhera, Kota—organized separately for easy viewing.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200 self-start md:self-auto">
            <button
              onClick={() => setActiveFilter('all')}
              type="button"
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-white text-[#193D70] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Views
            </button>
            <button
              onClick={() => setActiveFilter('building')}
              type="button"
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeFilter === 'building'
                  ? 'bg-white text-[#193D70] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Clinic Building
            </button>
            <button
              onClick={() => setActiveFilter('interior')}
              type="button"
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeFilter === 'interior'
                  ? 'bg-white text-[#193D70] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Clinic Interior
            </button>
          </div>
        </div>

        <div className="space-y-12">

          {/* Subsection 1: Clinic Building & Entrance */}
          {showBuilding && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-lg bg-[#F2FAF4] text-[#168D3D] flex items-center justify-center border border-[#168D3D]/20 shrink-0">
                    <Building2 className="w-4 h-4" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-[#193D70] font-heading">
                      Clinic Building &amp; Entrance
                    </h3>
                    <p className="text-xs text-slate-500">
                      Actual clinic facade, signage, and interior entrance wall at Borkhera Labour Chauraha, Kota
                    </p>
                  </div>
                </div>

                <a
                  href={CLINIC_CONTACT.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#168D3D] hover:underline self-start sm:self-auto"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {BUILDING_ITEMS.map((item) => (
                  <div
                    key={item.id}
                    className="group rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col"
                  >
                    <div className="relative aspect-[3/4] max-h-[460px] w-full bg-slate-100 overflow-hidden">
                      <img
                        src={item.imageSrc}
                        alt={item.alt}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                        loading="lazy"
                        decoding="async"
                      />
                      <button
                        onClick={() => setSelectedPhoto(item)}
                        type="button"
                        className="absolute top-3 right-3 p-2 rounded-lg bg-white/95 text-[#193D70] shadow-xs hover:bg-white transition-colors cursor-pointer"
                        title="View full photograph"
                        aria-label={`View ${item.title}`}
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                      <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-xs text-[10px] font-bold text-[#193D70] shadow-xs">
                        {item.badge}
                      </div>
                    </div>

                    <div className="p-4 sm:p-5 text-left flex-1">
                      <h4 className="text-base font-bold text-[#193D70]">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Subsection 2: Clinic Interior & Care Spaces */}
          {showInterior && (
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-lg bg-[#F2F9FC] text-[#2798CC] flex items-center justify-center border border-[#2798CC]/20 shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-[#193D70] font-heading">
                      Clinic Interior &amp; Care Spaces
                    </h3>
                    <p className="text-xs text-slate-500">
                      Treatment operatory, patient consultation, and clinical hygiene standards
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {INTERIOR_ITEMS.map((item) => (
                  <div
                    key={item.id}
                    className="group rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col"
                  >
                    <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                      <img
                        src={item.imageSrc}
                        alt={item.alt}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />

                      <button
                        onClick={() => setSelectedPhoto(item)}
                        type="button"
                        className="absolute top-3 right-3 p-1.5 rounded-lg bg-white/90 text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity shadow-xs hover:bg-white cursor-pointer"
                        title="View larger photo"
                        aria-label={`View ${item.title}`}
                      >
                        <Maximize2 className="w-4 h-4 text-[#193D70]" />
                      </button>

                      <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-xs text-[10px] font-bold text-[#193D70] shadow-xs">
                        {item.badge}
                      </div>
                    </div>

                    <div className="p-4 sm:p-5 text-left flex-1">
                      <h4 className="text-sm font-bold text-[#193D70]">{item.title}</h4>
                      <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footnote about clinic photos */}
        <div className="mt-10 p-4 rounded-xl bg-[#F2F9FC] border border-[#2798CC]/20 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 gap-3">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#2798CC] shrink-0" />
            <span>
              Actual clinic facility located at <strong>Borkhera Labour Chauraha, Opposite Sanjay Gandhi School, Kota</strong>.
            </span>
          </div>
          <span className="text-[11px] text-slate-500">
            Representative clinical treatment room views shown for patient reference.
          </span>
        </div>

        {/* Lightbox / Details Modal */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-xs animate-fadeIn"
            onClick={() => setSelectedPhoto(null)}
            role="dialog"
            aria-modal="true"
            aria-label={selectedPhoto.title}
          >
            <div
              className="bg-white rounded-2xl max-w-2xl w-full p-5 sm:p-6 shadow-2xl border border-slate-100 text-left max-h-[92vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="text-xs font-semibold text-[#168D3D]">{selectedPhoto.badge}</span>
                  <h3 className="text-xl font-bold text-[#193D70] font-heading">{selectedPhoto.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedPhoto(null)}
                  type="button"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                  aria-label="Close preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="rounded-xl overflow-hidden mb-4 bg-slate-100 flex items-center justify-center">
                <img
                  src={selectedPhoto.imageSrc}
                  alt={selectedPhoto.alt}
                  className={
                    selectedPhoto.isPortrait
                      ? 'max-h-[68vh] w-auto mx-auto object-contain rounded-xl'
                      : 'w-full max-h-[65vh] object-cover object-center rounded-xl'
                  }
                />
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedPhoto.description}
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};


