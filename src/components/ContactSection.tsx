import React from 'react';
import {
  Phone,
  Mail,
  Instagram,
  MessageCircle,
  Clock,
  MapPin,
  ExternalLink,
  CalendarCheck
} from 'lucide-react';
import { CLINIC_CONTACT } from '../data/treatments';
import { QRCodeBooking } from './QRCodeBooking';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F2FAF4] text-[#168D3D] rounded-full text-xs font-semibold mb-2 border border-[#168D3D]/20">
            <CalendarCheck className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#193D70] font-heading">
            Contact Omni Dental Care
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Reach out directly by phone, WhatsApp, or email. We are here to assist with any dental inquiries and consultations.
          </p>
        </div>

        {/* 2-Column Contact Info + QR Code Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Cards & Hours */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Quick Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Phone Card */}
              <a
                href={`tel:+91${CLINIC_CONTACT.phone}`}
                className="p-5 rounded-2xl bg-[#F2F9FC] border border-[#2798CC]/20 hover:border-[#2798CC] hover:shadow-sm transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white text-[#2798CC] shadow-xs flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Phone Call</span>
                  <p className="text-base font-extrabold text-[#193D70] mt-1 group-hover:text-[#2798CC] transition-colors">
                    +91 {CLINIC_CONTACT.phone}
                  </p>
                </div>
                <p className="text-[11px] text-slate-500 mt-3">Click to call directly</p>
              </a>

              {/* WhatsApp Card */}
              <a
                href={CLINIC_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-[#F2FAF4] border border-[#168D3D]/20 hover:border-[#168D3D] hover:shadow-sm transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white text-[#168D3D] shadow-xs flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">WhatsApp</span>
                  <p className="text-base font-extrabold text-[#193D70] mt-1 group-hover:text-[#168D3D] transition-colors">
                    +91 {CLINIC_CONTACT.phone}
                  </p>
                </div>
                <p className="text-[11px] text-emerald-700 font-medium mt-3 flex items-center gap-1">
                  <span>Chat on WhatsApp</span>
                  <ExternalLink className="w-3 h-3" />
                </p>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${CLINIC_CONTACT.email}`}
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#2798CC]/40 hover:shadow-sm transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#F2F9FC] text-[#193D70] shadow-xs flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Inquiry</span>
                  <p className="text-xs sm:text-sm font-bold text-[#193D70] mt-1 break-all group-hover:text-[#2798CC] transition-colors">
                    {CLINIC_CONTACT.email}
                  </p>
                </div>
                <p className="text-[11px] text-slate-500 mt-3">Send clinic email</p>
              </a>

              {/* Instagram Card */}
              <a
                href={CLINIC_CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#2798CC]/40 hover:shadow-sm transition-all group flex flex-col justify-between"
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
                <p className="text-[11px] text-slate-500 mt-3 flex items-center gap-1">
                  <span>Follow updates</span>
                  <ExternalLink className="w-3 h-3" />
                </p>
              </a>

            </div>

            {/* Address & Configurable Hours Box */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Physical Location */}
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    <MapPin className="w-4 h-4 text-[#2798CC]" />
                    <span>Clinic Location</span>
                  </div>
                  <p className="text-sm font-bold text-[#193D70]">
                    Omni Dental Care
                  </p>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Borkhera Labour Chauraha,<br />
                    Opposite Sanjay Gandhi School,<br />
                    Kota, Rajasthan, India.
                  </p>
                </div>

                {/* Configurable Opening Hours */}
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    <Clock className="w-4 h-4 text-[#168D3D]" />
                    <span>Clinic Consultation Hours</span>
                  </div>
                  <div className="text-xs text-slate-700 space-y-1">
                    <div className="flex justify-between py-0.5 border-b border-slate-200/60">
                      <span className="font-medium">Monday - Saturday:</span>
                      <span className="font-semibold text-[#193D70]">10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between py-0.5 border-b border-slate-200/60">
                      <span className="font-medium">Evening Shift:</span>
                      <span className="font-semibold text-[#193D70]">5:00 PM - 8:30 PM</span>
                    </div>
                    <div className="flex justify-between py-0.5 text-slate-500">
                      <span>Sunday:</span>
                      <span className="font-medium italic">By Prior Appointment</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-slate-500 mt-2">
                    *Hours subject to prior appointment confirmation with clinic.
                  </p>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column: QR Code Feature in Contact Section (Explicit Requirement) */}
          <div className="lg:col-span-5">
            <QRCodeBooking />
          </div>

        </div>

      </div>
    </section>
  );
};
