import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Calendar, MapPin, Clock } from 'lucide-react';
import { ClinicLogo } from './ClinicLogo';
import { CLINIC_CONTACT } from '../data/treatments';

interface NavbarProps {
  onBookAppointmentClick: () => void;
  onManageAssetsClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onBookAppointmentClick,
  onManageAssetsClick
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Treatments', href: '#treatments' },
    { label: 'Our Doctor', href: '#doctor' },
    { label: 'Clinic Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact & Map', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-200">
      {/* Top Emergency / Contact Utility Bar */}
      <div className="bg-[#193D70] text-white text-xs py-2 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href={`tel:+91${CLINIC_CONTACT.phone}`}
              className="flex items-center gap-1.5 hover:text-[#2798CC] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#2798CC]" />
              <span>Call: +91 85280 43685</span>
            </a>
            <div className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#168D3D]" />
              <span>Borkhera Labour Chauraha, Kota, Rajasthan</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-[#2798CC]" />
              <span>Mon-Sat: 10 AM - 2 PM & 5 PM - 8:30 PM</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onManageAssetsClick}
              type="button"
              className="flex items-center gap-1.5 text-sky-200 hover:text-white transition-colors cursor-pointer"
              title="Upload or manage clinic logo and photographs"
            >
              <span>Manage Clinic Photos</span>
            </button>
            <span className="text-white/30">|</span>
            <a
              href={CLINIC_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-300 hover:text-white transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
            </a>
            <span className="text-white/30">|</span>
            <a
              href={CLINIC_CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-[#2798CC] transition-colors"
            >
              @dentalcare_omni
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-2.5'
            : 'bg-white py-3.5 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="group flex items-center">
            <ClinicLogo />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-[#2798CC] transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2798CC] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right Action: Book Appointment CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:+91${CLINIC_CONTACT.phone}`}
              className="p-2 rounded-xl text-slate-700 hover:bg-[#F2F9FC] hover:text-[#2798CC] transition-colors lg:hidden"
              aria-label="Call clinic"
            >
              <Phone className="w-5 h-5" />
            </a>

            <button
              onClick={onBookAppointmentClick}
              type="button"
              className="inline-flex items-center gap-2 bg-[#2798CC] hover:bg-[#1f80ad] text-white text-sm font-semibold px-4.5 py-2.5 rounded-xl shadow-xs transition-all active:scale-[0.98] cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white/98 backdrop-blur-md px-4 pt-3 pb-6 shadow-lg animate-fadeIn">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-medium text-slate-800 hover:text-[#2798CC] hover:bg-[#F2F9FC] rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onBookAppointmentClick();
                  }}
                  type="button"
                  className="w-full flex items-center justify-center gap-2 bg-[#2798CC] hover:bg-[#1f80ad] text-white py-3 px-4 rounded-xl font-semibold shadow-xs"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book an Appointment</span>
                </button>

                <div className="grid grid-cols-2 gap-2 mt-1">
                  <a
                    href={`tel:+91${CLINIC_CONTACT.phone}`}
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#2798CC]" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href={CLINIC_CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[#F2FAF4] text-[#168D3D] border border-emerald-200 text-xs font-semibold"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                {onManageAssetsClick && (
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onManageAssetsClick();
                    }}
                    className="mt-1 w-full py-2 px-3 text-center text-xs text-sky-700 hover:text-sky-900 font-medium"
                  >
                    Manage Clinic Photographs & Logo
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
