import React from 'react';
import {
  Phone,
  Mail,
  Instagram,
  MessageCircle,
  Clock,
  MapPin,
  ExternalLink,
  Navigation,
  School,
  Car
} from 'lucide-react';
import { CLINIC_CONTACT } from '../data/treatments';

export const ContactSection: React.FC = () => {
  const whatsappChatUrl = `${CLINIC_CONTACT.whatsappUrl}?text=${encodeURIComponent(
    CLINIC_CONTACT.defaultQrMessage
  )}`;
  const googleMapsEmbedUrl =
    'https://maps.google.com/maps?q=Omni+Dental+Care+Borkhera+Labour+Chauraha+Opposite+Sanjay+Gandhi+School+Kota+Rajasthan&t=&z=16&ie=UTF8&iwloc=&output=embed';

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#F2F9FC]/40 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-[#168D3D] rounded-full text-xs font-semibold mb-2 border border-[#168D3D]/20 shadow-2xs">
            <MapPin className="w-3.5 h-3.5 text-[#2798CC]" />
            <span>Location & Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#193D70] font-heading">
            Visit & Contact Omni Dental Care
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Reach out by phone, WhatsApp, email, or visit our clinic at Borkhera Labour Chauraha in Kota.
          </p>
        </div>

        {/* Row 1: 4 Contact Cards + Address & Consultation Hours */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: 4 Contact Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            
            {/* Phone Card */}
            <a
              href={`tel:+91${CLINIC_CONTACT.phone}`}
              className="p-5 rounded-2xl bg-white border border-[#2798CC]/25 hover:border-[#2798CC] shadow-2xs hover:shadow-sm transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#F2F9FC] text-[#2798CC] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Phone Call</span>
                <p className="text-base font-extrabold text-[#193D70] mt-1 group-hover:text-[#2798CC] transition-colors">
                  +91 {CLINIC_CONTACT.phone}
                </p>
              </div>
              <p className="text-[11px] text-slate-500 mt-4">Click to call directly</p>
            </a>

            {/* WhatsApp Card */}
            <a
              href={CLINIC_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#F2FAF4] border border-[#168D3D]/25 hover:border-[#168D3D] shadow-2xs hover:shadow-sm transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white text-[#168D3D] shadow-2xs flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">WhatsApp</span>
                <p className="text-base font-extrabold text-[#193D70] mt-1 group-hover:text-[#168D3D] transition-colors">
                  +91 {CLINIC_CONTACT.phone}
                </p>
              </div>
              <p className="text-[11px] text-emerald-700 font-medium mt-4 flex items-center gap-1">
                <span>Chat on WhatsApp</span>
                <ExternalLink className="w-3 h-3" />
              </p>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${CLINIC_CONTACT.email}`}
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#2798CC]/40 shadow-2xs hover:shadow-sm transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#F2F9FC] text-[#193D70] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Inquiry</span>
                <p className="text-xs sm:text-sm font-bold text-[#193D70] mt-1 break-all group-hover:text-[#2798CC] transition-colors">
                  {CLINIC_CONTACT.email}
                </p>
              </div>
              <p className="text-[11px] text-slate-500 mt-4">Send clinic email</p>
            </a>

            {/* Instagram Card */}
            <a
              href={CLINIC_CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#2798CC]/40 shadow-2xs hover:shadow-sm transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-pink-500 text-white shadow-xs flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <Instagram className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Instagram</span>
                <p className="text-sm font-bold text-[#193D70] mt-1 group-hover:text-[#2798CC] transition-colors">
                  {CLINIC_CONTACT.instagram}
                </p>
              </div>
              <p className="text-[11px] text-slate-500 mt-4 flex items-center gap-1">
                <span>Follow updates</span>
                <ExternalLink className="w-3 h-3" />
              </p>
            </a>

          </div>

          {/* Right: Clinic Address, Consultation Hours & Simple WhatsApp Button */}
          <div className="lg:col-span-5 p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between text-left gap-6">
            <div className="space-y-5">
              {/* Physical Location */}
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  <MapPin className="w-4 h-4 text-[#2798CC]" />
                  <span>Clinic Address</span>
                </div>
                <p className="text-sm font-bold text-[#193D70]">
                  Omni Dental Care
                </p>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  Borkhera Labour Chauraha,<br />
                  Opposite Sanjay Gandhi School,<br />
                  Kota, Rajasthan, India.
                </p>
              </div>

              <div className="border-t border-slate-100" />

              {/* Configurable Opening Hours */}
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 mb-2.5">
                  <Clock className="w-4 h-4 text-[#168D3D]" />
                  <span>Clinic Consultation Hours</span>
                </div>
                <div className="text-xs sm:text-sm text-slate-700 space-y-1.5">
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="font-medium">Monday - Saturday:</span>
                    <span className="font-semibold text-[#193D70]">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="font-medium">Evening Shift:</span>
                    <span className="font-semibold text-[#193D70]">5:00 PM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1 text-slate-500">
                    <span>Sunday:</span>
                    <span className="font-medium italic">By Prior Appointment</span>
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 mt-2">
                  *Hours subject to prior appointment confirmation with clinic.
                </p>
              </div>
            </div>

            {/* Simple WhatsApp Contact Button */}
            <div className="pt-4 border-t border-slate-100">
              <a
                href={whatsappChatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#168D3D] hover:bg-[#127733] text-white text-sm font-semibold transition-all shadow-xs hover:shadow active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Message Us on WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>
          </div>

        </div>

        {/* Row 2: Integrated Google Maps Panel */}
        <div
          id="location"
          className="mt-8 bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Interactive Google Maps Embed */}
            <div className="lg:col-span-8 min-h-[280px] sm:min-h-[320px] bg-slate-100 relative">
              <iframe
                title="Omni Dental Care Location Map - Borkhera Labour Chauraha, Kota"
                src={googleMapsEmbedUrl}
                className="w-full h-full min-h-[280px] sm:min-h-[320px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Landmarks & Directions Action */}
            <div className="lg:col-span-4 p-6 sm:p-7 flex flex-col justify-between text-left border-t lg:border-t-0 lg:border-l border-slate-100 bg-white">
              <div>
                <h3 className="text-lg font-bold text-[#193D70] font-heading">
                  Easy Clinic Access
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Conveniently located on the main Borkhera road in Kota.
                </p>

                <div className="mt-5 space-y-3.5">
                  <div className="flex items-start gap-2.5 text-xs text-slate-600">
                    <School className="w-4 h-4 text-[#168D3D] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800 block">Landmark</strong>
                      Opposite Sanjay Gandhi School, Borkhera Labour Chauraha.
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs text-slate-600">
                    <Car className="w-4 h-4 text-[#2798CC] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800 block">Parking & Accessibility</strong>
                      Ground-level roadside access with convenient nearby parking.
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href={CLINIC_CONTACT.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full bg-[#2798CC] hover:bg-[#1f80ad] text-white text-sm font-semibold px-5 py-3 rounded-xl shadow-xs transition-all active:scale-[0.98]"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};


