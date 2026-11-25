import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Calendar } from 'lucide-react';
import { ClinicLogo } from './ClinicLogo';
import { CLINIC_CONTACT } from '../data/treatments';

interface NavbarProps {
  onBookAppointmentClick: () => void;
  onManageAssetsClick?: () => void;
}

const NAV_LINKS = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Treatments', href: '#treatments', id: 'treatments' },
  { label: 'Doctors', href: '#doctor', id: 'doctor' },
  { label: 'Gallery', href: '#gallery', id: 'gallery' },
  { label: 'Reviews', href: '#reviews', id: 'reviews' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export const Navbar: React.FC<NavbarProps> = ({
  onBookAppointmentClick,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);

      const scrollPosition = window.scrollY + 120;
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_LINKS[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(NAV_LINKS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80'
          : 'bg-white border-b border-slate-100'
      }`}
    >
      <nav
        aria-label="Primary Navigation"
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'py-2.5' : 'py-3.5'
        }`}
      >
        {/* Clinic Logo & Branding */}
        <a href="#home" className="group flex items-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2798CC] rounded-xl">
          <ClinicLogo />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-7">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`text-sm font-medium py-1.5 relative transition-colors whitespace-nowrap group ${
                  isActive
                    ? 'text-[#2798CC] font-semibold'
                    : 'text-[#193D70]/85 hover:text-[#2798CC]'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#2798CC] rounded-full transition-all duration-200 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* Right Action: Prominent Book Appointment CTA */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onBookAppointmentClick}
            type="button"
            className="inline-flex items-center gap-2 bg-[#2798CC] hover:bg-[#1f80ad] text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-xs hover:shadow-sm transition-all active:scale-[0.98] cursor-pointer whitespace-nowrap"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            type="button"
            className="p-2.5 rounded-xl text-[#193D70] hover:bg-[#F2F9FC] hover:text-[#2798CC] transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Responsive Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white/98 backdrop-blur-md px-4 pt-3 pb-5 shadow-lg">
          <div className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3.5 py-2.5 text-sm font-medium rounded-xl transition-colors ${
                    isActive
                      ? 'bg-[#F2F9FC] text-[#2798CC] font-semibold'
                      : 'text-[#193D70] hover:text-[#2798CC] hover:bg-[#F2F9FC]/70'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookAppointmentClick();
              }}
              type="button"
              className="w-full flex items-center justify-center gap-2 bg-[#2798CC] hover:bg-[#1f80ad] text-white text-sm py-3 px-4 rounded-xl font-semibold shadow-xs transition-colors cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:+91${CLINIC_CONTACT.phone}`}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-slate-200 text-xs font-semibold text-[#193D70] hover:bg-[#F2F9FC] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#2798CC]" />
                <span>Call Clinic</span>
              </a>
              <a
                href={`${CLINIC_CONTACT.whatsappUrl}?text=${encodeURIComponent(CLINIC_CONTACT.defaultQrMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#F2FAF4] text-[#168D3D] border border-[#168D3D]/20 text-xs font-semibold hover:bg-[#168D3D] hover:text-white transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

