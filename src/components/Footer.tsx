import React from 'react';
import { Phone, Mail, Instagram, MapPin, Calendar, MessageCircle, Heart, ArrowUp } from 'lucide-react';
import { ClinicLogo } from './ClinicLogo';
import { CLINIC_CONTACT, TREATMENTS } from '../data/treatments';

interface FooterProps {
  onBookAppointmentClick: () => void;
  onManageAssetsClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onBookAppointmentClick,
  onManageAssetsClick
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#193D70] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10 text-left">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <ClinicLogo variant="white" />
            
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Omni Dental Care is a multi-speciality dental clinic located at Borkhera Labour Chauraha, Kota, Rajasthan. Led by Consultant Pedodontist Dr. Divya Rao (B.D.S., M.D.S.), providing gentle, personalized oral healthcare for children and adults.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={CLINIC_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#168D3D] flex items-center justify-center text-white transition-colors"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={CLINIC_CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#2798CC] flex items-center justify-center text-white transition-colors"
                title="Follow on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={`tel:+91${CLINIC_CONTACT.phone}`}
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#2798CC] flex items-center justify-center text-white transition-colors"
                title="Call Clinic"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2798CC]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-white transition-colors">Treatments</a>
              </li>
              <li>
                <a href="#doctor" className="hover:text-white transition-colors">Dr. Divya Rao</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">Clinic Gallery</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">Reviews</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">FAQs</a>
              </li>
              {onManageAssetsClick && (
                <li>
                  <button
                    onClick={onManageAssetsClick}
                    type="button"
                    className="text-[#2798CC] hover:text-white text-xs transition-colors cursor-pointer text-left"
                  >
                    Manage Clinic Photos
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Key Treatments */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2798CC]">
              Speciality Treatments
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {TREATMENTS.slice(0, 5).map((t) => (
                <li key={t.id}>
                  <a href="#treatments" className="hover:text-white transition-colors">
                    {t.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Appointment CTA */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2798CC]">
              Contact Details
            </h4>
            
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#2798CC] shrink-0 mt-0.5" />
                <span>
                  Borkhera Labour Chauraha,<br />
                  Opp. Sanjay Gandhi School, Kota, Rajasthan
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#168D3D] shrink-0" />
                <a href={`tel:+91${CLINIC_CONTACT.phone}`} className="hover:text-white">
                  +91 {CLINIC_CONTACT.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#2798CC] shrink-0" />
                <a href={`mailto:${CLINIC_CONTACT.email}`} className="hover:text-white break-all">
                  {CLINIC_CONTACT.email}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
                <a
                  href={CLINIC_CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  {CLINIC_CONTACT.instagram}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onBookAppointmentClick}
                type="button"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#2798CC] hover:bg-[#1f80ad] text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment Online</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            © {new Date().getFullYear()} Omni Dental Care. All rights reserved. Borkhera, Kota, Rajasthan.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-slate-400">
              Personalized Dental Care for Healthier Smiles
            </span>
            <button
              onClick={scrollToTop}
              type="button"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
